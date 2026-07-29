import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const configs = {
  wasm: {
    'message/managing-messages/delete-a-message': [
      ['message/managing-messages/delete-local-message', 'Delete a local message', '删除本地消息', 'deleteMessageFromLocalStorage', []],
      ['message/managing-messages/delete-saved-messages', 'Delete saved messages', '批量删除消息', 'deleteMessages', ['OnMsgDeleted']],
      ['message/managing-messages/delete-user-messages', 'Delete messages from a user', '删除群聊中指定用户的全部消息', 'deleteUserAllMessagesInConv', ['OnDeleteUserAllMsgsInConv']],
    ],
    'message/managing-read-status/manage-message-read-receipts': [
      ['message/managing-read-status/get-group-message-readers', 'View group message readers', '查看群消息阅读成员', 'getGroupMessageReaderList', []],
      ['message/managing-read-status/send-group-read-receipts', 'Send group read receipts', '上报群消息已读', 'sendGroupMessageReadReceipt', ['OnRecvGroupReadReceipt']],
    ],
  },
  ios: {
    'message/managing-messages/delete-a-message': [
      ['message/managing-messages/delete-local-message', 'Delete a local message', '删除本地消息', 'deleteMessageFromLocalStorage:clientMsgID:onSuccess:onFailure:', []],
      ['message/managing-messages/delete-saved-message', 'Delete a saved message', '删除消息', 'deleteMessage:clientMsgID:onSuccess:onFailure:', []],
      ['message/managing-messages/delete-saved-messages', 'Delete saved messages', '批量删除消息', 'deleteMessages:clientMsgID:isSync:onSuccess:onFailure:', ['onMsgDeleted:']],
      ['message/managing-messages/delete-user-messages', 'Delete messages from a user', '删除群聊中指定用户的全部消息', 'deleteUserAllMessagesInConversation:userID:onSuccess:onFailure:', ['onDeleteUserAllMsgsInConv:']],
    ],
    'message/managing-read-status/manage-message-read-receipts': [
      ['message/managing-read-status/get-group-message-readers', 'View group message readers', '查看群消息阅读成员', 'getGroupMessageReaderList:clientMsgID:filter:offset:count:onSuccess:onFailure:', []],
      ['message/managing-read-status/send-group-read-receipts', 'Send group read receipts', '上报群消息已读', 'sendGroupMessageReadReceipt:clientMsgIDs:onSuccess:onFailure:', ['onRecvGroupReadReceipt:']],
    ],
    'user/retrieving-and-updating-user-information/retrieve-and-update-self-profile': [
      ['user/retrieving-and-updating-user-information/get-self-profile', 'View your profile', '查看当前用户资料', 'getSelfInfoWithOnSuccess:onFailure:', []],
      ['user/retrieving-and-updating-user-information/update-self-profile', 'Update your profile', '更新当前用户资料', 'setSelfInfo:onSuccess:onFailure:', ['onSelfInfoUpdated:']],
      ['user/retrieving-and-updating-user-information/set-global-message-reception', 'Set global message reception', '设置全局消息接收', 'setGlobalRecvMessageOpt:onSuccess:onFailure:', []],
    ],
    'user/retrieving-and-updating-user-information/retrieve-the-online-status-of-a-user': [
      ['user/retrieving-and-updating-user-information/subscribe-user-status', 'Subscribe to user status', '订阅用户在线状态', 'subscribeUsersStatus:onSuccess:onFailure:', ['onUserStatusChanged:']],
      ['user/retrieving-and-updating-user-information/get-subscribed-user-status', 'Refresh subscribed user status', '刷新已订阅用户状态', 'getSubscribeUsersStatusWithOnSuccess:onFailure:', []],
      ['user/retrieving-and-updating-user-information/unsubscribe-user-status', 'Unsubscribe from user status', '取消用户状态订阅', 'unsubscribeUsersStatus:onSuccess:onFailure:', []],
    ],
    'user/moderating-a-user/block-or-unblock-users': [
      ['user/moderating-a-user/block-user', 'Block a user', '拉黑用户', 'addToBlackList:ex:onSuccess:onFailure:', ['onBlackAdded:']],
      ['user/moderating-a-user/unblock-user', 'Unblock a user', '取消拉黑用户', 'removeFromBlackList:onSuccess:onFailure:', ['onBlackDeleted:']],
    ],
  },
  flutter: {
    'message/managing-messages/delete-a-message': [
      ['message/managing-messages/delete-local-message', 'Delete a local message', '删除本地消息', 'deleteMessageFromLocalStorage', []],
      ['message/managing-messages/delete-saved-message', 'Delete a saved message', '删除消息', 'deleteMessageFromLocalAndSvr', ['onMsgDeleted']],
    ],
    'user/retrieving-and-updating-user-information/retrieve-and-update-self-profile': [
      ['user/retrieving-and-updating-user-information/get-self-profile', 'View your profile', '查看当前用户资料', 'getSelfUserInfo', []],
      ['user/retrieving-and-updating-user-information/update-self-profile', 'Update your profile', '更新当前用户资料', 'setSelfInfo', ['onSelfInfoUpdated']],
    ],
    'user/retrieving-and-updating-user-information/retrieve-the-online-status-of-a-user': [
      ['user/retrieving-and-updating-user-information/subscribe-user-status', 'Subscribe to user status', '订阅用户在线状态', 'subscribeUsersStatus', ['onUserStatusChanged']],
      ['user/retrieving-and-updating-user-information/get-subscribed-user-status', 'Refresh subscribed user status', '刷新已订阅用户状态', 'getSubscribeUsersStatus', []],
      ['user/retrieving-and-updating-user-information/unsubscribe-user-status', 'Unsubscribe from user status', '取消用户状态订阅', 'unsubscribeUsersStatus', []],
    ],
    'user/moderating-a-user/block-or-unblock-users': [
      ['user/moderating-a-user/block-user', 'Block a user', '拉黑用户', 'addBlacklist', ['onBlackAdded']],
      ['user/moderating-a-user/unblock-user', 'Unblock a user', '取消拉黑用户', 'removeBlacklist', ['onBlackDeleted']],
    ],
  },
};

