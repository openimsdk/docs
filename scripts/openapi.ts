import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const postmanSchema = 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json';
const httpMethods = new Set(['delete', 'get', 'head', 'options', 'patch', 'post', 'put', 'trace']);

export class PlatformApiError extends Error {
  readonly name: string = 'PlatformApiError';
}

export class PostmanCollectionUnavailableError extends PlatformApiError {
  readonly name = 'PostmanCollectionUnavailableError';

  constructor(readonly collectionId: string) {
    super(
      `Postman collection does not exist or is not accessible: ${collectionId}. Verify the configured collection ID and that the account owning POSTMAN_API_KEY has edit access.`,
    );
  }
}

export type OpenApiProjectionOptions = { readonly category?: string };

export type PostmanCollection = {
  readonly info: Record<string, unknown>;
  readonly item: readonly unknown[];
  readonly [key: string]: unknown;
};

export type PlatformApiCommand =
  | {
      readonly command: 'export';
      readonly inputPath: string;
      readonly outputPath: string;
      readonly category?: string;
    }
  | { readonly command: 'help' }
  | {
      readonly command: 'publish-postman';
      readonly targetId: string;
      readonly inputPath: string;
    }
  | {
      readonly command: 'publish-apifox';
      readonly targetId: string;
      readonly moduleId: string;
      readonly inputPath: string;
    };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const openApiDocumentSchema = z
  .object({
    openapi: z.string().min(1),
    paths: z.record(z.string(), z.unknown()),
    tags: z.unknown().optional(),
  })
  .passthrough();
const openApiOperationSchema = z
  .object({ tags: z.array(z.string()).optional(), 'x-export-category': z.string().optional() })
  .passthrough();

function parsedOpenApiDocument(value: unknown): z.infer<typeof openApiDocumentSchema> {
  const result = openApiDocumentSchema.safeParse(value);
  if (result.success) return result.data;
  throw new PlatformApiError('OpenAPI input must be self-contained bundled JSON; bundle first.');
}

function projectOperation(
  value: unknown,
  options: OpenApiProjectionOptions,
): Record<string, unknown> | undefined {
  const result = openApiOperationSchema.safeParse(value);
  if (!result.success)
    throw new PlatformApiError('OpenAPI operations must be objects in bundled JSON; bundle first.');
  if ('$ref' in result.data)
    throw new PlatformApiError('OpenAPI operations must be self-contained objects; bundle first.');
  if (options.category !== undefined && result.data['x-export-category'] !== options.category)
    return undefined;
  const operation = { ...result.data };
  delete operation['x-export-category'];
  return operation;
}

export function projectOpenApiDocument(
  value: unknown,
  options: OpenApiProjectionOptions,
): Record<string, unknown> {
  const document = parsedOpenApiDocument(value);
  const paths: Record<string, unknown> = {};
  let operationCount = 0;
  for (const [path, value] of Object.entries(document.paths)) {
    if (!isRecord(value) || '$ref' in value)
      throw new PlatformApiError('OpenAPI paths must be self-contained objects; bundle first.');
    const pathItem: Record<string, unknown> = {};
    let hasOperation = false;
    for (const [key, entry] of Object.entries(value)) {
      if (!httpMethods.has(key)) {
        pathItem[key] = entry;
        continue;
      }
      const operation = projectOperation(entry, options);
      if (operation === undefined) continue;
      pathItem[key] = operation;
      hasOperation = true;
      operationCount += 1;
    }
    if (hasOperation) paths[path] = pathItem;
  }
  if (options.category !== undefined && operationCount === 0)
    throw new PlatformApiError(
      `OpenAPI contains no operations in export category ${options.category}.`,
    );
  return { ...document, paths };
}

export function parseOpenApiJson(source: string, sourcePath: string): Record<string, unknown> {
  try {
    return projectOpenApiDocument(JSON.parse(source), {});
  } catch (error) {
    if (error instanceof SyntaxError)
      throw new PlatformApiError(
        `Invalid OpenAPI import: ${sourcePath}: valid bundled JSON required.`,
      );
    if (error instanceof PlatformApiError)
      throw new PlatformApiError(`Invalid OpenAPI import: ${sourcePath}: ${error.message}`);
    throw error;
  }
}

