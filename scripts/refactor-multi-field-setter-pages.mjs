import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const today = '2026-07-24';

const configs = {
  wasm: {
    userAnchor: '/sdk/wasm/user/profile/set-self-info',
    userPages: [
      ['/sdk/wasm/user/profile/set-global-message-reception', 'Set global message reception', '设置全局消息接收方式', 'setSelfInfo'],
    ],
    conversationOld: '/sdk/wasm/conversation/managing-conversations/set-conversation-settings',
    conversationPages: [
      ['/sdk/wasm/conversation/managing-conversations/pin-conversation', 'Pin or unpin a conversation', '置顶或取消置顶会话', 'setConversation'],
      ['/sdk/wasm/conversation/managing-conversations/set-message-receive-option', 'Set conversation message reception', '设置会话消息接收方式', 'setConversation'],
      ['/sdk/wasm/conversation/managing-conversations/set-private-chat', 'Enable or disable burn after reading', '开启或关闭阅后即焚', 'setConversation'],
      ['/sdk/wasm/conversation/managing-conversations/set-burn-duration', 'Set the burn duration', '设置阅后即焚时长', 'setConversation'],
      ['/sdk/wasm/conversation/managing-conversations/set-message-destruct', 'Schedule server message deletion', '定期删除服务端消息', 'setConversation'],
      ['/sdk/wasm/conversation/managing-conversations/clear-group-mentions', 'Reset group mention status', '重置群聊 @ 状态', 'setConversation'],
      ['/sdk/wasm/conversation/managing-conversations/mark-conversation', 'Mark or unmark a conversation', '标记或取消标记会话', 'setConversation'],
      ['/sdk/wasm/conversation/managing-conversations/set-conversation-remark', 'Set a conversation remark', '设置会话备注', 'setConversation'],
      ['/sdk/wasm/conversation/managing-conversations/set-conversation-extension', 'Set conversation extra data', '设置会话扩展字段', 'setConversation'],
    ],
    groupOld: ['/sdk/wasm/group/set-group-info'],
    groupPages: [
      ['/sdk/wasm/group/update-group-profile', 'Update group profile', '更新群名称、简介和头像', 'setGroupInfo'],
      ['/sdk/wasm/group/set-group-announcement', 'Publish a group announcement', '发布或更新群公告', 'setGroupInfo'],
      ['/sdk/wasm/group/set-group-join-verification', 'Set group join verification', '设置入群验证方式', 'setGroupInfo'],
      ['/sdk/wasm/group/set-group-member-profile-access', 'Set member profile access', '设置成员资料查看权限', 'setGroupInfo'],
      ['/sdk/wasm/group/set-group-member-friend-permission', 'Set member friend request permission', '设置群内添加好友权限', 'setGroupInfo'],
      ['/sdk/wasm/group/set-group-extension', 'Set group extra data', '设置群组扩展字段', 'setGroupInfo'],
    ],
    memberOld: '/sdk/wasm/group/managing-group-members/set-group-member-info',
    memberPages: [
      ['/sdk/wasm/group/managing-group-members/set-group-member-nickname', 'Update a group nickname', '修改群内昵称', 'setGroupMemberInfo'],
      ['/sdk/wasm/group/managing-group-members/set-group-member-role-level', 'Manage group administrators', '设置管理员', 'setGroupMemberInfo'],
      ['/sdk/wasm/group/managing-group-members/set-group-member-avatar', 'Update a group member avatar', '更新群成员头像', 'setGroupMemberInfo'],
      ['/sdk/wasm/group/managing-group-members/set-group-member-extension', 'Set group member extra data', '设置群成员扩展字段', 'setGroupMemberInfo'],
    ],
  },
  flutter: {
    userAnchor: '/sdk/flutter/user/retrieving-and-updating-user-information/update-self-profile',
    userPages: [
      ['/sdk/flutter/user/retrieving-and-updating-user-information/set-global-message-reception', 'Set global message reception', '设置全局消息接收方式', 'setSelfInfo'],
    ],
    conversationOld: '/sdk/flutter/conversation/managing-conversations/set-conversation-settings',
    conversationPages: [
      ['/sdk/flutter/conversation/managing-conversations/pin-conversation', 'Pin or unpin a conversation', '置顶或取消置顶会话', 'setConversation'],
      ['/sdk/flutter/conversation/managing-conversations/set-message-receive-option', 'Set conversation message reception', '设置会话消息接收方式', 'setConversation'],
      ['/sdk/flutter/conversation/managing-conversations/set-private-chat', 'Enable or disable burn after reading', '开启或关闭阅后即焚', 'setConversation'],
      ['/sdk/flutter/conversation/managing-conversations/set-burn-duration', 'Set the burn duration', '设置阅后即焚时长', 'setConversation'],
      ['/sdk/flutter/conversation/managing-conversations/set-message-destruct', 'Schedule server message deletion', '定期删除服务端消息', 'setConversation'],
      ['/sdk/flutter/conversation/managing-conversations/clear-group-mentions', 'Reset group mention status', '重置群聊 @ 状态', 'setConversation'],
      ['/sdk/flutter/conversation/managing-conversations/set-conversation-extension', 'Set conversation extra data', '设置会话扩展字段', 'setConversation'],
    ],
    groupOld: ['/sdk/flutter/group/set-group-info'],
    groupPages: [
      ['/sdk/flutter/group/update-group-profile', 'Update group profile', '更新群名称、简介和头像', 'setGroupInfo'],
      ['/sdk/flutter/group/set-group-announcement', 'Publish a group announcement', '发布或更新群公告', 'setGroupInfo'],
      ['/sdk/flutter/group/set-group-join-verification', 'Set group join verification', '设置入群验证方式', 'setGroupInfo'],
      ['/sdk/flutter/group/set-group-member-profile-access', 'Set member profile access', '设置成员资料查看权限', 'setGroupInfo'],
      ['/sdk/flutter/group/set-group-member-friend-permission', 'Set member friend request permission', '设置群内添加好友权限', 'setGroupInfo'],
      ['/sdk/flutter/group/set-group-extension', 'Set group extra data', '设置群组扩展字段', 'setGroupInfo'],
    ],
    memberOld: '/sdk/flutter/group/managing-group-members/set-group-member-info',
    memberPages: [
      ['/sdk/flutter/group/managing-group-members/set-group-member-nickname', 'Update a group nickname', '修改群内昵称', 'setGroupMemberInfo'],
      ['/sdk/flutter/group/managing-group-members/set-group-member-role-level', 'Manage group administrators', '设置管理员', 'setGroupMemberInfo'],
      ['/sdk/flutter/group/managing-group-members/set-group-member-avatar', 'Update a group member avatar', '更新群成员头像', 'setGroupMemberInfo'],
      ['/sdk/flutter/group/managing-group-members/set-group-member-extension', 'Set group member extra data', '设置群成员扩展字段', 'setGroupMemberInfo'],
    ],
  },
  ios: {
    userAnchor: null,
    userPages: [],
    conversationOld: null,
    conversationPages: [],
    groupOld: ['/sdk/ios/group/set-group-info', '/sdk/ios/group/set-group-info-dictionary'],
    groupPages: [
      ['/sdk/ios/group/update-group-profile', 'Update group profile', '更新群名称、简介和头像', 'setGroupInfo:onSuccess:onFailure:'],
      ['/sdk/ios/group/set-group-announcement', 'Publish a group announcement', '发布或更新群公告', 'setGroupInfoDictionary:onSuccess:onFailure:'],
      ['/sdk/ios/group/set-group-join-verification', 'Set group join verification', '设置入群验证方式', 'setGroupInfoDictionary:onSuccess:onFailure:'],
      ['/sdk/ios/group/set-group-member-profile-access', 'Set member profile access', '设置成员资料查看权限', 'setGroupInfoDictionary:onSuccess:onFailure:'],
      ['/sdk/ios/group/set-group-member-friend-permission', 'Set member friend request permission', '设置群内添加好友权限', 'setGroupInfoDictionary:onSuccess:onFailure:'],
      ['/sdk/ios/group/set-group-extension', 'Set group extra data', '设置群组扩展字段', 'setGroupInfoDictionary:onSuccess:onFailure:'],
    ],
    memberOld: '/sdk/ios/group/managing-group-members/set-group-member-info',
    memberPages: [
      ['/sdk/ios/group/managing-group-members/set-group-member-avatar', 'Update a group member avatar', '更新群成员头像', 'setGroupMemberInfo:onSuccess:onFailure:'],
      ['/sdk/ios/group/managing-group-members/set-group-member-extension', 'Set group member extra data', '设置群成员扩展字段', 'setGroupMemberInfo:onSuccess:onFailure:'],
    ],
  },
};