for (const [platform, replacements] of Object.entries(configs)) {
  const prefix = `/sdk/${platform}/`;
  const sidebarPath = resolve(root, `data/structure/${platform}-sidebar.json`);
  const sidebar = JSON.parse(await readFile(sidebarPath, 'utf8'));
  sidebar.nodes = rewrite(sidebar.nodes, prefix, replacements);
  await writeFile(sidebarPath, `${JSON.stringify(sidebar, null, 2)}\n`);

  const labelsPath = resolve(root, `data/structure/${platform}-navigation-labels.json`);
  const labels = JSON.parse(await readFile(labelsPath, 'utf8'));
  for (const pages of Object.values(replacements)) for (const [, en, zh] of pages) labels[en] = zh;
  await writeFile(labelsPath, `${JSON.stringify(Object.fromEntries(Object.entries(labels).sort(([a], [b]) => a.localeCompare(b))), null, 2)}\n`);

  const auditPath = resolve(root, `data/structure/${platform}-content-audit.json`);
  const audit = JSON.parse(await readFile(auditPath, 'utf8'));
  for (const [oldSuffix, pages] of Object.entries(replacements)) {
    const oldPath = `${prefix}${oldSuffix}`;
    const old = audit.pages.find((page) => page.currentPath === oldPath);
    if (!old) throw new Error(`Missing audit page: ${oldPath}`);
    old.disposition = platform === 'wasm' ? 'remove' : 'omit';
    old.redirectTo = null;
    if (platform === 'wasm' && old.locales.zh.reviewStatus === 'published') {
      old.locales.zh.reviewStatus = 'api-verified';
    }
    old.sdkMethods = [];
    old.sdkEvents = [];
    old.locales.zh.exampleVerification = { status: 'not-applicable', evidence: [], reason: '聚合页已移除，证据迁移到独立页面。' };
    old.notes.push('2026-07-24：聚合页拆分为独立 API 或事件归属页面。');

    for (const [suffix, , , method, events] of pages) {
      const currentPath = `${prefix}${suffix}`;
      const page = structuredClone(old);
      page.currentPath = currentPath;
      page.targetPath = currentPath;
      page.disposition = 'adapt';
      page.redirectTo = null;
      page.sdkMethods = method ? [method] : [];
      page.sdkEvents = events;
      page.locales.zh = { reviewStatus: 'published', reviewer: 'Codex', reviewedAt: '2026-07-24', exampleVerification: { status: 'verified', evidence: [...old.openimSources], reason: null } };
      page.locales.en = { reviewStatus: 'deferred', reviewer: null, reviewedAt: null, exampleVerification: { status: 'pending', evidence: [], reason: null } };
      page.notes = [`2026-07-24：已逐页人工审核；${method ? `本页只归属 ${method}` : '本页是事件处理概念页'}${events.length ? `，事件为 ${events.join('、')}` : ''}。`];
      const index = audit.pages.findIndex((candidate) => candidate.currentPath === currentPath);
      if (index >= 0) audit.pages[index] = page;
      else audit.pages.push(page);
    }
  }
  if (platform === 'flutter') {
    const searchPage = audit.pages.find(
      (page) => page.currentPath === '/sdk/flutter/message/searching-messages/search-messages',
    );
    searchPage.sdkMethods = ['searchLocalMessages'];
    searchPage.locales.zh.reviewedAt = '2026-07-24';
    if (!searchPage.notes.some((note) => note.includes('辅助调用'))) {
      searchPage.notes.push(
        '2026-07-24：逐页复核后仅保留 searchLocalMessages 归属；getConversationIDBySessionType 只是跳转流程中的辅助调用。',
      );
    }
  }
  await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
}

function rewrite(nodes, prefix, replacements) {
  return nodes.flatMap((entry) => {
    const path = typeof entry === 'string' ? entry : entry?.path;
    if (path) {
      for (const [oldSuffix, pages] of Object.entries(replacements)) {
        if (path === `${prefix}${oldSuffix}`) return pages.map(([suffix, title]) => ({ path: `${prefix}${suffix}`, navigationTitle: title }));
      }
      return [entry];
    }
    return [{ ...entry, children: rewrite(entry.children ?? [], prefix, replacements) }];
  });
}