async function writeJsonAtomically(path: string, value: unknown): Promise<void> {
  const directory = await mkdtemp(join(dirname(path), `.${basename(path)}-`));
  const temporaryPath = join(directory, 'document.json');
  try {
    await writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`);
    await rename(temporaryPath, path);
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}

export async function exportOpenApi(
  inputPath: string,
  outputPath: string,
  options: OpenApiProjectionOptions,
): Promise<void> {
  let source: unknown;
  try {
    source = JSON.parse(await readFile(inputPath, 'utf8'));
  } catch (error) {
    if (error instanceof SyntaxError)
      throw new PlatformApiError('OpenAPI input must be valid bundled JSON; bundle first.');
    throw error;
  }
  await writeJsonAtomically(outputPath, projectOpenApiDocument(source, options));
}

export async function listFiles(directory: string): Promise<string[]> {
  return (
    await Promise.all(
      (await readdir(directory, { withFileTypes: true })).map(async (entry) => {
        const path = resolve(directory, entry.name);
        if (entry.isDirectory()) return listFiles(path);
        return entry.isFile() ? [path] : [];
      }),
    )
  ).flat();
}

async function listOpenApiFiles(root: string): Promise<string[]> {
  const files = await Promise.all(
    (await listFiles(resolve(root, 'api'))).map(async (path): Promise<string[]> => {
      if (!/\.(?:json|ya?ml)$/i.test(path)) return [];
      const content = await readFile(path, 'utf8');
      if (/\.ya?ml$/i.test(path))
        return /^(?:openapi|swagger)\s*:/m.test(content) ? [relative(root, path)] : [];
      try {
        const document: unknown = JSON.parse(content);
        return isRecord(document) &&
          (typeof document.openapi === 'string' || typeof document.swagger === 'string')
          ? [relative(root, path)]
          : [];
      } catch {
        return [relative(root, path)];
      }
    }),
  );
  return files.flat();
}

export async function lintApiOpenApiDocuments(root: string): Promise<void> {
  const paths = await listOpenApiFiles(root);
  if (paths.length === 0) throw new PlatformApiError('No OpenAPI documents found under api/.');
  const result = spawnSync(
    process.execPath,
    [
      resolve(root, 'node_modules/@redocly/cli/bin/cli.js'),
      'lint',
      '--config',
      resolve(root, 'redocly.yaml'),
      ...paths,
    ],
    { cwd: root, encoding: 'utf8', stdio: 'inherit' },
  );
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new PlatformApiError(`Redocly lint failed with exit code ${result.status ?? 'unknown'}.`);
}

const postmanPrimitivePlaceholders: Readonly<Record<string, string>> = {
  '<byte>': '<string>',
  '<long>': '<integer>',
  '<uri>': '<string>',
};

export function normalizePostmanCollection(
  value: unknown,
  property = '',
  stripPostmanIdentity = true,
): unknown {
  if (typeof value === 'string' && (property === 'body' || property === 'raw')) {
    try {
      return JSON.stringify(normalizePostmanCollection(JSON.parse(value), '', false));
    } catch (error) {
      if (error instanceof SyntaxError) return value;
      throw error;
    }
  }
  if (typeof value === 'string')
    return stripPostmanIdentity ? value : (postmanPrimitivePlaceholders[value] ?? value);
  if (Array.isArray(value))
    return value.map((entry) => normalizePostmanCollection(entry, '', stripPostmanIdentity));
  if (typeof value !== 'object' || value === null) return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(
        ([key]) =>
          !/^key_\d+$/.test(key) &&
          (!stripPostmanIdentity || (key !== '_postman_id' && key !== 'id' && key !== 'uid')),
      )
      .map(([key, entry]) => [key, normalizePostmanCollection(entry, key, stripPostmanIdentity)]),
  );
}

type AjvError = { readonly instancePath?: string; readonly message?: string };
type AjvValidator = ((value: unknown) => boolean) & {
  readonly errors?: readonly AjvError[] | null;
};
type AjvConstructor = new (options: { readonly allErrors: boolean; readonly strict: boolean }) => {
  compile(schema: unknown): AjvValidator;
};

const projectRequire = createRequire(import.meta.url);
const converterRequire = createRequire(projectRequire.resolve('openapi-to-postmanv2'));
let postmanCollectionValidator: Promise<AjvValidator> | undefined;

function schemaValidator(): Promise<AjvValidator> {
  if (postmanCollectionValidator) return postmanCollectionValidator;
  const imported: unknown = converterRequire('ajv-draft-04');
  if (typeof imported !== 'function')
    throw new PlatformApiError('Unable to load Draft-04 Postman validator.');
  const Constructor = imported as AjvConstructor;
  postmanCollectionValidator = requestJson(postmanSchema, {})
    .then((schema) => new Constructor({ allErrors: true, strict: false }).compile(schema))
    .catch((error: unknown) => {
      postmanCollectionValidator = undefined;
      throw error;
    });
  return postmanCollectionValidator;
}

export async function parsePostmanCollection(
  source: string,
  sourcePath: string,
): Promise<PostmanCollection> {
  let value: unknown;
  try {
    value = JSON.parse(source);
  } catch (error) {
    if (error instanceof SyntaxError)
      throw new PlatformApiError(`Invalid Postman Collection import: ${sourcePath}: invalid JSON.`);
    throw error;
  }
  const validatePostmanCollection = await schemaValidator();
  if (
    !validatePostmanCollection(value) ||
    !isRecord(value) ||
    !isRecord(value.info) ||
    !Array.isArray(value.item)
  ) {
    const error = validatePostmanCollection.errors?.[0];
    throw new PlatformApiError(
      `Invalid Postman Collection import: ${sourcePath}: ${error?.instancePath || '/'} ${error?.message || 'invalid collection'}.`,
    );
  }
  if (value.info.schema !== postmanSchema)
    throw new PlatformApiError(
      `Invalid Postman Collection import: ${sourcePath}: /info/schema must be ${postmanSchema}.`,
    );
  return value as PostmanCollection;
}

function runProcess(command: string, args: readonly string[]): void {
  const result = spawnSync(command, [...args], {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new PlatformApiError(`${command} failed with exit code ${result.status ?? 'unknown'}.`);
}

const deterministicRandomSource = `let state = 0x6d2b79f5;
Math.random = () => {
  state |= 0;
  state = (state + 0x6d2b79f5) | 0;
  let value = Math.imul(state ^ (state >>> 15), 1 | state);
  value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
  return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
};
`;

export async function convertOpenApiToPostman(openApi: string): Promise<PostmanCollection> {
  const directory = await mkdtemp(join(tmpdir(), 'openim-platform-api-postman-'));
  const bundlePath = join(directory, 'openapi.json');
  const collectionPath = join(directory, 'postman-collection.json');
  const randomPath = join(directory, 'deterministic-random.cjs');
  try {
    await writeFile(bundlePath, openApi);
    await writeFile(randomPath, deterministicRandomSource);
    runProcess(process.execPath, [
      '--require',
      randomPath,
      resolve(repoRoot, 'node_modules/openapi-to-postmanv2/bin/openapi2postmanv2.js'),
      '--spec',
      bundlePath,
      '--output',
      collectionPath,
      '--options',
      'parametersResolution=Schema,folderStrategy=Tags,nestedFolderHierarchy=true',
    ]);
    return await parsePostmanCollection(
      JSON.stringify(
        normalizePostmanCollection(JSON.parse(await readFile(collectionPath, 'utf8'))),
      ),
      collectionPath,
    );
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

export const postmanPublishConfigSchema = z.object({
  POSTMAN_API_KEY: z.string().min(1),
});
export const postmanCollectionIdSchema = z
  .string()
  .regex(/^\d+-[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i);

export const apifoxPublishConfigSchema = z.object({
  APIFOX_ACCESS_TOKEN: z.string().min(1),
});
export const apifoxProjectIdSchema = z.string().regex(/^\d+$/);
export const apifoxModuleIdSchema = z
  .string()
  .regex(/^\d+$/)
  .transform(Number)
  .pipe(z.number().int().positive().safe());
const apifoxCountersSchema = z
  .object({
    endpointCreated: z.number().int().nonnegative(),
    endpointFailed: z.number().int().nonnegative(),
    endpointFolderCreated: z.number().int().nonnegative(),
    endpointFolderFailed: z.number().int().nonnegative(),
    endpointFolderIgnored: z.number().int().nonnegative(),
    endpointFolderUpdated: z.number().int().nonnegative(),
    endpointIgnored: z.number().int().nonnegative(),
    endpointUpdated: z.number().int().nonnegative(),
    schemaCreated: z.number().int().nonnegative(),
    schemaFailed: z.number().int().nonnegative(),
    schemaFolderCreated: z.number().int().nonnegative(),
    schemaFolderFailed: z.number().int().nonnegative(),
    schemaFolderIgnored: z.number().int().nonnegative(),
    schemaFolderUpdated: z.number().int().nonnegative(),
    schemaIgnored: z.number().int().nonnegative(),
    schemaUpdated: z.number().int().nonnegative(),
  })
  .passthrough();
const apifoxImportResultSchema = z.object({
  data: z.object({
    counters: apifoxCountersSchema,
    errors: z.array(z.object({ message: z.string().min(1) }).passthrough()).optional(),
  }),
});

export function parseApifoxImportResult(value: unknown): void {
  const result = apifoxImportResultSchema.parse(value);
  const failed = Object.entries(result.data.counters)
    .filter(([name, count]) => name.endsWith('Failed') && count !== 0)
    .map(([name, count]) => `${name}=${count}`);
  if (failed.length > 0) throw new PlatformApiError(`Apifox import failed: ${failed.join(', ')}.`);
  const messages = (result.data.errors ?? []).map(({ message }) => message);
  if (messages.length > 0)
    throw new PlatformApiError(`Apifox reported import errors: ${messages.join('; ')}.`);
}

function retryDelay(response: Response, attempt: number): number {
  const retryAfter = response.headers.get('retry-after');
  if (retryAfter !== null) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds)) return Math.max(0, seconds * 1_000);
    const date = Date.parse(retryAfter);
    if (Number.isFinite(date)) return Math.max(0, date - Date.now());
  }
  return 250 * 2 ** attempt;
}

const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolvePromise) => setTimeout(resolvePromise, milliseconds));

async function requestJson(
  url: string,
  init: RequestInit,
  options: { readonly notFoundError?: PlatformApiError } = {},
): Promise<unknown> {
  for (let attempt = 0; ; attempt += 1) {
    const response = await fetch(url, { ...init, signal: AbortSignal.timeout(30_000) });
    const body = await response.text();
    if (response.status === 404 && options.notFoundError !== undefined) throw options.notFoundError;
    if ((response.status === 429 || response.status >= 500) && attempt < 3) {
      await sleep(retryDelay(response, attempt));
      continue;
    }
    if (!response.ok)
      throw new PlatformApiError(
        `${init.method ?? 'GET'} ${url} returned ${response.status}: ${body}`,
      );
    try {
      return JSON.parse(body) as unknown;
    } catch (error) {
      if (error instanceof SyntaxError)
        throw new PlatformApiError(`${init.method ?? 'GET'} ${url} returned invalid JSON.`);
      throw error;
    }
  }
}

function postmanCollectionName(value: unknown): string {
  if (
    !isRecord(value) ||
    !isRecord(value.collection) ||
    !isRecord(value.collection.info) ||
    typeof value.collection.info.name !== 'string'
  )
    throw new PlatformApiError('Postman collection response did not include info.name.');
  return value.collection.info.name;
}

export async function publishPostman(
  apiKey: string,
  collectionId: string,
  collection: PostmanCollection,
): Promise<void> {
  const url = `https://api.getpostman.com/collections/${encodeURIComponent(collectionId)}`;
  const apiKeyHeader = { 'X-API-Key': apiKey };
  const existingCollection = await requestJson(
    url,
    { headers: apiKeyHeader },
    {
      notFoundError: new PostmanCollectionUnavailableError(collectionId),
    },
  );
  const replacement = {
    ...collection,
    info: { ...collection.info, name: postmanCollectionName(existingCollection) },
  };
  await requestJson(url, {
    method: 'PUT',
    headers: { ...apiKeyHeader, 'Content-Type': 'application/json' },
    body: JSON.stringify({ collection: replacement }),
  });
}

function apifoxDocument(document: Record<string, unknown>): Record<string, unknown> {
  const paths: Record<string, unknown> = {};
  const sourcePaths = document.paths;
  if (!isRecord(sourcePaths)) throw new PlatformApiError('Apifox OpenAPI paths must be objects.');
  for (const [path, value] of Object.entries(sourcePaths)) {
    if (!isRecord(value))
      throw new PlatformApiError(`Apifox OpenAPI path ${path} must be an object.`);
    const pathItem: Record<string, unknown> = {};
    for (const [method, operation] of Object.entries(value)) {
      if (!httpMethods.has(method)) {
        pathItem[method] = operation;
        continue;
      }
      if (
        !isRecord(operation) ||
        typeof operation.operationId !== 'string' ||
        operation.operationId.trim() === ''
      )
        throw new PlatformApiError(
          `Apifox OpenAPI ${method.toUpperCase()} ${path} requires operationId.`,
        );
      if (
        !Array.isArray(operation.tags) ||
        operation.tags.length !== 1 ||
        typeof operation.tags[0] !== 'string'
      )
        throw new PlatformApiError(
          `Apifox OpenAPI ${method.toUpperCase()} ${path} requires exactly one Domain tag.`,
        );
      pathItem[method] = { ...operation, 'x-apifox-folder': operation.tags[0] };
    }
    paths[path] = pathItem;
  }
  return { ...document, paths };
}

export async function publishApifox(
  accessToken: string,
  projectId: string,
  moduleId: number,
  document: Record<string, unknown>,
): Promise<void> {
  parseApifoxImportResult(
    await requestJson(
      `https://api.apifox.com/v1/projects/${projectId}/import-openapi?locale=en-US`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'X-Apifox-Api-Version': '2024-03-28',
        },
        body: JSON.stringify({
          input: JSON.stringify(document),
          options: {
            deleteUnmatchedResources: true,
            endpointOverwriteBehavior: 'OVERWRITE_EXISTING',
            moduleId,
            prependBasePath: false,
            schemaOverwriteBehavior: 'OVERWRITE_EXISTING',
            updateFolderOfChangedEndpoint: true,
          },
        }),
      },
    ),
  );
}

