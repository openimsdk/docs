import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const ownership = JSON.parse(readFileSync('data/structure/wasm-api-ownership.json', 'utf8'));
const androidAudit = JSON.parse(readFileSync('data/structure/android-content-audit.json', 'utf8'));
const flutterAudit = JSON.parse(readFileSync('data/structure/flutter-content-audit.json', 'utf8'));
const iosAudit = JSON.parse(readFileSync('data/structure/ios-content-audit.json', 'utf8'));
const uniappAudit = JSON.parse(readFileSync('data/structure/uniapp-content-audit.json', 'utf8'));

const commercialMethods = [
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
];

const commercialEvents = [
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
];

const nonCommercialSamePageMethods = [
  'revokeMessage',
  'deleteMessageFromLocalStorage',
  'addFriend',
  'acceptFriendApplication',
  'acceptGroupApplication',
  'getAdvancedHistoryMessageList',
  'findMessageList',
];

const nonCommercialEvents = [
  'OnNewRecvMessageRevoked',
  'OnRecvMessageRevoked',
  'OnRecvC2CReadReceipt',
];

const sharedCommercialFieldNames = [
  'burnDuration',
  'displayIsRead',
  'isMsgDestruct',
  'isPrivateChat',
  'msgDestructTime',
  'muteBypassUserIDs',
];

const platformCommercialFieldNames = {
  android: [...sharedCommercialFieldNames, 'addFriendPermission'],
  flutter: sharedCommercialFieldNames,
  ios: sharedCommercialFieldNames,
  uniapp: [...sharedCommercialFieldNames, 'addFriendPermission', 'isMarked'],
  wasm: [...sharedCommercialFieldNames, 'addFriendPermission', 'isMarked', 'searchText'],
};

const pageCommercialFieldNames = {
  '/sdk/android/user/user-profile/get-self-local-user-info': ['attachedInfo'],
  '/sdk/uniapp/conversation/managing-conversations/set-conversation-remark': ['remark'],
  '/sdk/uniapp/conversation/overview-conversation': ['remark'],
  '/sdk/uniapp/conversation/retrieving-conversations/retrieve-conversation-list': ['remark'],
  '/sdk/uniapp/message/retrieving-messages/load-newer-messages': ['isReverse'],
  '/sdk/wasm/conversation/managing-conversations/set-conversation-remark': ['remark'],
  '/sdk/wasm/conversation/overview-conversation': ['remark'],
  '/sdk/wasm/conversation/retrieving-conversations/retrieve-conversation-list': ['remark'],
  '/sdk/wasm/user/profile/get-self-user-info': ['attachedInfo'],
};

const pageCommercialSymbolNames = {
  '/sdk/android/conversation/managing-conversations/set-burn-duration': [
    'setConversationBurnDuration',
  ],
  '/sdk/android/conversation/managing-conversations/set-message-destruct': [
    'setMsgDestruct',
    'setMsgDestructTime',
  ],
  '/sdk/android/conversation/managing-conversations/set-private-chat': [
    'setOneConversationPrivateChat',
  ],
  '/sdk/android/user/user-profile/set-friend-add-permission': ['setAddFriendPermission'],
  '/sdk/ios/conversation/managing-conversations/set-burn-duration': [
    'setConversationBurnDuration',
  ],
  '/sdk/ios/conversation/managing-conversations/set-message-destruct': [
    'setConversationIsMsgDestruct',
  ],
  '/sdk/ios/conversation/managing-conversations/set-message-destruct-time': [
    'setConversationMsgDestructTime',
  ],
  '/sdk/ios/conversation/managing-conversations/set-private-chat': [
    'setConversationPrivateChat',
  ],
  '/sdk/ios/message/composing-messages/save-local-transcript': ['setMessageLocalEx'],
};

const platformSymbolAliases = {
  android: {
    getConversationPinnedMsgs: 'getConversationPinnedMsg',
    onHangup: 'OnHangUp',
    onRecvGroupMessageReadReceipt: 'OnRecvGroupReadReceipt',
  },
  flutter: {
    getConversationGroupByConversationID: 'getConversationGroupIDsByConversationID',
    onHangup: 'OnHangUp',
  },
  ios: {
    getSignalingInvitationInfoStartAppWithOnSuccess: 'getSignalingInvitationInfoStartApp',
    getConversationPinnedMsgWithConversationID: 'getConversationPinnedMsg',
    modifyMessageWithConversationID: 'modifyMessage',
    onHunguUp: 'OnHangUp',
    Open_im_sdkAddConversationsToGroups: 'addConversationsToGroups',
    Open_im_sdkCreateConversationGroup: 'createConversationGroup',
    Open_im_sdkDeleteConversationGroup: 'deleteConversationGroup',
    Open_im_sdkGetConversationGroupByConversationID: 'getConversationGroupIDsByConversationID',
    Open_im_sdkGetConversationGroupInfoWithConversations:
      'getConversationGroupInfoWithConversations',
    Open_im_sdkGetConversationGroups: 'getConversationGroups',
    Open_im_sdkRemoveConversationsFromGroups: 'removeConversationsFromGroups',
    Open_im_sdkSetConversationGroupListener: 'createConversationGroup',
    Open_im_sdkSetConversationGroupOrder: 'setConversationGroupOrder',
    Open_im_sdkSpeechToText: 'speechToText',
    Open_im_sdkSpeechToTextCapabilities: 'speechToTextCapabilities',
    Open_im_sdkUpdateConversationGroup: 'updateConversationGroup',
    setConversationPinnedMsgWithConversationID: 'setConversationPinnedMsg',
  },
  uniapp: {
    getConversationGroupByConversationID: 'getConversationGroupIDsByConversationID',
    getSpeechToTextCapabilities: 'speechToTextCapabilities',
    signalingGetInvitationInfoStartApp: 'getSignalingInvitationInfoStartApp',
  },
};