const navigationGroupLabels = {
  'Conversation organization': '会话整理',
  'Unread status and notifications': '未读与消息提醒',
  'Message retention and privacy': '消息保留与隐私',
  'Hiding and deleting conversations': '隐藏与删除会话',
  'Group profile and settings': '群资料与设置',
  'Group permissions': '群权限与管理',
  'Joining and leaving groups': '加入、退出与解散群组',
};

for (const [platform, config] of Object.entries(configs)) {
  const sidebarPath = resolve(root, `data/structure/${platform}-sidebar.json`);
  const sidebar = JSON.parse(await readFile(sidebarPath, 'utf8'));

  if (config.userAnchor) {
    replaceAfter(sidebar.nodes, config.userAnchor, config.userPages.map(toNavNode));
  }
  if (config.conversationOld) {
    replacePath(sidebar.nodes, config.conversationOld, config.conversationPages.map(toNavNode));
  }
  replacePaths(sidebar.nodes, config.groupOld, config.groupPages.map(toNavNode));
  replacePath(sidebar.nodes, config.memberOld, config.memberPages.map(toNavNode));
  regroupConversationPages(sidebar.nodes, platform);
  regroupGroupPages(sidebar.nodes, platform);
  await writeJson(sidebarPath, sidebar);

  const labelsPath = resolve(root, `data/structure/${platform}-navigation-labels.json`);
  const labels = JSON.parse(await readFile(labelsPath, 'utf8'));
  for (const [, english, chinese] of allPages(config)) labels[english] = chinese;
  Object.assign(labels, navigationGroupLabels);
  if (platform === 'wasm') delete labels['Set group read receipt display'];
  await writeJson(
    labelsPath,
    Object.fromEntries(Object.entries(labels).sort(([left], [right]) => left.localeCompare(right))),
  );

  const auditPath = resolve(root, `data/structure/${platform}-content-audit.json`);
  const audit = JSON.parse(await readFile(auditPath, 'utf8'));
  const groups = [
    config.userPages.length ? [config.userAnchor, config.userPages, false] : null,
    config.conversationOld ? [config.conversationOld, config.conversationPages, true] : null,
    [config.groupOld[0], config.groupPages, true],
    [config.memberOld, config.memberPages, true],
  ].filter(Boolean);

  for (const [sourcePath, pages, retireSource] of groups) {
    const source = audit.pages.find((page) => page.currentPath === sourcePath);
    if (!source) throw new Error(`${platform}: missing audit source ${sourcePath}`);
    for (const [path, , , method] of pages) {
      upsertAuditPage(audit.pages, cloneAuditPage(source, path, method));
    }
    if (retireSource) retireAuditPage(source, platform);
  }

  if (platform === 'ios') {
    const dictionary = audit.pages.find(
      (page) => page.currentPath === '/sdk/ios/group/set-group-info-dictionary',
    );
    retireAuditPage(dictionary, platform);
    for (const [path, , , method] of config.groupPages.slice(1)) {
      upsertAuditPage(audit.pages, cloneAuditPage(dictionary, path, method));
    }
  }
  if (platform === 'wasm') {
    const readReceiptPage = audit.pages.find(
      (page) => page.currentPath === '/sdk/wasm/group/set-group-read-receipts',
    );
    retireUnsupportedClientPage(readReceiptPage);
    const groupOverview = audit.pages.find(
      (page) => page.currentPath === '/sdk/wasm/group/overview-group',
    );
    const removalNote =
      `${today}：逐页复核客户端权限；移除不可由客户端修改的群消息已读状态显示入口。`;
    groupOverview.locales.zh.reviewedAt = today;
    if (!groupOverview.notes.includes(removalNote)) groupOverview.notes.push(removalNote);
  }
  const terminologyNote =
    `${today}：逐页复核任务名称；统一使用“设置管理员”“定期删除服务端消息”和“重置群聊 @ 状态”，并同步相关对比说明。`;
  for (const suffix of [
    '/conversation/overview-conversation',
    '/conversation/managing-conversations/set-private-chat',
    '/conversation/managing-conversations/set-burn-duration',
    '/conversation/managing-conversations/set-message-destruct',
    '/conversation/managing-conversations/set-message-destruct-time',
    '/conversation/managing-conversations/clear-group-mentions',
    '/group/managing-group-members/set-group-member-role-level',
  ]) {
    const page = audit.pages.find(
      (candidate) => candidate.currentPath === `/sdk/${platform}${suffix}`,
    );
    if (!page) continue;
    page.locales.zh.reviewedAt = today;
    if (!page.notes.includes(terminologyNote)) page.notes.push(terminologyNote);
  }
  await writeJson(auditPath, audit);
}