export async function publishPlatformApiPostman(
  collectionId: string,
  filePath: string,
  env: unknown = process.env,
): Promise<void> {
  const config = postmanPublishConfigSchema.parse(env);
  const validCollectionId = postmanCollectionIdSchema.parse(collectionId);
  const collection = await convertOpenApiToPostman(
    JSON.stringify(parseOpenApiJson(await readFile(filePath, 'utf8'), filePath)),
  );
  await publishPostman(config.POSTMAN_API_KEY, validCollectionId, collection);
  console.log(`${filePath} published to Postman collection ${validCollectionId}.`);
}

export async function publishPlatformApiApifox(
  projectId: string,
  moduleId: string,
  filePath: string,
  env: unknown = process.env,
): Promise<void> {
  const config = apifoxPublishConfigSchema.parse(env);
  const validProjectId = apifoxProjectIdSchema.parse(projectId);
  const validModuleId = apifoxModuleIdSchema.parse(moduleId);
  const document = apifoxDocument(parseOpenApiJson(await readFile(filePath, 'utf8'), filePath));
  await publishApifox(config.APIFOX_ACCESS_TOKEN, validProjectId, validModuleId, document);
  console.log(
    `${filePath} published to Apifox project ${validProjectId}, module ${validModuleId}.`,
  );
}

