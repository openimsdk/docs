import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import {
  clientSdkStructurePlatformIds,
  getClientSdkPlatform,
} from './lib/client-sdk-platforms.mjs';
import {
  buildClientSdkSidebar,
  decideClientSdkSidebarApplication,
  getClientSdkSidebarPaths,
} from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();
const routesPath = resolve(root, 'src/generated/routes.json');
const navigationPath = resolve(root, 'src/generated/navigation.json');
const structurePath = resolve(root, 'data/structure/chat-pages.json');
const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const navigation = JSON.parse(await readFile(navigationPath, 'utf8'));
const clientSdkSidebars = new Map(
  await Promise.all(
    clientSdkStructurePlatformIds.map(async (platformId) => {
      const platform = getClientSdkPlatform(platformId);
      const sidebar = JSON.parse(await readFile(resolve(root, platform.sidebarPath), 'utf8'));
      return [platformId, sidebar];
    }),
  ),
);
let changed = 0;

for (const route of routes) {
  const source = await readFile(resolve(root, route.contentFile), 'utf8');
  const data = parseFrontmatter(source);
  const next = {
    title: data.title ?? route.title,
    description: data.description ?? route.description,
    product: data.product ?? route.product,
    template: data.template ?? route.template,
    status: data.status ?? route.status,
    version: data.version ?? route.version,
    platform: data.platform ?? route.platform,
  };
  for (const [key, value] of Object.entries(next)) {
    if (route[key] !== value) {
      route[key] = value;
      changed += 1;
    }
  }
}

const sidebarDecisions = new Map(
  clientSdkStructurePlatformIds.map((platformId) => {
    const platform = getClientSdkPlatform(platformId);
    return [
      platformId,
      decideClientSdkSidebarApplication({
        platform,
        config: clientSdkSidebars.get(platformId),
        routes,
      }),
    ];
  }),
);

for (const platformId of clientSdkStructurePlatformIds) {
  if (sidebarDecisions.get(platformId).mode === 'skip') continue;
  changed += applyClientSdkSidebarOrder(
    routes,
    getClientSdkPlatform(platformId),
    clientSdkSidebars.get(platformId),
  );
}

const routeMap = new Map(routes.map((route) => [route.path, route]));
for (const context of navigation.contexts) {
  const platform = clientSdkStructurePlatformIds
    .map((platformId) => getClientSdkPlatform(platformId))
    .find((item) => item.contextKey === context.key);
  if (platform && sidebarDecisions.get(platform.id).mode === 'apply') {
    const next = buildClientSdkSidebar({
      platform,
      config: clientSdkSidebars.get(platform.id),
      routes,
    });
    changed += replaceField(context, 'nodes', next.nodes);
    changed += setField(context, 'pageCount', next.pageCount);
    changed += setField(context, 'sidebarExpansion', next.sidebarExpansion);
  } else {
    changed += refreshNodes(context.nodes, routeMap);
  }
  const overview = routeMap.get(context.overviewPath);
  if (overview && context.title !== overview.contextTitle && overview.contextTitle) {
    context.title = overview.contextTitle;
  }
}

for (const platformId of clientSdkStructurePlatformIds) {
  if (sidebarDecisions.get(platformId).mode === 'skip') {
    const pageCount = getClientSdkSidebarPaths(clientSdkSidebars.get(platformId)).length;
    const platformName =
      platformId === 'ios'
        ? 'iOS'
        : platformId === 'android'
          ? 'Android'
          : platformId === 'uniapp'
            ? 'uni-app / uni-app x'
            : 'Flutter';
    console.log(
      `Skipped ${platformName} client SDK sidebar sync: native route tree has not migrated to all ${pageCount} reviewed paths.`,
    );
  }
}

await Promise.all([
  writeFile(routesPath, `${JSON.stringify(routes, null, 2)}\n`, 'utf8'),
  writeFile(navigationPath, `${JSON.stringify(navigation, null, 2)}\n`, 'utf8'),
  writeFile(
    structurePath,
    `${JSON.stringify(
      routes.map((route) => ({
        sourcePath: route.sourcePath,
        openimPath: route.path,
        title: route.title,
        context: route.contextKey,
        template: route.template,
        contentFile: route.contentFile,
      })),
      null,
      2,
    )}\n`,
    'utf8',
  ),
]);
console.log(`Synchronized content metadata (${changed.toLocaleString()} changed fields).`);

function refreshNodes(nodes, routeMap) {
  let changed = 0;
  for (const node of nodes) {
    if (!Array.isArray(node.children)) {
      node.children = [];
      changed += 1;
    }

    changed += refreshNodes(node.children, routeMap);

    if (node.href) {
      const route = routeMap.get(node.href);
      if (route) {
        changed += setField(node, 'title', route.title);
        changed += setField(node, 'type', 'page');
        changed += setField(node, 'minIndex', route.navOrder);
      }
    } else {
      changed += setField(node, 'type', 'folder');
      const childIndexes = node.children
        .map((child) => child.minIndex)
        .filter((value) => Number.isFinite(value));
      if (childIndexes.length > 0) {
        changed += setField(node, 'minIndex', Math.min(...childIndexes));
      }
    }
  }
  return changed;
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const raw = line.slice(separator + 1).trim();
    if (!raw) continue;
    try {
      result[key] = JSON.parse(raw);
    } catch {
      result[key] = raw.replace(/^['"]|['"]$/g, '');
    }
  }
  return result;
}

function setField(target, key, value) {
  if (target[key] === value) return 0;
  target[key] = value;
  return 1;
}

function applyClientSdkSidebarOrder(routes, platform, config) {
  const order = getClientSdkSidebarPaths(config);
  const platformRoutes = routes.filter((route) => route.contextKey === platform.contextKey);
  const baseOrder = Math.min(
    ...platformRoutes.map((route) => route.navOrder).filter(Number.isFinite),
  );
  let changed = 0;

  order.forEach((path, index) => {
    const route = routes.find((item) => item.path === path);
    if (!route) throw new Error(`Cannot order missing ${platform.id} route: ${path}`);
    changed += setField(route, 'navOrder', baseOrder + index);
  });

  return changed;
}

function replaceField(target, key, value) {
  if (JSON.stringify(target[key]) === JSON.stringify(value)) return 0;
  target[key] = value;
  return 1;
}