await updateWasmOwnership();

function allPages(config) {
  return [
    ...config.userPages,
    ...config.conversationPages,
    ...config.groupPages,
    ...config.memberPages,
  ];
}

function regroupConversationPages(nodes, platform) {
  const conversation = nodes.find((node) => node?.id === 'conversation');
  if (!conversation) throw new Error(`${platform}: missing conversation sidebar`);

  const categoryIDs = new Set([
    'conversation/conversation-list-and-drafts',
    'conversation/message-reception-and-reminders',
    'conversation/message-retention-and-privacy',
    'conversation/hiding-and-deleting-conversations',
  ]);
  if (conversation.children.filter((node) => categoryIDs.has(node?.id)).length === 4) return;

  const managingIndex = conversation.children.findIndex(
    (node) => node?.id === 'conversation/managing-conversations',
  );
  if (managingIndex < 0) throw new Error(`${platform}: missing managing conversations group`);
  const managing = conversation.children[managingIndex];
  const pages = new Map(managing.children.map((node) => [childPath(node), node]));
  const prefix = `/sdk/${platform}/conversation/managing-conversations`;
  const specifications = [
    [
      'conversation/conversation-list-and-drafts',
      'Conversation organization',
      [
        `${prefix}/pin-conversation`,
        `${prefix}/mark-conversation`,
        `${prefix}/set-conversation-remark`,
        `${prefix}/set-conversation-extension`,
        `${prefix}/set-conversation-draft`,
      ],
    ],
    [
      'conversation/message-reception-and-reminders',
      'Unread status and notifications',
      [
        `${prefix}/set-message-receive-option`,
        `${prefix}/clear-group-mentions`,
        `${prefix}/mark-conversation-read`,
        `${prefix}/get-total-unread-count`,
      ],
    ],
    [
      'conversation/message-retention-and-privacy',
      'Message retention and privacy',
      [
        `${prefix}/set-private-chat`,
        `${prefix}/set-burn-duration`,
        `${prefix}/set-message-destruct`,
        `${prefix}/set-message-destruct-time`,
      ],
    ],
    [
      'conversation/hiding-and-deleting-conversations',
      'Hiding and deleting conversations',
      [
        `${prefix}/hide-a-conversation`,
        `${prefix}/delete-conversation`,
        `${prefix}/delete-conversation-with-messages`,
        `${prefix}/clear-conversation-messages`,
        `${prefix}/clear-local-conversations`,
        `${prefix}/hide-all-conversations`,
      ],
    ],
  ];
  const groupedPaths = new Set(specifications.flatMap(([, , paths]) => paths));
  const ungrouped = [...pages.keys()].filter((path) => path && !groupedPaths.has(path));
  if (ungrouped.length) {
    throw new Error(`${platform}: ungrouped conversation pages: ${ungrouped.join(', ')}`);
  }
  const categories = specifications.map(([id, title, paths]) => ({
    id,
    title,
    children: paths.map((path) => pages.get(path)).filter(Boolean),
  }));
  conversation.children.splice(managingIndex, 1, ...categories);
}

