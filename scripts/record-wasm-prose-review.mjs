import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const contentRoot = join(root, 'content/zh/docs/chat/sdk/wasm');
const auditPath = join(root, 'data/structure/wasm-content-audit.json');
const reviewedAt = '2026-07-24';
const note =
  '2026-07-24：逐页人工复核中文正文措辞；检查正式性、语义清晰度、SDK 称谓、任务名称和跨页链接，并按各页实际语境完成必要修正。';
const overviewNote =
  '2026-07-24：重新逐页审核概览内容；重整消息概览的信息层级，收拢会话、群组和通话概览的任务导航，并复核其他概览页的事件归属与保留必要性。';
const reviewedOverviewRoutes = new Set([
  '/sdk/wasm/calling/overview-calling',
  '/sdk/wasm/conversation/managing-conversation-groups/overview-conversation-groups',
  '/sdk/wasm/conversation/overview-conversation',
  '/sdk/wasm/events/overview-events',
  '/sdk/wasm/group/overview-group',
  '/sdk/wasm/message/overview-message',
  '/sdk/wasm/overview',
  '/sdk/wasm/user/overview-user',
]);
const overviewRemovalNote =
  '2026-07-24：删除“入群申请概览”和“群成员查询概览”，不保留旧地址重定向；申请事件迁入“获取收到的入群申请”，成员事件迁入“分页查询群成员”，并同步所有正文引用。';
const returnResultNote =
  '2026-07-24：人工复核 API 返回数据展示；补充公共 Promise 结果约定，为重复使用的领域对象确定唯一字段说明页，并在其他 API 页按本操作说明分页、缺失记录、合并标识和状态同步边界。';
const affectedRemovalRoutes = new Set([
  '/sdk/wasm/events/overview-events',
  '/sdk/wasm/group/group-applications/clear-group-application-badge-count',
  '/sdk/wasm/group/group-applications/delete-group-requests',
  '/sdk/wasm/group/group-applications/get-group-application-badge-count',
  '/sdk/wasm/group/group-applications/get-group-application-list-as-applicant',
  '/sdk/wasm/group/group-applications/get-group-application-list-as-recipient',
  '/sdk/wasm/group/group-applications/refuse-group-application',
  '/sdk/wasm/group/managing-group-members/change-group-member-mute',
  '/sdk/wasm/group/managing-group-members/invite-user-to-group',
  '/sdk/wasm/group/managing-group-members/kick-group-member',
  '/sdk/wasm/group/managing-group-members/set-group-member-avatar',
  '/sdk/wasm/group/managing-group-members/set-group-member-extension',
  '/sdk/wasm/group/managing-group-members/set-group-member-nickname',
  '/sdk/wasm/group/managing-group-members/set-group-member-role-level',
  '/sdk/wasm/group/managing-group-members/transfer-group-owner',
  '/sdk/wasm/group/overview-group',
  '/sdk/wasm/group/retrieving-group-members/get-group-member-list',
  '/sdk/wasm/group/retrieving-group-members/get-group-member-owner-and-admin',
  '/sdk/wasm/group/retrieving-group-members/get-specified-group-members-info',
  '/sdk/wasm/user/overview-user',
  '/sdk/wasm/user/profile/get-users-info',
]);
const removedOverviewRoutes = new Set([
  '/sdk/wasm/group/group-applications/overview-group-applications',
  '/sdk/wasm/group/retrieving-group-members/overview-retrieving-group-members',
]);
const reviewedReturnResultRoutes = new Set([
  '/sdk/wasm/calling/managing-calls/accept-call',
  '/sdk/wasm/calling/managing-calls/start-group-call',
  '/sdk/wasm/calling/managing-calls/start-single-call',
  '/sdk/wasm/calling/retrieving-call-information/get-room-by-group-id',
  '/sdk/wasm/calling/retrieving-call-information/get-token-by-room-id',
  '/sdk/wasm/calling/retrieving-call-information/restore-pending-invitation',
  '/sdk/wasm/conversation/managing-conversation-groups/create-conversation-group',
  '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-group-info-with-conversations',
  '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-groups',
  '/sdk/wasm/conversation/managing-conversation-groups/update-conversation-group',
  '/sdk/wasm/conversation/retrieving-conversations/get-conversation-by-target',
  '/sdk/wasm/conversation/retrieving-conversations/get-conversations-by-id',
  '/sdk/wasm/conversation/retrieving-conversations/retrieve-conversation-list',
  '/sdk/wasm/getting-started/authenticate-and-manage-session',
  '/sdk/wasm/group/create-group',
  '/sdk/wasm/group/group-applications/get-group-application-list-as-applicant',
  '/sdk/wasm/group/group-applications/get-group-application-list-as-recipient',
  '/sdk/wasm/group/retrieving-group-members/get-group-member-list',
  '/sdk/wasm/group/retrieving-group-members/get-group-member-owner-and-admin',
  '/sdk/wasm/group/retrieving-group-members/get-specified-group-members-info',
  '/sdk/wasm/group/retrieving-group-members/search-group-members',
  '/sdk/wasm/group/retrieving-groups/get-joined-group-list',
  '/sdk/wasm/group/retrieving-groups/get-joined-group-list-page',
  '/sdk/wasm/group/retrieving-groups/get-specified-groups-info',
  '/sdk/wasm/group/retrieving-groups/search-groups',
  '/sdk/wasm/message/managing-messages/get-pinned-messages',
  '/sdk/wasm/message/managing-read-status/get-group-message-readers',
  '/sdk/wasm/message/overview-message',
  '/sdk/wasm/message/retrieving-messages/find-messages-by-id',
  '/sdk/wasm/message/retrieving-messages/load-message-context',
  '/sdk/wasm/message/retrieving-messages/load-newer-messages',
  '/sdk/wasm/message/retrieving-messages/load-older-messages',
  '/sdk/wasm/message/searching-messages/search-messages',
  '/sdk/wasm/message/sending-messages/send-message',
  '/sdk/wasm/message/sending-messages/send-message-not-oss',
  '/sdk/wasm/user/blacklist/get-black-list',
  '/sdk/wasm/user/friend-applications/get-friend-application-list-as-applicant',
  '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
  '/sdk/wasm/user/friends/get-friend-list-page',
  '/sdk/wasm/user/friends/get-specified-friends-info',
  '/sdk/wasm/user/friends/search-friends',
  '/sdk/wasm/user/online-status/get-subscribe-users-status',
  '/sdk/wasm/user/online-status/subscribe-users-status',
  '/sdk/wasm/user/online-status/unsubscribe-users-status',
  '/sdk/wasm/user/profile/get-self-user-info',
]);

