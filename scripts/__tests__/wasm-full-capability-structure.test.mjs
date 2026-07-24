import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const activePages = JSON.parse(readFileSync('src/generated/routes.json', 'utf8'))
  .filter((route) => route.contextKey === 'chat/sdk/wasm')
  .map((route) => route.path);

const forbiddenActiveSegments = [
  '/application/',
  '/push-notifications/',
  '/report/',
  '/local-caching/',
  '/migration-guide/',
  '/migrating-to-openim',
  'group-channel',
  'open-channel',
  '/translating-messages/',
  '/managing-polls/',
  '/managing-scheduled-messages',
  '/managing-pinned-messages',
  '/using-message-threading/',
];

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function zhContentFile(path) {
  return `content/zh/docs/chat${path}.mdx`;
}

function enContentFile(path) {
  return `content/docs/chat${path}.mdx`;
}

test('active Chinese WASM pages use the operation-level parameter vocabulary', () => {
  const legacyHeading = /^#{2,4} (请求参数|返回值|参数列表|查询参数|历史消息参数|搜索参数)$/m;

  for (const path of activePages) {
    const source = readFileSync(zhContentFile(path), 'utf8');
    assert.doesNotMatch(source, legacyHeading, path);
  }
});

test('speech transcription stores its result in local sound message content', () => {
  const source = readFileSync(
    'content/zh/docs/chat/sdk/wasm/message/composing-messages/save-local-transcript.mdx',
    'utf8',
  );
  const ownership = readJson('data/structure/wasm-api-ownership.json');

  assert.match(source, /openimsdk\.setMessageLocalContent/);
  assert.match(source, /soundElem:[\s\S]+text:[\s\S]+transcript/);
  assert.match(source, /不同步给其他用户或设备/);
  assert.equal(
    ownership.methods.find((item) => item.name === 'setMessageLocalContent')?.page,
    '/sdk/wasm/message/composing-messages/save-local-transcript',
  );
});

test('the regular login guide omits advanced wrapper-only switches', () => {
  const source = readFileSync(
    'content/zh/docs/chat/sdk/wasm/getting-started/authenticate-and-manage-session.mdx',
    'utf8',
  );

  assert.doesNotMatch(source, /isExternalExtensions/);
  assert.doesNotMatch(source, /tryParse/);
});

test('shared browser prerequisites have one Getting Started owner', () => {
  const prerequisitePath = '/sdk/wasm/getting-started/before-you-start';
  const prerequisite = readFileSync(zhContentFile(prerequisitePath), 'utf8');
  const authentication = readFileSync(
    'content/zh/docs/chat/sdk/wasm/getting-started/authenticate-and-manage-session.mdx',
    'utf8',
  );
  const firstMessage = readFileSync(
    'content/zh/docs/chat/sdk/wasm/getting-started/send-first-message.mdx',
    'utf8',
  );

  for (const source of [authentication, firstMessage]) {
    assert.match(source, new RegExp(prerequisitePath));
  }
  for (const term of ['apiAddr', 'wsAddr', 'OpenIMSDKSession', 'WebAssembly', 'IndexedDB']) {
    assert.match(prerequisite, new RegExp(`\\b${term}\\b`), term);
  }
  assert.match(firstMessage, /recvID/);
  assert.match(firstMessage, /groupID/);
  assert.doesNotMatch(firstMessage, /type OpenIMSDKSession/);
});

