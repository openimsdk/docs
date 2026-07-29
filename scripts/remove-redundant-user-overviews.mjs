import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const reviewDate = '2026-07-24';
const removals = {
  wasm: {
    '/sdk/wasm/user/profile/overview-profile':
      '/sdk/wasm/user/profile/set-self-info',
    '/sdk/wasm/user/online-status/overview-online-status':
      '/sdk/wasm/user/online-status/subscribe-users-status',
    '/sdk/wasm/user/friends/overview-friends':
      '/sdk/wasm/user/friends/get-friend-list-page',
    '/sdk/wasm/user/friend-applications/overview-friend-applications':
      '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/wasm/user/blacklist/overview-blacklist':
      '/sdk/wasm/user/blacklist/get-black-list',
  },
  ios: {
    '/sdk/ios/user/friends/overview-friends':
      '/sdk/ios/user/friends/get-friend-list-page',
    '/sdk/ios/user/friend-applications/overview-friend-applications':
      '/sdk/ios/user/friend-applications/get-friend-application-list-as-recipient',
  },
  flutter: {
    '/sdk/flutter/user/friends/overview-friends':
      '/sdk/flutter/user/friends/get-friend-list-page',
    '/sdk/flutter/user/friend-applications/overview-friend-applications':
      '/sdk/flutter/user/friend-applications/get-friend-application-list-as-recipient',
  },
};
const touchedPages = {
  wasm: [
    '/sdk/wasm/user/overview-user',
    '/sdk/wasm/user/profile/get-users-info',
    '/sdk/wasm/user/profile/set-self-info',
    '/sdk/wasm/user/online-status/subscribe-users-status',
    '/sdk/wasm/user/friends/get-friend-list-page',
    '/sdk/wasm/user/friends/update-friends',
    '/sdk/wasm/user/friends/delete-friend',
    '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/wasm/user/friend-applications/get-friend-application-list-as-applicant',
    '/sdk/wasm/user/blacklist/get-black-list',
  ],
  ios: [
    '/sdk/ios/user/overview-user',
    '/sdk/ios/user/retrieving-users/retrieve-users',
    '/sdk/ios/user/friends/get-friend-list-page',
    '/sdk/ios/user/friends/delete-friend',
    '/sdk/ios/user/friend-applications/add-friend',
    '/sdk/ios/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/ios/user/friend-applications/refuse-friend-application',
  ],
  flutter: [
    '/sdk/flutter/user/overview-user',
    '/sdk/flutter/user/retrieving-users/retrieve-users',
    '/sdk/flutter/user/friends/get-friend-list-page',
    '/sdk/flutter/user/friends/delete-friend',
    '/sdk/flutter/user/friend-applications/add-friend',
    '/sdk/flutter/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/flutter/user/friend-applications/refuse-friend-application',
    '/sdk/flutter/events/overview-events',
  ],
};

for (const [platform, platformRemovals] of Object.entries(removals)) {
  const auditPath = resolve(
    root,
    `data/structure/${platform}-content-audit.json`,
  );
  const audit = JSON.parse(await readFile(auditPath, 'utf8'));
  const auditByPath = new Map(
    audit.pages.map((page) => [page.currentPath, page]),
  );

  for (const [removedPath, destinationPath] of Object.entries(platformRemovals)) {
    const removed = auditByPath.get(removedPath);
    const destination = auditByPath.get(destinationPath);
    if (!removed || !destination) {
      throw new Error(
        `Missing ${platform} audit record: ${removedPath} -> ${destinationPath}`,
      );
    }

    removed.disposition = platform === 'wasm' ? 'remove' : 'omit';
    removed.locales.zh = {
      reviewStatus: 'structure-only',
      reviewer: 'Codex',
      reviewedAt: reviewDate,
      exampleVerification: {
        status: 'not-applicable',
        evidence: [],
        reason: `概览页已删除，必要说明和事件处理已并入 ${destinationPath}；不保留旧地址重定向。`,
      },
    };
    removed.redirectTo = null;
    removed.notes ??= [];
    const removedNote = `${reviewDate}：删除冗余概览页，正文与事件归属迁入 ${destinationPath}；按确认不添加旧地址重定向。`;
    if (!removed.notes.includes(removedNote)) {
      removed.notes.push(removedNote);
    }

    destination.locales.zh.reviewedAt = reviewDate;
    destination.notes ??= [];
    const destinationNote = `${reviewDate}：逐页复核并接收 ${removedPath} 的必要说明与事件归属。`;
    if (!destination.notes.includes(destinationNote)) {
      destination.notes.push(destinationNote);
    }
  }

  for (const path of touchedPages[platform]) {
    const page = auditByPath.get(path);
    if (!page) {
      throw new Error(`Missing ${platform} audit record: ${path}`);
    }
    page.locales.zh.reviewedAt = reviewDate;
    page.notes ??= [];
    const note = `${reviewDate}：逐页复核冗余概览清理后的导航、正文链接、示例和事件归属。`;
    if (!page.notes.includes(note)) {
      page.notes.push(note);
    }
  }

  await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`, 'utf8');
}

const ownershipPath = resolve(root, 'data/structure/wasm-api-ownership.json');
const ownership = JSON.parse(await readFile(ownershipPath, 'utf8'));
const eventPages = new Map([
  ['OnSelfInfoUpdated', '/sdk/wasm/user/profile/set-self-info'],
  [
    'OnUserStatusChanged',
    '/sdk/wasm/user/online-status/subscribe-users-status',
  ],
  ['OnFriendAdded', '/sdk/wasm/user/friends/get-friend-list-page'],
  ['OnFriendDeleted', '/sdk/wasm/user/friends/get-friend-list-page'],
  ['OnFriendInfoChanged', '/sdk/wasm/user/friends/get-friend-list-page'],
  [
    'OnFriendApplicationAdded',
    '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
  ],
  [
    'OnFriendApplicationAccepted',
    '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
  ],
  [
    'OnFriendApplicationRejected',
    '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
  ],
  [
    'OnFriendApplicationDeleted',
    '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
  ],
  ['OnBlackAdded', '/sdk/wasm/user/blacklist/get-black-list'],
  ['OnBlackDeleted', '/sdk/wasm/user/blacklist/get-black-list'],
]);

for (const event of ownership.events) {
  const page = eventPages.get(event.name);
  if (page) {
    event.page = page;
  }
}

await writeFile(
  ownershipPath,
  `${JSON.stringify(ownership, null, 2)}\n`,
  'utf8',
);

const removedPaths = new Set(
  Object.values(removals).flatMap((platformRemovals) =>
    Object.keys(platformRemovals),
  ),
);
const structurePath = resolve(root, 'data/structure/chat-pages.json');
const structure = JSON.parse(await readFile(structurePath, 'utf8'));
const nextStructure = structure.filter(
  (page) => !removedPaths.has(page.sourcePath ?? page.path),
);
await writeFile(
  structurePath,
  `${JSON.stringify(nextStructure, null, 2)}\n`,
  'utf8',
);

const routesPath = resolve(root, 'src/generated/routes.json');
const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const nextRoutes = routes.filter((route) => !removedPaths.has(route.path));
await writeFile(
  routesPath,
  `${JSON.stringify(nextRoutes, null, 2)}\n`,
  'utf8',
);
