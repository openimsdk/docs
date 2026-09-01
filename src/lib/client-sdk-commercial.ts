import flutterAudit from '@/data/structure/flutter-content-audit.json';
import iosAudit from '@/data/structure/ios-content-audit.json';
import androidAudit from '@/data/structure/android-content-audit.json';
import reactNativeAudit from '@/data/structure/react-native-content-audit.json';
import uniappAudit from '@/data/structure/uniapp-content-audit.json';
import harmonyAudit from '@/data/structure/harmony-content-audit.json';
import ownership from '@/data/structure/wasm-api-ownership.json';

type OwnershipEntry = {
  name: string;
  page: string | null;
  status: string;
  commercial?: boolean;
};

type NativePlatform =
  | 'android'
  | 'flutter'
  | 'ios'
  | 'react-native'
  | 'uniapp'
  | 'harmony';

type ClientSdkAuditPage = {
  currentPath: string;
  disposition: string;
  sdkEvents: string[];
  sdkMethods: string[];
};

export type PageCommercialKind = 'full' | 'partial' | 'none';

export type PageCommercialInfo = {
  kind: PageCommercialKind;
  methods: string[];
  openSourceMethods: string[];
  events: string[];
};

const methods = ownership.methods as OwnershipEntry[];
const events = ownership.events as OwnershipEntry[];
const commercialMethodNames = new Set(
  methods.filter((entry) => entry.commercial).map((entry) => entry.name),
);
const commercialEventNames = new Set(
  events.filter((entry) => entry.commercial).map((entry) => entry.name),
);
const nativeAudits: Record<NativePlatform, ClientSdkAuditPage[]> = {
  android: androidAudit.pages as ClientSdkAuditPage[],
  flutter: flutterAudit.pages as ClientSdkAuditPage[],
  ios: iosAudit.pages as ClientSdkAuditPage[],
  'react-native': reactNativeAudit.pages as ClientSdkAuditPage[],
  uniapp: uniappAudit.pages as ClientSdkAuditPage[],
  harmony: harmonyAudit.pages as ClientSdkAuditPage[],
};

const sharedCommercialFieldNames = [
  'burnDuration',
  'displayIsRead',
  'isMsgDestruct',
  'isPrivateChat',
  'msgDestructTime',
  'muteBypassUserIDs',
];

const platformCommercialFieldNames: Record<'wasm' | NativePlatform, string[]> = {
  android: [...sharedCommercialFieldNames, 'addFriendPermission'],
  flutter: sharedCommercialFieldNames,
  harmony: [
    ...sharedCommercialFieldNames,
    'addFriendPermission',
    'isMarked',
    'isShowGroupRead',
    'searchText',
  ],
  ios: sharedCommercialFieldNames,
  'react-native': [...sharedCommercialFieldNames, 'addFriendPermission', 'isMarked'],
  uniapp: [...sharedCommercialFieldNames, 'addFriendPermission', 'isMarked'],
  wasm: [...sharedCommercialFieldNames, 'addFriendPermission', 'isMarked', 'searchText'],
};

const pageCommercialFieldNames: Record<string, string[]> = {
  '/sdk/android/user/user-profile/get-self-local-user-info': ['attachedInfo'],
  '/sdk/harmony/conversation/managing-conversations/set-conversation-remark': ['remark'],
  '/sdk/harmony/conversation/overview-conversation': ['remark'],
  '/sdk/harmony/conversation/retrieving-conversations/retrieve-conversation-list': ['remark'],
  '/sdk/harmony/message/retrieving-messages/load-newer-messages': ['isReverse'],
  '/sdk/react-native/conversation/managing-conversations/set-conversation-remark': ['remark'],
  '/sdk/react-native/conversation/overview-conversation': ['remark'],
  '/sdk/react-native/conversation/retrieving-conversations/retrieve-conversation-list': [
    'remark',
  ],
  '/sdk/uniapp/conversation/managing-conversations/set-conversation-remark': ['remark'],
  '/sdk/uniapp/conversation/overview-conversation': ['remark'],
  '/sdk/uniapp/conversation/retrieving-conversations/retrieve-conversation-list': ['remark'],
  '/sdk/uniapp/message/retrieving-messages/load-newer-messages': ['isReverse'],
  '/sdk/wasm/conversation/managing-conversations/set-conversation-remark': ['remark'],
  '/sdk/wasm/conversation/overview-conversation': ['remark'],
  '/sdk/wasm/conversation/retrieving-conversations/retrieve-conversation-list': ['remark'],
  '/sdk/wasm/user/profile/get-self-user-info': ['attachedInfo'],
};

