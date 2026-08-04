import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
const localRoot = '/platform-api/conversation';
const contentRoot = 'content/docs/chat/platform-api/conversation';
const zhContentRoot = 'content/zh/docs/chat/platform-api/conversation';
const contextKey = 'chat/platform-api';
const contextTitle = 'Platform API';

// Mirrors open-im-server/internal/api/router.go conversationGroup.POST order.
const goConversationApiOrder = [
  '/conversation/get_sorted_conversation_list',
  '/conversation/get_all_conversations',
  '/conversation/get_conversation',
  '/conversation/get_conversations',
  '/conversation/set_conversations',
  '/conversation/get_conversation_offline_push_user_ids',
  '/conversation/get_full_conversation_ids',
  '/conversation/get_incremental_conversations',
  '/conversation/get_owner_conversation',
  '/conversation/get_not_notify_conversation_ids',
  '/conversation/get_pinned_conversation_ids',
];
const goConversationApiOrderIndex = new Map(
  goConversationApiOrder.map((endpoint, index) => [endpoint, index]),
);

const commonHeaders = [
  ['operationID', '是', 'string', '每次请求的唯一链路追踪 ID，建议由后端生成并写入日志。'],
  ['token', '是', 'string', 'APP 管理员 Token；仅保存在可信后端服务中。'],
  ['Content-Type: application/json', '是', 'string', '请求体为 JSON 时必须设置。'],
];

const conversationInfo = {
  ownerUserID: 'user_001',
  conversationID: 'si_user_001_user_002',
  recvMsgOpt: 0,
  conversationType: 1,
  userID: 'user_002',
  groupID: '',
  isPinned: false,
  attachedInfo: '',
  isPrivateChat: false,
  groupAtType: 0,
  ex: '',
  burnDuration: 0,
  minSeq: 0,
  maxSeq: 128,
  msgDestructTime: 0,
  latestMsgDestructTime: 0,
  isMsgDestruct: false,
};

const groupConversationInfo = {
  ownerUserID: 'user_001',
  conversationID: 'sg_group_001',
  recvMsgOpt: 0,
  conversationType: 3,
  userID: '',
  groupID: 'group_001',
  isPinned: true,
  attachedInfo: '',
  isPrivateChat: false,
  groupAtType: 0,
  ex: '',
  burnDuration: 0,
  minSeq: 0,
  maxSeq: 256,
  msgDestructTime: 0,
  latestMsgDestructTime: 0,
  isMsgDestruct: false,
};

const conversationReq = {
  conversationID: 'si_user_001_user_002',
  conversationType: 1,
  userID: 'user_002',
  groupID: '',
  recvMsgOpt: 0,
  isPinned: true,
  attachedInfo: '',
  isPrivateChat: false,
  ex: '',
  burnDuration: 0,
  minSeq: 0,
  maxSeq: 128,
  groupAtType: 0,
  msgDestructTime: 0,
  isMsgDestruct: false,
};

const msgInfo = {
  serverMsgID: 'server_msg_001',
  clientMsgID: 'client_msg_001',
  sessionType: 1,
  sendID: 'user_002',
  recvID: 'user_001',
  senderName: 'Jane',
  faceURL: 'https://example.com/avatar-jane.png',
  groupID: '',
  groupName: '',
  groupFaceURL: '',
  groupType: 0,
  groupMemberCount: 0,
  LatestMsgRecvTime: 1719800000000,
  msgFrom: 100,
  contentType: 101,
  content: '{"content":"hello"}',
  ex: '',
};

const conversationElem = {
  conversationID: 'si_user_001_user_002',
  recvMsgOpt: 0,
  unreadCount: 2,
  IsPinned: false,
  msgInfo,
};

const paginationFields = [
  ['pagination', '是', 'object', '分页参数。'],
  ['pagination.pageNumber', '是', 'int', '页码，从 1 开始。'],
  ['pagination.showNumber', '是', 'int', '每页数量，必须大于 0。'],
];

