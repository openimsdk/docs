import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
const localRoot = '/platform-api/message';
const contentRoot = 'content/docs/chat/platform-api/message';
const zhContentRoot = 'content/zh/docs/chat/platform-api/message';
const contextKey = 'chat/platform-api';
const contextTitle = 'Platform API';

// Mirrors open-im-server/internal/api/router.go msgGroup.POST order.
const goMsgApiOrder = [
  '/msg/newest_seq',
  '/msg/search_msg',
  '/msg/send_msg',
  '/msg/send_business_notification',
  '/msg/pull_msg_by_seq',
  '/msg/revoke_msg',
  '/msg/mark_msgs_as_read',
  '/msg/mark_conversation_as_read',
  '/msg/get_conversations_has_read_and_max_seq',
  '/msg/set_conversation_has_read_seq',
  '/msg/clear_conversation_msg',
  '/msg/user_clear_all_msg',
  '/msg/delete_msgs',
  '/msg/delete_msg_phsical_by_seq',
  '/msg/delete_msg_physical',
  '/msg/batch_send_msg',
  '/msg/check_msg_is_send_success',
  '/msg/get_server_time',
];
const goMsgApiOrderIndex = new Map(goMsgApiOrder.map((endpoint, index) => [endpoint, index]));

const commonHeaders = [
  ['operationID', '是', 'string', '每次请求的唯一链路追踪 ID，建议由后端生成并写入日志。'],
  [
    'token',
    '是',
    'string',
    'APP 管理员 Token 或具备该用户访问权限的用户 Token；仅保存在可信后端服务中。',
  ],
  ['Content-Type: application/json', '是', 'string', '请求体为 JSON 时必须设置。'],
];

const offlinePushInfo = {
  title: 'OpenIM 消息',
  desc: '你收到一条新消息',
  ex: '',
  iOSPushSound: 'default',
  iOSBadgeCount: true,
  signalInfo: '',
};

const msgData = {
  sendID: 'user_001',
  recvID: 'user_002',
  groupID: '',
  clientMsgID: 'client_msg_001',
  serverMsgID: 'server_msg_001',
  senderPlatformID: 2,
  senderNickname: 'Tom',
  senderFaceURL: 'https://example.com/avatar-tom.png',
  sessionType: 1,
  msgFrom: 100,
  contentType: 101,
  content: 'eyJjb250ZW50IjoiaGVsbG8ifQ==',
  seq: 128,
  sendTime: 1719800000000,
  createTime: 1719800000000,
  status: 2,
  isRead: false,
  options: { history: true, persistent: true, offlinePush: true },
  offlinePushInfo,
  atUserIDList: [],
  attachedInfo: '',
  ex: '',
};

const chatLog = {
  serverMsgID: 'server_msg_001',
  clientMsgID: 'client_msg_001',
  sendID: 'user_001',
  recvID: 'user_002',
  groupID: '',
  recvNickname: 'Jane',
  senderPlatformID: 2,
  senderNickname: 'Tom',
  senderFaceURL: 'https://example.com/avatar-tom.png',
  groupName: '',
  sessionType: 1,
  msgFrom: 100,
  contentType: 101,
  content: '{"content":"hello"}',
  status: 2,
  sendTime: 1719800000000,
  createTime: 1719800000000,
  ex: '',
  groupFaceURL: '',
  groupMemberCount: 0,
  seq: 128,
  groupOwner: '',
  groupType: 0,
};

const sendMsgSample = {
  sendID: 'openIMAdmin',
  recvID: 'user_001',
  groupID: '',
  senderNickname: '系统通知',
  senderFaceURL: 'https://example.com/system.png',
  senderPlatformID: 10,
  content: { content: 'hello' },
  contentType: 101,
  sessionType: 1,
  isOnlineOnly: false,
  notOfflinePush: false,
  sendTime: 1719800000000,
  offlinePushInfo,
  ex: '',
};

const batchSendMsgSample = {
  sendID: 'openIMAdmin',
  recvIDs: ['user_001', 'user_002'],
  isSendAll: false,
  groupID: '',
  senderNickname: '系统通知',
  senderFaceURL: 'https://example.com/system.png',
  senderPlatformID: 10,
  content: { content: 'hello' },
  contentType: 101,
  sessionType: 1,
  isOnlineOnly: false,
  notOfflinePush: false,
  sendTime: 1719800000000,
  offlinePushInfo,
  ex: '',
};

