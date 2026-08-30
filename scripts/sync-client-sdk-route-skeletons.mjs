import { mkdir, readdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import { getClientSdkSidebarPaths } from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();

const androidRouteTitles = {
  'user/overview-user': 'User overview',
  'user/user-profile/get-users-info': 'Get specified user profiles',
  'user/user-profile/get-self-local-user-info': 'Get the current user profile',
  'user/user-profile/set-self-info': 'Update the current user profile',
  'user/user-profile/set-global-message-reception': 'Set global message reception',
  'user/user-profile/set-friend-add-permission': 'Set friend request permissions',
  'user/overview-relationships': 'Relationship overview',
  'user/friends/get-friend-list-page': 'Get the friend list by page',
  'user/friends/search-friends': 'Search friends',
  'user/friends/get-friends-info': 'Get specified friend profiles',
  'user/friends/check-friend': 'Check friendship',
  'user/friends/update-friends': 'Update friend profiles',
  'user/friends/delete-friend': 'Delete a friend',
  'user/friend-applications/add-friend': 'Send a friend request',
  'user/friend-applications/get-recv-friend-application-list': 'Get received friend requests',
  'user/friend-applications/get-send-friend-application-list': 'Get sent friend requests',
  'user/friend-applications/accept-friend-application': 'Accept a friend request',
  'user/friend-applications/refuse-friend-application': 'Reject a friend request',
  'user/blacklist/get-blacklist': 'Get the blacklist',
  'user/blacklist/add-blacklist': 'Block a user',
  'user/blacklist/remove-blacklist': 'Unblock a user',
  'user/online-status/subscribe-users-online-status': 'Subscribe to user online status',
  'user/online-status/get-subscribe-online-users-status': 'Get subscribed user online status',
  'user/online-status/unsubscribe-users-online-status': 'Unsubscribe from user status',
  'message/sending-messages/set-msg-send-progress-listener': 'Track message sending progress',
  'message/managing-messages/delete-saved-messages': 'Delete messages in a batch',
  'message/creating-messages/create-image-message': 'Create an image message',
  'message/creating-messages/create-image-message-by-file':
    'Create an image message from a local path',
  'message/creating-messages/create-image-message-by-url':
    'Create an image message from URLs',
  'message/creating-messages/create-sound-message': 'Create an audio message',
  'message/creating-messages/create-sound-message-by-file':
    'Create an audio message from a local path',
  'message/creating-messages/create-sound-message-by-url':
    'Create an audio message from a URL',
  'message/creating-messages/create-video-message': 'Create a video message',
  'message/creating-messages/create-video-message-by-file':
    'Create a video message from local paths',
  'message/creating-messages/create-video-message-by-url':
    'Create a video message from URLs',
  'message/creating-messages/create-file-message': 'Create a file message',
  'message/creating-messages/create-file-message-by-file':
    'Create a file message from a local path',
  'message/creating-messages/create-file-message-by-url':
    'Create a file message from a URL',
  'message/creating-messages/create-advanced-text-message': 'Create a rich-text message',
  'message/creating-messages/create-advanced-quote-message': 'Create a rich-text reply',
  'message/composing-messages/get-typing-status': 'Retrieve typing status',
};

const uniappRouteTitles = {
  'file-uploads/cancel-upload': 'Cancel a file upload',
};

function getPlatformExtensionTitle(platformId, suffix) {
  if (platformId === 'android') return androidRouteTitles[suffix];
  if (platformId === 'uniapp') return uniappRouteTitles[suffix];
  return undefined;
}

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
  if (suffix === 'overview') return `OpenIM SDK for ${getPlatformDisplayName(platformId)}`;
  if (platformId === 'android' && androidRouteTitles[suffix]) return androidRouteTitles[suffix];
  return conversationGroupTitles[platformId]?.[suffix] ?? baselineTitle;
}

export function buildClientSdkSkeleton({ path, platformId, title }) {
  const platformName = getPlatformDisplayName(platformId);
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
  if (/generatedBy:\s*['"]sync-client-sdk-route-skeletons['"]/.test(source)) {
    return true;
  }

  const platformMatch = source.match(
    /context:\s*['"]chat\/sdk\/(android|ios|flutter|uniapp)['"]/,
  );
  if (!/status:\s*['"]draft['"]/.test(source) || !platformMatch) {
    return false;
  }

  if (
    /The English version of this OpenIM (?:Android|iOS|Flutter|uni-app \/ uni-app x) SDK guide is deferred/.test(
      source,
    )
  ) {
    return true;
  }

  const body = source.replace(/^---\n[\s\S]*?\n---\n?/, '').trim();
  return platformMatch[1] === 'uniapp' && body.length === 0;
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
    const extensionTitle = getPlatformExtensionTitle(platformId, suffix);
    if (!baseline && !existing && !extensionTitle)
      throw new Error(`[${platformId}] missing WASM baseline or platform extension: ${suffix}`);
    return {
      path,
      title: resolveClientSdkRouteTitle({
        platformId,
        suffix,
        baselineTitle: baseline?.title ?? existing?.title ?? extensionTitle,
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
  const platformName = getPlatformDisplayName(platformId);
  const contextTitle = `SDKs · ${platformName} · v4`;
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
    const extensionTitle = getPlatformExtensionTitle(platformId, suffix);
    if (!template && !extensionTitle)
      throw new Error(`[${platformId}] missing WASM baseline or platform extension: ${suffix}`);
    const title = resolveClientSdkRouteTitle({
      platformId,
      suffix,
      baselineTitle: template?.title ?? extensionTitle,
    });
    return {
      ...template,
      id: baseId + index,
      path,
      relativePath: `sdk/${platformId}/${suffix}`,
      sourcePath: path,
      title,
      description: `OpenIM ${platformName} SDK guide for ${title}.`,
      product: 'sdk',
      version: 'v4',
      platform: platformId,
      contextKey: platform.contextKey,
      contextTitle,
      template: template?.template ?? 'guide',
      status: template?.status ?? 'draft',
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
  const platformIds = requested.length > 0 ? requested : ['android', 'ios', 'flutter'];
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

function getPlatformDisplayName(platformId) {
  if (platformId === 'ios') return 'iOS';
  if (platformId === 'android') return 'Android';
  if (platformId === 'uniapp') return 'uni-app / uni-app x';
  return 'Flutter';
}

function escapeSingleQuote(value) {
  return value.replaceAll("'", "''");
}

const isDirectExecution =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) await main();
