# docs.openim.io 部署审计

核查与修复日期：2026-08-04

## 结论

`docs.openim.io` 由 **Netlify** 托管。生产站点现已从旧 Docusaurus 文档切换为 `openimsdk/docs` 当前 `main` 分支中的 Next.js/Fumadocs 文档。

仓库迁移后，Netlify 仍监听 `main`，但旧项目配置无法构建新站点。第一轮仓库配置修复使构建恢复成功，随后域名验收发现 Next.js Runtime 未运行，所有路由仍返回 `404`。补充显式 Runtime 配置后，Netlify 成功部署服务端函数、重定向和响应头规则，生产域名的关键路径均已通过验证。

## 当前生产链路

1. `docs.openim.io` 的 CNAME 指向 `apex-loadbalancer.netlify.com`。[DNS 查询结果](https://dns.google/resolve?name=docs.openim.io&type=CNAME)
2. 线上响应包含 `server: Netlify`、`cache-status` 和 `x-nf-request-id`，实际流量由 Netlify Edge 提供。[生产站点](https://docs.openim.io/)
3. Netlify 站点名称为 `openimdocs`，Site ID 为 `4f231446-b290-4e4a-95c7-193e0ec555b9`。[Netlify 站点记录](https://api.netlify.com/api/v1/sites/docs.openim.io)
4. 首个通过完整验收的修复 deploy 为 `6a71a995a90caa00096c4be0`，对应提交 `00cb193d0f55ca9a40002010f5876b48dabc1266`，发布时间为 2026-08-04 08:58:46 UTC。[修复验证 deploy](https://api.netlify.com/api/v1/deploys/6a71a995a90caa00096c4be0)
5. 部署摘要确认已处理 3 条重定向、1 条响应头规则，并部署 1 个 Next.js 服务端函数。

当前发布链路为：

```text
openimsdk/docs main
        ↓ Netlify Git 集成自动构建
Netlify Next.js Runtime
        ↓ Published deploy
docs.openim.io
```

## 故障经过与根因

仓库切换为新版文档后，以下 Production 部署均为 `error`：

| 提交       | 时间（UTC）      | Netlify 状态 |
| ---------- | ---------------- | ------------ |
| `a49496f5` | 2026-08-04 08:21 | `error`      |
| `a3646471` | 2026-08-04 08:23 | `error`      |
| `4df14827` | 2026-08-04 08:29 | `error`      |

匿名 API 不公开失败构建日志，但仓库和公开部署状态足以定位两层问题：

1. 旧站曾使用 `build-ignore-errors.sh` 构建并发布 Docusaurus 的 `build` 目录。新版仓库没有 `netlify.toml` 覆盖项目后台遗留设置，同时保留了与 `pnpm-lock.yaml` 不一致的旧 `package-lock.json`。提交 `05c4281b71` 固定 `pnpm build`、`.next` 发布目录和 Node.js 版本，并移除旧 npm 锁文件后，Netlify 构建从 `error` 恢复为 `ready`。
2. 该次部署摘要同时显示 `No functions deployed`。Netlify 只是上传了原始 `.next` 文件，没有运行 Next.js 适配器，因此域名上的所有应用路由仍返回 `404`。提交 `00cb193d0f` 显式启用 `@netlify/plugin-nextjs` 后，部署生成服务端函数和路由规则，页面恢复正常。

Netlify 的文件配置会覆盖冲突的项目后台设置，因此上述修复可以在没有账号权限的情况下由仓库接管。[文件配置说明](https://docs.netlify.com/build/configure-builds/file-based-configuration/) Next.js Runtime 负责把 App Router、服务端渲染和相关平台能力转换为 Netlify 可运行的产物。[Next.js on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)

## 仓库中的部署约束

- [`netlify.toml`](../netlify.toml) 固定生产构建命令、发布目录、Node.js 版本和 Next.js Runtime。
- [`next.config.mjs`](../next.config.mjs) 只在 Docker 或普通 Node.js 自托管环境生成 standalone 产物；Netlify 和 Vercel 使用各自的托管 Runtime。
- 仓库只保留 `pnpm-lock.yaml`，并通过 `packageManager` 固定 pnpm 版本，避免不同包管理器解析出不同依赖树。
- [`scripts/__tests__/netlify-deployment.test.mjs`](../scripts/__tests__/netlify-deployment.test.mjs) 防止 Netlify 构建配置、Runtime 和包管理器约束被意外移除。

## GitHub 当前承担的职责

[`CI` 工作流](https://github.com/openimsdk/docs/blob/main/.github/workflows/ci.yml) 在 `main` 推送和 Pull Request 时执行安装、依赖审计、内容检查与生产构建。工作流本身不上传站点；生产发布由 Netlify 的 Git 集成在 `main` 更新后自动触发。

GitHub Pages 不是当前线上来源：

- GitHub Pages API 对该仓库返回 `404`，没有启用中的 Pages site。[GitHub Pages API](https://api.github.com/repos/openimsdk/docs/pages)
- 仓库仍保留 `gh-pages` 分支，但生产域名 DNS 指向 Netlify。
- `bak` 分支中的历史工作流曾把 Docusaurus 的 `build` 目录推送到 `gh-pages`，该流程不再用于当前站点。[历史工作流](https://github.com/openimsdk/docs/blob/bak/.github/workflows/build-ci.yaml)

## 其他保留的部署方式

### Vercel

仓库包含 [`vercel.json`](../vercel.json)，并兼容 Vercel 的 Next.js Runtime，但 `docs.openim.io` 当前未使用 Vercel。GitHub Deployments 中最后一批 Vercel Production 记录停留在 2024-04-25，属于旧仓库历史。[历史 Vercel deployment](https://api.github.com/repos/openimsdk/docs/deployments/1474301770)

### Standalone Node.js / Docker

[`next.config.mjs`](../next.config.mjs) 为非托管平台生成 standalone 输出，[`Dockerfile`](../Dockerfile) 可以运行该产物。该方式继续作为自托管能力保留，但不是生产域名当前的流量来源。

### AWS Amplify

旧 `bak` 分支保留 `amplify.yml`，当前 `main` 已无此配置，DNS 也未指向 Amplify。它属于历史方案。

## 生产验收结果

修复后已直接对 `https://docs.openim.io` 完成以下检查：

| 检查项                        | 结果                                   |
| ----------------------------- | -------------------------------------- |
| `/`、`/zh`                    | `200`，中英文首页正常                  |
| WASM SDK 中英文概览           | `200`                                  |
| Platform API 中英文概览       | `200`                                  |
| `/api/search`                 | `200`，返回按语言筛选的搜索结果        |
| `/robots.txt`、`/sitemap.xml` | `200`，内容类型正确                    |
| 不存在的地址                  | `404`                                  |
| WASM 旧地址                   | `308` 到对应的新地址，中英文路径均正常 |

后续每次调整构建配置时，至少应运行 `pnpm check`、Netlify 本地构建，并在 Production deploy 进入 `ready` 后复查上述关键路径。Netlify 仍保留历史 deploy，可用于必要时回滚。
