import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { clientSdkPlatformIds, getClientSdkPlatform } from '../lib/client-sdk-platforms.mjs';
import {
  buildClientSdkSidebar,
  decideClientSdkSidebarApplication,
  getClientSdkSidebarPaths,
} from '../lib/client-sdk-sidebar.mjs';

const wasmSidebar = readJson('data/structure/wasm-sidebar.json');

test('registers the supported client SDK platforms and their structure paths', () => {
  assert.deepEqual(clientSdkPlatformIds, ['ios', 'flutter', 'wasm']);
  assert.deepEqual(getClientSdkPlatform('ios'), {
    id: 'ios',
    contextKey: 'chat/sdk/ios',
    routePrefix: '/sdk/ios',
    manualRoot: 'content/zh/docs/chat/sdk/ios',
    auditPath: 'data/structure/ios-content-audit.json',
    labelsPath: 'data/structure/ios-navigation-labels.json',
    sidebarPath: 'data/structure/ios-sidebar.json',
    localizedOutputPath: 'src/generated/ios-sdk-zh-content.json',
    sdkSourceKey: 'iosSdk',
    sdkTag: '3.8.3-hotfix.12',
    sdkCommit: '17fb969fd3a360f00fe65f476435b81857e274f8',
  });
  assert.equal(getClientSdkPlatform('flutter').contextKey, 'chat/sdk/flutter');
  assert.equal(getClientSdkPlatform('wasm').contextKey, 'chat/sdk/wasm');
  assert.throws(() => getClientSdkPlatform('android'), /Unknown client SDK platform: android/);
});

test('native sidebars keep unique platform routes and may extend the WASM structure', () => {
  const wasmPaths = getClientSdkSidebarPaths(wasmSidebar);
  const wasmSuffixes = new Set(wasmPaths.map((path) => path.replace('/sdk/wasm/', '')));

  for (const platform of ['ios', 'flutter']) {
    const sidebar = readJson(`data/structure/${platform}-sidebar.json`);
    const paths = getClientSdkSidebarPaths(sidebar);
    assert.equal(new Set(paths).size, paths.length, platform);
    assert.ok(
      paths.every((path) => path.startsWith(`/sdk/${platform}/`)),
      platform,
    );
    assert.ok(
      paths.some((path) => !wasmSuffixes.has(path.replace(`/sdk/${platform}/`, ''))),
      `${platform}: expected at least one platform-specific capability route`,
    );
  }
});

test('keeps relationships beside users and account settings beside user profiles', () => {
  const navigation = readJson('src/generated/navigation.json');

  for (const platform of ['wasm', 'ios', 'flutter']) {
    const sidebar = readJson(`data/structure/${platform}-sidebar.json`);
    const user = sidebar.nodes.find((node) => node.id === 'user');
    const relationships = sidebar.nodes.find((node) => node.id === 'relationships');

    assert.ok(user, platform);
    assert.ok(relationships, platform);

    const profile = user.children.find((node) => node.id === 'user/user-profile');
    const onlineStatus = user.children.find((node) => node.id === 'user/online-status');
    const globalReceptionPath =
      platform === 'wasm'
        ? '/sdk/wasm/user/profile/set-global-message-reception'
        : `/sdk/${platform}/user/retrieving-and-updating-user-information/set-global-message-reception`;
    const onlineStatusPaths =
      platform === 'wasm'
        ? [
            '/sdk/wasm/user/online-status/subscribe-users-status',
            '/sdk/wasm/user/online-status/get-subscribe-users-status',
            '/sdk/wasm/user/online-status/unsubscribe-users-status',
          ]
        : [
            `/sdk/${platform}/user/retrieving-and-updating-user-information/subscribe-user-status`,
            `/sdk/${platform}/user/retrieving-and-updating-user-information/get-subscribed-user-status`,
            `/sdk/${platform}/user/retrieving-and-updating-user-information/unsubscribe-user-status`,
          ];

    assert.ok(profile, platform);
    assert.ok(onlineStatus, platform);
    assert.equal(relationships.title, 'Relationships', platform);
    assert.deepEqual(
      relationships.children.map((node) => node.id),
      ['user/friends', 'user/blacklist'],
      platform,
    );
    assert.ok(
      user.children.some((node) => node.path === globalReceptionPath),
      `${platform}: global reception should be a direct child of User`,
    );
    assert.ok(
      !profile.children.some((node) => node.path === globalReceptionPath),
      `${platform}: global reception should not remain inside User profile`,
    );
    assert.deepEqual(
      onlineStatus.children.map((node) => node.path),
      onlineStatusPaths,
      `${platform}: online status should be a direct child group of User`,
    );
    assert.ok(
      !profile.children.some((node) => onlineStatusPaths.includes(node.path)),
      `${platform}: online status should not remain inside User profile`,
    );

    const runtime = navigation.contexts.find((context) => context.key === `chat/sdk/${platform}`);

    assert.ok(runtime, platform);

    const runtimeUser = runtime.nodes.find((node) => node.id === 'user');
    const runtimeRelationships = runtime.nodes.find((node) => node.id === 'relationships');

    assert.ok(runtimeUser, platform);
    assert.ok(runtimeRelationships, platform);

    const runtimeOnlineStatus = runtimeUser.children.find(
      (node) => node.id === 'user/online-status',
    );

    assert.ok(runtimeOnlineStatus, platform);

    const runtimeProfile = runtimeUser.children.find((node) => node.id === 'user/user-profile');

    assert.deepEqual(
      runtimeRelationships.children.map((node) => node.id),
      ['user/friends', 'user/blacklist'],
      `${platform}: generated navigation should expose the relationship groups`,
    );
    assert.ok(
      runtimeUser.children.some((node) => node.href === globalReceptionPath),
      `${platform}: generated navigation should expose global reception beside User profile`,
    );
    assert.ok(
      !runtimeProfile.children.some((node) => node.href === globalReceptionPath),
      `${platform}: generated navigation should not nest global reception in User profile`,
    );
    assert.deepEqual(
      runtimeOnlineStatus.children.map((node) => node.href),
      onlineStatusPaths,
      `${platform}: generated navigation should expose Online status beside User profile`,
    );
    assert.ok(
      !runtimeProfile.children.some((node) => onlineStatusPaths.includes(node.href)),
      `${platform}: generated navigation should not nest Online status in User profile`,
    );
  }
});

