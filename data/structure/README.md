# Structure data

该目录保存文档结构、同步来源和人工审核记录，不保存最终正文。

- `scope.json`：允许进入当前结构的产品、平台、版本和模板。
- `docsets.json`：上游仓库与本地目标目录的同步绑定。
- `chat-pages.json`：当前范围的结构快照，与活动路由清单保持一致；已排除平台不得继续留在其中。
- `report.json`：由 `pnpm structure:report` 生成的统计报告。
- `*-content-audit.json`：逐页人工审核记录。
- `wasm-api-ownership.json`：WASM API 与事件的正文归属。

运行时主要读取 `src/generated/routes.json` 与 `src/generated/navigation.json`。结构调整后运行：

```bash
pnpm content:sync
pnpm structure:report
pnpm content:check
pnpm check
```

## Docset 字段

- `path`：同步目标目录，也是 Docset 唯一标识，例如 `content/docs/chat/sdk/wasm`。
- `instructions`：说明如何根据上游源码维护该目录，不参与类型判断。
- `repoUrl`：上游 GitHub 仓库。
- `sourceRef`：当前已同步的 tag 或 commit；为 `null` 时表示尚未建立基线。
- `targetTagPattern`：匹配正式发布 tag 的正则，必须提供 `major`、`minor`、`patch` 命名捕获组；可选 `build` 和 `revision`。

同步工作流只产生更新提案。正文变更仍必须逐页人工阅读、修改并更新审核记录；不得把生成结果视为发布完成。