const partialCommercialConceptSources = {
  '/sdk/wasm/conversation/overview-conversation': [
    '/sdk/wasm/conversation/managing-conversation-groups/overview-conversation-groups',
    '/sdk/wasm/conversation/managing-conversations/mark-conversation',
    '/sdk/wasm/conversation/managing-conversations/set-conversation-remark',
    '/sdk/wasm/conversation/managing-conversations/set-private-chat',
    '/sdk/wasm/conversation/managing-conversations/set-message-destruct',
  ],
  '/sdk/android/conversation/overview-conversation': [
    '/sdk/android/conversation/managing-conversations/set-private-chat',
    '/sdk/android/conversation/managing-conversations/set-burn-duration',
    '/sdk/android/conversation/managing-conversations/set-message-destruct',
  ],
  '/sdk/flutter/conversation/overview-conversation': [
    '/sdk/flutter/conversation/managing-conversation-groups/overview-conversation-groups',
    '/sdk/flutter/conversation/managing-conversations/set-private-chat',
    '/sdk/flutter/conversation/managing-conversations/set-burn-duration',
    '/sdk/flutter/conversation/managing-conversations/set-message-destruct',
  ],
  '/sdk/ios/conversation/overview-conversation': [
    '/sdk/ios/conversation/managing-conversation-groups/overview-conversation-groups',
    '/sdk/ios/conversation/managing-conversations/set-private-chat',
    '/sdk/ios/conversation/managing-conversations/set-burn-duration',
    '/sdk/ios/conversation/managing-conversations/set-message-destruct',
  ],
  '/sdk/uniapp/conversation/overview-conversation': [
    '/sdk/uniapp/conversation/managing-conversation-groups/overview-conversation-groups',
    '/sdk/uniapp/conversation/managing-conversations/mark-conversation',
    '/sdk/uniapp/conversation/managing-conversations/set-conversation-remark',
    '/sdk/uniapp/conversation/managing-conversations/set-private-chat',
    '/sdk/uniapp/conversation/managing-conversations/set-message-destruct',
  ],
  '/sdk/wasm/events/overview-events': [
    '/sdk/wasm/group/group-applications/get-group-application-list-as-recipient',
    '/sdk/wasm/message/managing-messages/delete-saved-messages',
    '/sdk/wasm/message/managing-messages/modify-a-message',
    '/sdk/wasm/message/managing-messages/set-message-pinned',
    '/sdk/wasm/calling/managing-calls/handle-call-events',
  ],
  '/sdk/android/events/overview-events': [
    '/sdk/android/group/overview-group',
    '/sdk/android/message/managing-messages/delete-saved-messages',
    '/sdk/android/message/managing-messages/modify-a-message',
    '/sdk/android/message/managing-messages/set-message-pinned',
    '/sdk/android/calling/managing-calls/handle-call-events',
  ],
  '/sdk/uniapp/events/overview-events': [
    '/sdk/uniapp/group/group-applications/get-group-application-list-as-recipient',
    '/sdk/uniapp/message/managing-messages/delete-saved-messages',
    '/sdk/uniapp/message/managing-messages/modify-a-message',
    '/sdk/uniapp/message/managing-messages/set-message-pinned',
    '/sdk/uniapp/calling/managing-calls/handle-call-events',
  ],
  '/sdk/wasm/group/overview-group': [
    '/sdk/wasm/group/group-applications/get-group-application-list-as-recipient',
  ],
  '/sdk/ios/group/overview-group': [
    '/sdk/ios/group/group-applications/overview-group-applications',
  ],
  '/sdk/uniapp/group/overview-group': [
    '/sdk/uniapp/group/group-applications/get-group-application-list-as-recipient',
  ],
  '/sdk/wasm/message/overview-message': [
    '/sdk/wasm/message/composing-messages/check-speech-to-text',
    '/sdk/wasm/message/composing-messages/save-local-transcript',
    '/sdk/wasm/message/composing-messages/transcribe-audio',
    '/sdk/wasm/message/managing-messages/delete-saved-messages',
    '/sdk/wasm/message/managing-messages/modify-a-message',
    '/sdk/wasm/message/managing-messages/set-message-pinned',
    '/sdk/wasm/message/managing-read-status/send-group-read-receipts',
    '/sdk/wasm/message/retrieving-messages/load-message-context',
    '/sdk/wasm/message/retrieving-messages/load-newer-messages',
  ],
  '/sdk/uniapp/message/overview-message': [
    '/sdk/uniapp/message/composing-messages/check-speech-to-text',
    '/sdk/uniapp/message/composing-messages/save-local-transcript',
    '/sdk/uniapp/message/composing-messages/transcribe-audio',
    '/sdk/uniapp/message/managing-messages/delete-saved-messages',
    '/sdk/uniapp/message/managing-messages/modify-a-message',
    '/sdk/uniapp/message/managing-messages/set-message-pinned',
    '/sdk/uniapp/message/managing-read-status/send-group-read-receipts',
    '/sdk/uniapp/message/retrieving-messages/load-message-context',
    '/sdk/uniapp/message/retrieving-messages/load-newer-messages',
  ],
  '/sdk/wasm/user/overview-user': [
    '/sdk/wasm/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/wasm/user/profile/set-friend-add-permission',
  ],
  '/sdk/android/user/overview-user': [
    '/sdk/android/user/overview-relationships',
    '/sdk/android/user/user-profile/set-friend-add-permission',
  ],
  '/sdk/flutter/user/overview-user': [
    '/sdk/flutter/user/friend-applications/get-friend-application-list-as-recipient',
  ],
  '/sdk/ios/user/overview-user': [
    '/sdk/ios/user/friend-applications/get-friend-application-list-as-recipient',
  ],
  '/sdk/uniapp/user/overview-user': [
    '/sdk/uniapp/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/uniapp/user/profile/set-friend-add-permission',
  ],
  '/sdk/android/message/overview-message': [
    '/sdk/android/message/managing-messages/delete-saved-messages',
    '/sdk/android/message/managing-read-status/send-group-read-receipts',
  ],
  '/sdk/android/user/overview-relationships': [
    '/sdk/android/user/friend-applications/get-recv-friend-application-list',
  ],
  '/sdk/flutter/message/overview-message': [
    '/sdk/flutter/message/composing-messages/check-speech-to-text',
    '/sdk/flutter/message/composing-messages/save-local-transcript',
    '/sdk/flutter/message/composing-messages/transcribe-audio',
    '/sdk/flutter/message/managing-messages/delete-saved-message',
    '/sdk/flutter/message/managing-messages/modify-a-message',
    '/sdk/flutter/message/managing-messages/set-message-pinned',
  ],
  '/sdk/ios/events/overview-events': [
    '/sdk/ios/conversation/managing-conversation-groups/overview-conversation-groups',
  ],
  '/sdk/ios/message/overview-message': [
    '/sdk/ios/message/managing-messages/modify-a-message',
    '/sdk/ios/message/managing-messages/set-message-pinned',
  ],
  '/sdk/wasm/calling/overview-calling': [
    '/sdk/wasm/calling/managing-calls/accept-call',
    '/sdk/wasm/calling/managing-calls/cancel-call',
    '/sdk/wasm/calling/managing-calls/hang-up-call',
    '/sdk/wasm/calling/managing-calls/reject-call',
    '/sdk/wasm/calling/managing-calls/start-group-call',
    '/sdk/wasm/calling/managing-calls/start-single-call',
    '/sdk/wasm/calling/managing-calls/handle-call-events',
    '/sdk/wasm/calling/retrieving-call-information/get-room-by-group-id',
    '/sdk/wasm/calling/retrieving-call-information/get-token-by-room-id',
    '/sdk/wasm/calling/retrieving-call-information/restore-pending-invitation',
  ],
  '/sdk/flutter/calling/overview-calling': [
    '/sdk/flutter/calling/managing-calls/accept-call',
    '/sdk/flutter/calling/managing-calls/cancel-call',
    '/sdk/flutter/calling/managing-calls/hang-up-call',
    '/sdk/flutter/calling/managing-calls/reject-call',
    '/sdk/flutter/calling/managing-calls/start-group-call',
    '/sdk/flutter/calling/managing-calls/start-single-call',
    '/sdk/flutter/calling/managing-calls/handle-call-events',
    '/sdk/flutter/calling/retrieving-call-information/get-room-by-group-id',
    '/sdk/flutter/calling/retrieving-call-information/get-token-by-room-id',
    '/sdk/flutter/calling/retrieving-call-information/restore-pending-invitation',
  ],
  '/sdk/ios/calling/overview-calling': [
    '/sdk/ios/calling/managing-calls/accept-call',
    '/sdk/ios/calling/managing-calls/cancel-call',
    '/sdk/ios/calling/managing-calls/hang-up-call',
    '/sdk/ios/calling/managing-calls/reject-call',
    '/sdk/ios/calling/managing-calls/start-group-call',
    '/sdk/ios/calling/managing-calls/start-single-call',
    '/sdk/ios/calling/managing-calls/handle-call-events',
    '/sdk/ios/calling/retrieving-call-information/get-room-by-group-id',
    '/sdk/ios/calling/retrieving-call-information/get-token-by-room-id',
    '/sdk/ios/calling/retrieving-call-information/restore-pending-invitation',
  ],
  '/sdk/android/calling/overview-calling': [
    '/sdk/android/calling/managing-calls/accept-call',
    '/sdk/android/calling/managing-calls/cancel-call',
    '/sdk/android/calling/managing-calls/hang-up-call',
    '/sdk/android/calling/managing-calls/reject-call',
    '/sdk/android/calling/managing-calls/start-group-call',
    '/sdk/android/calling/managing-calls/start-single-call',
    '/sdk/android/calling/managing-calls/handle-call-events',
    '/sdk/android/calling/retrieving-call-information/get-room-by-group-id',
    '/sdk/android/calling/retrieving-call-information/get-token-by-room-id',
    '/sdk/android/calling/retrieving-call-information/restore-pending-invitation',
  ],
  '/sdk/uniapp/calling/overview-calling': [
    '/sdk/uniapp/calling/managing-calls/accept-call',
    '/sdk/uniapp/calling/managing-calls/cancel-call',
    '/sdk/uniapp/calling/managing-calls/hang-up-call',
    '/sdk/uniapp/calling/managing-calls/reject-call',
    '/sdk/uniapp/calling/managing-calls/start-group-call',
    '/sdk/uniapp/calling/managing-calls/start-single-call',
    '/sdk/uniapp/calling/managing-calls/handle-call-events',
    '/sdk/uniapp/calling/retrieving-call-information/get-room-by-group-id',
    '/sdk/uniapp/calling/retrieving-call-information/get-token-by-room-id',
    '/sdk/uniapp/calling/retrieving-call-information/restore-pending-invitation',
  ],
};

