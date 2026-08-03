import { clientSdkPlatformIds, getClientSdkPlatform } from './client-sdk-platforms.mjs';

const clientSdkContexts = new Set(
  clientSdkPlatformIds.map((platformId) => getClientSdkPlatform(platformId).contextKey),
);

export function validateSearchIndexPaths({
  routes,
  auditPages,
  indexes,
  clientSdkActivePaths,
  managedClientSdkContexts = clientSdkContexts,
}) {
  const errors = [];

  for (const locale of ['en', 'zh']) {
    const expected = new Set(
      routes
        .filter((route) => {
          if (!clientSdkContexts.has(route.contextKey)) {
            return !route.locales || route.locales.includes(locale);
          }
          if (!managedClientSdkContexts.has(route.contextKey)) {
            return !route.locales || route.locales.includes(locale);
          }
          if (clientSdkActivePaths && !clientSdkActivePaths.has(route.path)) return false;
          return auditPages.get(route.path)?.locales?.[locale]?.reviewStatus === 'published';
        })
        .map((route) => route.path),
    );
    const counts = new Map();
    for (const record of indexes[locale] ?? []) {
      counts.set(record.path, (counts.get(record.path) ?? 0) + 1);
    }

    for (const path of expected) {
      if (!counts.has(path)) errors.push(`${locale} search index is missing ${path}`);
    }
    for (const [path, count] of counts) {
      if (!expected.has(path)) errors.push(`${locale} search index has unexpected ${path}`);
      if (count > 1) errors.push(`${locale} search index has duplicate ${path}`);
    }
  }

  return errors.sort();
}
