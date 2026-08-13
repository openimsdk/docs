import { mkdir, readdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import { getClientSdkSidebarPaths } from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();

const conversationGroupTitles = {
  ios: {
    'conversation/managing-conversation-groups/overview-conversation-groups':
      'Conversation group overview',
    'conversation/managing-conversation-groups/create-conversation-group':
      'Open_im_sdkCreateConversationGroup',
    'conversation/managing-conversation-groups/get-conversation-groups':
      'Open_im_sdkGetConversationGroups',
    'conversation/managing-conversation-groups/get-conversation-group-info-with-conversations':
      'Open_im_sdkGetConversationGroupInfoWithConversations',
    'conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id':
      'Open_im_sdkGetConversationGroupByConversationID',
    'conversation/managing-conversation-groups/update-conversation-group':
      'Open_im_sdkUpdateConversationGroup',
    'conversation/managing-conversation-groups/set-conversation-group-order':
      'Open_im_sdkSetConversationGroupOrder',
    'conversation/managing-conversation-groups/add-conversations-to-groups':
      'Open_im_sdkAddConversationsToGroups',
    'conversation/managing-conversation-groups/remove-conversations-from-groups':
      'Open_im_sdkRemoveConversationsFromGroups',
    'conversation/managing-conversation-groups/delete-conversation-group':
      'Open_im_sdkDeleteConversationGroup',
  },
  flutter: {
    'conversation/managing-conversation-groups/overview-conversation-groups':
      'Conversation group overview',
    'conversation/managing-conversation-groups/create-conversation-group':
      'createConversationGroup',
    'conversation/managing-conversation-groups/get-conversation-groups':
      'getConversationGroups',
    'conversation/managing-conversation-groups/get-conversation-group-info-with-conversations':
      'getConversationGroupInfoWithConversations',
    'conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id':
      'getConversationGroupByConversationID',
    'conversation/managing-conversation-groups/update-conversation-group':
      'updateConversationGroup',
    'conversation/managing-conversation-groups/set-conversation-group-order':
      'setConversationGroupOrder',
    'conversation/managing-conversation-groups/add-conversations-to-groups':
      'addConversationsToGroups',
    'conversation/managing-conversation-groups/remove-conversations-from-groups':
      'removeConversationsFromGroups',
    'conversation/managing-conversation-groups/delete-conversation-group':
      'deleteConversationGroup',
  },
  uniapp: {
    'conversation/managing-conversation-groups/get-conversation-group-by-conversation-id':
      'getConversationGroupByConversationID',
  },
};

const uniappBaselineSuffixes = new Map([
  ['message/creating-messages/create-image-message-from-full-path', 'message/creating-messages/create-image-message-by-file'],
  ['message/creating-messages/create-sound-message-from-full-path', 'message/creating-messages/create-sound-message-by-file'],
  ['message/creating-messages/create-video-message-from-full-path', 'message/creating-messages/create-video-message-by-file'],
  ['message/creating-messages/create-file-message-from-full-path', 'message/creating-messages/create-file-message-by-file'],
  ['conversation/managing-conversation-groups/get-conversation-group-by-conversation-id', 'conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id'],
  ['group/group-applications/observe-group-application-badge-count', 'group/group-applications/get-group-application-badge-count'],
]);

const uniappExtensionTitles = new Map([
  ['getting-started/install-initialize-and-inspect-sdk', 'Install, initialize, and inspect the SDK'],
  ['getting-started/handle-app-lifecycle-and-device-state', 'Handle App lifecycle and device state'],
  ['getting-started/update-token-and-observe-sdk-session', 'Update tokens and observe SDK sessions'],
  ['group/check-full-sync-state', 'Check group full-sync state'],
  ['message/composing-messages/translate-text-and-messages', 'Translate text and messages'],
  ['events/handle-data-migration-events', 'Handle data migration events'],
]);

function platformName(platformId) {
  if (platformId === 'ios') return 'iOS';
  if (platformId === 'uniapp') return 'uni-app / uni-app x';
  return 'Flutter';
}

export function resolveClientSdkRouteTitle({ platformId, suffix, baselineTitle }) {
  if (suffix === 'overview') return `OpenIM SDK for ${platformName(platformId)}`;
  if (platformId === 'uniapp' && uniappExtensionTitles.has(suffix)) {
    return uniappExtensionTitles.get(suffix);
  }
  return conversationGroupTitles[platformId]?.[suffix] ?? baselineTitle;
}

export function buildClientSdkSkeleton({ path, platformId, title }) {
  const displayName = platformName(platformId);
  const template = path === `/sdk/${platformId}/overview` ? 'overview' : 'guide';
  return `---
title: '${escapeSingleQuote(title)}'
description: 'OpenIM ${displayName} SDK guide for ${escapeSingleQuote(title)}.'
product: 'sdk'
context: 'chat/sdk/${platformId}'
template: '${template}'
status: 'draft'
lastUpdated: '2026-07-20'
version: 'v4'
platform: '${platformId}'
sourcePath: '${path}'
generatedBy: 'sync-client-sdk-route-skeletons'
---

## Overview

The English version of this OpenIM ${displayName} SDK guide is deferred until the reviewed Chinese documentation is complete.
`;
}

export function isGeneratedClientSdkSkeleton(source) {
  return (
    /generatedBy:\s*['"]sync-client-sdk-route-skeletons['"]/.test(source) ||
    (/status:\s*['"]draft['"]/.test(source) &&
      /context:\s*['"]chat\/sdk\/(?:ios|flutter|uniapp)['"]/.test(source) &&
      /The English version of this OpenIM (?:iOS|Flutter|uni-app \/ uni-app x) SDK guide is deferred/.test(source))
  );
}

export function resolveClientSdkSkeletonRoutes({ platformId, sidebar, routes }) {
  const routeByPath = new Map(routes.map((route) => [route.path, route]));
  const wasmBySuffix = new Map(
    routes
      .filter((route) => route.contextKey === 'chat/sdk/wasm')
      .map((route) => [route.path.replace('/sdk/wasm/', ''), route]),
  );
  return getClientSdkSidebarPaths(sidebar).map((path) => {
    const suffix = path.replace(`/sdk/${platformId}/`, '');
    const baseline = wasmBySuffix.get(
      platformId === 'uniapp' ? (uniappBaselineSuffixes.get(suffix) ?? suffix) : suffix,
    );
    const existing = routeByPath.get(path);
    const extensionTitle = platformId === 'uniapp' ? uniappExtensionTitles.get(suffix) : undefined;
    if (!baseline && !existing && !extensionTitle)
      throw new Error(`[${platformId}] missing WASM baseline or platform extension: ${suffix}`);
    return {
      path,
      title: resolveClientSdkRouteTitle({
        platformId,
        suffix,
        baselineTitle: existing?.title ?? baseline?.title ?? extensionTitle,
      }),
    };
  });
}

export function replaceClientSdkRouteRecords({ platformId, sidebar, routes }) {
  const platform = getClientSdkPlatform(platformId);
  const current = routes.filter((route) => route.contextKey === platform.contextKey);
  if (current.length === 0)
    throw new Error(`[${platformId}] cannot locate the existing route range`);
  const baseNavOrder = Math.min(...current.map((route) => route.navOrder));
  const otherRoutes = routes.filter((route) => route.contextKey !== platform.contextKey);
  const baseId = Math.max(...otherRoutes.map((route) => route.id)) + 1;
  const baseSourceIndex = Math.max(...otherRoutes.map((route) => route.sourceIndex)) + 1;
  const contextTitle = `SDKs · ${platformName(platformId)} · v4`;
  const wasmBySuffix = new Map(
    routes
      .filter((route) => route.contextKey === 'chat/sdk/wasm')
      .map((route) => [route.path.replace('/sdk/wasm/', ''), route]),
  );
  const existingByPath = new Map(current.map((route) => [route.path, route]));
  const nativeRoutes = getClientSdkSidebarPaths(sidebar).map((path, index) => {
    const suffix = path.replace(`${platform.routePrefix}/`, '');
    const baseline = wasmBySuffix.get(
      platformId === 'uniapp' ? (uniappBaselineSuffixes.get(suffix) ?? suffix) : suffix,
    );
    const template = baseline ?? existingByPath.get(path);
    const extensionTitle = platformId === 'uniapp' ? uniappExtensionTitles.get(suffix) : undefined;
    const fallbackTemplate = routes.find(
      (route) => route.contextKey === 'chat/sdk/wasm' && route.template === 'guide',
    );
    if (!template && !extensionTitle)
      throw new Error(`[${platformId}] missing WASM baseline or platform extension: ${suffix}`);
    const title = resolveClientSdkRouteTitle({
      platformId,
      suffix,
      baselineTitle: template?.title ?? extensionTitle,
    });
    return {
      ...(template ?? fallbackTemplate),
      id: baseId + index,
      path,
      relativePath: `sdk/${platformId}/${suffix}`,
      sourcePath: path,
      title,
      description: `OpenIM ${platformName(platformId)} SDK guide for ${title}.`,
      platform: platformId,
      contextKey: platform.contextKey,
      contextTitle,
      sourceIndex: baseSourceIndex + index,
      contentFile: `content/docs/chat/sdk/${platformId}/${suffix}.mdx`,
      navOrder: baseNavOrder + index,
    };
  });
  const firstIndex = routes.findIndex((route) => route.contextKey === platform.contextKey);
  const withoutPlatform = otherRoutes;
  withoutPlatform.splice(firstIndex, 0, ...nativeRoutes);
  return withoutPlatform;
}

export function replaceClientSdkStructureRecords({ platformId, routes, structure }) {
  const platform = getClientSdkPlatform(platformId);
  const current = structure.filter((record) => record.context === platform.contextKey);
  if (current.length === 0)
    throw new Error(`[${platformId}] cannot locate the existing structure range`);
  const replacement = routes
    .filter((route) => route.contextKey === platform.contextKey)
    .map((route) => ({
      sourcePath: route.sourcePath,
      openimPath: route.path,
      title: route.title,
      context: route.contextKey,
      template: route.template,
      contentFile: route.contentFile,
    }));
  const firstIndex = structure.findIndex((record) => record.context === platform.contextKey);
  const withoutPlatform = structure.filter((record) => record.context !== platform.contextKey);
  withoutPlatform.splice(firstIndex, 0, ...replacement);
  return withoutPlatform;
}

async function main() {
  const requested = process.argv.slice(2).filter((value) => !value.startsWith('-'));
  const platformIds = requested.length > 0 ? requested : ['ios', 'flutter'];
  let routes = await readJson('src/generated/routes.json');
  let structure = await readJson('data/structure/chat-pages.json');

  for (const platformId of platformIds) {
    const platform = getClientSdkPlatform(platformId);
    const sidebar = await readJson(platform.sidebarPath);
    const skeletonRoutes = resolveClientSdkSkeletonRoutes({ platformId, sidebar, routes });
    const contentRoot = resolve(root, 'content/docs/chat/sdk', platformId);
    const expectedFiles = new Set(
      skeletonRoutes.map(({ path }) =>
        resolve(contentRoot, `${path.replace(`${platform.routePrefix}/`, '')}.mdx`),
      ),
    );
    const staleFiles = (await listMdxFiles(contentRoot)).filter((path) => !expectedFiles.has(path));
    let staleRemoved = 0;
    let manualPreserved = 0;

    for (const filePath of staleFiles) {
      const source = await readFile(filePath, 'utf8');
      if (isGeneratedClientSdkSkeleton(source)) {
        await unlink(filePath);
        staleRemoved += 1;
      } else {
        manualPreserved += 1;
      }
    }
    for (const route of skeletonRoutes) {
      const filePath = resolve(
        contentRoot,
        `${route.path.replace(`${platform.routePrefix}/`, '')}.mdx`,
      );
      await mkdir(dirname(filePath), { recursive: true });
      const existing = await readFile(filePath, 'utf8').catch((error) => {
        if (error?.code === 'ENOENT') return undefined;
        throw error;
      });
      if (existing !== undefined && !isGeneratedClientSdkSkeleton(existing)) {
        manualPreserved += 1;
        continue;
      }
      await writeFile(filePath, buildClientSdkSkeleton({ ...route, platformId }), 'utf8');
    }
    console.log(
      `Synchronized ${platformId} English route skeletons (${skeletonRoutes.length} active, ${staleRemoved} stale removed, ${manualPreserved} manual preserved).`,
    );
    routes = replaceClientSdkRouteRecords({ platformId, sidebar, routes });
    structure = replaceClientSdkStructureRecords({ platformId, routes, structure });
  }
  await Promise.all([
    writeFile(
      resolve(root, 'src/generated/routes.json'),
      `${JSON.stringify(routes, null, 2)}\n`,
      'utf8',
    ),
    writeFile(
      resolve(root, 'data/structure/chat-pages.json'),
      `${JSON.stringify(structure, null, 2)}\n`,
      'utf8',
    ),
  ]);
}

async function listMdxFiles(directory) {
  const files = [];
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === 'ENOENT') return files;
    throw error;
  }
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listMdxFiles(entryPath)));
    else if (entry.isFile() && entry.name.endsWith('.mdx')) files.push(entryPath);
  }
  return files.sort();
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(resolve(root, relativePath), 'utf8'));
}

function escapeSingleQuote(value) {
  return value.replaceAll("'", "''");
}

const isDirectExecution =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) await main();
