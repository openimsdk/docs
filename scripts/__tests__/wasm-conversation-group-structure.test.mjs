import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

import { buildWasmLegacyRedirects } from '../lib/wasm-legacy-redirects.mjs';

const activeWasmRoutes = JSON.parse(readFileSync('src/generated/routes.json', 'utf8')).filter(
  (route) => route.contextKey === 'chat/sdk/wasm',
);
const conversationPages = activeWasmRoutes
  .map((route) => route.path)
  .filter((path) => path.includes('/conversation/'));
const groupPages = activeWasmRoutes
  .map((route) => route.path)
  .filter((path) => path.includes('/group/'));

const conversationMethods = [
  'addConversationsToGroups',
  'clearConversationAndDeleteAllMsg',
  'createConversationGroup',
  'deleteAllConversationFromLocal',
  'deleteConversation',
  'deleteConversationAndDeleteAllMsg',
  'deleteConversationGroup',
  'getAllConversationList',
  'getConversationGroupIDsByConversationID',
  'getConversationGroupInfoWithConversations',
  'getConversationGroups',
  'getConversationIDBySessionType',
  'getConversationListSplit',
  'getConversationRecvMessageOpt',
  'getMultipleConversation',
  'getOneConversation',
  'getTotalUnreadMsgCount',
  'hideConversation',
  'markConversationMessageAsRead',
  'pinConversation',
  'removeConversationsFromGroups',
  'resetConversationGroupAtType',
  'setConversation',
  'setConversationBurnDuration',
  'setConversationDraft',
  'setConversationEx',
  'setConversationGroupOrder',
  'setConversationIsMsgDestruct',
  'setConversationMsgDestructTime',
  'setConversationPrivateChat',
  'setConversationRecvMessageOpt',
  'updateConversationGroup',
];

const groupMethods = [
  'acceptGroupApplication',
  'changeGroupMemberMute',
  'changeGroupMute',
  'clearGroupApplicationBadgeCount',
  'createGroup',
  'deleteGroupRequests',
  'dismissGroup',
  'getGroupApplicationBadgeCount',
  'getGroupApplicationListAsApplicant',
  'getGroupApplicationListAsRecipient',
  'getGroupApplicationUnhandledCount',
  'getGroupMemberList',
  'getGroupMemberListByJoinTimeFilter',
  'getGroupMemberOwnerAndAdmin',
  'getJoinedGroupList',
  'getJoinedGroupListPage',
  'getSpecifiedGroupMembersInfo',
  'getSpecifiedGroupsInfo',
  'getUsersInGroup',
  'inviteUserToGroup',
  'isJoinGroup',
  'joinGroup',
  'kickGroupMember',
  'quitGroup',
  'refuseGroupApplication',
  'searchGroupMembers',
  'searchGroups',
  'setGroupApplyMemberFriend',
  'setGroupInfo',
  'setGroupLookMemberInfo',
  'setGroupMemberInfo',
  'setGroupMemberNickname',
  'setGroupMemberRoleLevel',
  'setGroupVerification',
  'transferGroupOwner',
];

const conversationEvents = [
  'OnConversationChanged',
  'OnConversationGroupAdded',
  'OnConversationGroupChanged',
  'OnConversationGroupDeleted',
  'OnConversationGroupMemberAdded',
  'OnConversationGroupMemberDeleted',
  'OnConversationUserInputStatusChanged',
  'OnNewConversation',
  'OnTotalUnreadMessageCountChanged',
];

const conversationGroupMethodPages = {
  createConversationGroup:
    '/sdk/wasm/conversation/managing-conversation-groups/create-conversation-group',
  getConversationGroups:
    '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-groups',
  getConversationGroupInfoWithConversations:
    '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-group-info-with-conversations',
  getConversationGroupIDsByConversationID:
    '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id',
  updateConversationGroup:
    '/sdk/wasm/conversation/managing-conversation-groups/update-conversation-group',
  setConversationGroupOrder:
    '/sdk/wasm/conversation/managing-conversation-groups/set-conversation-group-order',
  addConversationsToGroups:
    '/sdk/wasm/conversation/managing-conversation-groups/add-conversations-to-groups',
  removeConversationsFromGroups:
    '/sdk/wasm/conversation/managing-conversation-groups/remove-conversations-from-groups',
  deleteConversationGroup:
    '/sdk/wasm/conversation/managing-conversation-groups/delete-conversation-group',
};

