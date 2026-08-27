# 技术架构

## 1. 设计目标

本项目以 MDX 作为文档正文的事实源，并从结构数据生成路由、导航、搜索、面包屑和上下页关系。公开 URL 不包含内部版本目录：SDK 使用 `/sdk/<platform>/**`，Platform API 使用 `/platform-api/**`，中文页面在路径前增加 `/zh`。

当前发布范围采用 `current-only` 策略。站点只公开已经完成并通过审核的产品上下文；尚未完成的平台结构不会因为物理存在而自动进入导航、搜索或 Sitemap。已经结束的一次性迁移实现不保留在当前维护目录中，历史通过 Git 追溯。

## 2. 页面请求链路

```text
/sdk/** 或 /platform-api/**
            │
            ▼
Next.js App Router
            │
            ├── src/generated/routes.json       URL 与 MDX 文件映射
            ├── src/generated/navigation.json   当前上下文的侧栏结构
            ├── src/generated/search-index*.json 中英文搜索索引
            └── content/{docs,zh/docs}/**/*.mdx   中英文页面元数据与正文
            │
            ▼
DocumentationPage
├── GlobalHeader / ProductNav
├── SidebarNav
├── ArticleHeader
├── MDX body
├── Pagination / Feedback
└── TableOfContents
```

英文页面由 `/sdk` 和 `/platform-api` 路由渲染；中文页面由 `/zh/sdk` 和 `/zh/platform-api` 路由渲染。首页分别使用 `/` 和 `/zh`。旧的 `/docs/chat/**`、`/sdk/v4/**` 与 `/platform-api/v3/**` 不属于当前公开地址。

## 3. 数据源与职责

### `content/docs/**/*.mdx` 与 `content/zh/docs/chat/**/*.mdx`

分别保存英文及简体中文 SDK、Platform API 正文与 frontmatter，是这些页面唯一的人工维护入口。正文改动必须逐页阅读、逐页修改，并同步更新对应审核记录。

### `content/en/docs/guides` 与 `content/zh/docs/guides`

保存从上游 Guides 导入并完成审核的语言快照。它们通过确定性生成步骤进入 `src/generated/guides-content.json`，但最终正文仍需逐页人工审核。

### `data/structure/scope.json`

约束允许进入当前结构的产品、平台、版本和模板。它描述“可以维护什么”，不等同于“已经公开什么”。

### `src/generated/routes.json`

记录公开 URL、内容文件、语言、上下文、模板、平台、版本、状态和排序。页面移动、合并、删除或新增时必须同步修改。

### `src/generated/navigation.json`

记录各产品和平台上下文的树形侧栏。导航名称应描述用户任务或业务能力，不直接把方法名当作菜单名称。

### `src/config/docs.ts`

定义首页和全局导航中可见的产品、平台以及显示名称。一个平台即使已有物理文件，也只有在这里启用且页面状态符合发布要求时才对外展示。

### `src/generated/search-index.json` 与 `search-index-zh.json`

由当前路由和正文生成，不手工编辑。

### `data/structure/*-content-audit.json`

记录逐页人工审核状态。生成产物不能替代人工审核；修改正文后必须更新对应页面的审核记录。

### `data/structure/chat-pages.json` 与 `report.json`

前者是结构快照，后者由 `pnpm structure:report` 生成，用于审计，不作为页面运行时事实源。

## 4. 动态 MDX 与构建

`source.config.ts` 使用 Fumadocs 的动态内容源。安装或显式执行 `pnpm source:generate` 时，`fumadocs-mdx` 会在 `.source-local` 中生成类型与动态加载入口；该目录是本地产物，不进入版本控制。页面在请求或构建时按路由加载对应 MDX。

