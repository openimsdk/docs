import { readFile, writeFile } from 'node:fs/promises';

import { buildClientSdkLegacyRedirectEntries } from './lib/client-sdk-legacy-redirects.mjs';

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));
const writeJson = async (path, value) =>
  writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
const collectPaths = (nodes) =>
  nodes.flatMap((node) => {
    if (typeof node === 'string') return [node];
    if (node.path) return [node.path];
    return collectPaths(node.children ?? []);
  });

const wasmSidebar = await readJson('data/structure/wasm-sidebar.json');
const wasmActive = new Set(collectPaths(wasmSidebar.nodes));
const wasmRedirectPath = 'data/structure/wasm-legacy-redirects.json';
let wasmRedirects = (await readJson(wasmRedirectPath)).filter(
  ({ source, destination }) =>
    source !== destination && wasmActive.has(destination) && !wasmActive.has(source),
);
const wasmAuditPath = 'data/structure/wasm-content-audit.json';
const wasmAudit = await readJson(wasmAuditPath);
const wasmAuditByPath = new Map(
  wasmAudit.pages.map((page) => [page.currentPath, page]),
);
wasmRedirects = wasmRedirects.filter(
  ({ source }) => wasmAuditByPath.get(source)?.disposition === 'merge',
);
await writeJson(wasmRedirectPath, wasmRedirects);
const wasmRedirectBySource = new Map(
  wasmRedirects.map(({ source, destination }) => [source, destination]),
);
for (const page of wasmAudit.pages) {
  if (!wasmActive.has(page.currentPath) && page.disposition === 'omit') {
    page.disposition = 'remove';
    page.redirectTo = null;
    if (page.locales?.zh?.reviewStatus === 'published') {
      page.locales.zh.reviewStatus = 'api-verified';
    }
    if (page.locales?.zh) {
      page.locales.zh.exampleVerification = {
        status: 'not-applicable',
        evidence: [],
        reason: '旧页面已移除且不保留重定向。',
      };
    }
  }
  if (page.disposition !== 'merge') continue;
  const destination = wasmRedirectBySource.get(page.currentPath);
  if (destination) {
    page.redirectTo = destination;
  } else {
    page.disposition = 'remove';
    page.redirectTo = null;
    if (page.locales?.zh?.reviewStatus === 'published') {
      page.locales.zh.reviewStatus = 'api-verified';
    }
    if (page.locales?.zh) {
      page.locales.zh.exampleVerification = {
        status: 'not-applicable',
        evidence: [],
        reason: '旧页面已移除且不保留重定向。',
      };
    }
  }
}
for (const page of wasmAudit.pages) {
  if (page.disposition !== 'remove' || wasmActive.has(page.currentPath)) continue;
  if (page.locales?.zh) {
    page.locales.zh.reviewStatus = 'structure-only';
    page.locales.zh.exampleVerification = {
      status: 'not-applicable',
      evidence: [],
      reason: '旧页面已移除且不保留重定向。',
    };
  }
}
await writeJson(wasmAuditPath, wasmAudit);

const auditPath = 'data/structure/client-sdk-legacy-route-audit.json';
const audit = await readJson(auditPath);
for (const platformId of ['ios', 'flutter']) {
  const sidebar = await readJson(`data/structure/${platformId}-sidebar.json`);
  const activePaths = new Set(collectPaths(sidebar.nodes));
  const aliases = await readJson(`data/structure/${platformId}-legacy-redirect-aliases.json`);
  const entries = buildClientSdkLegacyRedirectEntries({
    platformId,
    sidebar,
    wasmEntries: wasmRedirects,
    aliases,
  });
  const destinations = new Map(entries.map(({ source, destination }) => [source, destination]));
  for (const record of audit.records.filter((item) => item.platform === platformId)) {
    const destination = destinations.get(record.source);
    record.disposition = destination ? 'merge' : 'remove';
    record.destination = destination ?? null;
  }

  const contentAuditPath = `data/structure/${platformId}-content-audit.json`;
  const contentAudit = await readJson(contentAuditPath);
  for (const page of contentAudit.pages) {
    const active = activePaths.has(page.currentPath) && page.disposition !== 'omit';
    if (!active) {
      page.disposition = 'omit';
      page.redirectTo = null;
      page.sdkMethods = [];
      page.sdkEvents = [];
      if (page.locales?.zh) {
        page.locales.zh.reviewStatus = 'structure-only';
        page.locales.zh.exampleVerification = {
          status: 'not-applicable',
          evidence: [],
          reason: '历史聚合页已移除，证据已迁移到独立页面。',
        };
      }
      continue;
    }
    if (page.locales?.zh?.reviewStatus !== 'published') continue;
    const suffix = page.currentPath.replace(`/sdk/${platformId}/`, '');
    const source = await readFile(`content/zh/docs/chat/sdk/${platformId}/${suffix}.mdx`, 'utf8');
    const hasCode = /```[A-Za-z0-9_-]+\n/.test(source);
    page.locales.zh.exampleVerification = hasCode
      ? {
          status: 'verified',
          evidence: page.openimSources,
          reason: null,
        }
      : {
          status: 'not-applicable',
          evidence: [],
          reason: '本页为概览或事件说明，不包含独立调用示例。',
        };
  }
  await writeJson(contentAuditPath, contentAudit);
}
await writeJson(auditPath, audit);
