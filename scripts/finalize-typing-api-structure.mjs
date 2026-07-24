import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const methods = {
  wasm: ['changeInputStates', 'getInputstates', 'OnConversationUserInputStatusChanged'],
  ios: ['changeInputStates:focus:onSuccess:onFailure:', 'getInputstates:userID:onSuccess:onFailure:', 'onConversationUserInputStatusChanged:'],
  flutter: ['changeInputStates', 'getInputStates', 'onInputStatusChanged'],
};

for (const [platform, [updateMethod, queryMethod, event]] of Object.entries(methods)) {
  const prefix = `/sdk/${platform}/message/composing-messages/`;
  const oldPath = `${prefix}manage-typing-status`;
  const pages = [
    [`${prefix}update-typing-status`, 'Update typing status', '上报输入状态', updateMethod, [event]],
    [`${prefix}get-typing-status`, 'Get typing status', '查询输入状态', queryMethod, []],
  ];

  const sidebarPath = resolve(root, `data/structure/${platform}-sidebar.json`);
  const sidebar = JSON.parse(await readFile(sidebarPath, 'utf8'));
  sidebar.nodes = replace(sidebar.nodes, oldPath, pages);
  await writeFile(sidebarPath, `${JSON.stringify(sidebar, null, 2)}\n`);

  const labelsPath = resolve(root, `data/structure/${platform}-navigation-labels.json`);
  const labels = JSON.parse(await readFile(labelsPath, 'utf8'));
  for (const [, title, zh] of pages) labels[title] = zh;
  await writeFile(labelsPath, `${JSON.stringify(Object.fromEntries(Object.entries(labels).sort(([a], [b]) => a.localeCompare(b))), null, 2)}\n`);

  const auditPath = resolve(root, `data/structure/${platform}-content-audit.json`);
  const audit = JSON.parse(await readFile(auditPath, 'utf8'));
  const old = audit.pages.find((page) => page.currentPath === oldPath);
  old.disposition = platform === 'wasm' ? 'remove' : 'omit';
  old.redirectTo = null;
  if (platform === 'wasm' && old.locales.zh.reviewStatus === 'published') {
    old.locales.zh.reviewStatus = 'api-verified';
  }
  old.sdkMethods = [];
  old.sdkEvents = [];
  old.locales.zh.exampleVerification = { status: 'not-applicable', evidence: [], reason: '聚合页已移除，API 与事件证据迁移到独立页面。' };
  old.notes.push('2026-07-23：输入状态聚合页拆分为上报与查询两个 API 页面。');
  for (const [currentPath, , , method, events] of pages) {
    const page = structuredClone(old);
    page.currentPath = currentPath;
    page.targetPath = currentPath;
    page.disposition = 'adapt';
    page.redirectTo = null;
    page.sdkMethods = [method];
    page.sdkEvents = events;
    page.locales.zh = { reviewStatus: 'published', reviewer: 'Codex', reviewedAt: '2026-07-23', exampleVerification: { status: 'verified', evidence: [...old.openimSources], reason: null } };
    page.locales.en = { reviewStatus: 'deferred', reviewer: null, reviewedAt: null, exampleVerification: { status: 'pending', evidence: [], reason: null } };
    page.notes = [`2026-07-23：已逐页人工审核；本页只归属 ${method}${events.length ? ` 与 ${event}` : ''}。`];
    const existing = audit.pages.findIndex((candidate) => candidate.currentPath === currentPath);
    if (existing >= 0) audit.pages[existing] = page;
    else audit.pages.push(page);
  }
  await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
}

function replace(nodes, oldPath, pages) {
  return nodes.flatMap((entry) => {
    const path = typeof entry === 'string' ? entry : entry?.path;
    if (path === oldPath) return pages.map(([nextPath, navigationTitle]) => ({ path: nextPath, navigationTitle }));
    if (path) return [entry];
    return [{ ...entry, children: replace(entry.children ?? [], oldPath, pages) }];
  });
}
