import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();

const renamedSuffixes = new Map([
  ['message/creating-messages/create-image-message-by-file', 'message/creating-messages/create-image-message-from-full-path'],
  ['message/creating-messages/create-sound-message-by-file', 'message/creating-messages/create-sound-message-from-full-path'],
  ['message/creating-messages/create-video-message-by-file', 'message/creating-messages/create-video-message-from-full-path'],
  ['message/creating-messages/create-file-message-by-file', 'message/creating-messages/create-file-message-from-full-path'],
  ['conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id', 'conversation/managing-conversation-groups/get-conversation-group-by-conversation-id'],
  ['group/group-applications/get-group-application-badge-count', 'group/group-applications/observe-group-application-badge-count'],
]);

const operationPages = {
  cancelUpload: 'file-uploads/upload-file',
  checkGroupMemberFullSync: 'group/check-full-sync-state',
  checkLocalGroupFullSync: 'group/check-full-sync-state',
  createFileMessage: 'message/creating-messages/create-file-message-from-full-path',
  createFileMessageFromFullPath: 'message/creating-messages/create-file-message-from-full-path',
  createImageMessage: 'message/creating-messages/create-image-message-from-full-path',
  createImageMessageFromFullPath: 'message/creating-messages/create-image-message-from-full-path',
  createSoundMessage: 'message/creating-messages/create-sound-message-from-full-path',
  createSoundMessageFromFullPath: 'message/creating-messages/create-sound-message-from-full-path',
  createVideoMessage: 'message/creating-messages/create-video-message-from-full-path',
  createVideoMessageFromFullPath: 'message/creating-messages/create-video-message-from-full-path',
  getBlacks: 'user/blacklist/get-black-list',
  getConversationGroupByConversationID: 'conversation/managing-conversation-groups/get-conversation-group-by-conversation-id',
  getHistoryMessageList: 'message/retrieving-messages/load-older-messages',
  getOpenIMDataPath: 'getting-started/install-initialize-and-inspect-sdk',
  getSDKSessionSnapshot: 'getting-started/update-token-and-observe-sdk-session',
  getSdkVersion: 'getting-started/install-initialize-and-inspect-sdk',
  getSpeechToTextCapabilities: 'message/composing-messages/check-speech-to-text',
  initSDK: 'getting-started/install-initialize-and-inspect-sdk',
  resetConversationUnread: 'conversation/managing-conversations/mark-conversation-read',
  setAppBadge: 'getting-started/handle-app-lifecycle-and-device-state',
  signalingGetInvitationInfoStartApp: 'calling/retrieving-call-information/restore-pending-invitation',
  signalingSendCustomSignaling: 'calling/sending-custom-signals/send-a-custom-signal',
  translateMessage: 'message/composing-messages/translate-text-and-messages',
  translateText: 'message/composing-messages/translate-text-and-messages',
  unInitSDK: 'getting-started/install-initialize-and-inspect-sdk',
  updateFcmToken: 'getting-started/handle-app-lifecycle-and-device-state',
  updateFriend: 'user/friends/update-friends',
  updateToken: 'getting-started/update-token-and-observe-sdk-session',
  uploadLogs: 'logger',
};

