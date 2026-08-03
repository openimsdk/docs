import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { clientSdkPlatformIds, getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import {
  getClientSdkSidebarApplicationScope,
} from './lib/client-sdk-sidebar.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const clientSdkContexts = new Set(
  clientSdkPlatformIds.map((platformId) => getClientSdkPlatform(platformId).contextKey),
);

export function buildSearchIndexes({
  routes,
  sourcePages,
  manualZhPages,
  auditPages,
  clientSdkActivePaths,
  managedClientSdkContexts = clientSdkContexts,
}) {
  const indexes = { en: [], zh: [] };

  for (const route of routes) {
    const sourcePage = sourcePages.get(route.path);
    if (!sourcePage) throw new Error(`${route.path}: missing source page`);

    if (
      !clientSdkContexts.has(route.contextKey) ||
      !managedClientSdkContexts.has(route.contextKey)
    ) {
      if (!route.locales || route.locales.includes('en')) {
        indexes.en.push(createSearchRecord(route, sourcePage));
      }
      if (!route.locales || route.locales.includes('zh')) {
        indexes.zh.push(createSearchRecord(route, sourcePage));
      }
      continue;
    }

    if (clientSdkActivePaths && !clientSdkActivePaths.has(route.path)) continue;

    const auditPage = auditPages.get(route.path);
    if (!auditPage) throw new Error(`${route.path}: missing audit record`);
    if (auditPage?.locales?.en?.reviewStatus === 'published') {
      indexes.en.push(createSearchRecord(route, sourcePage));
    }
    if (auditPage?.locales?.zh?.reviewStatus === 'published') {
      const manualPage = manualZhPages.get(route.path);
      if (!manualPage) {
        throw new Error(`${route.path}: published zh search page requires manual MDX`);
      }
      indexes.zh.push(createSearchRecord(route, manualPage));
    }
  }

  return indexes;
}

export async function buildSearchIndexFiles(options = {}) {
  const routesPath = options.routesPath ?? resolve(root, 'src/generated/routes.json');
  const enOutputPath = options.enOutputPath ?? resolve(root, 'src/generated/search-index.json');
  const zhOutputPath = options.zhOutputPath ?? resolve(root, 'src/generated/search-index-zh.json');
  const platformConfigs = clientSdkPlatformIds.map(getClientSdkPlatform);
  const auditPaths = options.auditPath
    ? [options.auditPath]
    : platformConfigs.map((platform) => resolve(root, platform.auditPath));
  const sidebarPaths = options.auditPath
    ? []
    : platformConfigs.map((platform) => resolve(root, platform.sidebarPath));
  const [routes, audits, sidebars] = await Promise.all([
    readJson(routesPath),
    Promise.all(auditPaths.map(readJson)),
    Promise.all(sidebarPaths.map(readJson)),
  ]);
  const sourcePages = new Map(
    await Promise.all(
      routes.map(async (route) => {
        const source = await readFile(resolve(root, route.contentFile), 'utf8');
        return [route.path, parseMdx(source)];
      }),
    ),
  );
  const clientSdkRoutes = routes.filter((route) => clientSdkContexts.has(route.contextKey));
  const manualEntries = await Promise.all(
    clientSdkRoutes.map(async (route) => {
      const path = resolve(root, route.contentFile.replace(/^content\/docs\//, 'content/zh/docs/'));
      try {
        return [route.path, parseMdx(await readFile(path, 'utf8'))];
      } catch (error) {
        if (error?.code === 'ENOENT') return undefined;
        throw error;
      }
    }),
  );
  const manualZhPages = new Map(manualEntries.filter(Boolean));
  const auditPages = new Map(
    audits.flatMap((audit) => audit.pages).map((page) => [page.currentPath, page]),
  );
  const searchScope =
    sidebars.length > 0
      ? getClientSdkSidebarApplicationScope({
          routes,
          sidebars: sidebars.map((config, index) => ({
            platform: platformConfigs[index],
            config,
          })),
        })
      : { activePaths: undefined, managedContexts: clientSdkContexts };
  const indexes = buildSearchIndexes({
    routes,
    sourcePages,
    manualZhPages,
    auditPages,
    clientSdkActivePaths: searchScope.activePaths,
    managedClientSdkContexts: searchScope.managedContexts,
  });

  await Promise.all([
    writeFile(enOutputPath, `${JSON.stringify(indexes.en, null, 2)}\n`, 'utf8'),
    writeFile(zhOutputPath, `${JSON.stringify(indexes.zh, null, 2)}\n`, 'utf8'),
  ]);
  return { en: indexes.en.length, zh: indexes.zh.length };
}

function createSearchRecord(route, page) {
  return {
    path: route.path,
    title: page.title ?? route.title,
    description: page.description ?? route.description,
    context: route.contextTitle,
    keywords: [route.product, route.platform, route.version, ...route.relativePath.split('/')]
      .filter(Boolean)
      .join(' '),
    content: normalizeBody(page.body).slice(0, 12_000),
  };
}

function parseMdx(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const frontmatter = {};
  if (!match) return { body: source.trim() };

  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const raw = line.slice(separator + 1).trim();
    if (!key || !raw) continue;
    try {
      frontmatter[key] = JSON.parse(raw);
    } catch {
      frontmatter[key] = raw.replace(/^['"]|['"]$/g, '');
    }
  }

  return {
    body: source.slice(match[0].length).trim(),
    description: frontmatter.description,
    title: frontmatter.title,
  };
}

function normalizeBody(value) {
  return value
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```\w*/g, ' '))
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#{}`*_>[\]()!-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : undefined;
if (invokedPath === import.meta.url) {
  buildSearchIndexFiles()
    .then(({ en, zh }) => {
      console.log(
        `Wrote ${en.toLocaleString()} English and ${zh.toLocaleString()} Chinese search records.`,
      );
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    });
}
