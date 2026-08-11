import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const defaultSources = {
  openimDocs: {
    repository: 'https://github.com/openimsdk/docs',
    commit: 'a177b296f1abe53ba2cf7d897acf86467a45e7c6',
  },
  sdkCore: {
    repository: 'https://github.com/openimsdk/openim-sdk-core',
    commit: '9267a252faab02bbc8ffab6223e6ae2341a0f7c9',
  },
  wasmSdk: {
    package: '@openim/wasm-client-sdk',
    version: '3.8.3-patch.15.1',
    integrity:
      'sha512-X34t69RxIALLppmdg4/HJaWQCFdA9JhbedOMW7zoAV81g87+8ZP3RgWsqbyBxBGfQIkf/rjfhpeApbeWf4Oa/g==',
    repository: 'https://github.com/openimsdk/openim-sdk-js-wasm',
    commit: '615d327c78c5ecf9a01a053f6889d01cb9094639',
  },
};

export function createStructureOnlyRecord(route) {
  return {
    currentPath: route.path,
    targetPath: route.path,
    sourceKind: 'sendbird',
    disposition: 'undecided',
    sendbirdSource: sendbirdUrlFor(route.path),
    openimSources: [],
    sdkMethods: [],
    sdkEvents: [],
    locales: {
      zh: createLocaleState('structure-only'),
      en: createLocaleState('deferred'),
    },
    redirectTo: null,
    notes: [],
  };
}

export function mergeActiveRoutes(routes, existingPages) {
  const existingByPath = new Map(existingPages.map((page) => [page.currentPath, page]));
  const activePaths = new Set(routes.map((route) => route.path));
  const activePages = routes.map((route) =>
    normalizeRecord(existingByPath.get(route.path) ?? createStructureOnlyRecord(route)),
  );
  const retainedPages = existingPages
    .filter((page) => !activePaths.has(page.currentPath))
    .map(normalizeRecord)
    .sort((a, b) => a.currentPath.localeCompare(b.currentPath));
  return [...activePages, ...retainedPages];
}

function normalizeRecord(page) {
  return {
    ...page,
    sdkEvents: page.sdkEvents ?? [],
  };
}

export function sendbirdUrlFor(path) {
  // Sendbird's public docs still use the /sdk/v4/javascript URL segment.
  const sourcePath = path.replace('/sdk/wasm/', '/docs/chat/sdk/v4/javascript/');
  return `https://sendbird.com${sourcePath}`;
}

export async function syncWasmContentAudit({
  routesPath = resolve(root, 'src/generated/routes.json'),
  auditPath = resolve(root, 'data/structure/wasm-content-audit.json'),
} = {}) {
  const routes = JSON.parse(await readFile(routesPath, 'utf8')).filter(
    (route) => route.contextKey === 'chat/sdk/wasm',
  );
  const existing = await readAuditIfPresent(auditPath);
  const manifest = {
    schemaVersion: 1,
    sources: existing?.sources ?? defaultSources,
    pages: mergeActiveRoutes(routes, existing?.pages ?? []),
  };

  await writeFile(auditPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  return {
    activeRoutes: routes.length,
    totalRecords: manifest.pages.length,
    retainedRecords: manifest.pages.length - routes.length,
  };
}

function createLocaleState(reviewStatus) {
  return {
    reviewStatus,
    reviewer: null,
    reviewedAt: null,
    exampleVerification: {
      status: 'pending',
      evidence: [],
      reason: null,
    },
  };
}

async function readAuditIfPresent(path) {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch (error) {
    if (error?.code === 'ENOENT') return undefined;
    throw error;
  }
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : undefined;
if (invokedPath === import.meta.url) {
  syncWasmContentAudit()
    .then((result) => {
      console.log(
        `Synchronized WASM audit structure (${result.activeRoutes} active, ${result.retainedRecords} retained records).`,
      );
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    });
}
