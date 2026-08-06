import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const audit = readJson('data/structure/client-sdk-common-content-audit.json');
const routes = readJson('src/generated/routes.json');
const navigation = readJson('src/generated/navigation.json');

test('publishes the shared client SDK error-code reference in its own context', () => {
  assert.equal(audit.schemaVersion, 1);
  assert.equal(audit.pages.length, 1);

  const page = audit.pages[0];
  assert.equal(page.currentPath, '/sdk/error-codes');
  assert.equal(page.locales.en.reviewStatus, 'published');
  assert.equal(page.locales.zh.reviewStatus, 'published');

  const route = routes.find(({ path }) => path === page.currentPath);
  assert.ok(route);
  assert.equal(route.contextKey, 'chat/sdk/common');
  assert.equal(route.platform, null);
  assert.equal(route.status, 'published');
  assert.equal(route.contentFile, page.manualFiles.en);

  const context = navigation.contexts.find(({ key }) => key === route.contextKey);
  assert.ok(context);
  assert.equal(context.rootPath, '/sdk');
  assert.equal(context.overviewPath, page.currentPath);
  assert.deepEqual(
    context.nodes.map(({ href }) => href),
    [page.currentPath],
  );
});

test('keeps both manually reviewed locales and immutable source evidence', () => {
  const page = audit.pages[0];
  for (const locale of ['en', 'zh']) {
    const file = page.manualFiles[locale];
    assert.equal(existsSync(file), true, file);
    const source = readFileSync(file, 'utf8');
    assert.match(source, /sourcePath: ["']\/sdk\/error-codes["']/);
    assert.doesNotMatch(source, /operationID/i);
  }

  for (const source of page.openimSources) {
    assert.match(source, /\/blob\/[0-9a-f]{40}\//);
  }
});

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}
