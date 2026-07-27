import { z } from 'zod';

export type DocTemplate = 'landing' | 'overview' | 'guide' | 'api';
export type DocStatus = 'scaffold' | 'draft' | 'published' | 'deprecated';

export interface RouteRecord {
  id: number;
  path: string;
  relativePath: string;
  sourcePath: string;
  title: string;
  description: string;
  product: string;
  version?: string | null;
  platform?: string | null;
  contextKey: string;
  contextTitle: string;
  template: DocTemplate;
  status: DocStatus;
  sourceIndex: number;
  contentFile: string;
  navOrder: number;
  edition?: 'open-source' | 'enterprise';
  locales?: Array<'en' | 'zh'>;
}

export interface NavNode {
  id: string;
  segment: string;
  title: string;
  href?: string | null;
  type: 'folder' | 'page';
  children: NavNode[];
  minIndex: number;
  navigationTitle?: string;
  edition?: 'open-source' | 'enterprise';
  locales?: Array<'en' | 'zh'>;
}

export interface NavContext {
  key: string;
  title: string;
  rootPath: string;
  overviewPath: string;
  product: string;
  version?: string | null;
  platform?: string | null;
  nodes: NavNode[];
  pageCount: number;
  sidebarExpansion?: 'top-level' | 'active-path';
}

export interface NavigationData {
  generatedAt: string;
  contexts: NavContext[];
}

const repositoryRelativePathSchema = z
  .string()
  .min(1)
  .refine(
    (path) =>
      !path.startsWith('/') &&
      !path.includes('\\') &&
      path.split('/').every((segment) => segment !== '' && segment !== '.' && segment !== '..'),
    'path must be normalized and repository-relative without parent traversal',
  );

export const docsetRecordSchema = z.strictObject({
  path: repositoryRelativePathSchema,
  instructions: z.string().trim().min(1),
  repoUrl: z.string(),
  sourceRef: z.string().nullable(),
  targetTagPattern: z.string(),
});

export const docsetsDataSchema = z
  .strictObject({
    docsets: z.array(docsetRecordSchema),
  })
  .superRefine(({ docsets }, context) => {
    const paths = new Set<string>();
    for (const [docsetIndex, docset] of docsets.entries()) {
      if (paths.has(docset.path)) {
        context.addIssue({
          code: 'custom',
          message: `duplicate docset path: ${docset.path}`,
          path: ['docsets', docsetIndex, 'path'],
        });
      }
      paths.add(docset.path);
    }
  });

export type DocsetRecord = z.infer<typeof docsetRecordSchema>;
export type DocsetsData = z.infer<typeof docsetsDataSchema>;

export interface TocItem {
  title: string;
  url: string;
  depth: number;
}

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

export interface SearchRecord {
  path: string;
  title: string;
  description: string;
  context: string;
  keywords: string;
  content?: string;
  locales?: Array<'en' | 'zh'>;
}