function regroupGroupPages(nodes, platform) {
  const group = nodes.find((node) => node?.id === 'group');
  if (!group) throw new Error(`${platform}: missing group sidebar`);

  removePath(group.children, '/sdk/wasm/group/set-group-read-receipts');
  const categoryIDs = new Set([
    'group/profile-and-settings',
    'group/permissions',
    'group/joining-and-leaving',
  ]);
  if (group.children.filter((node) => categoryIDs.has(node?.id)).length === 3) return;

  const pages = new Map(
    group.children
      .filter((node) => childPath(node))
      .map((node) => [childPath(node), node]),
  );
  const prefix = `/sdk/${platform}/group`;
  const overviewPath = `${prefix}/overview-group`;
  const specifications = [
    [
      'group/profile-and-settings',
      'Group profile and settings',
      [
        `${prefix}/create-group`,
        `${prefix}/update-group-profile`,
        `${prefix}/set-group-announcement`,
        `${prefix}/set-group-extension`,
      ],
    ],
    [
      'group/permissions',
      'Group permissions',
      [
        `${prefix}/set-group-join-verification`,
        `${prefix}/set-group-member-profile-access`,
        `${prefix}/set-group-member-friend-permission`,
        `${prefix}/change-group-mute`,
      ],
    ],
    [
      'group/joining-and-leaving',
      'Joining and leaving groups',
      [`${prefix}/join-group`, `${prefix}/quit-group`, `${prefix}/dismiss-group`],
    ],
  ];
  const groupedPaths = new Set([
    overviewPath,
    ...specifications.flatMap(([, , paths]) => paths),
  ]);
  const ungrouped = [...pages.keys()].filter((path) => !groupedPaths.has(path));
  if (ungrouped.length) throw new Error(`${platform}: ungrouped group pages: ${ungrouped.join(', ')}`);

  const existingFolders = group.children.filter((node) => node?.id && !childPath(node));
  group.children = [
    pages.get(overviewPath),
    ...specifications.map(([id, title, paths]) => ({
      id,
      title,
      children: paths.map((path) => pages.get(path)).filter(Boolean),
    })),
    ...existingFolders,
  ].filter(Boolean);
}