const paginationFields = [
  ['pagination', '是', 'object', '分页参数。'],
  ['pagination.pageNumber', '是', 'int', '页码，从 1 开始。'],
  ['pagination.showNumber', '是', 'int', '每页数量，必须大于 0。'],
];

const offlinePushFields = [
  ['offlinePushInfo', '否', 'object', '离线推送信息；`notOfflinePush=false` 时生效。'],
  ['offlinePushInfo.title', '否', 'string', '离线推送标题。'],
  ['offlinePushInfo.desc', '否', 'string', '离线推送描述。'],
  ['offlinePushInfo.ex', '否', 'string', '离线推送扩展字段。'],
  ['offlinePushInfo.iOSPushSound', '否', 'string', 'iOS 推送声音。'],
  ['offlinePushInfo.iOSBadgeCount', '否', 'boolean', 'iOS 推送是否计入桌面角标。'],
  ['offlinePushInfo.signalInfo', '否', 'string', '信令推送扩展信息。'],
];

const sendMsgBaseFields = [
  ['sendID', '是', 'string', '发送者用户 ID，可为系统通知号或普通用户 ID。'],
  ['groupID', '条件', 'string', '群聊目标群 ID；`sessionType` 为群聊类型时必填。'],
  ['senderNickname', '否', 'string', '发送者昵称。'],
  ['senderFaceURL', '否', 'string', '发送者头像 URL。'],
  ['senderPlatformID', '否', 'int', '发送者终端平台 ID；管理端模拟发送通常传 10。'],
  ['content', '是', 'object', '消息内容对象，结构由 `contentType` 决定。'],
  ['content.content', '条件', 'string', '文本消息内容；`contentType=101` 时使用。'],
  ['contentType', '是', 'int', '消息内容类型，例如 101 表示文本消息。'],
  ['sessionType', '是', 'int', '会话类型，例如 1 单聊、3 群聊、4 通知会话。'],
  [
    'isOnlineOnly',
    '否',
    'boolean',
    '是否只在线投递；为 true 时关闭历史、持久化、发送方同步和会话更新。',
  ],
  ['notOfflinePush', '否', 'boolean', '是否不触发离线推送；为 true 时关闭离线推送。'],
  ['sendTime', '否', 'int', '消息发送时间，Unix 毫秒时间戳；导入历史消息时可指定。'],
  ...offlinePushFields,
  ['ex', '否', 'string', '消息扩展字段。'],
];

const deleteSyncFields = [
  ['deleteSyncOpt', '否', 'object', '删除同步选项。'],
  ['deleteSyncOpt.IsSyncSelf', '否', 'boolean', '是否同步到用户自己的多端。'],
  ['deleteSyncOpt.IsSyncOther', '否', 'boolean', '是否同步到会话对端或其他相关用户。'],
];

const seqRangeFields = [
  ['seqRanges', '是', 'array', '要拉取的会话 Seq 范围列表。'],
  ['seqRanges[].conversationID', '是', 'string', '会话 ID。'],
  ['seqRanges[].begin', '是', 'int', '起始 Seq。'],
  ['seqRanges[].end', '是', 'int', '结束 Seq。'],
  ['seqRanges[].num', '否', 'int', '最多拉取条数。'],
];

const sendMsgResponseFields = [
  ['data.serverMsgID', 'string', '服务端消息 ID。'],
  ['data.clientMsgID', 'string', '客户端消息 ID。'],
  ['data.sendTime', 'int', '消息发送时间，Unix 毫秒时间戳。'],
  ['data.modify', 'object', '回调或服务端逻辑修改后的消息数据，可能为空。'],
];

const msgDataResponseFields = [
  ['sendID', 'string', '发送者用户 ID。'],
  ['recvID', 'string', '接收者用户 ID。'],
  ['groupID', 'string', '群组 ID。'],
  ['clientMsgID', 'string', '客户端消息 ID。'],
  ['serverMsgID', 'string', '服务端消息 ID。'],
  ['senderPlatformID', 'int', '发送者终端平台 ID。'],
  ['senderNickname', 'string', '发送者昵称。'],
  ['senderFaceURL', 'string', '发送者头像 URL。'],
  ['sessionType', 'int', '会话类型。'],
  ['msgFrom', 'int', '消息来源。'],
  ['contentType', 'int', '消息内容类型。'],
  ['content', 'string', '消息内容；`bytes` 字段在 JSON 中通常为 base64 字符串。'],
  ['seq', 'int', '消息 Seq。'],
  ['sendTime', 'int', '发送时间，Unix 毫秒时间戳。'],
  ['createTime', 'int', '服务端创建时间，Unix 毫秒时间戳。'],
  ['status', 'int', '消息状态。'],
  ['isRead', 'boolean', '是否已读。'],
  ['options', 'object', '消息选项。'],
  ['offlinePushInfo', 'object', '离线推送信息。'],
  ['atUserIDList', 'array', '@ 用户 ID 列表。'],
  ['attachedInfo', 'string', '附加信息。'],
  ['ex', 'string', '扩展字段。'],
];

