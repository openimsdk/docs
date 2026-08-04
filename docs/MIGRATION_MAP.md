# 内容迁移状态与维护映射

## 1. 当前结论

早期结构迁移已经结束，本文件不再作为未来波次计划，而用于说明哪些内容已进入正式发布、哪些仍处于待完成状态。

信息架构可以参考成熟文档的阅读路径，但 OpenIM 的能力、API、参数、事件、对象模型和术语必须来自 OpenIM 实现。不存在的能力应删除、合并或明确替代方式，不为保持页面数量而虚构内容。

## 2. 产品映射

| 路由分支                       | 事实来源                                            | 当前处理             |
| ------------------------------ | --------------------------------------------------- | -------------------- |
| `/`、`/zh`                     | OpenIM 产品与 SDK 支持范围                          | 正式发布入口         |
| `/sdk/ios/**`                  | OpenIM iOS SDK                                      | 已进入公开导航       |
| `/sdk/flutter/**`              | OpenIM Flutter SDK                                  | 已进入公开导航       |
| `/sdk/wasm/**`                 | `@openim/wasm-client-sdk@3.8.5-hotfix.0` 与固定声明 | 已进入公开导航       |
| `/sdk/electron/**`             | OpenIM Electron SDK                                 | 已进入公开导航       |
| `/sdk/miniprogram/**`          | JavaScript SDK 的小程序运行时实现                   | 已进入公开导航       |
| `/platform-api/**`             | OpenIM REST API、Webhook 与固定 OpenAPI             | 已进入公开导航       |
| Android、React Native、uni-app | 对应 SDK 源码与声明                                 | 保留但不对外宣称完成 |
| Unity                          | 历史内容                                            | 排除在当前 scope     |

## 3. 页面决策规则

维护或新增页面时依次判断：

1. OpenIM 是否存在该能力，证据来自哪个固定版本或提交。
2. 该能力属于哪个业务领域和操作，是否需要独立页面。
3. 页面标题、导航名称和分组是否帮助用户完成任务。
4. 参数、返回和事件是否各自归入正确操作。
5. 中文与英文是否都已完成逐页审核。
6. 审核记录、所有权清单和测试是否同步。

`sourcePath` 只用于结构追踪，不在页面 UI 中显示，也不能作为能力真实性的证据。

## 4. 发布状态

Frontmatter 的 `status` 是页面状态来源：

- `published`：正文、示例、链接和双语内容均已审核。
- `draft`：真实内容仍在编写或等待审核，不应作为正式能力对外展示。
- `scaffold`：占位结构，没有可发布正文。
- `deprecated`：暂时保留且已说明替代路径。

检查状态：

```bash
pnpm content:status
pnpm content:status -- --status draft --limit 100
pnpm content:status -- --status scaffold --limit 100
```

公开入口、导航、搜索和 Sitemap 必须与状态一致。不能仅因为路由可以访问，就把草稿或脚手架计入已发布文档。

## 5. 历史材料

`docs/superpowers/plans` 与 `docs/superpowers/specs` 保存早期方案和实施记录。它们可能包含旧页面数量、旧版本路径或已放弃的 Sendbird 映射，只用于追溯，不应作为当前开发指南。当前事实以根目录说明、`docs/ARCHITECTURE.md`、`docs/CONTENT_SCOPE.md` 和生成结构为准。