function removePath(nodes, target) {
  const index = nodes.findIndex((node) => childPath(node) === target);
  if (index >= 0) nodes.splice(index, 1);
}

function toNavNode([path, navigationTitle]) {
  return { path, navigationTitle };
}

function replaceAfter(nodes, anchor, additions) {
  if (additions.every((entry) => hasPath(nodes, entry.path))) return;
  if (replaceAfterInternal(nodes, anchor, additions)) return;
  throw new Error(`Missing sidebar anchor ${anchor}`);
}

function replaceAfterInternal(nodes, anchor, additions) {
  for (const node of nodes) {
    if (typeof node !== 'object' || !node) continue;
    const index = node.children?.findIndex((child) => childPath(child) === anchor) ?? -1;
    if (index >= 0) {
      const existing = new Set(node.children.map(childPath));
      node.children.splice(
        index + 1,
        0,
        ...additions.filter((entry) => !existing.has(entry.path)),
      );
      return true;
    }
    if (replaceAfterInternal(node.children ?? [], anchor, additions)) return true;
  }
  return false;
}

function replacePath(nodes, target, replacements) {
  if (replacements.every((entry) => hasPath(nodes, entry.path))) return;
  if (replacePathInternal(nodes, target, replacements)) return;
  throw new Error(`Missing sidebar path ${target}`);
}

