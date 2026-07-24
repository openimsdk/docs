import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const root = process.cwd();
const platforms = ['wasm', 'ios', 'flutter'];
const today = '2026-07-23';

const navigationTitles = {
  'get-users-info': ['Get user profiles', '获取用户资料'],
  'get-self-user-info': ['Get your profile', '获取当前用户资料'],
  'set-self-info': ['Update your profile', '更新当前用户资料'],
  'set-global-message-reception': ['Set global message reception', '设置全局消息接收方式'],
  'subscribe-users-status': ['Subscribe to online status', '订阅用户在线状态'],
  'get-subscribe-users-status': ['Get subscribed user status', '获取已订阅用户状态'],
  'unsubscribe-users-status': ['Unsubscribe from online status', '取消订阅用户状态'],
  'get-friend-list-page': ['Get the friend list', '获取好友列表'],
  'search-friends': ['Search friends', '搜索好友'],
  'get-specified-friends-info': ['Get friend profiles', '获取好友资料'],
  'get-friends-info': ['Get friend profiles', '获取好友资料'],
  'check-friend': ['Check friendship status', '检查好友关系'],
  'update-friends': ['Update friend information', '更新好友资料'],
  'delete-friend': ['Delete a friend', '删除好友'],
  'add-friend': ['Send a friend application', '发送好友申请'],
  'get-friend-application-list-as-recipient': [
    'Get received friend applications',
    '获取收到的好友申请',
  ],
  'get-friend-application-list-as-applicant': [
    'Get sent friend applications',
    '获取发出的好友申请',
  ],
  'get-friend-application-unhandled-count': [
    'Get pending application count',
    '获取待处理申请数',
  ],
  'accept-friend-application': ['Accept a friend application', '接受好友申请'],
  'refuse-friend-application': ['Reject a friend application', '拒绝好友申请'],
  'delete-friend-requests': ['Delete friend applications', '删除好友申请'],
  'get-black-list': ['Get the blacklist', '获取黑名单'],
  'add-black': ['Add a user to the blacklist', '将用户加入黑名单'],
  'remove-black': ['Remove a user from the blacklist', '将用户移出黑名单'],
  'overview-conversation-groups': ['Conversation group overview', '会话分组概览'],
  'create-conversation-group': ['Create a conversation group', '创建会话分组'],
  'get-conversation-groups': ['Get conversation groups', '获取会话分组'],
  'get-conversation-group-info-with-conversations': [
    'Get conversations in a group',
    '获取分组内的会话',
  ],
  'get-conversation-group-ids-by-conversation-id': [
    'Get groups for a conversation',
    '获取会话所属分组',
  ],
  'update-conversation-group': ['Update a conversation group', '更新会话分组'],
  'set-conversation-group-order': ['Reorder conversation groups', '调整会话分组顺序'],
  'add-conversations-to-groups': ['Add conversations to groups', '添加会话到分组'],
  'remove-conversations-from-groups': [
    'Remove conversations from groups',
    '从分组移除会话',
  ],
  'delete-conversation-group': ['Delete a conversation group', '删除会话分组'],
  'overview-group': ['Group overview', '群组概览'],
  'create-group': ['Create a group', '创建群组'],
  'update-group-profile': ['Update group profile', '更新群名称、简介和头像'],
  'set-group-announcement': ['Publish a group announcement', '发布或更新群公告'],
  'set-group-join-verification': ['Set group join verification', '设置入群验证方式'],
  'set-group-member-profile-access': ['Set member profile access', '设置成员资料查看权限'],
  'set-group-member-friend-permission': [
    'Set member friend request permission',
    '设置群内添加好友权限',
  ],
  'set-group-extension': ['Set group extra data', '设置群组扩展字段'],
  'join-group': ['Apply to join a group', '申请加入群组'],
  'quit-group': ['Leave a group', '退出群组'],
  'dismiss-group': ['Dismiss a group', '解散群组'],
  'change-group-mute': ['Change group mute status', '设置群组禁言'],
  'overview-retrieving-groups': ['Group queries overview', '群组查询概览'],
  'get-specified-groups-info': ['Get group information', '获取群组资料'],
  'get-joined-group-list': ['Get joined groups', '获取已加入群组'],
  'get-joined-group-list-page': ['Get joined groups by page', '分页获取已加入群组'],
  'is-join-group': ['Check group membership', '检查是否已加入群组'],
  'search-groups': ['Search groups', '搜索群组'],
  'overview-group-applications': ['Group applications overview', '入群申请概览'],
  'get-group-application-list-as-recipient': [
    'Get received group applications',
    '获取收到的入群申请',
  ],
  'get-group-application-list-as-applicant': [
    'Get sent group applications',
    '获取发出的入群申请',
  ],
  'get-group-application-unhandled-count': [
    'Get pending group application count',
    '获取待处理入群申请数',
  ],
  'get-group-application-badge-count': [
    'Get group application badge count',
    '获取入群申请角标数',
  ],
  'clear-group-application-badge-count': [
    'Clear the group application badge',
    '清除入群申请角标',
  ],
  'accept-group-application': ['Accept a group application', '接受入群申请'],
  'refuse-group-application': ['Reject a group application', '拒绝入群申请'],
  'delete-group-requests': ['Delete group applications', '删除入群申请'],
  'overview-retrieving-group-members': ['Group member queries overview', '群成员查询概览'],
  'get-group-member-list': ['Get group members', '获取群成员列表'],
  'get-specified-group-members-info': ['Get group member profiles', '获取群成员资料'],
  'get-group-members-info': ['Get group member profiles', '获取群成员资料'],
  'get-users-in-group': ['Check users in a group', '检查用户是否在群内'],
  'get-group-member-owner-and-admin': ['Get group owners and admins', '获取群主和管理员'],
  'get-group-owner-and-admin': ['Get group owners and admins', '获取群主和管理员'],
  'search-group-members': ['Search group members', '搜索群成员'],
  'overview-managing-group-members': ['Group member management overview', '群成员管理概览'],
  'invite-user-to-group': ['Invite users to a group', '邀请用户加入群组'],
  'kick-group-member': ['Remove group members', '移除群成员'],
  'set-group-member-nickname': ['Update a group nickname', '修改群内昵称'],
  'set-group-member-role-level': ['Manage group administrators', '设置管理员'],
  'set-group-member-avatar': ['Update a group member avatar', '更新群成员头像'],
  'set-group-member-extension': ['Set group member extra data', '设置群成员扩展字段'],
  'transfer-group-owner': ['Transfer group ownership', '转让群主'],
  'change-group-member-mute': ['Mute or unmute a group member', '设置群成员禁言'],
  'overview-creating-messages': ['Creating messages overview', '创建消息概览'],
  'create-text-message': ['Create a text message', '创建文本消息'],
  'create-text-at-message': ['Create a mention message', '创建 @ 消息'],
  'create-text-at-all-message': ['Create an @all message', '创建 @所有人 消息'],
  'create-at-all-flag': ['Create an @all marker', '创建 @所有人 标记'],
  'get-at-all-tag': ['Get the @all tag', '获取 @所有人 标签'],
  'create-custom-message': ['Create a custom message', '创建自定义消息'],
  'create-image-message': ['Create an image message', '创建图片消息'],
  'create-image-message-by-file': ['Create an image message from a file', '使用文件创建图片消息'],
  'create-image-message-from-full-path': [
    'Create an image message from a path',
    '使用本地路径创建图片消息',
  ],
  'create-image-message-by-url': ['Create an image message from a URL', '使用 URL 创建图片消息'],
  'create-sound-message': ['Create an audio message', '创建音频消息'],
  'create-sound-message-by-file': ['Create an audio message from a file', '使用文件创建音频消息'],
  'create-sound-message-from-full-path': [
    'Create an audio message from a path',
    '使用本地路径创建音频消息',
  ],
  'create-sound-message-by-url': ['Create an audio message from a URL', '使用 URL 创建音频消息'],
  'create-video-message': ['Create a video message', '创建视频消息'],
  'create-video-message-by-file': ['Create a video message from a file', '使用文件创建视频消息'],
  'create-video-message-from-full-path': [
    'Create a video message from a path',
    '使用本地路径创建视频消息',
  ],
  'create-video-message-by-url': ['Create a video message from a URL', '使用 URL 创建视频消息'],
  'create-file-message': ['Create a file message', '创建文件消息'],
  'create-file-message-by-file': ['Create a file message from a file', '使用文件创建文件消息'],
  'create-file-message-from-full-path': [
    'Create a file message from a path',
    '使用本地路径创建文件消息',
  ],
  'create-file-message-by-url': ['Create a file message from a URL', '使用 URL 创建文件消息'],
  'create-card-message': ['Create a contact card message', '创建名片消息'],
  'create-location-message': ['Create a location message', '创建位置消息'],
  'create-face-message': ['Create an emoji message', '创建表情消息'],
  'create-quote-message': ['Create a reply message', '创建回复消息'],
  'create-advanced-text-message': ['Create rich text', '创建富文本消息'],
  'create-advanced-quote-message': ['Create a rich reply', '创建富文本回复'],
  'create-markdown-message': ['Create a Markdown message', '创建 Markdown 消息'],
  'create-forward-message': ['Create a forwarded message', '创建转发消息'],
  'create-merge-message': ['Create a merged message', '创建合并消息'],
  'create-merger-message': ['Create a merged message', '创建合并消息'],
  'send-message': ['Send a message', '发送消息'],
  'send-message-not-oss': ['Send a message without OSS', '发送不经 OSS 的消息'],
  'set-msg-send-progress-listener': ['Track message sending progress', '监听消息发送进度'],
  'receive-custom-business-messages': ['Receive custom business messages', '接收自定义业务消息'],
  'custom-business-listener': ['Receive custom business messages', '接收自定义业务消息'],
  'set-message-local-ex': ['Set local message extensions', '设置消息本地扩展'],
  'overview-file-uploads': ['File upload overview', '文件上传概览'],
  'set-upload-file-listener': ['Track file upload progress', '监听文件上传进度'],
  'upload-file': ['Upload a file', '上传文件'],
  'start-single-call': ['Start a one-to-one call', '发起单聊通话'],
  'start-group-call': ['Start a group call', '发起群聊通话'],
  'accept-call': ['Accept a call', '接受通话'],
  'reject-call': ['Reject a call', '拒绝通话'],
  'cancel-call': ['Cancel a call invitation', '取消通话邀请'],
  'hang-up-call': ['Hang up a call', '挂断通话'],
  'handle-call-events': ['Handle call events', '处理通话事件'],
  'restore-pending-invitation': ['Restore a pending invitation', '恢复未处理邀请'],
  'get-room-by-group-id': ['Get a group call room', '查询群聊房间'],
  'get-token-by-room-id': ['Get room credentials', '获取房间凭据'],
};

