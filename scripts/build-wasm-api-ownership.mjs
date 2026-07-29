import { readFile, writeFile } from 'node:fs/promises';

const rootPath = '/sdk/wasm';
const page = (path) => `${rootPath}/${path}`;

const sdk = JSON.parse(await readFile('data/structure/wasm-sdk-api.json', 'utf8'));
const domainCoverage = JSON.parse(
  await readFile('data/structure/wasm-domain-api-coverage.json', 'utf8'),
);
const contentAudit = JSON.parse(await readFile('data/structure/wasm-content-audit.json', 'utf8'));
const activeRoutes = new Set(
  JSON.parse(await readFile('src/generated/routes.json', 'utf8'))
    .filter((route) => route.contextKey === 'chat/sdk/wasm')
    .map((route) => route.path),
);

const commercialMethods = new Set([
  'speechToTextCapabilities',
  'speechToText',
  'setMessageLocalContent',
  'getConversationGroupInfoWithConversations',
  'getConversationGroupIDsByConversationID',
  'removeConversationsFromGroups',
  'addConversationsToGroups',
  'setConversationGroupOrder',
  'getConversationGroups',
  'deleteConversationGroup',
  'updateConversationGroup',
  'createConversationGroup',
  'getConversationPinnedMsg',
  'setConversationPinnedMsg',
  'deleteMessages',
  'modifyMessage',
  'getSignalingInvitationInfoStartApp',
  'signalingGetTokenByRoomID',
  'signalingGetRoomByGroupID',
  'signalingHungUp',
  'signalingCancel',
  'signalingReject',
  'signalingAccept',
  'signalingInviteInGroup',
  'signalingInvite',
  'deleteGroupRequests',
  'deleteFriendRequests',
  'fetchSurroundingMessages',
  'getAdvancedHistoryMessageListReverse',
  'sendGroupMessageReadReceipt',
  'getGroupMessageReaderList',
]);

const commercialEvents = new Set([
  'OnChangedPinnedMsg',
  'OnConversationGroupAdded',
  'OnConversationGroupChanged',
  'OnConversationGroupDeleted',
  'OnConversationGroupMemberAdded',
  'OnConversationGroupMemberDeleted',
  'OnMsgDeleted',
  'OnMessageModified',
  'OnReceiveNewInvitation',
  'OnInviteeAccepted',
  'OnInviteeAcceptedByOtherDevice',
  'OnInviteeRejected',
  'OnInviteeRejectedByOtherDevice',
  'OnInvitationCancelled',
  'OnInvitationTimeout',
  'OnHangUp',
  'OnRoomParticipantConnected',
  'OnRoomParticipantDisconnected',
  'OnStreamChange',
  'OnFriendApplicationDeleted',
  'OnGroupApplicationDeleted',
  'OnRecvGroupReadReceipt',
]);

const methodOwners = new Map();
const eventOwners = new Map();

for (const domain of Object.values(domainCoverage.domains)) {
  for (const item of domain.methods) assign(methodOwners, item.name, item.page, item.status);
  for (const item of domain.events) assign(eventOwners, item.name, item.page, 'documented');
}

methods('getting-started/authenticate-and-manage-session', [
  'getLoginStatus',
  'getLoginUserID',
  'login',
  'logout',
  'networkStatusChanged',
  'setAppBackgroundStatus',
]);

methods('user/retrieving-users/retrieve-users', ['getUsersInfo']);
methods('user/retrieving-users/retrieve-a-list-of-friends', [
  'getFriendList',
  'getFriendListPage',
  'searchFriends',
]);
methods('user/retrieving-users/retrieve-friend-information', [
  'checkFriend',
  'getSpecifiedFriendsInfo',
]);
methods('user/managing-friends/manage-friend-requests', [
  'acceptFriendApplication',
  'addFriend',
  'deleteFriendRequests',
  'getFriendApplicationListAsApplicant',
  'getFriendApplicationListAsRecipient',
  'getFriendApplicationUnhandledCount',
  'refuseFriendApplication',
]);
methods('user/managing-friends/update-or-delete-friends', [
  'deleteFriend',
  'pinFriends',
  'setFriendRemark',
  'setFriendsEx',
  'updateFriends',
]);
methods('user/moderating-a-user/retrieve-a-list-of-blocked-users', ['getBlackList']);
methods('user/moderating-a-user/block-or-unblock-users', ['addBlack', 'removeBlack']);
methods('user/retrieving-and-updating-user-information/retrieve-the-online-status-of-a-user', [
  'getUserStatus',
  'getSubscribeUsersStatus',
  'subscribeUsersStatus',
  'unsubscribeUsersStatus',
]);
methods('user/retrieving-and-updating-user-information/retrieve-and-update-self-profile', [
  'getSelfUserInfo',
  'setGlobalRecvMessageOpt',
  'setSelfInfo',
  'SetSelfInfoEx',
]);

