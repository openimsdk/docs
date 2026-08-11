import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { validateAuditManifest } from './lib/wasm-content-audit.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const wasmContext = 'chat/sdk/wasm';

export function buildAuditReport({ routes, manualPaths, audit, api, ownership }) {
  const routePaths = routes.map((route) => route.path);
  const activeRoutes = new Set(routePaths);
  const sdkMethodNames = new Set([
    ...(api.methods ?? []).map((method) => method.name),
    ...(ownership?.methods ?? []).map((method) => method.name),
  ]);
  const sdkEventNames = new Set([
    ...(api.events ?? []).map((event) => event.name),
    ...(ownership?.events ?? []).map((event) => event.name),
  ]);
  const errors = validateAuditManifest(audit, {
    activeRoutes,
    manualPaths,
    sdkMethodNames,
    sdkEventNames,
  });

  addDuplicateErrors(routePaths, 'active route', errors);
  addDuplicateErrors(
    (api.methods ?? []).map((method) => method.name),
    'SDK method',
    errors,
  );
  addDuplicateErrors(
    (api.events ?? []).map((event) => event.name),
    'SDK event',
    errors,
  );
  validateSdkSnapshotSource(audit.sources?.wasmSdk, api, errors);

  for (const path of manualPaths) {
    if (!activeRoutes.has(path)) errors.push(`${path}: manual zh MDX is not an active route`);
  }

  for (const page of audit.pages ?? []) {
    for (const method of page.sdkMethods ?? []) {
      if (!sdkMethodNames.has(method)) errors.push(`${page.currentPath}: unknown SDK method ${method}`);
    }
    for (const event of page.sdkEvents ?? []) {
      if (!sdkEventNames.has(event)) errors.push(`${page.currentPath}: unknown SDK event ${event}`);
    }
  }

  const pendingActivePages = routePaths.filter((path) => !manualPaths.has(path)).length;
  const summary = {
    activeRoutes: activeRoutes.size,
    auditRecords: audit.pages?.length ?? 0,
    manualPages: manualPaths.size,
    pendingActivePages,
    proposedPages: (audit.pages ?? []).filter((page) => page.disposition === 'proposed').length,
    removedPages: (audit.pages ?? []).filter((page) => page.disposition === 'remove').length,
    localeStatusCounts: countLocaleStatuses(audit.pages ?? []),
  };

  return { errors: [...new Set(errors)].sort(), summary };
}

export async function checkWasmContentAudit({
  routesPath = resolve(root, 'src/generated/routes.json'),
  auditPath = resolve(root, 'data/structure/wasm-content-audit.json'),
  apiPath = resolve(root, 'data/structure/wasm-sdk-api.json'),
  ownershipPath = resolve(root, 'data/structure/wasm-api-ownership.json'),
  manualRoot = resolve(root, 'content/zh/docs/chat/sdk/wasm'),
} = {}) {
  const [allRoutes, audit, api, ownership, manualFiles] = await Promise.all([
    readJson(routesPath),
    readJson(auditPath),
    readJson(apiPath),
    readJson(ownershipPath),
    walk(manualRoot),
  ]);
  const routes = allRoutes.filter((route) => route.contextKey === wasmContext);
  const contentRoot = resolve(root, 'content/zh/docs');
  const manualPaths = new Set(
    manualFiles
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const relativePath = file.slice(contentRoot.length + 1, -4).replaceAll('\\', '/');
        return relativePath.startsWith('chat/')
          ? `/${relativePath.slice('chat/'.length)}`
          : `/docs/${relativePath}`;
      }),
  );

  return buildAuditReport({ routes, manualPaths, audit, api, ownership });
}

export function formatAuditSummary(summary) {
  return [
    `WASM content audit OK: ${summary.activeRoutes} active routes, ${summary.manualPages} manual zh pages, ${summary.pendingActivePages} pending active pages, ${summary.proposedPages} proposed pages, ${summary.removedPages} removed pages, ${summary.auditRecords} total records.`,
    `Locale statuses: ${formatLocaleCounts(summary.localeStatusCounts)}`,
  ].join('\n');
}

function countLocaleStatuses(pages) {
  const counts = { en: {}, zh: {} };
  for (const locale of Object.keys(counts)) {
    for (const page of pages) {
      const status = page.locales?.[locale]?.reviewStatus;
      if (!status) continue;
      counts[locale][status] = (counts[locale][status] ?? 0) + 1;
    }
    counts[locale] = Object.fromEntries(
      Object.entries(counts[locale]).sort(([left], [right]) => left.localeCompare(right)),
    );
  }
  return counts;
}

function addDuplicateErrors(values, label, errors) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) errors.push(`${String(value)}: duplicate ${label}`);
    seen.add(value);
  }
}

function validateSdkSnapshotSource(source, api, errors) {
  for (const field of ['package', 'version', 'integrity']) {
    if (api?.[field] !== source?.[field]) {
      errors.push(`SDK snapshot ${field} does not match audit source`);
    }
  }
}

function formatLocaleCounts(counts) {
  return Object.entries(counts)
    .map(
      ([locale, statuses]) =>
        `${locale}[${Object.entries(statuses)
          .map(([status, count]) => `${status}=${count}`)
          .join(', ')}]`,
    )
    .join('; ');
}

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : undefined;
if (invokedPath === import.meta.url) {
  checkWasmContentAudit()
    .then(({ errors, summary }) => {
      if (errors.length > 0) {
        const limit = 50;
        console.error(`WASM content audit failed with ${errors.length} error(s):`);
        for (const error of errors.slice(0, limit)) console.error(`- ${error}`);
        if (errors.length > limit) console.error(`- ... ${errors.length - limit} more error(s)`);
        process.exitCode = 1;
        return;
      }
      console.log(formatAuditSummary(summary));
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    });
}