function requiredValue(command: string, name: string, value: string | undefined): string {
  if (value === undefined || value.startsWith('--'))
    throw new PlatformApiError(`${command} requires ${name}.`);
  if (value.trim() === '') throw new PlatformApiError(`${command} ${name} must not be blank.`);
  return value;
}

function rejectArgument(command: string, value: string): never {
  if (value.includes('='))
    throw new PlatformApiError(`${command} does not support equals-form option ${value}.`);
  if (value.startsWith('--') && value !== '--')
    throw new PlatformApiError(`${command} does not support option ${value}.`);
  throw new PlatformApiError(`${command} received unexpected argument ${value}.`);
}

function parseExport(values: readonly string[]): PlatformApiCommand {
  const inputPath = requiredValue('export', 'INPUT', values[0]);
  const outputPath = requiredValue('export', 'OUTPUT', values[1]);
  let category: string | undefined;
  for (let index = 2; index < values.length; index += 1) {
    const option = values[index];
    if (option === '--category') {
      if (category !== undefined)
        throw new PlatformApiError('export accepts --category only once.');
      category = requiredValue('export', '--category value', values[index + 1]);
      index += 1;
      continue;
    }
    rejectArgument('export', option ?? '');
  }
  return {
    command: 'export',
    inputPath,
    outputPath,
    ...(category === undefined ? {} : { category }),
  };
}