const eventPages = {
  onChangedPinnedMsg: 'message/managing-messages/set-message-pinned',
  onConversationGroupAdded: 'conversation/managing-conversation-groups/overview-conversation-groups',
  onConversationGroupChanged: 'conversation/managing-conversation-groups/overview-conversation-groups',
  onConversationGroupDeleted: 'conversation/managing-conversation-groups/overview-conversation-groups',
  onConversationGroupMemberAdded: 'conversation/managing-conversation-groups/overview-conversation-groups',
  onConversationGroupMemberDeleted: 'conversation/managing-conversation-groups/overview-conversation-groups',
  onDeleteUserAllMsgsInConv: 'message/managing-messages/delete-user-messages',
  onGroupApplicationBadgeCountChanged: 'group/group-applications/observe-group-application-badge-count',
  onHangUp: 'calling/managing-calls/handle-call-events',
  onInvitationCancelled: 'calling/managing-calls/handle-call-events',
  onInvitationTimeout: 'calling/managing-calls/handle-call-events',
  onInviteeAccepted: 'calling/managing-calls/handle-call-events',
  onInviteeAcceptedByOtherDevice: 'calling/managing-calls/handle-call-events',
  onInviteeRejected: 'calling/managing-calls/handle-call-events',
  onInviteeRejectedByOtherDevice: 'calling/managing-calls/handle-call-events',
  onMessageEdited: 'message/managing-messages/modify-a-message',
  onMessageKvInfoChanged: 'message/receiving-messages/receive-custom-business-messages',
  onMessageModified: 'message/managing-messages/modify-a-message',
  onMigrationFailed: 'events/handle-data-migration-events',
  onMigrationFinished: 'events/handle-data-migration-events',
  onMigrationProgress: 'events/handle-data-migration-events',
  onMigrationStart: 'events/handle-data-migration-events',
  onReceiveCustomSignal: 'calling/sending-custom-signals/send-a-custom-signal',
  onReceiveCustomSignaling: 'calling/sending-custom-signals/send-a-custom-signal',
  onReceiveNewInvitation: 'calling/managing-calls/handle-call-events',
  onRecvGroupReadReceipt: 'message/managing-read-status/send-group-read-receipts',
  onRecvMessageExtensionsAdded: 'message/receiving-messages/receive-custom-business-messages',
  onRecvMessageExtensionsChanged: 'message/receiving-messages/receive-custom-business-messages',
  onRecvMessageExtensionsDeleted: 'message/receiving-messages/receive-custom-business-messages',
  onRoomParticipantConnected: 'calling/managing-calls/handle-call-events',
  onRoomParticipantDisconnected: 'calling/managing-calls/handle-call-events',
  onSDKSessionChanged: 'getting-started/update-token-and-observe-sdk-session',
  onStreamChange: 'calling/managing-calls/handle-call-events',
};

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function toUniAppPage(wasmPath) {
  const suffix = wasmPath.replace('/sdk/wasm/', '');
  return `/sdk/uniapp/${renamedSuffixes.get(suffix) ?? suffix}`;
}

function fallbackPage(name) {
  if (/signaling|Invitation|Invitee|HangUp|RoomParticipant|CustomSignal|Stream/i.test(name)) return '/sdk/uniapp/calling/overview-calling';
  if (/Conversation/i.test(name)) return '/sdk/uniapp/conversation/overview-conversation';
  if (/Group/i.test(name)) return '/sdk/uniapp/group/overview-group';
  if (/Friend|Black/i.test(name)) return '/sdk/uniapp/user/overview-user';
  if (/Message|Typing|Input|Upload/i.test(name)) return '/sdk/uniapp/message/overview-message';
  return '/sdk/uniapp/getting-started/authenticate-and-manage-session';
}

function typeOwner(name) {
  if (/(Handler|Callback|Listener|Subscription|SDKEventName|Resolve|Reject)$/.test(name)) {
    return { page: null, disposition: 'signature-only' };
  }
  if (/Signaling|Invitation|Invitee|Room|Participant|Certificate/i.test(name)) return { page: '/sdk/uniapp/calling/overview-calling', disposition: 'shared-model' };
  if (/Conversation/i.test(name)) return { page: '/sdk/uniapp/conversation/overview-conversation', disposition: 'shared-model' };
  if (/Group/i.test(name)) return { page: '/sdk/uniapp/group/overview-group', disposition: 'shared-model' };
  if (/Message|Elem|OfflinePush|SearchResult/i.test(name)) return { page: '/sdk/uniapp/message/overview-message', disposition: 'shared-model' };
  if (/Friend|Black|User/i.test(name)) return { page: '/sdk/uniapp/user/overview-user', disposition: 'shared-model' };
  return { page: '/sdk/uniapp/getting-started/authenticate-and-manage-session', disposition: 'shared-model' };
}

function constantOwner(name) {
  if (/Conversation/i.test(name)) return '/sdk/uniapp/conversation/overview-conversation';
  if (/Group/i.test(name)) return '/sdk/uniapp/group/overview-group';
  if (/Message|Receipt|Content/i.test(name)) return '/sdk/uniapp/message/overview-message';
  if (/Friend|Black|User/i.test(name)) return '/sdk/uniapp/user/overview-user';
  return '/sdk/uniapp/getting-started/authenticate-and-manage-session';
}

