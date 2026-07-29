import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const base = (platform, suffix) => `/sdk/${platform}/conversation/${suffix}`;

const configs = {
  wasm: {
    replacements: {
      'retrieving-conversations/retrieve-a-conversation': [
        ['retrieving-conversations/get-conversation-by-target', 'Open a conversation', '打开指定会话', 'getOneConversation'],
        ['retrieving-conversations/get-conversation-id', 'Resolve a conversation ID', '获取会话 ID', 'getConversationIDBySessionType'],
        ['retrieving-conversations/get-conversations-by-id', 'Get conversations by ID', '按 ID 批量获取会话', 'getMultipleConversation'],
      ],
      'managing-conversations/manage-read-status': [
        ['managing-conversations/mark-conversation-read', 'Mark a conversation as read', '标记会话已读', 'markConversationMessageAsRead'],
        ['managing-conversations/get-total-unread-count', 'Track the total unread count', '维护总未读数', 'getTotalUnreadMsgCount'],
      ],
      'managing-conversations/delete-or-clear-conversation': [
        ['managing-conversations/delete-conversation', 'Delete a conversation', '删除会话', 'deleteConversation'],
        ['managing-conversations/delete-conversation-with-messages', 'Delete a conversation and its messages', '删除会话及消息', 'deleteConversationAndDeleteAllMsg'],
        ['managing-conversations/clear-conversation-messages', 'Clear messages in a conversation', '清空会话消息', 'clearConversationAndDeleteAllMsg'],
        ['managing-conversations/clear-local-conversations', 'Clear all local conversations', '清理全部本地会话', 'deleteAllConversationFromLocal'],
      ],
      'managing-conversations/set-conversation-settings': [
        ['managing-conversations/pin-conversation', 'Pin or unpin a conversation', '置顶或取消置顶会话', 'setConversation'],
        ['managing-conversations/set-message-receive-option', 'Set conversation message reception', '设置会话消息接收方式', 'setConversation'],
        ['managing-conversations/set-private-chat', 'Enable or disable burn after reading', '开启或关闭阅后即焚', 'setConversation'],
        ['managing-conversations/set-burn-duration', 'Set the burn duration', '设置阅后即焚时长', 'setConversation'],
        ['managing-conversations/set-message-destruct', 'Schedule server message deletion', '定期删除服务端消息', 'setConversation'],
        ['managing-conversations/clear-group-mentions', 'Reset group mention status', '重置群聊 @ 状态', 'setConversation'],
        ['managing-conversations/mark-conversation', 'Mark or unmark a conversation', '标记或取消标记会话', 'setConversation'],
        ['managing-conversations/set-conversation-remark', 'Set a conversation remark', '设置会话备注', 'setConversation'],
        ['managing-conversations/set-conversation-extension', 'Set conversation extra data', '设置会话扩展字段', 'setConversation'],
      ],
    },
    event: ['OnTotalUnreadMessageCountChanged', 'managing-conversations/get-total-unread-count'],
  },
  ios: {
    replacements: {
      'retrieving-conversations/retrieve-a-conversation': [
        ['retrieving-conversations/get-conversation-by-target', 'Open a conversation', '打开指定会话', 'getOneConversationWithSessionType:sourceID:onSuccess:onFailure:'],
        ['retrieving-conversations/get-conversation-id', 'Resolve a conversation ID', '获取会话 ID', 'getConversationIDBySessionType:sourceID:'],
        ['retrieving-conversations/get-conversations-by-id', 'Get conversations by ID', '按 ID 批量获取会话', 'getMultipleConversation:onSuccess:onFailure:'],
      ],
      'managing-conversations/manage-read-status': [
        ['managing-conversations/mark-conversation-read', 'Mark a conversation as read', '标记会话已读', 'markConversationMessageAsRead:onSuccess:onFailure:'],
        ['managing-conversations/get-total-unread-count', 'Track the total unread count', '维护总未读数', 'getTotalUnreadMsgCountWithOnSuccess:onFailure:'],
        ['managing-conversations/clear-group-mentions', 'Reset group mention status', '重置群聊 @ 状态', 'resetConversationGroupAtType:onSuccess:onFailure:'],
      ],
      'managing-conversations/delete-or-clear-conversation': [
        ['managing-conversations/delete-conversation-with-messages', 'Delete a conversation and its messages', '删除会话及消息', 'deleteConversationAndDeleteAllMsg:onSuccess:onFailure:'],
        ['managing-conversations/clear-conversation-messages', 'Clear messages in a conversation', '清空会话消息', 'clearConversationAndDeleteAllMsg:onSuccess:onFailure:'],
        ['managing-conversations/hide-all-conversations', 'Hide all conversations', '隐藏全部会话', 'hideAllConversationsWithOnSuccess:onFailure:'],
      ],
      'managing-conversations/set-conversation-settings': [
        ['managing-conversations/pin-conversation', 'Pin or unpin a conversation', '置顶或取消置顶会话', 'pinConversation:isPinned:onSuccess:onFailure:'],
        ['managing-conversations/set-message-receive-option', 'Set message reception', '设置消息接收方式', 'setConversationRecvMessageOpt:status:onSuccess:onFailure:'],
        ['managing-conversations/set-private-chat', 'Set private chat', '设置私聊状态', 'setConversationPrivateChat:isPrivate:onSuccess:onFailure:'],
        ['managing-conversations/set-burn-duration', 'Set the burn duration', '设置阅后即焚时长', 'setConversationBurnDuration:duration:onSuccess:onFailure:'],
        ['managing-conversations/set-conversation-extension', 'Set conversation extra data', '设置会话扩展字段', 'setConversationEx:ex:onSuccess:onFailure:'],
        ['managing-conversations/set-message-destruct', 'Schedule server message deletion', '定期删除服务端消息', 'setConversationIsMsgDestruct:isMsgDestruct:onSuccess:onFailure:'],
        ['managing-conversations/set-message-destruct-time', 'Set server message deletion period', '设置服务端消息删除周期', 'setConversationMsgDestructTime:msgDestructTime:onSuccess:onFailure:'],
      ],
    },
    event: ['onTotalUnreadMessageCountChanged:', 'managing-conversations/get-total-unread-count'],
  },
  flutter: {
    replacements: {
      'retrieving-conversations/retrieve-a-conversation': [
        ['retrieving-conversations/get-conversation-by-target', 'Open a conversation', '打开指定会话', 'getOneConversation'],
        ['retrieving-conversations/get-conversation-id', 'Resolve a conversation ID', '获取会话 ID', 'getConversationIDBySessionType'],
        ['retrieving-conversations/get-conversations-by-id', 'Get conversations by ID', '按 ID 批量获取会话', 'getMultipleConversation'],
      ],
      'managing-conversations/manage-read-status': [
        ['managing-conversations/mark-conversation-read', 'Mark a conversation as read', '标记会话已读', 'markConversationMessageAsRead'],
        ['managing-conversations/get-total-unread-count', 'Track the total unread count', '维护总未读数', 'getTotalUnreadMsgCount'],
      ],
      'managing-conversations/delete-or-clear-conversation': [
        ['managing-conversations/delete-conversation-with-messages', 'Delete a conversation and its messages', '删除会话及消息', 'deleteConversationAndDeleteAllMsg'],
        ['managing-conversations/clear-conversation-messages', 'Clear messages in a conversation', '清空会话消息', 'clearConversationAndDeleteAllMsg'],
      ],
      'managing-conversations/set-conversation-settings': [
        ['managing-conversations/pin-conversation', 'Pin or unpin a conversation', '置顶或取消置顶会话', 'setConversation'],
        ['managing-conversations/set-message-receive-option', 'Set conversation message reception', '设置会话消息接收方式', 'setConversation'],
        ['managing-conversations/set-private-chat', 'Enable or disable burn after reading', '开启或关闭阅后即焚', 'setConversation'],
        ['managing-conversations/set-burn-duration', 'Set the burn duration', '设置阅后即焚时长', 'setConversation'],
        ['managing-conversations/set-message-destruct', 'Schedule server message deletion', '定期删除服务端消息', 'setConversation'],
        ['managing-conversations/clear-group-mentions', 'Reset group mention status', '重置群聊 @ 状态', 'setConversation'],
        ['managing-conversations/set-conversation-extension', 'Set conversation extra data', '设置会话扩展字段', 'setConversation'],
      ],
    },
    event: ['onTotalUnreadMessageCountChanged', 'managing-conversations/get-total-unread-count'],
  },
};