const conversationReqFields = [
  ['conversation', '是', 'object', '要设置的会话字段。'],
  ['conversation.conversationID', '是', 'string', '会话 ID。'],
  ['conversation.conversationType', '是', 'int', '会话类型，例如 1 单聊、3 群聊。'],
  ['conversation.userID', '否', 'string', '单聊目标用户 ID；单聊会话必填。'],
  ['conversation.groupID', '否', 'string', '群组 ID；群聊会话必填。'],
  ['conversation.recvMsgOpt', '否', 'int', '收消息选项，例如正常接收、免打扰等。'],
  ['conversation.isPinned', '否', 'boolean', '是否置顶会话；传入字段时会更新。'],
  ['conversation.attachedInfo', '否', 'string', '会话附加信息。'],
  ['conversation.isPrivateChat', '否', 'boolean', '是否为私聊/阅后即焚类会话。'],
  ['conversation.ex', '否', 'string', '会话扩展字段。'],
  ['conversation.burnDuration', '否', 'int', '阅后即焚时长，单位秒。'],
  ['conversation.minSeq', '否', 'int', '会话最小消息序列号。'],
  ['conversation.maxSeq', '否', 'int', '会话最大消息序列号。'],
  ['conversation.groupAtType', '否', 'int', '群聊 @ 状态。'],
  ['conversation.msgDestructTime', '否', 'int', '消息销毁时间配置。'],
  ['conversation.isMsgDestruct', '否', 'boolean', '是否开启消息销毁。'],
];

const conversationResponseFields = [
  ['data.conversation.ownerUserID', 'string', '会话所属用户 ID。'],
  ['data.conversation.conversationID', 'string', '会话 ID。'],
  ['data.conversation.recvMsgOpt', 'int', '收消息选项。'],
  ['data.conversation.conversationType', 'int', '会话类型。'],
  ['data.conversation.userID', 'string', '单聊目标用户 ID。'],
  ['data.conversation.groupID', 'string', '群组 ID。'],
  ['data.conversation.isPinned', 'boolean', '是否置顶会话。'],
  ['data.conversation.attachedInfo', 'string', '会话附加信息。'],
  ['data.conversation.isPrivateChat', 'boolean', '是否为私聊/阅后即焚类会话。'],
  ['data.conversation.groupAtType', 'int', '群聊 @ 状态。'],
  ['data.conversation.ex', 'string', '会话扩展字段。'],
  ['data.conversation.burnDuration', 'int', '阅后即焚时长，单位秒。'],
  ['data.conversation.minSeq', 'int', '会话最小消息序列号。'],
  ['data.conversation.maxSeq', 'int', '会话最大消息序列号。'],
  ['data.conversation.msgDestructTime', 'int', '消息销毁时间配置。'],
  ['data.conversation.latestMsgDestructTime', 'int', '最近消息销毁时间。'],
  ['data.conversation.isMsgDestruct', 'boolean', '是否开启消息销毁。'],
];

const conversationListResponseFields = [
  ['data.conversations', 'array', '会话列表。'],
  ['data.conversations[].ownerUserID', 'string', '会话所属用户 ID。'],
  ['data.conversations[].conversationID', 'string', '会话 ID。'],
  ['data.conversations[].conversationType', 'int', '会话类型。'],
  ['data.conversations[].userID', 'string', '单聊目标用户 ID。'],
  ['data.conversations[].groupID', 'string', '群组 ID。'],
  ['data.conversations[].isPinned', 'boolean', '是否置顶会话。'],
  ['data.conversations[].recvMsgOpt', 'int', '收消息选项。'],
  ['data.conversations[].ex', 'string', '会话扩展字段。'],
];

