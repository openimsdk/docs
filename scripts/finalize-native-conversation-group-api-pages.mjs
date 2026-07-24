import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const baseSuffix = 'conversation/managing-conversation-groups';
const events = {
  ios: [
    'onConversationGroupAdded:',
    'onConversationGroupChanged:',
    'onConversationGroupDeleted:',
    'onConversationGroupMemberAdded:',
    'onConversationGroupMemberDeleted:',
  ],
  flutter: [
    'onConversationGroupAdded',
    'onConversationGroupChanged',
    'onConversationGroupDeleted',
    'onConversationGroupMemberAdded',
    'onConversationGroupMemberDeleted',
  ],
};
const methods = {
  ios: {
    'overview-conversation-groups': 'Open_im_sdkSetConversationGroupListener',
    'create-conversation-group': 'Open_im_sdkCreateConversationGroup',
    'get-conversation-groups': 'Open_im_sdkGetConversationGroups',
    'get-conversation-group-info-with-conversations':
      'Open_im_sdkGetConversationGroupInfoWithConversations',
    'get-conversation-group-ids-by-conversation-id':
      'Open_im_sdkGetConversationGroupByConversationID',
    'update-conversation-group': 'Open_im_sdkUpdateConversationGroup',
    'set-conversation-group-order': 'Open_im_sdkSetConversationGroupOrder',
    'add-conversations-to-groups': 'Open_im_sdkAddConversationsToGroups',
    'remove-conversations-from-groups': 'Open_im_sdkRemoveConversationsFromGroups',
    'delete-conversation-group': 'Open_im_sdkDeleteConversationGroup',
  },
  flutter: {
    'overview-conversation-groups': null,
    'create-conversation-group': 'createConversationGroup',
    'get-conversation-groups': 'getConversationGroups',
    'get-conversation-group-info-with-conversations':
      'getConversationGroupInfoWithConversations',
    'get-conversation-group-ids-by-conversation-id': 'getConversationGroupByConversationID',
    'update-conversation-group': 'updateConversationGroup',
    'set-conversation-group-order': 'setConversationGroupOrder',
    'add-conversations-to-groups': 'addConversationsToGroups',
    'remove-conversations-from-groups': 'removeConversationsFromGroups',
    'delete-conversation-group': 'deleteConversationGroup',
  },
};

for (const platformId of ['ios', 'flutter']) {
  const path = resolve(root, `data/structure/${platformId}-content-audit.json`);
  const audit = JSON.parse(await readFile(path, 'utf8'));
  const oldPath = `/sdk/${platformId}/${baseSuffix}/manage-conversation-groups`;
  const oldPage = audit.pages.find((page) => page.currentPath === oldPath);
  if (!oldPage) throw new Error(`[${platformId}] missing historical conversation-group audit`);
  const evidence = oldPage.locales.zh.exampleVerification.evidence;
  oldPage.disposition = 'omit';
  oldPage.redirectTo = null;
  oldPage.sdkMethods = [];
  oldPage.sdkEvents = [];
  oldPage.locales.zh.exampleVerification = {
    status: 'not-applicable',
    evidence: [],
    reason: '该聚合页已从正文和导航移除；方法与事件证据已迁移到新的独立页面。',
  };
  if (!oldPage.notes.some((note) => note.includes('事件所有权已迁移'))) {
    oldPage.notes.push(
      '2026-07-23：聚合页不再拥有事件；事件所有权已迁移到会话分组概览，原固定来源继续作为历史审核记录保留。',
    );
  }

  for (const [slug, method] of Object.entries(methods[platformId])) {
    const currentPath = `/sdk/${platformId}/${baseSuffix}/${slug}`;
    const page = audit.pages.find((candidate) => candidate.currentPath === currentPath);
    if (!page) throw new Error(`[${platformId}] missing audit page: ${currentPath}`);
    page.openimSources = [...oldPage.openimSources];
    page.sdkMethods = method ? [method] : [];
    page.sdkEvents = slug === 'overview-conversation-groups' ? events[platformId] : [];
    page.locales.zh = {
      reviewStatus: 'published',
      reviewer: 'Codex',
      reviewedAt: '2026-07-23',
      exampleVerification: {
        status: 'verified',
        evidence: [...evidence],
        reason: null,
      },
    };
    page.notes = [
      `2026-07-23：已逐页人工审核；会话分组概览集中承载事件，${slug === 'overview-conversation-groups' ? '各 API 入口已拆为独立页面' : `本页仅归属 ${method}`}，并保留 ${platformId === 'ios' ? 'OpenIMCore JSON' : 'Flutter model'} 的真实平台差异。`,
    ];
  }

  const relatedPages =
    platformId === 'ios'
      ? ['overview', 'conversation/overview-conversation', 'events/overview-events']
      : ['conversation/overview-conversation', 'events/overview-events'];
  for (const suffix of relatedPages) {
    const page = audit.pages.find(
      (candidate) => candidate.currentPath === `/sdk/${platformId}/${suffix}`,
    );
    if (!page) throw new Error(`[${platformId}] missing reviewed page: ${suffix}`);
    page.locales.zh.reviewedAt = '2026-07-23';
    page.notes.push(
      '2026-07-23：会话分组入口已改为二级菜单概览；完整分组 listener 只归属会话分组概览页。',
    );
  }

  const eventsOverview = audit.pages.find(
    (page) => page.currentPath === `/sdk/${platformId}/events/overview-events`,
  );
  if (platformId === 'ios') {
    eventsOverview.sdkMethods = eventsOverview.sdkMethods.filter(
      (method) => method !== 'Open_im_sdkSetConversationGroupListener',
    );
    eventsOverview.sdkEvents = eventsOverview.sdkEvents.filter(
      (event) => event !== 'Open_im_sdk_callbackOnConversationGroupListener',
    );
  } else {
    eventsOverview.sdkMethods = eventsOverview.sdkMethods.filter(
      (method) => method !== 'setConversationGroupListener',
    );
  }

  await writeFile(path, `${JSON.stringify(audit, null, 2)}\n`, 'utf8');
}
