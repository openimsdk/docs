import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
const localRoot = '/platform-api/user';
const contentRoot = 'content/docs/chat/platform-api/user';
const zhContentRoot = 'content/zh/docs/chat/platform-api/user';
const contextKey = 'chat/platform-api';
const contextTitle = 'Platform API';

// Mirrors open-im-server/internal/api/router.go userRouterGroup.POST order.
const goUserApiOrder = [
  '/user/user_register',
  '/user/update_user_info',
  '/user/update_user_info_ex',
  '/user/set_global_msg_recv_opt',
  '/user/get_users_info',
  '/user/get_all_users_uid',
  '/user/account_check',
  '/user/get_users',
  '/user/get_users_online_status',
  '/user/get_users_online_token_detail',
  '/user/subscribe_users_status',
  '/user/get_users_status',
  '/user/get_subscribe_users_status',
  '/user/process_user_command_add',
  '/user/process_user_command_delete',
  '/user/process_user_command_update',
  '/user/process_user_command_get',
  '/user/process_user_command_get_all',
  '/user/add_notification_account',
  '/user/update_notification_account',
  '/user/search_notification_account',
];
const goUserApiOrderIndex = new Map(goUserApiOrder.map((endpoint, index) => [endpoint, index]));

const commonHeaders = [
  ['operationID', '是', 'string', '每次请求的唯一链路追踪 ID，建议由后端生成并写入日志。'],
  ['token', '是', 'string', 'APP 管理员 Token；仅保存在可信后端服务中。'],
  ['Content-Type: application/json', '是', 'string', '请求体为 JSON 时必须设置。'],
];

const userInfo = {
  userID: 'user_001',
  nickname: 'Tom',
  faceURL: 'https://example.com/avatar-tom.png',
  ex: '',
  createTime: 1719800000000,
  appMangerLevel: 0,
  globalRecvMsgOpt: 0,
};

const userInfoEx = {
  userID: 'user_001',
  nickname: 'Tom',
  faceURL: 'https://example.com/avatar-tom.png',
  ex: '',
  globalRecvMsgOpt: 0,
};

const onlineStatus = {
  userID: 'user_001',
  status: 1,
  platformIDs: [1, 2],
};

const gatewayOnlineStatus = {
  userID: 'user_001',
  status: 1,
  detailPlatformStatus: [
    {
      platformID: 2,
      connID: 'conn_001',
      isBackground: false,
      token: 'user_token_sample',
    },
  ],
};

const onlineTokenDetail = {
  userID: 'user_001',
  status: 1,
  singlePlatformToken: [
    {
      platformID: 2,
      total: 1,
      token: ['user_token_sample'],
    },
  ],
};

const notificationAccount = {
  userID: 'notification_001',
  faceURL: 'https://example.com/notification.png',
  nickName: '系统通知',
  appMangerLevel: 3,
};

const paginationFields = [
  ['pagination', '是', 'object', '分页参数。'],
  ['pagination.pageNumber', '是', 'int', '页码，从 1 开始。'],
  ['pagination.showNumber', '是', 'int', '每页数量，必须大于 0。'],
];

const userInfoFields = [
  ['userInfo', '是', 'object', '用户资料对象。'],
  ['userInfo.userID', '是', 'string', '用户 ID。'],
  ['userInfo.nickname', '否', 'string', '用户昵称。'],
  ['userInfo.faceURL', '否', 'string', '用户头像 URL。'],
  ['userInfo.ex', '否', 'string', '用户扩展字段。'],
  ['userInfo.createTime', '否', 'int', '用户创建时间。'],
  ['userInfo.appMangerLevel', '否', 'int', '用户管理级别。'],
  ['userInfo.globalRecvMsgOpt', '否', 'int', '全局消息接收选项。'],
];

const userInfoExFields = [
  ['userInfo', '是', 'object', '用户资料对象。'],
  ['userInfo.userID', '是', 'string', '用户 ID。'],
  ['userInfo.nickname', '否', 'string', '用户昵称；传入字段时会更新。'],
  ['userInfo.faceURL', '否', 'string', '用户头像 URL；传入字段时会更新。'],
  ['userInfo.ex', '否', 'string', '用户扩展字段；传入字段时会更新。'],
  ['userInfo.globalRecvMsgOpt', '否', 'int', '全局消息接收选项；传入字段时会更新。'],
];