const conversationGroupOverview =
  '/sdk/wasm/conversation/managing-conversation-groups/overview-conversation-groups';
const removedConversationGroupAggregate =
  '/sdk/wasm/conversation/managing-conversation-groups/manage-conversation-groups';

const groupEvents = [
  'OnGroupApplicationAccepted',
  'OnGroupApplicationAdded',
  'OnGroupApplicationBadgeCountChanged',
  'OnGroupApplicationDeleted',
  'OnGroupApplicationRejected',
  'OnGroupDismissed',
  'OnGroupInfoChanged',
  'OnGroupMemberAdded',
  'OnGroupMemberDeleted',
  'OnGroupMemberInfoChanged',
  'OnJoinedGroupAdded',
  'OnJoinedGroupDeleted',
];

const unsupportedLegacyPages = [
  '/sdk/wasm/channel/categorizing-channels/categorize-channels-by-custom-type',
  '/sdk/wasm/channel/joining-and-leaving-a-channel/enter-and-exit-an-open-channel',
  '/sdk/wasm/channel/managing-channel-metacounters/manage-channel-metacounters',
  '/sdk/wasm/channel/managing-channel-metadata/manage-channel-metadata',
  '/sdk/wasm/channel/searching-channels/filter-group-channels-by-user-ids',
  '/sdk/wasm/channel/searching-channels/search-open-channels-by-name-or-url-or-custom-types',
];

const migratedLegacyPages = {
  '/sdk/wasm/channel/overview-channel': '/sdk/wasm/conversation/overview-conversation',
  '/sdk/wasm/channel/managing-channels/hide-or-archive-a-group-channel-from-a-list-of-channels':
    '/sdk/wasm/conversation/managing-conversations/hide-a-conversation',
  '/sdk/wasm/conversation/synchronizing-conversations/synchronize-conversation-data':
    '/sdk/wasm/conversation/overview-conversation',
  '/sdk/wasm/channel/managing-operators/transfer-group-owner':
    '/sdk/wasm/group/managing-group-members/transfer-group-owner',
  '/sdk/wasm/channel/retrieving-channels/retrieve-a-list-of-channels':
    '/sdk/wasm/conversation/retrieving-conversations/retrieve-conversation-list',
  '/sdk/wasm/conversations/configuring-message-destruction':
    '/sdk/wasm/conversation/managing-conversations/set-message-destruct',
};

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

test('WASM routes use Conversation and Group instead of Channel', () => {
  const routes = readJson('src/generated/routes.json').filter(
    (route) => route.contextKey === 'chat/sdk/wasm',
  );
  const paths = new Set(routes.map((route) => route.path));

  assert.equal(routes.filter((route) => route.path.includes('/channel/')).length, 0);
  assert.deepEqual(
    conversationPages.filter((path) => !paths.has(path)),
    [],
  );
  assert.deepEqual(
    groupPages.filter((path) => !paths.has(path)),
    [],
  );
});

test('all new Conversation and Group routes have manual Chinese content', () => {
  for (const path of [...conversationPages, ...groupPages]) {
    const file = `content/zh/docs/chat${path}.mdx`;
    assert.ok(existsSync(file), file);
    assert.match(readFileSync(file, 'utf8'), new RegExp(`sourcePath: '${path}'`));
  }
});

test('domain API coverage assigns every pinned Conversation and Group method', () => {
  assert.ok(existsSync('data/structure/wasm-domain-api-coverage.json'));
  const coverage = readJson('data/structure/wasm-domain-api-coverage.json');
  const sdk = readJson('data/structure/wasm-sdk-api.json');
  const sdkMethods = new Set(sdk.methods.map((method) => method.name));
  const activePages = new Set([...conversationPages, ...groupPages]);

  for (const domain of ['conversation', 'group']) {
    for (const item of coverage.domains[domain].methods) {
      assert.ok(sdkMethods.has(item.name), `${domain}: unknown ${item.name}`);
      assert.ok(activePages.has(item.page), `${item.name}: inactive page ${item.page}`);
      assert.ok(
        [
          'documented',
          'excluded-consolidated',
          'excluded-deprecated',
          'excluded-non-paginated',
        ].includes(item.status),
        item.name,
      );
    }
  }

  assert.deepEqual(
    coverage.domains.conversation.methods.map((item) => item.name).sort(),
    conversationMethods,
  );
  assert.deepEqual(coverage.domains.group.methods.map((item) => item.name).sort(), groupMethods);

  const draft = coverage.domains.conversation.methods.find(
    (item) => item.name === 'setConversationDraft',
  );
  assert.equal(draft.status, 'documented');
  assert.match(draft.declarationIssue, /错误|不正确/);
});