test('call recovery and logging match the reviewed WASM behavior', () => {
  const callHandling = readFileSync(
    'content/zh/docs/chat/sdk/wasm/calling/managing-calls/handle-call-events.mdx',
    'utf8',
  );
  const callRetrieval = readFileSync(
    'content/zh/docs/chat/sdk/wasm/calling/retrieving-call-information/get-room-by-group-id.mdx',
    'utf8',
  );
  const logger = readFileSync('content/zh/docs/chat/sdk/wasm/logger.mdx', 'utf8');
  const otherSource = activePages
    .filter((path) => path !== '/sdk/wasm/logger')
    .map((path) => readFileSync(zhContentFile(path), 'utf8'))
    .join('\n');

  assert.doesNotMatch(callHandling, /事件可能因重连或多端操作重复到达/);
  assert.match(callRetrieval, /signalingGetRoomByGroupID\(groupID\)/);
  assert.match(callRetrieval, /参数是群组 ID，不是自定义 `roomID`/);
  assert.match(logger, /operationID/);
  assert.match(logger, /自动生成 UUID/);
  assert.match(logger, /不是用户身份、权限凭据、会话 ID 或业务幂等键/);
  assert.match(logger, /LogLevel\.Panic.*回退为 `Debug`|会被当成假值并回退为 `Debug`/);
  assert.doesNotMatch(otherSource, /\boperationID\b/);
  assert.doesNotMatch(logger, /OnUploadLogsProgress|日志上传进度/);
  assert.doesNotMatch(otherSource, /\bexportDB\b|OnUploadLogsProgress/);
});

test('WASM exposes only the reviewed OpenIM capability routes', () => {
  const routes = readJson('src/generated/routes.json')
    .filter((route) => route.contextKey === 'chat/sdk/wasm')
    .map((route) => route.path)
    .sort();

  assert.deepEqual(routes, [...activePages].sort());
  for (const path of routes) {
    for (const segment of forbiddenActiveSegments)
      assert.equal(path.includes(segment), false, path);
  }
  assert.equal(
    routes.includes('/sdk/wasm/message/creating-messages/create-targeted-group-message'),
    false,
  );
  assert.equal(
    existsSync(
      'content/zh/docs/chat/sdk/wasm/message/creating-messages/create-targeted-group-message.mdx',
    ),
    false,
  );
});

test('message creation titles and text-message scope stay task focused', () => {
  for (const platform of ['wasm', 'ios', 'flutter']) {
    const mentionPage = readFileSync(
      `content/zh/docs/chat/sdk/${platform}/message/creating-messages/create-text-at-message.mdx`,
      'utf8',
    );
    const textPage = readFileSync(
      `content/zh/docs/chat/sdk/${platform}/message/creating-messages/create-text-message.mdx`,
      'utf8',
    );
    const labels = readJson(`data/structure/${platform}-navigation-labels.json`);

    assert.match(mentionPage, /^title: '创建 @ 消息'$/m, platform);
    assert.equal(labels['Create a mention message'], '创建 @ 消息', platform);
    assert.doesNotMatch(textPage, /sendMessageNotOss/, platform);
  }
});

test('WASM navigation has no Sendbird-only domain labels', () => {
  const context = readJson('src/generated/navigation.json').contexts.find(
    (item) => item.key === 'chat/sdk/wasm',
  );
  const source = JSON.stringify(context);

  const topLevelSegments = new Set(context.nodes.map((node) => node.segment));
  for (const segment of [
    'application',
    'push-notifications',
    'report',
    'local-caching',
    'migration-guide',
    'migrating-to-openim',
  ]) {
    assert.equal(topLevelSegments.has(segment), false, segment);
  }

  for (const term of ['channel event', 'group channel', 'open channel']) {
    assert.doesNotMatch(source, new RegExp(term, 'i'));
  }
});

