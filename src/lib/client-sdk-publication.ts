import androidAuditData from '../../data/structure/android-content-audit.json' with { type: 'json' };
import androidSidebarData from '../../data/structure/android-sidebar.json' with { type: 'json' };
import flutterAuditData from '../../data/structure/flutter-content-audit.json' with { type: 'json' };
import flutterSidebarData from '../../data/structure/flutter-sidebar.json' with { type: 'json' };
import iosAuditData from '../../data/structure/ios-content-audit.json' with { type: 'json' };
import iosSidebarData from '../../data/structure/ios-sidebar.json' with { type: 'json' };
import wasmAuditData from '../../data/structure/wasm-content-audit.json' with { type: 'json' };
import wasmSidebarData from '../../data/structure/wasm-sidebar.json' with { type: 'json' };

export type ReviewLocale = 'en' | 'zh';
export type ClientSdkPlatform = 'android' | 'flutter' | 'ios' | 'wasm';

type ReviewStatus =
  | 'deferred'
  | 'structure-only'
  | 'mapped'
  | 'written'
  | 'api-verified'
  | 'example-verified'
  | 'published';

type LocaleState = { reviewStatus: ReviewStatus };

export type ClientSdkAuditPage = {
  currentPath: string;
  targetPath: string;
  disposition: string;
  locales: Record<ReviewLocale, LocaleState>;
};

type PlatformPublicationData = {
  pages: ClientSdkAuditPage[];
  activePaths: string[];
};

export function createClientSdkPublicationLookup(
  platformData: Partial<Record<ClientSdkPlatform, PlatformPublicationData>>,
) {
  const platformByPath = new Map<string, ClientSdkPlatform>();
  const pageByPath = new Map<string, ClientSdkAuditPage>();

  for (const [platform, data] of Object.entries(platformData) as [
    ClientSdkPlatform,
    PlatformPublicationData,
  ][]) {
    for (const path of data.activePaths) platformByPath.set(normalizePath(path), platform);
    for (const page of data.pages) pageByPath.set(normalizePath(page.currentPath), page);
  }

  function getPlatform(path: string): ClientSdkPlatform | undefined {
    return platformByPath.get(normalizePath(path));
  }
  function getPage(path: string): ClientSdkAuditPage | undefined {
    return pageByPath.get(normalizePath(path));
  }
  function isPublished(path: string, locale: ReviewLocale): boolean {
    return getPage(path)?.locales[locale]?.reviewStatus === 'published';
  }

  return {
    getClientSdkPlatform: getPlatform,
    getClientSdkAuditPage: getPage,
    isClientSdkRoute(path: string): boolean {
      return getPlatform(path) !== undefined;
    },
    isClientSdkLocalePublished: isPublished,
    getPublishedClientSdkLocales(path: string): ReviewLocale[] {
      return (['en', 'zh'] as const).filter((locale) => isPublished(path, locale));
    },
  };
}

const publicationLookup = createClientSdkPublicationLookup({
  android: {
    pages: androidAuditData.pages as ClientSdkAuditPage[],
    activePaths: flattenSidebarPaths(androidSidebarData.nodes),
  },
  flutter: {
    pages: flutterAuditData.pages as ClientSdkAuditPage[],
    activePaths: flattenSidebarPaths(flutterSidebarData.nodes),
  },
  ios: {
    pages: iosAuditData.pages as ClientSdkAuditPage[],
    activePaths: flattenSidebarPaths(iosSidebarData.nodes),
  },
  wasm: {
    pages: wasmAuditData.pages as ClientSdkAuditPage[],
    activePaths: flattenSidebarPaths(wasmSidebarData.nodes),
  },
});

const platformNames: Record<ClientSdkPlatform, string> = {
  android: 'Android',
  flutter: 'Flutter',
  ios: 'iOS',
  wasm: 'WASM',
};

export function getClientSdkPendingReviewBody(platform: ClientSdkPlatform): string {
  return [
    '## 中文内容审核中',
    '',
    `该页面已经纳入 OpenIM ${platformNames[platform]} SDK 文档结构，中文技术内容仍在逐页核对中。`,
    '',
    '在审核完成前，请参考 OpenIM 官方 SDK 文档和当前项目使用的 SDK 版本。',
  ].join('\n');
}

export function createClientSdkPendingReviewContent({
  description,
  path,
  title,
}: {
  description: string;
  path: string;
  title: string;
}): { body: string; description: string; sourcePath: string; title: string } | undefined {
  const normalizedPath = normalizePath(path);
  const platform = getClientSdkPlatform(normalizedPath);
  if (!platform) return undefined;
  return {
    body: getClientSdkPendingReviewBody(platform),
    description,
    sourcePath: normalizedPath,
    title,
  };
}

export function selectClientSdkLocalizedPage<T>({
  locale,
  manualPage,
  packagedPage,
  path,
  pendingPage,
  publication = publicationLookup,
}: {
  locale: ReviewLocale;
  manualPage: T | undefined;
  packagedPage: T | undefined;
  path: string;
  pendingPage: T | undefined;
  publication?: Pick<
    ReturnType<typeof createClientSdkPublicationLookup>,
    'isClientSdkLocalePublished' | 'isClientSdkRoute'
  >;
}): T | undefined {
  if (!publication.isClientSdkRoute(path)) return manualPage;
  if (!publication.isClientSdkLocalePublished(path, locale)) return pendingPage;
  return manualPage ?? packagedPage;
}

export const getClientSdkPlatform = publicationLookup.getClientSdkPlatform;
export const getClientSdkAuditPage = publicationLookup.getClientSdkAuditPage;
export const isClientSdkRoute = publicationLookup.isClientSdkRoute;
export const isClientSdkLocalePublished = publicationLookup.isClientSdkLocalePublished;
export const getPublishedClientSdkLocales = publicationLookup.getPublishedClientSdkLocales;

function flattenSidebarPaths(nodes: unknown[]): string[] {
  return nodes.flatMap((node) => {
    if (typeof node === 'string') return [node];
    const entry = node as { path?: string; children?: unknown[] };
    if (entry.path) return [entry.path];
    return flattenSidebarPaths(entry.children ?? []);
  });
}

function normalizePath(path: string): string {
  const normalized = `/${path}`.replace(/\/{2,}/g, '/').replace(/\/$/, '');
  return normalized || '/';
}