methods('message/sending-messages/send-a-message', [
  'createTextMessage',
  'sendMessage',
  'sendMessageNotOss',
]);
methods('message/sending-messages/create-media-and-rich-messages', [
  'createAdvancedQuoteMessage',
  'createCardMessage',
  'createFaceMessage',
  'createFileMessageByURL',
  'createImageMessageByURL',
  'createLocationMessage',
  'createMarkdownMessage',
  'createQuoteMessage',
  'createSoundMessageByURL',
  'createVideoMessageByURL',
]);
methods('message/sending-messages/upload-files-and-track-progress', [
  'createFileMessageByFile',
  'createImageMessageByFile',
  'createSoundMessageByFile',
  'createVideoMessageByFile',
  'uploadFile',
]);
methods('message/retrieving-messages/retrieve-message-history', [
  'getAdvancedHistoryMessageList',
  'getAdvancedHistoryMessageListReverse',
]);
methods('message/retrieving-messages/locate-messages-by-id', [
  'fetchSurroundingMessages',
  'findMessageList',
]);
methods('message/searching-messages/search-messages', ['searchLocalMessages']);
methods('message/composing-messages/custom-message-and-extra-data', [
  'createAdvancedTextMessage',
  'createCustomMessage',
  'setMessageLocalEx',
]);
methods('message/composing-messages/mention-users-in-a-message', ['createTextAtMessage']);
methods('message/composing-messages/manage-typing-status', [
  'changeInputStates',
  'getInputstates',
  'typingStatusUpdate',
]);
methods('message/composing-messages/transcribe-audio', [
  'setMessageLocalContent',
  'speechToText',
  'speechToTextCapabilities',
]);
methods('message/managing-messages/forward-or-merge-a-message', [
  'createForwardMessage',
  'createMergerMessage',
]);
methods('message/managing-messages/delete-a-message', [
  'deleteMessages',
  'deleteMessage',
  'deleteMessageFromLocalStorage',
  'deleteUserAllMessagesInConv',
]);
methods('message/managing-messages/revoke-a-message', ['revokeMessage']);
methods('message/managing-messages/modify-a-message', ['modifyMessage']);
methods('message/managing-messages/pin-conversation-messages', [
  'getConversationPinnedMsg',
  'setConversationPinnedMsg',
]);
methods('message/managing-messages/insert-a-local-message', [
  'insertGroupMessageToLocalStorage',
  'insertSingleMessageToLocalStorage',
]);
methods('message/managing-messages/clear-message-history', [
  'deleteAllMsgFromLocal',
  'deleteAllMsgFromLocalAndSvr',
]);
methods('message/managing-read-status/manage-message-read-receipts', [
  'getGroupMessageReaderList',
  'sendGroupMessageReadReceipt',
]);

methods('calling/managing-calls/start-or-handle-a-call', [
  'signalingAccept',
  'signalingCancel',
  'signalingHungUp',
  'signalingInvite',
  'signalingInviteInGroup',
  'signalingReject',
]);
methods('calling/retrieving-call-information/retrieve-call-information', [
  'getSignalingInvitationInfoStartApp',
  'signalingGetRoomByGroupID',
  'signalingGetTokenByRoomID',
]);
methods('calling/sending-custom-signals/send-a-custom-signal', ['signalingSendCustomSignal']);
methods('logger', ['exportDB']);