const fullCommercialConceptPages = new Set([
  '/sdk/wasm/conversation/managing-conversations/set-private-chat',
  '/sdk/wasm/conversation/managing-conversations/set-burn-duration',
  '/sdk/wasm/conversation/managing-conversations/set-message-destruct',
  '/sdk/wasm/conversation/managing-conversations/set-conversation-remark',
  '/sdk/wasm/conversation/managing-conversations/mark-conversation',
  '/sdk/wasm/message/composing-messages/save-local-transcript',
  '/sdk/wasm/user/profile/set-friend-add-permission',
  '/sdk/flutter/conversation/managing-conversations/set-private-chat',
  '/sdk/flutter/conversation/managing-conversations/set-burn-duration',
  '/sdk/flutter/conversation/managing-conversations/set-message-destruct',
  '/sdk/flutter/message/composing-messages/save-local-transcript',
  '/sdk/ios/conversation/managing-conversations/set-private-chat',
  '/sdk/ios/conversation/managing-conversations/set-burn-duration',
  '/sdk/ios/conversation/managing-conversations/set-message-destruct',
  '/sdk/ios/conversation/managing-conversations/set-message-destruct-time',
  '/sdk/ios/message/composing-messages/save-local-transcript',
  '/sdk/android/conversation/managing-conversations/set-private-chat',
  '/sdk/android/conversation/managing-conversations/set-burn-duration',
  '/sdk/android/conversation/managing-conversations/set-message-destruct',
  '/sdk/uniapp/conversation/managing-conversations/set-private-chat',
  '/sdk/uniapp/conversation/managing-conversations/set-burn-duration',
  '/sdk/uniapp/conversation/managing-conversations/set-message-destruct',
  '/sdk/uniapp/conversation/managing-conversations/set-conversation-remark',
  '/sdk/uniapp/conversation/managing-conversations/mark-conversation',
  '/sdk/uniapp/message/composing-messages/save-local-transcript',
  '/sdk/uniapp/message/retrieving-messages/load-newer-messages',
  '/sdk/uniapp/user/profile/set-friend-add-permission',
]);

function applyCommercialConceptOverride(pagePath, info) {
  return fullCommercialConceptPages.has(pagePath) ? { ...info, kind: 'full' } : info;
}

