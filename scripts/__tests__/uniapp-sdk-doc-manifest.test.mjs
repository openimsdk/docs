import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

import { validateUniAppSdkDocManifest } from '../lib/uniapp-sdk-doc-manifest.mjs';

const manifest = JSON.parse(
  readFileSync('data/structure/uniapp-sdk-doc-manifest.json', 'utf8'),
);

test('accepts the frozen public-safe Private uni-app SDK documentation contract', () => {
  const result = validateUniAppSdkDocManifest(manifest);

  assert.deepEqual(result.counts, {
    constants: 109,
    types: 237,
    operations: 162,
    eventSubscriptions: 81,
    eventControls: 2,
    events: 81,
  });
  assert.equal(result.commercialOperations, 51);
  assert.equal(result.commercialEventSubscriptions, 33);
  assert.equal(result.commercialTypes, 77);
  assert.deepEqual(result.unsupportedHarmonyOperations, [
    'translateMessage',
    'translateText',
    'updateFcmToken',
    'updateToken',
  ]);
  assert.equal(result.unsupportedHarmonyEvents.length, 10);
  assert.equal(result.syntheticEvents.includes('onSDKSessionChanged'), true);
  assert.deepEqual(result.retiredCallables, [
    { id: 200083, name: 'getArchivedConversationList' },
  ]);
});

test('rejects consumer contract drift and private native provenance', () => {
  assert.throws(
    () =>
      validateUniAppSdkDocManifest({
        ...manifest,
        baseline: { ...manifest.baseline, interfaceSha256: 'drifted' },
      }),
    /interface baseline/i,
  );
  assert.throws(
    () => validateUniAppSdkDocManifest({ ...manifest, nativeArtifact: 'imsdk.har' }),
    /private native provenance/i,
  );
});

test('keeps every uni-app code import on the frozen interface and retired APIs out of content', () => {
  const allowedSymbols = new Set(
    [...manifest.callables, ...manifest.types, ...manifest.constants].map((item) => item.name),
  );
  const roots = [
    'content/zh/docs/chat/sdk/uniapp',
    'content/docs/chat/sdk/uniapp',
  ];

  for (const root of roots) {
    for (const file of listMdxFiles(root)) {
      const source = readFileSync(file, 'utf8');
      assert.equal(source.includes('getArchivedConversationList'), false, file);
      for (const match of source.matchAll(
        /import\s*\{([\s\S]*?)\}\s*from\s*['"]@\/uni_modules\/unix-openim-sdk['"]/g,
      )) {
        for (const imported of match[1].split(',')) {
          const name = imported.trim().replace(/^type\s+/, '').split(/\s+as\s+/)[0];
          if (name) assert.equal(allowedSymbols.has(name), true, `${file}: unknown import ${name}`);
        }
      }
    }
  }
});

function listMdxFiles(root) {
  return readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const path = join(root, entry.name);
    return entry.isDirectory() ? listMdxFiles(path) : entry.name.endsWith('.mdx') ? [path] : [];
  });
}
