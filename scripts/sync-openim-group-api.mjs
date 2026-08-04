import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
const localRoot = '/platform-api/group';
const contentRoot = 'content/docs/chat/platform-api/group';
const zhContentRoot = 'content/zh/docs/chat/platform-api/group';
const contextKey = 'chat/platform-api';
const contextTitle = 'Platform API';

// Mirrors open-im-server/internal/api/router.go groupRouterGroup.POST order.
const goGroupApiOrder = [
  '/group/create_group',
  '/group/set_group_info',
  '/group/set_group_info_ex',
  '/group/join_group',
  '/group/quit_group',
  '/group/group_application_response',
  '/group/transfer_group',
  '/group/get_recv_group_applicationList',
  '/group/get_user_req_group_applicationList',
  '/group/get_group_users_req_application_list',
  '/group/get_specified_user_group_request_info',
  '/group/get_groups_info',
  '/group/kick_group',
  '/group/get_group_members_info',
  '/group/get_group_member_list',
  '/group/invite_user_to_group',
  '/group/get_joined_group_list',
  '/group/dismiss_group',
  '/group/mute_group_member',
  '/group/cancel_mute_group_member',
  '/group/mute_group',
  '/group/cancel_mute_group',
  '/group/set_group_member_info',
  '/group/get_group_abstract_info',
  '/group/get_groups',
  '/group/get_group_member_user_id',
  '/group/get_incremental_join_groups',
  '/group/get_incremental_group_members',
  '/group/get_incremental_group_members_batch',
  '/group/get_full_group_member_user_ids',
  '/group/get_full_join_group_ids',
  '/group/get_group_application_unhandled_count',
];
const goGroupApiOrderIndex = new Map(goGroupApiOrder.map((endpoint, index) => [endpoint, index]));

const commonHeaders = [
  ['operationID', '是', 'string', '每次请求的唯一链路追踪 ID，建议由后端生成并写入日志。'],
  ['token', '是', 'string', 'APP 管理员 Token；仅保存在可信后端服务中。'],
  ['Content-Type: application/json', '是', 'string', '请求体为 JSON 时必须设置。'],
];

const groupInfo = {
  groupID: 'group_001',
  groupName: '产品交流群',
  notification: '欢迎使用 OpenIM',
  introduction: '用于产品交流的群组',
  faceURL: 'https://example.com/group.png',
  ownerUserID: 'user_owner',
  createTime: 1719800000000,
  memberCount: 3,
  ex: '',
  status: 0,
  creatorUserID: 'user_owner',
  groupType: 2,
  needVerification: 0,
  lookMemberInfo: 0,
  applyMemberFriend: 0,
  notificationUpdateTime: 0,
  notificationUserID: '',
};

const groupMember = {
  groupID: 'group_001',
  userID: 'user_001',
  roleLevel: 20,
  joinTime: 1719800000000,
  nickname: 'Tom',
  faceURL: 'https://example.com/avatar.png',
  appMangerLevel: 0,
  joinSource: 2,
  operatorUserID: 'user_owner',
  ex: '',
  muteEndTime: 0,
  inviterUserID: 'user_owner',
};

const groupRequest = {
  userInfo: {
    userID: 'user_002',
    nickname: 'Jane',
    faceURL: 'https://example.com/avatar-jane.png',
    ex: '',
  },
  groupInfo,
  handleResult: 0,
  reqMsg: '申请加入群组',
  handleMsg: '',
  reqTime: 1719800000000,
  handleUserID: '',
  handleTime: 0,
  ex: '',
  joinSource: 3,
  inviterUserID: '',
};

const paginationFields = [
  ['pagination', '是', 'object', '分页参数。'],
  ['pagination.pageNumber', '是', 'int', '页码，从 1 开始。'],
  ['pagination.showNumber', '是', 'int', '每页数量，必须大于 0。'],
];

