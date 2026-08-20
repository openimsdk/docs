import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import { getClientSdkSidebarPaths } from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();

const sourceContracts = {
  android: {
    sdkKey: 'androidSdk',
    sdkRepository: 'https://github.com/openimsdk/open-im-sdk-android-enterprise',
    sdkTag: 'v3.8.4.0',
    sdkCommit: 'f82b142c7d3b4b66ce20586adabc69de9cd61673',
  },
  ios: {
    sdkKey: 'iosSdk',
    sdkRepository: 'https://github.com/openimsdk/open-im-sdk-ios',
    sdkTag: '3.8.3-hotfix.12',
    sdkCommit: '17fb969fd3a360f00fe65f476435b81857e274f8',
  },
  flutter: {
    sdkKey: 'flutterSdk',
    sdkRepository: 'https://github.com/openimsdk/open-im-sdk-flutter',
    sdkTag: '3.8.3+hotfix.12',
    sdkCommit: '95889be7a26dce6fe896ef22096c9036cc25fc9b',
  },
};

const openimDocs = {
  repository: 'https://github.com/openimsdk/docs',
  commit: 'efd0f251b288167e1ca617504b10dd73986429f0',
};

const omittedSuffixesByPlatform = {
  android: new Set(),
  flutter: new Set(),
  ios: new Set(),
};

export function mirrorClientSdkSidebar(wasmSidebar, platformId) {
  const omittedSuffixes = omittedSuffixesByPlatform[platformId];
  if (!omittedSuffixes) throw new Error(`Unsupported native SDK platform: ${platformId}`);
  const replacePath = (path) => path.replace('/sdk/wasm/', `/sdk/${platformId}/`);
  const mirrorEntry = (entry) => {
    if (typeof entry === 'string') {
      return omittedSuffixes.has(entry.replace('/sdk/wasm/', '')) ? undefined : replacePath(entry);
    }
    if (entry.path) {
      return omittedSuffixes.has(entry.path.replace('/sdk/wasm/', ''))
        ? undefined
        : { ...entry, path: replacePath(entry.path) };
    }
    const children = entry.children.map(mirrorEntry).filter(Boolean);
    return children.length > 0 ? { ...entry, children } : undefined;
  };
  return { ...wasmSidebar, nodes: wasmSidebar.nodes.map(mirrorEntry).filter(Boolean) };
}

export function getOmittedClientSdkPaths(wasmSidebar, platformId) {
  const omittedSuffixes = omittedSuffixesByPlatform[platformId];
  if (!omittedSuffixes) throw new Error(`Unsupported native SDK platform: ${platformId}`);
  return getClientSdkSidebarPaths(wasmSidebar)
    .filter((path) => omittedSuffixes.has(path.replace('/sdk/wasm/', '')))
    .map((path) => path.replace('/sdk/wasm/', `/sdk/${platformId}/`));
}

export function buildClientSdkAuditSeed({
  platformId,
  sidebar,
  omittedPaths = [],
  existingPages = [],
}) {
  const contract = sourceContracts[platformId];
  if (!contract) throw new Error(`Unsupported native SDK platform: ${platformId}`);
  const existingByPath = new Map(existingPages.map((page) => [page.currentPath, page]));
  const activePaths = getClientSdkSidebarPaths(sidebar);
  const currentPaths = new Set([...activePaths, ...omittedPaths]);
  const sdkSource = `${contract.sdkRepository}/tree/${contract.sdkCommit}`;
  const docsSource = `${openimDocs.repository}/tree/${openimDocs.commit}/docs/sdks`;

  return {
    schemaVersion: 1,
    sources: {
      openimDocs,
      [contract.sdkKey]: {
        repository: contract.sdkRepository,
        tag: contract.sdkTag,
        commit: contract.sdkCommit,
      },
    },
    pages: activePaths
      .map((path) => {
        const existing = existingByPath.get(path);
        if (existing) return existing;
        return {
          currentPath: path,
          targetPath: path,
          sourceKind: 'openim-specific',
          disposition: 'adapt',
          openimSources: [docsSource, sdkSource],
          sdkMethods: [],
          sdkEvents: [],
          locales: {
            zh: createLocaleState('structure-only'),
            en: createLocaleState('deferred'),
          },
          redirectTo: null,
          notes: ['2026-07-20：已依最新 WASM 文档路径建立结构记录；正文仍待逐页人工核对。'],
        };
      })
      .concat(
        omittedPaths.map((path) =>
          toOmittedAuditPage({
            page: existingByPath.get(path),
            path,
            platformId,
            docsSource,
            sdkSource,
          }),
        ),
        existingPages
          .filter((page) => !currentPaths.has(page.currentPath))
          .map((page) =>
            toOmittedAuditPage({
              page,
              path: page.currentPath,
              platformId,
              docsSource,
              sdkSource,
              historical: true,
            }),
          ),
      ),
  };
}

