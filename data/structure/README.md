# Structure data

- `scope.json`：当前内容范围约束。默认只允许当前 SDK v4 指南和 Server API v3。
- `docsets.json`：手写的文档集来源绑定。每个 `path` 唯一标识一个可追踪的目标目录，并绑定上游仓库、当前源码 ref、目标 tag 规则和 Agent 更新说明。
- `chat-pages.json`：已按当前范围裁剪的结构快照，用于追溯和批量重建。
- `report.json`：由 `npm run structure:report` 生成的结构统计。

运行时读取 `src/generated/routes.json` 与 `src/generated/navigation.json`。结构调整后应运行：

```bash
pnpm run content:sync
pnpm run structure:report
pnpm run content:check
```

上游自动更新提案依赖 `docsets.json` 中的这些字段：

- `path`：同步目标目录，也是 Docset 的唯一标识，例如 `content/docs/chat/sdk/v4/wasm`。
- `instructions`：提供给 Agent 的更新意图，说明如何根据上游源码维护该目录，但不参与同步工具的类型判断。
- `repoUrl`：上游 GitHub 仓库。
- `sourceRef`：当前目录对应的已同步 tag 或 commit；workflow 会在 PR 中把它更新到本次目标。若为 `null`，首次 diff 会把最新目标 ref 相对空 baseline 的全部内容作为初始导入。
- `targetTagPattern`：用于匹配和解析上游正式发布 tags 的正则，应按每个上游仓库的实际 release tag 格式配置。正则必须提供 `major`、`minor`、`patch` 命名捕获组；脚本会用这些 groups 排序选择最新 tag。可选的 `build` 和 `revision` groups 用于支持额外版本段排序。

GitHub Actions 每周或手动检查上游 Docsets，并由 Agent 在同一个 Proposal PR 中分别更新每个目标目录。路径限制、自动发现的 OpenAPI 文档 lint 和完整构建全部通过后，workflow 才会推进对应目录的 `sourceRef`。已有 `docsets-sync/proposal` PR 时会重新生成并更新该提案。手动运行支持指定路径和 dry run。
