import 'server-only';

import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import flutterSdkData from '@/src/generated/flutter-sdk-zh-content.json';
import iosSdkData from '@/src/generated/ios-sdk-zh-content.json';
import wasmSdkData from '@/src/generated/wasm-sdk-zh-content.json';
import localizedPlatformApiData from '@/src/generated/platform-api-zh-content.json';
import { extractMarkdownHeadings } from '@/src/lib/heading-ids';
import type { Locale } from '@/src/lib/i18n';
import { getRouteRecord } from '@/src/lib/routes';
import {
  createClientSdkPendingReviewContent,
  selectClientSdkLocalizedPage,
} from '@/src/lib/client-sdk-publication';
import type { NavNode, RouteRecord, TocItem } from '@/src/types/docs';

type LocalizedDocPage = {
  body: string;
  description: string;
  headings: TocItem[];
  sourcePath: string;
  title: string;
};

type LocalizedSdkData = {
  navigationLabels: Record<string, string>;
  pages: Record<string, LocalizedDocPage>;
};

const sdkZhByContext: Record<string, LocalizedSdkData> = {
  'chat/sdk/flutter': flutterSdkData as LocalizedSdkData,
  'chat/sdk/ios': iosSdkData as LocalizedSdkData,
  'chat/sdk/wasm': wasmSdkData as LocalizedSdkData,
};
const platformApiZh = localizedPlatformApiData as { navigationLabels: Record<string, string> };
const localizedPageCache = new Map<string, LocalizedDocPage | undefined>();

const zhLabelOverrides: Record<string, string> = {
  Chat: '聊天',
  Home: '首页',
  'OpenIM Platform API': 'OpenIM 平台 API',
  'Platform API': '平台 API',
  'Server API': '服务端 API',
};

export function getLocalizedDocPage(
  path: string | undefined,
  locale: Locale,
): LocalizedDocPage | undefined {
  if (locale !== 'zh' || !path) return undefined;
  const normalized = normalizePath(path);
  const route = getRouteRecord(normalized);
  const platformData = route ? sdkZhByContext[route.contextKey] : undefined;
  const manualPage = getManualLocalizedPage(normalized, locale);
  if (!route || !platformData) return manualPage;
  const pending = createClientSdkPendingReviewContent({
    description: `该 OpenIM ${route.platform ?? 'client'} SDK 页面的中文技术内容仍在逐页核对中。`,
    path: normalized,
    title: localizeDocLabel(route.title, locale),
  });
  const pendingPage = pending
    ? {
        ...pending,
        headings: extractMarkdownHeadings(pending.body),
      }
    : undefined;
  return selectClientSdkLocalizedPage({
    locale,
    manualPage,
    packagedPage: platformData.pages[normalized],
    path: normalized,
    pendingPage,
  });
}

export function getLocalizedDocTitle(path: string | undefined, locale: Locale): string | undefined {
  const title = getLocalizedDocPage(path, locale)?.title;
  return title || undefined;
}

export function localizeRouteRecord(route: RouteRecord, locale: Locale): RouteRecord {
  const localized = getLocalizedDocPage(route.path, locale);
  if (!localized) return route;
  return {
    ...route,
    description: localized.description,
    title: localized.title,
  };
}

export function localizeNavNodeTitle(node: NavNode, locale: Locale): string {
  if (node.navigationTitle) return localizeDocLabel(node.navigationTitle, locale);
  if (locale !== 'zh') return node.title;
  if (node.href) return getLocalizedDocTitle(node.href, locale) ?? localizeDocLabel(node.title, locale);

  const labels = navigationLabelsForNode(node);
  const fromTitle = labels[node.title];
  if (fromTitle) return normalizeOpenImZhTerminology(fromTitle);
  const fromSegment = labels[node.segment];
  if (fromSegment) return normalizeOpenImZhTerminology(fromSegment);

  return localizeDocLabel(node.title, locale);
}

export function localizeDocLabel(label: string, locale: Locale): string {
  if (locale !== 'zh') return label;
  const exact = zhLabelOverrides[label];
  if (exact) return normalizeOpenImZhTerminology(exact);

  // Prefer SDK title keys first so shared segments like retrieving-messages
  // do not inherit Platform API folder labels in SDK sidebars.
  const sdkLabels = Object.values(sdkZhByContext).map((data) => data.navigationLabels);
  const fromSdkTitle = sdkLabels.map((labels) => labels[label]).find(Boolean);
  if (fromSdkTitle) return normalizeOpenImZhTerminology(fromSdkTitle);

  const fromSdkSegment = sdkLabels
    .map((labels) => localizeHumanizedNavigationLabel(label, labels))
    .find(Boolean);
  if (fromSdkSegment) return normalizeOpenImZhTerminology(fromSdkSegment);

  const fromPlatformSegment = localizeHumanizedNavigationLabel(
    label,
    platformApiZh.navigationLabels,
  );
  return normalizeOpenImZhTerminology(fromPlatformSegment ?? label);
}

