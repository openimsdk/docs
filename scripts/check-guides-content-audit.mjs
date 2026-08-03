import { access, readFile } from 'node:fs/promises';
import { posix, resolve } from 'node:path';

const root = process.cwd();
const audit = JSON.parse(
  await readFile(resolve(root, 'data/structure/guides-content-audit.json'), 'utf8'),
);
const component = await readFile(resolve(root, 'src/components/docs/guides-page.tsx'), 'utf8');
const nextConfig = await readFile(resolve(root, 'next.config.mjs'), 'utf8');
const generatedContent = JSON.parse(
  await readFile(resolve(root, 'src/generated/guides-content.json'), 'utf8'),
);
const errors = [];
const referencedLocalAssets = new Set();

for (const route of ['/docs/guides/[...slug]', '/[locale]/docs/guides/[...slug]']) {
  if (!nextConfig.includes(`'${route}': ['./content/zh/docs/guides/**/*.mdx', './content/en/docs/guides/**/*.mdx']`)) {
    errors.push(`${route}: missing standalone output tracing for reviewed guide MDX`);
  }
}

if (!/^[0-9a-f]{40}$/.test(audit.source?.commit ?? '')) {
  errors.push('source.commit must be an immutable 40-character Git commit');
}

const pages = audit.pages ?? [];
const sourcePaths = pages.map((page) => page.sourcePath);
const currentPaths = pages.map((page) => page.currentPath);
checkUnique(sourcePaths, 'sourcePath');
checkUnique(currentPaths, 'currentPath');

const configuredSources = new Set(
  [...component.matchAll(/href:\s*legacy\(locale,\s*'([^']+)'\)/g)].map((match) => match[1]),
);
const auditedSources = new Set(sourcePaths);

for (const sourcePath of configuredSources) {
  if (!auditedSources.has(sourcePath)) errors.push(`${sourcePath}: missing audit record`);
}
for (const sourcePath of auditedSources) {
  if (!configuredSources.has(sourcePath)) errors.push(`${sourcePath}: not configured in Guides`);
}

if (component.includes('raw.githubusercontent.com/openimsdk/docs')) {
  errors.push('Guide image resolver must not depend on the OpenIM docs repository');
}

for (const [sourcePath, record] of Object.entries(generatedContent.records ?? {})) {
  for (const href of markdownImageHrefs(record.body ?? '')) {
    if (/^https?:\/\//.test(href)) continue;
    const sourceAsset = posix.resolve(posix.dirname(sourcePath), href);
    const publicPath = `/assets${sourceAsset}`;
    referencedLocalAssets.add(publicPath);
    await checkLocalAsset(publicPath, sourcePath);
  }
}

for (const page of pages) {
  if (page.zhReviewStatus !== 'reviewed') {
    errors.push(`${page.currentPath}: zhReviewStatus must be reviewed`);
  }
  if (page.enStatus !== 'reviewed') {
    errors.push(`${page.currentPath}: enStatus must be reviewed`);
  }
  if (!page.enManualFile) {
    errors.push(`${page.currentPath}: reviewed English page requires enManualFile`);
  } else {
    try {
      const body = await readFile(resolve(root, page.enManualFile), 'utf8');
      if (!body.trim()) errors.push(`${page.currentPath}: English MDX is empty`);
      if (body.startsWith('---')) errors.push(`${page.currentPath}: English MDX must not contain frontmatter`);
      if (/docs\.openim\.io|raw\.githubusercontent\.com\/openimsdk\/docs/i.test(body)) {
        errors.push(`${page.currentPath}: English MDX depends on an old documentation host`);
      }
      for (const href of markdownImageHrefs(body)) {
        if (href.startsWith('/assets/')) {
          referencedLocalAssets.add(href);
          await checkLocalAsset(href, page.currentPath);
        }
      }
      const relativeFile = page.enManualFile.replace('content/en/docs/guides/', '');
      if (!component.includes(`'${page.sourcePath}': '${relativeFile}'`)) {
        errors.push(`${page.currentPath}: English MDX is not registered as an English override`);
      }
    } catch {
      errors.push(`${page.currentPath}: English MDX does not exist at ${page.enManualFile}`);
    }
  }
  if (page.disposition === 'restored') {
    if (!page.manualFile) {
      errors.push(`${page.currentPath}: restored page requires manualFile`);
      continue;
    }
    try {
      const body = await readFile(resolve(root, page.manualFile), 'utf8');
      if (!body.trim()) errors.push(`${page.currentPath}: manual MDX is empty`);
      if (body.startsWith('---')) {
        errors.push(`${page.currentPath}: manual MDX must not contain legacy frontmatter`);
      }
      for (const href of markdownImageHrefs(body)) {
        if (/^https?:\/\//.test(href)) {
          if (/docs\.openim\.io|raw\.githubusercontent\.com\/openimsdk\/docs/i.test(href)) {
            errors.push(`${page.currentPath}: old documentation image must be stored locally`);
          }
          continue;
        }
        if (href.startsWith('/assets/')) {
          referencedLocalAssets.add(href);
          await checkLocalAsset(href, page.currentPath);
        }
      }
      const headingIds = [...body.matchAll(/^#{2,4}\s+(.+)$/gm)].map((match) =>
        headingId(match[1]),
      );
      const duplicateHeadingIds = headingIds.filter(
        (id, index) => id && headingIds.indexOf(id) !== index,
      );
      if (duplicateHeadingIds.length > 0) {
        errors.push(
          `${page.currentPath}: duplicate heading IDs ${[...new Set(duplicateHeadingIds)].join(', ')}`,
        );
      }
      if (
        !component.includes(
          `'${page.sourcePath}': '${page.manualFile.replace('content/zh/docs/guides/', '')}'`,
        )
      ) {
        errors.push(`${page.currentPath}: manual MDX is not registered as a Chinese override`);
      }
    } catch {
      errors.push(`${page.currentPath}: manual MDX does not exist at ${page.manualFile}`);
    }
  } else if (page.manualFile !== null) {
    errors.push(`${page.currentPath}: retained page must not declare manualFile`);
  }
}

if (pages.length !== 25)
  errors.push(`expected 25 substantive guide records, found ${pages.length}`);
if (audit.assets?.sourceCommit !== audit.source?.commit) {
  errors.push('assets.sourceCommit must match the immutable guide source commit');
}
if (audit.assets?.localRoot !== 'public/assets/guides') {
  errors.push('assets.localRoot must be public/assets/guides');
}
if (audit.assets?.referencedFiles !== referencedLocalAssets.size) {
  errors.push(
    `expected ${audit.assets?.referencedFiles} audited local images, found ${referencedLocalAssets.size}`,
  );
}

if (errors.length > 0) {
  console.error(`Guides content audit failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  const restored = pages.filter((page) => page.disposition === 'restored').length;
  console.log(
    `Guides content audit OK: ${pages.length} source pages mapped, ${restored} restored as reviewed Chinese MDX, ${pages.length} reviewed English MDX pages, ${referencedLocalAssets.size} local images.`,
  );
}

function checkUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) errors.push(`${value}: duplicate ${label}`);
    seen.add(value);
  }
}

function headingId(value) {
  return value
    .replace(/[>#*_`]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

function markdownImageHrefs(body) {
  return [...body.matchAll(/!\[[^\]]*]\(([^)]+)\)/g)].map((match) => match[1]);
}

async function checkLocalAsset(publicPath, owner) {
  try {
    await access(resolve(root, 'public', publicPath.replace(/^\//, '')));
  } catch {
    errors.push(`${owner}: missing local guide image ${publicPath}`);
  }
}