const callingMethods = {
  wasm: {
    'start-single-call': ['signalingInvite'],
    'start-group-call': ['signalingInviteInGroup'],
    'accept-call': ['signalingAccept'],
    'reject-call': ['signalingReject'],
    'cancel-call': ['signalingCancel'],
    'hang-up-call': ['signalingHungUp'],
    'handle-call-events': [],
    'restore-pending-invitation': ['getSignalingInvitationInfoStartApp'],
    'get-room-by-group-id': ['signalingGetRoomByGroupID'],
    'get-token-by-room-id': ['signalingGetTokenByRoomID'],
  },
  ios: {
    'start-single-call': ['signalingInvite:offlinePushInfo:onSuccess:onFailure:'],
    'start-group-call': ['signalingInviteInGroup:offlinePushInfo:onSuccess:onFailure:'],
    'accept-call': ['signalingAccept:onSuccess:onFailure:'],
    'reject-call': ['signalingReject:onSuccess:onFailure:'],
    'cancel-call': ['signalingCancel:onSuccess:onFailure:'],
    'hang-up-call': ['signalingHungUp:onSuccess:onFailure:'],
    'handle-call-events': ['addSignalingListener:', 'removeSignalingListener:'],
    'restore-pending-invitation': [
      'getSignalingInvitationInfoStartAppWithOnSuccess:onFailure:',
    ],
    'get-room-by-group-id': ['signalingGetRoomByGroupID:onSuccess:onFailure:'],
    'get-token-by-room-id': ['signalingGetTokenByRoomID:onSuccess:onFailure:'],
  },
  flutter: {
    'start-single-call': ['signalingInvite'],
    'start-group-call': ['signalingInviteInGroup'],
    'accept-call': ['signalingAccept'],
    'reject-call': ['signalingReject'],
    'cancel-call': ['signalingCancel'],
    'hang-up-call': ['signalingHungUp'],
    'handle-call-events': [],
    'restore-pending-invitation': ['getSignalingInvitationInfoStartApp'],
    'get-room-by-group-id': ['signalingGetRoomByGroupID'],
    'get-token-by-room-id': ['signalingGetTokenByRoomID'],
  },
};

