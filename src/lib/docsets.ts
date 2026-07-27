import 'server-only';

import rawDocsets from '@/data/structure/docsets.json';
import { docsetsDataSchema, type DocsetRecord, type RouteRecord } from '@/src/types/docs';

const data = docsetsDataSchema.parse(rawDocsets);
const contentDocsPrefix = 'content/docs/';
const docsets = [...data.docsets].sort((a, b) => a.path.localeCompare(b.path));
const routableDocsets = docsets
  .filter((docset) => docset.path.startsWith(contentDocsPrefix))
  .sort((a, b) => getDocsetRootPath(b).length - getDocsetRootPath(a).length);
const docsetByPath = new Map(docsets.map((docset) => [docset.path, docset]));

export function getDocsets(): readonly DocsetRecord[] {
  return docsets;
}

export function getDocset(path: string): DocsetRecord | undefined {
  return docsetByPath.get(path);
}

export function getDocsetForPath(path: string): DocsetRecord | undefined {
  const normalizedPath = normalizeDocsetPath(path);
  return routableDocsets.find((docset) => {
    const rootPath = getDocsetRootPath(docset);
    return normalizedPath === rootPath || normalizedPath.startsWith(`${rootPath}/`);
  });
}

export function getDocsetForRoute(
  route: Pick<RouteRecord, 'contextKey' | 'path'>,
): DocsetRecord | undefined {
  return getDocset(`${contentDocsPrefix}${route.contextKey}`) ?? getDocsetForPath(route.path);
}

function normalizeDocsetPath(path: string): string {
  if (!path) return '/docs/chat';
  const normalized = `/${path}`.replace(/\/{2,}/g, '/').replace(/\/$/, '');
  return normalized || '/';
}

function getDocsetRootPath(docset: Pick<DocsetRecord, 'path'>): string {
  return normalizeDocsetPath(`/docs/${docset.path.slice(contentDocsPrefix.length)}`);
}
