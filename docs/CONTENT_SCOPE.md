# 当前内容与发布范围

## 1. 范围原则

仓库采用 `current-only` 策略：公开 URL 只表达当前维护版本，不把版本号放在路径中，也不保留参考站的历史产品模型。允许的结构范围由 `data/structure/scope.json` 约束，实际公开入口由 `src/config/docs.ts`、路由状态和导航共同决定。

“仓库中有文件”“结构允许该平台”和“正式对外可见”是三个不同状态，不能混为一谈。

## 2. 正式公开范围

本轮对外发布的文档包括：

| 公开路径              | 内容                                      |
| --------------------- | ----------------------------------------- |
| `/`、`/zh`            | OpenIM Chat 文档首页                      |
| `/sdk/ios/**`         | iOS SDK                                   |
| `/sdk/flutter/**`     | Flutter SDK                               |
| `/sdk/wasm/**`        | JavaScript SDK WASM                       |
| `/sdk/electron/**`    | Electron SDK                              |
| `/sdk/miniprogram/**` | JavaScript SDK（兼容 Web 与小程序运行时） |
| `/platform-api/**`    | Platform API 与 Webhook                   |

中文页面在对应路径前增加 `/zh`。WASM、Electron 和小程序在首页归入“兼容 Web 的 SDK”，但各自保留独立文档和适用场景说明。

## 3. 暂不公开的上下文

以下平台可能已有结构或物理文件，但未进入本轮正式公开入口：

- Android：保留迁移内容，待完成正文和双语审核后发布。
- React Native：目前只有草稿入口，不作为完成能力发布。
- uni-app：目前只有草稿入口，不作为完成能力发布。

这些页面不得出现在首页 SDK 卡片、公开侧栏、Sitemap 或“已完成平台”描述中。

## 4. 已移除的历史范围

- UIKit 文档。
- SDK v3 历史页面。
- `/v3/**` Legacy Server API 路由。
- `/v4/**` 历史兼容 Reference 路由。
- `/sdk/v4/**` 与 `/platform-api/v3/**` 旧公开地址。
- 手写的空 SDK Reference 占位页。
- 不属于当前 OpenIM 发布范围的 Unity 脚手架。

已经完成的设计与迁移过程不作为当前维护文档保留；需要追溯时使用 Git 历史。当前实现以 `docs/ARCHITECTURE.md`、本文件和结构数据为准。

## 5. Reference 边界

SDK Reference 应由源码、类型声明或代码注释生成：

- iOS：DocC/Jazzy 或等价工具。
- Flutter：Dartdoc。
- JavaScript/WASM、Electron、小程序：TypeScript 声明或 TypeDoc。
- 后续平台按各自源码生态生成。

手写 MDX 负责概念、操作、流程、边界和完整示例。生成 Reference 与手写指南必须有清晰归属，避免同一 API 出现两个相互矛盾的事实源。

## 6. 增加平台或版本

新增公开平台时必须同时完成：

1. 明确正式支持状态、包名、版本和运行时范围。
2. 完成中文正文并逐页审核。
3. 逐页完成英文翻译与审核。
4. 更新 `scope.json`、`routes.json`、`navigation.json` 和 `src/config/docs.ts`。
5. 更新审核记录、搜索索引、Sitemap 与发布测试。
6. 运行 `pnpm check` 和 `pnpm build`。

历史版本若未来需要长期保留，应单独设计版本化信息架构；不得直接恢复已经移除的旧路径。