const messageApis = [
  {
    slug: 'newest-seq',
    title: '获取最新序列号',
    endpoint: '/msg/newest_seq',
    summary: '获取指定用户相关会话的最大消息 Seq 和最小消息 Seq。',
    sample: { userID: 'user_001' },
    fields: [['userID', '是', 'string', '目标用户 ID。']],
    responseData: {
      maxSeqs: { si_user_001_user_002: 128 },
      minSeqs: { si_user_001_user_002: 1 },
    },
    responseFields: [
      ['data.maxSeqs', 'object', '会话 ID 到最大 Seq 的映射。'],
      ['data.minSeqs', 'object', '会话 ID 到最小 Seq 的映射。'],
    ],
    sideEffects: '只读查询，不改变消息或会话状态。',
    limits: ['`userID` 必填。', '非管理员 Token 只能查询自己有权限访问的用户。'],
  },
  {
    slug: 'search-msg',
    title: '搜索消息',
    endpoint: '/msg/search_msg',
    summary: '按发送者、接收者、消息类型、会话类型和发送时间分页搜索消息记录。',
    sample: {
      sendID: 'user_001',
      recvID: 'user_002',
      contentType: 101,
      sendTime: '2024-07-01',
      sessionType: 1,
      pagination: { pageNumber: 1, showNumber: 20 },
    },
    fields: [
      ['sendID', '否', 'string', '按发送者用户 ID 过滤。'],
      ['recvID', '否', 'string', '按接收者用户 ID 或群组 ID 过滤。'],
      ['contentType', '否', 'int', '按消息内容类型过滤。'],
      ['sendTime', '否', 'string', '按发送时间过滤，格式由服务端搜索实现解析。'],
      ['sessionType', '否', 'int', '按会话类型过滤。'],
      ...paginationFields,
    ],
    responseData: { chatLogs: [{ chatLog, isRevoked: false }], chatLogsNum: 1 },
    responseFields: [
      ['data.chatLogs', 'array', '搜索到的消息记录列表。'],
      ['data.chatLogs[].chatLog', 'object', '消息日志详情。'],
      ['data.chatLogs[].chatLog.serverMsgID', 'string', '服务端消息 ID。'],
      ['data.chatLogs[].chatLog.clientMsgID', 'string', '客户端消息 ID。'],
      ['data.chatLogs[].chatLog.sendID', 'string', '发送者用户 ID。'],
      ['data.chatLogs[].chatLog.recvID', 'string', '接收者用户 ID 或群组 ID。'],
      ['data.chatLogs[].chatLog.groupID', 'string', '群组 ID。'],
      ['data.chatLogs[].chatLog.content', 'string', '消息内容字符串。'],
      ['data.chatLogs[].chatLog.seq', 'int', '消息 Seq。'],
      ['data.chatLogs[].isRevoked', 'boolean', '该消息是否已撤回。'],
      ['data.chatLogsNum', 'int', '符合条件的消息总数。'],
    ],
    sideEffects: '只读查询，不改变消息状态。',
    limits: ['`pagination` 必填。', '`pagination.pageNumber` 必须大于等于 1。'],
  },
  {
    slug: 'send-msg',
    title: '发送单条消息',
    endpoint: '/msg/send_msg',
    summary: '由 APP 管理员模拟指定用户或系统账号向单聊或群聊会话发送一条消息。',
    sample: sendMsgSample,
    fields: [['recvID', '条件', 'string', '单聊或通知会话接收者用户 ID。'], ...sendMsgBaseFields],
    responseData: {
      serverMsgID: 'server_msg_001',
      clientMsgID: 'client_msg_001',
      sendTime: 1719800000000,
      modify: null,
    },
    responseFields: sendMsgResponseFields,
    sideEffects: '写入消息、更新会话，并按消息选项触发在线推送、离线推送和多端同步。',
    limits: [
      '必须使用 APP 管理员 Token 调用。',
      '`content`、`contentType`、`sessionType` 和发送目标必填。',
      '`content` 结构必须与 `contentType` 匹配。',
    ],
  },
  {
    slug: 'send-business-notification',
    title: '发送业务通知',
    endpoint: '/msg/send_business_notification',
    summary: '发送一条自定义业务通知，客户端通过业务通知回调接收 `key` 和 `data`。',
    sample: {
      key: 'order_paid',
      data: '{"orderID":"order_001"}',
      sendUserID: 'openIMAdmin',
      recvUserID: 'user_001',
    },
    fields: [
      ['key', '否', 'string', '业务通知分类。'],
      ['data', '否', 'string', '业务通知数据字符串。'],
      ['sendUserID', '是', 'string', '发送者用户 ID。'],
      ['recvUserID', '是', 'string', '接收者用户 ID。'],
    ],
    responseData: {
      serverMsgID: 'server_msg_001',
      clientMsgID: 'client_msg_001',
      sendTime: 1719800000000,
      modify: null,
    },
    responseFields: sendMsgResponseFields,
    sideEffects: '写入一条业务通知消息，并触发客户端业务通知回调。',
    limits: ['必须使用 APP 管理员 Token 调用。', '`sendUserID` 和 `recvUserID` 必填。'],
  },
  {
    slug: 'pull-msg-by-seq',
    title: '按序列号拉取消息',
    endpoint: '/msg/pull_msg_by_seq',
    summary: '按会话 Seq 范围拉取用户可见的历史消息和通知消息。',
    sample: {
      userID: 'user_001',
      seqRanges: [{ conversationID: 'si_user_001_user_002', begin: 1, end: 128, num: 20 }],
      order: 0,
    },
    fields: [
      ['userID', '是', 'string', '拉取消息的用户 ID。'],
      ...seqRangeFields,
      ['order', '否', 'int', '拉取顺序：0 升序，1 降序。'],
    ],
    responseData: {
      msgs: {
        si_user_001_user_002: {
          Msgs: [msgData],
          isEnd: true,
          endSeq: 128,
        },
      },
      notificationMsgs: {},
    },
    responseFields: [
      ['data.msgs', 'object', '普通会话消息映射，key 为会话 ID。'],
      ['data.msgs.<conversationID>.Msgs', 'array', '消息列表。'],
      ...msgDataResponseFields.map(([name, type, description]) => [
        `data.msgs.<conversationID>.Msgs[].${name}`,
        type,
        description,
      ]),
      ['data.msgs.<conversationID>.isEnd', 'boolean', '当前范围是否已拉到边界。'],
      ['data.msgs.<conversationID>.endSeq', 'int', '本次返回的边界 Seq。'],
      ['data.notificationMsgs', 'object', '通知会话消息映射。'],
    ],
    sideEffects: '只读拉取，不改变消息状态。',
    limits: ['`userID` 和 `seqRanges` 必填。', '`seqRanges[].begin` 不能大于 `seqRanges[].end`。'],
  },
  {
    slug: 'revoke-msg',
    title: '撤回消息',
    endpoint: '/msg/revoke_msg',
    summary: '按会话 ID 和 Seq 撤回一条已发送消息。',
    sample: { conversationID: 'si_user_001_user_002', seq: 128, userID: 'user_001' },
    fields: [
      ['conversationID', '是', 'string', '目标会话 ID。'],
      ['seq', '是', 'int', '要撤回消息的 Seq。'],
      ['userID', '是', 'string', '撤回操作者用户 ID。'],
    ],
    sideEffects: '撤回指定消息，并向相关用户同步撤回通知。',
    limits: ['`conversationID`、`seq` 和 `userID` 必填。', '操作者必须具备撤回该消息的权限。'],
  },
  {
    slug: 'mark-msgs-as-read',
    title: '标记多条消息已读',
    endpoint: '/msg/mark_msgs_as_read',
    summary: '将指定会话中的一组消息 Seq 标记为已读。',
    sample: { conversationID: 'si_user_001_user_002', seqs: [120, 121, 122], userID: 'user_001' },
    fields: [
      ['conversationID', '是', 'string', '目标会话 ID。'],
      ['seqs', '是', 'array', '要标记已读的消息 Seq 列表。'],
      ['userID', '是', 'string', '执行已读操作的用户 ID。'],
    ],
    sideEffects: '更新消息已读状态，并可能触发已读同步通知。',
    limits: ['`conversationID`、`seqs` 和 `userID` 必填。', '`seqs` 不要传重复值。'],
  },
  {
    slug: 'mark-conversation-as-read',
    title: '标记会话已读',
    endpoint: '/msg/mark_conversation_as_read',
    summary: '设置指定用户在某个会话中的已读 Seq，可同时携带已读消息 Seq 列表。',
    sample: {
      conversationID: 'si_user_001_user_002',
      userID: 'user_001',
      hasReadSeq: 128,
      seqs: [120, 121, 122],
    },
    fields: [
      ['conversationID', '是', 'string', '目标会话 ID。'],
      ['userID', '是', 'string', '执行已读操作的用户 ID。'],
      ['hasReadSeq', '是', 'int', '会话已读到的最大 Seq。'],
      ['seqs', '否', 'array', '同时标记已读的消息 Seq 列表。'],
    ],
    sideEffects: '更新会话已读 Seq，并可能触发会话已读同步通知。',
    limits: ['`conversationID`、`userID` 和 `hasReadSeq` 必填。'],
  },
  {
    slug: 'get-conversations-has-read-and-max-seq',
    title: '获取会话已读和最大序列号',
    endpoint: '/msg/get_conversations_has_read_and_max_seq',
    summary: '批量获取指定用户在多个会话中的已读 Seq、最大 Seq 和最大 Seq 时间。',
    sample: {
      userID: 'user_001',
      conversationIDs: ['si_user_001_user_002', 'sg_group_001'],
      returnPinned: true,
    },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['conversationIDs', '是', 'array', '要查询的会话 ID 列表。'],
      ['returnPinned', '否', 'boolean', '是否同时返回置顶会话 ID 列表。'],
    ],
    responseData: {
      seqs: {
        si_user_001_user_002: { maxSeq: 128, hasReadSeq: 120, maxSeqTime: 1719800000000 },
      },
      pinnedConversationIDs: ['sg_group_001'],
    },
    responseFields: [
      ['data.seqs', 'object', '会话 ID 到 Seq 信息的映射。'],
      ['data.seqs.<conversationID>.maxSeq', 'int', '该会话最大消息 Seq。'],
      ['data.seqs.<conversationID>.hasReadSeq', 'int', '该用户已读到的最大 Seq。'],
      ['data.seqs.<conversationID>.maxSeqTime', 'int', '最大 Seq 对应时间，Unix 毫秒时间戳。'],
      ['data.pinnedConversationIDs', 'array', '置顶会话 ID 列表；`returnPinned=true` 时返回。'],
    ],
    sideEffects: '只读查询，不改变消息或会话状态。',
    limits: ['`userID` 和 `conversationIDs` 必填。'],
  },
  {
    slug: 'set-conversation-has-read-seq',
    title: '设置会话已读序列号',
    endpoint: '/msg/set_conversation_has_read_seq',
    summary: '直接设置指定用户在某个会话中的已读 Seq。',
    sample: {
      conversationID: 'si_user_001_user_002',
      userID: 'user_001',
      hasReadSeq: 128,
      noNotification: false,
    },
    fields: [
      ['conversationID', '是', 'string', '目标会话 ID。'],
      ['userID', '是', 'string', '目标用户 ID。'],
      ['hasReadSeq', '是', 'int', '要设置的已读 Seq。'],
      ['noNotification', '否', 'boolean', '是否不下发已读通知。'],
    ],
    sideEffects: '更新会话已读 Seq，并按参数决定是否下发通知。',
    limits: ['`conversationID`、`userID` 和 `hasReadSeq` 必填。'],
  },
  {
    slug: 'clear-conversation-msg',
    title: '清空会话消息',
    endpoint: '/msg/clear_conversation_msg',
    summary: '清空指定用户在一个或多个会话中的消息，并重置最小 Seq。',
    sample: {
      conversationIDs: ['si_user_001_user_002'],
      userID: 'user_001',
      deleteSyncOpt: { IsSyncSelf: true, IsSyncOther: true },
    },
    fields: [
      ['conversationIDs', '是', 'array', '需要清空消息的会话 ID 列表。'],
      ['userID', '是', 'string', '目标用户 ID。'],
      ...deleteSyncFields,
    ],
    sideEffects: '清空用户在指定会话中的服务端消息可见范围，并按同步选项下发删除同步。',
    limits: ['`conversationIDs` 和 `userID` 必填。'],
  },
  {
    slug: 'user-clear-all-msg',
    title: '清空用户全部消息',
    endpoint: '/msg/user_clear_all_msg',
    summary: '清空指定用户全部会话消息，并重置相关最小 Seq。',
    sample: { userID: 'user_001', deleteSyncOpt: { IsSyncSelf: true, IsSyncOther: true } },
    fields: [['userID', '是', 'string', '目标用户 ID。'], ...deleteSyncFields],
    sideEffects: '清空用户全部会话的服务端消息可见范围，并按同步选项下发删除同步。',
    limits: ['`userID` 必填。', '该操作影响范围大，调用前应在业务侧二次确认。'],
  },
  {
    slug: 'delete-msgs',
    title: '删除指定消息',
    endpoint: '/msg/delete_msgs',
    summary: '按会话 ID 和 Seq 列表删除指定用户可见的部分消息。',
    sample: {
      conversationID: 'si_user_001_user_002',
      seqs: [120, 121],
      userID: 'user_001',
      deleteSyncOpt: { IsSyncSelf: true, IsSyncOther: false },
    },
    fields: [
      ['conversationID', '是', 'string', '目标会话 ID。'],
      ['seqs', '是', 'array', '要删除的消息 Seq 列表。'],
      ['userID', '是', 'string', '目标用户 ID。'],
      ...deleteSyncFields,
    ],
    sideEffects: '删除指定用户可见的部分消息，并按同步选项下发删除同步。',
    limits: ['`conversationID`、`seqs` 和 `userID` 必填。', '`seqs` 不要传重复值。'],
  },
  {
    slug: 'delete-msg-physical-by-seq',
    title: '按序列号物理删除消息',
    endpoint: '/msg/delete_msg_phsical_by_seq',
    summary: '按会话 ID 和 Seq 列表从服务端物理删除消息。',
    sample: { conversationID: 'si_user_001_user_002', seqs: [120, 121] },
    fields: [
      ['conversationID', '是', 'string', '目标会话 ID。'],
      ['seqs', '是', 'array', '要物理删除的消息 Seq 列表。'],
    ],
    sideEffects: '从服务端存储中物理删除指定消息。',
    limits: [
      '接口路径中的 `phsical` 是服务端 router 当前拼写，调用时必须保持一致。',
      '`conversationID` 和 `seqs` 必填。',
      '物理删除不可恢复，调用前应确认备份和合规要求。',
    ],
  },
  {
    slug: 'delete-msg-physical',
    title: '按时间物理删除消息',
    endpoint: '/msg/delete_msg_physical',
    summary: '按会话 ID 列表和时间戳从服务端物理删除早于指定时间的消息。',
    sample: { conversationIDs: ['si_user_001_user_002'], timestamp: 1719800000000 },
    fields: [
      ['conversationIDs', '是', 'array', '需要物理删除消息的会话 ID 列表。'],
      ['timestamp', '是', 'int', '删除边界时间，Unix 毫秒时间戳。'],
    ],
    sideEffects: '从服务端存储中物理删除指定时间范围内的消息。',
    limits: [
      '`conversationIDs` 和 `timestamp` 必填。',
      '物理删除不可恢复，调用前应确认备份和合规要求。',
    ],
  },
  {
    slug: 'batch-send-msg',
    title: '批量发送消息',
    endpoint: '/msg/batch_send_msg',
    summary: '由 APP 管理员向多个用户批量发送同一条消息，或向全量用户发送。',
    sample: batchSendMsgSample,
    fields: [
      ['recvIDs', '条件', 'array', '`isSendAll=false` 时的接收用户 ID 列表。'],
      ['isSendAll', '否', 'boolean', '是否发送给全部用户；为 true 时服务端分页读取全量用户 ID。'],
      ...sendMsgBaseFields,
    ],
    responseData: {
      results: [
        {
          serverMsgID: 'server_msg_001',
          clientMsgID: 'client_msg_001',
          sendTime: 1719800000000,
          recvID: 'user_001',
        },
      ],
      failedUserIDs: ['user_002'],
    },
    responseFields: [
      ['data.results', 'array', '发送成功的结果列表。'],
      ['data.results[].serverMsgID', 'string', '服务端消息 ID。'],
      ['data.results[].clientMsgID', 'string', '客户端消息 ID。'],
      ['data.results[].sendTime', 'int', '发送时间，Unix 毫秒时间戳。'],
      ['data.results[].recvID', 'string', '本次发送的接收用户 ID。'],
      ['data.failedUserIDs', 'array', '发送失败的用户 ID 列表。'],
    ],
    sideEffects: '向多个用户写入消息，并按消息选项触发推送和会话更新。',
    limits: [
      '必须使用 APP 管理员 Token 调用。',
      '`content`、`contentType` 和 `sessionType` 必填。',
      '`isSendAll=true` 会遍历全量用户，调用前应评估推送和写入压力。',
    ],
  },
  {
    slug: 'check-msg-is-send-success',
    title: '检查消息发送状态',
    endpoint: '/msg/check_msg_is_send_success',
    summary: '获取 API 发送消息状态标记。',
    sample: {},
    fields: [['(空对象)', '是', 'object', '请求体传空 JSON 对象 `{}`。']],
    responseData: { status: 2 },
    responseFields: [['data.status', 'int', '消息发送状态。']],
    sideEffects: '只读查询，不改变消息状态。',
    limits: ['请求体为空对象。'],
  },
  {
    slug: 'get-server-time',
    title: '获取服务器时间',
    endpoint: '/msg/get_server_time',
    summary: '获取 OpenIM 消息服务当前服务器时间。',
    sample: {},
    fields: [['(空对象)', '是', 'object', '请求体传空 JSON 对象 `{}`。']],
    responseData: { serverTime: 1719800000000 },
    responseFields: [['data.serverTime', 'int', '服务端当前时间，Unix 毫秒时间戳。']],
    sideEffects: '只读查询，不改变消息状态。',
    limits: ['请求体为空对象。'],
  },
];

