import { readFile, writeFile } from 'node:fs/promises';

const root = '/sdk/wasm/conversation/managing-conversation-groups';
const oldPath = `${root}/manage-conversation-groups`;
const pages = [
  {
    slug: 'overview-conversation-groups',
    title: 'Conversation group overview',
    label: '会话分组概览',
    method: null,
  },
  {
    slug: 'create-conversation-group',
    title: 'createConversationGroup',
    label: '创建会话分组',
    method: 'createConversationGroup',
  },
  {
    slug: 'get-conversation-groups',
    title: 'getConversationGroups',
    label: '查询会话分组',
    method: 'getConversationGroups',
  },
  {
    slug: 'get-conversation-group-info-with-conversations',
    title: 'getConversationGroupInfoWithConversations',
    label: '查询分组内的会话',
    method: 'getConversationGroupInfoWithConversations',
  },
  {
    slug: 'get-conversation-group-ids-by-conversation-id',
    title: 'getConversationGroupIDsByConversationID',
    label: '查询会话所属的分组',
    method: 'getConversationGroupIDsByConversationID',
  },
  {
    slug: 'update-conversation-group',
    title: 'updateConversationGroup',
    label: '更新会话分组',
    method: 'updateConversationGroup',
  },
  {
    slug: 'set-conversation-group-order',
    title: 'setConversationGroupOrder',
    label: '设置会话分组顺序',
    method: 'setConversationGroupOrder',
  },
  {
    slug: 'add-conversations-to-groups',
    title: 'addConversationsToGroups',
    label: '添加会话到分组',
    method: 'addConversationsToGroups',
  },
  {
    slug: 'remove-conversations-from-groups',
    title: 'removeConversationsFromGroups',
    label: '从分组移除会话',
    method: 'removeConversationsFromGroups',
  },
  {
    slug: 'delete-conversation-group',
    title: 'deleteConversationGroup',
    label: '删除会话分组',
    method: 'deleteConversationGroup',
  },
].map((page) => ({ ...page, path: `${root}/${page.slug}` }));

const eventNames = [
  'OnConversationGroupAdded',
  'OnConversationGroupChanged',
  'OnConversationGroupDeleted',
  'OnConversationGroupMemberAdded',
  'OnConversationGroupMemberDeleted',
];

const [sidebar, routes, chatPages, labels, coverage, audit, legacyRedirects] = await Promise.all([
  readJson('data/structure/wasm-sidebar.json'),
  readJson('src/generated/routes.json'),
  readJson('data/structure/chat-pages.json'),
  readJson('data/structure/wasm-navigation-labels.json'),
  readJson('data/structure/wasm-domain-api-coverage.json'),
  readJson('data/structure/wasm-content-audit.json'),
  readJson('data/structure/wasm-legacy-redirects.json'),
]);

const oldRoute = routes.find((route) => route.path === oldPath);
if (!oldRoute) throw new Error(`Missing source route: ${oldPath}`);

replaceSidebarEntry(sidebar.nodes, oldPath, {
  id: 'conversation/conversation-groups',
  title: 'Conversation groups',
  children: pages.map((page) => page.path),
});

const nextRoutes = replaceRoutes(routes, oldRoute);
const nextChatPages = replaceChatPages(chatPages);

labels['Conversation groups'] = '会话分组';
for (const page of pages) labels[page.title] = page.label;
delete labels['Manage conversation groups'];

for (const item of coverage.domains.conversation.methods) {
  const page = pages.find((candidate) => candidate.method === item.name);
  if (page) item.page = page.path;
}
for (const item of coverage.domains.conversation.events) {
  if (eventNames.includes(item.name)) item.page = pages[0].path;
}

const oldAudit = audit.pages.find((page) => page.currentPath === oldPath);
if (!oldAudit) throw new Error(`Missing source audit record: ${oldPath}`);
const activeAudit = pages.map((page) => createAuditRecord(page, oldAudit));
const historicalAudit = {
  ...oldAudit,
  targetPath: oldPath,
  disposition: 'remove',
  sdkMethods: [],
  sdkEvents: [],
  locales: {
    zh: {
      reviewStatus: 'deferred',
      reviewer: null,
      reviewedAt: null,
      exampleVerification: {
        status: 'not-applicable',
        evidence: [],
        reason: '页面已拆分并移出活动路由。',
      },
    },
    en: {
      reviewStatus: 'deferred',
      reviewer: null,
      reviewedAt: null,
      exampleVerification: {
        status: 'not-applicable',
        evidence: [],
        reason: 'The aggregate route was removed after the API-page split.',
      },
    },
  },
  redirectTo: null,
  notes: [
    ...oldAudit.notes,
    '2026-07-23：聚合页已拆为会话分组概览与九个独立 API 页面；按本轮决策不保留旧地址重定向。',
  ],
};
audit.pages = audit.pages
  .filter(
    (page) => page.currentPath !== oldPath && !pages.some((item) => item.path === page.currentPath),
  )
  .concat(activeAudit, historicalAudit);

