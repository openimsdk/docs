import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

import {
  isChatDocumentationPath,
  localizedContentFile,
  localizedContentFileCandidates,
} from '../lib/chat-content-paths.mjs';

const routes = JSON.parse(readFileSync('src/generated/routes.json', 'utf8'));
const structure = JSON.parse(readFileSync('data/structure/chat-pages.json', 'utf8'));
const navigation = JSON.parse(readFileSync('src/generated/navigation.json', 'utf8'));
const redirects = JSON.parse(readFileSync('data/structure/wasm-legacy-redirects.json', 'utf8'));
const platformCapabilityDiff = JSON.parse(
  readFileSync('data/structure/platform-sdk-capability-diff.json', 'utf8'),
);

test('publishes Chat documentation at root-level product routes', () => {
  assert.ok(routes.some((route) => route.path === '/sdk/wasm/overview'));
  assert.ok(routes.some((route) => route.path === '/platform-api/overview'));
  assert.equal(
    routes.some((route) => route.path.startsWith('/docs/chat/')),
    false,
  );
  assert.equal(
    structure.some((page) => page.openimPath.startsWith('/docs/chat/')),
    false,
  );
});

test('keeps navigation and redirects out of the removed public prefix', () => {
  for (const context of navigation.contexts) {
    assert.equal(context.rootPath.startsWith('/docs/chat/'), false);
    assert.equal(context.overviewPath.startsWith('/docs/chat/'), false);
  }
  for (const redirect of redirects) {
    assert.equal(redirect.source.startsWith('/docs/chat/'), false);
    assert.equal(redirect.destination.startsWith('/docs/chat/'), false);
  }
});

test('provides root-level route handlers for both products and locales', () => {
  for (const file of [
    'app/sdk/[[...slug]]/page.tsx',
    'app/platform-api/[[...slug]]/page.tsx',
    'app/[locale]/sdk/[[...slug]]/page.tsx',
    'app/[locale]/platform-api/[[...slug]]/page.tsx',
  ]) {
    assert.equal(existsSync(file), true, file);
  }
});

test('maps public Chat routes to their retained physical content directories', () => {
  assert.equal(
    localizedContentFile('content/docs/chat/sdk/wasm/overview.mdx'),
    'content/zh/docs/chat/sdk/wasm/overview.mdx',
  );
  assert.equal(isChatDocumentationPath('/sdk/wasm/overview'), true);
  assert.equal(isChatDocumentationPath('/platform-api/overview'), true);
  assert.equal(isChatDocumentationPath('/docs/guides'), false);
  assert.equal(isChatDocumentationPath('/docs/chat/sdk/wasm/overview'), false);
});

test('finds Platform API Chinese pages retained under the legacy v3 directory', () => {
  assert.deepEqual(
    localizedContentFileCandidates(
      'content/docs/chat/platform-api/user/account-governance/ban-user.mdx',
    ),
    [
      'content/zh/docs/chat/platform-api/user/account-governance/ban-user.mdx',
      'content/zh/docs/chat/platform-api/v3/user/account-governance/ban-user.mdx',
    ],
  );
});

test('keeps SDK document links on current routable addresses', () => {
  const routePaths = new Set(routes.map((route) => route.path));
  const oldExternalLinks = [];
  const unroutableLinks = [];

  for (const root of ['content/docs/chat/sdk', 'content/zh/docs/chat/sdk']) {
    for (const file of listMdxFiles(root)) {
      const body = readFileSync(file, 'utf8');
      for (const match of body.matchAll(/\]\(([^)\s]+)(?:\s+['"][^)]*['"])?\)/g)) {
        const rawUrl = match[1].replace(/^<|>$/g, '');
        if (/^https?:\/\/docs\.openim\.io(?:\/|$)/.test(rawUrl)) {
          oldExternalLinks.push(`${file}: ${rawUrl}`);
          continue;
        }

        const path = rawUrl.split(/[?#]/, 1)[0].replace(/^\/zh(?=\/)/, '');
        if (path.startsWith('/sdk/') && !routePaths.has(path)) {
          unroutableLinks.push(`${file}: ${rawUrl}`);
        }
      }
    }
  }

  assert.deepEqual(oldExternalLinks, []);
  assert.deepEqual(unroutableLinks, []);

  for (const method of platformCapabilityDiff.miniprogram.missingMethods) {
    for (const path of method.wasmPages) {
      assert.equal(routePaths.has(path), true, `${method.name}: ${path}`);
    }
  }
});

function listMdxFiles(root) {
  return readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const path = join(root, entry.name);
    if (entry.isDirectory()) return listMdxFiles(path);
    return path.endsWith('.mdx') ? [path] : [];
  });
}