const conversationApis = [
  {
    slug: 'get-sorted-conversation-list',
    title: '获取排序会话列表',
    endpoint: '/conversation/get_sorted_conversation_list',
    summary: '按置顶状态和最新消息时间分页获取用户会话列表，并返回未读数和最新消息摘要。',
    sample: {
      userID: 'user_001',
      conversationIDs: ['si_user_001_user_002'],
      pagination: { pageNumber: 1, showNumber: 20 },
    },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['conversationIDs', '否', 'array', '指定会话 ID 列表；不传时按分页读取该用户会话。'],
      ...paginationFields,
    ],
    responseData: {
      conversationTotal: 2,
      unreadTotal: 3,
      conversationElems: [conversationElem],
    },
    responseFields: [
      ['data.conversationTotal', 'int', '符合条件的会话总数。'],
      ['data.unreadTotal', 'int', '未读消息总数。'],
      ['data.conversationElems', 'array', '排序后的会话摘要列表。'],
      ['data.conversationElems[].conversationID', 'string', '会话 ID。'],
      ['data.conversationElems[].recvMsgOpt', 'int', '收消息选项。'],
      ['data.conversationElems[].unreadCount', 'int', '会话未读消息数。'],
      ['data.conversationElems[].IsPinned', 'boolean', '是否置顶会话。'],
      ['data.conversationElems[].msgInfo', 'object', '最新消息摘要。'],
      ['data.conversationElems[].msgInfo.serverMsgID', 'string', '服务端消息 ID。'],
      ['data.conversationElems[].msgInfo.clientMsgID', 'string', '客户端消息 ID。'],
      ['data.conversationElems[].msgInfo.sessionType', 'int', '消息会话类型。'],
      ['data.conversationElems[].msgInfo.sendID', 'string', '发送者 ID。'],
      ['data.conversationElems[].msgInfo.recvID', 'string', '接收者 ID。'],
      ['data.conversationElems[].msgInfo.LatestMsgRecvTime', 'int', '最新消息接收时间。'],
      ['data.conversationElems[].msgInfo.contentType', 'int', '消息内容类型。'],
      ['data.conversationElems[].msgInfo.content', 'string', '消息内容字符串。'],
    ],
    sideEffects: '只读查询，不改变会话状态。',
    limits: ['`userID` 和 `pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'get-all-conversations',
    title: '获取全部会话',
    endpoint: '/conversation/get_all_conversations',
    summary: '获取指定用户的全部会话记录。',
    sample: { ownerUserID: 'user_001' },
    fields: [['ownerUserID', '是', 'string', '会话所属用户 ID。']],
    responseData: { conversations: [conversationInfo, groupConversationInfo] },
    responseFields: conversationListResponseFields,
    sideEffects: '只读查询，不改变会话状态。',
    limits: ['`ownerUserID` 必填。', '会话数量较大时，优先使用分页接口。'],
  },
  {
    slug: 'get-conversation',
    title: '获取单个会话',
    endpoint: '/conversation/get_conversation',
    summary: '按会话 ID 和所属用户查询单个会话记录。',
    sample: { conversationID: 'si_user_001_user_002', ownerUserID: 'user_001' },
    fields: [
      ['conversationID', '是', 'string', '要查询的会话 ID。'],
      ['ownerUserID', '是', 'string', '会话所属用户 ID。'],
    ],
    responseData: { conversation: conversationInfo },
    responseFields: [['data.conversation', 'object', '会话详情。'], ...conversationResponseFields],
    sideEffects: '只读查询，不改变会话状态。',
    limits: ['`conversationID` 和 `ownerUserID` 必填。'],
  },
  {
    slug: 'get-conversations',
    title: '批量获取会话',
    endpoint: '/conversation/get_conversations',
    summary: '批量获取指定用户的一组会话记录。',
    sample: { ownerUserID: 'user_001', conversationIDs: ['si_user_001_user_002'] },
    fields: [
      ['ownerUserID', '是', 'string', '会话所属用户 ID。'],
      ['conversationIDs', '是', 'array', '要查询的会话 ID 列表。'],
    ],
    responseData: { conversations: [conversationInfo] },
    responseFields: conversationListResponseFields,
    sideEffects: '只读查询，不改变会话状态。',
    limits: ['`ownerUserID` 和 `conversationIDs` 必填。', '`conversationIDs` 不要传重复值。'],
  },
  {
    slug: 'set-conversations',
    title: '批量设置会话',
    endpoint: '/conversation/set_conversations',
    summary: '为多个用户批量设置同一个会话的可更新字段，例如免打扰、置顶、扩展字段或阅后即焚配置。',
    sample: { userIDs: ['user_001', 'user_003'], conversation: conversationReq },
    fields: [
      ['userIDs', '是', 'array', '需要设置会话字段的用户 ID 列表。'],
      ...conversationReqFields,
    ],
    sideEffects: '批量更新用户会话设置，并可能触发会话变更通知。',
    limits: [
      '`userIDs` 和 `conversation` 必填。',
      '仅传需要更新的包装类型字段；未传字段不会被修改。',
      '单聊会话填写 `conversation.userID`，群聊会话填写 `conversation.groupID`。',
    ],
  },
  {
    slug: 'get-conversation-offline-push-user-ids',
    title: '获取会话离线推送用户 ID',
    endpoint: '/conversation/get_conversation_offline_push_user_ids',
    summary: '在指定候选用户中，查询某个会话仍应接收离线推送的用户 ID。',
    sample: {
      conversationID: 'sg_group_001',
      userIDs: ['user_001', 'user_002', 'user_003'],
    },
    fields: [
      ['conversationID', '是', 'string', '会话 ID。'],
      ['userIDs', '是', 'array', '候选用户 ID 列表。'],
    ],
    responseData: { userIDs: ['user_001', 'user_003'] },
    responseFields: [['data.userIDs', 'array', '需要接收离线推送的用户 ID 列表。']],
    sideEffects: '只读查询，不改变会话或推送状态。',
    limits: ['`conversationID` 和 `userIDs` 必填。', '`userIDs` 不要传重复值。'],
  },
  {
    slug: 'get-full-conversation-ids',
    title: '全量获取会话 ID',
    endpoint: '/conversation/get_full_conversation_ids',
    summary: '按哈希比较并全量获取指定用户的会话 ID 列表。',
    sample: { userID: 'user_001', idHash: 0 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['idHash', '否', 'int', '客户端已缓存会话 ID 列表的哈希值；首次同步可传 0。'],
    ],
    responseData: {
      version: 2,
      versionID: 'conversation_v2',
      equal: false,
      conversationIDs: ['si_user_001_user_002', 'sg_group_001'],
    },
    responseFields: [
      ['data.version', 'int', '新的同步版本号。'],
      ['data.versionID', 'string', '新的同步版本 ID。'],
      ['data.equal', 'boolean', '服务端数据是否与客户端哈希一致。'],
      ['data.conversationIDs', 'array', '会话 ID 列表；当 `equal` 为 true 时可能为空。'],
    ],
    sideEffects: '只读同步接口，不改变会话状态。',
    limits: ['`userID` 必填。'],
  },
  {
    slug: 'get-incremental-conversations',
    title: '增量获取会话',
    endpoint: '/conversation/get_incremental_conversations',
    summary: '按版本号增量同步指定用户的会话变更。',
    sample: { userID: 'user_001', versionID: '', version: 0 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['versionID', '否', 'string', '上次同步返回的版本 ID。'],
      ['version', '否', 'int', '上次同步返回的版本号。'],
    ],
    sideEffects: '只读同步接口，不改变会话状态。',
    limits: ['内部增量同步接口，不生成到对外文档。'],
  },
  {
    slug: 'get-owner-conversation',
    title: '分页获取用户会话',
    endpoint: '/conversation/get_owner_conversation',
    summary: '分页获取指定用户拥有的会话列表。',
    sample: { userID: 'user_001', pagination: { pageNumber: 1, showNumber: 20 } },
    fields: [['userID', '是', 'string', '目标用户 ID。'], ...paginationFields],
    responseData: { total: 2, conversations: [conversationInfo, groupConversationInfo] },
    responseFields: [['data.total', 'int', '会话总数。'], ...conversationListResponseFields],
    sideEffects: '只读查询，不改变会话状态。',
    limits: ['`userID` 和 `pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'get-not-notify-conversation-ids',
    title: '获取免打扰会话 ID',
    endpoint: '/conversation/get_not_notify_conversation_ids',
    summary: '获取指定用户设置为免打扰或不通知的会话 ID 列表。',
    sample: { userID: 'user_001' },
    fields: [['userID', '是', 'string', '目标用户 ID。']],
    responseData: { conversationIDs: ['sg_group_001'] },
    responseFields: [['data.conversationIDs', 'array', '免打扰会话 ID 列表。']],
    sideEffects: '只读查询，不改变会话状态。',
    limits: ['`userID` 必填。'],
  },
  {
    slug: 'get-pinned-conversation-ids',
    title: '获取置顶会话 ID',
    endpoint: '/conversation/get_pinned_conversation_ids',
    summary: '获取指定用户已置顶的会话 ID 列表。',
    sample: { userID: 'user_001' },
    fields: [['userID', '是', 'string', '目标用户 ID。']],
    responseData: { conversationIDs: ['si_user_001_user_002'] },
    responseFields: [['data.conversationIDs', 'array', '置顶会话 ID 列表。']],
    sideEffects: '只读查询，不改变会话状态。',
    limits: ['`userID` 必填。'],
  },
];

const internalConversationApiSlugs = new Set(['get-incremental-conversations']);

validateGoConversationApiOrder();

const externalConversationApis = conversationApis
  .filter((api) => !internalConversationApiSlugs.has(api.slug))
  .sort(compareByGoConversationApiOrder);
const omittedConversationApis = conversationApis
  .filter((api) => internalConversationApiSlugs.has(api.slug))
  .sort(compareByGoConversationApiOrder);

await rm(resolve(root, contentRoot), { force: true, recursive: true });
await rm(resolve(root, zhContentRoot), { force: true, recursive: true });

const routesPath = resolve(root, 'src/generated/routes.json');
const navigationPath = resolve(root, 'src/generated/navigation.json');
const platformApiZhPath = resolve(root, 'src/generated/platform-api-zh-content.json');
const structurePath = resolve(root, 'data/structure/chat-pages.json');

const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const navigation = JSON.parse(await readFile(navigationPath, 'utf8'));
const platformApiZh = JSON.parse(await readFile(platformApiZhPath, 'utf8'));

const routesWithoutConversation = routes.filter((route) => !route.path.startsWith(`${localRoot}/`));
const maxSourceIndex = Math.max(
  ...routesWithoutConversation.map((route) => route.sourceIndex ?? 0),
);
const maxNavOrder = Math.max(...routesWithoutConversation.map((route) => route.navOrder ?? 0));

const newRoutes = [];
for (const [index, spec] of externalConversationApis.entries()) {
  const path = `${localRoot}/${spec.slug}`;
  const relativePath = path.replace(/^\/docs\//, '');
  const contentFile = `${contentRoot}/${spec.slug}.mdx`;
  const record = {
    id: 0,
    path,
    relativePath,
    sourcePath: path,
    title: spec.title,
    description: `OpenIM 会话 REST API：${spec.title}。`,
    product: 'platform-api',
    version: 'v3',
    platform: null,
    contextKey,
    contextTitle,
    template: 'api',
    status: 'published',
    sourceIndex: maxSourceIndex + index + 1,
    contentFile,
    navOrder: maxNavOrder + index + 1,
  };
  newRoutes.push(record);

  await writeMdx(contentFile, renderMdx(record, spec, false));
  await writeMdx(`${zhContentRoot}/${spec.slug}.mdx`, renderMdx(record, spec, true));
}

const nextRoutes = [...routesWithoutConversation, ...newRoutes].map((route, index) => ({
  ...route,
  id: index + 1,
}));

const platformContext = navigation.contexts.find((context) => context.key === contextKey);
if (!platformContext) {
  throw new Error(`Missing navigation context: ${contextKey}`);
}

const conversationNode = {
  id: 'conversation',
  segment: 'conversation',
  title: '会话',
  href: null,
  type: 'folder',
  children: newRoutes.map((route) => ({
    id: `conversation/${route.path.split('/').at(-1)}`,
    segment: route.path.split('/').at(-1),
    title: route.title,
    href: route.path,
    type: 'page',
    children: [],
    minIndex: route.navOrder,
  })),
  minIndex: newRoutes[0]?.navOrder ?? maxNavOrder + 1,
};

platformContext.nodes = platformContext.nodes.filter((node) => node.id !== 'conversation');
const messageIndex = platformContext.nodes.findIndex((node) => node.id === 'message');
const groupIndex = platformContext.nodes.findIndex((node) => node.id === 'group');
if (messageIndex >= 0) {
  platformContext.nodes.splice(messageIndex + 1, 0, conversationNode);
} else if (groupIndex >= 0) {
  platformContext.nodes.splice(groupIndex + 1, 0, conversationNode);
} else {
  platformContext.nodes.push(conversationNode);
}
platformContext.pageCount = nextRoutes.filter((route) => route.contextKey === contextKey).length;

platformApiZh.generatedAt = today;
platformApiZh.navigationLabels = {
  ...platformApiZh.navigationLabels,
  conversation: '会话',
};

await Promise.all([
  writeFile(routesPath, `${JSON.stringify(nextRoutes, null, 2)}\n`, 'utf8'),
  writeFile(navigationPath, `${JSON.stringify(navigation, null, 2)}\n`, 'utf8'),
  writeFile(platformApiZhPath, `${JSON.stringify(platformApiZh, null, 2)}\n`, 'utf8'),
  writeFile(
    structurePath,
    `${JSON.stringify(
      nextRoutes.map((route) => ({
        sourcePath: route.sourcePath,
        openimPath: route.path,
        title: route.title,
        context: route.contextKey,
        template: route.template,
        contentFile: route.contentFile,
      })),
      null,
      2,
    )}\n`,
    'utf8',
  ),
]);

console.log(
  `Wrote ${externalConversationApis.length} external OpenIM conversation API page(s); omitted ${omittedConversationApis.length} internal route(s).`,
);

async function writeMdx(file, body) {
  await mkdir(dirname(resolve(root, file)), { recursive: true });
  await writeFile(
    resolve(root, file),
    body.replaceAll('/docs/chat/platform-api/v3', '/platform-api'),
    'utf8',
  );
}

function renderMdx(record, spec, localized) {
  const frontmatter = localized
    ? {
        title: record.title,
        description: record.description,
        sourcePath: record.sourcePath,
      }
    : {
        title: record.title,
        description: record.description,
        product: record.product,
        context: record.contextKey,
        template: record.template,
        status: record.status,
        lastUpdated: today,
        version: record.version,
        sourcePath: record.sourcePath,
      };

  return `---\n${renderFrontmatter(frontmatter)}\n---\n\n${renderBody(spec)}\n`;
}

function renderBody(spec) {
  const success = {
    errCode: 0,
    errMsg: '',
    errDlt: '',
    ...(spec.responseData ? { data: spec.responseData } : {}),
  };
  const responseFields = [
    ['errCode', 'int', '业务错误码，0 表示成功。'],
    ['errMsg', 'string', '错误简要信息，成功时通常为空。'],
    ['errDlt', 'string', '错误详细信息，成功时通常为空。'],
    ...(spec.responseData ? [['data', 'object', '接口返回数据。']] : []),
    ...(spec.responseFields ?? []),
  ];

  return `使用 **${spec.title}** 从可信后端调用 OpenIM 会话 REST 接口。${spec.summary} 请先在[接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)中配置 API 地址和管理员 Token；接口参数通过请求头和 JSON 请求体传递。\n\n## HTTP 请求\n\n\`\`\`bash\nPOST {API_ADDRESS}${spec.endpoint}\n\`\`\`\n\n### 请求示例\n\n\`\`\`bash\ncurl --request POST "\${API_ADDRESS}${spec.endpoint}" \\\n  --header "Content-Type: application/json; charset=utf-8" \\\n  --header "operationID: \${OPERATION_ID}" \\\n  --header "token: \${ADMIN_TOKEN}" \\\n  --data-raw '${json(spec.sample)}'\n\`\`\`\n\n> 安全提示：管理员 Token 只能保存在可信后端服务中，不能下发到客户端或写入前端代码。客户端登录应使用服务端签发的用户 Token。\n\n## 参数\n\n此接口通过请求头传入链路追踪信息和鉴权凭证，通过 JSON 请求体传递业务参数。\n\n### 请求头\n\n${renderTable(['Header', '是否必填', '类型', '说明'], commonHeaders)}\n\n## 请求体\n\n\`\`\`json\n${json(spec.sample)}\n\`\`\`\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.fields)}\n\n## 响应\n\n请求被 OpenIM 正常处理时通常返回 \`200 OK\`。业务是否成功以响应体中的 \`errCode\` 为准；\`errCode === 0\` 表示成功，非 0 表示业务错误。\n\n\`\`\`json\n${json(success)}\n\`\`\`\n\n### 响应参数\n\n${renderTable(['参数名', '类型', '说明'], responseFields)}\n\n### 错误\n\n如果请求失败，OpenIM 返回错误对象。更多错误码说明见[错误码](/docs/chat/platform-api/v3/error-codes)。\n\n\`\`\`json\n${json({ errCode: 1004, errMsg: 'RecordNotFoundError', errDlt: ': [1004]RecordNotFoundError' })}\n\`\`\`\n\n| 错误场景 | 可能原因 | 处理方式 |\n| -------- | -------- | -------- |\n| 鉴权失败 | \`token\` 缺失、过期，或不是可调用管理端接口的管理员 Token。 | 重新获取 APP 管理员 Token，并只在可信后端保存。 |\n| 链路追踪困难 | \`operationID\` 缺失或在大量请求中重复使用。 | 为每次请求生成独立 \`operationID\`，并在服务端日志中保留。 |\n| 参数校验失败 | 请求体字段类型、必填字段或枚举值不符合接口要求。 | 对照请求体参数表和限制说明检查字段。 |\n\n## 权限和限制\n\n- ${spec.sideEffects}\n${spec.limits.map((item) => `- ${item}`).join('\n')}\n- 所有数组型请求参数建议控制在 1000 个元素以内。\n\n## 相关页面\n\n- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)\n- [发送消息](/docs/chat/platform-api/v3/message/sending-messages/send-msg)\n- [群组概览](/docs/chat/platform-api/v3/group/overview)\n- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

function renderFrontmatter(values) {
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
}

function validateGoConversationApiOrder() {
  const endpoints = new Set(conversationApis.map((api) => api.endpoint));
  const missingOrder = [...endpoints].filter(
    (endpoint) => !goConversationApiOrderIndex.has(endpoint),
  );
  if (missingOrder.length > 0) {
    throw new Error(`Missing Go conversation API order for: ${missingOrder.join(', ')}`);
  }

  const missingSpec = goConversationApiOrder.filter((endpoint) => !endpoints.has(endpoint));
  if (missingSpec.length > 0) {
    throw new Error(`Missing conversation API spec for: ${missingSpec.join(', ')}`);
  }
}

function compareByGoConversationApiOrder(a, b) {
  return goConversationApiOrderIndex.get(a.endpoint) - goConversationApiOrderIndex.get(b.endpoint);
}

function renderTable(headers, rows) {
  const divider = headers.map(() => '---');
  const lines = [headers, divider, ...rows].map((row) => `| ${row.map(escapeCell).join(' | ')} |`);
  return lines.join('\n');
}

function escapeCell(value) {
  return String(value).replace(/\|/g, '\\|');
}

function json(value) {
  return JSON.stringify(value, null, 2);
}
