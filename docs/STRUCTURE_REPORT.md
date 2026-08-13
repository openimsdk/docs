# 当前结构报告

- 页面总数：**983**
- 导航上下文：**10**
- 内容范围：**current-only**
- 生成时间：`2026-08-13T04:59:19.646Z`

## 当前保留范围

- 当前 Chat 首页、SDK 指南、Platform API 与 Webhook 结构。
- 公开 URL 使用 `/sdk/<platform>/**` 和 `/platform-api/**`，不包含默认版本段。
- 本报告统计结构内路由；实际公开的平台入口由 `src/config/docs.ts` 控制。
- UIKit、历史版本、旧兼容路由和手写 SDK Reference 占位页不属于当前结构。

SDK Reference 应从代码注释或类型定义生成。Platform API 的结构化定义可以来自 OpenAPI，正式正文仍需逐页人工审核。

## 按产品分支

| 分支           | 页面数 |  占比 |
| -------------- | -----: | ----: |
| `platform-api` |    194 | 19.7% |
| `sdk`          |    789 | 80.3% |

## 按页面模板

| 模板       | 页面数 |  占比 |
| ---------- | -----: | ----: |
| `api`      |    179 | 18.2% |
| `guide`    |    782 | 79.6% |
| `overview` |     22 |  2.2% |

## 按发布状态

| 状态        | 页面数 |  占比 |
| ----------- | -----: | ----: |
| `draft`     |      1 |  0.1% |
| `published` |    854 | 86.9% |
| `scaffold`  |    128 | 13.0% |

## 导航上下文

| 上下文键                | 显示名称                        | 页面数 |
| ----------------------- | ------------------------------- | -----: |
| `chat/platform-api`     | Platform API                    |    194 |
| `chat/sdk/ios`          | SDKs · iOS · v4                 |    164 |
| `chat/sdk/android`      | SDKs · Android · v4             |    128 |
| `chat/sdk/flutter`      | SDKs · Flutter · v4             |    158 |
| `chat/sdk/uniapp`       | SDKs · uni-app / uni-app x · v4 |    167 |
| `chat/sdk/wasm`         | SDKs · WASM · v4                |    165 |
| `chat/sdk/electron`     | SDKs · Electron · v4            |      4 |
| `chat/sdk/miniprogram`  | SDKs · Mini Program · v4        |      1 |
| `chat/sdk/react-native` | SDKs · React Native · v4        |      1 |
| `chat/sdk/common`       | SDKs · Common reference · v4    |      1 |

## 说明

- 本报告由 `pnpm structure:report` 同时写入 Markdown 与 JSON。
- 页面正文迁移进度使用 `pnpm content:status` 查看。
- `data/structure/scope.json` 是结构范围约束，不等同于公开发布清单。
- `published`、`draft` 和 `scaffold` 必须反映真实审核状态，生成本报告不会改变页面状态。
