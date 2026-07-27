import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import {
  exportOpenApi,
  parseCommandArguments,
  PlatformApiError,
  projectOpenApiDocument,
  type PlatformApiCommand,
} from './openapi.js';

function parse(args: readonly string[]): PlatformApiCommand {
  return parseCommandArguments(args);
}

function project(document: unknown, options: { readonly category?: string }) {
  return projectOpenApiDocument(document, options);
}

function openApiDocument(): Record<string, unknown> {
  return {
    info: { title: 'Projection test', version: '1.0.0' },
    openapi: '3.0.3',
    paths: {
      '/messages': {
        get: {
          responses: { '200': { description: 'ok' } },
          tags: ['Messages'],
          'x-export-category': 'Public',
        },
        post: { responses: { '200': { description: 'ok' } }, tags: ['Messages'] },
        summary: 'Preserve this path metadata.',
      },
      '/users': {
        get: {
          responses: { '200': { description: 'ok' } },
          tags: ['Users'],
          'x-export-category': 'Public',
        },
      },
      '/private': {
        post: { responses: { '200': { description: 'ok' } }, tags: ['Users'] },
      },
    },
    tags: [
      { description: 'Message operations.', name: 'Messages' },
      { description: 'User operations.', name: 'Users' },
    ],
    'x-document-metadata': { retained: true },
  };
}

test('parses category export options when every value is present', () => {
  assert.deepEqual(parse(['export', '--', 'input.json', 'output.json', '--category', 'Public']), {
    command: 'export',
    inputPath: 'input.json',
    outputPath: 'output.json',
    category: 'Public',
  });
});

test('parses one target publication for both publication platforms', () => {
  const postmanPublication = {
    targetId: 'target-id',
    inputPath: 'public.json',
  };
  assert.deepEqual(parse(['publish-postman', 'target-id', 'public.json']), {
    command: 'publish-postman',
    ...postmanPublication,
  });
  assert.deepEqual(parse(['publish-apifox', '123', '456', 'public.json']), {
    command: 'publish-apifox',
    targetId: '123',
    moduleId: '456',
    inputPath: 'public.json',
  });
  assert.deepEqual(parse([]), { command: 'help' });
  for (const command of ['export', 'publish-postman', 'publish-apifox'])
    assert.deepEqual(parse([command, '--help']), { command: 'help' });
});

for (const [name, args, message] of [
  ['unknown commands', ['publish-other', 'collection.json'], /publish-other/],
  ['unknown options', ['publish-postman', 'target', '--unknown'], /--unknown/],
  ['equals-form options', ['export', 'in', 'out', '--category=Public'], /--category=Public/],
  ['missing publication arguments', ['publish-apifox'], /PROJECT_ID.*MODULE_ID.*INPUT_FILE/i],
  [
    'extra positionals',
    ['publish-apifox', 'project', 'module', 'input.json', 'extra'],
    /PROJECT_ID.*MODULE_ID.*INPUT_FILE/i,
  ],
  ['option tokens as positionals', ['export', 'input.json', '--category', 'Public'], /OUTPUT/],
  [
    'misplaced separators',
    ['publish-postman', 'target', 'file.json', '--', 'extra'],
    /COLLECTION_ID.*INPUT_FILE/i,
  ],
  ['missing option values', ['export', 'in', 'out', '--category'], /--category/],
  [
    'repeated categories',
    ['export', 'in', 'out', '--category', 'Public', '--category', 'Full'],
    /--category/,
  ],
  ['blank target ID', ['publish-postman', '', 'input.json'], /COLLECTION_ID/i],
  ['blank module ID', ['publish-apifox', 'project', '', 'input.json'], /MODULE_ID/i],
  ['blank input path', ['publish-postman', 'target', ''], /INPUT_FILE/i],
] as const)
  test(`rejects ${name} with a PlatformApiError`, () => {
    assert.throws(
      () => parse(args),
      (error: unknown) => error instanceof PlatformApiError && message.test(error.message),
    );
  });

test('projects exact export categories while removing the extension and preserving input', () => {
  const source = openApiDocument();
  const original = JSON.parse(JSON.stringify(source));
  const projected = project(source, { category: 'Public' });
  assert.deepEqual(source, original);
  assert.deepEqual(projected.tags, [
    { description: 'Message operations.', name: 'Messages' },
    { description: 'User operations.', name: 'Users' },
  ]);
  assert.deepEqual(projected.paths, {
    '/messages': {
      get: { responses: { '200': { description: 'ok' } }, tags: ['Messages'] },
      summary: 'Preserve this path metadata.',
    },
    '/users': {
      get: { responses: { '200': { description: 'ok' } }, tags: ['Users'] },
    },
  });
  assert.deepEqual(projected['x-document-metadata'], { retained: true });
});

test('includes all operations without category filtering', () => {
  const projected = project(openApiDocument(), {});
  assert.deepEqual(projected.paths, {
    '/messages': {
      get: { responses: { '200': { description: 'ok' } }, tags: ['Messages'] },
      post: { responses: { '200': { description: 'ok' } }, tags: ['Messages'] },
      summary: 'Preserve this path metadata.',
    },
    '/private': {
      post: { responses: { '200': { description: 'ok' } }, tags: ['Users'] },
    },
    '/users': {
      get: { responses: { '200': { description: 'ok' } }, tags: ['Users'] },
    },
  });
});

test('rejects unmatched tags and path references before conversion', () => {
  assert.throws(
    () => project(openApiDocument(), { category: 'public' }),
    (error: unknown) => error instanceof PlatformApiError && /public/.test(error.message),
  );
  assert.throws(
    () =>
      project(
        {
          info: { title: 'Referenced', version: '1.0.0' },
          openapi: '3.0.3',
          paths: { '/users': { $ref: './paths/users.yaml' } },
        },
        {},
      ),
    (error: unknown) => error instanceof PlatformApiError && /bundle first/i.test(error.message),
  );
  assert.throws(
    () =>
      project(
        {
          info: { title: 'Referenced operation', version: '1.0.0' },
          openapi: '3.0.3',
          paths: { '/users': { get: { $ref: './operations/users.yaml' } } },
        },
        {},
      ),
    (error: unknown) => error instanceof PlatformApiError && /bundle first/i.test(error.message),
  );
});

test('writes deterministic exports atomically without replacing stale output on failure', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'openim-postman-export-'));
  const inputPath = join(directory, 'openapi.json');
  const outputPath = join(directory, 'collection.json');
  const malformedPath = join(directory, 'malformed.json');
  const unmatchedOutputPath = join(directory, 'unmatched.json');
  try {
    await writeFile(inputPath, JSON.stringify(openApiDocument()));
    await exportOpenApi(inputPath, outputPath, { category: 'Public' });
    const first = await readFile(outputPath, 'utf8');
    await exportOpenApi(inputPath, outputPath, { category: 'Public' });
    assert.equal(await readFile(outputPath, 'utf8'), first);
    assert.match(first, /\n$/);
    await writeFile(malformedPath, '{');
    await assert.rejects(() => exportOpenApi(malformedPath, outputPath, {}), /bundle first/i);
    assert.equal(await readFile(outputPath, 'utf8'), first);
    await assert.rejects(
      () => exportOpenApi(inputPath, unmatchedOutputPath, { category: 'Missing' }),
      /Missing/,
    );
    await assert.rejects(() => readFile(unmatchedOutputPath, 'utf8'), { code: 'ENOENT' });
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
});
