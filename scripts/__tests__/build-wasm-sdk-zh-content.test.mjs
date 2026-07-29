import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  buildLocalizedSdkData,
  resolveLocalizedRouteTitle,
} from '../build-wasm-sdk-zh-content.mjs';
import { validateLocalizedSdkData } from '../check-localized-sdk-content.mjs';

const routeA = {
  contextKey: 'chat/sdk/wasm',
  navOrder: 1,
  path: '/sdk/wasm/overview',
  sourceIndex: 1,
  title: 'OpenIM SDK for WASM',
};

const routeB = {
  contextKey: 'chat/sdk/wasm',
  navOrder: 2,
  path: '/sdk/wasm/message/overview-message',
  sourceIndex: 2,
  title: 'Overview',
};

const manualPageA = {
  body: '## 接入准备\r\n\r\n仅包含人工编写的 OpenIM 内容。',
  frontmatter: {
    description: '人工中文描述',
    sourcePath: routeA.path,
    title: 'OpenIM WASM SDK 概览',
  },
};

const auditA = {
  currentPath: routeA.path,
  locales: { zh: { reviewStatus: 'written' } },
};

const auditB = {
  currentPath: routeB.path,
  locales: { zh: { reviewStatus: 'structure-only' } },
};

test('only packages supplied manual pages', () => {
  const result = buildLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages: new Map([[routeA.path, manualPageA]]),
    auditPages: new Map([
      [routeA.path, auditA],
      [routeB.path, auditB],
    ]),
    navigationLabels: {},
  });

  assert.deepEqual(Object.keys(result.pages), [routeA.path]);
  assert.deepEqual(result.pendingPaths, [routeB.path]);
  assert.equal(result.pages[routeB.path], undefined);
});

test('preserves manually reviewed terminology verbatim', () => {
  const manualPage = {
    body: '## 开放频道\r\n\r\n通过频道 URL 获取开放频道。',
    frontmatter: {
      description: '说明开放频道和频道 URL。',
      sourcePath: routeA.path,
      title: '开放频道概览',
    },
  };
  const result = buildLocalizedSdkData({
    routes: [routeA],
    manualPages: new Map([[routeA.path, manualPage]]),
    auditPages: new Map([[routeA.path, auditA]]),
    navigationLabels: {},
  });

  assert.equal(result.pages[routeA.path].body, '## 开放频道\n\n通过频道 URL 获取开放频道。');
  assert.equal(result.pages[routeA.path].description, manualPage.frontmatter.description);
  assert.equal(result.pages[routeA.path].title, manualPage.frontmatter.title);
});

test('rejects generated body content for a pending path', () => {
  const manualPages = new Map([[routeA.path, manualPageA]]);
  const auditPages = new Map([
    [routeA.path, auditA],
    [routeB.path, auditB],
  ]);
  const localized = buildLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages,
    auditPages,
    navigationLabels: {},
  });
  localized.pages[routeB.path] = { body: '自动生成的语义正文' };

  const errors = validateLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages,
    auditPages,
    localized,
  });

  assert.ok(
    errors.some((error) => error.includes(`${routeB.path}: pending path has generated body`)),
  );
});

test('rejects a generated body that differs from normalized manual MDX', () => {
  const manualPages = new Map([[routeA.path, manualPageA]]);
  const auditPages = new Map([
    [routeA.path, auditA],
    [routeB.path, auditB],
  ]);
  const localized = buildLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages,
    auditPages,
    navigationLabels: {},
  });
  localized.pages[routeA.path].body = '被改写的正文';

  const errors = validateLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages,
    auditPages,
    localized,
  });

  assert.ok(errors.some((error) => error.includes(`${routeA.path}: generated body differs`)));
});

test('rejects manual MDX without required localized frontmatter', () => {
  const incompleteManualPage = {
    body: '人工正文',
    frontmatter: {},
  };
  const manualPages = new Map([[routeA.path, incompleteManualPage]]);
  const auditPages = new Map([
    [routeA.path, auditA],
    [routeB.path, auditB],
  ]);
  const localized = buildLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages,
    auditPages,
    navigationLabels: {},
  });

  const errors = validateLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages,
    auditPages,
    localized,
  });

  assert.ok(errors.includes(`${routeA.path}: manual MDX requires a non-empty title`));
  assert.ok(errors.includes(`${routeA.path}: manual MDX requires a non-empty description`));
  assert.ok(errors.includes(`${routeA.path}: manual MDX sourcePath must equal the route path`));
});

test('every active WASM route title has a Chinese structural label', () => {
  const routes = JSON.parse(readFileSync('src/generated/routes.json', 'utf8')).filter(
    (route) => route.contextKey === 'chat/sdk/wasm',
  );
  const navigationLabels = JSON.parse(
    readFileSync('data/structure/wasm-navigation-labels.json', 'utf8'),
  );
  const sidebar = JSON.parse(readFileSync('data/structure/wasm-sidebar.json', 'utf8'));
  const sidebarEntries = new Map(
    flattenSidebarEntries(sidebar.nodes).map((entry) => [entry.path, entry]),
  );

  assert.equal(routes.length, flattenSidebarPaths(sidebar.nodes).length);
  for (const route of routes) {
    const navigationTitle = sidebarEntries.get(route.path)?.navigationTitle ?? route.title;
    const title = resolveLocalizedRouteTitle(navigationTitle, navigationLabels);
    assert.match(title ?? '', /[\u3400-\u9fff]/, route.path);
  }
});

test('rejects an active route without a Chinese structural title label', () => {
  const manualPages = new Map([[routeA.path, manualPageA]]);
  const auditPages = new Map([
    [routeA.path, auditA],
    [routeB.path, auditB],
  ]);
  const localized = buildLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages,
    auditPages,
    navigationLabels: {},
  });

  const errors = validateLocalizedSdkData({
    routes: [routeA, routeB],
    manualPages,
    auditPages,
    localized,
  });

  assert.ok(errors.includes(`${routeB.path}: active route requires a Chinese structural title`));
});

function flattenSidebarPaths(nodes) {
  return nodes.flatMap((node) => {
    if (typeof node === 'string') return [node];
    if (node.path) return [node.path];
    return flattenSidebarPaths(node.children ?? []);
  });
}

function flattenSidebarEntries(nodes) {
  return nodes.flatMap((node) => {
    if (typeof node === 'string') return [{ path: node }];
    if (node.path) return [node];
    return flattenSidebarEntries(node.children ?? []);
  });
}
