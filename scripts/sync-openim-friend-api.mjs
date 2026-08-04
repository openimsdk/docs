import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
const localRoot = '/platform-api/relation';
const contentRoot = 'content/docs/chat/platform-api/relation';
const zhContentRoot = 'content/zh/docs/chat/platform-api/relation';
const contextKey = 'chat/platform-api';
const contextTitle = 'Platform API';

// Mirrors open-im-server/internal/api/router.go friendRouterGroup.POST order.
const goFriendApiOrder = [
  '/friend/delete_friend',
  '/friend/get_friend_apply_list',
  '/friend/get_designated_friend_apply',
  '/friend/get_self_friend_apply_list',
  '/friend/get_friend_list',
  '/friend/get_designated_friends',
  '/friend/add_friend',
  '/friend/add_friend_response',
  '/friend/set_friend_remark',
  '/friend/add_black',
  '/friend/get_black_list',
  '/friend/get_specified_blacks',
  '/friend/remove_black',
  '/friend/get_incremental_blacks',
  '/friend/import_friend',
  '/friend/is_friend',
  '/friend/get_friend_id',
  '/friend/get_specified_friends_info',
  '/friend/update_friends',
  '/friend/get_incremental_friends',
  '/friend/get_full_friend_user_ids',
  '/friend/get_self_unhandled_apply_count',
];
const goFriendApiOrderIndex = new Map(goFriendApiOrder.map((endpoint, index) => [endpoint, index]));

const commonHeaders = [
  ['operationID', '是', 'string', '每次请求的唯一链路追踪 ID，建议由后端生成并写入日志。'],
  ['token', '是', 'string', 'APP 管理员 Token；仅保存在可信后端服务中。'],
  ['Content-Type: application/json', '是', 'string', '请求体为 JSON 时必须设置。'],
];

const publicUserInfo = {
  userID: 'user_002',
  nickname: 'Jane',
  faceURL: 'https://example.com/avatar-jane.png',
  ex: '',
};

const userInfo = {
  userID: 'user_002',
  nickname: 'Jane',
  faceURL: 'https://example.com/avatar-jane.png',
  ex: '',
  createTime: 1719800000000,
  appMangerLevel: 0,
  globalRecvMsgOpt: 0,
};

const friendInfo = {
  ownerUserID: 'user_001',
  remark: '同事',
  createTime: 1719800000000,
  friendUser: userInfo,
  addSource: 2,
  operatorUserID: 'user_001',
  ex: '',
  isPinned: false,
};

const blackInfo = {
  ownerUserID: 'user_001',
  createTime: 1719800000000,
  blackUserInfo: publicUserInfo,
  addSource: 2,
  operatorUserID: 'user_001',
  ex: '',
};

const friendRequest = {
  fromUserID: 'user_002',
  fromNickname: 'Jane',
  fromFaceURL: 'https://example.com/avatar-jane.png',
  toUserID: 'user_001',
  toNickname: 'Tom',
  toFaceURL: 'https://example.com/avatar-tom.png',
  handleResult: 0,
  reqMsg: '申请添加好友',
  createTime: 1719800000000,
  handlerUserID: '',
  handleMsg: '',
  handleTime: 0,
  ex: '',
};

const paginationFields = [
  ['pagination', '是', 'object', '分页参数。'],
  ['pagination.pageNumber', '是', 'int', '页码，从 1 开始。'],
  ['pagination.showNumber', '是', 'int', '每页数量，必须大于 0。'],
];