validateGoMsgApiOrder();

const externalMsgApis = [...messageApis].sort(compareByGoMsgApiOrder);
const generatedPaths = new Set(externalMsgApis.map((api) => `${localRoot}/${api.slug}`));

for (const spec of externalMsgApis) {
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

const routesWithoutGeneratedMsgApis = routes.filter((route) => !generatedPaths.has(route.path));
const maxSourceIndex = Math.max(
  ...routesWithoutGeneratedMsgApis.map((route) => route.sourceIndex ?? 0),
);
const maxNavOrder = Math.max(...routesWithoutGeneratedMsgApis.map((route) => route.navOrder ?? 0));

const newRoutes = [];
for (const [index, spec] of externalMsgApis.entries()) {
  const path = `${localRoot}/${spec.slug}`;
  const relativePath = path.replace(/^\/docs\//, '');
  const contentFile = `${contentRoot}/${spec.slug}.mdx`;
  const record = {
    id: 0,
    path,
    relativePath,
    sourcePath: path,
    title: spec.title,
    description: `OpenIM 消息 REST API：${spec.title}。`,
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

const nextRoutes = [...routesWithoutGeneratedMsgApis, ...newRoutes].map((route, index) => ({
  ...route,
  id: index + 1,
}));

const platformContext = navigation.contexts.find((context) => context.key === contextKey);
if (!platformContext) {
  throw new Error(`Missing navigation context: ${contextKey}`);
}

let messageNode = platformContext.nodes.find((node) => node.id === 'message');
if (!messageNode) {
  messageNode = {
    id: 'message',
    segment: 'message',
    title: '消息',
    href: null,
    type: 'folder',
    children: [],
    minIndex: newRoutes[0]?.navOrder ?? maxNavOrder + 1,
  };
}

messageNode.children = (messageNode.children ?? []).filter(
  (node) => !generatedPaths.has(node.href),
);
const msgApiNodes = newRoutes.map((route) => ({
  id: `message/${route.path.split('/').at(-1)}`,
  segment: route.path.split('/').at(-1),
  title: route.title,
  href: route.path,
  type: 'page',
  children: [],
  minIndex: route.navOrder,
}));
const overviewIndex = messageNode.children.findIndex((node) => node.id === 'message/overview');
const insertIndex = overviewIndex >= 0 ? overviewIndex + 1 : 0;
messageNode.children.splice(insertIndex, 0, ...msgApiNodes);
messageNode.minIndex = Math.min(
  ...messageNode.children.map((node) => node.minIndex).filter((value) => Number.isFinite(value)),
);

platformContext.nodes = platformContext.nodes.filter((node) => node.id !== 'message');
const thirdIndex = platformContext.nodes.findIndex((node) => node.id === 'third');
const authIndex = platformContext.nodes.findIndex((node) => node.id === 'auth');
const conversationIndex = platformContext.nodes.findIndex((node) => node.id === 'conversation');
if (thirdIndex >= 0) {
  platformContext.nodes.splice(thirdIndex + 1, 0, messageNode);
} else if (authIndex >= 0) {
  platformContext.nodes.splice(authIndex + 1, 0, messageNode);
} else if (conversationIndex >= 0) {
  platformContext.nodes.splice(conversationIndex, 0, messageNode);
} else {
  platformContext.nodes.push(messageNode);
}
platformContext.pageCount = nextRoutes.filter((route) => route.contextKey === contextKey).length;

platformApiZh.generatedAt = today;
platformApiZh.navigationLabels = {
  ...platformApiZh.navigationLabels,
  message: '消息',
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

console.log(`Wrote ${externalMsgApis.length} OpenIM message API page(s).`);

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
    ...(spec.responseData !== undefined ? [['data', 'object', '接口返回数据。']] : []),
    ...(spec.responseFields ?? []),
  ];

  return `使用 **${spec.title}** 从可信后端调用 OpenIM 消息 REST 接口。${spec.summary} 请先在[接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)中配置 API 地址和 Token；接口参数通过请求头和 JSON 请求体传递。\n\n## HTTP 请求\n\n\`\`\`bash\nPOST {API_ADDRESS}${spec.endpoint}\n\`\`\`\n\n### 请求示例\n\n\`\`\`bash\ncurl --request POST "\${API_ADDRESS}${spec.endpoint}" \\\n  --header "Content-Type: application/json; charset=utf-8" \\\n  --header "operationID: \${OPERATION_ID}" \\\n  --header "token: \${ADMIN_TOKEN}" \\\n  --data-raw '${json(spec.sample)}'\n\`\`\`\n\n> 安全提示：管理端 Token 只能保存在可信后端服务中，不能下发到客户端或写入前端代码。普通用户消息优先由客户端 SDK 按登录用户身份发送。\n\n## 参数\n\n此接口通过请求头传入链路追踪信息和鉴权凭证，通过 JSON 请求体传递业务参数。\n\n### 请求头\n\n${renderTable(['Header', '是否必填', '类型', '说明'], commonHeaders)}\n\n## 请求体\n\n\`\`\`json\n${json(spec.sample)}\n\`\`\`\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.fields)}\n\n## 响应\n\n请求被 OpenIM 正常处理时通常返回 \`200 OK\`。业务是否成功以响应体中的 \`errCode\` 为准；\`errCode === 0\` 表示成功，非 0 表示业务错误。\n\n\`\`\`json\n${json(success)}\n\`\`\`\n\n### 响应参数\n\n${renderTable(['参数名', '类型', '说明'], responseFields)}\n\n### 错误\n\n如果请求失败，OpenIM 返回错误对象。更多错误码说明见[错误码](/docs/chat/platform-api/v3/error-codes)。\n\n\`\`\`json\n${json({ errCode: 1004, errMsg: 'RecordNotFoundError', errDlt: ': [1004]RecordNotFoundError' })}\n\`\`\`\n\n| 错误场景 | 可能原因 | 处理方式 |\n| -------- | -------- | -------- |\n| 鉴权失败 | \`token\` 缺失、过期，或调用账号没有该接口权限。 | 重新获取有效 Token，并在可信后端调用接口。 |\n| 链路追踪困难 | \`operationID\` 缺失或在大量请求中重复使用。 | 为每次请求生成独立 \`operationID\`，并在服务端日志中保留。 |\n| 参数校验失败 | 请求体字段类型、必填字段或消息内容结构不符合接口要求。 | 对照请求体参数表和限制说明检查字段。 |\n\n## 权限和限制\n\n- ${spec.sideEffects}\n${spec.limits.map((item) => `- ${item}`).join('\n')}\n- 所有数组型请求参数建议控制在 1000 个元素以内。\n\n## 相关页面\n\n- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)\n- [消息概览](/docs/chat/platform-api/v3/message/overview)\n- [会话列表](/docs/chat/platform-api/v3/conversation/listing-conversations/get-conversations)\n- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

function renderFrontmatter(values) {
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
}

function validateGoMsgApiOrder() {
  const endpoints = new Set(messageApis.map((api) => api.endpoint));
  const missingOrder = [...endpoints].filter((endpoint) => !goMsgApiOrderIndex.has(endpoint));
  if (missingOrder.length > 0) {
    throw new Error(`Missing Go message API order for: ${missingOrder.join(', ')}`);
  }

  const missingSpec = goMsgApiOrder.filter((endpoint) => !endpoints.has(endpoint));
  if (missingSpec.length > 0) {
    throw new Error(`Missing message API spec for: ${missingSpec.join(', ')}`);
  }
}

function compareByGoMsgApiOrder(a, b) {
  return goMsgApiOrderIndex.get(a.endpoint) - goMsgApiOrderIndex.get(b.endpoint);
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
