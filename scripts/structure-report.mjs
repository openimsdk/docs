import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const routes = JSON.parse(await readFile(resolve(root, 'src/generated/routes.json'), 'utf8'));
const navigation = JSON.parse(
  await readFile(resolve(root, 'src/generated/navigation.json'), 'utf8'),
);
const scope = JSON.parse(await readFile(resolve(root, 'data/structure/scope.json'), 'utf8'));
const byProduct = Object.fromEntries(
  [...groupCount(routes, (route) => route.product).entries()].sort(([a], [b]) =>
    a.localeCompare(b),
  ),
);
const byTemplate = Object.fromEntries(
  [...groupCount(routes, (route) => route.template).entries()].sort(([a], [b]) =>
    a.localeCompare(b),
  ),
);
const byStatus = Object.fromEntries(
  [...groupCount(routes, (route) => route.status).entries()].sort(([a], [b]) => a.localeCompare(b)),
);
const contexts = navigation.contexts.map((context) => ({
  key: context.key,
  title: context.title,
  pageCount: context.pageCount,
}));
const report = {
  generatedAt: new Date().toISOString(),
  scope: scope.mode,
  pageCount: routes.length,
  contextCount: contexts.length,
  byProduct,
  byTemplate,
  byStatus,
  contexts,
};

await Promise.all([
  writeFile(resolve(root, 'data/structure/report.json'), `${JSON.stringify(report, null, 2)}\n`),
  writeFile(resolve(root, 'docs/STRUCTURE_REPORT.md'), renderMarkdown(report)),
]);
console.log(JSON.stringify(report, null, 2));

function groupCount(items, key) {
  const result = new Map();
  for (const item of items) result.set(key(item), (result.get(key(item)) ?? 0) + 1);
  return result;
}

function percentage(value, total) {
  return total === 0 ? '0.0%' : `${((value / total) * 100).toFixed(1)}%`;
}

function renderMarkdown(value) {
  const productRows = Object.entries(value.byProduct)
    .map(
      ([key, count]) =>
        `| \`${key}\` | ${count.toLocaleString()} | ${percentage(count, value.pageCount)} |`,
    )
    .join('\n');
  const templateRows = Object.entries(value.byTemplate)
    .map(
      ([key, count]) =>
        `| \`${key}\` | ${count.toLocaleString()} | ${percentage(count, value.pageCount)} |`,
    )
    .join('\n');
  const contextRows = value.contexts
    .map(
      (context) =>
        `| \`${context.key}\` | ${context.title} | ${context.pageCount.toLocaleString()} |`,
    )
    .join('\n');
  const statusRows = Object.entries(value.byStatus)
    .map(
      ([key, count]) =>
        `| \`${key}\` | ${count.toLocaleString()} | ${percentage(count, value.pageCount)} |`,
    )
    .join('\n');

  return `# 当前结构报告

- 页面总数：**${value.pageCount.toLocaleString()}**
- 导航上下文：**${value.contextCount.toLocaleString()}**
- 内容范围：**${value.scope}**
- 生成时间：\`${value.generatedAt}\`

## 当前保留范围

- 当前 Chat 首页、SDK 指南、Platform API 与 Webhook 结构。
- 公开 URL 使用 \`/sdk/<platform>/**\` 和 \`/platform-api/**\`，不包含默认版本段。
- 本报告统计结构内路由；实际公开的平台入口由 \`src/config/docs.ts\` 控制。
- UIKit、历史版本、旧兼容路由和手写 SDK Reference 占位页不属于当前结构。

SDK Reference 应从代码注释或类型定义生成。Platform API 的结构化定义可以来自 OpenAPI，正式正文仍需逐页人工审核。

## 按产品分支

| 分支 | 页面数 | 占比 |
| --- | ---: | ---: |
${productRows}

## 按页面模板

| 模板 | 页面数 | 占比 |
| --- | ---: | ---: |
${templateRows}

## 按发布状态

| 状态 | 页面数 | 占比 |
| --- | ---: | ---: |
${statusRows}

## 导航上下文

| 上下文键 | 显示名称 | 页面数 |
| --- | --- | ---: |
${contextRows}

## 说明

- 本报告由 \`pnpm structure:report\` 同时写入 Markdown 与 JSON。
- 页面正文迁移进度使用 \`pnpm content:status\` 查看。
- \`data/structure/scope.json\` 是结构范围约束，不等同于公开发布清单。
- \`published\`、\`draft\` 和 \`scaffold\` 必须反映真实审核状态，生成本报告不会改变页面状态。
`;
}