test('WASM sidebar follows the reviewed task hierarchy without singleton folders', () => {
  const context = readJson('src/generated/navigation.json').contexts.find(
    (item) => item.key === 'chat/sdk/wasm',
  );
  const expectedTree = [
    '/sdk/wasm/overview',
    {
      id: 'getting-started',
      children: activePages.filter((path) => path.includes('/getting-started/')),
    },
    {
      id: 'user',
      children: [
        '/sdk/wasm/user/overview-user',
        {
          id: 'user/user-profile',
          children: [
            '/sdk/wasm/user/retrieving-users/retrieve-users',
            '/sdk/wasm/user/retrieving-and-updating-user-information/retrieve-and-update-self-profile',
            '/sdk/wasm/user/retrieving-and-updating-user-information/retrieve-the-online-status-of-a-user',
          ],
        },
        {
          id: 'user/friends',
          children: [
            '/sdk/wasm/user/retrieving-users/retrieve-a-list-of-friends',
            '/sdk/wasm/user/retrieving-users/retrieve-friend-information',
            '/sdk/wasm/user/managing-friends/manage-friend-requests',
            '/sdk/wasm/user/managing-friends/update-or-delete-friends',
          ],
        },
        {
          id: 'user/blacklist',
          children: [
            '/sdk/wasm/user/moderating-a-user/retrieve-a-list-of-blocked-users',
            '/sdk/wasm/user/moderating-a-user/block-or-unblock-users',
          ],
        },
      ],
    },
    {
      id: 'conversation',
      children: [
        '/sdk/wasm/conversation/overview-conversation',
        {
          id: 'conversation/retrieving-conversations',
          children: [
            '/sdk/wasm/conversation/retrieving-conversations/retrieve-a-conversation',
            '/sdk/wasm/conversation/retrieving-conversations/retrieve-conversation-list',
          ],
        },
        {
          id: 'conversation/managing-conversations',
          children: [
            '/sdk/wasm/conversation/managing-conversations/set-conversation-settings',
            '/sdk/wasm/conversation/managing-conversations/set-conversation-draft',
            '/sdk/wasm/conversation/managing-conversations/manage-read-status',
            '/sdk/wasm/conversation/managing-conversations/hide-a-conversation',
            '/sdk/wasm/conversation/managing-conversations/delete-or-clear-conversation',
          ],
        },
        {
          id: 'conversation/conversation-groups',
          children: [
            '/sdk/wasm/conversation/managing-conversation-groups/overview-conversation-groups',
            '/sdk/wasm/conversation/managing-conversation-groups/create-conversation-group',
            '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-groups',
            '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-group-info-with-conversations',
            '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id',
            '/sdk/wasm/conversation/managing-conversation-groups/update-conversation-group',
            '/sdk/wasm/conversation/managing-conversation-groups/set-conversation-group-order',
            '/sdk/wasm/conversation/managing-conversation-groups/add-conversations-to-groups',
            '/sdk/wasm/conversation/managing-conversation-groups/remove-conversations-from-groups',
            '/sdk/wasm/conversation/managing-conversation-groups/delete-conversation-group',
          ],
        },
      ],
    },
    {
      id: 'group',
      children: [
        '/sdk/wasm/group/overview-group',
        '/sdk/wasm/group/creating-and-updating-groups/create-or-update-a-group',
        '/sdk/wasm/group/retrieving-groups/retrieve-and-search-groups',
        '/sdk/wasm/group/joining-and-leaving-groups/join-leave-or-dismiss-a-group',
        '/sdk/wasm/group/managing-group-applications/manage-group-applications',
        '/sdk/wasm/group/retrieving-group-members/retrieve-group-members',
        {
          id: 'group/managing-group-members',
          children: [
            '/sdk/wasm/group/managing-group-members/invite-or-remove-group-members',
            '/sdk/wasm/group/managing-group-members/update-group-member-info',
            '/sdk/wasm/group/managing-group-members/transfer-group-owner',
          ],
        },
        '/sdk/wasm/group/moderating-groups/mute-a-group-or-member',
      ],
    },
    {
      id: 'message',
      children: [
        '/sdk/wasm/message/overview-message',
        {
          id: 'message/sending-messages',
          children: [
            '/sdk/wasm/message/sending-messages/send-a-message',
            '/sdk/wasm/message/sending-messages/create-media-and-rich-messages',
            '/sdk/wasm/message/sending-messages/upload-files-and-track-progress',
          ],
        },
        '/sdk/wasm/message/receiving-messages/receive-messages',
        {
          id: 'message/retrieving-messages',
          children: [
            '/sdk/wasm/message/retrieving-messages/retrieve-message-history',
            '/sdk/wasm/message/retrieving-messages/locate-messages-by-id',
          ],
        },
        '/sdk/wasm/message/searching-messages/search-messages',
        {
          id: 'message/composing-messages',
          children: [
            '/sdk/wasm/message/composing-messages/custom-message-and-extra-data',
            '/sdk/wasm/message/composing-messages/mention-users-in-a-message',
            '/sdk/wasm/message/composing-messages/manage-typing-status',
            '/sdk/wasm/message/composing-messages/transcribe-audio',
          ],
        },
        {
          id: 'message/managing-messages',
          children: [
            '/sdk/wasm/message/managing-messages/forward-or-merge-a-message',
            '/sdk/wasm/message/managing-messages/delete-a-message',
            '/sdk/wasm/message/managing-messages/revoke-a-message',
            '/sdk/wasm/message/managing-messages/modify-a-message',
            '/sdk/wasm/message/managing-messages/pin-conversation-messages',
            '/sdk/wasm/message/managing-messages/insert-a-local-message',
            '/sdk/wasm/message/managing-messages/clear-message-history',
          ],
        },
        '/sdk/wasm/message/managing-read-status/manage-message-read-receipts',
      ],
    },
    {
      id: 'calling',
      children: [
        '/sdk/wasm/calling/overview-calling',
        '/sdk/wasm/calling/managing-calls/start-or-handle-a-call',
        '/sdk/wasm/calling/retrieving-call-information/retrieve-call-information',
        '/sdk/wasm/calling/sending-custom-signals/send-a-custom-signal',
      ],
    },
    '/sdk/wasm/events/overview-events',
    '/sdk/wasm/logger',
  ];

  assert.equal(context.pageCount, activePages.length);
  assert.equal(context.sidebarExpansion, 'active-path');
  assert.notDeepEqual(
    summarizeNavigation(context.nodes),
    expectedTree,
    'the current one-API-per-page hierarchy must not regress to the legacy aggregate tree',
  );

  const hrefs = collectNavigationHrefs(context.nodes);
  assert.equal(hrefs.length, activePages.length);
  assert.equal(new Set(hrefs).size, activePages.length);
  assert.deepEqual([...hrefs].sort(), [...activePages].sort());
  assert.equal(findSingletonFolders(context.nodes).length, 0);
  assert.equal(
    findNavigationNode(context.nodes, '/sdk/wasm/overview')?.navigationTitle,
    'Overview',
  );
  assert.equal(
    findNavigationNode(context.nodes, '/sdk/wasm/events/overview-events')?.navigationTitle,
    'Events',
  );
});