const pageCommercialSymbolNames: Record<string, string[]> = {
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
  '/sdk/harmony/logger': ['setTemporaryLogLevel'],
};

const platformSymbolAliases: Record<NativePlatform, Record<string, string>> = {
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
  'react-native': {
    getConversationGroupByConversationID: 'getConversationGroupIDsByConversationID',
  },
  uniapp: {
    getConversationGroupByConversationID: 'getConversationGroupIDsByConversationID',
    getSpeechToTextCapabilities: 'speechToTextCapabilities',
    signalingGetInvitationInfoStartApp: 'getSignalingInvitationInfoStartApp',
  },
  harmony: {
    getConversationGroupByConversationID: 'getConversationGroupIDsByConversationID',
    getSpeechToTextCapabilities: 'speechToTextCapabilities',
    EventOnMessageDeleted: 'OnMsgDeleted',
  },
};

const partialCommercialConceptSources: Record<string, string[]> = {
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
  '/sdk/react-native/conversation/overview-conversation': [
    '/sdk/react-native/conversation/managing-conversation-groups/overview-conversation-groups',
    '/sdk/react-native/conversation/managing-conversations/mark-conversation',
    '/sdk/react-native/conversation/managing-conversations/set-conversation-remark',
    '/sdk/react-native/conversation/managing-conversations/set-private-chat',
    '/sdk/react-native/conversation/managing-conversations/set-message-destruct',
  ],
  '/sdk/uniapp/conversation/overview-conversation': [
    '/sdk/uniapp/conversation/managing-conversation-groups/overview-conversation-groups',
    '/sdk/uniapp/conversation/managing-conversations/mark-conversation',
    '/sdk/uniapp/conversation/managing-conversations/set-conversation-remark',
    '/sdk/uniapp/conversation/managing-conversations/set-private-chat',
    '/sdk/uniapp/conversation/managing-conversations/set-message-destruct',
  ],
  '/sdk/harmony/conversation/overview-conversation': [
    '/sdk/harmony/conversation/managing-conversation-groups/overview-conversation-groups',
    '/sdk/harmony/conversation/managing-conversations/mark-conversation',
    '/sdk/harmony/conversation/managing-conversations/set-conversation-remark',
    '/sdk/harmony/conversation/managing-conversations/set-private-chat',
    '/sdk/harmony/conversation/managing-conversations/set-message-destruct',
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
  '/sdk/react-native/events/overview-events': [
    '/sdk/react-native/group/group-applications/get-group-application-list-as-recipient',
    '/sdk/react-native/message/managing-messages/delete-saved-messages',
    '/sdk/react-native/message/managing-messages/modify-a-message',
    '/sdk/react-native/calling/managing-calls/handle-call-events',
  ],
  '/sdk/uniapp/events/overview-events': [
    '/sdk/uniapp/group/group-applications/get-group-application-list-as-recipient',
    '/sdk/uniapp/message/managing-messages/delete-saved-messages',
    '/sdk/uniapp/message/managing-messages/modify-a-message',
    '/sdk/uniapp/message/managing-messages/set-message-pinned',
    '/sdk/uniapp/calling/managing-calls/handle-call-events',
  ],
  '/sdk/harmony/events/overview-events': [
    '/sdk/harmony/group/group-applications/get-group-application-list-as-recipient',
    '/sdk/harmony/message/managing-messages/delete-saved-messages',
    '/sdk/harmony/message/managing-messages/modify-a-message',
    '/sdk/harmony/message/managing-messages/set-message-pinned',
    '/sdk/harmony/calling/managing-calls/handle-call-events',
  ],
  '/sdk/wasm/group/overview-group': [
    '/sdk/wasm/group/group-applications/get-group-application-list-as-recipient',
  ],
  '/sdk/ios/group/overview-group': [
    '/sdk/ios/group/group-applications/overview-group-applications',
  ],
  '/sdk/react-native/group/overview-group': [
    '/sdk/react-native/group/group-applications/get-group-application-list-as-recipient',
  ],
  '/sdk/uniapp/group/overview-group': [
    '/sdk/uniapp/group/group-applications/get-group-application-list-as-recipient',
  ],
  '/sdk/harmony/group/overview-group': [
    '/sdk/harmony/group/group-applications/get-group-application-list-as-recipient',
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
  '/sdk/react-native/message/overview-message': [
    '/sdk/react-native/message/composing-messages/check-speech-to-text',
    '/sdk/react-native/message/composing-messages/save-local-transcript',
    '/sdk/react-native/message/composing-messages/transcribe-audio',
    '/sdk/react-native/message/managing-messages/delete-saved-messages',
    '/sdk/react-native/message/managing-messages/modify-a-message',
    '/sdk/react-native/message/managing-read-status/send-group-read-receipts',
    '/sdk/react-native/message/retrieving-messages/load-message-context',
    '/sdk/react-native/message/retrieving-messages/load-newer-messages',
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
  '/sdk/harmony/message/overview-message': [
    '/sdk/harmony/message/composing-messages/check-speech-to-text',
    '/sdk/harmony/message/composing-messages/save-local-transcript',
    '/sdk/harmony/message/composing-messages/transcribe-audio',
    '/sdk/harmony/message/managing-messages/delete-saved-messages',
    '/sdk/harmony/message/managing-messages/modify-a-message',
    '/sdk/harmony/message/managing-messages/set-message-pinned',
    '/sdk/harmony/message/managing-read-status/send-group-read-receipts',
    '/sdk/harmony/message/retrieving-messages/load-message-context',
    '/sdk/harmony/message/retrieving-messages/load-newer-messages',
    '/sdk/harmony/message/translating-messages/translate-text',
    '/sdk/harmony/message/translating-messages/translate-message',
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
  '/sdk/react-native/user/overview-user': [
    '/sdk/react-native/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/react-native/user/profile/set-friend-add-permission',
  ],
  '/sdk/uniapp/user/overview-user': [
    '/sdk/uniapp/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/uniapp/user/profile/set-friend-add-permission',
  ],
  '/sdk/harmony/user/overview-user': [
    '/sdk/harmony/user/friend-applications/get-friend-application-list-as-recipient',
    '/sdk/harmony/user/profile/set-friend-add-permission',
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
  '/sdk/react-native/calling/overview-calling': [
    '/sdk/react-native/calling/managing-calls/accept-call',
    '/sdk/react-native/calling/managing-calls/cancel-call',
    '/sdk/react-native/calling/managing-calls/hang-up-call',
    '/sdk/react-native/calling/managing-calls/reject-call',
    '/sdk/react-native/calling/managing-calls/start-group-call',
    '/sdk/react-native/calling/managing-calls/start-single-call',
    '/sdk/react-native/calling/managing-calls/handle-call-events',
    '/sdk/react-native/calling/retrieving-call-information/get-room-by-group-id',
    '/sdk/react-native/calling/retrieving-call-information/get-token-by-room-id',
    '/sdk/react-native/calling/retrieving-call-information/restore-pending-invitation',
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
  '/sdk/harmony/calling/overview-calling': [
    '/sdk/harmony/calling/managing-calls/accept-call',
    '/sdk/harmony/calling/managing-calls/cancel-call',
    '/sdk/harmony/calling/managing-calls/hang-up-call',
    '/sdk/harmony/calling/managing-calls/reject-call',
    '/sdk/harmony/calling/managing-calls/start-group-call',
    '/sdk/harmony/calling/managing-calls/start-single-call',
    '/sdk/harmony/calling/managing-calls/handle-call-events',
    '/sdk/harmony/calling/retrieving-call-information/get-room-by-group-id',
    '/sdk/harmony/calling/retrieving-call-information/get-token-by-room-id',
    '/sdk/harmony/calling/retrieving-call-information/restore-pending-invitation',
  ],
};

// These capabilities share general-purpose setters with open-source fields. Classify the
// task page instead of marking the whole setter as commercial.
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
  '/sdk/android/user/user-profile/set-friend-add-permission',
  '/sdk/react-native/user/profile/set-friend-add-permission',
  '/sdk/react-native/conversation/managing-conversations/mark-conversation',
  '/sdk/react-native/conversation/managing-conversations/set-conversation-remark',
  '/sdk/react-native/conversation/managing-conversations/set-private-chat',
  '/sdk/react-native/conversation/managing-conversations/set-burn-duration',
  '/sdk/react-native/conversation/managing-conversations/set-message-destruct',
  '/sdk/uniapp/conversation/managing-conversations/set-private-chat',
  '/sdk/uniapp/conversation/managing-conversations/set-burn-duration',
  '/sdk/uniapp/conversation/managing-conversations/set-message-destruct',
  '/sdk/uniapp/conversation/managing-conversations/set-conversation-remark',
  '/sdk/uniapp/conversation/managing-conversations/mark-conversation',
  '/sdk/uniapp/message/composing-messages/save-local-transcript',
  '/sdk/uniapp/message/retrieving-messages/load-newer-messages',
  '/sdk/uniapp/user/profile/set-friend-add-permission',
  '/sdk/harmony/conversation/managing-conversations/set-private-chat',
  '/sdk/harmony/conversation/managing-conversations/set-burn-duration',
  '/sdk/harmony/conversation/managing-conversations/set-message-destruct',
  '/sdk/harmony/conversation/managing-conversations/set-conversation-remark',
  '/sdk/harmony/conversation/managing-conversations/mark-conversation',
  '/sdk/harmony/message/composing-messages/save-local-transcript',
  '/sdk/harmony/message/translating-messages/translate-text',
  '/sdk/harmony/message/translating-messages/translate-message',
  '/sdk/harmony/message/retrieving-messages/load-newer-messages',
  '/sdk/harmony/user/profile/set-friend-add-permission',
]);

const partialCommercialConceptPages = new Set(['/sdk/harmony/logger']);

function applyCommercialConceptOverride(
  pagePath: string,
  info: PageCommercialInfo,
): PageCommercialInfo {
  if (fullCommercialConceptPages.has(pagePath)) return { ...info, kind: 'full' };
  if (partialCommercialConceptPages.has(pagePath)) return { ...info, kind: 'partial' };
  return info;
}

function getWasmPageCommercialInfo(pagePath: string): PageCommercialInfo {
  const documentedMethods = methods.filter(
    (entry) => entry.page === pagePath && entry.status === 'documented',
  );
  const commercialMethods = documentedMethods
    .filter((entry) => entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
  const openSourceMethods = documentedMethods
    .filter((entry) => !entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
  const commercialEvents = events
    .filter((entry) => entry.page === pagePath && entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));

  if (commercialMethods.length === 0 && commercialEvents.length === 0) {
    return { kind: 'none', methods: [], openSourceMethods, events: [] };
  }

  const kind: PageCommercialKind = openSourceMethods.length === 0 ? 'full' : 'partial';

  return {
    kind,
    methods: commercialMethods,
    openSourceMethods,
    events: commercialEvents,
  };
}

function parseClientSdkPath(
  pagePath: string,
):
  | { platform: 'wasm'; wasmPath: string }
  | { platform: NativePlatform; wasmPath: string }
  | undefined {
  const match = pagePath.match(
    /^\/sdk\/(android|wasm|flutter|ios|react-native|uniapp|harmony)(\/.*)$/,
  );
  if (!match) return undefined;

  const platform = match[1] as 'wasm' | NativePlatform;
  return {
    platform,
    wasmPath: `/sdk/wasm${match[2]}`,
  };
}

function normalizePlatformSymbol(
  platform: NativePlatform,
  symbol: string,
  type: 'method' | 'event',
): string {
  const selectorBase = symbol.split(':', 1)[0];
  const alias = platformSymbolAliases[platform][selectorBase];
  if (alias) return alias;
  if (type === 'event' && selectorBase.startsWith('on')) {
    return `On${selectorBase.slice(2)}`;
  }
  if (type === 'event' && selectorBase.startsWith('EventOn')) {
    return selectorBase.slice('Event'.length);
  }
  return selectorBase;
}

export function getPageCommercialInfo(pagePath: string): PageCommercialInfo {
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

  const route = parseClientSdkPath(pagePath);
  if (!route) return { kind: 'none', methods: [], openSourceMethods: [], events: [] };
  if (route.platform === 'wasm') {
    return applyCommercialConceptOverride(pagePath, getWasmPageCommercialInfo(route.wasmPath));
  }

  const page = nativeAudits[route.platform].find(
    (entry) => entry.currentPath === pagePath && entry.disposition !== 'omit',
  );
  if (!page) return { kind: 'none', methods: [], openSourceMethods: [], events: [] };

  const commercialMethods = page.sdkMethods.filter((name) =>
    commercialMethodNames.has(normalizePlatformSymbol(route.platform, name, 'method')),
  );
  const openSourceMethods = page.sdkMethods.filter((name) => !commercialMethods.includes(name));
  const commercialEvents = page.sdkEvents.filter((name) =>
    commercialEventNames.has(normalizePlatformSymbol(route.platform, name, 'event')),
  );

  if (commercialMethods.length === 0 && commercialEvents.length === 0) {
    return applyCommercialConceptOverride(pagePath, {
      kind: 'none',
      methods: [],
      openSourceMethods,
      events: [],
    });
  }

  const wasmInfo = getWasmPageCommercialInfo(route.wasmPath);
  return applyCommercialConceptOverride(pagePath, {
    kind: wasmInfo.kind === 'full' ? 'full' : 'partial',
    methods: commercialMethods.sort((left, right) => left.localeCompare(right)),
    openSourceMethods: openSourceMethods.sort((left, right) => left.localeCompare(right)),
    events: commercialEvents.sort((left, right) => left.localeCompare(right)),
  });
}

export function getPageCommercialNames(pagePath: string): Set<string> {
  const info = getPageCommercialInfo(pagePath);
  const symbols = [...info.methods, ...info.events];
  return new Set(symbols.flatMap((name) => [name, name.split(':', 1)[0]]));
}

/** Return every commercial SDK symbol for the platform referenced by this route. */
export function getClientSdkCommercialNames(pagePath: string): Set<string> {
  const route = parseClientSdkPath(pagePath);
  if (!route) return new Set();

  if (route.platform === 'wasm') {
    return new Set(
      [
        ...commercialMethodNames,
        ...commercialEventNames,
        ...(pageCommercialSymbolNames[pagePath] ?? []),
      ].flatMap((name) => [name, name.split(':', 1)[0]]),
    );
  }

  const symbols = nativeAudits[route.platform].flatMap((page) => [
    ...page.sdkMethods.filter((name) =>
      commercialMethodNames.has(normalizePlatformSymbol(route.platform, name, 'method')),
    ),
    ...page.sdkEvents.filter((name) =>
      commercialEventNames.has(normalizePlatformSymbol(route.platform, name, 'event')),
    ),
  ]);

  return new Set(
    [...symbols, ...(pageCommercialSymbolNames[pagePath] ?? [])].flatMap((name) => [
      name,
      name.split(':', 1)[0],
    ]),
  );
}

/** Return unambiguous commercial-only field names for the SDK platform. */
export function getClientSdkCommercialFieldNames(pagePath: string): Set<string> {
  const route = parseClientSdkPath(pagePath);
  return new Set([
    ...(route ? platformCommercialFieldNames[route.platform] : []),
    ...(pageCommercialFieldNames[pagePath] ?? []),
  ]);
}

/** Match inline code containing an SDK method or event to a commercial symbol. */
export function matchCommercialSymbol(
  codeText: string,
  commercialNames: ReadonlySet<string>,
): string | null {
  if (commercialNames.size === 0) return null;

  const trimmed = codeText.trim();
  const withoutCall = trimmed.replace(/\(\s*\)$/, '');
  const candidates = [
    withoutCall,
    withoutCall.replace(/^openimsdk\./, ''),
    withoutCall.replace(/^OpenIM\./, ''),
    withoutCall.replace(/^SdkEvent\./, ''),
    withoutCall.includes('.') ? (withoutCall.split('.').at(-1) ?? withoutCall) : withoutCall,
  ];

  for (const candidate of candidates) {
    if (commercialNames.has(candidate)) return candidate;
  }
  return null;
}
