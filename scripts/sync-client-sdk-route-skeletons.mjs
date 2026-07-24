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
};

export function resolveClientSdkRouteTitle({ platformId, suffix, baselineTitle }) {
  if (suffix === 'overview')
    return `OpenIM SDK for ${platformId === 'ios' ? 'iOS' : 'Flutter'}`;
  return conversationGroupTitles[platformId]?.[suffix] ?? baselineTitle;
}

export function buildClientSdkSkeleton({ path, platformId, title }) {
  const platformName = platformId === 'ios' ? 'iOS' : 'Flutter';
  const template = path === `/sdk/${platformId}/overview` ? 'overview' : 'guide';
  return `---
title: '${escapeSingleQuote(title)}'
description: 'OpenIM ${platformName} SDK guide for ${escapeSingleQuote(title)}.'
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

The English version of this OpenIM ${platformName} SDK guide is deferred until the reviewed Chinese documentation is complete.
`;
}

export function isGeneratedClientSdkSkeleton(source) {
  return (
    /generatedBy:\s*['"]sync-client-sdk-route-skeletons['"]/.test(source) ||
    (/status:\s*['"]draft['"]/.test(source) &&
      /context:\s*['"]chat\/sdk\/(?:ios|flutter)['"]/.test(source) &&
      /The English version of this OpenIM (?:iOS|Flutter) SDK guide is deferred/.test(source))
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
    const baseline = wasmBySuffix.get(suffix);
    const existing = routeByPath.get(path);
    if (!baseline && !existing)
      throw new Error(`[${platformId}] missing WASM baseline or platform extension: ${suffix}`);
    return {
      path,
      title: resolveClientSdkRouteTitle({
        platformId,
        suffix,
        baselineTitle: existing?.title ?? baseline.title,
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
  const contextTitle = `SDKs · ${platformId === 'ios' ? 'iOS' : 'Flutter'} · v4`;
  const wasmBySuffix = new Map(
    routes
      .filter((route) => route.contextKey === 'chat/sdk/wasm')
      .map((route) => [route.path.replace('/sdk/wasm/', ''), route]),
  );
  const existingByPath = new Map(current.map((route) => [route.path, route]));
  const nativeRoutes = getClientSdkSidebarPaths(sidebar).map((path, index) => {
    const suffix = path.replace(`${platform.routePrefix}/`, '');
    const baseline = wasmBySuffix.get(suffix);
    const template = baseline ?? existingByPath.get(path);
    if (!template)
      throw new Error(`[${platformId}] missing WASM baseline or platform extension: ${suffix}`);
    const title = resolveClientSdkRouteTitle({
      platformId,
      suffix,
      baselineTitle: template.title,
    });
    return {
      ...template,
      id: baseId + index,
      path,
      relativePath: `sdk/${platformId}/${suffix}`,
      sourcePath: path,
      title,
      description: `OpenIM ${platformId === 'ios' ? 'iOS' : 'Flutter'} SDK guide for ${title}.`,
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

async function main() {
  const requested = process.argv.slice(2).filter((value) => !value.startsWith('-'));
  const platformIds = requested.length > 0 ? requested : ['ios', 'flutter'];
  let routes = await readJson('src/generated/routes.json');

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
  }
  await writeFile(
    resolve(root, 'src/generated/routes.json'),
    `${JSON.stringify(routes, null, 2)}\n`,
    'utf8',
  );
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