test('domain event coverage assigns all Conversation and Group events', () => {
  const coverage = readJson('data/structure/wasm-domain-api-coverage.json');
  assert.deepEqual(
    coverage.domains.conversation.events.map((item) => item.name).sort(),
    conversationEvents,
  );
  assert.deepEqual(coverage.domains.group.events.map((item) => item.name).sort(), groupEvents);
});

test('conversation groups use a second-level menu with one documented method per API page', () => {
  const sidebar = readJson('data/structure/wasm-sidebar.json');
  const conversation = sidebar.nodes.find((node) => node.id === 'conversation');
  const folder = conversation.children.find(
    (node) => typeof node === 'object' && node.id === 'conversation/conversation-groups',
  );
  assert.deepEqual(folder.children.map((entry) => entry.path ?? entry), [
    conversationGroupOverview,
    ...Object.values(conversationGroupMethodPages),
  ]);

  const coverage = readJson('data/structure/wasm-domain-api-coverage.json');
  const methods = coverage.domains.conversation.methods.filter((item) =>
    Object.hasOwn(conversationGroupMethodPages, item.name),
  );
  assert.equal(methods.length, Object.keys(conversationGroupMethodPages).length);
  for (const item of methods) {
    assert.equal(item.status, 'documented', item.name);
    assert.equal(item.page, conversationGroupMethodPages[item.name], item.name);
  }

  const events = coverage.domains.conversation.events.filter((item) =>
    item.name.startsWith('OnConversationGroup'),
  );
  assert.equal(events.length, 5);
  assert.ok(events.every((item) => item.page === conversationGroupOverview));
});

test('the removed conversation-group aggregate has no route or redirect', () => {
  const routes = readJson('src/generated/routes.json');
  const redirects = readJson('data/structure/wasm-legacy-redirects.json');
  assert.equal(
    routes.some((route) => route.path === removedConversationGroupAggregate),
    false,
  );
  assert.equal(
    redirects.some((entry) => entry.source === removedConversationGroupAggregate),
    false,
  );
});

test('legacy Channel audit records are migrated or removed', () => {
  const audit = readJson('data/structure/wasm-content-audit.json');
  const byPath = new Map(audit.pages.map((page) => [page.currentPath, page]));

  for (const path of unsupportedLegacyPages) {
    assert.equal(byPath.get(path)?.disposition, 'remove', path);
    assert.equal(byPath.get(path)?.redirectTo, null, path);
  }

  for (const path of [...conversationPages, ...groupPages]) {
    const page = byPath.get(path);
    assert.ok(page, path);
    assert.equal(page.sourceKind, 'openim-specific', path);
    assert.equal(page.disposition, 'adapt', path);
    assert.equal(page.locales.zh.reviewStatus, 'published', path);
    assert.equal(page.locales.en.reviewStatus, 'deferred', path);
  }

  for (const [path, redirectTo] of Object.entries(migratedLegacyPages)) {
    const page = byPath.get(path);
    assert.equal(page?.disposition, 'merge', path);
    assert.equal(page?.redirectTo, redirectTo, path);
  }
});

test('legacy redirects include base and Chinese paths but exclude unsupported pages', () => {
  const file = 'data/structure/wasm-legacy-redirects.json';
  assert.ok(existsSync(file), file);
  if (!existsSync(file)) return;

  const entries = readJson(file);
  const configuredEntries = Object.fromEntries(
    entries.map((entry) => [entry.source, entry.destination]),
  );
  for (const [source, destination] of Object.entries(migratedLegacyPages)) {
    assert.equal(configuredEntries[source], destination, source);
  }

  const redirects = buildWasmLegacyRedirects(entries);
  const bySource = new Map(redirects.map((redirect) => [redirect.source, redirect]));
  for (const [source, destination] of Object.entries(migratedLegacyPages)) {
    assert.deepEqual(bySource.get(source), { source, destination, permanent: true });
    assert.deepEqual(bySource.get(`/zh${source}`), {
      source: `/zh${source}`,
      destination: `/zh${destination}`,
      permanent: true,
    });
  }
  for (const path of unsupportedLegacyPages) {
    assert.equal(bySource.has(path), false, path);
    assert.equal(bySource.has(`/zh${path}`), false, `/zh${path}`);
  }
});