const userResponseFields = [
  ['data.usersInfo', 'array', '用户资料列表。'],
  ['data.usersInfo[].userID', 'string', '用户 ID。'],
  ['data.usersInfo[].nickname', 'string', '用户昵称。'],
  ['data.usersInfo[].faceURL', 'string', '用户头像 URL。'],
  ['data.usersInfo[].ex', 'string', '用户扩展字段。'],
  ['data.usersInfo[].createTime', 'int', '用户创建时间。'],
  ['data.usersInfo[].appMangerLevel', 'int', '用户管理级别。'],
  ['data.usersInfo[].globalRecvMsgOpt', 'int', '全局消息接收选项。'],
];

const userApis = [
  {
    slug: 'user-register',
    title: '注册用户',
    endpoint: '/user/user_register',
    summary: '将业务系统中的用户导入 OpenIM，创建一个或多个 OpenIM 用户账号。',
    sample: { users: [userInfo] },
    fields: [
      ['users', '是', 'array', '要注册的用户列表。'],
      ['users[].userID', '是', 'string', '用户 ID。'],
      ['users[].nickname', '否', 'string', '用户昵称。'],
      ['users[].faceURL', '否', 'string', '用户头像 URL。'],
      ['users[].ex', '否', 'string', '用户扩展字段。'],
      ['users[].appMangerLevel', '否', 'int', '用户管理级别，普通用户通常为 0。'],
      ['users[].globalRecvMsgOpt', '否', 'int', '全局消息接收选项。'],
    ],
    sideEffects: '创建 OpenIM 用户账号；重复导入已存在用户时服务端会按当前实现返回业务结果。',
    limits: ['`users` 必填且不能为空。', '`users[].userID` 必填。', '批量导入时建议控制数组大小。'],
  },
  {
    slug: 'update-user-info',
    title: '更新用户信息',
    endpoint: '/user/update_user_info',
    summary:
      '使用完整 `UserInfo` 对象更新用户资料。该接口已被服务端标记为 deprecated，优先使用 `update_user_info_ex`。',
    sample: { userInfo },
    fields: userInfoFields,
    sideEffects: '更新用户资料，并可能触发用户资料变更通知。',
    limits: [
      '`userInfo.userID` 必填。',
      '该接口不使用包装类型，传入零值可能覆盖原字段。',
      '新接入建议使用 `update_user_info_ex`。',
    ],
  },
  {
    slug: 'update-user-info-ex',
    title: '更新用户信息扩展',
    endpoint: '/user/update_user_info_ex',
    summary: '使用包装字段更新用户资料；只更新请求中显式传入的字段。',
    sample: { userInfo: userInfoEx },
    fields: userInfoExFields,
    sideEffects: '更新用户资料，并可能触发用户资料变更通知。',
    limits: ['`userInfo.userID` 必填。', '仅传需要修改的字段；未传字段不会被修改。'],
  },
  {
    slug: 'set-global-msg-recv-opt',
    title: '设置全局消息接收选项',
    endpoint: '/user/set_global_msg_recv_opt',
    summary: '设置指定用户的全局消息接收策略，例如正常接收或关闭离线推送。',
    sample: { userID: 'user_001', globalRecvMsgOpt: 0 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['globalRecvMsgOpt', '是', 'int', '全局消息接收选项。'],
    ],
    sideEffects: '更新用户全局消息接收设置。',
    limits: ['`userID` 和 `globalRecvMsgOpt` 必填。'],
  },
  {
    slug: 'get-users-info',
    title: '获取指定用户信息',
    endpoint: '/user/get_users_info',
    summary: '批量获取指定用户的完整公开资料。',
    sample: { userIDs: ['user_001', 'user_002'] },
    fields: [['userIDs', '是', 'array', '要查询的用户 ID 列表。']],
    responseData: { usersInfo: [userInfo] },
    responseFields: userResponseFields,
    sideEffects: '只读查询，不改变用户资料。',
    limits: ['`userIDs` 必填且不能为空。', '`userIDs` 不要传重复值。'],
  },
  {
    slug: 'get-all-users-uid',
    title: '获取全部用户 ID',
    endpoint: '/user/get_all_users_uid',
    summary: '分页获取 OpenIM 中已注册的用户 ID 列表。',
    sample: { pagination: { pageNumber: 1, showNumber: 100 } },
    fields: paginationFields,
    responseData: { total: 2, userIDs: ['user_001', 'user_002'] },
    responseFields: [
      ['data.total', 'int', '用户总数。'],
      ['data.userIDs', 'array', '用户 ID 列表。'],
    ],
    sideEffects: '只读查询，不改变用户资料。',
    limits: ['`pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'account-check',
    title: '检查账号是否存在',
    endpoint: '/user/account_check',
    summary: '批量检查一组用户 ID 是否已经注册。',
    sample: { checkUserIDs: ['user_001', 'user_003'] },
    fields: [['checkUserIDs', '是', 'array', '要检查的用户 ID 列表。']],
    responseData: {
      results: [
        { userID: 'user_001', accountStatus: 1 },
        { userID: 'user_003', accountStatus: 0 },
      ],
    },
    responseFields: [
      ['data.results', 'array', '账号检查结果列表。'],
      ['data.results[].userID', 'string', '用户 ID。'],
      ['data.results[].accountStatus', 'int', '账号状态，例如 1 已注册、0 未注册。'],
    ],
    sideEffects: '只读查询，不改变用户资料。',
    limits: ['`checkUserIDs` 必填且不能为空。'],
  },
  {
    slug: 'get-users',
    title: '分页获取用户列表',
    endpoint: '/user/get_users',
    summary: '按分页条件获取用户列表，可按用户 ID 或昵称过滤。',
    sample: {
      pagination: { pageNumber: 1, showNumber: 100 },
      userID: '',
      nickName: '',
    },
    fields: [
      ...paginationFields,
      ['userID', '否', 'string', '按用户 ID 过滤。'],
      ['nickName', '否', 'string', '按昵称过滤。'],
    ],
    responseData: { total: 2, users: [userInfo] },
    responseFields: [
      ['data.total', 'int', '用户总数。'],
      ['data.users', 'array', '用户资料列表。'],
      ['data.users[].userID', 'string', '用户 ID。'],
      ['data.users[].nickname', 'string', '用户昵称。'],
      ['data.users[].faceURL', 'string', '用户头像 URL。'],
      ['data.users[].globalRecvMsgOpt', 'int', '全局消息接收选项。'],
    ],
    sideEffects: '只读查询，不改变用户资料。',
    limits: ['`pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'get-users-online-status',
    title: '获取用户在线状态',
    endpoint: '/user/get_users_online_status',
    summary: '从消息网关聚合查询指定用户的在线状态和在线终端详情。',
    sample: { userIDs: ['user_001', 'user_002'] },
    fields: [['userIDs', '是', 'array', '要查询在线状态的用户 ID 列表。']],
    responseData: [gatewayOnlineStatus],
    responseFields: [
      ['data[].userID', 'string', '用户 ID。'],
      ['data[].status', 'int', '在线状态，例如 1 在线、0 离线。'],
      ['data[].detailPlatformStatus', 'array', '在线终端详情。'],
      ['data[].detailPlatformStatus[].platformID', 'int', '终端平台 ID。'],
      ['data[].detailPlatformStatus[].connID', 'string', '连接 ID。'],
      ['data[].detailPlatformStatus[].isBackground', 'boolean', '客户端是否在后台。'],
      ['data[].detailPlatformStatus[].token', 'string', '在线终端 Token。'],
    ],
    sideEffects: '只读查询，不改变用户在线状态。',
    limits: ['`userIDs` 必填且不能为空。'],
  },
  {
    slug: 'get-users-online-token-detail',
    title: '获取用户在线 Token 详情',
    endpoint: '/user/get_users_online_token_detail',
    summary: '查询指定用户当前在线终端的 Token 统计详情。',
    sample: { userIDs: ['user_001', 'user_002'] },
    fields: [['userIDs', '是', 'array', '要查询在线 Token 的用户 ID 列表。']],
    responseData: [onlineTokenDetail],
    responseFields: [
      ['data[].userID', 'string', '用户 ID。'],
      ['data[].status', 'int', '在线状态。'],
      ['data[].singlePlatformToken', 'array', '按平台聚合的 Token 列表。'],
      ['data[].singlePlatformToken[].platformID', 'int', '终端平台 ID。'],
      ['data[].singlePlatformToken[].total', 'int', '该平台在线 Token 数量。'],
      ['data[].singlePlatformToken[].token', 'array', '在线 Token 列表。'],
    ],
    sideEffects: '只读查询，不改变用户在线状态。',
    limits: ['`userIDs` 必填且不能为空。'],
  },
  {
    slug: 'subscribe-users-status',
    title: '订阅用户在线状态',
    endpoint: '/user/subscribe_users_status',
    summary: '订阅或取消订阅一组用户的在线状态，并返回当前状态。',
    sample: { userID: 'user_001', userIDs: ['user_002', 'user_003'], genre: 1 },
    fields: [
      ['userID', '是', 'string', '发起订阅操作的用户 ID。'],
      ['userIDs', '是', 'array', '要订阅或取消订阅的用户 ID 列表。'],
      ['genre', '是', 'int', '订阅操作类型，由服务端枚举定义。'],
    ],
    responseData: { statusList: [onlineStatus] },
    responseFields: [
      ['data.statusList', 'array', '用户在线状态列表。'],
      ['data.statusList[].userID', 'string', '用户 ID。'],
      ['data.statusList[].status', 'int', '在线状态。'],
      ['data.statusList[].platformIDs', 'array', '在线平台 ID 列表。'],
    ],
    sideEffects: '更新发起用户的在线状态订阅关系。',
    limits: ['`userID`、`userIDs` 和 `genre` 必填。'],
  },
  {
    slug: 'get-users-status',
    title: '获取用户状态',
    endpoint: '/user/get_users_status',
    summary: '查询指定用户列表的在线状态。',
    sample: { userID: 'user_001', userIDs: ['user_002', 'user_003'] },
    fields: [
      ['userID', '是', 'string', '发起查询的用户 ID。'],
      ['userIDs', '是', 'array', '要查询状态的用户 ID 列表。'],
    ],
    responseData: { statusList: [onlineStatus] },
    responseFields: [
      ['data.statusList', 'array', '用户在线状态列表。'],
      ['data.statusList[].userID', 'string', '用户 ID。'],
      ['data.statusList[].status', 'int', '在线状态。'],
      ['data.statusList[].platformIDs', 'array', '在线平台 ID 列表。'],
    ],
    sideEffects: '只读查询，不改变订阅关系或用户状态。',
    limits: ['`userID` 和 `userIDs` 必填。'],
  },
  {
    slug: 'get-subscribe-users-status',
    title: '获取已订阅用户状态',
    endpoint: '/user/get_subscribe_users_status',
    summary: '查询指定用户已订阅对象的在线状态。',
    sample: { userID: 'user_001' },
    fields: [['userID', '是', 'string', '目标用户 ID。']],
    responseData: { statusList: [onlineStatus] },
    responseFields: [
      ['data.statusList', 'array', '已订阅用户的在线状态列表。'],
      ['data.statusList[].userID', 'string', '用户 ID。'],
      ['data.statusList[].status', 'int', '在线状态。'],
      ['data.statusList[].platformIDs', 'array', '在线平台 ID 列表。'],
    ],
    sideEffects: '只读查询，不改变订阅关系或用户状态。',
    limits: ['`userID` 必填。'],
  },
  {
    slug: 'process-user-command-add',
    title: '添加用户命令',
    endpoint: '/user/process_user_command_add',
    summary: '添加用户通用命令。',
    sample: { userID: 'user_001', type: 1, uuid: 'cmd_001', value: '', ex: '' },
    fields: [],
    sideEffects: '内部用户命令接口，不生成到对外文档。',
    limits: ['内部接口，不生成到对外文档。'],
  },
  {
    slug: 'process-user-command-delete',
    title: '删除用户命令',
    endpoint: '/user/process_user_command_delete',
    summary: '删除用户通用命令。',
    sample: { userID: 'user_001', type: 1, uuid: 'cmd_001' },
    fields: [],
    sideEffects: '内部用户命令接口，不生成到对外文档。',
    limits: ['内部接口，不生成到对外文档。'],
  },
  {
    slug: 'process-user-command-update',
    title: '更新用户命令',
    endpoint: '/user/process_user_command_update',
    summary: '更新用户通用命令。',
    sample: { userID: 'user_001', type: 1, uuid: 'cmd_001', value: '', ex: '' },
    fields: [],
    sideEffects: '内部用户命令接口，不生成到对外文档。',
    limits: ['内部接口，不生成到对外文档。'],
  },
  {
    slug: 'process-user-command-get',
    title: '获取用户命令',
    endpoint: '/user/process_user_command_get',
    summary: '获取用户通用命令。',
    sample: { userID: 'user_001', type: 1 },
    fields: [],
    sideEffects: '内部用户命令接口，不生成到对外文档。',
    limits: ['内部接口，不生成到对外文档。'],
  },
  {
    slug: 'process-user-command-get-all',
    title: '获取全部用户命令',
    endpoint: '/user/process_user_command_get_all',
    summary: '获取用户全部通用命令。',
    sample: { userID: 'user_001' },
    fields: [],
    sideEffects: '内部用户命令接口，不生成到对外文档。',
    limits: ['内部接口，不生成到对外文档。'],
  },
  {
    slug: 'add-notification-account',
    title: '新增系统通知账号',
    endpoint: '/user/add_notification_account',
    summary: '创建系统通知账号或机器人账号；这类账号通常不用于客户端登录。',
    sample: {
      userID: 'notification_001',
      nickName: '系统通知',
      faceURL: 'https://example.com/notification.png',
      appMangerLevel: 3,
    },
    fields: [
      ['userID', '否', 'string', '系统通知账号 ID；不传时可由服务端生成。'],
      ['nickName', '是', 'string', '系统通知账号名称。'],
      ['faceURL', '是', 'string', '系统通知账号头像 URL。'],
      ['appMangerLevel', '是', 'int', '系统账号管理级别，例如 3 或 4。'],
    ],
    responseData: notificationAccount,
    responseFields: [
      ['data.userID', 'string', '系统通知账号 ID。'],
      ['data.faceURL', 'string', '系统通知账号头像 URL。'],
      ['data.nickName', 'string', '系统通知账号名称。'],
      ['data.appMangerLevel', 'int', '系统账号管理级别。'],
    ],
    sideEffects: '创建系统通知账号或机器人账号。',
    limits: [
      '`nickName`、`faceURL` 和 `appMangerLevel` 必填。',
      '`appMangerLevel` 需使用服务端允许的系统账号级别。',
    ],
  },
  {
    slug: 'update-notification-account',
    title: '更新系统通知账号',
    endpoint: '/user/update_notification_account',
    summary: '更新系统通知账号或机器人账号的名称和头像。',
    sample: {
      userID: 'notification_001',
      nickName: '新的系统通知',
      faceURL: 'https://example.com/new-notification.png',
    },
    fields: [
      ['userID', '是', 'string', '系统通知账号 ID。'],
      ['nickName', '是', 'string', '新的系统通知账号名称。'],
      ['faceURL', '是', 'string', '新的系统通知账号头像 URL。'],
    ],
    sideEffects: '更新系统通知账号资料。',
    limits: ['`userID`、`nickName` 和 `faceURL` 必填。'],
  },
  {
    slug: 'search-notification-account',
    title: '搜索系统通知账号',
    endpoint: '/user/search_notification_account',
    summary: '分页搜索系统通知账号或机器人账号，可按关键字和账号级别过滤。',
    sample: {
      keyword: '',
      appManagerLevel: 3,
      pagination: { pageNumber: 1, showNumber: 20 },
    },
    fields: [
      ['keyword', '否', 'string', '搜索关键字，可匹配用户 ID 或名称。'],
      ['appManagerLevel', '否', 'int', '系统账号管理级别过滤条件。'],
      ...paginationFields,
    ],
    responseData: { total: 1, notificationAccounts: [notificationAccount] },
    responseFields: [
      ['data.total', 'int', '系统通知账号总数。'],
      ['data.notificationAccounts', 'array', '系统通知账号列表。'],
      ['data.notificationAccounts[].userID', 'string', '系统通知账号 ID。'],
      ['data.notificationAccounts[].faceURL', 'string', '系统通知账号头像 URL。'],
      ['data.notificationAccounts[].nickName', 'string', '系统通知账号名称。'],
      ['data.notificationAccounts[].appMangerLevel', 'int', '系统账号管理级别。'],
    ],
    sideEffects: '只读查询，不改变系统通知账号资料。',
    limits: ['`pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
];

const internalUserApiSlugs = new Set([
  'process-user-command-add',
  'process-user-command-delete',
  'process-user-command-update',
  'process-user-command-get',
  'process-user-command-get-all',
]);

validateGoUserApiOrder();

const externalUserApis = userApis
  .filter((api) => !internalUserApiSlugs.has(api.slug))
  .sort(compareByGoUserApiOrder);
const omittedUserApis = userApis
  .filter((api) => internalUserApiSlugs.has(api.slug))
  .sort(compareByGoUserApiOrder);
const generatedPaths = new Set(externalUserApis.map((api) => `${localRoot}/${api.slug}`));

for (const spec of externalUserApis) {
  await rm(resolve(root, `${contentRoot}/${spec.slug}.mdx`), { force: true });
  await rm(resolve(root, `${zhContentRoot}/${spec.slug}.mdx`), { force: true });
}

const routesPath = resolve(root, 'src/generated/routes.json');
const navigationPath = resolve(root, 'src/generated/navigation.json');
const platformApiZhPath = resolve(root, 'src/generated/platform-api-zh-content.json');
const structurePath = resolve(root, 'data/structure/chat-pages.json');

const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const navigation = JSON.parse(await readFile(navigationPath, 'utf8'));
const platformApiZh = JSON.parse(await readFile(platformApiZhPath, 'utf8'));

const routesWithoutGeneratedUserApis = routes.filter((route) => !generatedPaths.has(route.path));
const maxSourceIndex = Math.max(
  ...routesWithoutGeneratedUserApis.map((route) => route.sourceIndex ?? 0),
);
const maxNavOrder = Math.max(...routesWithoutGeneratedUserApis.map((route) => route.navOrder ?? 0));

const newRoutes = [];
for (const [index, spec] of externalUserApis.entries()) {
  const path = `${localRoot}/${spec.slug}`;
  const relativePath = path.replace(/^\/docs\//, '');
  const contentFile = `${contentRoot}/${spec.slug}.mdx`;
  const record = {
    id: 0,
    path,
    relativePath,
    sourcePath: path,
    title: spec.title,
    description: `OpenIM 用户 REST API：${spec.title}。`,
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

const nextRoutes = [...routesWithoutGeneratedUserApis, ...newRoutes].map((route, index) => ({
  ...route,
  id: index + 1,
}));

const platformContext = navigation.contexts.find((context) => context.key === contextKey);
if (!platformContext) {
  throw new Error(`Missing navigation context: ${contextKey}`);
}

let userNode = platformContext.nodes.find((node) => node.id === 'user');
if (!userNode) {
  userNode = {
    id: 'user',
    segment: 'user',
    title: '用户',
    href: null,
    type: 'folder',
    children: [],
    minIndex: newRoutes[0]?.navOrder ?? maxNavOrder + 1,
  };
  const prepareIndex = platformContext.nodes.findIndex((node) => node.id === 'prepare-to-use-api');
  if (prepareIndex >= 0) {
    platformContext.nodes.splice(prepareIndex + 1, 0, userNode);
  } else {
    platformContext.nodes.unshift(userNode);
  }
}

userNode.children = (userNode.children ?? []).filter((node) => !generatedPaths.has(node.href));
const userApiNodes = newRoutes.map((route) => ({
  id: `user/${route.path.split('/').at(-1)}`,
  segment: route.path.split('/').at(-1),
  title: route.title,
  href: route.path,
  type: 'page',
  children: [],
  minIndex: route.navOrder,
}));
const overviewIndex = userNode.children.findIndex((node) => node.id === 'user/overview');
const insertIndex = overviewIndex >= 0 ? overviewIndex + 1 : 0;
userNode.children.splice(insertIndex, 0, ...userApiNodes);
userNode.minIndex = Math.min(
  ...userNode.children.map((node) => node.minIndex).filter((value) => Number.isFinite(value)),
);
platformContext.pageCount = nextRoutes.filter((route) => route.contextKey === contextKey).length;

platformApiZh.generatedAt = today;
platformApiZh.navigationLabels = {
  ...platformApiZh.navigationLabels,
  user: '用户',
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
  `Wrote ${externalUserApis.length} external OpenIM user API page(s); omitted ${omittedUserApis.length} internal route(s).`,
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
    ...(spec.responseData !== undefined ? { data: spec.responseData } : {}),
  };
  const responseFields = [
    ['errCode', 'int', '业务错误码，0 表示成功。'],
    ['errMsg', 'string', '错误简要信息，成功时通常为空。'],
    ['errDlt', 'string', '错误详细信息，成功时通常为空。'],
    ...(spec.responseData !== undefined
      ? [['data', Array.isArray(spec.responseData) ? 'array' : 'object', '接口返回数据。']]
      : []),
    ...(spec.responseFields ?? []),
  ];

  return `使用 **${spec.title}** 从可信后端调用 OpenIM 用户 REST 接口。${spec.summary} 请先在[接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)中配置 API 地址和管理员 Token；接口参数通过请求头和 JSON 请求体传递。\n\n## HTTP 请求\n\n\`\`\`bash\nPOST {API_ADDRESS}${spec.endpoint}\n\`\`\`\n\n### 请求示例\n\n\`\`\`bash\ncurl --request POST "\${API_ADDRESS}${spec.endpoint}" \\\n  --header "Content-Type: application/json; charset=utf-8" \\\n  --header "operationID: \${OPERATION_ID}" \\\n  --header "token: \${ADMIN_TOKEN}" \\\n  --data-raw '${json(spec.sample)}'\n\`\`\`\n\n> 安全提示：管理员 Token 只能保存在可信后端服务中，不能下发到客户端或写入前端代码。客户端登录应使用服务端签发的用户 Token。\n\n## 参数\n\n此接口通过请求头传入链路追踪信息和鉴权凭证，通过 JSON 请求体传递业务参数。\n\n### 请求头\n\n${renderTable(['Header', '是否必填', '类型', '说明'], commonHeaders)}\n\n## 请求体\n\n\`\`\`json\n${json(spec.sample)}\n\`\`\`\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.fields)}\n\n## 响应\n\n请求被 OpenIM 正常处理时通常返回 \`200 OK\`。业务是否成功以响应体中的 \`errCode\` 为准；\`errCode === 0\` 表示成功，非 0 表示业务错误。\n\n\`\`\`json\n${json(success)}\n\`\`\`\n\n### 响应参数\n\n${renderTable(['参数名', '类型', '说明'], responseFields)}\n\n### 错误\n\n如果请求失败，OpenIM 返回错误对象。更多错误码说明见[错误码](/docs/chat/platform-api/v3/error-codes)。\n\n\`\`\`json\n${json({ errCode: 1004, errMsg: 'RecordNotFoundError', errDlt: ': [1004]RecordNotFoundError' })}\n\`\`\`\n\n| 错误场景 | 可能原因 | 处理方式 |\n| -------- | -------- | -------- |\n| 鉴权失败 | \`token\` 缺失、过期，或不是可调用管理端接口的管理员 Token。 | 重新获取 APP 管理员 Token，并只在可信后端保存。 |\n| 链路追踪困难 | \`operationID\` 缺失或在大量请求中重复使用。 | 为每次请求生成独立 \`operationID\`，并在服务端日志中保留。 |\n| 参数校验失败 | 请求体字段类型、必填字段或枚举值不符合接口要求。 | 对照请求体参数表和限制说明检查字段。 |\n\n## 权限和限制\n\n- ${spec.sideEffects}\n${spec.limits.map((item) => `- ${item}`).join('\n')}\n- 所有数组型请求参数建议控制在 1000 个元素以内。\n\n## 相关页面\n\n- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)\n- [获取指定用户信息](/docs/chat/platform-api/v3/user/listing-users/get-a-user)\n- [关系管理](/docs/chat/platform-api/v3/relation/overview)\n- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

function renderFrontmatter(values) {
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
}

function validateGoUserApiOrder() {
  const endpoints = new Set(userApis.map((api) => api.endpoint));
  const missingOrder = [...endpoints].filter((endpoint) => !goUserApiOrderIndex.has(endpoint));
  if (missingOrder.length > 0) {
    throw new Error(`Missing Go user API order for: ${missingOrder.join(', ')}`);
  }

  const missingSpec = goUserApiOrder.filter((endpoint) => !endpoints.has(endpoint));
  if (missingSpec.length > 0) {
    throw new Error(`Missing user API spec for: ${missingSpec.join(', ')}`);
  }
}

function compareByGoUserApiOrder(a, b) {
  return goUserApiOrderIndex.get(a.endpoint) - goUserApiOrderIndex.get(b.endpoint);
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
