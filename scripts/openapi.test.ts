import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import Ajv, { type ValidateFunction } from 'ajv';
import {
  apifoxPublishConfigSchema,
  apifoxModuleIdSchema,
  apifoxProjectIdSchema,
  convertOpenApiToPostman,
  exportOpenApi,
  listFiles,
  normalizePostmanCollection,
  parseApifoxImportResult,
  parseCommandArguments,
  postmanPublishConfigSchema,
  postmanCollectionIdSchema,
  publishPlatformApiApifox,
  publishPlatformApiPostman,
  publishPostman,
} from './openapi.js';

const httpMethods = ['delete', 'get', 'head', 'options', 'patch', 'post', 'put', 'trace'] as const;
type HttpMethod = (typeof httpMethods)[number];
type OpenApiOperation = {
  readonly method: HttpMethod;
  readonly path: string;
  readonly source: string;
};
type JsonObject = Record<string, unknown>;
type JsonContent = {
  readonly example?: JsonObject;
  readonly schema: JsonObject;
  readonly examples?: Record<string, { readonly value: JsonObject }>;
};
type TestOperation = {
  readonly requestBody?: { readonly content: { readonly 'application/json': JsonContent } };
  readonly responses: Record<string, unknown>;
  readonly tags: readonly string[];
  readonly 'x-export-category'?: string;
};
type OpenApiDocument = {
  readonly paths: Record<string, Partial<Record<HttpMethod, TestOperation>>>;
  readonly servers: readonly {
    readonly variables: { readonly host: { readonly default: string } };
  }[];
  readonly tags: readonly { readonly description: string; readonly name: string }[];
};
type RouteRecord = {
  readonly contentFile: string;
  readonly contextKey: string;
  readonly status: string;
  readonly template: string;
};

function required<T>(value: T | null | undefined, message: string): T {
  if (value === null || value === undefined) throw new Error(message);
  return value;
}

function pathReferences(source: string): Map<string, string> {
  const section = required(
    source.match(/^paths:\n([\s\S]*?)^components:/m)?.[1],
    'OpenAPI root must contain paths before components.',
  );
  return new Map(
    [...section.matchAll(/^  (\/[^:]+):\n    \$ref: (.+)$/gm)].map(([, path, ref]) => [path, ref]),
  );
}