function toOmittedAuditPage({ page, path, platformId, docsSource, sdkSource, historical = false }) {
  if (page?.disposition === 'omit') return page;
  const note = historical
    ? '2026-07-20：该路径已离开当前导航；保留原审核证据作为历史记录。'
    : `2026-07-20：固定 ${platformId === 'ios' ? 'Objective-C' : 'Dart'} SDK 宣告没有该页面的公开能力；不纳入导航且不得编造替代 API。`;
  return {
    ...(page ?? {
      currentPath: path,
      targetPath: path,
      sourceKind: 'openim-specific',
      openimSources: [docsSource, sdkSource],
      sdkMethods: [],
      sdkEvents: [],
      locales: {
        zh: createLocaleState('structure-only'),
        en: createLocaleState('deferred'),
      },
      redirectTo: null,
      notes: [],
    }),
    disposition: 'omit',
    notes: [...(page?.notes ?? []), note],
  };
}

export function buildClientSdkNavigationLabels(wasmLabels, platformId) {
  const displayName =
    platformId === 'ios' ? 'iOS' : platformId === 'android' ? 'Android' : 'Flutter';
  const labels = { ...wasmLabels };
  delete labels['OpenIM SDK for WASM'];
  labels[`OpenIM SDK for ${displayName}`] = `OpenIM ${displayName} SDK 概览`;
  Object.assign(
    labels,
    platformId === 'ios'
      ? {
          Open_im_sdkCreateConversationGroup: '创建会话分组',
          Open_im_sdkGetConversationGroups: '查询会话分组',
          Open_im_sdkGetConversationGroupInfoWithConversations: '查询分组内的会话',
          Open_im_sdkGetConversationGroupByConversationID: '查询会话所属的分组',
          Open_im_sdkUpdateConversationGroup: '更新会话分组',
          Open_im_sdkSetConversationGroupOrder: '设置会话分组顺序',
          Open_im_sdkAddConversationsToGroups: '添加会话到分组',
          Open_im_sdkRemoveConversationsFromGroups: '从分组移除会话',
          Open_im_sdkDeleteConversationGroup: '删除会话分组',
        }
      : {
          getConversationGroupByConversationID: '查询会话所属的分组',
          addConversationsToGroups: '添加会话到分组',
          removeConversationsFromGroups: '从分组移除会话',
        },
  );
  return labels;
}

async function main() {
  const requested = process.argv.slice(2).filter((value) => !value.startsWith('-'));
  const platformIds = requested.length > 0 ? requested : ['android', 'ios', 'flutter'];
  const [wasmSidebar, wasmLabels] = await Promise.all([
    readJson('data/structure/wasm-sidebar.json'),
    readJson('data/structure/wasm-navigation-labels.json'),
  ]);

  for (const platformId of platformIds) {
    const platform = getClientSdkPlatform(platformId);
    if (!sourceContracts[platformId])
      throw new Error(`Expected a native SDK platform: ${platformId}`);
    const existingAudit = await readJson(platform.auditPath).catch((error) => {
      if (error?.code === 'ENOENT') return { pages: [] };
      throw error;
    });
    const sidebar = mirrorClientSdkSidebar(wasmSidebar, platformId);
    const audit = buildClientSdkAuditSeed({
      platformId,
      sidebar,
      omittedPaths: getOmittedClientSdkPaths(wasmSidebar, platformId),
      existingPages: existingAudit.pages,
    });
    const labels = buildClientSdkNavigationLabels(wasmLabels, platformId);

    await Promise.all([
      writeJson(platform.sidebarPath, sidebar),
      writeJson(platform.auditPath, audit),
      writeJson(platform.labelsPath, labels),
    ]);
    console.log(`Synchronized ${platformId} SDK structure (${audit.pages.length} audit records).`);
    console.log(
      `  ${getClientSdkSidebarPaths(sidebar).length} active routes, ${audit.pages.filter((page) => page.disposition === 'omit').length} omitted capabilities.`,
    );
  }
}

function createLocaleState(reviewStatus) {
  return {
    reviewStatus,
    reviewer: null,
    reviewedAt: null,
    exampleVerification: { status: 'pending', evidence: [], reason: null },
  };
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(resolve(root, relativePath), 'utf8'));
}

async function writeJson(relativePath, value) {
  await writeFile(resolve(root, relativePath), `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

const isDirectExecution =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) await main();
