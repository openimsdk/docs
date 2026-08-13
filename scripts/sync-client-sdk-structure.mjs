import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import { getClientSdkSidebarPaths } from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();

const sourceContracts = {
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
  uniapp: {
    sdkKey: 'uniappSdk',
    sdkManifest: 'data/structure/uniapp-sdk-doc-manifest.json',
    sdkTag: '0.2.0-rc.3',
    sdkCommit: 'e71e3f68827f9f7af354526fecbaded25dc14de9',
    interfaceSha256: 'acbe16c69ba4ddfa2e7bbdcf35a119c88801e93d960520db50de082c2e4234df',
    responseSchemaSha256: 'a6a73ab3e368812cbe9b6355fed3edbe59b890aa6e8f73c69e3d06fd23a6c6e5',
  },
};

const openimDocs = {
  repository: 'https://github.com/openimsdk/docs',
  commit: 'efd0f251b288167e1ca617504b10dd73986429f0',
};

const omittedSuffixesByPlatform = {
  flutter: new Set(),
  ios: new Set(),
  uniapp: new Set([
    'conversation/managing-conversations/clear-local-conversations',
    'group/group-applications/clear-group-application-badge-count',
    'group/retrieving-group-members/get-group-member-owner-and-admin',
    'message/retrieving-messages/load-newer-messages',
  ]),
};

const renamedSuffixesByPlatform = {
  ios: new Map(),
  flutter: new Map(),
  uniapp: new Map([
    ['message/creating-messages/create-image-message-by-file', 'message/creating-messages/create-image-message-from-full-path'],
    ['message/creating-messages/create-sound-message-by-file', 'message/creating-messages/create-sound-message-from-full-path'],
    ['message/creating-messages/create-video-message-by-file', 'message/creating-messages/create-video-message-from-full-path'],
    ['message/creating-messages/create-file-message-by-file', 'message/creating-messages/create-file-message-from-full-path'],
    ['conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id', 'conversation/managing-conversation-groups/get-conversation-group-by-conversation-id'],
    ['group/group-applications/get-group-application-badge-count', 'group/group-applications/observe-group-application-badge-count'],
  ]),
};

const uniappAdditionalEntries = new Map([
  ['getting-started', [
    { path: '/sdk/uniapp/getting-started/install-initialize-and-inspect-sdk', navigationTitle: 'Install, initialize, and inspect the SDK' },
    { path: '/sdk/uniapp/getting-started/handle-app-lifecycle-and-device-state', navigationTitle: 'Handle App lifecycle and device state' },
    { path: '/sdk/uniapp/getting-started/update-token-and-observe-sdk-session', navigationTitle: 'Update tokens and observe SDK sessions' },
  ]],
  ['group', [
    { path: '/sdk/uniapp/group/check-full-sync-state', navigationTitle: 'Check group full-sync state' },
  ]],
  ['message/composing-messages', [
    { path: '/sdk/uniapp/message/composing-messages/translate-text-and-messages', navigationTitle: 'Translate text and messages' },
  ]],
]);

export function mirrorClientSdkSidebar(wasmSidebar, platformId) {
  const omittedSuffixes = omittedSuffixesByPlatform[platformId];
  if (!omittedSuffixes) throw new Error(`Unsupported native SDK platform: ${platformId}`);
  const renamedSuffixes = renamedSuffixesByPlatform[platformId] ?? new Map();
  const replacePath = (path) => {
    const suffix = path.replace('/sdk/wasm/', '');
    return `/sdk/${platformId}/${renamedSuffixes.get(suffix) ?? suffix}`;
  };
  const mirrorEntry = (entry) => {
    if (typeof entry === 'string') {
      return omittedSuffixes.has(entry.replace('/sdk/wasm/', '')) ? undefined : replacePath(entry);
    }
    if (entry.path) {
      return omittedSuffixes.has(entry.path.replace('/sdk/wasm/', ''))
        ? undefined
        : { ...entry, path: replacePath(entry.path) };
    }
    let children = entry.children.map(mirrorEntry).filter(Boolean);
    if (platformId === 'uniapp') {
      children = [...children, ...(uniappAdditionalEntries.get(entry.id) ?? [])];
      if (entry.id === 'group/group-applications') {
        children = children.map((child) =>
          child?.path?.endsWith('/observe-group-application-badge-count')
            ? { ...child, navigationTitle: 'Observe group application badge count' }
            : child,
        );
      }
    }
    return children.length > 0 ? { ...entry, children } : undefined;
  };
  let nodes = wasmSidebar.nodes.map(mirrorEntry).filter(Boolean);
  if (platformId === 'uniapp') {
    nodes = nodes.flatMap((node) => {
      if (node?.path === '/sdk/uniapp/events/overview-events') {
        return [{
          id: 'events',
          title: 'Events',
          children: [
            { ...node, navigationTitle: 'Event overview' },
            { path: '/sdk/uniapp/events/handle-data-migration-events', navigationTitle: 'Handle data migration events' },
          ],
        }];
      }
      return [node];
    });
  }
  return { ...wasmSidebar, platform: platformId, nodes };
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
  const sdkSource = contract.sdkManifest
    ? `${contract.sdkManifest}#${contract.sdkCommit}`
    : `${contract.sdkRepository}/tree/${contract.sdkCommit}`;
  const docsSource = `${openimDocs.repository}/tree/${openimDocs.commit}/docs/sdks`;

  return {
    schemaVersion: 1,
    sources: {
      openimDocs,
      [contract.sdkKey]: contract.sdkManifest
        ? {
            manifest: contract.sdkManifest,
            tag: contract.sdkTag,
            commit: contract.sdkCommit,
            interfaceSha256: contract.interfaceSha256,
            responseSchemaSha256: contract.responseSchemaSha256,
          }
        : {
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
  const displayName = platformId === 'ios' ? 'iOS' : platformId === 'uniapp' ? 'uni-app / uni-app x' : 'Flutter';
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
          ...(platformId === 'uniapp'
            ? {
                'Install, initialize, and inspect the SDK': '安装、初始化并检查 SDK',
                'Handle App lifecycle and device state': '处理 App 生命周期与设备状态',
                'Update tokens and observe SDK sessions': '更新 Token 并观察 SDK 会话',
                'Check group full-sync state': '检查群组全量同步状态',
                'Translate text and messages': '翻译文本与消息',
                'Handle data migration events': '处理数据迁移事件',
              }
            : {}),
        },
  );
  return labels;
}

async function main() {
  const requested = process.argv.slice(2).filter((value) => !value.startsWith('-'));
  const platformIds = requested.length > 0 ? requested : ['ios', 'flutter'];
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