const groupApis = [
  {
    slug: 'create-group',
    title: '创建群组',
    endpoint: '/group/create_group',
    summary: '创建一个 OpenIM 群组，并设置群主、初始成员、管理员和群资料。',
    sample: {
      memberUserIDs: ['user_001', 'user_002'],
      adminUserIDs: ['user_admin'],
      ownerUserID: 'user_owner',
      groupInfo: {
        groupID: 'group_001',
        groupName: '产品交流群',
        notification: '欢迎使用 OpenIM',
        introduction: '用于产品交流的群组',
        faceURL: 'https://example.com/group.png',
        ex: '',
        groupType: 2,
        needVerification: 0,
        lookMemberInfo: 0,
        applyMemberFriend: 0,
      },
      sendMessage: true,
    },
    fields: [
      ['memberUserIDs', '否', 'array', '初始普通成员用户 ID 列表，最多 1000 个。'],
      ['adminUserIDs', '否', 'array', '初始管理员用户 ID 列表。'],
      ['ownerUserID', '是', 'string', '群主用户 ID。'],
      ['groupInfo', '是', 'object', '群资料对象。'],
      ['groupInfo.groupID', '否', 'string', '群 ID；不传时由服务端生成。'],
      ['groupInfo.groupName', '是', 'string', '群名称。'],
      ['groupInfo.notification', '否', 'string', '群公告。'],
      ['groupInfo.introduction', '否', 'string', '群介绍。'],
      ['groupInfo.faceURL', '否', 'string', '群头像 URL。'],
      ['groupInfo.ex', '否', 'string', '群扩展字段。'],
      ['groupInfo.groupType', '是', 'int', '群类型；当前服务端只支持工作群，固定传 2。'],
      ['groupInfo.needVerification', '否', 'int', '入群验证策略。'],
      ['groupInfo.lookMemberInfo', '否', 'int', '是否允许查看群成员资料。'],
      ['groupInfo.applyMemberFriend', '否', 'int', '是否允许从群成员处添加好友。'],
      ['sendMessage', '否', 'boolean', '是否发送群创建通知。'],
    ],
    responseData: { groupInfo },
    responseFields: [['data.groupInfo', 'object', '创建后的群资料。']],
    sideEffects: '创建群组、写入群主和初始成员关系，并可能向相关用户下发群创建通知。',
    limits: [
      '`groupInfo` 和 `ownerUserID` 必填。',
      '`groupInfo.groupType` 只能传 2。',
      '`memberUserIDs` 最多 1000 个。',
    ],
  },
  {
    slug: 'set-group-info',
    title: '设置群组信息',
    endpoint: '/group/set_group_info',
    summary: '使用嵌套的 `groupInfoForSet` 对象修改群资料。',
    sample: {
      groupInfoForSet: {
        groupID: 'group_001',
        groupName: '新的群名称',
        notification: '新的群公告',
        introduction: '新的群介绍',
        faceURL: 'https://example.com/new-group.png',
        ex: 'new ex',
        needVerification: 1,
        lookMemberInfo: 1,
        applyMemberFriend: 1,
      },
    },
    fields: [
      ['groupInfoForSet', '是', 'object', '要修改的群资料对象。'],
      ['groupInfoForSet.groupID', '是', 'string', '目标群 ID。'],
      ['groupInfoForSet.groupName', '否', 'string', '新的群名称。'],
      ['groupInfoForSet.notification', '否', 'string', '新的群公告。'],
      ['groupInfoForSet.introduction', '否', 'string', '新的群介绍。'],
      ['groupInfoForSet.faceURL', '否', 'string', '新的群头像 URL。'],
      ['groupInfoForSet.ex', '否', 'string', '新的群扩展字段。'],
      ['groupInfoForSet.needVerification', '否', 'int', '新的入群验证策略。'],
      ['groupInfoForSet.lookMemberInfo', '否', 'int', '是否允许查看群成员资料。'],
      ['groupInfoForSet.applyMemberFriend', '否', 'int', '是否允许从群成员处添加好友。'],
    ],
    sideEffects: '更新群资料，并可能触发群资料变更通知或相关回调。',
    limits: ['`groupInfoForSet.groupID` 必填。', '仅传需要修改的字段。'],
  },
  {
    slug: 'set-group-info-ex',
    title: '设置群组信息扩展',
    endpoint: '/group/set_group_info_ex',
    summary: '使用扁平请求体修改群资料；该接口支持显式传入零值字段。',
    sample: {
      groupID: 'group_001',
      groupName: '新的群名称',
      notification: '新的群公告',
      introduction: '新的群介绍',
      faceURL: 'https://example.com/new-group.png',
      ex: 'new ex',
      needVerification: 1,
      lookMemberInfo: 1,
      applyMemberFriend: 1,
    },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['groupName', '否', 'string', '新的群名称。'],
      ['notification', '否', 'string', '新的群公告。'],
      ['introduction', '否', 'string', '新的群介绍。'],
      ['faceURL', '否', 'string', '新的群头像 URL。'],
      ['ex', '否', 'string', '新的群扩展字段。'],
      ['needVerification', '否', 'int', '新的入群验证策略。'],
      ['lookMemberInfo', '否', 'int', '是否允许查看群成员资料。'],
      ['applyMemberFriend', '否', 'int', '是否允许从群成员处添加好友。'],
    ],
    sideEffects: '更新群资料，并可能触发群资料变更通知或相关回调。',
    limits: ['`groupID` 必填。', '该接口适合需要把字段显式改为零值的场景。'],
  },
  {
    slug: 'join-group',
    title: '申请加入群组',
    endpoint: '/group/join_group',
    summary: '提交入群申请；如果群组允许直接加入，服务端会直接写入成员关系。',
    sample: {
      groupID: 'group_001',
      reqMessage: '申请加入群组',
      joinSource: 3,
      inviterUserID: 'user_002',
      ex: '',
    },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['reqMessage', '否', 'string', '申请说明。'],
      ['joinSource', '是', 'int', '入群来源：1 管理员邀请，2 被邀请，3 搜索加入，4 扫码加入。'],
      [
        'inviterUserID',
        '是',
        'string',
        '申请加入群组的用户 ID；当前服务端沿用该字段名承载申请用户。',
      ],
      ['ex', '否', 'string', '扩展字段。'],
    ],
    sideEffects: '根据群验证策略创建入群申请或直接加入群组，并可能触发入群申请或成员加入通知。',
    limits: ['`groupID` 和 `inviterUserID` 必填。', '`joinSource` 只能为 1、2、3 或 4。'],
  },
  {
    slug: 'quit-group',
    title: '退出群组',
    endpoint: '/group/quit_group',
    summary: '让指定用户退出指定群组。',
    sample: { groupID: 'group_001', userID: 'user_001' },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['userID', '否', 'string', '要退出群组的用户 ID；不传时服务端使用当前操作用户 ID。'],
    ],
    sideEffects: '删除指定用户的群成员关系，并可能触发退群通知。',
    limits: [
      '`groupID` 必填。',
      '传入 `userID` 时服务端会校验操作方是否有权限。',
      '群主退出前通常需要先转让群主。',
    ],
  },
  {
    slug: 'respond-group-application',
    title: '处理入群申请',
    endpoint: '/group/group_application_response',
    summary: '同意或拒绝用户的入群申请。',
    sample: {
      groupID: 'group_001',
      fromUserID: 'user_002',
      handledMsg: '欢迎加入',
      handleResult: 1,
    },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['fromUserID', '是', 'string', '申请入群的用户 ID。'],
      ['handledMsg', '否', 'string', '处理说明。'],
      ['handleResult', '是', 'int', '处理结果：1 同意，-1 拒绝。'],
    ],
    sideEffects: '更新入群申请处理状态；同意时会写入成员关系，并可能触发申请处理或成员加入通知。',
    limits: ['`handleResult` 只能为 1 或 -1。'],
  },
  {
    slug: 'transfer-group-owner',
    title: '转让群主',
    endpoint: '/group/transfer_group',
    summary: '把群主身份从原群主转让给另一个群成员。',
    sample: {
      groupID: 'group_001',
      oldOwnerUserID: 'user_owner',
      newOwnerUserID: 'user_001',
    },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['oldOwnerUserID', '是', 'string', '当前群主用户 ID。'],
      ['newOwnerUserID', '是', 'string', '新的群主用户 ID。'],
    ],
    sideEffects: '更新群主和成员角色，原群主会变为普通成员，并可能触发群主转让通知。',
    limits: ['三个字段均必填。', '新群主必须是群成员。'],
  },
  {
    slug: 'list-received-group-applications',
    title: '查询收到的入群申请',
    endpoint: '/group/get_recv_group_applicationList',
    summary: '群主或管理员分页查询自己管理范围内收到的入群申请。',
    sample: {
      fromUserID: 'user_owner',
      groupIDs: ['group_001'],
      handleResults: [0],
      pagination: { pageNumber: 1, showNumber: 20 },
    },
    fields: [
      ...paginationFields,
      ['fromUserID', '是', 'string', '群主或管理员用户 ID。'],
      ['groupIDs', '否', 'array', '要过滤的群 ID 列表。'],
      ['handleResults', '否', 'array', '按处理状态过滤，例如 0 未处理、1 同意、-1 拒绝。'],
    ],
    responseData: { total: 1, groupRequests: [groupRequest] },
    responseFields: [
      ['data.total', 'int', '符合条件的申请总数。'],
      ['data.groupRequests', 'array', '入群申请列表。'],
    ],
    sideEffects: '只读查询，不改变申请状态。',
    limits: ['`pagination.pageNumber` 必须大于等于 1。', '`fromUserID` 必填。'],
  },
  {
    slug: 'list-user-requested-group-applications',
    title: '查询用户发起的入群申请',
    endpoint: '/group/get_user_req_group_applicationList',
    summary: '分页查询指定用户自己发起的入群申请记录。',
    sample: {
      userID: 'user_002',
      groupIDs: ['group_001'],
      handleResults: [0],
      pagination: { pageNumber: 1, showNumber: 20 },
    },
    fields: [
      ...paginationFields,
      ['userID', '是', 'string', '申请人用户 ID。'],
      ['groupIDs', '否', 'array', '要过滤的群 ID 列表。'],
      ['handleResults', '否', 'array', '按处理状态过滤，例如 0 未处理、1 同意、-1 拒绝。'],
    ],
    responseData: { total: 1, groupRequests: [groupRequest] },
    responseFields: [
      ['data.total', 'int', '符合条件的申请总数。'],
      ['data.groupRequests', 'array', '入群申请列表。'],
    ],
    sideEffects: '只读查询，不改变申请状态。',
    limits: ['`pagination.pageNumber` 必须大于等于 1。', '`userID` 必填。'],
  },
  {
    slug: 'list-group-users-request-applications',
    title: '查询群内多个用户的入群申请',
    endpoint: '/group/get_group_users_req_application_list',
    summary: '查询指定群组中多个用户的入群申请记录。',
    sample: { groupID: 'group_001', userIDs: ['user_002', 'user_003'] },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['userIDs', '是', 'array', '用户 ID 列表，最多 1000 个。'],
    ],
    responseData: { total: 1, groupRequests: [groupRequest] },
    responseFields: [
      ['data.total', 'int', '符合条件的申请总数。'],
      ['data.groupRequests', 'array', '入群申请列表。'],
    ],
    sideEffects: '只读查询，不改变申请状态。',
    limits: ['`groupID` 和 `userIDs` 必填。', '`userIDs` 最多 1000 个。'],
  },
  {
    slug: 'get-specified-user-group-request-info',
    title: '查询指定用户入群申请',
    endpoint: '/group/get_specified_user_group_request_info',
    summary: '查询某个用户在某个群组下的入群申请记录。',
    sample: { groupID: 'group_001', userID: 'user_002' },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['userID', '是', 'string', '申请人用户 ID。'],
    ],
    responseData: { total: 1, groupRequests: [groupRequest] },
    responseFields: [
      ['data.total', 'int', '符合条件的申请总数。'],
      ['data.groupRequests', 'array', '入群申请列表。'],
    ],
    sideEffects: '只读查询，不改变申请状态。',
    limits: ['`groupID` 和 `userID` 必填。'],
  },
  {
    slug: 'get-groups-info',
    title: '获取群组详情',
    endpoint: '/group/get_groups_info',
    summary: '批量获取指定群组的详细资料。',
    sample: { groupIDs: ['group_001', 'group_002'] },
    fields: [['groupIDs', '是', 'array', '群 ID 列表。']],
    responseData: { groupInfos: [groupInfo] },
    responseFields: [['data.groupInfos', 'array', '群资料列表。']],
    sideEffects: '只读查询，不改变群组状态。',
    limits: ['`groupIDs` 必填。'],
  },
  {
    slug: 'kick-group-members',
    title: '移除群成员',
    endpoint: '/group/kick_group',
    summary: '从群组中移除一个或多个成员。',
    sample: {
      groupID: 'group_001',
      kickedUserIDs: ['user_002'],
      reason: '违反群规则',
      sendMessage: true,
    },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['kickedUserIDs', '是', 'array', '被移除的用户 ID 列表，最多 1000 个。'],
      ['reason', '否', 'string', '移除原因。'],
      ['sendMessage', '否', 'boolean', '是否发送成员被移除通知。'],
    ],
    sideEffects: '删除成员关系，并可能触发成员被移除通知。',
    limits: ['`groupID` 和 `kickedUserIDs` 必填。', '`kickedUserIDs` 最多 1000 个。'],
  },
  {
    slug: 'get-group-members-info',
    title: '获取指定群成员',
    endpoint: '/group/get_group_members_info',
    summary: '批量获取指定群组内多个成员的详细资料。',
    sample: { groupID: 'group_001', userIDs: ['user_001', 'user_002'] },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['userIDs', '是', 'array', '群成员用户 ID 列表。'],
    ],
    responseData: { members: [groupMember] },
    responseFields: [['data.members', 'array', '群成员资料列表。']],
    sideEffects: '只读查询，不改变成员状态。',
    limits: ['`groupID` 和 `userIDs` 必填。'],
  },
  {
    slug: 'get-group-member-list',
    title: '获取群成员列表',
    endpoint: '/group/get_group_member_list',
    summary: '按分页和关键字查询群成员列表；请求体保留 `filter` 字段并校验取值范围。',
    sample: {
      groupID: 'group_001',
      filter: 0,
      keyword: 'Tom',
      pagination: { pageNumber: 1, showNumber: 100 },
    },
    fields: [
      ...paginationFields,
      ['groupID', '是', 'string', '目标群 ID。'],
      ['filter', '否', 'int', '保留字段，入口校验取值范围 0-5；当前实现不使用该字段过滤结果。'],
      ['keyword', '否', 'string', '按用户 ID 或昵称过滤。'],
    ],
    responseData: { total: 1, members: [groupMember] },
    responseFields: [
      ['data.total', 'int', '符合条件的成员总数。'],
      ['data.members', 'array', '群成员资料列表。'],
    ],
    sideEffects: '只读查询，不改变成员状态。',
    limits: ['`pagination.pageNumber` 必须大于等于 1。', '`filter` 必须在 0-5 范围内。'],
  },
  {
    slug: 'invite-users-to-group',
    title: '邀请用户进群',
    endpoint: '/group/invite_user_to_group',
    summary: '邀请一个或多个用户加入指定群组。',
    sample: {
      groupID: 'group_001',
      invitedUserIDs: ['user_002', 'user_003'],
      reason: '邀请加入产品交流群',
      sendMessage: true,
    },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['invitedUserIDs', '是', 'array', '被邀请用户 ID 列表，最多 1000 个。'],
      ['reason', '否', 'string', '邀请说明。'],
      ['sendMessage', '否', 'boolean', '是否发送邀请通知。'],
    ],
    sideEffects: '根据群验证策略直接加入成员或生成邀请/申请流程，并可能触发成员邀请通知。',
    limits: ['`groupID` 和 `invitedUserIDs` 必填。', '`invitedUserIDs` 最多 1000 个。'],
  },
  {
    slug: 'get-joined-group-list',
    title: '获取已加入群组列表',
    endpoint: '/group/get_joined_group_list',
    summary: '分页获取指定用户已经加入的群组列表。',
    sample: {
      fromUserID: 'user_001',
      pagination: { pageNumber: 1, showNumber: 20 },
    },
    fields: [...paginationFields, ['fromUserID', '是', 'string', '目标用户 ID。']],
    responseData: { total: 1, groups: [groupInfo] },
    responseFields: [
      ['data.total', 'int', '已加入群组总数。'],
      ['data.groups', 'array', '群资料列表。'],
    ],
    sideEffects: '只读查询，不改变群组状态。',
    limits: ['`pagination.pageNumber` 必须大于等于 1。', '`fromUserID` 必填。'],
  },
  {
    slug: 'dismiss-group',
    title: '解散群组',
    endpoint: '/group/dismiss_group',
    summary: '解散指定群组；解散后群组不可恢复。',
    sample: { groupID: 'group_001', deleteMember: true, sendMessage: true },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['deleteMember', '否', 'boolean', '是否同时删除成员数据。'],
      ['sendMessage', '否', 'boolean', '是否发送群解散通知。'],
    ],
    sideEffects: '更新群状态为解散，并可能删除成员数据、触发群解散通知。',
    limits: ['`groupID` 必填。', '这是破坏性操作，业务后端应先完成权限校验和审计记录。'],
  },
  {
    slug: 'mute-group-member',
    title: '禁言群成员',
    endpoint: '/group/mute_group_member',
    summary: '在指定群组内禁言某个成员一段时间。',
    sample: { groupID: 'group_001', userID: 'user_002', mutedSeconds: 600 },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['userID', '是', 'string', '被禁言成员用户 ID。'],
      ['mutedSeconds', '是', 'int', '禁言时长，单位秒，必须大于 0。'],
    ],
    sideEffects: '更新群成员禁言状态，并可能触发群成员禁言通知。',
    limits: ['三个字段均必填。', '`mutedSeconds` 必须大于 0。'],
  },
  {
    slug: 'cancel-mute-group-member',
    title: '取消禁言群成员',
    endpoint: '/group/cancel_mute_group_member',
    summary: '解除指定群组内某个成员的禁言状态。',
    sample: { groupID: 'group_001', userID: 'user_002' },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['userID', '是', 'string', '要解除禁言的成员用户 ID。'],
    ],
    sideEffects: '更新群成员禁言状态，并可能触发解除禁言通知。',
    limits: ['`groupID` 和 `userID` 必填。'],
  },
  {
    slug: 'mute-group',
    title: '禁言群组',
    endpoint: '/group/mute_group',
    summary: '禁言整个群组；群主和管理员通常仍可发言。',
    sample: { groupID: 'group_001' },
    fields: [['groupID', '是', 'string', '目标群 ID。']],
    sideEffects: '更新群禁言状态，并可能触发群禁言通知。',
    limits: ['`groupID` 必填。'],
  },
  {
    slug: 'cancel-mute-group',
    title: '取消群组禁言',
    endpoint: '/group/cancel_mute_group',
    summary: '解除整个群组的禁言状态。',
    sample: { groupID: 'group_001' },
    fields: [['groupID', '是', 'string', '目标群 ID。']],
    sideEffects: '更新群禁言状态，并可能触发解除群禁言通知。',
    limits: ['`groupID` 必填。'],
  },
  {
    slug: 'set-group-member-info',
    title: '设置群成员信息',
    endpoint: '/group/set_group_member_info',
    summary: '批量修改群成员昵称、头像、角色和扩展字段。',
    sample: {
      members: [
        {
          groupID: 'group_001',
          userID: 'user_002',
          nickname: '新的群昵称',
          faceURL: 'https://example.com/new-avatar.png',
          roleLevel: 60,
          ex: '',
        },
      ],
    },
    fields: [
      ['members', '是', 'array', '要修改的群成员对象列表，最多 1000 个。'],
      ['members.groupID', '是', 'string', '目标群 ID。'],
      ['members.userID', '是', 'string', '目标成员用户 ID。'],
      ['members.nickname', '否', 'string', '新的群内昵称。'],
      ['members.faceURL', '否', 'string', '新的群内头像 URL。'],
      [
        'members.roleLevel',
        '否',
        'int',
        '群成员角色，只能设置为 60 管理员或 20 普通成员；不能设置为 100 群主。',
      ],
      ['members.ex', '否', 'string', '成员扩展字段。'],
    ],
    sideEffects: '更新群成员资料或角色，并可能触发群成员资料变更通知。',
    limits: [
      '`members` 必填且最多 1000 个。',
      '`members.roleLevel` 只能传 60 或 20。',
      '不要通过此接口把成员设置为群主；群主转让应调用转让群主接口。',
    ],
  },
  {
    slug: 'get-group-abstract-info',
    title: '获取群组摘要信息',
    endpoint: '/group/get_group_abstract_info',
    summary: '批量获取群成员数量和成员列表哈希等摘要信息。',
    sample: { groupIDs: ['group_001', 'group_002'] },
    fields: [['groupIDs', '是', 'array', '群 ID 列表，最多 1000 个。']],
    responseData: {
      groupAbstractInfos: [
        { groupID: 'group_001', groupMemberNumber: 3, groupMemberListHash: 123456789 },
      ],
    },
    responseFields: [['data.groupAbstractInfos', 'array', '群组摘要信息列表。']],
    sideEffects: '只读查询，不改变群组状态。',
    limits: ['`groupIDs` 必填且最多 1000 个。'],
  },
  {
    slug: 'get-groups',
    title: '分页查询群组',
    endpoint: '/group/get_groups',
    summary: '后台分页查询群组，可按群名称或群 ID 过滤。',
    sample: {
      groupName: '产品',
      groupID: '',
      pagination: { pageNumber: 1, showNumber: 20 },
    },
    fields: [
      ...paginationFields,
      ['groupName', '否', 'string', '按群名称过滤。'],
      ['groupID', '否', 'string', '按群 ID 过滤。'],
    ],
    responseData: {
      total: 1,
      groups: [{ groupInfo, groupOwnerUserName: 'Owner', groupOwnerUserID: 'user_owner' }],
    },
    responseFields: [
      ['data.total', 'int', '符合条件的群组总数。'],
      ['data.groups', 'array', '后台群组列表，包含群资料和群主信息。'],
    ],
    sideEffects: '只读查询，不改变群组状态。',
    limits: [
      '`pagination` 必填，即使按 `groupID` 精确查询也需要传入。',
      '`pagination.pageNumber` 必须大于等于 1。',
    ],
  },
  {
    slug: 'get-group-member-user-ids',
    title: '获取群成员用户 ID',
    endpoint: '/group/get_group_member_user_id',
    summary: '获取指定群组内全部成员的用户 ID 列表。',
    sample: { groupID: 'group_001' },
    fields: [['groupID', '是', 'string', '目标群 ID。']],
    responseData: { userIDs: ['user_owner', 'user_001', 'user_002'] },
    responseFields: [['data.userIDs', 'array', '群成员用户 ID 列表。']],
    sideEffects: '只读查询，不改变成员状态。',
    limits: ['`groupID` 必填。'],
  },
  {
    slug: 'get-incremental-join-groups',
    title: '增量获取用户加入的群组',
    endpoint: '/group/get_incremental_join_groups',
    summary: '按版本号增量同步某个用户加入的群组列表。',
    sample: { userID: 'user_001', versionID: '', version: 0 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['versionID', '否', 'string', '上次同步返回的版本 ID，首次同步可为空。'],
      ['version', '否', 'int', '上次同步返回的版本号，首次同步可传 0。'],
    ],
    responseData: {
      version: 2,
      versionID: 'join_group_v2',
      full: false,
      delete: ['group_deleted'],
      insert: [groupInfo],
      update: [groupInfo],
      sortVersion: 2,
    },
    responseFields: [
      ['data.version', 'int', '新的同步版本号。'],
      ['data.versionID', 'string', '新的同步版本 ID。'],
      ['data.full', 'boolean', '是否需要按全量结果处理。'],
      ['data.delete', 'array', '本次删除的群 ID 列表。'],
      ['data.insert', 'array', '本次新增的群资料列表。'],
      ['data.update', 'array', '本次更新的群资料列表。'],
    ],
    sideEffects: '只读同步接口，不改变群组状态。',
    limits: ['`userID` 必填。', '客户端应保存返回的 `version` 和 `versionID` 用于下一次增量同步。'],
  },
  {
    slug: 'get-incremental-group-members',
    title: '增量获取群成员',
    endpoint: '/group/get_incremental_group_members',
    summary: '按版本号增量同步单个群组的成员列表。',
    sample: { groupID: 'group_001', versionID: '', version: 0 },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['versionID', '否', 'string', '上次同步返回的版本 ID，首次同步可为空。'],
      ['version', '否', 'int', '上次同步返回的版本号，首次同步可传 0。'],
    ],
    responseData: {
      version: 2,
      versionID: 'group_member_v2',
      full: false,
      delete: ['user_removed'],
      insert: [groupMember],
      update: [groupMember],
      group: groupInfo,
      sortVersion: 2,
    },
    responseFields: [
      ['data.version', 'int', '新的同步版本号。'],
      ['data.versionID', 'string', '新的同步版本 ID。'],
      ['data.full', 'boolean', '是否需要按全量结果处理。'],
      ['data.delete', 'array', '本次删除的成员用户 ID 列表。'],
      ['data.insert', 'array', '本次新增的成员资料列表。'],
      ['data.update', 'array', '本次更新的成员资料列表。'],
      ['data.group', 'object', '当前群资料。'],
    ],
    sideEffects: '只读同步接口，不改变成员状态。',
    limits: [
      '`groupID` 必填。',
      '客户端应保存返回的 `version` 和 `versionID` 用于下一次增量同步。',
    ],
  },
  {
    slug: 'batch-get-incremental-group-members',
    title: '批量增量获取群成员',
    endpoint: '/group/get_incremental_group_members_batch',
    summary: '一次请求中批量同步多个群组的成员增量。',
    sample: {
      userID: 'user_001',
      reqList: [
        { groupID: 'group_001', versionID: '', version: 0 },
        { groupID: 'group_002', versionID: '', version: 0 },
      ],
    },
    fields: [
      ['userID', '是', 'string', '发起同步的用户 ID。'],
      ['reqList', '是', 'array', '每个群组的增量同步请求列表。'],
      ['reqList.groupID', '是', 'string', '目标群 ID。'],
      ['reqList.versionID', '否', 'string', '上次同步返回的版本 ID。'],
      ['reqList.version', '否', 'int', '上次同步返回的版本号。'],
    ],
    responseData: {
      respList: {
        group_001: {
          version: 2,
          versionID: 'group_member_v2',
          full: false,
          delete: [],
          insert: [groupMember],
          update: [],
          group: groupInfo,
          sortVersion: 2,
        },
      },
    },
    responseFields: [['data.respList', 'object', '按群 ID 聚合的成员增量结果。']],
    sideEffects: '只读同步接口，不改变成员状态。',
    limits: ['`userID` 和 `reqList` 必填。', '每个 `reqList` 条目都需要包含 `groupID`。'],
  },
  {
    slug: 'get-full-group-member-user-ids',
    title: '全量获取群成员用户 ID',
    endpoint: '/group/get_full_group_member_user_ids',
    summary: '按哈希比较并全量获取指定群组的成员用户 ID 列表。',
    sample: { groupID: 'group_001', idHash: 0 },
    fields: [
      ['groupID', '是', 'string', '目标群 ID。'],
      ['idHash', '否', 'int', '客户端已缓存成员 ID 列表的哈希值；首次同步可传 0。'],
    ],
    responseData: {
      version: 2,
      versionID: 'full_member_v2',
      equal: false,
      userIDs: ['user_owner', 'user_001', 'user_002'],
    },
    responseFields: [
      ['data.version', 'int', '新的同步版本号。'],
      ['data.versionID', 'string', '新的同步版本 ID。'],
      ['data.equal', 'boolean', '服务端数据是否与客户端哈希一致。'],
      ['data.userIDs', 'array', '群成员用户 ID 列表。'],
    ],
    sideEffects: '只读同步接口，不改变成员状态。',
    limits: ['`groupID` 必填。'],
  },
  {
    slug: 'get-full-join-group-ids',
    title: '全量获取用户加入的群组 ID',
    endpoint: '/group/get_full_join_group_ids',
    summary: '按哈希比较并全量获取指定用户加入的群组 ID 列表。',
    sample: { userID: 'user_001', idHash: 0 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['idHash', '否', 'int', '客户端已缓存群组 ID 列表的哈希值；首次同步可传 0。'],
    ],
    responseData: {
      version: 2,
      versionID: 'full_join_group_v2',
      equal: false,
      groupIDs: ['group_001', 'group_002'],
    },
    responseFields: [
      ['data.version', 'int', '新的同步版本号。'],
      ['data.versionID', 'string', '新的同步版本 ID。'],
      ['data.equal', 'boolean', '服务端数据是否与客户端哈希一致。'],
      ['data.groupIDs', 'array', '用户加入的群组 ID 列表。'],
    ],
    sideEffects: '只读同步接口，不改变群组状态。',
    limits: ['`userID` 必填。'],
  },
  {
    slug: 'get-group-application-unhandled-count',
    title: '获取未处理入群申请数量',
    endpoint: '/group/get_group_application_unhandled_count',
    summary: '获取指定用户在某个时间点之后未处理的入群申请数量。',
    sample: { userID: 'user_owner', time: 1719800000000 },
    fields: [
      ['userID', '是', 'string', '群主或管理员用户 ID。'],
      ['time', '否', 'int', '毫秒时间戳，只统计该时间之后的未处理申请。'],
    ],
    responseData: { count: 3 },
    responseFields: [['data.count', 'int', '未处理申请数量。']],
    sideEffects: '只读查询，不改变申请状态。',
    limits: ['`userID` 必填。', '`time` 使用毫秒时间戳。'],
  },
];