async function documentedRoutes(root: string): Promise<OpenApiOperation[]> {
  return Promise.all(
    [...pathReferences(await readFile(root, 'utf8'))].map(async ([path, reference]) => {
      const source = await readFile(resolve(dirname(root), reference), 'utf8');
      const method = source.match(/^([a-z]+):/m)?.[1];
      if (method === undefined || !isHttpMethod(method))
        throw new Error(`Invalid operation method for ${path}.`);
      return { method, path, source };
    }),
  );
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;
const isHttpMethod = (value: string): value is HttpMethod =>
  httpMethods.some((method) => method === value);
const requireRoute = (routes: readonly OpenApiOperation[], path: string): OpenApiOperation =>
  required(
    routes.find((candidate) => candidate.path === path),
    `Missing documented route ${path}.`,
  );

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const platformApiRoot = resolve(
  repoRoot,
  required(process.argv[2], 'openapi.test.ts requires a Platform API root.'),
);
const routeIndexPath = resolve(repoRoot, 'src/generated/routes.json');
const rootPath = resolve(platformApiRoot, 'openapi.yaml');
const ajv = new Ajv({ allErrors: true, strict: false, validateFormats: false });
let temporaryDirectory: string | undefined;
let bundledOpenApi: string;
let openApiDocument: OpenApiDocument;
let referencedOpenApiDocument: OpenApiDocument;
let validateSendMessage: ValidateFunction;
const apifoxEnvironment = {
  APIFOX_ACCESS_TOKEN: 'apifox-token',
} as const;
const zeroApifoxCounters = {
  endpointCreated: 0,
  endpointFailed: 0,
  endpointFolderCreated: 0,
  endpointFolderFailed: 0,
  endpointFolderIgnored: 0,
  endpointFolderUpdated: 0,
  endpointIgnored: 0,
  endpointUpdated: 0,
  schemaCreated: 0,
  schemaFailed: 0,
  schemaFolderCreated: 0,
  schemaFolderFailed: 0,
  schemaFolderIgnored: 0,
  schemaFolderUpdated: 0,
  schemaIgnored: 0,
  schemaUpdated: 0,
} as const;

function requestContent(path: string): JsonContent {
  return required(
    openApiDocument.paths[path]?.post?.requestBody?.content['application/json'],
    `Missing request schema for ${path}.`,
  );
}

const compileRequestSchema = (path: string): ValidateFunction =>
  ajv.compile(requestContent(path).schema);

function routeRecord(value: unknown): RouteRecord | undefined {
  if (
    !isRecord(value) ||
    typeof value.contentFile !== 'string' ||
    typeof value.contextKey !== 'string' ||
    typeof value.status !== 'string' ||
    typeof value.template !== 'string'
  )
    return undefined;
  return {
    contentFile: value.contentFile,
    contextKey: value.contextKey,
    status: value.status,
    template: value.template,
  };
}

function pageOperation(source: string, contentFile: string): string {
  const matches = [
    ...source.matchAll(
      /^(DELETE|GET|HEAD|OPTIONS|PATCH|POST|PUT|TRACE) \{API_ADDRESS\}(\/[A-Za-z0-9_/{}/-]+)$/gm,
    ),
  ];
  assert.equal(matches.length, 1, contentFile);
  const method = required(matches[0]?.[1], `Missing HTTP method in ${contentFile}.`).toLowerCase();
  const path = required(matches[0]?.[2], `Missing API path in ${contentFile}.`);
  assert.ok(isHttpMethod(method), contentFile);
  return `${method} ${path}`;
}

async function platformApiDocumentationOperations(): Promise<Set<string>> {
  const routeIndex: unknown = JSON.parse(await readFile(routeIndexPath, 'utf8'));
  assert.ok(Array.isArray(routeIndex), 'Route index must be an array.');
  const apiPages = routeIndex
    .map(routeRecord)
    .filter(
      (route): route is RouteRecord =>
        route !== undefined &&
        route.contextKey === 'chat/platform-api' &&
        route.status === 'published' &&
        route.template === 'api',
    );
  assert.equal(apiPages.length, 61);
  const operations = new Set<string>();
  for (const page of apiPages) {
    const defaultOperation = pageOperation(
      await readFile(resolve(repoRoot, page.contentFile), 'utf8'),
      page.contentFile,
    );
    if (!page.contentFile.startsWith('content/zh/')) {
      const localizedContentFile = page.contentFile.replace(/^content\//, 'content/zh/');
      assert.equal(
        pageOperation(
          await readFile(resolve(repoRoot, localizedContentFile), 'utf8'),
          localizedContentFile,
        ),
        defaultOperation,
      );
    }
    operations.add(defaultOperation);
  }
  return operations;
}

function assertSendMessages(valid: boolean, values: readonly JsonObject[]): void {
  for (const value of values)
    assert.equal(
      validateSendMessage({ sendID: 'sender', ...value }),
      valid,
      valid ? JSON.stringify(validateSendMessage.errors) : undefined,
    );
}

function countPostmanRequests(value: unknown): number {
  if (Array.isArray(value))
    return value.reduce((count, entry) => count + countPostmanRequests(entry), 0);
  if (!isRecord(value)) return 0;
  return (
    ('request' in value ? 1 : 0) +
    Object.values(value).reduce<number>((count, entry) => count + countPostmanRequests(entry), 0)
  );
}

function postmanResponseBodies(value: unknown): string[] {
  if (Array.isArray(value)) return value.flatMap(postmanResponseBodies);
  if (!isRecord(value)) return [];
  const bodies = Array.isArray(value.response)
    ? value.response.flatMap((response) =>
        isRecord(response) && typeof response.body === 'string' ? [response.body] : [],
      )
    : [];
  return [
    ...bodies,
    ...Object.entries(value).flatMap(([key, entry]) =>
      key === 'response' ? [] : postmanResponseBodies(entry),
    ),
  ];
}

function postmanItemForPath(value: unknown, path: string): JsonObject | undefined {
  if (Array.isArray(value)) {
    for (const entry of value) {
      const item = postmanItemForPath(entry, path);
      if (item !== undefined) return item;
    }
    return undefined;
  }
  if (!isRecord(value)) return undefined;
  if (isRecord(value.request) && isRecord(value.request.url)) {
    const segments = value.request.url.path;
    if (Array.isArray(segments) && segments.every((segment) => typeof segment === 'string')) {
      if (`/${segments.join('/')}` === path) return value;
    }
  }
  for (const entry of Object.values(value)) {
    const item = postmanItemForPath(entry, path);
    if (item !== undefined) return item;
  }
  return undefined;
}

async function exportOpenApiDocuments(
  directory: string,
  prefix: string,
): Promise<{ readonly fullPath: string; readonly publicPath: string }> {
  const publicPath = join(directory, `${prefix}-public.json`);
  const fullPath = join(directory, `${prefix}-full.json`);
  const bundledPath = join(directory, 'openapi.json');
  await exportOpenApi(bundledPath, publicPath, { category: 'Public' });
  await exportOpenApi(bundledPath, fullPath, {});
  return { fullPath, publicPath };
}

const genericDescription =
  /^(?:operation-specific response (?:payload|data)|response data|returned data|field value)\.?$/i;

function missingPropertyDescriptions(schema: unknown, path: string): string[] {
  if (!isRecord(schema)) return [];
  const missing: string[] = [];
  if (isRecord(schema.properties))
    for (const [name, property] of Object.entries(schema.properties)) {
      const propertyPath = `${path}.${name}`;
      if (!isRecord(property)) {
        missing.push(propertyPath);
        continue;
      }
      if (
        typeof property.description !== 'string' ||
        property.description.trim() === '' ||
        genericDescription.test(property.description.trim())
      )
        missing.push(propertyPath);
      missing.push(...missingPropertyDescriptions(property, propertyPath));
    }
  for (const composition of ['allOf', 'anyOf', 'oneOf']) {
    const branches = schema[composition];
    if (Array.isArray(branches))
      branches.forEach((branch, index) =>
        missing.push(...missingPropertyDescriptions(branch, `${path}.${composition}[${index}]`)),
      );
  }
  if (schema.items !== undefined)
    missing.push(...missingPropertyDescriptions(schema.items, `${path}[]`));
  return missing;
}

function descriptionSiblingReferences(schema: unknown, path: string): string[] {
  if (Array.isArray(schema))
    return schema.flatMap((entry, index) =>
      descriptionSiblingReferences(entry, `${path}[${index}]`),
    );
  if (!isRecord(schema)) return [];
  const siblings =
    typeof schema.$ref === 'string' && typeof schema.description === 'string' ? [path] : [];
  return Object.entries(schema).reduce<string[]>(
    (paths, [name, value]) => [...paths, ...descriptionSiblingReferences(value, `${path}.${name}`)],
    siblings,
  );
}

function runNode(modulePath: string, args: readonly string[]): ReturnType<typeof spawnSync> {
  return spawnSync(process.execPath, [modulePath, ...args], {
    cwd: repoRoot,
    encoding: 'utf8',
  });
}

before(async () => {
  temporaryDirectory = await mkdtemp(join(tmpdir(), 'openim-platform-api-'));
  const bundlePath = join(temporaryDirectory, 'openapi.json');
  const referencedBundlePath = join(temporaryDirectory, 'openapi-with-refs.json');
  const result = runNode(resolve(repoRoot, 'node_modules/@redocly/cli/bin/cli.js'), [
    'bundle',
    rootPath,
    '--dereferenced',
    '--output',
    bundlePath,
  ]);
  assert.equal(result.status, 0, `${result.stdout ?? ''}${result.stderr ?? ''}`);
  const referencedResult = runNode(resolve(repoRoot, 'node_modules/@redocly/cli/bin/cli.js'), [
    'bundle',
    rootPath,
    '--output',
    referencedBundlePath,
  ]);
  assert.equal(
    referencedResult.status,
    0,
    `${referencedResult.stdout ?? ''}${referencedResult.stderr ?? ''}`,
  );
  bundledOpenApi = await readFile(bundlePath, 'utf8');
  openApiDocument = JSON.parse(bundledOpenApi);
  referencedOpenApiDocument = JSON.parse(await readFile(referencedBundlePath, 'utf8'));
  validateSendMessage = compileRequestSchema('/msg/send_msg');
});

after(() =>
  temporaryDirectory === undefined
    ? undefined
    : rm(temporaryDirectory, { recursive: true, force: true }),
);

test('accepts valid direct, group, and custom messages', () => {
  assertSendMessages(true, [
    { recvID: 'recipient', content: { content: 'hello' }, contentType: 101, sessionType: 1 },
    { groupID: 'group', content: { content: 'hello' }, contentType: 101, sessionType: 3 },
    { recvID: 'recipient', content: { data: '{}' }, contentType: 110, sessionType: 1 },
  ]);
});

test('rejects invalid message destinations, session, content, and empty strings', () => {
  const text = { content: { content: 'x' }, contentType: 101 };
  assertSendMessages(false, [
    { ...text, sessionType: 1 },
    { ...text, sessionType: 3 },
    { ...text, groupID: 'g', sessionType: 2 },
    { recvID: 'r', content: { content: 'x' }, contentType: 110, sessionType: 1 },
    { ...text, recvID: 'r', content: { content: '' }, sessionType: 1 },
  ]);
});

test('keeps message content variants outside allOf for Swagger Client', () => {
  const schema = requestContent('/msg/send_msg').schema;
  assert.ok(Array.isArray(schema.allOf));
  assert.equal(schema.allOf.length, 1);
  assert.ok(Array.isArray(schema.oneOf));
  assert.equal(schema.oneOf.length, 8);
});

test('enforces auth and group request contracts', () => {
  const auth = compileRequestSchema('/auth/get_user_token');
  assert.equal(auth({ userID: 'u', platformID: 9 }), true);
  assert.equal(auth({ userID: 'u', platformID: 10 }), false);
  assert.equal(auth({ userID: 'u', platformID: 11 }), true);
  const group = compileRequestSchema('/group/create_group');
  assert.equal(group({ ownerUserID: 'o', groupInfo: { groupType: 2 } }), true);
  assert.equal(group({ ownerUserID: 'o', groupInfo: { groupType: 1 } }), false);
  const joinGroup = compileRequestSchema('/group/join_group');
  assert.equal(joinGroup({ groupID: 'g', joinSource: 2 }), false);
  assert.equal(joinGroup({ groupID: 'g', inviterUserID: 'i', joinSource: 2 }), true);
});

test('matches runtime-bound batch, notification, and object-access request shapes', () => {
  const batch = requestContent('/msg/batch_send_msg');
  const batchProperties = required(
    isRecord(batch.schema.properties) ? batch.schema.properties : undefined,
    'Missing batch message properties.',
  );
  assert.equal('sendMsg' in batchProperties, false);
  assert.equal('recvID' in batchProperties, false);
  assert.ok(isRecord(batchProperties.sendID));
  assert.ok(isRecord(batchProperties.content));
  const batchExample = required(batch.example, 'Missing batch message example.');
  assert.equal(batchExample.sendID, 'openIMAdmin');
  assert.equal('sendMsg' in batchExample, false);
  assert.equal(compileRequestSchema('/msg/batch_send_msg')(batchExample), true);

  const notification = requestContent('/msg/send_business_notification');
  const notificationProperties = required(
    isRecord(notification.schema.properties) ? notification.schema.properties : undefined,
    'Missing business notification properties.',
  );
  const notificationData = required(
    isRecord(notificationProperties.data) ? notificationProperties.data : undefined,
    'Missing business notification data schema.',
  );
  assert.equal(notificationData.type, 'string');
  const notificationExample = required(
    notification.example,
    'Missing business notification example.',
  );
  assert.equal(notificationExample.data, '{"kind":"account_alert"}');
  assert.equal(compileRequestSchema('/msg/send_business_notification')(notificationExample), true);

  const access = requestContent('/object/access_url');
  const accessProperties = required(
    isRecord(access.schema.properties) ? access.schema.properties : undefined,
    'Missing object access properties.',
  );
  const accessQuery = required(
    isRecord(accessProperties.query) ? accessProperties.query : undefined,
    'Missing object access query schema.',
  );
  assert.equal(accessQuery.type, 'object');
  assert.deepEqual(accessQuery.additionalProperties, { type: 'string' });
  const accessExample = required(access.example, 'Missing object access example.');
  assert.deepEqual(accessExample.query, { download: '1', 'response-content-type': 'image/png' });
  assert.equal(compileRequestSchema('/object/access_url')(accessExample), true);
});

test('enforces group decisions, safe server, and HTTP error claims', () => {
  const validate = compileRequestSchema('/group/group_application_response');
  assert.equal(validate({ groupID: 'g', fromUserID: 'u', handleResult: -1 }), true);
  assert.equal(validate({ groupID: 'g', fromUserID: 'u', handleResult: 0 }), false);
  const examples = required(
    requestContent('/group/group_application_response').examples,
    'Missing examples for /group/group_application_response.',
  );
  assert.equal(examples.example1.value.handleResult, -1);
  assert.equal(examples.example2.value.handleResult, 1);
  assert.equal(openApiDocument.servers[0].variables.host.default, 'api.example.invalid');
  for (const [path, item] of Object.entries(openApiDocument.paths))
    for (const method of ['get', 'post'] as const)
      if (item[method])
        assert.equal(
          Boolean(item[method]?.responses['400']),
          path === '/msg/send_msg' || path === '/object/{name}',
        );
});

test('lint discovers an invalid API root without docset metadata', async () => {
  const invalid = resolve(platformApiRoot, '__lint-regression__.yaml');
  await writeFile(invalid, 'openapi: 3.0.3\ninfo:\n  title: invalid\n');
  try {
    const result = runNode(resolve(repoRoot, 'node_modules/tsx/dist/cli.mjs'), [
      'scripts/docsets-sync-utils.ts',
      'lint-openapi',
    ]);
    assert.notEqual(result.status, 0, `${result.stdout ?? ''}${result.stderr ?? ''}`);
  } finally {
    await rm(invalid, { force: true });
  }
});

test('keeps every Platform API YAML file free of CJK text', async () => {
  const cjk = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u{20000}-\u{2fa1f}]/u;
  const violations: string[] = [];
  for (const path of await listFiles(platformApiRoot))
    if (/\.ya?ml$/i.test(path) && cjk.test(await readFile(path, 'utf8')))
      violations.push(relative(repoRoot, path));
  assert.deepEqual(violations, []);
});

test('enforces documented route auth and GET behavior', async () => {
  const documented = await documentedRoutes(rootPath);
  const operationIds = documented.map((route) =>
    required(route.source.match(/^  operationId: (\S+)$/m)?.[1], `Missing ID for ${route.path}.`),
  );
  assert.equal(documented.filter(({ method }) => method === 'get').length, 13);
  assert.equal(documented.filter(({ method }) => method === 'post').length, 127);
  assert.equal(new Set(operationIds).size, 140);
  for (const route of documented) {
    const publicRoute =
      route.method === 'get' ||
      route.path === '/auth/get_admin_token' ||
      route.path === '/auth/parse_token';
    assert.match(route.source, publicRoute ? /^  security: \[\]$/m : /^    - TokenAuth: \[\]$/m);
    if (route.method === 'get') assert.doesNotMatch(route.source, /^  requestBody:$/m);
  }
});

test('classifies routes by Platform API documentation visibility', async () => {
  const publicOperations = await platformApiDocumentationOperations();
  const routeOperations = new Set(
    Object.entries(openApiDocument.paths).flatMap(([path, pathItem]) =>
      httpMethods.flatMap((method) =>
        pathItem[method] === undefined ? [] : [`${method} ${path}`],
      ),
    ),
  );
  assert.deepEqual(
    [...publicOperations].filter((operation) => !routeOperations.has(operation)),
    [],
  );
  assert.equal(publicOperations.size, 61);
  assert.equal(
    openApiDocument.tags.some(({ name }) => name === 'Public'),
    false,
  );
  for (const [path, pathItem] of Object.entries(openApiDocument.paths))
    for (const method of httpMethods) {
      const operation = pathItem[method];
      if (operation === undefined) continue;
      const operationKey = `${method} ${path}`;
      assert.equal(operation.tags.includes('Private'), false, operationKey);
      assert.equal(operation.tags.length, 1, operationKey);
      assert.equal(
        operation['x-export-category'],
        publicOperations.has(operationKey) ? 'Public' : undefined,
        operationKey,
      );
    }
});

test('keeps Platform API source free of Apifox folder extensions', async () => {
  const violations: string[] = [];
  for (const path of await listFiles(platformApiRoot))
    if (/\.ya?ml$/i.test(path) && /^\s*x-apifox-folder:/m.test(await readFile(path, 'utf8')))
      violations.push(relative(repoRoot, path));
  assert.deepEqual(violations, []);
});

test('retains representative field schemas', async () => {
  const routes = await documentedRoutes(rootPath);
  const batch = requireRoute(routes, '/msg/batch_send_msg');
  assert.match(batch.source, /'recvIDs':/);
  assert.match(batch.source, /'failedUserIDs':/);
  assert.match(batch.source, /x-source-schema-status: field-level/);
  const pull = requireRoute(routes, '/msg/pull_msg_by_seq');
  assert.match(pull.source, /enum:\n\s+- 0\n\s+- 1/);
});

test('describes every response schema property', () => {
  const missing: string[] = [];
  for (const [path, pathItem] of Object.entries(openApiDocument.paths))
    for (const method of ['get', 'post'] as const) {
      const operation = pathItem[method];
      if (operation === undefined) continue;
      for (const [status, response] of Object.entries(operation.responses)) {
        if (!isRecord(response) || !isRecord(response.content)) continue;
        for (const [mediaType, media] of Object.entries(response.content)) {
          if (!isRecord(media)) continue;
          missing.push(
            ...missingPropertyDescriptions(
              media.schema,
              `${method.toUpperCase()} ${path} response ${status} ${mediaType}`,
            ),
          );
        }
      }
    }
  assert.equal(
    missing.length,
    0,
    `Missing response property descriptions (${missing.length}):\n${missing.slice(0, 50).join('\n')}`,
  );
});

test('checks descriptions in composition and array branches', () => {
  const missing = missingPropertyDescriptions(
    {
      properties: {
        direct: { type: 'string' },
        list: {
          description: 'Returned records.',
          items: { properties: { nested: { type: 'string' } }, type: 'object' },
          type: 'array',
        },
        composed: {
          allOf: [{ properties: { allField: { type: 'string' } }, type: 'object' }],
          anyOf: [{ properties: { anyField: { type: 'string' } }, type: 'object' }],
          description: 'Composed response.',
          oneOf: [{ properties: { oneField: { type: 'string' } }, type: 'object' }],
        },
        placeholder: { description: 'Operation-specific response data.', type: 'string' },
      },
      type: 'object',
    },
    'response',
  );
  assert.deepEqual(missing, [
    'response.direct',
    'response.list[].nested',
    'response.composed.allOf[0].allField',
    'response.composed.anyOf[0].anyField',
    'response.composed.oneOf[0].oneField',
    'response.placeholder',
  ]);
});

test('keeps descriptions off OpenAPI 3.0 reference siblings', () => {
  const violations = descriptionSiblingReferences(referencedOpenApiDocument, 'OpenAPI');
  assert.deepEqual(violations, []);
});

test('rejects incomplete publishing credentials', () => {
  assert.throws(() => postmanPublishConfigSchema.parse({}), /POSTMAN_API_KEY/);
  assert.throws(() => apifoxPublishConfigSchema.parse({}), /APIFOX_ACCESS_TOKEN/);
});

test('accepts isolated target configuration', () => {
  const postman = postmanPublishConfigSchema.parse({
    POSTMAN_API_KEY: 'postman-key',
  });
  const apifox = apifoxPublishConfigSchema.parse({
    APIFOX_ACCESS_TOKEN: 'apifox-token',
  });
  assert.equal(postman.POSTMAN_API_KEY, 'postman-key');
  assert.equal(apifox.APIFOX_ACCESS_TOKEN, 'apifox-token');
});

test('rejects malformed Postman collection identifiers', () => {
  assert.throws(() => postmanCollectionIdSchema.parse('collection-id'), /Invalid/);
  assert.doesNotThrow(() =>
    postmanCollectionIdSchema.parse('56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2'),
  );
  assert.throws(() => apifoxProjectIdSchema.parse('project-id'), /Invalid/);
  assert.doesNotThrow(() => apifoxProjectIdSchema.parse('123'));
  assert.throws(() => apifoxModuleIdSchema.parse('module-id'), /Invalid/);
  assert.equal(apifoxModuleIdSchema.parse('456'), 456);
});

test('accepts package-manager argument separators', () => {
  const expected = {
    command: 'publish-postman',
    targetId: '56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2',
    inputPath: '/tmp/public.json',
  };
  assert.deepEqual(
    parseCommandArguments([
      'publish-postman',
      '--',
      '56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2',
      '/tmp/public.json',
    ]),
    expected,
  );
  assert.deepEqual(
    parseCommandArguments([
      'publish-postman',
      '56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2',
      '/tmp/public.json',
    ]),
    expected,
  );
  assert.deepEqual(parseCommandArguments(['publish-postman', '--help']), { command: 'help' });
});

test('normalizes Postman identities without removing API identifiers', () => {
  const collection = {
    info: {
      _postman_id: 'volatile',
      name: 'OpenIM Platform API v3',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
    },
    item: [
      {
        id: 'volatile',
        request: {
          body: {
            mode: 'raw',
            raw: '{"id":"domain-id","uid":"domain-uid","required":"value","key_0":42}',
          },
        },
      },
    ],
  };
  const normalized = normalizePostmanCollection(collection);
  assert.deepEqual(normalized, {
    info: {
      name: 'OpenIM Platform API v3',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
    },
    item: [
      {
        request: {
          body: {
            mode: 'raw',
            raw: '{"id":"domain-id","uid":"domain-uid","required":"value"}',
          },
        },
      },
    ],
  });
});

test('converts the bundled OpenAPI into a Postman collection with every documented request', async () => {
  const collection = await convertOpenApiToPostman(bundledOpenApi);
  const rootFolders = collection.item.filter(isRecord);
  assert.equal(rootFolders.length, collection.item.length);
  assert.deepEqual(
    rootFolders.map(({ name }) => name),
    [
      'Authentication',
      'Conversations',
      'Moderation',
      'Friends',
      'Groups',
      'JavaScript SDK',
      'Messages',
      'Object storage',
      'Service discovery',
      'Statistics',
      'Third-party services',
      'Users',
    ],
  );
  assert.equal(countPostmanRequests(collection), 140);
  assert.equal(
    rootFolders.some(({ name }) => name === 'Public'),
    false,
  );
});

test('keeps the bundled OpenAPI free of additionalProperties true', () => {
  assert.equal(bundledOpenApi.includes('"additionalProperties": true'), false);
});

test('converts request bodies with schema type placeholders', async () => {
  const collection = await convertOpenApiToPostman(bundledOpenApi);
  const collectionJson = JSON.stringify(collection);
  for (const placeholder of ['<integer>', '<string>', '<boolean>'])
    assert.equal(collectionJson.includes(placeholder), true, placeholder);
});

test('converts response bodies with schema type placeholders', async () => {
  const collection = await convertOpenApiToPostman(bundledOpenApi);
  const response = postmanResponseBodies(collection)
    .map((body): unknown => JSON.parse(body))
    .find(
      (body) =>
        isRecord(body) &&
        isRecord(body.data) &&
        Object.hasOwn(body.data, 'conversationTotal') &&
        Array.isArray(body.data.conversationElems),
    );
  assert.ok(isRecord(response));
  assert.ok(isRecord(response.data));
  assert.equal(response.data.conversationTotal, '<integer>');
  assert.equal(response.data.unreadTotal, '<integer>');
  assert.ok(Array.isArray(response.data.conversationElems));
  const conversation = required(response.data.conversationElems[0], 'Missing conversation item.');
  assert.ok(isRecord(conversation));
  assert.equal(conversation.conversationID, '<string>');
  assert.equal(conversation.IsPinned, '<boolean>');
});

test('omits data from Postman responses backed by empty protobuf messages', async () => {
  const collection = await convertOpenApiToPostman(bundledOpenApi);
  const paths = [
    '/friend/add_friend',
    '/friend/add_friend_response',
    '/friend/delete_friend',
    '/friend/import_friend',
    '/friend/set_friend_remark',
    '/friend/update_friends',
    '/user/process_user_command_add',
    '/user/process_user_command_delete',
    '/user/process_user_command_update',
    '/user/set_global_msg_recv_opt',
    '/user/update_notification_account',
    '/user/update_user_info',
  ] as const;
  for (const path of paths) {
    const item = required(postmanItemForPath(collection, path), `Missing Postman request ${path}.`);
    assert.ok(Array.isArray(item.response));
    const firstResponse = required(item.response[0], `Missing Postman response ${path}.`);
    assert.ok(isRecord(firstResponse));
    if (typeof firstResponse.body !== 'string')
      throw new Error(`Invalid Postman response ${path}.`);
    const body: unknown = JSON.parse(firstResponse.body);
    assert.deepEqual(
      body,
      {
        errCode: '<integer>',
        errMsg: '<string>',
        errDlt: '<string>',
      },
      path,
    );
  }
});

test('reports an inaccessible Postman collection before conversion', async (context) => {
  const requests: { readonly method: string; readonly url: string }[] = [];
  context.mock.method(
    globalThis,
    'fetch',
    async (input: string | URL | Request, init?: RequestInit): Promise<Response> => {
      const url = input instanceof Request ? input.url : input.toString();
      requests.push({ method: init?.method ?? 'GET', url });
      return new Response(
        JSON.stringify({
          error: {
            details: { item: 'collection' },
            message: 'The specified item does not exist.',
            name: 'instanceNotFoundError',
          },
        }),
        { status: 404 },
      );
    },
  );

  await assert.rejects(
    convertOpenApiToPostman(bundledOpenApi).then((collection) =>
      publishPostman('postman-key', '56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2', collection),
    ),
    /collection does not exist or is not accessible.*POSTMAN_API_KEY/is,
  );
  assert.deepEqual(requests, [
    {
      method: 'GET',
      url: 'https://api.getpostman.com/collections/56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2',
    },
  ]);
});

test('rejects malformed local OpenAPI before any Postman request', async (context) => {
  const path = join(
    required(temporaryDirectory, 'Missing temporary directory.'),
    'malformed-openapi.json',
  );
  const requests: string[] = [];
  await writeFile(path, '{}');
  context.mock.method(globalThis, 'fetch', async (): Promise<Response> => {
    requests.push('fetch');
    return Response.json({});
  });
  await assert.rejects(() =>
    publishPlatformApiPostman('56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2', path, {
      POSTMAN_API_KEY: 'key',
    }),
  );
  assert.deepEqual(requests, []);
});

test('publishes one Postman collection per invocation', async (context) => {
  const directory = required(temporaryDirectory, 'Missing temporary directory.');
  const publicPath = join(directory, 'public.json');
  const fullPath = join(directory, 'full.json');
  await exportOpenApi(join(directory, 'openapi.json'), publicPath, {
    category: 'Public',
  });
  await exportOpenApi(join(directory, 'openapi.json'), fullPath, {});
  const requests: {
    readonly body: BodyInit | null | undefined;
    readonly method: string;
    readonly url: string;
  }[] = [];
  context.mock.method(
    globalThis,
    'fetch',
    async (input: string | URL | Request, init?: RequestInit): Promise<Response> => {
      const url = input instanceof Request ? input.url : input.toString();
      requests.push({
        body: init?.body,
        method: init?.method ?? 'GET',
        url: input instanceof Request ? input.url : input.toString(),
      });
      return init?.method === 'PUT'
        ? Response.json({})
        : Response.json({
            collection: {
              info: {
                name: url.includes('66471833') ? 'Remote Full Title' : 'Remote Public Title',
              },
            },
          });
    },
  );
  await publishPlatformApiPostman('56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2', publicPath, {
    POSTMAN_API_KEY: 'secret-key',
  });
  await publishPlatformApiPostman('66471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2', fullPath, {
    POSTMAN_API_KEY: 'secret-key',
  });
  assert.deepEqual(
    requests.map(({ method }) => method),
    ['GET', 'PUT', 'GET', 'PUT'],
  );
  assert.deepEqual(
    requests.map(({ url }) => url),
    [
      'https://api.getpostman.com/collections/56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2',
      'https://api.getpostman.com/collections/56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2',
      'https://api.getpostman.com/collections/66471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2',
      'https://api.getpostman.com/collections/66471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2',
    ],
  );
  for (const [index, requestCount] of [
    [1, 61],
    [3, 140],
  ] as const) {
    const body = required(requests[index]?.body, `Missing PUT body ${index}.`);
    if (typeof body !== 'string') throw new Error('Postman PUT body must be a string.');
    const payload: unknown = JSON.parse(body);
    assert.ok(isRecord(payload));
    assert.ok(isRecord(payload.collection));
    assert.ok(isRecord(payload.collection.info));
    assert.equal(
      payload.collection.info.name,
      index === 1 ? 'Remote Public Title' : 'Remote Full Title',
    );
    assert.equal(countPostmanRequests(payload.collection), requestCount);
    assert.equal(JSON.stringify(payload).includes('x-export-category'), false);
    assert.equal(JSON.stringify(payload).includes('secret-key'), false);
  }
});

test('replaces an accessible Postman collection with the converted OpenAPI', async (context) => {
  const collectionId = '56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2';
  const requests: {
    readonly apiKey: string | null;
    readonly body: string | undefined;
    readonly contentType: string | null;
    readonly method: string;
    readonly url: string;
  }[] = [];
  context.mock.method(
    globalThis,
    'fetch',
    async (input: string | URL | Request, init?: RequestInit): Promise<Response> => {
      const url = input instanceof Request ? input.url : input.toString();
      const headers = new Headers(init?.headers);
      requests.push({
        apiKey: headers.get('X-API-Key'),
        body: typeof init?.body === 'string' ? init.body : undefined,
        contentType: headers.get('Content-Type'),
        method: init?.method ?? 'GET',
        url,
      });
      return init?.method === 'PUT'
        ? Response.json({ collection: { id: collectionId } })
        : Response.json({ collection: { info: { name: 'OpenIM Platform API v3' } } });
    },
  );

  await publishPostman('postman-key', collectionId, await convertOpenApiToPostman(bundledOpenApi));
  assert.equal(requests.length, 2);
  assert.deepEqual(requests[0], {
    apiKey: 'postman-key',
    body: undefined,
    contentType: null,
    method: 'GET',
    url: `https://api.getpostman.com/collections/${collectionId}`,
  });
  const put = required(requests[1], 'Missing Postman collection PUT request.');
  assert.equal(put.apiKey, 'postman-key');
  assert.equal(put.contentType, 'application/json');
  assert.equal(put.method, 'PUT');
  assert.equal(put.url, `https://api.getpostman.com/collections/${collectionId}`);
  const payload: unknown = JSON.parse(required(put.body, 'Missing Postman PUT body.'));
  assert.ok(isRecord(payload));
  assert.equal(countPostmanRequests(payload.collection), 140);
});

test('retries transient platform responses before publishing', async (context) => {
  const statuses = [429, 503, 200, 200];
  const requests: string[] = [];
  context.mock.method(
    globalThis,
    'fetch',
    async (_input: string | URL | Request, init?: RequestInit): Promise<Response> => {
      requests.push(init?.method ?? 'GET');
      const status = required(statuses.shift(), 'Unexpected platform request.');
      return status === 200
        ? Response.json({ collection: { info: { name: 'Remote title' } } })
        : new Response('transient', { status, headers: { 'Retry-After': '0' } });
    },
  );
  const collection = await convertOpenApiToPostman(bundledOpenApi);
  await publishPostman('postman-key', '56471833-1905b9f0-c8a4-4c68-91e6-64f681924bd2', collection);
  assert.deepEqual(requests, ['GET', 'GET', 'GET', 'PUT']);
});

function apifoxOperations(document: unknown): readonly Record<string, unknown>[] {
  if (!isRecord(document) || !isRecord(document.paths)) throw new Error('Missing OpenAPI paths.');
  return Object.values(document.paths).flatMap((pathItem) => {
    if (!isRecord(pathItem)) throw new Error('Invalid OpenAPI path item.');
    return httpMethods.flatMap((method) => {
      const operation = pathItem[method];
      if (operation === undefined) return [];
      if (!isRecord(operation)) throw new Error(`Invalid ${method} operation.`);
      return [operation];
    });
  });
}

test('publishes one Apifox project per invocation', async (context) => {
  const directory = required(temporaryDirectory, 'Missing temporary directory.');
  const { fullPath, publicPath } = await exportOpenApiDocuments(directory, 'apifox-success');
  const requests: {
    readonly authorization: string | null;
    readonly body: string | undefined;
    readonly contentType: string | null;
    readonly method: string;
    readonly url: string;
    readonly version: string | null;
  }[] = [];
  context.mock.method(
    globalThis,
    'fetch',
    async (input: string | URL | Request, init?: RequestInit): Promise<Response> => {
      const headers = new Headers(init?.headers);
      requests.push({
        authorization: headers.get('Authorization'),
        body: typeof init?.body === 'string' ? init.body : undefined,
        contentType: headers.get('Content-Type'),
        method: init?.method ?? 'GET',
        url: input instanceof Request ? input.url : input.toString(),
        version: headers.get('X-Apifox-Api-Version'),
      });
      return Response.json({ data: { counters: zeroApifoxCounters, errors: [] } });
    },
  );

  await publishPlatformApiApifox('123', '1001', publicPath, apifoxEnvironment);
  await publishPlatformApiApifox('456', '1002', fullPath, apifoxEnvironment);

  assert.deepEqual(
    requests.map(({ authorization, contentType, method, url, version }) => ({
      authorization,
      contentType,
      method,
      url,
      version,
    })),
    [
      {
        authorization: 'Bearer apifox-token',
        contentType: 'application/json',
        method: 'POST',
        url: 'https://api.apifox.com/v1/projects/123/import-openapi?locale=en-US',
        version: '2024-03-28',
      },
      {
        authorization: 'Bearer apifox-token',
        contentType: 'application/json',
        method: 'POST',
        url: 'https://api.apifox.com/v1/projects/456/import-openapi?locale=en-US',
        version: '2024-03-28',
      },
    ],
  );
  const expectedImports = [
    {
      options: {
        deleteUnmatchedResources: true,
        endpointOverwriteBehavior: 'OVERWRITE_EXISTING',
        moduleId: 1001,
        prependBasePath: false,
        schemaOverwriteBehavior: 'OVERWRITE_EXISTING',
        updateFolderOfChangedEndpoint: true,
      },
      operationCount: 61,
    },
    {
      options: {
        deleteUnmatchedResources: true,
        endpointOverwriteBehavior: 'OVERWRITE_EXISTING',
        moduleId: 1002,
        prependBasePath: false,
        schemaOverwriteBehavior: 'OVERWRITE_EXISTING',
        updateFolderOfChangedEndpoint: true,
      },
      operationCount: 140,
    },
  ] as const;
  const domainTags = new Set(openApiDocument.tags.map(({ name }) => name));
  for (const [index, expected] of expectedImports.entries()) {
    const request = required(requests[index], `Missing Apifox request ${index}.`);
    const payload: unknown = JSON.parse(
      required(request.body, `Missing Apifox request ${index} body.`),
    );
    if (!isRecord(payload)) throw new Error(`Invalid Apifox request ${index} body.`);
    if (typeof payload.input !== 'string')
      throw new Error(`Missing Apifox request ${index} input.`);
    if (!isRecord(payload.options)) throw new Error(`Missing Apifox request ${index} options.`);
    assert.deepEqual(payload.options, expected.options);
    const document: unknown = JSON.parse(payload.input);
    if (!isRecord(document) || !isRecord(document.info))
      throw new Error(`Missing Apifox request ${index} document info.`);
    assert.equal(document.info.title, 'OpenIM Platform API v3');
    const operations = apifoxOperations(document);
    assert.equal(operations.length, expected.operationCount);
    for (const operation of operations) {
      const operationId = required(operation.operationId, `Missing Apifox operation ID ${index}.`);
      const folder = required(operation['x-apifox-folder'], `Missing Apifox folder ${index}.`);
      if (typeof operationId !== 'string' || typeof folder !== 'string')
        throw new Error(`Invalid Apifox operation identity ${index}.`);
      assert.equal(operationId.includes('__'), false);
      assert.ok(domainTags.has(folder));
      assert.equal('x-export-category' in operation, false);
    }
  }
});

test('validates the Apifox OpenAPI document before making a request', async (context) => {
  const directory = required(temporaryDirectory, 'Missing temporary directory.');
  const { fullPath } = await exportOpenApiDocuments(directory, 'apifox-validation');
  const requests: string[] = [];
  await writeFile(fullPath, '{}');
  context.mock.method(globalThis, 'fetch', async (): Promise<Response> => {
    requests.push('fetch');
    return Response.json({ data: { counters: zeroApifoxCounters, errors: [] } });
  });

  await assert.rejects(
    () => publishPlatformApiApifox('456', '1002', fullPath, apifoxEnvironment),
    /OpenAPI.*apifox-validation-full\.json/i,
  );
  assert.deepEqual(requests, []);
});

test('validates Apifox operation shapes before making a request', async (context) => {
  const directory = required(temporaryDirectory, 'Missing temporary directory.');
  const { fullPath } = await exportOpenApiDocuments(directory, 'apifox-operation-validation');
  const fullDocument: unknown = JSON.parse(await readFile(fullPath, 'utf8'));
  const firstOperation = required(
    apifoxOperations(fullDocument)[0],
    'Missing Full operation for validation test.',
  );
  delete firstOperation.operationId;
  await writeFile(fullPath, JSON.stringify(fullDocument));
  const requests: string[] = [];
  context.mock.method(globalThis, 'fetch', async (): Promise<Response> => {
    requests.push('fetch');
    return Response.json({ data: { counters: zeroApifoxCounters, errors: [] } });
  });

  await assert.rejects(
    () => publishPlatformApiApifox('456', '1002', fullPath, apifoxEnvironment),
    /requires operationId/i,
  );
  assert.deepEqual(requests, []);
});

test('does not import a later folder after Apifox reports failure counters', async (context) => {
  const directory = required(temporaryDirectory, 'Missing temporary directory.');
  const { publicPath } = await exportOpenApiDocuments(directory, 'apifox-counter-failure');
  const requests: string[] = [];
  context.mock.method(globalThis, 'fetch', async (): Promise<Response> => {
    requests.push('fetch');
    return Response.json({
      data: { counters: { ...zeroApifoxCounters, endpointFailed: 1 }, errors: [] },
    });
  });

  await assert.rejects(
    () => publishPlatformApiApifox('123', '1001', publicPath, apifoxEnvironment),
    /Apifox import failed/i,
  );
  assert.deepEqual(requests, ['fetch']);
});

test('does not import a later folder after Apifox reports errors', async (context) => {
  const directory = required(temporaryDirectory, 'Missing temporary directory.');
  const { publicPath } = await exportOpenApiDocuments(directory, 'apifox-error-failure');
  const requests: string[] = [];
  context.mock.method(globalThis, 'fetch', async (): Promise<Response> => {
    requests.push('fetch');
    return Response.json({
      data: {
        counters: zeroApifoxCounters,
        errors: [{ code: '422', message: 'Full import failed' }],
      },
    });
  });

  await assert.rejects(
    () => publishPlatformApiApifox('123', '1001', publicPath, apifoxEnvironment),
    /Full import failed/i,
  );
  assert.deepEqual(requests, ['fetch']);
});

test('does not import a later folder after an incomplete Apifox response', async (context) => {
  const directory = required(temporaryDirectory, 'Missing temporary directory.');
  const { publicPath } = await exportOpenApiDocuments(directory, 'apifox-incomplete');
  const requests: string[] = [];
  context.mock.method(globalThis, 'fetch', async (): Promise<Response> => {
    requests.push('fetch');
    return Response.json({ data: { counters: { endpointFailed: 0 }, errors: [] } });
  });

  await assert.rejects(
    () => publishPlatformApiApifox('123', '1001', publicPath, apifoxEnvironment),
    /endpointCreated/i,
  );
  assert.deepEqual(requests, ['fetch']);
});

test('rejects an incomplete Apifox import response', () => {
  assert.throws(
    () => parseApifoxImportResult({ data: { counters: { endpointFailed: 0 }, errors: [] } }),
    /endpointCreated/i,
  );
});

test('accepts a complete zero-failure Apifox import result', () => {
  const response = {
    data: {
      counters: zeroApifoxCounters,
      errors: [],
    },
  };
  assert.doesNotThrow(() => parseApifoxImportResult(response));
});

for (const failureCounter of [
  'endpointFailed',
  'endpointFolderFailed',
  'schemaFailed',
  'schemaFolderFailed',
] as const)
  test(`rejects a nonzero Apifox ${failureCounter} response`, () => {
    assert.throws(
      () =>
        parseApifoxImportResult({
          data: { counters: { ...zeroApifoxCounters, [failureCounter]: 1 }, errors: [] },
        }),
      new RegExp(failureCounter),
    );
  });

test('rejects Apifox errors returned with HTTP 200', () => {
  const reportedError = {
    data: {
      counters: zeroApifoxCounters,
      errors: [{ code: '422', message: 'partial import' }],
    },
  };
  assert.throws(() => parseApifoxImportResult(reportedError), /partial import/);
});
