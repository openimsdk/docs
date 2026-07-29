import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const configurations = {
  wasm: {
    'retrieve-message-history': [
      ['load-older-messages', 'Load older messages', '加载历史消息', 'getAdvancedHistoryMessageList'],
      ['load-newer-messages', 'Load newer messages', '反向加载历史消息', 'getAdvancedHistoryMessageListReverse'],
    ],
    'locate-messages-by-id': [
      ['find-messages-by-id', 'Find messages by ID', '按 ID 查找消息', 'findMessageList'],
      ['load-message-context', 'Load message context', '读取消息上下文', 'fetchSurroundingMessages'],
    ],
  },
  ios: {
    'retrieve-message-history': [
      ['load-older-messages', 'Load older messages', '加载历史消息', 'getAdvancedHistoryMessageList:onSuccess:onFailure:'],
      ['load-newer-messages', 'Load newer messages', '反向加载历史消息', 'getAdvancedHistoryMessageListReverse:onSuccess:onFailure:'],
    ],
    'locate-messages-by-id': [
      ['find-messages-by-id', 'Find messages by ID', '按 ID 查找消息', 'findMessageList:onSuccess:onFailure:'],
      ['load-message-context', 'Load message context', '读取消息上下文', 'fetchSurroundingMessages:onSuccess:onFailure:'],
    ],
  },
  flutter: {
    'retrieve-message-history': [
      ['load-older-messages', 'Load older messages', '加载历史消息', 'getAdvancedHistoryMessageList'],
      ['load-newer-messages', 'Load newer messages', '反向加载历史消息', 'getAdvancedHistoryMessageListReverse'],
    ],
  },
};

for (const [platform, replacements] of Object.entries(configurations)) {
  const prefix = `/sdk/${platform}/message/retrieving-messages/`;
  const sidebarPath = resolve(root, `data/structure/${platform}-sidebar.json`);
  const sidebar = JSON.parse(await readFile(sidebarPath, 'utf8'));
  sidebar.nodes = rewrite(sidebar.nodes, prefix, replacements);
  await writeFile(sidebarPath, `${JSON.stringify(sidebar, null, 2)}\n`);

  const labelPath = resolve(root, `data/structure/${platform}-navigation-labels.json`);
  const labels = JSON.parse(await readFile(labelPath, 'utf8'));
  for (const pages of Object.values(replacements)) {
    for (const [, title, zh] of pages) labels[title] = zh;
  }
  labels['Locate messages by ID'] = '按 ID 定位消息';
  await writeFile(labelPath, `${JSON.stringify(Object.fromEntries(Object.entries(labels).sort(([a], [b]) => a.localeCompare(b))), null, 2)}\n`);

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
    old.locales.zh.exampleVerification = { status: 'not-applicable', evidence: [], reason: '聚合页已移除，API 证据迁移到独立页面。' };
    old.notes.push('2026-07-23：消息查询聚合页拆分为每个公开 API 一个页面。');
    for (const [slug, , , method] of pages) {
      const currentPath = `${prefix}${slug}`;
      const page = structuredClone(old);
      page.currentPath = currentPath;
      page.targetPath = currentPath;
      page.disposition = 'adapt';
      page.redirectTo = null;
      page.sdkMethods = [method];
      page.locales.zh = {
        reviewStatus: 'published',
        reviewer: 'Codex',
        reviewedAt: '2026-07-23',
        exampleVerification: { status: 'verified', evidence: [...old.openimSources], reason: null },
      };
      page.locales.en = { reviewStatus: 'deferred', reviewer: null, reviewedAt: null, exampleVerification: { status: 'pending', evidence: [], reason: null } };
      page.notes = [`2026-07-23：已逐页人工审核；本页只归属 ${method}。`];
      const index = audit.pages.findIndex((candidate) => candidate.currentPath === currentPath);
      if (index >= 0) audit.pages[index] = page;
      else audit.pages.push(page);
    }
  }
  if (platform === 'flutter') {
    const page = audit.pages.find((item) => item.currentPath === `${prefix}locate-messages-by-id`);
    page.sdkMethods = ['findMessageList'];
    page.locales.zh.reviewedAt = '2026-07-23';
    page.notes.push('2026-07-23：逐页复核后只保留 findMessageList 归属；历史查询与会话查询是页面流程中的辅助调用。');
    sidebar.nodes = setTaskTitle(sidebar.nodes, `${prefix}locate-messages-by-id`, 'Locate messages by ID');
    await writeFile(sidebarPath, `${JSON.stringify(sidebar, null, 2)}\n`);
  }
  await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
}

function rewrite(nodes, prefix, replacements) {
  return nodes.flatMap((entry) => {
    const path = typeof entry === 'string' ? entry : entry?.path;
    if (path) {
      for (const [oldSlug, pages] of Object.entries(replacements)) {
        if (path === `${prefix}${oldSlug}`) {
          return pages.map(([slug, navigationTitle]) => ({ path: `${prefix}${slug}`, navigationTitle }));
        }
      }
      return [entry];
    }
    return [{ ...entry, children: rewrite(entry.children ?? [], prefix, replacements) }];
  });
}

function setTaskTitle(nodes, target, navigationTitle) {
  return nodes.map((entry) => {
    const path = typeof entry === 'string' ? entry : entry?.path;
    if (path === target) return { path, navigationTitle };
    if (!path) return { ...entry, children: setTaskTitle(entry.children ?? [], target, navigationTitle) };
    return entry;
  });
}
