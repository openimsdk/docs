import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const contentRoot = join(root, 'content/zh/docs/chat/sdk/wasm');
const auditPath = join(root, 'data/structure/wasm-content-audit.json');
const reviewedAt = '2026-07-24';
const note =
  '2026-07-24：逐页复核 WASM API 的参数与返回说明；复杂输入统一使用“参数 / 类型 / 是否必填 / 说明”，简单输入保留紧邻示例的正文说明，并按固定 @openim/wasm-client-sdk@3.8.5-hotfix.0 声明核对字段、类型和必填边界。';

const mdxFiles = await collectMdxFiles(contentRoot);
const audit = JSON.parse(await readFile(auditPath, 'utf8'));
const recordsByRoute = new Map();

for (const page of audit.pages) {
  for (const route of [page.currentPath, page.targetPath]) {
    if (route) recordsByRoute.set(route, page);
  }
}

const missing = [];

for (const file of mdxFiles) {
  const source = await readFile(file, 'utf8');
  const route = source.match(/^sourcePath:\s*['"]([^'"]+)['"]$/m)?.[1];

  if (!route) {
    missing.push(`${relative(root, file)}（缺少 sourcePath）`);
    continue;
  }

  const page = recordsByRoute.get(route);
  if (!page) {
    missing.push(`${relative(root, file)}（审核记录中缺少 ${route}）`);
    continue;
  }

  page.locales.zh.reviewer = 'Codex';
  page.locales.zh.reviewedAt = reviewedAt;
  page.notes ??= [];
  if (!page.notes.includes(note)) page.notes.push(note);
}

if (missing.length > 0) {
  throw new Error(`无法同步以下 WASM 页面审核记录：\n${missing.join('\n')}`);
}

await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
console.log(`已同步 ${mdxFiles.length} 个中文 WASM 页面审核记录。`);

async function collectMdxFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMdxFiles(path)));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(path);
    }
  }

  return files.sort();
}
