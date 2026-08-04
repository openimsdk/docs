import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import {
  buildLocalizedSdkData,
  normalizeManualBody,
  parseMdx,
  resolvePlatformRoutes,
} from '../build-client-sdk-zh-content.mjs';
import { getClientSdkPlatform } from '../lib/client-sdk-platforms.mjs';

test('builds platform-specific metadata and only packages manual MDX', () => {
  const platform = getClientSdkPlatform('ios');
  const route = { path: '/sdk/ios/overview', title: 'OpenIM SDK for iOS' };
  const manual = {
    body: '## 标题\r\n\r\n人工正文。',
    frontmatter: { title: 'iOS 概览', description: '描述', sourcePath: route.path },
  };
  const result = buildLocalizedSdkData({
    platform,
    routes: [route],
    manualPages: new Map([[route.path, manual]]),
    auditPages: new Map([[route.path, { locales: { zh: { reviewStatus: 'written' } } }]]),
    navigationLabels: { 'OpenIM SDK for iOS': 'OpenIM iOS SDK 概览' },
  });

  assert.equal(result.sourceContext, 'chat/sdk/ios');
  assert.equal(result.sourceRoot, 'content/zh/docs/chat/sdk/ios');
  assert.equal(result.pages[route.path].body, '## 标题\n\n人工正文。');
  assert.deepEqual(result.pages[route.path].headings, [{ depth: 2, title: '标题', url: '#标题' }]);
});

test('keeps parsing and normalization pure', () => {
  const parsed = parseMdx('---\r\ntitle: "标题"\r\n---\r\n\r\n正文\r\n');
  assert.deepEqual(parsed, { body: '正文', frontmatter: { title: '标题' } });
  assert.equal(normalizeManualBody(' 正文\r\n'), '正文');
});

test('resolves missing native route records from the reviewed WASM suffix baseline', () => {
  const routesData = JSON.parse(readFileSync('src/generated/routes.json', 'utf8'));
  const sidebar = { nodes: ['/sdk/flutter/getting-started/before-you-start'] };
  const [route] = resolvePlatformRoutes({
    platform: getClientSdkPlatform('flutter'),
    routesData,
    sidebar,
  });
  assert.equal(route.path, '/sdk/flutter/getting-started/before-you-start');
  assert.equal(route.contextKey, 'chat/sdk/flutter');
  assert.equal(route.title, 'Before you start');
});

test('native audit seeds and generated packages retain the fixed structural contract', () => {
  const expected = {
    ios: {
      context: 'chat/sdk/ios',
      root: 'content/zh/docs/chat/sdk/ios',
      sdkKey: 'iosSdk',
      tag: '3.8.3-hotfix.12',
      commit: '17fb969fd3a360f00fe65f476435b81857e274f8',
    },
    flutter: {
      context: 'chat/sdk/flutter',
      root: 'content/zh/docs/chat/sdk/flutter',
      sdkKey: 'flutterSdk',
      tag: '3.8.3+hotfix.12',
      commit: '95889be7a26dce6fe896ef22096c9036cc25fc9b',
    },
  };

  for (const [platform, contract] of Object.entries(expected)) {
    const nativeSidebar = JSON.parse(
      readFileSync(`data/structure/${platform}-sidebar.json`, 'utf8'),
    );
    const activePageCount = flattenSidebarPaths(nativeSidebar.nodes).length;
    const audit = JSON.parse(readFileSync(`data/structure/${platform}-content-audit.json`, 'utf8'));
    const generated = JSON.parse(
      readFileSync(`src/generated/${platform}-sdk-zh-content.json`, 'utf8'),
    );
    assert.equal(audit.sources.openimDocs.commit, 'efd0f251b288167e1ca617504b10dd73986429f0');
    assert.equal(audit.sources[contract.sdkKey].tag, contract.tag);
    assert.equal(audit.sources[contract.sdkKey].commit, contract.commit);
    assert.equal(audit.pages.filter((page) => page.disposition !== 'omit').length, activePageCount);
    assert.ok(
      audit.pages.every((page) =>
        ['deferred', 'published'].includes(page.locales.en.reviewStatus),
      ),
    );
    for (const page of audit.pages) {
      assert.ok(
        [
          'structure-only',
          'written',
          'api-verified',
          'example-verified',
          'source-reviewed',
          'published',
        ].includes(
          page.locales.zh.reviewStatus,
        ),
      );
      assert.ok(
        ['pending', 'verified', 'source-reviewed', 'not-applicable'].includes(
          page.locales.zh.exampleVerification.status,
        ),
      );
      assert.ok(Array.isArray(page.locales.zh.exampleVerification.evidence));
      if (page.locales.en.reviewStatus === 'deferred') {
        assert.deepEqual(page.locales.en.exampleVerification, {
          status: 'pending',
          evidence: [],
          reason: null,
        });
      } else {
        assert.ok(
          ['verified', 'not-applicable'].includes(
            page.locales.en.exampleVerification.status,
          ),
        );
      }
    }
    assert.equal(generated.sourceContext, contract.context);
    assert.equal(generated.sourceRoot, contract.root);
    assert.equal(generated.pageCount, activePageCount);
    assert.equal(generated.manualPageCount + generated.pendingPaths.length, activePageCount);
    assert.equal(Object.keys(generated.pages).length, generated.manualPageCount);
    for (const page of audit.pages.filter((page) => page.disposition !== 'omit')) {
      assert.equal(generated.reviewStates[page.currentPath], page.locales.zh.reviewStatus);
    }
  }
});

function flattenSidebarPaths(nodes) {
  return nodes.flatMap((node) => {
    if (typeof node === 'string') return [node];
    if (node.path) return [node.path];
    return flattenSidebarPaths(node.children ?? []);
  });
}