function getWasmPageCommercialInfo(pagePath) {
  const documentedMethods = ownership.methods.filter(
    (entry) => entry.page === pagePath && entry.status === 'documented',
  );
  const methods = documentedMethods
    .filter((entry) => entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
  const openSourceMethods = documentedMethods
    .filter((entry) => !entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
  const events = ownership.events
    .filter((entry) => entry.page === pagePath && entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));

  if (methods.length === 0 && events.length === 0) {
    return { kind: 'none', methods, openSourceMethods, events };
  }

  return {
    kind: openSourceMethods.length === 0 ? 'full' : 'partial',
    methods,
    openSourceMethods,
    events,
  };
}

function normalizePlatformSymbol(platform, symbol, type) {
  const selectorBase = symbol.split(':', 1)[0];
  const alias = platformSymbolAliases[platform][selectorBase];
  if (alias) return alias;
  if (type === 'event' && selectorBase.startsWith('on')) return `On${selectorBase.slice(2)}`;
  return selectorBase;
}

function getPageCommercialInfo(pagePath) {
  const conceptSources = partialCommercialConceptSources[pagePath];
  if (conceptSources) {
    const sourceInfo = conceptSources.map((sourcePath) => getPageCommercialInfo(sourcePath));
    return {
      kind: 'partial',
      methods: [...new Set(sourceInfo.flatMap((info) => info.methods))].sort((left, right) =>
        left.localeCompare(right),
      ),
      openSourceMethods: [],
      events: [...new Set(sourceInfo.flatMap((info) => info.events))].sort((left, right) =>
        left.localeCompare(right),
      ),
    };
  }

  const match = pagePath.match(/^\/sdk\/(android|wasm|flutter|ios|uniapp)(\/.*)$/);
  if (!match) return { kind: 'none', methods: [], openSourceMethods: [], events: [] };

  const platform = match[1];
  const wasmPath = `/sdk/wasm${match[2]}`;
  if (platform === 'wasm') {
    return applyCommercialConceptOverride(pagePath, getWasmPageCommercialInfo(wasmPath));
  }

  const audit =
    platform === 'android'
      ? androidAudit
      : platform === 'flutter'
        ? flutterAudit
        : platform === 'ios'
          ? iosAudit
          : uniappAudit;
  const page = audit.pages.find(
    (entry) => entry.currentPath === pagePath && entry.disposition !== 'omit',
  );
  if (!page) return { kind: 'none', methods: [], openSourceMethods: [], events: [] };

  const commercialMethodSet = new Set(commercialMethods);
  const commercialEventSet = new Set(commercialEvents);
  const methods = page.sdkMethods.filter((name) =>
    commercialMethodSet.has(normalizePlatformSymbol(platform, name, 'method')),
  );
  const openSourceMethods = page.sdkMethods.filter((name) => !methods.includes(name));
  const events = page.sdkEvents.filter((name) =>
    commercialEventSet.has(normalizePlatformSymbol(platform, name, 'event')),
  );

  if (methods.length === 0 && events.length === 0) {
    return applyCommercialConceptOverride(pagePath, {
      kind: 'none',
      methods: [],
      openSourceMethods,
      events: [],
    });
  }

  const wasmInfo = getWasmPageCommercialInfo(wasmPath);
  return applyCommercialConceptOverride(pagePath, {
    kind: wasmInfo.kind === 'full' ? 'full' : 'partial',
    methods: methods.sort((left, right) => left.localeCompare(right)),
    openSourceMethods: openSourceMethods.sort((left, right) => left.localeCompare(right)),
    events: events.sort((left, right) => left.localeCompare(right)),
  });
}

function getClientSdkCommercialNames(pagePath) {
  const match = pagePath.match(/^\/sdk\/(android|wasm|flutter|ios|uniapp)(\/.*)$/);
  if (!match) return new Set();
  const route = { platform: match[1], wasmPath: `/sdk/wasm${match[2]}` };

  if (route.platform === 'wasm') {
    return new Set(
      [
        ...commercialMethods,
        ...commercialEvents,
        ...(pageCommercialSymbolNames[pagePath] ?? []),
      ].flatMap((name) => [name, name.split(':', 1)[0]]),
    );
  }

  const audit =
    route.platform === 'android'
      ? androidAudit
      : route.platform === 'flutter'
        ? flutterAudit
        : route.platform === 'ios'
          ? iosAudit
          : uniappAudit;
  const methodSet = new Set(commercialMethods);
  const eventSet = new Set(commercialEvents);
  const symbols = audit.pages.flatMap((page) => [
    ...page.sdkMethods.filter((name) =>
      methodSet.has(normalizePlatformSymbol(route.platform, name, 'method')),
    ),
    ...page.sdkEvents.filter((name) =>
      eventSet.has(normalizePlatformSymbol(route.platform, name, 'event')),
    ),
  ]);

  return new Set(
    [...symbols, ...(pageCommercialSymbolNames[pagePath] ?? [])].flatMap((name) => [
      name,
      name.split(':', 1)[0],
    ]),
  );
}

function getClientSdkCommercialFieldNames(pagePath) {
  const match = pagePath.match(/^\/sdk\/(android|wasm|flutter|ios|uniapp)(?:\/.*)?$/);
  return new Set([
    ...(match ? platformCommercialFieldNames[match[1]] : []),
    ...(pageCommercialFieldNames[pagePath] ?? []),
  ]);
}

test('marks the commercial method inventory', () => {
  for (const name of commercialMethods) {
    const entry = ownership.methods.find((method) => method.name === name);
    assert.ok(entry, `missing method ${name}`);
    assert.equal(entry.commercial, true, `${name} must be commercial`);
  }
});

test('marks the commercial event inventory', () => {
  for (const name of commercialEvents) {
    const entry = ownership.events.find((event) => event.name === name);
    assert.ok(entry, `missing event ${name}`);
    assert.equal(entry.commercial, true, `${name} must be commercial`);
  }
});

test('does not mark open-source methods on mixed pages as commercial', () => {
  for (const name of nonCommercialSamePageMethods) {
    const entry = ownership.methods.find((method) => method.name === name);
    assert.ok(entry, `missing method ${name}`);
    assert.equal(entry.commercial, undefined, `${name} must not be commercial`);
  }
});

test('does not mark open-source events as commercial', () => {
  for (const name of nonCommercialEvents) {
    const entry = ownership.events.find((event) => event.name === name);
    assert.ok(entry, `missing event ${name}`);
    assert.equal(entry.commercial, undefined, `${name} must not be commercial`);
  }
});

test('marks only the commercial bypass field on group-wide mute', () => {
  const content = readFileSync('content/zh/docs/chat/sdk/wasm/group/change-group-mute.mdx', 'utf8');
  assert.match(
    content,
    /`muteBypassUserIDs` <span className="enterprise-field-badge">商业版<\/span>/,
  );
  assert.equal(getPageCommercialInfo('/sdk/wasm/group/change-group-mute').kind, 'none');
});

test('marks enterprise-only fields in shared WASM return models', () => {
  const conversationContent = readFileSync(
    'content/zh/docs/chat/sdk/wasm/conversation/retrieving-conversations/retrieve-conversation-list.mdx',
    'utf8',
  );
  const selfUserContent = readFileSync(
    'content/zh/docs/chat/sdk/wasm/user/profile/get-self-user-info.mdx',
    'utf8',
  );

  assert.match(
    conversationContent,
    /`isMarked` <span className="enterprise-field-badge">商业版<\/span>/,
  );
  assert.match(
    conversationContent,
    /`remark` <span className="enterprise-field-badge">商业版<\/span>/,
  );
  for (const field of ['isPrivateChat', 'burnDuration', 'isMsgDestruct', 'msgDestructTime']) {
    assert.match(
      conversationContent,
      new RegExp(
        `\`${field}\` <span className="enterprise-field-badge">商业版<\\/span>`,
      ),
    );
  }
  assert.match(
    selfUserContent,
    /`attachedInfo` <span className="enterprise-field-badge">商业版<\/span>/,
  );
});

test('marks commercial fields in native and UniApp shared models', () => {
  const filesAndFields = [
    [
      'content/zh/docs/chat/sdk/android/conversation/overview-conversation.mdx',
      ['isPrivateChat', 'burnDuration', 'isMsgDestruct', 'msgDestructTime'],
    ],
    [
      'content/zh/docs/chat/sdk/flutter/conversation/overview-conversation.mdx',
      ['isPrivateChat', 'burnDuration', 'isMsgDestruct', 'msgDestructTime'],
    ],
    [
      'content/zh/docs/chat/sdk/uniapp/conversation/retrieving-conversations/retrieve-conversation-list.mdx',
      ['isMarked', 'remark', 'isPrivateChat', 'burnDuration', 'isMsgDestruct', 'msgDestructTime'],
    ],
    ['content/zh/docs/chat/sdk/uniapp/group/overview-group.mdx', ['displayIsRead']],
  ];

  for (const [file, fields] of filesAndFields) {
    const content = readFileSync(file, 'utf8');
    for (const field of fields) {
      assert.match(
        content,
        new RegExp(
          `\`${field}\` <span className="enterprise-field-badge">商业版<\\/span>`,
        ),
        `${file} must mark ${field} as commercial`,
      );
    }
  }

  const iosContent = readFileSync(
    'content/zh/docs/chat/sdk/ios/conversation/overview-conversation.mdx',
    'utf8',
  );
  assert.match(
    iosContent,
    /`isPrivateChat` \/ `burnDuration` <span className="enterprise-field-badge">商业版<\/span>/,
  );
  assert.match(
    iosContent,
    /`isMsgDestruct` \/ `msgDestructTime` <span className="enterprise-field-badge">商业版<\/span>/,
  );
});

test('keeps API-specific commercial fields marked in both published locales', () => {
  const fieldChecks = [
    [
      'wasm/conversation/retrieving-conversations/retrieve-conversation-list.mdx',
      ['isMarked', 'remark', 'isPrivateChat', 'burnDuration', 'isMsgDestruct', 'msgDestructTime'],
    ],
    ['wasm/group/change-group-mute.mdx', ['muteBypassUserIDs']],
    [
      'wasm/group/retrieving-groups/get-joined-group-list-page.mdx',
      ['displayIsRead', 'muteBypassUserIDs'],
    ],
    ['wasm/message/creating-messages/create-custom-message.mdx', ['searchText']],
    ['wasm/user/profile/get-self-user-info.mdx', ['addFriendPermission', 'attachedInfo']],
    [
      'android/conversation/overview-conversation.mdx',
      ['isPrivateChat', 'burnDuration', 'isMsgDestruct', 'msgDestructTime'],
    ],
    [
      'android/user/user-profile/get-self-local-user-info.mdx',
      ['addFriendPermission', 'attachedInfo'],
    ],
    [
      'flutter/conversation/overview-conversation.mdx',
      ['isPrivateChat', 'burnDuration', 'isMsgDestruct', 'msgDestructTime'],
    ],
  ];

  for (const [relativePath, fields] of fieldChecks) {
    for (const root of ['content/zh/docs/chat/sdk', 'content/docs/chat/sdk']) {
      const content = readFileSync(`${root}/${relativePath}`, 'utf8');
      const label = root.includes('/zh/') ? '商业版' : 'Enterprise';
      for (const field of fields) {
        assert.match(
          content,
          new RegExp(
            `\`${field}\` <span className="enterprise-field-badge">${label}<\\/span>`,
          ),
          `${root}/${relativePath} must mark ${field} as commercial`,
        );
      }
    }
  }

  for (const root of ['content/zh/docs/chat/sdk', 'content/docs/chat/sdk']) {
    const content = readFileSync(`${root}/ios/conversation/overview-conversation.mdx`, 'utf8');
    const label = root.includes('/zh/') ? '商业版' : 'Enterprise';
    assert.match(
      content,
      new RegExp(
        `\`isPrivateChat\` / \`burnDuration\` <span className="enterprise-field-badge">${label}<\\/span>`,
      ),
    );
    assert.match(
      content,
      new RegExp(
        `\`isMsgDestruct\` / \`msgDestructTime\` <span className="enterprise-field-badge">${label}<\\/span>`,
      ),
    );
  }
});

test('classifies full commercial pages', () => {
  assert.equal(
    getPageCommercialInfo(
      '/sdk/wasm/conversation/managing-conversation-groups/create-conversation-group',
    ).kind,
    'full',
  );
  assert.equal(
    getPageCommercialInfo(
      '/sdk/wasm/conversation/managing-conversation-groups/overview-conversation-groups',
    ).kind,
    'full',
  );
  assert.equal(
    getPageCommercialInfo('/sdk/wasm/message/managing-messages/set-message-pinned').kind,
    'full',
  );
  assert.equal(
    getPageCommercialInfo('/sdk/wasm/calling/managing-calls/start-single-call').kind,
    'full',
  );
  for (const pagePath of fullCommercialConceptPages) {
    assert.equal(getPageCommercialInfo(pagePath).kind, 'full', `${pagePath} must be commercial`);
  }
});

test('applies the WASM commercial presentation to verified native capabilities', () => {
  const flutterGroupCreate = getPageCommercialInfo(
    '/sdk/flutter/conversation/managing-conversation-groups/create-conversation-group',
  );
  assert.equal(flutterGroupCreate.kind, 'full');
  assert.deepEqual(flutterGroupCreate.methods, ['createConversationGroup']);

  const flutterGroupLookup = getPageCommercialInfo(
    '/sdk/flutter/conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id',
  );
  assert.equal(flutterGroupLookup.kind, 'full');
  assert.deepEqual(flutterGroupLookup.methods, ['getConversationGroupByConversationID']);

  const flutterGroupOverview = getPageCommercialInfo(
    '/sdk/flutter/conversation/managing-conversation-groups/overview-conversation-groups',
  );
  assert.equal(flutterGroupOverview.kind, 'full');
  assert.ok(flutterGroupOverview.events.includes('onConversationGroupAdded'));

  const flutterCalls = getPageCommercialInfo(
    '/sdk/flutter/calling/managing-calls/start-single-call',
  );
  assert.equal(flutterCalls.kind, 'full');
  assert.ok(flutterCalls.methods.includes('signalingInvite'));

  const iosCalls = getPageCommercialInfo('/sdk/ios/calling/managing-calls/start-single-call');
  assert.equal(iosCalls.kind, 'full');
  assert.ok(iosCalls.methods.includes('signalingInvite:offlinePushInfo:onSuccess:onFailure:'));

  const iosCallInfo = getPageCommercialInfo(
    '/sdk/ios/calling/retrieving-call-information/restore-pending-invitation',
  );
  assert.equal(iosCallInfo.kind, 'full');
  assert.ok(
    iosCallInfo.methods.includes('getSignalingInvitationInfoStartAppWithOnSuccess:onFailure:'),
  );

  const iosGroupCreate = getPageCommercialInfo(
    '/sdk/ios/conversation/managing-conversation-groups/create-conversation-group',
  );
  assert.equal(iosGroupCreate.kind, 'full');
  assert.deepEqual(iosGroupCreate.methods, ['Open_im_sdkCreateConversationGroup']);

  const iosGroupOverview = getPageCommercialInfo(
    '/sdk/ios/conversation/managing-conversation-groups/overview-conversation-groups',
  );
  assert.equal(iosGroupOverview.kind, 'full');
  assert.ok(iosGroupOverview.methods.includes('Open_im_sdkSetConversationGroupListener'));
  assert.ok(iosGroupOverview.events.includes('onConversationGroupAdded:'));

  const iosModify = getPageCommercialInfo('/sdk/ios/message/managing-messages/modify-a-message');
  assert.equal(iosModify.kind, 'full');
  assert.ok(
    iosModify.methods.includes('modifyMessageWithConversationID:message:onSuccess:onFailure:'),
  );

  const iosPinned = getPageCommercialInfo('/sdk/ios/message/managing-messages/set-message-pinned');
  assert.equal(iosPinned.kind, 'full');
  assert.ok(iosPinned.events.includes('onChangedPinnedMsg:'));

  const iosTranscription = getPageCommercialInfo(
    '/sdk/ios/message/composing-messages/transcribe-audio',
  );
  assert.equal(iosTranscription.kind, 'full');
  assert.ok(iosTranscription.methods.includes('Open_im_sdkSpeechToText'));

  const flutterModify = getPageCommercialInfo(
    '/sdk/flutter/message/managing-messages/modify-a-message',
  );
  assert.equal(flutterModify.kind, 'full');
  assert.ok(flutterModify.methods.includes('modifyMessage'));
  assert.ok(flutterModify.events.includes('onMessageModified'));

  const flutterPinned = getPageCommercialInfo(
    '/sdk/flutter/message/managing-messages/set-message-pinned',
  );
  assert.equal(flutterPinned.kind, 'full');
  assert.ok(flutterPinned.methods.includes('setConversationPinnedMsg'));
  assert.ok(flutterPinned.events.includes('onChangedPinnedMsg'));

  const uniappCapabilities = getPageCommercialInfo(
    '/sdk/uniapp/message/composing-messages/check-speech-to-text',
  );
  assert.equal(uniappCapabilities.kind, 'full');
  assert.deepEqual(uniappCapabilities.methods, ['getSpeechToTextCapabilities']);

  const uniappTranscription = getPageCommercialInfo(
    '/sdk/uniapp/message/composing-messages/transcribe-audio',
  );
  assert.equal(uniappTranscription.kind, 'full');
  assert.deepEqual(uniappTranscription.methods, ['speechToText']);

  const uniappGroupLookup = getPageCommercialInfo(
    '/sdk/uniapp/conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id',
  );
  assert.equal(uniappGroupLookup.kind, 'full');
  assert.deepEqual(uniappGroupLookup.methods, ['getConversationGroupByConversationID']);

  const uniappPendingInvitation = getPageCommercialInfo(
    '/sdk/uniapp/calling/retrieving-call-information/restore-pending-invitation',
  );
  assert.equal(uniappPendingInvitation.kind, 'full');
  assert.deepEqual(uniappPendingInvitation.methods, ['signalingGetInvitationInfoStartApp']);

  assert.equal(
    getPageCommercialInfo('/sdk/uniapp/message/retrieving-messages/load-newer-messages').kind,
    'full',
  );

  const androidPinned = getPageCommercialInfo(
    '/sdk/android/message/managing-messages/get-pinned-messages',
  );
  assert.equal(androidPinned.kind, 'full');
  assert.ok(androidPinned.methods.includes('getConversationPinnedMsgs'));

  const flutterTranscription = getPageCommercialInfo(
    '/sdk/flutter/message/composing-messages/transcribe-audio',
  );
  assert.equal(flutterTranscription.kind, 'full');
  assert.ok(flutterTranscription.methods.includes('speechToText'));
});

test('marks calling overviews as mixed while preserving verified platform symbols', () => {
  const wasmOverview = getPageCommercialInfo('/sdk/wasm/calling/overview-calling');
  assert.equal(wasmOverview.kind, 'partial');
  assert.ok(wasmOverview.methods.includes('signalingAccept'));
  assert.ok(wasmOverview.methods.includes('signalingInvite'));
  assert.ok(wasmOverview.events.includes('OnReceiveNewInvitation'));

  const flutterOverview = getPageCommercialInfo('/sdk/flutter/calling/overview-calling');
  assert.equal(flutterOverview.kind, 'partial');
  assert.ok(flutterOverview.methods.includes('signalingAccept'));
  assert.ok(flutterOverview.methods.includes('signalingInvite'));
  assert.ok(flutterOverview.methods.includes('getSignalingInvitationInfoStartApp'));

  const iosOverview = getPageCommercialInfo('/sdk/ios/calling/overview-calling');
  assert.equal(iosOverview.kind, 'partial');
  assert.ok(iosOverview.methods.includes('signalingAccept:onSuccess:onFailure:'));
  assert.ok(iosOverview.methods.includes('signalingInvite:offlinePushInfo:onSuccess:onFailure:'));
  assert.ok(
    iosOverview.methods.includes('getSignalingInvitationInfoStartAppWithOnSuccess:onFailure:'),
  );

  const androidOverview = getPageCommercialInfo('/sdk/android/calling/overview-calling');
  assert.equal(androidOverview.kind, 'partial');
  assert.ok(androidOverview.methods.includes('signalingAccept'));
  assert.ok(androidOverview.methods.includes('signalingInvite'));
  assert.ok(androidOverview.methods.includes('getSignalingInvitationInfoStartApp'));

  const uniappOverview = getPageCommercialInfo('/sdk/uniapp/calling/overview-calling');
  assert.equal(uniappOverview.kind, 'partial');
  assert.ok(uniappOverview.methods.includes('signalingAccept'));
  assert.ok(uniappOverview.methods.includes('signalingInvite'));
  assert.ok(uniappOverview.methods.includes('signalingGetInvitationInfoStartApp'));
});

test('classifies native aggregate pages that reference commercial events as mixed', () => {
  const expectedCommercialEvents = new Map([
    ['/sdk/android/message/overview-message', 'onMsgDeleted'],
    ['/sdk/android/user/overview-relationships', 'onFriendApplicationDeleted'],
    ['/sdk/flutter/events/overview-events', 'onGroupApplicationDeleted'],
    ['/sdk/ios/group/group-applications/overview-group-applications', 'onGroupApplicationDeleted:'],
    ['/sdk/ios/message/overview-message', 'onChangedPinnedMsg:'],
  ]);

  for (const [pagePath, eventName] of expectedCommercialEvents) {
    const info = getPageCommercialInfo(pagePath);
    assert.equal(info.kind, 'partial', `${pagePath} must be a mixed commercial page`);
    assert.ok(info.events.includes(eventName), `${pagePath} must include ${eventName}`);
  }

  const flutterMessageOverview = getPageCommercialInfo('/sdk/flutter/message/overview-message');
  assert.equal(flutterMessageOverview.kind, 'partial');
  assert.ok(flutterMessageOverview.methods.includes('speechToText'));

  const iosEventOverview = getPageCommercialInfo('/sdk/ios/events/overview-events');
  assert.equal(iosEventOverview.kind, 'partial');
  assert.ok(iosEventOverview.methods.includes('Open_im_sdkSetConversationGroupListener'));
});

test('classifies domain overviews that include commercial capabilities as mixed', () => {
  const overviewPaths = [
    '/sdk/wasm/conversation/overview-conversation',
    '/sdk/android/conversation/overview-conversation',
    '/sdk/flutter/conversation/overview-conversation',
    '/sdk/ios/conversation/overview-conversation',
    '/sdk/uniapp/conversation/overview-conversation',
    '/sdk/wasm/events/overview-events',
    '/sdk/android/events/overview-events',
    '/sdk/uniapp/events/overview-events',
    '/sdk/wasm/group/overview-group',
    '/sdk/ios/group/overview-group',
    '/sdk/uniapp/group/overview-group',
    '/sdk/wasm/message/overview-message',
    '/sdk/uniapp/message/overview-message',
    '/sdk/wasm/user/overview-user',
    '/sdk/android/user/overview-user',
    '/sdk/flutter/user/overview-user',
    '/sdk/ios/user/overview-user',
    '/sdk/uniapp/user/overview-user',
  ];

  for (const pagePath of overviewPaths) {
    assert.equal(
      getPageCommercialInfo(pagePath).kind,
      'partial',
      `${pagePath} must be a mixed commercial overview`,
    );
  }
});

test('does not infer commercial presentation for absent or open-source native capabilities', () => {
  assert.equal(
    getPageCommercialInfo('/sdk/flutter/calling/sending-custom-signals/send-a-custom-signal').kind,
    'none',
  );
  assert.equal(
    getPageCommercialInfo('/sdk/ios/calling/sending-custom-signals/send-a-custom-signal').kind,
    'none',
  );
  assert.equal(
    getPageCommercialInfo('/sdk/flutter/message/managing-read-status/manage-message-read-receipts')
      .kind,
    'none',
  );
});

test('classifies mixed commercial pages', () => {
  const deletePage = getPageCommercialInfo(
    '/sdk/wasm/message/managing-messages/delete-saved-messages',
  );
  assert.equal(deletePage.kind, 'full');
  assert.deepEqual(deletePage.methods, ['deleteMessages']);
  assert.ok(deletePage.openSourceMethods.includes('revokeMessage') === false);
  assert.equal(
    getPageCommercialInfo('/sdk/wasm/message/managing-messages/delete-local-message').kind,
    'none',
  );

  assert.equal(
    getPageCommercialInfo('/sdk/wasm/message/managing-messages/revoke-a-message').kind,
    'none',
  );

  assert.equal(
    getPageCommercialInfo('/sdk/wasm/message/managing-messages/modify-a-message').kind,
    'full',
  );

  const history = getPageCommercialInfo(
    '/sdk/wasm/message/retrieving-messages/load-newer-messages',
  );
  assert.equal(history.kind, 'full');
  assert.deepEqual(history.methods, ['getAdvancedHistoryMessageListReverse']);

  assert.equal(
    getPageCommercialInfo('/sdk/wasm/user/friend-applications/delete-friend-requests').kind,
    'full',
  );
  assert.equal(
    getPageCommercialInfo('/sdk/wasm/group/group-applications/delete-group-requests').kind,
    'full',
  );

  for (const pagePath of [
    '/sdk/android/message/managing-messages/delete-saved-messages',
    '/sdk/android/message/retrieving-messages/load-message-context',
    '/sdk/android/message/managing-read-status/send-group-read-receipts',
    '/sdk/android/message/managing-read-status/get-group-message-readers',
  ]) {
    assert.equal(getPageCommercialInfo(pagePath).kind, 'full');
  }

  assert.equal(
    getPageCommercialInfo('/sdk/android/message/managing-messages/delete-user-messages').kind,
    'none',
  );
  assert.equal(
    getPageCommercialInfo('/sdk/android/message/composing-messages/update-typing-status').kind,
    'none',
  );

  const flutterFriendApplications = getPageCommercialInfo(
    '/sdk/flutter/user/friend-applications/get-friend-application-list-as-recipient',
  );
  assert.equal(flutterFriendApplications.kind, 'partial');
  assert.deepEqual(flutterFriendApplications.events, ['onFriendApplicationDeleted']);

  const iosFriendApplications = getPageCommercialInfo(
    '/sdk/ios/user/friend-applications/get-friend-application-list-as-recipient',
  );
  assert.equal(iosFriendApplications.kind, 'partial');
  assert.deepEqual(iosFriendApplications.events, ['onFriendApplicationDeleted:']);
});

test('matches commercial symbols in inline code text', () => {
  function matchCommercialSymbol(codeText, commercialNames) {
    if (commercialNames.size === 0) return null;
    const trimmed = codeText.trim();
    const withoutCall = trimmed.replace(/\(\s*\)$/, '');
    const candidates = [
      withoutCall,
      withoutCall.replace(/^OpenIM\./, ''),
      withoutCall.replace(/^SdkEvent\./, ''),
      withoutCall.includes('.') ? (withoutCall.split('.').at(-1) ?? withoutCall) : withoutCall,
    ];
    for (const candidate of candidates) {
      if (commercialNames.has(candidate)) return candidate;
    }
    return null;
  }

  const names = new Set(['getAdvancedHistoryMessageListReverse', 'OnMsgDeleted']);
  assert.equal(
    matchCommercialSymbol('getAdvancedHistoryMessageListReverse()', names),
    'getAdvancedHistoryMessageListReverse',
  );
  assert.equal(
    matchCommercialSymbol('OpenIM.getAdvancedHistoryMessageListReverse', names),
    matchCommercialSymbol('openimsdk.getAdvancedHistoryMessageListReverse', names),
    'getAdvancedHistoryMessageListReverse',
  );
  assert.equal(matchCommercialSymbol('SdkEvent.OnMsgDeleted', names), 'OnMsgDeleted');
  assert.equal(matchCommercialSymbol('getAdvancedHistoryMessageList()', names), null);
});

test('provides platform-wide commercial API names for inline references on every SDK page', () => {
  const wasm = getClientSdkCommercialNames('/sdk/wasm/user/blacklist/add-black');
  assert.ok(wasm.has('deleteMessages'));
  assert.ok(wasm.has('OnMsgDeleted'));
  assert.equal(wasm.has('revokeMessage'), false);

  const android = getClientSdkCommercialNames('/sdk/android/user/blacklist/add-black');
  assert.ok(android.has('getConversationPinnedMsgs'));
  assert.ok(android.has('onRecvGroupMessageReadReceipt'));
  assert.ok(
    getClientSdkCommercialNames(
      '/sdk/android/conversation/managing-conversations/set-private-chat',
    ).has('setOneConversationPrivateChat'),
  );

  const flutter = getClientSdkCommercialNames('/sdk/flutter/user/friends/check-friend');
  assert.ok(flutter.has('getConversationGroupByConversationID'));
  assert.ok(flutter.has('onHangup'));

  const ios = getClientSdkCommercialNames('/sdk/ios/user/friends/check-friend');
  assert.ok(ios.has('modifyMessageWithConversationID:message:onSuccess:onFailure:'));
  assert.ok(ios.has('modifyMessageWithConversationID'));
  assert.ok(
    getClientSdkCommercialNames(
      '/sdk/ios/conversation/managing-conversations/set-message-destruct-time',
    ).has('setConversationMsgDestructTime'),
  );

  const uniapp = getClientSdkCommercialNames('/sdk/uniapp/user/blacklist/add-black');
  assert.ok(uniapp.has('signalingGetInvitationInfoStartApp'));
});

test('provides platform-specific commercial field names for inline text and examples', () => {
  const wasm = getClientSdkCommercialFieldNames('/sdk/wasm/conversation/overview-conversation');
  assert.ok(wasm.has('isPrivateChat'));
  assert.ok(wasm.has('isMarked'));
  assert.ok(wasm.has('searchText'));
  assert.equal(wasm.has('globalRecvMsgOpt'), false);

  const android = getClientSdkCommercialFieldNames(
    '/sdk/android/conversation/overview-conversation',
  );
  assert.ok(android.has('addFriendPermission'));
  assert.equal(android.has('isMarked'), false);

  const ios = getClientSdkCommercialFieldNames('/sdk/ios/conversation/overview-conversation');
  assert.ok(ios.has('msgDestructTime'));
  assert.equal(ios.has('addFriendPermission'), false);

  const uniapp = getClientSdkCommercialFieldNames(
    '/sdk/uniapp/conversation/overview-conversation',
  );
  assert.ok(uniapp.has('isMarked'));
  assert.ok(uniapp.has('muteBypassUserIDs'));
  assert.ok(
    getClientSdkCommercialFieldNames(
      '/sdk/uniapp/message/retrieving-messages/load-newer-messages',
    ).has('isReverse'),
  );

  const wasmRemark = getClientSdkCommercialFieldNames(
    '/sdk/wasm/conversation/managing-conversations/set-conversation-remark',
  );
  assert.ok(wasmRemark.has('remark'));
  assert.equal(
    getClientSdkCommercialFieldNames('/sdk/wasm/user/friends/update-friends').has('remark'),
    false,
  );
  assert.ok(
    getClientSdkCommercialFieldNames('/sdk/android/user/user-profile/get-self-local-user-info').has(
      'attachedInfo',
    ),
  );
  assert.equal(
    getClientSdkCommercialFieldNames('/sdk/wasm/user/friends/get-friend-list-page').has(
      'attachedInfo',
    ),
    false,
  );

});

test('leaves non-commercial pages unmarked', () => {
  assert.equal(
    getPageCommercialInfo('/sdk/wasm/getting-started/authenticate-and-manage-session').kind,
    'none',
  );
});