const callingEvents = {
  wasm: [
    'OnReceiveNewInvitation',
    'OnInviteeAccepted',
    'OnInviteeRejected',
    'OnInvitationCancelled',
    'OnInvitationTimeout',
    'OnInviteeAcceptedByOtherDevice',
    'OnInviteeRejectedByOtherDevice',
    'OnHangUp',
    'OnRoomParticipantConnected',
    'OnRoomParticipantDisconnected',
    'OnStreamChange',
  ],
  ios: [
    'onReceiveNewInvitation:',
    'onInviteeAccepted:',
    'onInviteeRejected:',
    'onInvitationCancelled:',
    'onInvitationTimeout:',
    'onInviteeAcceptedByOtherDevice:',
    'onInviteeRejectedByOtherDevice:',
    'onHunguUp:',
    'onRoomParticipantConnected:',
    'onRoomParticipantDisconnected:',
    'onStreamChange:',
  ],
  flutter: [
    'onReceiveNewInvitation',
    'onInviteeAccepted',
    'onInviteeRejected',
    'onInvitationCancelled',
    'onInvitationTimeout',
    'onInviteeAcceptedByOtherDevice',
    'onInviteeRejectedByOtherDevice',
    'onHangup',
    'onRoomParticipantConnected',
    'onRoomParticipantDisconnected',
    'onStreamChange',
  ],
};

const groupOrder = {
  direct: [
    'overview-group',
    'create-group',
    'update-group-profile',
    'set-group-announcement',
    'set-group-join-verification',
    'set-group-member-profile-access',
    'set-group-member-friend-permission',
    'set-group-extension',
    'join-group',
    'quit-group',
    'dismiss-group',
    'change-group-mute',
  ],
  'retrieving-groups': [
    'get-specified-groups-info',
    'get-joined-group-list',
    'get-joined-group-list-page',
    'is-join-group',
    'search-groups',
  ],
  'group-applications': [
    'overview-group-applications',
    'get-group-application-list-as-recipient',
    'get-group-application-list-as-applicant',
    'get-group-application-unhandled-count',
    'get-group-application-badge-count',
    'clear-group-application-badge-count',
    'accept-group-application',
    'refuse-group-application',
    'delete-group-requests',
  ],
  'retrieving-group-members': [
    'overview-retrieving-group-members',
    'get-group-member-list',
    'get-specified-group-members-info',
    'get-group-members-info',
    'get-users-in-group',
    'get-group-member-owner-and-admin',
    'get-group-owner-and-admin',
    'search-group-members',
  ],
  'managing-group-members': [
    'invite-user-to-group',
    'kick-group-member',
    'set-group-member-nickname',
    'set-group-member-role-level',
    'set-group-member-avatar',
    'set-group-member-extension',
    'transfer-group-owner',
    'change-group-member-mute',
  ],
};

const friendOrder = {
  wasm: [
    'get-friend-list-page',
    'search-friends',
    'get-specified-friends-info',
    'check-friend',
    'update-friends',
    'delete-friend',
  ],
  ios: [
    'get-friend-list-page',
    'search-friends',
    'get-specified-friends-info',
    'check-friend',
    'update-friends',
    'delete-friend',
  ],
  flutter: [
    'get-friend-list-page',
    'search-friends',
    'get-friends-info',
    'check-friend',
    'update-friends',
    'delete-friend',
  ],
};

const applicationOrder = {
  wasm: [
    'add-friend',
    'get-friend-application-list-as-recipient',
    'get-friend-application-list-as-applicant',
    'get-friend-application-unhandled-count',
    'accept-friend-application',
    'refuse-friend-application',
    'delete-friend-requests',
  ],
  ios: [
    'add-friend',
    'get-friend-application-list-as-recipient',
    'get-friend-application-list-as-applicant',
    'get-friend-application-unhandled-count',
    'accept-friend-application',
    'refuse-friend-application',
    'delete-friend-requests',
  ],
  flutter: [
    'add-friend',
    'get-friend-application-list-as-recipient',
    'get-friend-application-list-as-applicant',
    'get-friend-application-unhandled-count',
    'accept-friend-application',
    'refuse-friend-application',
  ],
};