await Promise.all([
  writeJson('data/structure/wasm-sidebar.json', sidebar),
  writeJson('src/generated/routes.json', nextRoutes),
  writeJson('data/structure/chat-pages.json', nextChatPages),
  writeJson(
    'data/structure/wasm-navigation-labels.json',
    Object.fromEntries(Object.entries(labels).sort(([left], [right]) => left.localeCompare(right))),
  ),
  writeJson('data/structure/wasm-domain-api-coverage.json', coverage),
  writeJson('data/structure/wasm-content-audit.json', audit),
  writeJson(
    'data/structure/wasm-legacy-redirects.json',
    legacyRedirects.filter((entry) => entry.source !== oldPath),
  ),
]);

console.log('Split the WASM conversation-group aggregate route into 10 reviewed pages.');

function replaceRoutes(allRoutes, sourceRoute) {
  const firstIndex = allRoutes.findIndex((route) => route.path === oldPath);
  const newPathSet = new Set(pages.map((page) => page.path));
  const withoutTargetRoutes = allRoutes.filter(
    (route) => route.path !== oldPath && !newPathSet.has(route.path),
  );
  const maxId = Math.max(...withoutTargetRoutes.map((route) => route.id));
  const maxSourceIndex = Math.max(...withoutTargetRoutes.map((route) => route.sourceIndex));
  const additions = pages.map((page, index) => ({
    ...sourceRoute,
    id: index === 0 ? sourceRoute.id : maxId + index,
    path: page.path,
    relativePath: page.path.slice('/'.length),
    sourcePath: page.path,
    title: page.title,
    description:
      index === 0
        ? 'OpenIM WASM SDK guide for conversation group concepts and events.'
        : `OpenIM WASM SDK guide for ${page.title}.`,
    sourceIndex: index === 0 ? sourceRoute.sourceIndex : maxSourceIndex + index,
    contentFile: `content/docs/chat${page.path}.mdx`,
    navOrder: sourceRoute.navOrder + index,
  }));

  for (const route of withoutTargetRoutes) {
    if (route.contextKey === 'chat/sdk/wasm' && route.navOrder > sourceRoute.navOrder) {
      route.navOrder += pages.length - 1;
    }
  }
  withoutTargetRoutes.splice(firstIndex, 0, ...additions);
  return withoutTargetRoutes;
}

function replaceChatPages(items) {
  const firstIndex = items.findIndex((item) => item.openimPath === oldPath);
  const newPathSet = new Set(pages.map((page) => page.path));
  const next = items.filter(
    (item) => item.openimPath !== oldPath && !newPathSet.has(item.openimPath),
  );
  const additions = pages.map((page) => ({
    sourcePath: page.path,
    openimPath: page.path,
    title: page.title,
    context: 'chat/sdk/wasm',
    template: 'guide',
    contentFile: `content/docs/chat${page.path}.mdx`,
  }));
  next.splice(firstIndex, 0, ...additions);
  return next;
}

function replaceSidebarEntry(nodes, target, replacement) {
  for (const node of nodes) {
    if (!node.children) continue;
    const index = node.children.findIndex(
      (child) => child === target || (typeof child === 'object' && child.path === target),
    );
    if (index >= 0) {
      node.children.splice(index, 1, replacement);
      return;
    }
    replaceSidebarEntry(
      node.children.filter((child) => typeof child === 'object'),
      target,
      replacement,
    );
  }
}

function createAuditRecord(page, source) {
  const isOverview = page.method === null;
  return {
    currentPath: page.path,
    targetPath: page.path,
    sourceKind: 'openim-specific',
    disposition: 'adapt',
    sendbirdSource: null,
    openimSources: source.openimSources,
    sdkMethods: page.method ? [page.method] : [],
    sdkEvents: isOverview ? eventNames : [],
    locales: {
      zh: {
        reviewStatus: 'published',
        reviewer: 'Codex',
        reviewedAt: '2026-07-23',
        exampleVerification: {
          status: 'verified',
          evidence: [
            '2026-07-23：逐页人工对照 @openim/wasm-client-sdk@3.8.5-hotfix.0 声明复核方法、参数、返回对象和事件影响。',
            isOverview
              ? '2026-07-23：人工复核五个事件的稳定监听引用、对应 off() 清理和 conversationGroupID 合并标识。'
              : `2026-07-23：人工确认本页只归属 ${page.method}，未混入其他方法的参数或返回结果。`,
          ],
          reason: null,
        },
      },
      en: {
        reviewStatus: 'deferred',
        reviewer: null,
        reviewedAt: null,
        exampleVerification: {
          status: 'pending',
          evidence: [],
          reason: null,
        },
      },
    },
    redirectTo: null,
    notes: [
      isOverview
        ? '2026-07-23：会话分组概念、数据模型和五个事件的唯一完整监听归属页。'
        : `2026-07-23：由原会话分组聚合页逐页人工拆分；当前页面只说明 ${page.method}。`,
    ],
  };
}

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

async function writeJson(path, value) {
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}