const internalGroupApiSlugs = new Set([
  'get-incremental-join-groups',
  'get-incremental-group-members',
  'batch-get-incremental-group-members',
]);

validateGoGroupApiOrder();

const externalGroupApis = groupApis
  .filter((api) => !internalGroupApiSlugs.has(api.slug))
  .sort(compareByGoGroupApiOrder);
const omittedGroupApis = groupApis
  .filter((api) => internalGroupApiSlugs.has(api.slug))
  .sort(compareByGoGroupApiOrder);

await rm(resolve(root, contentRoot), { force: true, recursive: true });
await rm(resolve(root, zhContentRoot), { force: true, recursive: true });

const routesPath = resolve(root, 'src/generated/routes.json');
const navigationPath = resolve(root, 'src/generated/navigation.json');
const platformApiZhPath = resolve(root, 'src/generated/platform-api-zh-content.json');
const structurePath = resolve(root, 'data/structure/chat-pages.json');

const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const navigation = JSON.parse(await readFile(navigationPath, 'utf8'));
const platformApiZh = JSON.parse(await readFile(platformApiZhPath, 'utf8'));

const routesWithoutGroup = routes.filter((route) => !route.path.startsWith(`${localRoot}/`));
const maxSourceIndex = Math.max(...routesWithoutGroup.map((route) => route.sourceIndex ?? 0));
const maxNavOrder = Math.max(...routesWithoutGroup.map((route) => route.navOrder ?? 0));