events('getting-started/authenticate-and-manage-session', [
  'OnConnectFailed',
  'OnConnecting',
  'OnConnectSuccess',
  'OnKickedOffline',
  'OnUserTokenExpired',
  'OnUserTokenInvalid',
]);
events('user/managing-friends/manage-friend-requests', [
  'OnFriendApplicationAccepted',
  'OnFriendApplicationAdded',
  'OnFriendApplicationDeleted',
  'OnFriendApplicationRejected',
]);
events('user/managing-friends/update-or-delete-friends', [
  'OnFriendAdded',
  'OnFriendDeleted',
  'OnFriendInfoChanged',
]);
events('user/moderating-a-user/block-or-unblock-users', ['OnBlackAdded', 'OnBlackDeleted']);
events('user/retrieving-and-updating-user-information/retrieve-the-online-status-of-a-user', [
  'OnUserStatusChanged',
]);
events('user/retrieving-and-updating-user-information/retrieve-and-update-self-profile', [
  'OnSelfInfoUpdated',
]);
events('message/sending-messages/upload-files-and-track-progress', [
  'OnProgress',
  'UploadComplete',
]);
events('message/receiving-messages/receive-messages', [
  'OnRecvNewMessage',
  'OnRecvNewMessages',
  'OnRecvOfflineNewMessage',
  'OnRecvOfflineNewMessages',
  'OnRecvOnlineOnlyMessage',
  'OnRecvOnlineOnlyMessages',
]);
events('message/composing-messages/custom-message-and-extra-data', ['OnRecvCustomBusinessMessage']);
events('message/managing-messages/delete-a-message', ['OnDeleteUserAllMsgsInConv', 'OnMsgDeleted']);
events('message/managing-messages/revoke-a-message', [
  'OnNewRecvMessageRevoked',
  'OnRecvMessageRevoked',
]);
events('message/managing-messages/modify-a-message', ['OnMessageModified']);
events('message/managing-messages/pin-conversation-messages', ['OnChangedPinnedMsg']);
events('conversation/managing-conversations/mark-conversation-read', ['OnRecvC2CReadReceipt']);
events('message/managing-read-status/send-group-read-receipts', ['OnRecvGroupReadReceipt']);
events('calling/sending-custom-signals/send-a-custom-signal', ['OnReceiveCustomSignal']);
events('calling/managing-calls/start-or-handle-a-call', [
  'OnHangUp',
  'OnInvitationCancelled',
  'OnInvitationTimeout',
  'OnInviteeAccepted',
  'OnInviteeAcceptedByOtherDevice',
  'OnInviteeRejected',
  'OnInviteeRejectedByOtherDevice',
  'OnReceiveNewInvitation',
  'OnRoomParticipantConnected',
  'OnRoomParticipantDisconnected',
  'OnStreamChange',
]);
events('events/overview-events', [
  'OnSyncServerFailed',
  'OnSyncServerFinish',
  'OnSyncServerProgress',
  'OnSyncServerStart',
]);

const deprecatedOverrides = new Set(['setConversationDraft']);
const excludedNonPaginated = new Set(['getAllConversationList', 'getFriendList']);
const excludedConsolidated = new Set([
  'createAdvancedQuoteMessage',
  'createAdvancedTextMessage',
  'deleteMessage',
  'exportDB',
  'getUserStatus',
]);
const excludedMethods = new Map([
  [
    'createTargetedGroupMessage',
    'Targeted group messages are intentionally omitted from public documentation.',
  ],
  ['fileMapSet', 'Internal file mapping helper; intentionally omitted from public documentation.'],
  [
    'getHistoryMessageListReverse',
    'The target-based history API is intentionally omitted in favor of conversation-based history pagination.',
  ],
]);
const excludedEvents = new Set(['Login', 'OnUploadLogsProgress', 'UnUsedEvent']);
const reviewedEventPages = new Map([
  ['OnBlackAdded', page('user/blacklist/get-black-list')],
  ['OnBlackDeleted', page('user/blacklist/get-black-list')],
  ['OnFriendAdded', page('user/friends/get-friend-list-page')],
  [
    'OnFriendApplicationAccepted',
    page('user/friend-applications/get-friend-application-list-as-recipient'),
  ],
  [
    'OnFriendApplicationAdded',
    page('user/friend-applications/get-friend-application-list-as-recipient'),
  ],
  [
    'OnFriendApplicationDeleted',
    page('user/friend-applications/get-friend-application-list-as-recipient'),
  ],
  [
    'OnFriendApplicationRejected',
    page('user/friend-applications/get-friend-application-list-as-recipient'),
  ],
  ['OnFriendDeleted', page('user/friends/get-friend-list-page')],
  ['OnFriendInfoChanged', page('user/friends/get-friend-list-page')],
  ['OnProgress', page('file-uploads/upload-file')],
  [
    'OnRecvCustomBusinessMessage',
    page('message/receiving-messages/receive-custom-business-messages'),
  ],
  ['OnSelfInfoUpdated', page('user/profile/set-self-info')],
  ['OnUserStatusChanged', page('user/online-status/subscribe-users-status')],
  ['UploadComplete', page('file-uploads/upload-file')],
]);
const replacementMethodPages = new Map([
  ['createAdvancedQuoteMessage', page('message/creating-messages/create-quote-message')],
  ['createAdvancedTextMessage', page('message/creating-messages/create-custom-message')],
  ['deleteMessage', page('message/managing-messages/delete-local-message')],
  ['getFriendList', page('user/friends/get-friend-list-page')],
  ['getUserStatus', page('user/online-status/subscribe-users-status')],
  ['pinFriends', page('user/friends/update-friends')],
  ['setFriendRemark', page('user/friends/update-friends')],
  ['setFriendsEx', page('user/friends/update-friends')],
  ['setGlobalRecvMessageOpt', page('user/profile/set-global-message-reception')],
  ['SetSelfInfoEx', page('user/profile/set-self-info')],
  ['typingStatusUpdate', page('message/composing-messages/update-typing-status')],
]);
const sdkMethods = new Map(sdk.methods.map((item) => [item.name, item]));