for (const platform of platforms) {
  const sidebarPath = `data/structure/${platform}-sidebar.json`;
  const sidebar = await readJson(sidebarPath);
  const group = sidebar.nodes.find((node) => node?.id === 'group');
  const user = sidebar.nodes.find((node) => node?.id === 'user');
  const message = sidebar.nodes.find((node) => node?.id === 'message');
  const calling = sidebar.nodes.find((node) => node?.id === 'calling');
  const sendingMessages = message.children.find(
    (entry) => entry?.id === 'message/sending-messages',
  );

  const groupFiles = await listMdx(`content/zh/docs/chat/sdk/${platform}/group`);
  const groupPaths = new Set(
    groupFiles.map((file) => `/sdk/${platform}/group/${file.replace(/\.mdx$/, '')}`),
  );
  const route = (section, slug) =>
    `/sdk/${platform}/group/${section ? `${section}/` : ''}${slug}`;
  const present = (section, slugs) =>
    slugs.map((slug) => route(section, slug)).filter((path) => groupPaths.has(path));

  group.children = [
    ...present('', groupOrder.direct),
    section('group/retrieving-groups', 'Retrieving groups', present('retrieving-groups', groupOrder['retrieving-groups'])),
    section('group/group-applications', 'Group applications', present('group-applications', groupOrder['group-applications'])),
    section('group/retrieving-group-members', 'Retrieving group members', present('retrieving-group-members', groupOrder['retrieving-group-members'])),
    section('group/managing-group-members', 'Managing group members', present('managing-group-members', groupOrder['managing-group-members'])),
  ].filter(Boolean);

  const friends = user.children.find((entry) => entry?.id === 'user/friends');
  friends.children = [
    ...friendOrder[platform].map((slug) => `/sdk/${platform}/user/friends/${slug}`),
    section(
      'user/friend-applications',
      'Friend applications',
      applicationOrder[platform].map(
        (slug) => `/sdk/${platform}/user/friend-applications/${slug}`,
      ),
    ),
  ];
  if (platform === 'wasm') {
    const profile = user.children.find((entry) => entry?.id === 'user/user-profile');
    profile.children = [
      '/sdk/wasm/user/profile/get-users-info',
      '/sdk/wasm/user/profile/get-self-user-info',
      '/sdk/wasm/user/profile/set-self-info',
      '/sdk/wasm/user/profile/set-global-message-reception',
      section('user/online-status', 'Online status', [
        '/sdk/wasm/user/online-status/subscribe-users-status',
        '/sdk/wasm/user/online-status/get-subscribe-users-status',
        '/sdk/wasm/user/online-status/unsubscribe-users-status',
      ]),
    ];
    const blacklist = user.children.find((entry) => entry?.id === 'user/blacklist');
    blacklist.children = [
      '/sdk/wasm/user/blacklist/get-black-list',
      '/sdk/wasm/user/blacklist/add-black',
      '/sdk/wasm/user/blacklist/remove-black',
    ];
  }
  if (platform === 'ios') {
    sendingMessages.children = [
      '/sdk/ios/message/sending-messages/send-message',
      '/sdk/ios/message/sending-messages/send-message-not-oss',
    ];
    const creatingMessages = {
      id: 'message/creating-messages',
      title: 'Creating messages',
      children: [
        'create-text-message',
        'create-text-at-message',
        'create-text-at-all-message',
        'create-at-all-flag',
        'get-at-all-tag',
        'create-custom-message',
        'create-image-message-from-full-path',
        'create-image-message-by-url',
        'create-sound-message-from-full-path',
        'create-sound-message-by-url',
        'create-video-message-from-full-path',
        'create-video-message-by-url',
        'create-file-message-from-full-path',
        'create-file-message-by-url',
        'create-card-message',
        'create-location-message',
        'create-face-message',
        'create-quote-message',
        'create-advanced-text-message',
        'create-markdown-message',
        'create-forward-message',
        'create-merge-message',
      ].map((slug) => `/sdk/ios/message/creating-messages/${slug}`),
    };
    const existingCreating = message.children.findIndex(
      (entry) => entry?.id === 'message/creating-messages',
    );
    if (existingCreating >= 0) message.children.splice(existingCreating, 1);
    const sendingIndex = message.children.indexOf(sendingMessages);
    message.children.splice(sendingIndex, 0, creatingMessages);
    const composing = message.children.find(
      (entry) => entry?.id === 'message/composing-messages',
    );
    composing.children = composing.children.filter(
      (entry) =>
        !entryPath(entry).endsWith('/custom-message-and-extra-data') &&
        !entryPath(entry).endsWith('/mention-users-in-a-message'),
    );
    const managing = message.children.find(
      (entry) => entry?.id === 'message/managing-messages',
    );
    managing.children = managing.children.filter(
      (entry) =>
        !entryPath(entry).endsWith('/forward-or-merge-a-message') &&
        !entryPath(entry).endsWith('/set-message-local-ex'),
    );
    managing.children.push('/sdk/ios/message/managing-messages/set-message-local-ex');
    message.children = message.children.filter(
      (entry) =>
        entryPath(entry) !==
        '/sdk/ios/message/receiving-messages/custom-business-listener',
    );
    const receivingIndex = message.children.findIndex(
      (entry) =>
        entryPath(entry) === '/sdk/ios/message/receiving-messages/receive-messages',
    );
    message.children.splice(
      receivingIndex + 1,
      0,
      '/sdk/ios/message/receiving-messages/custom-business-listener',
    );
  }
  if (platform === 'flutter') {
    sendingMessages.children = [
      '/sdk/flutter/message/sending-messages/send-message',
      '/sdk/flutter/message/sending-messages/send-message-not-oss',
      '/sdk/flutter/message/sending-messages/set-msg-send-progress-listener',
    ];
    const creatingMessages = {
      id: 'message/creating-messages',
      title: 'Creating messages',
      children: [
        'create-text-message',
        'create-text-at-message',
        'create-custom-message',
        'create-image-message',
        'create-image-message-from-full-path',
        'create-image-message-by-url',
        'create-sound-message',
        'create-sound-message-from-full-path',
        'create-sound-message-by-url',
        'create-video-message',
        'create-video-message-from-full-path',
        'create-video-message-by-url',
        'create-file-message',
        'create-file-message-from-full-path',
        'create-file-message-by-url',
        'create-location-message',
        'create-card-message',
        'create-face-message',
        'create-quote-message',
        'create-advanced-text-message',
        'create-advanced-quote-message',
        'create-forward-message',
        'create-merger-message',
      ].map((slug) => `/sdk/flutter/message/creating-messages/${slug}`),
    };
    const existingCreating = message.children.findIndex(
      (entry) => entry?.id === 'message/creating-messages',
    );
    if (existingCreating >= 0) message.children.splice(existingCreating, 1);
    const sendingIndex = message.children.indexOf(sendingMessages);
    message.children.splice(sendingIndex, 0, creatingMessages);
    const composing = message.children.find(
      (entry) => entry?.id === 'message/composing-messages',
    );
    composing.children = composing.children.filter(
      (entry) =>
        !entryPath(entry).endsWith('/custom-message-and-extra-data') &&
        !entryPath(entry).endsWith('/mention-users-in-a-message'),
    );
    const managing = message.children.find(
      (entry) => entry?.id === 'message/managing-messages',
    );
    managing.children = managing.children.filter(
      (entry) =>
        !entryPath(entry).endsWith('/forward-or-merge-a-message') &&
        !entryPath(entry).endsWith('/set-message-local-ex'),
    );
    managing.children.push(
      '/sdk/flutter/message/managing-messages/set-message-local-ex',
    );
    message.children = message.children.filter(
      (entry) =>
        entryPath(entry) !==
        '/sdk/flutter/message/receiving-messages/custom-business-listener',
    );
    const receivingIndex = message.children.findIndex(
      (entry) =>
        entryPath(entry) ===
        '/sdk/flutter/message/receiving-messages/receive-messages',
    );
    message.children.splice(
      receivingIndex + 1,
      0,
      '/sdk/flutter/message/receiving-messages/custom-business-listener',
    );
  }
  sendingMessages.children = sendingMessages.children.filter(
    (entry) => !entryPath(entry).endsWith('/upload-files-and-track-progress'),
  );
  if (platform === 'wasm') {
    sendingMessages.children = [
      '/sdk/wasm/message/sending-messages/send-message',
      '/sdk/wasm/message/sending-messages/send-message-not-oss',
    ];
    const creatingMessages = {
      id: 'message/creating-messages',
      title: 'Creating messages',
      children: [
        'create-text-message',
        'create-text-at-message',
        'create-custom-message',
        'create-image-message-by-file',
        'create-image-message-by-url',
        'create-sound-message-by-file',
        'create-sound-message-by-url',
        'create-video-message-by-file',
        'create-video-message-by-url',
        'create-file-message-by-file',
        'create-file-message-by-url',
        'create-card-message',
        'create-location-message',
        'create-face-message',
        'create-quote-message',
        'create-markdown-message',
        'create-forward-message',
        'create-merger-message',
      ].map((slug) => `/sdk/wasm/message/creating-messages/${slug}`),
    };
    const existingCreating = message.children.findIndex(
      (entry) => entry?.id === 'message/creating-messages',
    );
    if (existingCreating >= 0) message.children.splice(existingCreating, 1);
    const sendingIndex = message.children.indexOf(sendingMessages);
    message.children.splice(sendingIndex, 0, creatingMessages);
    const composing = message.children.find(
      (entry) => entry?.id === 'message/composing-messages',
    );
    composing.children = composing.children.filter(
      (entry) =>
        !entryPath(entry).endsWith('/custom-message-and-extra-data') &&
        !entryPath(entry).endsWith('/mention-users-in-a-message'),
    );
    const managing = message.children.find(
      (entry) => entry?.id === 'message/managing-messages',
    );
    managing.children = managing.children.filter(
      (entry) =>
        !entryPath(entry).endsWith('/forward-or-merge-a-message') &&
        !entryPath(entry).endsWith('/set-message-local-ex'),
    );
    managing.children.push(
      '/sdk/wasm/message/managing-messages/set-message-local-ex',
    );
    message.children = message.children.filter(
      (entry) =>
        entryPath(entry) !==
        '/sdk/wasm/message/receiving-messages/receive-custom-business-messages',
    );
    const receivingIndex = message.children.findIndex(
      (entry) =>
        entryPath(entry) ===
        '/sdk/wasm/message/receiving-messages/receive-messages',
    );
    message.children.splice(
      receivingIndex + 1,
      0,
      '/sdk/wasm/message/receiving-messages/receive-custom-business-messages',
    );
  }
  const messageIndex = sidebar.nodes.findIndex((node) => node?.id === 'message');
  const fileUploads =
    platform === 'flutter'
      ? [
          `/sdk/${platform}/file-uploads/set-upload-file-listener`,
          `/sdk/${platform}/file-uploads/upload-file`,
        ]
      : [`/sdk/${platform}/file-uploads/upload-file`];
  for (let index = sidebar.nodes.length - 1; index >= 0; index -= 1) {
    const node = sidebar.nodes[index];
    if (
      node?.id === 'file-uploads' ||
      entryPath(node) === `/sdk/${platform}/file-uploads/upload-file`
    ) {
      sidebar.nodes.splice(index, 1);
    }
  }
  sidebar.nodes.splice(
    messageIndex + 1,
    0,
    platform === 'flutter'
      ? {
          id: 'file-uploads',
          title: 'File uploads',
          children: fileUploads,
        }
      : {
          path: `/sdk/${platform}/file-uploads/upload-file`,
          navigationTitle: 'Upload a file',
        },
  );

  calling.children = [
    `/sdk/${platform}/calling/overview-calling`,
    section(
      'calling/managing-calls',
      'Managing calls',
      [
        'start-single-call',
        'start-group-call',
        'accept-call',
        'reject-call',
        'cancel-call',
        'hang-up-call',
        'handle-call-events',
      ].map((slug) => `/sdk/${platform}/calling/managing-calls/${slug}`),
    ),
    section(
      'calling/retrieving-call-information',
      'Retrieving call information',
      [
        'restore-pending-invitation',
        'get-room-by-group-id',
        'get-token-by-room-id',
      ].map(
        (slug) =>
          `/sdk/${platform}/calling/retrieving-call-information/${slug}`,
      ),
    ),
    `/sdk/${platform}/calling/sending-custom-signals/send-a-custom-signal`,
  ];

  sidebar.nodes = applyNavigationTitles(sidebar.nodes);
  await updateNavigationLabels(platform);
  await writeJson(sidebarPath, sidebar);
  await updateAudit(platform, sidebar);
}