function parsePublish(
  command: 'publish-apifox' | 'publish-postman',
  values: readonly string[],
): PlatformApiCommand {
  const targetName = command === 'publish-apifox' ? 'PROJECT_ID' : 'COLLECTION_ID';
  const expectedValues =
    command === 'publish-apifox'
      ? 'PROJECT_ID, MODULE_ID, and INPUT_FILE'
      : 'COLLECTION_ID and INPUT_FILE';
  if (values.length !== (command === 'publish-apifox' ? 3 : 2))
    throw new PlatformApiError(`${command} requires ${expectedValues}.`);
  for (const value of values) if (value.startsWith('--')) rejectArgument(command, value);
  if (command === 'publish-apifox')
    return {
      command,
      targetId: requiredValue(command, targetName, values[0]),
      moduleId: requiredValue(command, 'MODULE_ID', values[1]),
      inputPath: requiredValue(command, 'INPUT_FILE', values[2]),
    };
  return {
    command,
    targetId: requiredValue(command, targetName, values[0]),
    inputPath: requiredValue(command, 'INPUT_FILE', values[1]),
  };
}

export function parseCommandArguments(args: readonly string[]): PlatformApiCommand {
  const [command = 'help', ...rawValues] = args;
  const values = rawValues[0] === '--' ? rawValues.slice(1) : rawValues;
  if (
    ['export', 'publish-postman', 'publish-apifox'].includes(command) &&
    values.length === 1 &&
    values[0] === '--help'
  )
    return { command: 'help' };
  switch (command) {
    case 'help':
    case '--help':
      if (values.length > 0) rejectArgument('help', values[0] ?? '');
      return { command: 'help' };
    case 'export':
      return parseExport(values);
    case 'publish-postman':
    case 'publish-apifox':
      return parsePublish(command, values);
    default:
      throw new PlatformApiError(`Unknown Platform API command: ${command}. Use --help for usage.`);
  }
}

export async function runCommand(command: PlatformApiCommand): Promise<void> {
  switch (command.command) {
    case 'export':
      return exportOpenApi(command.inputPath, command.outputPath, { category: command.category });
    case 'publish-postman':
      return publishPlatformApiPostman(command.targetId, command.inputPath);
    case 'publish-apifox':
      return publishPlatformApiApifox(command.targetId, command.moduleId, command.inputPath);
    case 'help':
      console.log(
        [
          'Usage:',
          '  pnpm run platform-api:export -- <input> <output> [--category <category>]',
          '  pnpm run platform-api:publish-postman -- <collection-id> <input-file>',
          '  pnpm run platform-api:publish-apifox -- <project-id> <module-id> <input-file>',
        ].join('\n'),
      );
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url))
  await runCommand(parseCommandArguments(process.argv.slice(2)));