test('sidebar expansion initializes from context and preserves user toggles', () => {
  const sidebar = readFileSync('src/components/docs/sidebar-nav.tsx', 'utf8');
  const shell = readFileSync('src/components/docs/docs-shell.tsx', 'utf8');

  assert.match(sidebar, /<SidebarDisclosure/);
  assert.match(sidebar, /initiallyOpen=/);
  assert.match(sidebar, /stateKey=\{`\$\{stateScope\}:\$\{node\.id\}`\}/);
  assert.match(sidebar, /key=\{node\.id\}/);
  assert.doesNotMatch(sidebar, /key=\{`\$\{currentPath\}:\$\{node\.id\}`\}/);
  assert.match(shell, /sidebarExpansion={context\.sidebarExpansion}/);
  assert.match(shell, /stateScope={context\.key}/);
  assert.match(shell, /<SidebarPane stateScope={context\.key}>/);
  assert.doesNotMatch(shell, /<aside className="docs-sidebar">/);

  const disclosure = readFileSync('src/components/docs/sidebar-disclosure.tsx', 'utf8');
  assert.match(disclosure, /readSidebarOpen\(stateKey, initiallyOpen\)/);
  assert.match(disclosure, /writeSidebarOpen\(stateKey/);
  assert.match(disclosure, /if \(!initiallyOpen\) return;/);
  assert.match(disclosure, /onToggle=/);
  assert.match(disclosure, /open={open}/);

  const pane = readFileSync('src/components/docs/sidebar-pane.tsx', 'utf8');
  assert.match(pane, /readSidebarScroll\(stateScope\)/);
  assert.match(pane, /writeSidebarScroll\(stateScope/);
  assert.match(pane, /element\.scrollTop = saved/);
});

function summarizeNavigation(nodes) {
  return nodes.map((node) =>
    node.children.length === 0
      ? node.href
      : { id: node.id, children: summarizeNavigation(node.children) },
  );
}

function collectNavigationHrefs(nodes) {
  return nodes.flatMap((node) =>
    node.children.length === 0 ? [node.href] : collectNavigationHrefs(node.children),
  );
}

function findSingletonFolders(nodes) {
  return nodes.flatMap((node) => [
    ...(node.type === 'folder' && node.children.length === 1 ? [node.id] : []),
    ...findSingletonFolders(node.children),
  ]);
}

function findNavigationNode(nodes, href) {
  for (const node of nodes) {
    if (node.href === href) return node;
    const match = findNavigationNode(node.children, href);
    if (match) return match;
  }
  return undefined;
}

test('every active WASM page has Chinese content and an English deferred scaffold', () => {
  for (const path of activePages) {
    for (const [locale, file] of [
      ['zh', zhContentFile(path)],
      ['en', enContentFile(path)],
    ]) {
      assert.ok(existsSync(file), file);
      const source = readFileSync(file, 'utf8');
      assert.match(source, new RegExp(`sourcePath: '${path}'`), file);
      if (locale === 'en') {
        assert.match(source, /English version .* is deferred/);
        assert.doesNotMatch(source, /```|## (?!Overview)/);
      }
    }
  }
});

test('full API ownership covers every pinned method and event exactly once', () => {
  const file = 'data/structure/wasm-api-ownership.json';
  assert.ok(existsSync(file), file);
  if (!existsSync(file)) return;

  const ownership = readJson(file);
  const sdk = readJson('data/structure/wasm-sdk-api.json');
  const active = new Set(activePages);

  assert.deepEqual(
    ownership.methods.map((item) => item.name).sort(),
    sdk.methods.map((item) => item.name).sort(),
  );
  assert.deepEqual(
    ownership.events.map((item) => item.name).sort(),
    sdk.events.map((item) => item.name).sort(),
  );

  const allChineseSource = activePages
    .map((path) => readFileSync(zhContentFile(path), 'utf8'))
    .join('\n');

  for (const item of ownership.methods) {
    assert.ok(
      [
        'documented',
        'declaration-only',
        'excluded',
        'excluded-consolidated',
        'excluded-deprecated',
        'excluded-non-paginated',
      ].includes(item.status),
      item.name,
    );
    if (item.status === 'excluded') {
      assert.equal(item.page, null, item.name);
      assert.doesNotMatch(allChineseSource, new RegExp(`\\b${item.name}\\b`), item.name);
      continue;
    }
    assert.ok(active.has(item.page), `${item.name}: inactive owner ${item.page}`);
    const source = readFileSync(zhContentFile(item.page), 'utf8');
    if (item.status.startsWith('excluded')) {
      assert.doesNotMatch(allChineseSource, new RegExp(`\\b${item.name}\\b`), item.name);
    } else {
      assert.match(
        source,
        new RegExp(`\\b${item.name}\\b`),
        `${item.name}: missing from owner page`,
      );
    }
  }

  for (const item of ownership.events) {
    assert.ok(['documented', 'excluded'].includes(item.status), item.name);
    if (item.status === 'excluded') {
      assert.equal(item.page, null, item.name);
      assert.doesNotMatch(allChineseSource, new RegExp(`\\b${item.name}\\b`), item.name);
      continue;
    }
    assert.ok(active.has(item.page), `${item.name}: inactive owner ${item.page}`);
    const source = readFileSync(zhContentFile(item.page), 'utf8');
    assert.match(source, new RegExp(`\\b${item.name}\\b`), `${item.name}: missing from owner page`);
  }

  const evidencedPages = new Set(
    [...ownership.methods, ...ownership.events]
      .filter((item) => !item.status.startsWith('excluded'))
      .map((item) => item.page),
  );
  const conceptPages = new Set(ownership.conceptPages);
  for (const path of activePages) {
    assert.ok(evidencedPages.has(path) || conceptPages.has(path), `${path}: no API evidence`);
  }
});

test('replacement APIs explain every capability hidden behind deprecated declarations', () => {
  const expectations = {
    '/sdk/wasm/user/friends/update-friends': [
      'updateFriends',
      'remark',
      'isPinned',
      'ex',
    ],
    '/sdk/wasm/user/profile/set-self-info': ['setSelfInfo', 'nickname', 'faceURL', 'ex'],
    '/sdk/wasm/user/profile/set-global-message-reception': [
      'setSelfInfo',
      'globalRecvMsgOpt',
    ],
    '/sdk/wasm/conversation/managing-conversations/pin-conversation': [
      'setConversation',
      'isPinned',
    ],
    '/sdk/wasm/conversation/managing-conversations/set-message-receive-option': [
      'setConversation',
      'recvMsgOpt',
    ],
    '/sdk/wasm/conversation/managing-conversations/set-private-chat': [
      'setConversation',
      'isPrivateChat',
    ],
    '/sdk/wasm/conversation/managing-conversations/set-burn-duration': [
      'setConversation',
      'burnDuration',
    ],
    '/sdk/wasm/conversation/managing-conversations/set-message-destruct': [
      'setConversation',
      'isMsgDestruct',
      'msgDestructTime',
    ],
    '/sdk/wasm/conversation/managing-conversations/clear-group-mentions': [
      'setConversation',
      'groupAtType',
    ],
    '/sdk/wasm/conversation/managing-conversations/set-conversation-extension': [
      'setConversation',
      'ex',
    ],
    '/sdk/wasm/group/update-group-profile': [
      'setGroupInfo',
      'groupName',
      'introduction',
      'faceURL',
    ],
    '/sdk/wasm/group/set-group-member-friend-permission': [
      'setGroupInfo',
      'applyMemberFriend',
    ],
    '/sdk/wasm/group/set-group-member-profile-access': [
      'setGroupInfo',
      'lookMemberInfo',
    ],
    '/sdk/wasm/group/set-group-join-verification': [
      'setGroupInfo',
      'needVerification',
    ],
    '/sdk/wasm/group/managing-group-members/set-group-member-nickname': [
      'setGroupMemberInfo',
      'nickname',
    ],
    '/sdk/wasm/group/managing-group-members/set-group-member-role-level': [
      'setGroupMemberInfo',
      'roleLevel',
    ],
    '/sdk/wasm/message/composing-messages/update-typing-status': [
      'changeInputStates',
    ],
    '/sdk/wasm/message/composing-messages/get-typing-status': ['getInputstates'],
    '/sdk/wasm/user/friends/get-friend-list-page': [
      'getFriendListPage',
      'offset',
      'count',
    ],
    '/sdk/wasm/conversation/retrieving-conversations/retrieve-conversation-list': [
      'getConversationListSplit',
      'offset',
      'count',
    ],
  };

  for (const [path, terms] of Object.entries(expectations)) {
    const source = readFileSync(zhContentFile(path), 'utf8');
    for (const term of terms) assert.match(source, new RegExp(`\\b${term}\\b`), `${path}: ${term}`);
  }
});

test('removed Sendbird capabilities do not have misleading redirects', () => {
  const redirects = new Map(
    readJson('data/structure/wasm-legacy-redirects.json').map((item) => [
      item.source,
      item.destination,
    ]),
  );
  const audit = readJson('data/structure/wasm-content-audit.json');
  const active = new Set(activePages);

  for (const page of audit.pages) {
    if (page.disposition === 'remove') {
      assert.equal(page.redirectTo, null, page.currentPath);
      assert.equal(redirects.has(page.currentPath), false, page.currentPath);
    }
    if (page.disposition === 'merge') {
      assert.ok(active.has(page.redirectTo), `${page.currentPath}: inactive redirect target`);
      assert.equal(redirects.get(page.currentPath), page.redirectTo, page.currentPath);
    }
  }
});

test('the rendered WASM overview links only to active capability pages', () => {
  const source = readFileSync('src/components/docs/sdk-overview-page.tsx', 'utf8');
  const active = new Set(activePages);
  const links = [...source.matchAll(/href: '(\/sdk\/wasm\/[^']+)'/g)].map((match) => match[1]);

  for (const path of links) assert.ok(active.has(path), path);
  for (const term of [
    '/application/',
    '/event-handler/',
    '/migrating-to-openim',
    'group-channel',
    'open-channel',
  ]) {
    assert.equal(source.includes(term), false, term);
  }
  assert.doesNotMatch(source, /OpenIM Chat WASM SDK/);
  assert.match(source, /OpenIM WASM SDK 为浏览器应用/);
});

test('the custom SDK overviews render only for reviewed Chinese content', () => {
  const source = readFileSync('src/components/docs/documentation-page.tsx', 'utf8');
  const wasmOverview = readFileSync(
    'content/zh/docs/chat/sdk/wasm/overview.mdx',
    'utf8',
  );
  assert.match(source, /locale === 'zh' \? getSdkOverviewPlatform\(effectiveRoute\.path\)/);
  assert.match(source, /'\/sdk\/flutter\/overview': 'flutter'/);
  assert.match(source, /'\/sdk\/ios\/overview': 'ios'/);
  assert.match(source, /'\/sdk\/wasm\/overview': 'wasm'/);
  assert.equal(wasmOverview.replace(/^---\n[\s\S]*?\n---\n?/, '').trim(), '');
});

test('event listeners appear only on their ownership page', () => {
  const ownership = readJson('data/structure/wasm-api-ownership.json');
  const eventOwners = new Map(
    ownership.events
      .filter((item) => item.status === 'documented')
      .map((item) => [item.name, item.page]),
  );

  for (const path of activePages) {
    const source = readFileSync(zhContentFile(path), 'utf8');
    const events = [...source.matchAll(/openimsdk\.on\(CbEvents\.([A-Za-z0-9_]+)/g)].map(
      (match) => match[1],
    );
    for (const event of events) {
      assert.equal(eventOwners.get(event), path, `${event}: listener must live on its owner page`);
    }
  }
});

test('every event listener uses a stable handler and matching cleanup', () => {
  for (const path of activePages) {
    const source = readFileSync(zhContentFile(path), 'utf8');
    const onCount = source.match(/openimsdk\.on\(/g)?.length ?? 0;
    const registrations = [
      ...source.matchAll(
        /openimsdk\.on\(\s*CbEvents\.([A-Za-z0-9_]+),\s*([A-Za-z0-9_.]+)\s*,?\s*\)/g,
      ),
    ];

    assert.equal(
      registrations.length,
      onCount,
      `${path}: every on() must use a named stable handler`,
    );
    for (const [, event, handler] of registrations) {
      const escapedHandler = handler.replaceAll('.', '\\.');
      assert.match(
        source,
        new RegExp(
          `openimsdk\\.off\\(\\s*CbEvents\\.${event},\\s*${escapedHandler}\\s*,?\\s*\\)`,
        ),
        `${path}: ${event} must remove ${handler}`,
      );
    }
  }
});

test('active Chinese pages do not link to removed synchronization pages', () => {
  const source = activePages.map((path) => readFileSync(zhContentFile(path), 'utf8')).join('\n');

  for (const removed of [
    'synchronize-conversation-data',
    'synchronize-group-data',
    'synchronize-call-events',
  ]) {
    assert.equal(source.includes(removed), false, removed);
  }
});