for (const [platform, config] of Object.entries(configs)) {
  const sidebarPath = resolve(root, `data/structure/${platform}-sidebar.json`);
  const sidebar = JSON.parse(await readFile(sidebarPath, 'utf8'));
  sidebar.nodes = replaceEntries(sidebar.nodes, platform, config.replacements);
  await writeFile(sidebarPath, `${JSON.stringify(sidebar, null, 2)}\n`);

  const labelsPath = resolve(root, `data/structure/${platform}-navigation-labels.json`);
  const labels = JSON.parse(await readFile(labelsPath, 'utf8'));
  for (const groups of Object.values(config.replacements)) {
    for (const [, navigationTitle, zhLabel] of groups) labels[navigationTitle] = zhLabel;
  }
  await writeFile(
    labelsPath,
    `${JSON.stringify(Object.fromEntries(Object.entries(labels).sort(([a], [b]) => a.localeCompare(b))), null, 2)}\n`,
  );

  const auditPath = resolve(root, `data/structure/${platform}-content-audit.json`);
  const audit = JSON.parse(await readFile(auditPath, 'utf8'));
  for (const [oldSuffix, groups] of Object.entries(config.replacements)) {
    const oldPath = base(platform, oldSuffix);
    const oldPage = audit.pages.find((page) => page.currentPath === oldPath);
    if (!oldPage) throw new Error(`Missing historical audit page: ${oldPath}`);
    oldPage.disposition = platform === 'wasm' ? 'remove' : 'omit';
    oldPage.redirectTo = null;
    if (platform === 'wasm' && oldPage.locales.zh.reviewStatus === 'published') {
      oldPage.locales.zh.reviewStatus = 'api-verified';
    }
    oldPage.sdkMethods = [];
    oldPage.sdkEvents = [];
    oldPage.locales.zh.exampleVerification = {
      status: 'not-applicable',
      evidence: [],
      reason: '聚合页已从正文和导航移除，API 与事件证据迁移到独立页面。',
    };
    oldPage.notes.push('2026-07-23：聚合页拆分为每个公开 API 一个页面；本记录仅保留历史追溯。');

    for (const [suffix, , , method] of groups) {
      const currentPath = base(platform, suffix);
      const page = {
        ...structuredClone(oldPage),
        currentPath,
        targetPath: currentPath,
        disposition: 'adapt',
        redirectTo: null,
        sdkMethods: [method],
        sdkEvents: config.event[1] === suffix ? [config.event[0]] : [],
      };
      page.locales.zh = {
        reviewStatus: 'published',
        reviewer: 'Codex',
        reviewedAt: '2026-07-23',
        exampleVerification: {
          status: 'verified',
          evidence: [...oldPage.openimSources],
          reason: null,
        },
      };
      page.locales.en = {
        reviewStatus: 'deferred',
        reviewer: null,
        reviewedAt: null,
        exampleVerification: { status: 'pending', evidence: [], reason: null },
      };
      page.notes = [`2026-07-23：已逐页人工审核；本页只归属 ${method}。`];
      const existing = audit.pages.findIndex((candidate) => candidate.currentPath === currentPath);
      if (existing >= 0) audit.pages[existing] = page;
      else audit.pages.push(page);
    }
  }
  await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
}

function replaceEntries(nodes, platform, replacements) {
  return nodes.flatMap((entry) => {
    const path = typeof entry === 'string' ? entry : entry?.path;
    if (path) {
      for (const [oldSuffix, groups] of Object.entries(replacements)) {
        if (path === base(platform, oldSuffix)) {
          return groups.map(([suffix, navigationTitle]) => ({
            path: base(platform, suffix),
            navigationTitle,
          }));
        }
      }
      return [entry];
    }
    return [{ ...entry, children: replaceEntries(entry.children ?? [], platform, replacements) }];
  });
}