applyReviewedPageOwnership(methodOwners, 'sdkMethods');
applyReviewedPageOwnership(eventOwners, 'sdkEvents');
for (const [name, ownerPage] of replacementMethodPages) {
  const owner = methodOwners.get(name);
  methodOwners.set(name, { page: ownerPage, status: owner?.status ?? 'documented' });
}
for (const [name, ownerPage] of reviewedEventPages) {
  eventOwners.set(name, { page: ownerPage, status: 'documented' });
}
for (const name of excludedMethods.keys()) assign(methodOwners, name, null, 'excluded');

validateComplete(
  methodOwners,
  sdk.methods.map((item) => item.name),
  'method',
);
validateComplete(
  eventOwners,
  sdk.events.map((item) => item.name).filter((name) => !excludedEvents.has(name)),
  'event',
);

const manifest = {
  schemaVersion: 1,
  sdkVersion: sdk.version,
  methods: [...methodOwners]
    .map(([name, owner]) => {
      const status = excludedNonPaginated.has(name)
        ? 'excluded-non-paginated'
        : excludedConsolidated.has(name)
          ? 'excluded-consolidated'
          : sdkMethods.get(name)?.deprecated && !deprecatedOverrides.has(name)
            ? 'excluded-deprecated'
            : owner.status;
      return {
        name,
        page: owner.page,
        status,
        ...(commercialMethods.has(name) ? { commercial: true } : {}),
        ...(excludedMethods.has(name) ? { reason: excludedMethods.get(name) } : {}),
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name)),
  events: sdk.events
    .map(({ name }) => {
      if (excludedEvents.has(name)) {
        return {
          name,
          page: null,
          status: 'excluded',
          ...(commercialEvents.has(name) ? { commercial: true } : {}),
        };
      }
      const owner = eventOwners.get(name);
      return {
        name,
        page: owner.page,
        status: owner.status,
        ...(commercialEvents.has(name) ? { commercial: true } : {}),
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name)),
  conceptPages: [
    page('overview'),
    page('getting-started/before-you-start'),
    page('getting-started/environment-specific-implementation'),
    page('getting-started/send-first-message'),
    page('user/overview-user'),
    page('conversation/overview-conversation'),
    page('group/overview-group'),
    page('message/overview-message'),
    page('calling/overview-calling'),
    page('logger'),
  ],
};

const evidencedPages = new Set(
  [...manifest.methods, ...manifest.events]
    .filter((item) => !item.status.startsWith('excluded'))
    .map((item) => item.page),
);
manifest.conceptPages = [
  ...new Set([
    ...manifest.conceptPages,
    ...[...activeRoutes].filter((route) => !evidencedPages.has(route)),
  ]),
].sort();

await writeFile(
  'data/structure/wasm-api-ownership.json',
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8',
);
console.log(`Assigned ${manifest.methods.length} methods and ${manifest.events.length} events.`);

function methods(path, names) {
  for (const name of names) assign(methodOwners, name, page(path), 'documented');
}

function events(path, names) {
  for (const name of names) assign(eventOwners, name, page(path), 'documented');
}

function assign(target, name, ownerPage, status) {
  if (target.has(name)) {
    throw new Error(`${name}: duplicate owner ${target.get(name).page} and ${ownerPage}`);
  }
  target.set(name, { page: ownerPage, status });
}

function validateComplete(owners, names, label) {
  const expected = new Set(names);
  const missing = names.filter((name) => !owners.has(name));
  const unknown = [...owners.keys()].filter((name) => !expected.has(name));
  if (missing.length || unknown.length) {
    throw new Error(
      `${label} ownership mismatch; missing=${missing.join(',')}; unknown=${unknown.join(',')}`,
    );
  }
}

function applyReviewedPageOwnership(owners, field) {
  const candidates = new Map();
  for (const auditPage of contentAudit.pages) {
    if (!activeRoutes.has(auditPage.currentPath)) continue;
    for (const name of auditPage[field] ?? []) {
      const pages = candidates.get(name) ?? [];
      pages.push(auditPage.currentPath);
      candidates.set(name, pages);
    }
  }

  for (const [name, pages] of candidates) {
    const current = owners.get(name);
    const ownerPage = pages.includes(current?.page) ? current.page : pages[0];
    owners.set(name, { page: ownerPage, status: current?.status ?? 'documented' });
  }
}