export function buildUniAppSdkOwnership({ manifest, wasmOwnership, manifestSha256 }) {
  const wasmMethods = new Map(
    wasmOwnership.methods.filter((item) => item.page).map((item) => [item.name, item]),
  );
  const wasmEvents = new Map(
    wasmOwnership.events.filter((item) => item.page).map((item) => [item.name, item]),
  );
  const eventsByName = new Map(manifest.events.map((item) => [item.name, item]));

  const events = manifest.events.map((item) => {
    const wasmName = `On${item.name.slice(2)}`;
    const wasmOwner = wasmEvents.get(wasmName);
    const suffix = eventPages[item.name];
    return {
      name: item.name,
      page: suffix ? `/sdk/uniapp/${suffix}` : wasmOwner ? toUniAppPage(wasmOwner.page) : fallbackPage(item.name),
      disposition: 'documented',
      edition: item.edition,
      platforms: item.platforms,
      payloadProfile: item.payloadProfile,
      synthetic: item.synthetic,
    };
  });
  const eventOwnerByName = new Map(events.map((item) => [item.name, item.page]));

  const callables = manifest.callables.map((item) => {
    if (item.role === 'event-control') {
      return { ...item, page: '/sdk/uniapp/events/overview-events', disposition: 'documented' };
    }
    if (item.role === 'event-subscription') {
      const event = eventsByName.get(item.name);
      return {
        ...item,
        page: event ? eventOwnerByName.get(event.name) : fallbackPage(item.name),
        disposition: 'documented',
      };
    }
    const wasmOwner = wasmMethods.get(item.name);
    const suffix = operationPages[item.name];
    return {
      ...item,
      page: suffix ? `/sdk/uniapp/${suffix}` : wasmOwner ? toUniAppPage(wasmOwner.page) : fallbackPage(item.name),
      disposition: 'documented',
    };
  });

  return {
    api: {
      schemaVersion: 1,
      manifestSha256,
      callables,
      events,
    },
    types: {
      schemaVersion: 1,
      manifestSha256,
      types: manifest.types.map((item) => ({ ...item, ...typeOwner(item.name) })),
      constants: manifest.constants.map((item) => ({
        ...item,
        page: constantOwner(item.name),
        disposition: 'documented',
      })),
      typeExtensions: manifest.typeExtensions.map((item) => ({
        ...item,
        page: typeOwner(item.target).page,
        disposition: 'field-level-commercial',
      })),
    },
  };
}

export function applyOwnershipToAudit({ audit, ownership }) {
  const methodsByPage = new Map();
  const eventsByPage = new Map();
  for (const item of ownership.callables) {
    const values = methodsByPage.get(item.page) ?? [];
    values.push(item.name);
    methodsByPage.set(item.page, values);
  }
  for (const item of ownership.events) {
    const values = eventsByPage.get(item.page) ?? [];
    values.push(item.name);
    eventsByPage.set(item.page, values);
  }
  return {
    ...audit,
    pages: audit.pages.map((page) => ({
      ...page,
      sdkMethods: (methodsByPage.get(page.currentPath) ?? []).sort(),
      sdkEvents: (eventsByPage.get(page.currentPath) ?? []).sort(),
    })),
  };
}

async function main() {
  const manifestSource = await readFile(resolve(root, 'data/structure/uniapp-sdk-doc-manifest.json'), 'utf8');
  const manifest = JSON.parse(manifestSource);
  const wasmOwnership = JSON.parse(
    await readFile(resolve(root, 'data/structure/wasm-api-ownership.json'), 'utf8'),
  );
  const audit = JSON.parse(
    await readFile(resolve(root, 'data/structure/uniapp-content-audit.json'), 'utf8'),
  );
  const output = buildUniAppSdkOwnership({
    manifest,
    wasmOwnership,
    manifestSha256: sha256(manifestSource),
  });
  const auditedOwnership = applyOwnershipToAudit({ audit, ownership: output.api });
  await Promise.all([
    writeFile(resolve(root, 'data/structure/uniapp-api-ownership.json'), `${JSON.stringify(output.api, null, 2)}\n`),
    writeFile(resolve(root, 'data/structure/uniapp-type-ownership.json'), `${JSON.stringify(output.types, null, 2)}\n`),
    writeFile(resolve(root, 'data/structure/uniapp-content-audit.json'), `${JSON.stringify(auditedOwnership, null, 2)}\n`),
  ]);
  console.log(`Synchronized uni-app ownership (${output.api.callables.length} callables, ${output.api.events.length} events, ${output.types.types.length} types).`);
}

if (resolve(process.argv[1] ?? '') === new URL(import.meta.url).pathname) await main();