test('native conversation groups keep one API per page and one event overview', () => {
  for (const platform of ['ios', 'flutter']) {
    const audit = readJson(`data/structure/${platform}-content-audit.json`);
    const pages = audit.pages.filter(
      (page) =>
        page.disposition !== 'omit' &&
        page.currentPath.includes('/conversation/managing-conversation-groups/'),
    );
    assert.equal(pages.length, 10, platform);
    const overview = pages.find((page) =>
      page.currentPath.endsWith('/overview-conversation-groups'),
    );
    assert.ok(overview, platform);
    assert.equal(overview.sdkEvents.length, 5, platform);
    assert.ok(
      pages
        .filter((page) => page !== overview)
        .every((page) => page.sdkMethods.length === 1 && page.sdkEvents.length === 0),
      platform,
    );
  }
});

test('builds the existing navigation node shape and derives page ids from relativePath', () => {
  const config = readJson('data/structure/ios-sidebar.json');
  const paths = getClientSdkSidebarPaths(config);
  const result = buildClientSdkSidebar({
    platform: 'ios',
    config,
    routes: createRoutes('ios', paths),
  });

  assert.equal(result.pageCount, paths.length);
  assert.equal(result.sidebarExpansion, 'active-path');
  assert.deepEqual(result.nodes[0], {
    id: 'overview',
    segment: 'overview',
    title: 'Title 1',
    href: '/sdk/ios/overview',
    type: 'page',
    children: [],
    minIndex: 1,
    navigationTitle: 'Overview',
  });
});

test('skips an incomplete native route tree without partially applying its sidebar', () => {
  const config = readJson('data/structure/ios-sidebar.json');
  const paths = getClientSdkSidebarPaths(config);

  assert.deepEqual(
    decideClientSdkSidebarApplication({
      platform: 'ios',
      config,
      routes: createRoutes('ios', paths.slice(0, -1)),
    }),
    { mode: 'skip', reason: 'native-route-tree-not-migrated' },
  );
});

test('applies a native sidebar after its complete reviewed route tree is present', () => {
  const config = readJson('data/structure/flutter-sidebar.json');
  const paths = getClientSdkSidebarPaths(config);

  assert.deepEqual(
    decideClientSdkSidebarApplication({
      platform: 'flutter',
      config,
      routes: createRoutes('flutter', paths),
    }),
    { mode: 'apply', reason: 'complete-native-structure' },
  );
});

test('keeps WASM sidebar validation strict when its route tree is incomplete', () => {
  const config = readJson('data/structure/wasm-sidebar.json');
  const paths = getClientSdkSidebarPaths(config);
  const routes = createRoutes('wasm', paths.slice(0, -1));

  assert.deepEqual(decideClientSdkSidebarApplication({ platform: 'wasm', config, routes }), {
    mode: 'apply',
    reason: 'strict',
  });
  assert.throws(
    () => buildClientSdkSidebar({ platform: 'wasm', config, routes }),
    /\[wasm\].*unknown route/i,
  );
});

test('rejects duplicate sidebar paths with the platform in the error', () => {
  const config = { nodes: ['/sdk/ios/overview', '/sdk/ios/overview'] };
  assert.throws(
    () =>
      buildClientSdkSidebar({
        platform: 'ios',
        config,
        routes: createRoutes('ios', ['/sdk/ios/overview']),
      }),
    /\[ios\].*duplicate/i,
  );
});

test('rejects unknown sidebar paths with the platform in the error', () => {
  const config = { nodes: ['/sdk/flutter/overview', '/sdk/flutter/unknown'] };
  assert.throws(
    () =>
      buildClientSdkSidebar({
        platform: 'flutter',
        config,
        routes: createRoutes('flutter', ['/sdk/flutter/overview']),
      }),
    /\[flutter\].*unknown route.*\/sdk\/flutter\/unknown/i,
  );
});

test('rejects omitted active routes with the platform in the error', () => {
  const config = { nodes: ['/sdk/wasm/overview'] };
  const routes = createRoutes('wasm', ['/sdk/wasm/overview', '/sdk/wasm/logger']);
  assert.throws(
    () => buildClientSdkSidebar({ platform: 'wasm', config, routes }),
    /\[wasm\].*omits active routes.*\/sdk\/wasm\/logger/i,
  );
});

function createRoutes(platform, paths) {
  return paths.map((path, index) => ({
    path,
    relativePath: path.slice(1),
    contextKey: `chat/sdk/${platform}`,
    title: `Title ${index + 1}`,
    navOrder: index + 1,
  }));
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}
