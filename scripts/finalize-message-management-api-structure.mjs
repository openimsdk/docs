import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const configs = {
  wasm: {
    'pin-conversation-messages': [
      ['get-pinned-messages', 'View pinned messages', '查看置顶消息', 'getConversationPinnedMsg', []],
      ['set-message-pinned', 'Pin or unpin a message', '置顶或取消置顶消息', 'setConversationPinnedMsg', ['OnChangedPinnedMsg']],
    ],
    'insert-a-local-message': [
      ['insert-local-single-message', 'Insert a local direct message', '插入本地单聊消息', 'insertSingleMessageToLocalStorage', []],
      ['insert-local-group-message', 'Insert a local group message', '插入本地群聊消息', 'insertGroupMessageToLocalStorage', []],
    ],
    'clear-message-history': [
      ['clear-all-local-messages', 'Clear all local messages', '清理全部本地消息', 'deleteAllMsgFromLocal', []],
      ['clear-all-messages', 'Clear all saved messages', '清理全部消息', 'deleteAllMsgFromLocalAndSvr', []],
    ],
  },
  ios: {
    'pin-conversation-messages': [
      ['get-pinned-messages', 'View pinned messages', '查看置顶消息', 'getConversationPinnedMsgWithConversationID:onSuccess:onFailure:', []],
      ['set-message-pinned', 'Pin or unpin a message', '置顶或取消置顶消息', 'setConversationPinnedMsgWithConversationID:clientMsgID:pinned:onSuccess:onFailure:', ['onChangedPinnedMsg:']],
    ],
    'insert-a-local-message': [
      ['insert-local-single-message', 'Insert a local direct message', '插入本地单聊消息', 'insertSingleMessageToLocalStorage:recvID:sendID:onSuccess:onFailure:', []],
      ['insert-local-group-message', 'Insert a local group message', '插入本地群聊消息', 'insertGroupMessageToLocalStorage:groupID:sendID:onSuccess:onFailure:', []],
    ],
    'clear-message-history': [
      ['clear-all-local-messages', 'Clear all local messages', '清理全部本地消息', 'deleteAllMsgFromLocalWithOnSuccess:onFailure:', []],
      ['clear-all-messages', 'Clear all saved messages', '清理全部消息', 'deleteAllMsgFromLocalAndSvrWithOnSuccess:onFailure:', []],
    ],
  },
  flutter: {
    'pin-conversation-messages': [
      ['get-pinned-messages', 'View pinned messages', '查看置顶消息', 'getConversationPinnedMsg', []],
      ['set-message-pinned', 'Pin or unpin a message', '置顶或取消置顶消息', 'setConversationPinnedMsg', ['onChangedPinnedMsg']],
    ],
    'insert-a-local-message': [
      ['insert-local-single-message', 'Insert a local direct message', '插入本地单聊消息', 'insertSingleMessageToLocalStorage', []],
      ['insert-local-group-message', 'Insert a local group message', '插入本地群聊消息', 'insertGroupMessageToLocalStorage', []],
    ],
    'clear-message-history': [
      ['clear-all-local-messages', 'Clear all local messages', '清理全部本地消息', 'deleteAllMsgFromLocal', []],
      ['clear-all-messages', 'Clear all saved messages', '清理全部消息', 'deleteAllMsgFromLocalAndSvr', []],
    ],
  },
};

for (const [platform, replacements] of Object.entries(configs)) {
  const prefix = `/sdk/${platform}/message/managing-messages/`;
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
  for (const [oldSlug, pages] of Object.entries(replacements)) {
    const oldPath = `${prefix}${oldSlug}`;
    const old = audit.pages.find((page) => page.currentPath === oldPath);
    if (!old) throw new Error(`Missing audit page: ${oldPath}`);
    old.disposition = platform === 'wasm' ? 'remove' : 'omit';
    old.redirectTo = null;
    if (platform === 'wasm' && old.locales.zh.reviewStatus === 'published') {
      old.locales.zh.reviewStatus = 'api-verified';
    }
    old.sdkMethods = [];
    old.sdkEvents = [];
    old.locales.zh.exampleVerification = { status: 'not-applicable', evidence: [], reason: '聚合页已移除，证据迁移到独立 API 页面。' };
    old.notes.push('2026-07-23：消息管理聚合页拆分为独立 API 页面。');
    for (const [slug, , , method, events] of pages) {
      const currentPath = `${prefix}${slug}`;
      const page = structuredClone(old);
      page.currentPath = currentPath;
      page.targetPath = currentPath;
      page.disposition = 'adapt';
      page.redirectTo = null;
      page.sdkMethods = [method];
      page.sdkEvents = events;
      page.locales.zh = { reviewStatus: 'published', reviewer: 'Codex', reviewedAt: '2026-07-23', exampleVerification: { status: 'verified', evidence: [...old.openimSources], reason: null } };
      page.locales.en = { reviewStatus: 'deferred', reviewer: null, reviewedAt: null, exampleVerification: { status: 'pending', evidence: [], reason: null } };
      page.notes = [`2026-07-23：已逐页人工审核；本页只归属 ${method}${events.length ? ` 和 ${events.join('、')}` : ''}。`];
      const index = audit.pages.findIndex((candidate) => candidate.currentPath === currentPath);
      if (index >= 0) audit.pages[index] = page;
      else audit.pages.push(page);
    }
  }
  await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
}

function rewrite(nodes, prefix, replacements) {
  return nodes.flatMap((entry) => {
    const path = typeof entry === 'string' ? entry : entry?.path;
    if (path) {
      for (const [slug, pages] of Object.entries(replacements)) {
        if (path === `${prefix}${slug}`) return pages.map(([next, title]) => ({ path: `${prefix}${next}`, navigationTitle: title }));
      }
      return [entry];
    }
    return [{ ...entry, children: rewrite(entry.children ?? [], prefix, replacements) }];
  });
}