const friendApis = [
  {
    slug: 'delete-friend',
    title: '删除好友',
    endpoint: '/friend/delete_friend',
    summary: '删除指定用户与某个好友之间的好友关系。',
    sample: { ownerUserID: 'user_001', friendUserID: 'user_002' },
    fields: [
      ['ownerUserID', '是', 'string', '要删除好友关系的用户 ID。'],
      ['friendUserID', '是', 'string', '要删除的好友用户 ID。'],
    ],
    sideEffects: '删除好友关系，并向相关用户下发好友删除通知。',
    limits: ['`ownerUserID` 和 `friendUserID` 必填。'],
  },
  {
    slug: 'list-received-friend-applications',
    title: '查询收到的好友申请',
    endpoint: '/friend/get_friend_apply_list',
    summary: '分页查询指定用户收到的好友申请。',
    sample: {
      userID: 'user_001',
      pagination: { pageNumber: 1, showNumber: 20 },
      handleResults: [0],
    },
    fields: [
      ['userID', '是', 'string', '接收好友申请的用户 ID。'],
      ...paginationFields,
      ['handleResults', '否', 'array', '按处理状态过滤，例如 0 未处理、1 同意、-1 拒绝。'],
    ],
    responseData: { FriendRequests: [friendRequest], total: 1 },
    responseFields: [
      ['data.FriendRequests', 'array', '收到的好友申请列表。'],
      ['data.total', 'int', '符合条件的申请总数。'],
    ],
    sideEffects: '只读查询，不改变好友申请状态。',
    limits: ['`userID` 和 `pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'get-designated-friend-application',
    title: '查询指定好友申请',
    endpoint: '/friend/get_designated_friend_apply',
    summary: '查询两个用户之间指定方向的好友申请记录。',
    sample: { fromUserID: 'user_002', toUserID: 'user_001' },
    fields: [
      ['fromUserID', '是', 'string', '发起好友申请的用户 ID。'],
      ['toUserID', '是', 'string', '接收好友申请的用户 ID。'],
    ],
    responseData: { friendRequests: [friendRequest] },
    responseFields: [['data.friendRequests', 'array', '好友申请列表。']],
    sideEffects: '只读查询，不改变好友申请状态。',
    limits: ['`fromUserID` 和 `toUserID` 必填。'],
  },
  {
    slug: 'list-sent-friend-applications',
    title: '查询发出的好友申请',
    endpoint: '/friend/get_self_friend_apply_list',
    summary: '分页查询指定用户主动发出的好友申请。',
    sample: {
      userID: 'user_002',
      pagination: { pageNumber: 1, showNumber: 20 },
      handleResults: [0],
    },
    fields: [
      ['userID', '是', 'string', '发起好友申请的用户 ID。'],
      ...paginationFields,
      ['handleResults', '否', 'array', '按处理状态过滤，例如 0 未处理、1 同意、-1 拒绝。'],
    ],
    responseData: { friendRequests: [friendRequest], total: 1 },
    responseFields: [
      ['data.friendRequests', 'array', '发出的好友申请列表。'],
      ['data.total', 'int', '符合条件的申请总数。'],
    ],
    sideEffects: '只读查询，不改变好友申请状态。',
    limits: ['`userID` 和 `pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'get-friend-list',
    title: '获取好友列表',
    endpoint: '/friend/get_friend_list',
    summary: '分页获取指定用户的好友列表。',
    sample: { userID: 'user_001', pagination: { pageNumber: 1, showNumber: 20 } },
    fields: [['userID', '是', 'string', '目标用户 ID。'], ...paginationFields],
    responseData: { friendsInfo: [friendInfo], total: 1 },
    responseFields: [
      ['data.friendsInfo', 'array', '好友资料列表。'],
      ['data.total', 'int', '好友总数。'],
    ],
    sideEffects: '只读查询，不改变好友关系。',
    limits: ['`userID` 和 `pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'get-designated-friends',
    title: '获取指定好友',
    endpoint: '/friend/get_designated_friends',
    summary: '批量获取某个用户的指定好友资料。',
    sample: { ownerUserID: 'user_001', friendUserIDs: ['user_002', 'user_003'] },
    fields: [
      ['ownerUserID', '是', 'string', '好友关系所属用户 ID。'],
      ['friendUserIDs', '是', 'array', '要查询的好友用户 ID 列表。'],
    ],
    responseData: { friendsInfo: [friendInfo] },
    responseFields: [['data.friendsInfo', 'array', '好友资料列表。']],
    sideEffects: '只读查询，不改变好友关系。',
    limits: ['`ownerUserID` 和 `friendUserIDs` 必填。', '`friendUserIDs` 不要传重复值。'],
  },
  {
    slug: 'add-friend',
    title: '发送好友申请',
    endpoint: '/friend/add_friend',
    summary: '由一个用户向另一个用户发送好友申请。',
    sample: {
      fromUserID: 'user_002',
      toUserID: 'user_001',
      reqMsg: '申请添加好友',
      ex: '',
    },
    fields: [
      ['fromUserID', '是', 'string', '发起好友申请的用户 ID。'],
      ['toUserID', '是', 'string', '接收好友申请的用户 ID。'],
      ['reqMsg', '否', 'string', '申请说明。'],
      ['ex', '否', 'string', '扩展字段。'],
    ],
    sideEffects: '创建好友申请，并向接收方下发好友申请通知。',
    limits: ['`fromUserID` 和 `toUserID` 必填。', '不能向自己发送好友申请。'],
  },
  {
    slug: 'respond-friend-application',
    title: '处理好友申请',
    endpoint: '/friend/add_friend_response',
    summary: '同意或拒绝收到的好友申请。',
    sample: {
      fromUserID: 'user_002',
      toUserID: 'user_001',
      handleResult: 1,
      handleMsg: '同意添加',
    },
    fields: [
      ['fromUserID', '是', 'string', '发起好友申请的用户 ID。'],
      ['toUserID', '是', 'string', '接收并处理申请的用户 ID。'],
      ['handleResult', '是', 'int', '处理结果：1 同意，-1 拒绝。'],
      ['handleMsg', '否', 'string', '处理说明。'],
    ],
    sideEffects: '更新好友申请处理状态；同意时会建立好友关系，并下发处理通知。',
    limits: [
      '`fromUserID`、`toUserID` 和 `handleResult` 必填。',
      '`handleResult` 只能为 1 或 -1。',
    ],
  },
  {
    slug: 'set-friend-remark',
    title: '设置好友备注',
    endpoint: '/friend/set_friend_remark',
    summary: '设置或清空某个好友的备注。',
    sample: { ownerUserID: 'user_001', friendUserID: 'user_002', remark: '同事' },
    fields: [
      ['ownerUserID', '是', 'string', '好友关系所属用户 ID。'],
      ['friendUserID', '是', 'string', '要设置备注的好友用户 ID。'],
      ['remark', '否', 'string', '新的好友备注；传空字符串会清空备注。'],
    ],
    sideEffects: '更新好友备注，并向相关用户下发好友资料变更通知。',
    limits: ['`ownerUserID` 和 `friendUserID` 必填。'],
  },
  {
    slug: 'add-black',
    title: '加入黑名单',
    endpoint: '/friend/add_black',
    summary: '把指定用户加入某个用户的黑名单。',
    sample: { ownerUserID: 'user_001', blackUserID: 'user_003', ex: '' },
    fields: [
      ['ownerUserID', '是', 'string', '黑名单所属用户 ID。'],
      ['blackUserID', '是', 'string', '要加入黑名单的用户 ID。'],
      ['ex', '否', 'string', '扩展字段。'],
    ],
    sideEffects: '创建黑名单关系，并下发黑名单新增通知。',
    limits: ['`ownerUserID` 和 `blackUserID` 必填。'],
  },
  {
    slug: 'get-black-list',
    title: '获取黑名单列表',
    endpoint: '/friend/get_black_list',
    summary: '分页获取指定用户的黑名单列表。',
    sample: { userID: 'user_001', pagination: { pageNumber: 1, showNumber: 20 } },
    fields: [['userID', '是', 'string', '目标用户 ID。'], ...paginationFields],
    responseData: { blacks: [blackInfo], total: 1 },
    responseFields: [
      ['data.blacks', 'array', '黑名单资料列表。'],
      ['data.total', 'int', '黑名单总数。'],
    ],
    sideEffects: '只读查询，不改变黑名单关系。',
    limits: ['`userID` 和 `pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'get-specified-blacks',
    title: '获取指定黑名单',
    endpoint: '/friend/get_specified_blacks',
    summary: '批量查询指定用户黑名单中的用户资料。',
    sample: { ownerUserID: 'user_001', userIDList: ['user_003', 'user_004'] },
    fields: [
      ['ownerUserID', '是', 'string', '黑名单所属用户 ID。'],
      ['userIDList', '是', 'array', '要查询的用户 ID 列表。'],
    ],
    responseData: { blacks: [blackInfo], total: 1 },
    responseFields: [
      ['data.blacks', 'array', '命中的黑名单资料列表。'],
      ['data.total', 'int', '命中的黑名单数量。'],
    ],
    sideEffects: '只读查询，不改变黑名单关系。',
    limits: ['`ownerUserID` 和 `userIDList` 必填。', '`userIDList` 不要传重复值。'],
  },
  {
    slug: 'remove-black',
    title: '移除黑名单',
    endpoint: '/friend/remove_black',
    summary: '从某个用户的黑名单中移除指定用户。',
    sample: { ownerUserID: 'user_001', blackUserID: 'user_003' },
    fields: [
      ['ownerUserID', '是', 'string', '黑名单所属用户 ID。'],
      ['blackUserID', '是', 'string', '要移出黑名单的用户 ID。'],
    ],
    sideEffects: '删除黑名单关系，并下发黑名单移除通知。',
    limits: ['`ownerUserID` 和 `blackUserID` 必填。'],
  },
  {
    slug: 'get-incremental-blacks',
    title: '增量获取黑名单',
    endpoint: '/friend/get_incremental_blacks',
    summary: '按版本号增量同步某个用户的黑名单列表。',
    sample: { userID: 'user_001', versionID: '', version: 0 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['versionID', '否', 'string', '上次同步返回的版本 ID。'],
      ['version', '否', 'int', '上次同步返回的版本号。'],
    ],
    sideEffects: '只读同步接口，不改变黑名单关系。',
    limits: ['内部增量同步接口，不生成到对外文档。'],
  },
  {
    slug: 'import-friends',
    title: '导入好友关系',
    endpoint: '/friend/import_friend',
    summary: '由管理员直接为指定用户导入一批好友关系。',
    sample: { ownerUserID: 'user_001', friendUserIDs: ['user_002', 'user_003'] },
    fields: [
      ['ownerUserID', '是', 'string', '要导入好友关系的用户 ID。'],
      ['friendUserIDs', '是', 'array', '要导入为好友的用户 ID 列表，最多 1000 个。'],
    ],
    sideEffects: '直接建立好友关系，并向相关用户下发好友申请同意通知。',
    limits: [
      '仅 APP 管理员可调用。',
      '`ownerUserID` 和 `friendUserIDs` 必填。',
      '`friendUserIDs` 最多 1000 个，且不能包含 `ownerUserID` 或重复值。',
    ],
  },
  {
    slug: 'is-friend',
    title: '校验好友关系',
    endpoint: '/friend/is_friend',
    summary: '检查两个用户是否互在对方好友列表中。',
    sample: { userID1: 'user_001', userID2: 'user_002' },
    fields: [
      ['userID1', '是', 'string', '第一个用户 ID。'],
      ['userID2', '是', 'string', '第二个用户 ID。'],
    ],
    responseData: { inUser1Friends: true, inUser2Friends: true },
    responseFields: [
      ['data.inUser1Friends', 'boolean', '`userID2` 是否在 `userID1` 的好友列表中。'],
      ['data.inUser2Friends', 'boolean', '`userID1` 是否在 `userID2` 的好友列表中。'],
    ],
    sideEffects: '只读查询，不改变好友关系。',
    limits: ['`userID1` 和 `userID2` 必填。'],
  },
  {
    slug: 'get-friend-ids',
    title: '获取好友 ID 列表',
    endpoint: '/friend/get_friend_id',
    summary: '获取指定用户的全部好友用户 ID。',
    sample: { userID: 'user_001' },
    fields: [['userID', '是', 'string', '目标用户 ID。']],
    responseData: { friendIDs: ['user_002', 'user_003'] },
    responseFields: [['data.friendIDs', 'array', '好友用户 ID 列表。']],
    sideEffects: '只读查询，不改变好友关系。',
    limits: ['`userID` 必填。'],
  },
  {
    slug: 'get-specified-friends-info',
    title: '获取指定好友信息',
    endpoint: '/friend/get_specified_friends_info',
    summary: '批量获取指定用户与一组用户之间的用户资料、好友资料和黑名单资料。',
    sample: { ownerUserID: 'user_001', userIDList: ['user_002', 'user_003'] },
    fields: [
      ['ownerUserID', '是', 'string', '关系所属用户 ID。'],
      ['userIDList', '是', 'array', '要查询的用户 ID 列表，最多 1000 个。'],
    ],
    responseData: {
      infos: [{ userInfo, friendInfo, blackInfo }],
    },
    responseFields: [['data.infos', 'array', '按用户聚合的用户资料、好友资料和黑名单资料。']],
    sideEffects: '只读查询，不改变好友或黑名单关系。',
    limits: ['`ownerUserID` 和 `userIDList` 必填。', '`userIDList` 最多 1000 个，且不能重复。'],
  },
  {
    slug: 'update-friends',
    title: '更新好友信息',
    endpoint: '/friend/update_friends',
    summary: '批量更新好友备注、置顶状态或扩展字段。',
    sample: {
      ownerUserID: 'user_001',
      friendUserIDs: ['user_002'],
      isPinned: true,
      remark: '同事',
      ex: '',
    },
    fields: [
      ['ownerUserID', '是', 'string', '好友关系所属用户 ID。'],
      ['friendUserIDs', '是', 'array', '要更新的好友用户 ID 列表，最多 1000 个。'],
      ['isPinned', '否', 'boolean', '是否置顶好友；传入字段时会更新。'],
      ['remark', '否', 'string', '好友备注；传入字段时会更新，可传空字符串清空。'],
      ['ex', '否', 'string', '扩展字段；传入字段时会更新。'],
    ],
    sideEffects: '批量更新好友资料，并下发好友资料变更通知。',
    limits: [
      '`ownerUserID` 和 `friendUserIDs` 必填。',
      '`friendUserIDs` 最多 1000 个，且不能重复。',
      '`isPinned`、`remark`、`ex` 使用包装类型，只有传入字段时才更新。',
    ],
  },
  {
    slug: 'get-incremental-friends',
    title: '增量获取好友列表',
    endpoint: '/friend/get_incremental_friends',
    summary: '按版本号增量同步某个用户的好友列表。',
    sample: { userID: 'user_001', versionID: '', version: 0 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['versionID', '否', 'string', '上次同步返回的版本 ID。'],
      ['version', '否', 'int', '上次同步返回的版本号。'],
    ],
    sideEffects: '只读同步接口，不改变好友关系。',
    limits: ['内部增量同步接口，不生成到对外文档。'],
  },
  {
    slug: 'get-full-friend-user-ids',
    title: '全量获取好友用户 ID',
    endpoint: '/friend/get_full_friend_user_ids',
    summary: '按哈希比较并全量获取指定用户的好友用户 ID 列表。',
    sample: { userID: 'user_001', idHash: 0 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['idHash', '否', 'int', '客户端已缓存好友 ID 列表的哈希值；首次同步可传 0。'],
    ],
    responseData: {
      version: 2,
      versionID: 'friend_v2',
      equal: false,
      userIDs: ['user_002', 'user_003'],
    },
    responseFields: [
      ['data.version', 'int', '新的同步版本号。'],
      ['data.versionID', 'string', '新的同步版本 ID。'],
      ['data.equal', 'boolean', '服务端数据是否与客户端哈希一致。'],
      ['data.userIDs', 'array', '好友用户 ID 列表；当 `equal` 为 true 时可能为空。'],
    ],
    sideEffects: '只读同步接口，不改变好友关系。',
    limits: ['`userID` 必填。'],
  },
  {
    slug: 'get-self-unhandled-apply-count',
    title: '获取未处理好友申请数量',
    endpoint: '/friend/get_self_unhandled_apply_count',
    summary: '获取指定用户在某个时间点之后收到且未处理的好友申请数量。',
    sample: { userID: 'user_001', time: 1719800000000 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['time', '否', 'int', '毫秒时间戳，只统计该时间之后的未处理申请。'],
    ],
    responseData: { count: 3 },
    responseFields: [['data.count', 'int', '未处理好友申请数量。']],
    sideEffects: '只读查询，不改变好友申请状态。',
    limits: ['`userID` 必填。', '`time` 使用毫秒时间戳。'],
  },
];

const relationRouteSegments = new Map([
  ['delete-friend', 'managing-friends/delete-friend'],
  ['list-received-friend-applications', 'managing-friend-requests/list-received-friend-requests'],
  ['list-sent-friend-applications', 'managing-friend-requests/list-sent-friend-requests'],
  ['get-friend-list', 'listing-friends/list-friends'],
  ['get-designated-friends', 'listing-friends/get-designated-friends'],
  ['add-friend', 'managing-friend-requests/apply-to-add-friend'],
  ['respond-friend-application', 'managing-friend-requests/respond-friend-apply'],
  ['add-black', 'blacklist/add-black'],
  ['get-black-list', 'blacklist/list-blacks'],
  ['remove-black', 'blacklist/remove-black'],
  ['import-friends', 'managing-friends/import-friends'],
  ['update-friends', 'managing-friends/update-friends'],
]);
const internalFriendApiSlugs = new Set([
  'get-designated-friend-application',
  'set-friend-remark',
  'get-specified-blacks',
  'get-incremental-blacks',
  'is-friend',
  'get-friend-ids',
  'get-specified-friends-info',
  'get-incremental-friends',
  'get-full-friend-user-ids',
  'get-self-unhandled-apply-count',
]);

validateGoFriendApiOrder();

const externalFriendApis = friendApis
  .filter((api) => !internalFriendApiSlugs.has(api.slug))
  .sort(compareByGoFriendApiOrder);
const omittedFriendApis = friendApis
  .filter((api) => internalFriendApiSlugs.has(api.slug))
  .sort(compareByGoFriendApiOrder);

await rm(resolve(root, contentRoot), { force: true, recursive: true });
await rm(resolve(root, zhContentRoot), { force: true, recursive: true });

const routesPath = resolve(root, 'src/generated/routes.json');
const navigationPath = resolve(root, 'src/generated/navigation.json');
const platformApiZhPath = resolve(root, 'src/generated/platform-api-zh-content.json');
const structurePath = resolve(root, 'data/structure/chat-pages.json');

const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const navigation = JSON.parse(await readFile(navigationPath, 'utf8'));
const platformApiZh = JSON.parse(await readFile(platformApiZhPath, 'utf8'));

const routesWithoutFriend = routes.filter((route) => !route.path.startsWith(`${localRoot}/`));
const maxSourceIndex = Math.max(...routesWithoutFriend.map((route) => route.sourceIndex ?? 0));
const maxNavOrder = Math.max(...routesWithoutFriend.map((route) => route.navOrder ?? 0));

const newRoutes = [];
for (const [index, spec] of externalFriendApis.entries()) {
  const routeSegment = relationRouteSegments.get(spec.slug);
  if (!routeSegment) {
    throw new Error(`Missing relation route segment for friend API slug: ${spec.slug}`);
  }
  const path = `${localRoot}/${routeSegment}`;
  const relativePath = path.replace(/^\/docs\//, '');
  const contentFile = `${contentRoot}/${routeSegment}.mdx`;
  const record = {
    id: 0,
    path,
    relativePath,
    sourcePath: path,
    title: spec.title,
    description: `OpenIM 关系 REST API：${spec.title}。`,
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
  await writeMdx(`${zhContentRoot}/${routeSegment}.mdx`, renderMdx(record, spec, true));
}

const nextRoutes = [...routesWithoutFriend, ...newRoutes].map((route, index) => ({
  ...route,
  id: index + 1,
}));

const platformContext = navigation.contexts.find((context) => context.key === contextKey);
if (!platformContext) {
  throw new Error(`Missing navigation context: ${contextKey}`);
}

const friendNode = {
  id: 'relation',
  segment: 'relation',
  title: '关系',
  href: null,
  type: 'folder',
  children: newRoutes.map((route) => ({
    id: `relation/${route.path.split('/').slice(5).join('/')}`,
    segment: route.path.split('/').at(-1),
    title: route.title,
    href: route.path,
    type: 'page',
    children: [],
    minIndex: route.navOrder,
  })),
  minIndex: newRoutes[0]?.navOrder ?? maxNavOrder + 1,
};

platformContext.nodes = platformContext.nodes.filter((node) => node.id !== 'relation');
const groupIndex = platformContext.nodes.findIndex((node) => node.id === 'group');
const userIndex = platformContext.nodes.findIndex((node) => node.id === 'user');
if (userIndex >= 0) {
  platformContext.nodes.splice(userIndex + 1, 0, friendNode);
} else if (groupIndex >= 0) {
  platformContext.nodes.splice(groupIndex, 0, friendNode);
} else {
  platformContext.nodes.push(friendNode);
}
platformContext.pageCount = nextRoutes.filter((route) => route.contextKey === contextKey).length;

platformApiZh.generatedAt = today;
platformApiZh.navigationLabels = {
  ...platformApiZh.navigationLabels,
  relation: '关系',
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
  `Wrote ${externalFriendApis.length} external OpenIM relation API page(s); omitted ${omittedFriendApis.length} internal route(s).`,
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

  return `使用 **${spec.title}** 从可信后端调用 OpenIM 关系 REST 接口。${spec.summary} 请先在[接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)中配置 API 地址和管理员 Token；接口参数通过请求头和 JSON 请求体传递。\n\n## HTTP 请求\n\n\`\`\`bash\nPOST {API_ADDRESS}${spec.endpoint}\n\`\`\`\n\n### 请求示例\n\n\`\`\`bash\ncurl --request POST "\${API_ADDRESS}${spec.endpoint}" \\\n  --header "Content-Type: application/json; charset=utf-8" \\\n  --header "operationID: \${OPERATION_ID}" \\\n  --header "token: \${ADMIN_TOKEN}" \\\n  --data-raw '${json(spec.sample)}'\n\`\`\`\n\n> 安全提示：管理员 Token 只能保存在可信后端服务中，不能下发到客户端或写入前端代码。客户端登录应使用服务端签发的用户 Token。\n\n## 参数\n\n此接口通过请求头传入链路追踪信息和鉴权凭证，通过 JSON 请求体传递业务参数。\n\n### 请求头\n\n${renderTable(['Header', '是否必填', '类型', '说明'], commonHeaders)}\n\n## 请求体\n\n\`\`\`json\n${json(spec.sample)}\n\`\`\`\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.fields)}\n\n## 响应\n\n请求被 OpenIM 正常处理时通常返回 \`200 OK\`。业务是否成功以响应体中的 \`errCode\` 为准；\`errCode === 0\` 表示成功，非 0 表示业务错误。\n\n\`\`\`json\n${json(success)}\n\`\`\`\n\n### 响应参数\n\n${renderTable(['参数名', '类型', '说明'], responseFields)}\n\n### 错误\n\n如果请求失败，OpenIM 返回错误对象。更多错误码说明见[错误码](/docs/chat/platform-api/v3/error-codes)。\n\n\`\`\`json\n${json({ errCode: 1004, errMsg: 'RecordNotFoundError', errDlt: ': [1004]RecordNotFoundError' })}\n\`\`\`\n\n| 错误场景 | 可能原因 | 处理方式 |\n| -------- | -------- | -------- |\n| 鉴权失败 | \`token\` 缺失、过期，或不是可调用管理端接口的管理员 Token。 | 重新获取 APP 管理员 Token，并只在可信后端保存。 |\n| 链路追踪困难 | \`operationID\` 缺失或在大量请求中重复使用。 | 为每次请求生成独立 \`operationID\`，并在服务端日志中保留。 |\n| 参数校验失败 | 请求体字段类型、必填字段或枚举值不符合接口要求。 | 对照请求体参数表和限制说明检查字段。 |\n\n## 权限和限制\n\n- ${spec.sideEffects}\n${spec.limits.map((item) => `- ${item}`).join('\n')}\n- 所有数组型请求参数建议控制在 1000 个元素以内。\n\n## 相关页面\n\n- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)\n- [查询用户列表](/docs/chat/platform-api/v3/user/listing-users/list-users)\n- [群组概览](/docs/chat/platform-api/v3/group/overview)\n- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

function renderFrontmatter(values) {
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
}

function validateGoFriendApiOrder() {
  const endpoints = new Set(friendApis.map((api) => api.endpoint));
  const missingOrder = [...endpoints].filter((endpoint) => !goFriendApiOrderIndex.has(endpoint));
  if (missingOrder.length > 0) {
    throw new Error(`Missing Go friend API order for: ${missingOrder.join(', ')}`);
  }

  const missingSpec = goFriendApiOrder.filter((endpoint) => !endpoints.has(endpoint));
  if (missingSpec.length > 0) {
    throw new Error(`Missing friend API spec for: ${missingSpec.join(', ')}`);
  }
}

function compareByGoFriendApiOrder(a, b) {
  return goFriendApiOrderIndex.get(a.endpoint) - goFriendApiOrderIndex.get(b.endpoint);
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