Docker 与普通 Node.js 环境使用 Next.js `standalone` 输出，`scripts/prepare-standalone.mjs` 会把静态资源整理到自包含产物。生产站点由 GitHub Actions 构建不可变 GHCR 镜像，并通过受限 SSH 账号部署到 Nginx 后方的蓝绿容器槽位；相关配置位于 `.github/workflows/ci.yml` 与 `deploy/openim-docs`。Vercel 作为可选托管环境使用其 Next.js Runtime，不生成或整理 standalone 目录。

`outputFileTracingIncludes` 必须继续覆盖 `content/docs/**/*.mdx`，否则 standalone 运行时可能找不到动态页面。

## 5. 内容同步流程

`pnpm content:sync` 依次：

1. 从已审核的中文 SDK MDX 构建 WASM、Android、iOS 和 Flutter 中文运行时数据。
2. 重建中英文搜索索引。

该命令不会自动修改路由和导航。结构性调整必须显式维护 `routes.json`、`navigation.json` 和审核数据；需要刷新 frontmatter 元数据时，运行 `pnpm content:metadata` 并审查 diff。`pnpm structure:report` 会先执行该元数据同步，确保报告中的发布状态与正文一致。

`pnpm dev`、`pnpm check` 和 `pnpm build` 都会通过 pre-script 执行内容同步，因此运行这些命令后应检查工作区，确认生成产物与正文一致。

## 6. 内容与事件边界

- 任务型 SDK 页面按“操作”组织，不按固定模板堆叠章节。
- 单个操作只有在字段复杂时才使用参数表；多个 API 的参数不得混在一张表中。
- Promise 成功、事件到达和重新查询校准是三个不同阶段。
- 每个事件只有一个完整监听示例的归属页，归属由 `data/structure/wasm-api-ownership.json` 等清单确定。
- 查询 API 建立快照，事件合并增量；状态合并必须使用稳定业务标识。
- Platform API 的方法、路径、参数和响应以 OpenIM 的真实接口定义为准，不按参考站栏目推断能力。

更完整的写作规则见 `docs/CONTENT_AUTHORING.md` 和仓库根目录 `AGENTS.md`。

## 7. 结构变更流程

新增、删除、移动页面或改变侧栏层级时：

1. 完整阅读目标页面及其相关页面，确认能力和 API 归属。
2. 核对 `data/structure/scope.json` 和 `src/config/docs.ts` 的发布范围。
3. 修改 `src/generated/routes.json` 与 `src/generated/navigation.json`。
4. 逐页增删或修改中英文 MDX；不使用脚本生成正文。
5. 更新 API/事件所有权、审核记录、搜索索引和必要测试。
6. 运行：

```bash
pnpm content:status
pnpm structure:report
pnpm check
pnpm build
```

构建若改写 `next-env.d.ts`，应恢复仓库约定的 `.next/dev/types/routes.d.ts` 导入。

## 8. Platform API 与 Guides

Platform API 页面位于 `content/docs/chat/platform-api`，公开路径为 `/platform-api/**`。同步工具只负责确定性的结构和上游数据导入；正式正文仍需人工核对。端点页可以由 OpenAPI 提供结构化证据，但不得与手写指南形成两个相互矛盾的事实源。

Guides 使用独立路由 `/docs/guides`，目录在 `src/components/docs/guides-page.tsx` 中维护，已审核的语言快照位于 `content/en/docs/guides` 与 `content/zh/docs/guides`，运行时数据位于 `src/generated/guides-content.json`。运行 `pnpm guides:sync` 可刷新上游来源，刷新后仍需逐页审查内容和链接。

## 9. 可替换边界

以下模块可在不改变 MDX 路由的情况下独立演进：

- 搜索：`src/lib/search.ts`、`app/api/search/route.ts`
- 页头与产品导航：`src/components/site/**`
- 上下文选择器：`src/components/docs/context-picker.tsx`
- 文档布局：`src/components/docs/documentation-page.tsx`
- MDX 组件：`src/components/mdx-components.tsx`
- 视觉系统：`app/globals.css`
- SEO：`app/sitemap.ts`、`app/robots.ts` 与各产品路由页