function navigationLabelsForNode(node: NavNode): Record<string, string> {
  const href = findFirstNavHref(node);
  if (href?.startsWith('/platform-api')) return platformApiZh.navigationLabels;
  const route = href ? getRouteRecord(href) : undefined;
  const sdkData = route ? sdkZhByContext[route.contextKey] : undefined;
  if (sdkData) return sdkData.navigationLabels;
  return {
    ...platformApiZh.navigationLabels,
    ...Object.fromEntries(
      Object.values(sdkZhByContext).flatMap((data) => Object.entries(data.navigationLabels)),
    ),
  };
}

function findFirstNavHref(node: NavNode): string | undefined {
  if (node.href) return node.href;
  for (const child of node.children ?? []) {
    const href = findFirstNavHref(child);
    if (href) return href;
  }
  return undefined;
}

export function localizeNavContextTitle(title: string, locale: Locale): string {
  return localizeDocLabel(title.replace(/\s*·\s*v\d+\b/i, ''), locale);
}

function normalizePath(path: string): string {
  const normalized = `/${path}`.replace(/\/{2,}/g, '/').replace(/\/$/, '');
  return normalized || '/';
}

function localizeHumanizedNavigationLabel(
  label: string,
  labels: Record<string, string>,
): string | undefined {
  const normalized = label.toLowerCase();
  for (const [segment, translated] of Object.entries(labels)) {
    if (humanizeSegment(segment).toLowerCase() === normalized) return translated;
  }
  return undefined;
}

function humanizeSegment(value: string): string {
  return value
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bIos\b/g, 'iOS')
    .replace(/\bSdk\b/g, 'SDK')
    .replace(/\bApi\b/g, 'API');
}

function getManualLocalizedPage(path: string, locale: Locale): LocalizedDocPage | undefined {
  const cacheKey = `${locale}:${path}`;
  if (localizedPageCache.has(cacheKey)) return localizedPageCache.get(cacheKey);

  const route = getRouteRecord(path);
  const localizedRelativePath = route?.contentFile.replace(/^content\/docs\//, 'docs/');
  const primaryFilePath = resolve(
    process.cwd(),
    'content',
    locale,
    localizedRelativePath ?? `${path.slice(1)}.mdx`,
  );
  const legacyPlatformFilePath = localizedRelativePath?.startsWith('docs/chat/platform-api/')
    ? resolve(
        process.cwd(),
        'content',
        locale,
        localizedRelativePath.replace('docs/chat/platform-api/', 'docs/chat/platform-api/v3/'),
      )
    : undefined;
  const filePath = [primaryFilePath, legacyPlatformFilePath]
    .filter((candidate): candidate is string => Boolean(candidate))
    .find(existsSync);
  if (!filePath) {
    localizedPageCache.set(cacheKey, undefined);
    return undefined;
  }

  const source = readFileSync(filePath, 'utf8');
  const { body, frontmatter } = parseMdx(source);
  const normalizedBody = body.replace(/\r\n?/g, '\n').trim();
  const fallback = route ? sdkZhByContext[route.contextKey]?.pages[path] : undefined;
  const page = {
    body: normalizedBody,
    description: frontmatter.description ?? fallback?.description ?? '',
    headings: extractMarkdownHeadings(normalizedBody),
    sourcePath: frontmatter.sourcePath ?? path,
    title: frontmatter.title ?? fallback?.title ?? '',
  };

  localizedPageCache.set(cacheKey, page);
  return page;
}

function normalizeOpenImZhTerminology(value: string): string {
  return value
    .replaceAll('开放频道', '群组')
    .replaceAll('开放房间', '群组')
    .replaceAll('频道 URL', '群组 ID')
    .replaceAll('通过 URL 获取频道', '通过 ID 获取群组或会话')
    .replaceAll('按名称、URL 或', '按名称、ID 或')
    .replaceAll('URL 或其他筛选条件', 'ID 或其他筛选条件')
    .replaceAll('URL 或自定义类型', 'ID 或自定义类型')
    .replaceAll('URL 或多种过滤条件', 'ID 或多种过滤条件');
}

function parseMdx(source: string): {
  body: string;
  frontmatter: Partial<Pick<LocalizedDocPage, 'description' | 'sourcePath' | 'title'>>;
} {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { body: source.trim(), frontmatter: {} };

  const frontmatter: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const raw = line.slice(separator + 1).trim();
    if (!key || !raw) continue;
    frontmatter[key] = raw.replace(/^['"]|['"]$/g, '');
  }

  return {
    body: source.slice(match[0].length).trim(),
    frontmatter,
  };
}
