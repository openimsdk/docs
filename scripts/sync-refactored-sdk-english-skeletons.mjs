import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const platforms = ['wasm', 'ios', 'flutter'];
const overviewTitles = {
  'overview-group': 'Group overview',
  'overview-retrieving-groups': 'Retrieving groups',
  'overview-group-applications': 'Group applications',
  'overview-retrieving-group-members': 'Retrieving group members',
  'overview-managing-group-members': 'Managing group members',
  'overview-friends': 'Friends',
  'overview-friend-applications': 'Friend applications',
  'handle-call-events': 'Call events',
};

for (const platform of platforms) {
  const sidebar = JSON.parse(
    await readFile(resolve(root, `data/structure/${platform}-sidebar.json`), 'utf8'),
  );
  const active = new Set(collectPaths(sidebar.nodes));
  const touched = [...active].filter(
    (path) =>
      path.startsWith(`/sdk/${platform}/group/`) ||
      path.startsWith(`/sdk/${platform}/user/friends/`) ||
      path.startsWith(`/sdk/${platform}/user/friend-applications/`) ||
      path.startsWith(`/sdk/${platform}/file-uploads/`) ||
      path.startsWith(`/sdk/${platform}/calling/managing-calls/`) ||
      path.startsWith(`/sdk/${platform}/calling/retrieving-call-information/`) ||
      path.startsWith(`/sdk/${platform}/conversation/retrieving-conversations/`) ||
      path.startsWith(`/sdk/${platform}/conversation/managing-conversations/`) ||
      path.startsWith(`/sdk/${platform}/message/retrieving-messages/`) ||
      path.startsWith(`/sdk/${platform}/message/composing-messages/`) ||
      path.startsWith(`/sdk/${platform}/message/managing-messages/`) ||
      path.startsWith(`/sdk/${platform}/message/managing-read-status/`) ||
      path.startsWith(`/sdk/${platform}/user/retrieving-and-updating-user-information/`) ||
      path.startsWith(`/sdk/${platform}/user/moderating-a-user/`) ||
      path.startsWith(`/sdk/${platform}/message/creating-messages/`) ||
      path.endsWith('/message/sending-messages/send-message') ||
      path.endsWith('/message/sending-messages/send-message-not-oss') ||
      path.endsWith('/message/managing-messages/set-message-local-ex') ||
      path.endsWith('/message/receiving-messages/custom-business-listener') ||
      path.endsWith('/message/sending-messages/set-msg-send-progress-listener') ||
      (platform === 'wasm' &&
        (path.startsWith('/sdk/wasm/message/creating-messages/') ||
          path.endsWith('/message/sending-messages/send-message') ||
          path.endsWith('/message/sending-messages/send-message-not-oss') ||
          path.endsWith('/message/managing-messages/set-message-local-ex') ||
          path.endsWith('/message/receiving-messages/receive-custom-business-messages'))) ||
      (platform === 'wasm' &&
        (path.startsWith('/sdk/wasm/user/profile/') ||
          path.startsWith('/sdk/wasm/user/online-status/') ||
          path.startsWith('/sdk/wasm/user/blacklist/'))),
  );

  for (const path of touched) {
    const file = resolve(root, `content/docs/chat${path}.mdx`);
    const exists = await readFile(file, 'utf8').catch(() => null);
    const zh = await readFile(resolve(root, `content/zh/docs/chat${path}.mdx`), 'utf8');
    const zhTitle = zh.match(/^title:\s*['"](.+?)['"]$/m)?.[1] ?? path.split('/').at(-1);
    const slug = path.split('/').at(-1);
    const title =
      findNavigationTitle(sidebar.nodes, path) ?? overviewTitles[slug] ?? zhTitle;
    if (exists !== null) {
      if (exists.includes("generatedBy: 'sync-refactored-sdk-english-skeletons'")) {
        const updated = exists
          .replace(/^title:\s*['"].+?['"]$/m, `title: '${title.replaceAll("'", "''")}'`)
          .replace(
            /^description:\s*['"].+?['"]$/m,
            `description: 'OpenIM ${platform === 'ios' ? 'iOS' : platform === 'flutter' ? 'Flutter' : 'WASM'} SDK guide for ${title.replaceAll("'", "''")}.'`,
          );
        await writeFile(file, updated);
      }
      continue;
    }
    await mkdir(dirname(file), { recursive: true });
    await writeFile(
      file,
      `---
title: '${title.replaceAll("'", "''")}'
description: 'OpenIM ${platform === 'ios' ? 'iOS' : platform === 'flutter' ? 'Flutter' : 'WASM'} SDK guide for ${title.replaceAll("'", "''")}.'
product: 'sdk'
context: 'chat/sdk/${platform}'
template: 'guide'
status: 'draft'
lastUpdated: '2026-07-23'
version: 'v4'
platform: '${platform}'
sourcePath: '${path}'
generatedBy: 'sync-refactored-sdk-english-skeletons'
---

## Overview

The English version of this OpenIM ${platform === 'ios' ? 'iOS' : platform === 'flutter' ? 'Flutter' : 'WASM'} SDK guide is deferred until the reviewed Chinese documentation is complete.
`,
    );
  }

  const englishFiles = await walk(resolve(root, `content/docs/chat/sdk/${platform}`));
  for (const file of englishFiles) {
    const source = await readFile(file, 'utf8');
    const path = source.match(/^sourcePath:\s*['"](.+?)['"]$/m)?.[1];
    if (
      path &&
      !active.has(path) &&
      (path.startsWith(`/sdk/${platform}/group/`) ||
        path.startsWith(`/sdk/${platform}/user/managing-friends/`) ||
        path.startsWith(`/sdk/${platform}/user/retrieving-users/retrieve-a-list-of-friends`) ||
        path.startsWith(`/sdk/${platform}/user/retrieving-users/retrieve-friend-information`) ||
        path.endsWith('/message/sending-messages/upload-files-and-track-progress') ||
        path.endsWith('/message/sending-messages/send-a-message') ||
        path.endsWith('/message/sending-messages/create-media-and-rich-messages') ||
        path.endsWith('/message/composing-messages/custom-message-and-extra-data') ||
        path.endsWith('/message/composing-messages/mention-users-in-a-message') ||
        path.endsWith('/message/managing-messages/forward-or-merge-a-message') ||
        path.endsWith('/calling/managing-calls/start-or-handle-a-call') ||
        path.endsWith('/calling/retrieving-call-information/retrieve-call-information') ||
        path.endsWith('/conversation/retrieving-conversations/retrieve-a-conversation') ||
        path.endsWith('/conversation/managing-conversations/manage-read-status') ||
        path.endsWith('/conversation/managing-conversations/delete-or-clear-conversation') ||
        path.endsWith('/conversation/managing-conversations/set-conversation-settings') ||
        path.endsWith('/message/retrieving-messages/retrieve-message-history') ||
        (platform !== 'flutter' &&
          path.endsWith('/message/retrieving-messages/locate-messages-by-id')) ||
        path.endsWith('/message/composing-messages/manage-typing-status') ||
        path.endsWith('/message/managing-messages/pin-conversation-messages') ||
        path.endsWith('/message/managing-messages/insert-a-local-message') ||
        path.endsWith('/message/managing-messages/clear-message-history') ||
        path.endsWith('/message/managing-messages/delete-a-message') ||
        path.endsWith('/message/managing-read-status/manage-message-read-receipts') ||
        (platform !== 'wasm' &&
          path.endsWith('/user/retrieving-and-updating-user-information/retrieve-and-update-self-profile')) ||
        (platform !== 'wasm' &&
          path.endsWith('/user/retrieving-and-updating-user-information/retrieve-the-online-status-of-a-user')) ||
        (platform !== 'wasm' &&
          path.endsWith('/user/moderating-a-user/block-or-unblock-users')) ||
        (platform === 'wasm' &&
          (path.endsWith('/message/sending-messages/send-a-message') ||
            path.endsWith('/message/sending-messages/create-media-and-rich-messages') ||
            path.endsWith('/message/composing-messages/custom-message-and-extra-data') ||
            path.endsWith('/message/composing-messages/mention-users-in-a-message') ||
            path.endsWith('/message/managing-messages/forward-or-merge-a-message'))) ||
        (platform === 'wasm' &&
          (path.startsWith('/sdk/wasm/user/retrieving-and-updating-user-information/') ||
            path.startsWith('/sdk/wasm/user/moderating-a-user/') ||
            path.startsWith('/sdk/wasm/user/retrieving-users/'))))
    ) {
      await unlink(file);
    }
  }
}

await synchronizeRouteManifests();

function collectPaths(nodes) {
  const paths = [];
  const visit = (entry) => {
    if (typeof entry === 'string') paths.push(entry);
    else if (entry?.path) paths.push(entry.path);
    else entry?.children?.forEach(visit);
  };
  nodes.forEach(visit);
  return paths;
}

function findNavigationTitle(nodes, targetPath) {
  for (const entry of nodes) {
    if (typeof entry === 'object' && entry?.path === targetPath) {
      return entry.navigationTitle;
    }
    if (typeof entry === 'object' && entry?.children) {
      const title = findNavigationTitle(entry.children, targetPath);
      if (title) return title;
    }
  }
  return null;
}

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else if (entry.name.endsWith('.mdx')) files.push(path);
  }
  return files;
}

async function synchronizeRouteManifests() {
  let routes = JSON.parse(
    await readFile(resolve(root, 'src/generated/routes.json'), 'utf8'),
  );
  let chatPages = JSON.parse(
    await readFile(resolve(root, 'data/structure/chat-pages.json'), 'utf8'),
  );
  const navigation = JSON.parse(
    await readFile(resolve(root, 'src/generated/navigation.json'), 'utf8'),
  );
  let nextId = Math.max(...routes.map((route) => route.id)) + 1;
  let nextSourceIndex = Math.max(...routes.map((route) => route.sourceIndex)) + 1;

  for (const platform of platforms) {
    const contextKey = `chat/sdk/${platform}`;
    const sidebar = JSON.parse(
      await readFile(resolve(root, `data/structure/${platform}-sidebar.json`), 'utf8'),
    );
    const paths = collectPaths(sidebar.nodes);
    const oldRoutes = routes.filter((route) => route.contextKey === contextKey);
    const oldByPath = new Map(oldRoutes.map((route) => [route.path, route]));
    const template = oldRoutes[0];
    const baseNavOrder = Math.min(...oldRoutes.map((route) => route.navOrder));
    const additions = [];

    for (const [index, path] of paths.entries()) {
      const source = await readFile(resolve(root, `content/docs/chat${path}.mdx`), 'utf8');
      const title = source.match(/^title:\s*['"](.+?)['"]$/m)?.[1] ?? path.split('/').at(-1);
      const existing = oldByPath.get(path);
      additions.push({
        ...template,
        ...(existing ?? {}),
        id: existing?.id ?? nextId++,
        path,
        relativePath: path.slice(1),
        sourcePath: path,
        title,
        description: `OpenIM ${platform === 'ios' ? 'iOS' : platform === 'flutter' ? 'Flutter' : 'WASM'} SDK guide for ${title}.`,
        contextKey,
        sourceIndex: existing?.sourceIndex ?? nextSourceIndex++,
        contentFile: `content/docs/chat${path}.mdx`,
        navOrder: baseNavOrder + index,
      });
    }

    const insertAt = routes.findIndex((route) => route.contextKey === contextKey);
    routes = routes.filter((route) => route.contextKey !== contextKey);
    routes.splice(insertAt, 0, ...additions);

    const chatInsertAt = chatPages.findIndex((page) => page.context === contextKey);
    chatPages = chatPages.filter((page) => page.context !== contextKey);
    chatPages.splice(
      chatInsertAt,
      0,
      ...additions.map((route) => ({
        sourcePath: route.path,
        openimPath: route.path,
        title: route.title,
        context: contextKey,
        template: route.template,
        contentFile: route.contentFile,
      })),
    );

    const context = navigation.contexts.find((item) => item.key === contextKey);
    const routeByPath = new Map(additions.map((route) => [route.path, route]));
    context.nodes = sidebar.nodes.map((entry) => toNavigationNode(entry, platform, routeByPath));
    context.pageCount = additions.length;
    context.sidebarExpansion = sidebar.sidebarExpansion;
  }

  await writeFile(
    resolve(root, 'src/generated/routes.json'),
    `${JSON.stringify(routes, null, 2)}\n`,
  );
  await writeFile(
    resolve(root, 'data/structure/chat-pages.json'),
    `${JSON.stringify(chatPages, null, 2)}\n`,
  );
  await writeFile(
    resolve(root, 'src/generated/navigation.json'),
    `${JSON.stringify(navigation, null, 2)}\n`,
  );
}

function toNavigationNode(entry, platform, routeByPath) {
  if (typeof entry === 'string' || entry.path) {
    const path = typeof entry === 'string' ? entry : entry.path;
    const route = routeByPath.get(path);
    const id = path.replace(`/sdk/${platform}/`, '');
    return {
      id,
      segment: id.split('/').at(-1),
      title: route.title,
      href: path,
      type: 'page',
      children: [],
      minIndex: route.navOrder,
      ...(typeof entry === 'object' && entry.navigationTitle
        ? { navigationTitle: entry.navigationTitle }
        : {}),
    };
  }
  const children = entry.children.map((child) => toNavigationNode(child, platform, routeByPath));
  return {
    id: entry.id,
    segment: entry.id.split('/').at(-1),
    title: entry.title,
    href: null,
    type: 'folder',
    children,
    minIndex: Math.min(...children.map((child) => child.minIndex)),
  };
}
