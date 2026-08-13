import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import { getClientSdkSidebarPaths } from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();

export function buildLocalizedSdkData({
  platform,
  routes,
  manualPages,
  auditPages,
  navigationLabels,
}) {
  const config = typeof platform === 'string' ? getClientSdkPlatform(platform) : platform;
  const pages = {};
  const pendingPaths = [];
  const reviewStates = {};

  for (const route of routes) {
    const auditPage = auditPages.get(route.path);
    if (!auditPage) throw new Error(`Missing ${config.id} content audit record: ${route.path}`);

    reviewStates[route.path] = auditPage.locales?.zh?.reviewStatus ?? 'structure-only';
    const manualPage = manualPages.get(route.path);
    if (!manualPage) {
      pendingPaths.push(route.path);
      continue;
    }

    const body = normalizeManualBody(manualPage.body);
    pages[route.path] = {
      body,
      description: manualPage.frontmatter.description ?? '',
      headings: extractHeadings(body),
      sourcePath: manualPage.frontmatter.sourcePath ?? '',
      title: manualPage.frontmatter.title ?? '',
    };
  }

  return {
    sourceContext: config.contextKey,
    sourceRoot: config.manualRoot,
    pageCount: routes.length,
    manualPageCount: Object.keys(pages).length,
    pendingPaths,
    reviewStates,
    navigationLabels,
    pages,
  };
}

export function parseMdx(source) {
  const normalizedSource = source.replace(/\r\n?/g, '\n');
  const match = normalizedSource.match(/^---\n([\s\S]*?)\n---\n?/);
  const frontmatter = {};
  if (!match) return { body: normalizedSource.trim(), frontmatter };

  for (const line of match[1].split('\n')) {
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
    body: normalizedSource.slice(match[0].length).trim(),
    frontmatter,
  };
}

export function normalizeManualBody(body) {
  return body.replace(/\r\n?/g, '\n').trim();
}

export function resolveLocalizedRouteTitle(title, navigationLabels) {
  if (navigationLabels[title]) return navigationLabels[title];
  const normalizedTitle = title.toLocaleLowerCase();
  for (const [key, label] of Object.entries(navigationLabels)) {
    if (humanizeLabelKey(key).toLocaleLowerCase() === normalizedTitle) return label;
  }
  return undefined;
}

export async function buildClientSdkLocalizedFile(platformId) {
  const platform = getClientSdkPlatform(platformId);
  const [routesData, sidebar, auditData, navigationLabels] = await Promise.all([
    readJson('src/generated/routes.json'),
    readJson(platform.sidebarPath),
    readJson(platform.auditPath),
    readJson(platform.labelsPath),
  ]);
  const routes = resolvePlatformRoutes({ platform, routesData, sidebar });
  const manualPages = await readManualPages(platform, routes);
  const auditPages = new Map(auditData.pages.map((page) => [page.currentPath, page]));
  const output = buildLocalizedSdkData({
    platform,
    routes,
    manualPages,
    auditPages,
    navigationLabels,
  });

  const outputPath = resolve(root, platform.localizedOutputPath);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  return output;
}

export function resolvePlatformRoutes({ platform, routesData, sidebar }) {
  const paths = getClientSdkSidebarPaths(sidebar);
  const routeByPath = new Map(routesData.map((route) => [route.path, route]));
  const wasmBySuffix = new Map(
    routesData
      .filter((route) => route.contextKey === 'chat/sdk/wasm')
      .map((route) => [route.path.replace('/sdk/wasm/', ''), route]),
  );

  return paths.map((path, index) => {
    const existing = routeByPath.get(path);
    const suffix = path.replace(`${platform.routePrefix}/`, '');
    const baseline = wasmBySuffix.get(suffix);
    if (!baseline && !existing)
      throw new Error(`[${platform.id}] no structural route or platform extension for ${path}`);
    const structuralRoute = baseline ?? existing;
    return {
      ...structuralRoute,
      ...existing,
      contextKey: platform.contextKey,
      navOrder: index,
      path,
      relativePath: `sdk/${platform.id}/${suffix}`,
      title:
        suffix === 'overview'
          ? platform.id === 'wasm'
            ? structuralRoute.title
            : `OpenIM SDK for ${
                platform.id === 'ios'
                  ? 'iOS'
                  : platform.id === 'uniapp'
                    ? 'uni-app / uni-app x'
                    : 'Flutter'
              }`
          : structuralRoute.title,
    };
  });
}

async function main() {
  const requested = process.argv.slice(2).filter((value) => !value.startsWith('-'));
  const platformIds = requested.length > 0 ? requested : ['ios', 'flutter', 'uniapp', 'wasm'];
  for (const platformId of platformIds) {
    const output = await buildClientSdkLocalizedFile(platformId);
    console.log(
      `Packaged Chinese ${platformId} SDK content (${output.manualPageCount} manual pages, ${output.pendingPaths.length} pending paths).`,
    );
  }
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(resolve(root, relativePath), 'utf8'));
}

async function readManualPages(platform, routes) {
  const pages = new Map();
  for (const route of routes) {
    const filePath = resolve(
      root,
      platform.manualRoot,
      `${route.path.slice(platform.routePrefix.length + 1)}.mdx`,
    );
    try {
      pages.set(route.path, parseMdx(await readFile(filePath, 'utf8')));
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
  return pages;
}

function extractHeadings(body) {
  const nextHeadingId = createHeadingIdGenerator();
  return body
    .split('\n')
    .map((line) => line.match(/^(#{2,4})\s+(.+)$/))
    .filter(Boolean)
    .map((match) => {
      const title = match[2].trim();
      return { depth: match[1].length, title, url: `#${nextHeadingId(title)}` };
    });
}

function createHeadingIdGenerator() {
  const counts = new Map();
  return (title) => {
    const base = headingId(title) || 'section';
    const count = (counts.get(base) ?? 0) + 1;
    counts.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };
}

function headingId(value) {
  return value
    .replace(/[>#*_`]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

function humanizeLabelKey(value) {
  return value
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bIos\b/g, 'iOS')
    .replace(/\bSdk\b/g, 'SDK')
    .replace(/\bApi\b/g, 'API');
}

const isDirectExecution =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) await main();