function replacePathInternal(nodes, target, replacements) {
  for (const node of nodes) {
    if (typeof node !== 'object' || !node) continue;
    const index = node.children?.findIndex((child) => childPath(child) === target) ?? -1;
    if (index >= 0) {
      node.children.splice(index, 1, ...replacements);
      return true;
    }
    if (replacePathInternal(node.children ?? [], target, replacements)) return true;
  }
  return false;
}

function replacePaths(nodes, targets, replacements) {
  if (replacements.every((entry) => hasPath(nodes, entry.path))) return;
  if (replacePathsInternal(nodes, new Set(targets), replacements)) return;
  throw new Error(`Missing sidebar paths ${targets.join(', ')}`);
}

function replacePathsInternal(nodes, targetSet, replacements) {
  for (const node of nodes) {
    if (typeof node !== 'object' || !node) continue;
    const indexes = (node.children ?? [])
      .map((child, index) => (targetSet.has(childPath(child)) ? index : -1))
      .filter((index) => index >= 0);
    if (indexes.length) {
      const first = indexes[0];
      node.children = [
        ...node.children.slice(0, first),
        ...replacements,
        ...node.children.slice(first).filter((child) => !targetSet.has(childPath(child))),
      ];
      return true;
    }
    if (replacePathsInternal(node.children ?? [], targetSet, replacements)) return true;
  }
  return false;
}

function childPath(child) {
  return typeof child === 'string' ? child : child?.path;
}

function hasPath(nodes, target) {
  return nodes.some(
    (node) =>
      childPath(node) === target ||
      (typeof node === 'object' && node?.children && hasPath(node.children, target)),
  );
}

function cloneAuditPage(source, path, method) {
  const page = structuredClone(source);
  page.currentPath = path;
  page.targetPath = path;
  page.disposition = 'adapt';
  page.redirectTo = null;
  page.sdkMethods = [method];
  page.sdkEvents = [];
  page.locales.zh = {
    reviewStatus: 'published',
    reviewer: 'Codex',
    reviewedAt: today,
    exampleVerification: {
      status: 'verified',
      evidence: [...source.openimSources],
      reason: null,
    },
  };
  page.locales.en = {
    reviewStatus: 'deferred',
    reviewer: null,
    reviewedAt: null,
    exampleVerification: { status: 'pending', evidence: [], reason: null },
  };
  page.notes = [
    `${today}：已逐页人工审核；通用 setter 按用户任务拆页，本页只说明对应业务字段。`,
  ];
  return page;
}

function retireAuditPage(page, platform) {
  if (!page) return;
  page.disposition = platform === 'wasm' ? 'remove' : 'omit';
  page.redirectTo = null;
  page.sdkMethods = [];
  page.sdkEvents = [];
  page.locales.zh = {
    reviewStatus: 'structure-only',
    reviewer: 'Codex',
    reviewedAt: today,
    exampleVerification: {
      status: 'not-applicable',
      evidence: [],
      reason: '多字段聚合页已移除，正文与证据迁移到按业务操作拆分的页面。',
    },
  };
  const note = `${today}：多字段聚合页已移除；按确认不保留旧地址重定向。`;
  if (!page.notes.includes(note)) page.notes.push(note);
}

