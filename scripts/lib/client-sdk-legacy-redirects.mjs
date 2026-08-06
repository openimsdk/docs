import { buildWasmLegacyRedirects } from './wasm-legacy-redirects.mjs';

export function buildClientSdkLegacyRedirectEntries({
  platformId,
  sidebar,
  wasmEntries,
  aliases = [],
}) {
  const prefix = `/sdk/${platformId}`;
  const activePaths = new Set(flattenSidebarPaths(sidebar.nodes ?? []));
  const mapped = wasmEntries
    .map(({ source, destination }) => ({
      source: source.replace('/sdk/wasm', prefix),
      destination: destination.replace('/sdk/wasm', prefix),
    }))
    .filter(
      ({ source, destination }) =>
        source !== destination &&
        (activePaths.has(destination) || destination === '/sdk/error-codes'),
    );
  const unique = new Map();
  for (const entry of [...mapped, ...aliases]) {
    if (
      !entry.source.startsWith(`${prefix}/`) ||
      (!activePaths.has(entry.destination) && entry.destination !== '/sdk/error-codes')
    )
      continue;
    unique.set(entry.source, entry);
  }
  return [...unique.values()].sort((a, b) => a.source.localeCompare(b.source));
}

export function buildClientSdkLegacyRedirects(options) {
  return buildWasmLegacyRedirects(buildClientSdkLegacyRedirectEntries(options));
}

function flattenSidebarPaths(nodes) {
  return nodes.flatMap((node) => {
    if (typeof node === 'string') return [node];
    if (node.path) return [node.path];
    return flattenSidebarPaths(node.children ?? []);
  });
}