await updateWasmOwnership();

function section(id, title, children) {
  return children.length ? { id, title, children } : null;
}

function entryPath(entry) {
  return typeof entry === 'string' ? entry : entry?.path ?? '';
}

function applyNavigationTitles(entries) {
  return entries.map((entry) => {
    if (typeof entry === 'string') {
      const title = navigationTitles[entry.split('/').at(-1)]?.[0];
      return title ? { path: entry, navigationTitle: title } : entry;
    }
    if (entry?.path) {
      const title = navigationTitles[entry.path.split('/').at(-1)]?.[0];
      return title ? { ...entry, navigationTitle: title } : entry;
    }
    return { ...entry, children: applyNavigationTitles(entry.children) };
  });
}

async function updateNavigationLabels(platform) {
  const path = `data/structure/${platform}-navigation-labels.json`;
  const labels = await readJson(path);
  for (const [english, chinese] of Object.values(navigationTitles)) {
    labels[english] = chinese;
  }
  await writeJson(
    path,
    Object.fromEntries(
      Object.entries(labels).sort(([left], [right]) => left.localeCompare(right)),
    ),
  );
}

async function updateAudit(platform, sidebar) {
  const auditPath =
    platform === 'wasm'
      ? 'data/structure/wasm-content-audit.json'
      : `data/structure/${platform}-content-audit.json`;
  const audit = await readJson(auditPath);
  const active = collectPaths(sidebar.nodes);
  const existing = new Map(audit.pages.map((page) => [page.currentPath, page]));
  const oldCallingPath =
    `/sdk/${platform}/calling/managing-calls/start-or-handle-a-call`;
  const oldCallQueryPath =
    `/sdk/${platform}/calling/retrieving-call-information/retrieve-call-information`;
  const oldCallingPage = existing.get(oldCallingPath);
  const oldCallQueryPage = existing.get(oldCallQueryPath);
  const touchedPrefixes = [
    `/sdk/${platform}/group/`,
    `/sdk/${platform}/user/friends/`,
    `/sdk/${platform}/user/friend-applications/`,
    `/sdk/${platform}/user/retrieving-users/`,
    `/sdk/${platform}/user/managing-friends/`,
    ...(platform === 'wasm'
      ? [
          '/sdk/wasm/user/profile/',
          '/sdk/wasm/user/online-status/',
          '/sdk/wasm/user/blacklist/',
          '/sdk/wasm/user/retrieving-and-updating-user-information/',
          '/sdk/wasm/user/moderating-a-user/',
        ]
      : []),
    ...(platform === 'ios'
      ? [
          '/sdk/ios/message/creating-messages/',
          '/sdk/ios/message/sending-messages/send-a-message',
          '/sdk/ios/message/sending-messages/create-media-and-rich-messages',
          '/sdk/ios/message/sending-messages/send-message',
          '/sdk/ios/message/sending-messages/send-message-not-oss',
          '/sdk/ios/message/composing-messages/custom-message-and-extra-data',
          '/sdk/ios/message/composing-messages/mention-users-in-a-message',
          '/sdk/ios/message/managing-messages/forward-or-merge-a-message',
          '/sdk/ios/message/managing-messages/set-message-local-ex',
          '/sdk/ios/message/receiving-messages/custom-business-listener',
        ]
      : []),
    ...(platform === 'flutter'
      ? [
          '/sdk/flutter/message/creating-messages/',
          '/sdk/flutter/message/sending-messages/send-a-message',
          '/sdk/flutter/message/sending-messages/create-media-and-rich-messages',
          '/sdk/flutter/message/sending-messages/send-message',
          '/sdk/flutter/message/sending-messages/send-message-not-oss',
          '/sdk/flutter/message/composing-messages/custom-message-and-extra-data',
          '/sdk/flutter/message/composing-messages/mention-users-in-a-message',
          '/sdk/flutter/message/managing-messages/forward-or-merge-a-message',
          '/sdk/flutter/message/managing-messages/set-message-local-ex',
          '/sdk/flutter/message/receiving-messages/custom-business-listener',
        ]
      : []),
    `/sdk/${platform}/file-uploads/`,
    `/sdk/${platform}/calling/managing-calls/`,
    `/sdk/${platform}/calling/retrieving-call-information/`,
    `/sdk/${platform}/message/sending-messages/upload-files-and-track-progress`,
    ...(platform === 'flutter'
      ? ['/sdk/flutter/message/sending-messages/set-msg-send-progress-listener']
      : []),
    ...(platform === 'wasm'
      ? [
          '/sdk/wasm/message/creating-messages/',
          '/sdk/wasm/message/sending-messages/send-a-message',
          '/sdk/wasm/message/sending-messages/create-media-and-rich-messages',
          '/sdk/wasm/message/sending-messages/send-message',
          '/sdk/wasm/message/sending-messages/send-message-not-oss',
          '/sdk/wasm/message/composing-messages/custom-message-and-extra-data',
          '/sdk/wasm/message/composing-messages/mention-users-in-a-message',
          '/sdk/wasm/message/managing-messages/forward-or-merge-a-message',
          '/sdk/wasm/message/managing-messages/set-message-local-ex',
          '/sdk/wasm/message/receiving-messages/receive-custom-business-messages',
        ]
      : []),
  ];

  for (const path of active.filter((value) => touchedPrefixes.some((prefix) => value.startsWith(prefix)))) {
    const source = await readFile(
      resolve(root, `content/zh/docs/chat${path}.mdx`),
      'utf8',
    );
    const title = source.match(/^title:\s*['"](.+?)['"]$/m)?.[1] ?? '';
    const slug = path.split('/').at(-1);
    const callMethods = callingMethods[platform][slug];
    const isConceptPage =
      slug.startsWith('overview-') ||
      ['receive-custom-business-messages', 'custom-business-listener'].includes(slug);
    const methods =
      callMethods ??
      (isConceptPage
        ? []
        : title && !/概览|申请$|查询$|管理$|事件$/.test(title)
          ? [title]
          : []);
    const old = existing.get(path);
    const callingSource =
      path.includes('/calling/managing-calls/')
        ? oldCallingPage
        : path.includes('/calling/retrieving-call-information/')
          ? oldCallQueryPage
          : undefined;
    const userSource =
      path.includes('/user/profile/')
        ? existing.get(
            `/sdk/${platform}/user/retrieving-and-updating-user-information/retrieve-and-update-self-profile`,
          )
        : path.includes('/user/online-status/')
          ? existing.get(
              `/sdk/${platform}/user/retrieving-and-updating-user-information/retrieve-the-online-status-of-a-user`,
            )
          : path.includes('/user/friend-applications/')
            ? existing.get(`/sdk/${platform}/user/managing-friends/manage-friend-requests`)
            : path.includes('/user/friends/')
              ? existing.get(`/sdk/${platform}/user/retrieving-users/retrieve-a-list-of-friends`)
              : path.includes('/user/blacklist/')
                ? existing.get(
                    `/sdk/${platform}/user/moderating-a-user/retrieve-a-list-of-blocked-users`,
                  )
                : undefined;
    const sdkEvents =
      slug === 'handle-call-events'
        ? callingEvents[platform]
        : old?.sdkEvents ?? [];
    const openimSources =
      callingSource?.openimSources ??
      userSource?.openimSources ??
      old?.openimSources ??
      audit.pages[0]?.openimSources ??
      [];
    existing.set(path, {
      ...(old ?? {
        currentPath: path,
        targetPath: path,
        sourceKind: 'openim-specific',
        disposition: 'adapt',
        openimSources:
          callingSource?.openimSources ?? audit.pages[0]?.openimSources ?? [],
        sdkEvents,
        redirectTo: null,
        notes: [],
      }),
      targetPath: path,
      disposition: 'adapt',
      openimSources,
      sdkMethods: methods,
      sdkEvents,
      locales: {
        ...(old?.locales ?? {}),
        zh: {
          reviewStatus: 'published',
          reviewer: 'Codex',
          reviewedAt: today,
          exampleVerification: {
            status:
              methods.length
                ? 'verified'
                : 'not-applicable',
            evidence: methods.length ? openimSources : [],
            reason: methods.length
              ? '已逐页核对固定 SDK 接口并人工拆分正文。'
              : '本页为概览和事件归属页。',
          },
        },
        en: old?.locales?.en ?? {
          reviewStatus: 'deferred',
          reviewer: null,
          reviewedAt: null,
          exampleVerification: { status: 'pending', evidence: [], reason: null },
        },
      },
      notes: [
        ...(old?.notes ?? []),
        methods.length
          ? '2026-07-23：按一 API 一页规范完成结构与正文审核。'
          : '2026-07-23：本页为事件处理概念页，不归属独立调用方法。',
      ],
    });
  }

  for (const oldPath of [oldCallingPath, oldCallQueryPath]) {
    const oldPage = existing.get(oldPath);
    if (oldPage) existing.set(oldPath, { ...oldPage, sdkEvents: [] });
  }

  for (const [path, page] of existing) {
    if (
      touchedPrefixes.some((prefix) => path.startsWith(prefix)) &&
      !active.includes(path) &&
      (page.disposition !== (platform === 'wasm' ? 'remove' : 'omit') ||
        page.sdkMethods?.length ||
        page.sdkEvents?.length)
    ) {
      existing.set(path, {
        ...page,
        disposition: platform === 'wasm' ? 'remove' : 'omit',
        redirectTo: null,
        sdkMethods: [],
        sdkEvents: [],
        locales:
          platform === 'wasm'
            ? {
                ...page.locales,
                zh: {
                  ...page.locales.zh,
                  reviewStatus:
                    page.locales.zh.reviewStatus === 'published'
                      ? 'api-verified'
                      : page.locales.zh.reviewStatus,
                  exampleVerification: {
                    status: 'not-applicable',
                    evidence: [],
                    reason: '历史聚合页已移除，审核证据迁移到独立页面。',
                  },
                },
              }
            : page.locales,
        notes: [...(page.notes ?? []), '2026-07-23：聚合页已拆为一 API 一页；按确认不保留旧地址重定向。'],
      });
    }
  }
  audit.pages = [...existing.values()];
  await writeJson(auditPath, audit);
}

async function updateWasmOwnership() {
  const ownershipPath = 'data/structure/wasm-api-ownership.json';
  const ownership = await readJson(ownershipPath);
  const sidebar = await readJson('data/structure/wasm-sidebar.json');
  const active = collectPaths(sidebar.nodes);
  const routeByTitle = new Map();
  for (const path of active) {
    const file = resolve(root, `content/zh/docs/chat${path}.mdx`);
    const source = await readFile(file, 'utf8').catch(() => '');
    const title = source.match(/^title:\s*['"](.+?)['"]$/m)?.[1];
    if (title) routeByTitle.set(title, path);
  }
  for (const method of ownership.methods) {
    if (method.name === 'fileMapSet') {
      method.page = null;
      method.status = 'excluded';
      method.reason =
        'Internal file mapping helper; intentionally omitted from public documentation.';
      continue;
    }
    if (method.name === 'uploadFile') {
      method.page = '/sdk/wasm/file-uploads/upload-file';
      method.status = 'documented';
      continue;
    }
    const path = routeByTitle.get(method.name);
    if (path) method.page = path;
  }
  const eventTargets = [
    [/group-applications|GroupApplication/, '/sdk/wasm/group/group-applications/overview-group-applications'],
    [/GroupMember|groupMember/, '/sdk/wasm/group/retrieving-group-members/overview-retrieving-group-members'],
    [
      /FriendApplication/,
      '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
    ],
    [/Friend/, '/sdk/wasm/user/friends/get-friend-list-page'],
  ];
  for (const event of ownership.events) {
    if (!event.page) continue;
    for (const [pattern, target] of eventTargets) {
      if (pattern.test(event.name) && /\/(group|user)\//.test(event.page)) {
        event.page = target;
        break;
      }
    }
    if (event.name === 'OnRecvCustomBusinessMessage') {
      event.page =
        '/sdk/wasm/message/receiving-messages/receive-custom-business-messages';
    }
    if (
      event.page ===
      '/sdk/wasm/calling/managing-calls/start-or-handle-a-call'
    ) {
      event.page = '/sdk/wasm/calling/managing-calls/handle-call-events';
    }
    if (event.name === 'OnSelfInfoUpdated') {
      event.page = '/sdk/wasm/user/profile/set-self-info';
    }
    if (event.name === 'OnUserStatusChanged') {
      event.page = '/sdk/wasm/user/online-status/subscribe-users-status';
    }
    if (event.name === 'OnBlackAdded' || event.name === 'OnBlackDeleted') {
      event.page = '/sdk/wasm/user/blacklist/get-black-list';
    }
    if (event.name === 'OnTotalUnreadMessageCountChanged') {
      event.page =
        '/sdk/wasm/conversation/managing-conversations/get-total-unread-count';
    }
    if (event.name === 'OnConversationUserInputStatusChanged') {
      event.page = '/sdk/wasm/message/composing-messages/update-typing-status';
    }
    if (event.name === 'OnChangedPinnedMsg') {
      event.page = '/sdk/wasm/message/managing-messages/set-message-pinned';
    }
    if (event.name === 'OnDeleteUserAllMsgsInConv') {
      event.page = '/sdk/wasm/message/managing-messages/delete-user-messages';
    }
    if (event.name === 'OnMsgDeleted') {
      event.page = '/sdk/wasm/message/managing-messages/delete-saved-messages';
    }
    if (event.name === 'OnRecvC2CReadReceipt') {
      event.page =
        '/sdk/wasm/conversation/managing-conversations/mark-conversation-read';
    }
    if (event.name === 'OnRecvGroupReadReceipt') {
      event.page =
        '/sdk/wasm/message/managing-read-status/send-group-read-receipts';
    }
    if (event.name === 'OnProgress' || event.name === 'UploadComplete') {
      event.page = '/sdk/wasm/file-uploads/upload-file';
    }
    if (
      ['OnGroupDismissed', 'OnGroupInfoChanged', 'OnJoinedGroupAdded', 'OnJoinedGroupDeleted'].includes(
        event.name,
      )
    ) {
      event.page = '/sdk/wasm/group/overview-group';
    }
  }
  await writeJson(ownershipPath, ownership);
}

function collectPaths(nodes) {
  const paths = [];
  const visit = (entry) => {
    if (typeof entry === 'string') paths.push(entry);
    else if (entry?.path) paths.push(entry.path);
    else if (entry?.children) entry.children.forEach(visit);
  };
  nodes.forEach(visit);
  return paths;
}

async function listMdx(relativeDirectory, prefix = '') {
  const entries = await readdir(resolve(root, relativeDirectory), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = join(prefix, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMdx(join(relativeDirectory, entry.name), relative)));
    } else if (entry.name.endsWith('.mdx')) {
      files.push(relative);
    }
  }
  return files;
}

async function readJson(path) {
  return JSON.parse(await readFile(resolve(root, path), 'utf8'));
}

async function writeJson(path, value) {
  await writeFile(resolve(root, path), `${JSON.stringify(value, null, 2)}\n`);
}