function retireUnsupportedClientPage(page) {
  if (!page) return;
  page.disposition = 'remove';
  page.redirectTo = null;
  page.sdkMethods = [];
  page.sdkEvents = [];
  page.locales.zh = {
    reviewStatus: 'structure-only',
    reviewer: 'Codex',
    reviewedAt: today,
    exampleVerification: {
      status: 'not-applicable',
      evidence: [],
      reason: '群消息已读状态显示不能由客户端修改，不作为客户端 SDK 操作公开。',
    },
  };
  const note =
    `${today}：确认 displayIsRead 不是客户端可修改能力，页面和导航已移除且不保留重定向。`;
  if (!page.notes.includes(note)) page.notes.push(note);
}

function upsertAuditPage(pages, page) {
  const index = pages.findIndex((candidate) => candidate.currentPath === page.currentPath);
  if (index >= 0) pages[index] = page;
  else pages.push(page);
}

async function updateWasmOwnership() {
  const ownershipPath = resolve(root, 'data/structure/wasm-api-ownership.json');
  const ownership = JSON.parse(await readFile(ownershipPath, 'utf8'));
  const pageByMethod = {
    setConversation: '/sdk/wasm/conversation/managing-conversations/pin-conversation',
    getConversationRecvMessageOpt: '/sdk/wasm/conversation/managing-conversations/set-message-receive-option',
    pinConversation: '/sdk/wasm/conversation/managing-conversations/pin-conversation',
    resetConversationGroupAtType: '/sdk/wasm/conversation/managing-conversations/clear-group-mentions',
    setConversationBurnDuration: '/sdk/wasm/conversation/managing-conversations/set-burn-duration',
    setConversationEx: '/sdk/wasm/conversation/managing-conversations/set-conversation-extension',
    setConversationIsMsgDestruct: '/sdk/wasm/conversation/managing-conversations/set-message-destruct',
    setConversationMsgDestructTime: '/sdk/wasm/conversation/managing-conversations/set-message-destruct',
    setConversationPrivateChat: '/sdk/wasm/conversation/managing-conversations/set-private-chat',
    setConversationRecvMessageOpt: '/sdk/wasm/conversation/managing-conversations/set-message-receive-option',
    setGlobalRecvMessageOpt: '/sdk/wasm/user/profile/set-global-message-reception',
    setGroupApplyMemberFriend: '/sdk/wasm/group/set-group-member-friend-permission',
    setGroupInfo: '/sdk/wasm/group/update-group-profile',
    setGroupLookMemberInfo: '/sdk/wasm/group/set-group-member-profile-access',
    setGroupMemberInfo: '/sdk/wasm/group/managing-group-members/set-group-member-nickname',
    setGroupMemberNickname: '/sdk/wasm/group/managing-group-members/set-group-member-nickname',
    setGroupMemberRoleLevel: '/sdk/wasm/group/managing-group-members/set-group-member-role-level',
    setGroupVerification: '/sdk/wasm/group/set-group-join-verification',
  };
  for (const method of ownership.methods) {
    if (pageByMethod[method.name]) method.page = pageByMethod[method.name];
  }
  const taskPages = [
    ...configs.wasm.userPages,
    ...configs.wasm.conversationPages.slice(1),
    ...configs.wasm.groupPages.slice(1),
    ...configs.wasm.memberPages.slice(1),
  ].map(([path]) => path);
  ownership.conceptPages = [
    ...new Set([...ownership.conceptPages, ...taskPages]),
  ]
    .filter((path) => path !== '/sdk/wasm/group/set-group-read-receipts')
    .sort();
  await writeJson(ownershipPath, ownership);

  const coveragePath = resolve(root, 'data/structure/wasm-domain-api-coverage.json');
  const coverage = JSON.parse(await readFile(coveragePath, 'utf8'));
  for (const domain of Object.values(coverage.domains ?? {})) {
    for (const method of domain.methods ?? []) {
      if (pageByMethod[method.name]) method.page = pageByMethod[method.name];
    }
  }
  await writeJson(coveragePath, coverage);
}

async function writeJson(path, value) {
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}