const mdxFiles = await collectMdxFiles(contentRoot);
const audit = JSON.parse(await readFile(auditPath, 'utf8'));
const recordsByRoute = new Map();

for (const page of audit.pages) {
  recordsByRoute.set(page.currentPath, page);
}

const missing = [];

for (const file of mdxFiles) {
  const source = await readFile(file, 'utf8');
  const route = source.match(/^sourcePath:\s*['"]([^'"]+)['"]$/m)?.[1];

  if (!route) {
    missing.push(`${relative(root, file)}（缺少 sourcePath）`);
    continue;
  }

  const page = recordsByRoute.get(route);
  if (!page) {
    missing.push(`${relative(root, file)}（审核记录中缺少 ${route}）`);
    continue;
  }

  page.locales.zh.reviewer = 'Codex';
  page.locales.zh.reviewedAt = reviewedAt;
  page.notes ??= [];
  if (!page.notes.includes(note)) page.notes.push(note);
  if (
    reviewedOverviewRoutes.has(route) &&
    !page.notes.includes(overviewNote)
  ) {
    page.notes.push(overviewNote);
  }
  if (
    affectedRemovalRoutes.has(route) &&
    !page.notes.includes(overviewRemovalNote)
  ) {
    page.notes.push(overviewRemovalNote);
  }
  if (
    reviewedReturnResultRoutes.has(route) &&
    !page.notes.includes(returnResultNote)
  ) {
    page.notes.push(returnResultNote);
  }
}

if (missing.length > 0) {
  throw new Error(`无法同步以下 WASM 页面审核记录：\n${missing.join('\n')}`);
}

for (const route of removedOverviewRoutes) {
  const page = recordsByRoute.get(route);
  if (!page) {
    throw new Error(`审核记录中缺少已删除概览页：${route}`);
  }

  page.disposition = 'remove';
  page.redirectTo = null;
  page.sdkMethods = [];
  page.sdkEvents = [];
  page.locales.zh.reviewStatus = 'structure-only';
  page.locales.zh.reviewer = 'Codex';
  page.locales.zh.reviewedAt = reviewedAt;
  page.locales.zh.exampleVerification = {
    status: 'not-applicable',
    evidence: [],
    reason: '概览页已删除，事件说明已迁移到对应查询页面。',
  };
  page.notes ??= [];
  if (!page.notes.includes(overviewRemovalNote)) {
    page.notes.push(overviewRemovalNote);
  }
}

recordsByRoute.get(
  '/sdk/wasm/group/group-applications/get-group-application-list-as-recipient',
).sdkEvents = [
  'OnGroupApplicationAccepted',
  'OnGroupApplicationAdded',
  'OnGroupApplicationBadgeCountChanged',
  'OnGroupApplicationDeleted',
  'OnGroupApplicationRejected',
];
recordsByRoute.get(
  '/sdk/wasm/group/retrieving-group-members/get-group-member-list',
).sdkEvents = [
  'OnGroupMemberAdded',
  'OnGroupMemberDeleted',
  'OnGroupMemberInfoChanged',
];

await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
console.log(
  `已同步 ${mdxFiles.length} 个中文 WASM 页面审核记录；保留 ${reviewedOverviewRoutes.size} 个概览页，删除 ${removedOverviewRoutes.size} 个概览页。`,
);

async function collectMdxFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMdxFiles(path)));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(path);
    }
  }

  return files.sort();
}
