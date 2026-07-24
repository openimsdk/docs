import { readdir, readFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  normalizeManualBody,
  parseMdx,
  resolveLocalizedRouteTitle,
  resolvePlatformRoutes,
} from './build-client-sdk-zh-content.mjs';
import { clientSdkPlatformIds, getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';

const root = process.cwd();

export function validateLocalizedSdkData({
  routes,
  manualPages,
  auditPages,
  localized,
  sidebar,
  platform = getClientSdkPlatform('wasm'),
}) {
  const platformConfig = typeof platform === 'string' ? getClientSdkPlatform(platform) : platform;
  const errors = [];
  const routePaths = routes.map((route) => route.path);
  const manualPaths = [...manualPages.keys()].sort();
  const generatedPaths = Object.keys(localized?.pages ?? {}).sort();
  const expectedPendingPaths = routePaths.filter((path) => !manualPages.has(path));
  const actualPendingPaths = localized?.pendingPaths ?? [];
  const sidebarEntries = new Map(
    flattenSidebarEntries(sidebar?.nodes ?? []).map((entry) => [entry.path, entry]),
  );

  if (!sameArray(generatedPaths, manualPaths)) {
    errors.push(
      `generated page keys differ from manual MDX paths: expected ${manualPaths.length}, found ${generatedPaths.length}`,
    );
  }
  if (!sameArray(actualPendingPaths, expectedPendingPaths)) {
    errors.push(
      `pending paths differ from active routes without manual MDX: expected ${expectedPendingPaths.length}, found ${actualPendingPaths.length}`,
    );
  }
  if (localized?.pageCount !== routes.length) {
    errors.push(`pageCount: expected ${routes.length}, found ${String(localized?.pageCount)}`);
  }
  if (localized?.manualPageCount !== manualPaths.length) {
    errors.push(
      `manualPageCount: expected ${manualPaths.length}, found ${String(localized?.manualPageCount)}`,
    );
  }
  if (localized?.sourceContext !== platformConfig.contextKey) {
    errors.push(`sourceContext must identify the ${platformConfig.id} SDK context`);
  }
  if (localized?.sourceRoot !== platformConfig.manualRoot) {
    errors.push(`sourceRoot must identify the manual Chinese MDX directory`);
  }

  for (const path of generatedPaths) {
    const page = localized.pages[path];
    const manualPage = manualPages.get(path);
    if (!manualPage) continue;

    if (!auditPages.has(path)) errors.push(`${path}: generated page is missing an audit record`);
    if (!manualPage.frontmatter.title?.trim()) {
      errors.push(`${path}: manual MDX requires a non-empty title`);
    }
    if (!manualPage.frontmatter.description?.trim()) {
      errors.push(`${path}: manual MDX requires a non-empty description`);
    }
    if (manualPage.frontmatter.sourcePath !== path) {
      errors.push(`${path}: manual MDX sourcePath must equal the route path`);
    }
    if (page.body !== normalizeManualBody(manualPage.body)) {
      errors.push(`${path}: generated body differs from normalized manual MDX`);
    }
    if (page.title !== (manualPage.frontmatter.title ?? '')) {
      errors.push(`${path}: generated title differs from manual MDX`);
    }
    if (page.description !== (manualPage.frontmatter.description ?? '')) {
      errors.push(`${path}: generated description differs from manual MDX`);
    }
    if (page.sourcePath !== (manualPage.frontmatter.sourcePath ?? '')) {
      errors.push(`${path}: generated sourcePath differs from manual MDX`);
    }
  }

  for (const path of expectedPendingPaths) {
    if (localized?.pages?.[path]) errors.push(`${path}: pending path has generated body`);
  }

  for (const route of routes) {
    const path = route.path;
    const navigationTitle = sidebarEntries.get(path)?.navigationTitle ?? route.title;
    const structuralTitle = resolveLocalizedRouteTitle(
      navigationTitle,
      localized?.navigationLabels ?? {},
    );
    if (!/[\u3400-\u9fff]/.test(structuralTitle ?? '')) {
      errors.push(`${path}: active route requires a Chinese structural title`);
    }

    const expectedState = auditPages.get(path)?.locales?.zh?.reviewStatus;
    if (!expectedState) {
      errors.push(`${path}: active route is missing a Chinese audit state`);
    } else if (localized?.reviewStates?.[path] !== expectedState) {
      errors.push(`${path}: generated review state differs from audit manifest`);
    }
  }

  return errors.sort();
}

async function main() {
  const requested = process.argv.slice(2).filter((value) => !value.startsWith('-'));
  const platformIds = requested.length > 0 ? requested : clientSdkPlatformIds;
  const routesData = await readJson('src/generated/routes.json');
  let failed = false;

  for (const platformId of platformIds) {
    const platform = getClientSdkPlatform(platformId);
    const [sidebar, auditData, localized, manualPages] = await Promise.all([
      readJson(platform.sidebarPath),
      readJson(platform.auditPath),
      readJson(platform.localizedOutputPath),
      readManualPages(platform),
    ]);
    const routes = resolvePlatformRoutes({ platform, routesData, sidebar });
    const auditPages = new Map(auditData.pages.map((page) => [page.currentPath, page]));
    const errors = validateLocalizedSdkData({
      routes,
      manualPages,
      auditPages,
      localized,
      sidebar,
      platform,
    });

    if (errors.length > 0) {
      failed = true;
      console.error(`Chinese ${platformId} SDK content check failed: ${errors.length}`);
      for (const error of errors.slice(0, 50)) console.error(`  - ${error}`);
      if (errors.length > 50)
        console.error(`  ... ${errors.length - 50} additional errors omitted`);
      continue;
    }
    console.log(
      `Chinese ${platformId} SDK content check passed (${routes.length} active routes, ${manualPages.size} manual pages, ${localized.pendingPaths.length} pending paths).`,
    );
  }

  if (failed) process.exitCode = 1;
}

function flattenSidebarEntries(nodes) {
  return nodes.flatMap((node) => {
    if (typeof node === 'string') return [{ path: node }];
    if (node.path) return [node];
    return flattenSidebarEntries(node.children ?? []);
  });
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(resolve(root, relativePath), 'utf8'));
}

async function readManualPages(platform) {
  const pages = new Map();
  for (const filePath of await listMdxFiles(resolve(root, platform.manualRoot))) {
    const relativePath = relative(resolve(root, 'content/zh'), filePath).replaceAll('\\', '/');
    const routeRelativePath = relativePath.startsWith('docs/chat/')
      ? relativePath.slice('docs/chat/'.length)
      : relativePath;
    const path = `/${routeRelativePath.slice(0, -'.mdx'.length)}`;
    pages.set(path, parseMdx(await readFile(filePath, 'utf8')));
  }
  return pages;
}

async function listMdxFiles(directory) {
  const files = [];
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === 'ENOENT') return files;
    throw error;
  }
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listMdxFiles(entryPath)));
    else if (entry.isFile() && entry.name.endsWith('.mdx')) files.push(entryPath);
  }
  return files.sort();
}

function sameArray(first, second) {
  return first.length === second.length && first.every((value, index) => value === second[index]);
}

const isDirectExecution =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) await main();