const newRoutes = [];
for (const [index, spec] of externalGroupApis.entries()) {
  const path = `${localRoot}/${spec.slug}`;
  const relativePath = path.replace(/^\/docs\//, '');
  const contentFile = `${contentRoot}/${spec.slug}.mdx`;
  const record = {
    id: 0,
    path,
    relativePath,
    sourcePath: path,
    title: spec.title,
    description: `OpenIM 群组 REST API：${spec.title}。`,
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

const nextRoutes = [...routesWithoutGroup, ...newRoutes].map((route, index) => ({
  ...route,
  id: index + 1,
}));

const platformContext = navigation.contexts.find((context) => context.key === contextKey);
if (!platformContext) {
  throw new Error(`Missing navigation context: ${contextKey}`);
}

const groupNode = {
  id: 'group',
  segment: 'group',
  title: '群组',
  href: null,
  type: 'folder',
  children: newRoutes.map((route) => ({
    id: `group/${route.path.split('/').at(-1)}`,
    segment: route.path.split('/').at(-1),
    title: route.title,
    href: route.path,
    type: 'page',
    children: [],
    minIndex: route.navOrder,
  })),
  minIndex: newRoutes[0]?.navOrder ?? maxNavOrder + 1,
};

platformContext.nodes = platformContext.nodes.filter((node) => node.id !== 'group');
const friendIndex = platformContext.nodes.findIndex((node) => node.id === 'friend');
const channelIndex = platformContext.nodes.findIndex((node) => node.id === 'channel');
if (friendIndex >= 0) {
  platformContext.nodes.splice(friendIndex + 1, 0, groupNode);
} else if (channelIndex >= 0) {
  platformContext.nodes.splice(channelIndex + 1, 0, groupNode);
} else {
  platformContext.nodes.push(groupNode);
}
platformContext.pageCount = nextRoutes.filter((route) => route.contextKey === contextKey).length;

platformApiZh.generatedAt = today;
platformApiZh.navigationLabels = {
  ...platformApiZh.navigationLabels,
  group: '群组',
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
  `Wrote ${externalGroupApis.length} external OpenIM group API page(s); omitted ${omittedGroupApis.length} internal or duplicate route(s).`,
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

  return `使用 **${spec.title}** 从可信后端调用 OpenIM 群组 REST 接口。${spec.summary} 请先在[接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)中配置 API 地址和管理员 Token；接口参数通过请求头和 JSON 请求体传递。\n\n## HTTP 请求\n\n\`\`\`bash\nPOST {API_ADDRESS}${spec.endpoint}\n\`\`\`\n\n### 请求示例\n\n\`\`\`bash\ncurl --request POST "\${API_ADDRESS}${spec.endpoint}" \\\n  --header "Content-Type: application/json; charset=utf-8" \\\n  --header "operationID: \${OPERATION_ID}" \\\n  --header "token: \${ADMIN_TOKEN}" \\\n  --data-raw '${json(spec.sample)}'\n\`\`\`\n\n> 安全提示：管理员 Token 只能保存在可信后端服务中，不能下发到客户端或写入前端代码。客户端登录应使用服务端签发的用户 Token。\n\n## 参数\n\n此接口通过请求头传入链路追踪信息和鉴权凭证，通过 JSON 请求体传递业务参数。\n\n### 请求头\n\n${renderTable(['Header', '是否必填', '类型', '说明'], commonHeaders)}\n\n## 请求体\n\n\`\`\`json\n${json(spec.sample)}\n\`\`\`\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.fields)}\n\n## 响应\n\n请求被 OpenIM 正常处理时通常返回 \`200 OK\`。业务是否成功以响应体中的 \`errCode\` 为准；\`errCode === 0\` 表示成功，非 0 表示业务错误。\n\n\`\`\`json\n${json(success)}\n\`\`\`\n\n### 响应参数\n\n${renderTable(['参数名', '类型', '说明'], responseFields)}\n\n### 错误\n\n如果请求失败，OpenIM 返回错误对象。更多错误码说明见[错误码](/docs/chat/platform-api/v3/error-codes)。\n\n\`\`\`json\n${json({ errCode: 1004, errMsg: 'RecordNotFoundError', errDlt: ': [1004]RecordNotFoundError' })}\n\`\`\`\n\n| 错误场景 | 可能原因 | 处理方式 |\n| -------- | -------- | -------- |\n| 鉴权失败 | \`token\` 缺失、过期，或不是可调用管理端接口的管理员 Token。 | 重新获取 APP 管理员 Token，并只在可信后端保存。 |\n| 链路追踪困难 | \`operationID\` 缺失或在大量请求中重复使用。 | 为每次请求生成独立 \`operationID\`，并在服务端日志中保留。 |\n| 参数校验失败 | 请求体字段类型、必填字段或枚举值不符合接口要求。 | 对照请求体参数表和限制说明检查字段。 |\n\n## 权限和限制\n\n- ${spec.sideEffects}\n${spec.limits.map((item) => `- ${item}`).join('\n')}\n- 所有数组型请求参数建议控制在 1000 个元素以内。\n\n## 相关页面\n\n- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)\n- [群组接口](/docs/chat/platform-api/v3/group/overview)\n- [关系概述](/docs/chat/platform-api/v3/relation/overview)\n- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

function renderFrontmatter(values) {
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
}

function validateGoGroupApiOrder() {
  const endpoints = new Set(groupApis.map((api) => api.endpoint));
  const missingOrder = [...endpoints].filter((endpoint) => !goGroupApiOrderIndex.has(endpoint));
  if (missingOrder.length > 0) {
    throw new Error(`Missing Go group API order for: ${missingOrder.join(', ')}`);
  }
}

function compareByGoGroupApiOrder(a, b) {
  return goGroupApiOrderIndex.get(a.endpoint) - goGroupApiOrderIndex.get(b.endpoint);
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
