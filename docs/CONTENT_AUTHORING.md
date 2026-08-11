# 内容编写手册

## 1. 写作前先确认页面归属

公开 URL 直接映射到 `content/docs/chat` 下的 MDX：

```text
/sdk/wasm/message/creating-messages/create-text-message
content/docs/chat/sdk/wasm/message/creating-messages/create-text-message.mdx

/zh/sdk/wasm/message/creating-messages/create-text-message
content/zh/docs/chat/sdk/wasm/message/creating-messages/create-text-message.mdx
```

修改正文前必须完整阅读当前页、相关页面、导航分组和真实 SDK/API 声明。可以用 `rg` 盘点，但不得用脚本、正则或批量替换生成、翻译或重写 MDX 正文。

## 2. Frontmatter

已有页面沿用当前 frontmatter。新增页至少包含：

```yaml
---
title: '用户可理解的任务名称'
description: '准确说明本页操作、对象和结果。'
product: 'sdk'
context: 'chat/sdk/wasm'
template: 'guide'
status: 'draft'
lastUpdated: 'YYYY-MM-DD'
version: 'v4'
platform: 'wasm'
sourcePath: '/sdk/wasm/section/page-slug'
---
```

| 字段          | 说明                                                 |
| ------------- | ---------------------------------------------------- |
| `title`       | 页面和正文标题；使用业务语义，不直接使用 API 方法名  |
| `description` | 搜索与 SEO 摘要，应具体说明结果和边界                |
| `product`     | `chat`、`sdk` 或 `platform-api`                      |
| `context`     | 导航上下文；结构调整时同步更新路由和导航             |
| `template`    | `landing`、`overview`、`guide` 或 `api`              |
| `status`      | `scaffold`、`draft`、`published` 或 `deprecated`     |
| `lastUpdated` | 实际完成本轮审核的日期                               |
| `version`     | SDK 或 Platform API 的内容基线元数据，不进入公开 URL |
| `platform`    | SDK 平台标识                                         |
| `sourcePath`  | 可追溯的结构来源或规范化路径，不在正文展示           |

`published` 只表示页面已经完成技术、文案和双语审核。占位页使用 `scaffold`，尚未完成的真实内容使用 `draft`。

## 3. 中文优先与人工翻译

中文正文是内容基线。推荐流程：

1. 完成中文页面并核对 API、参数、返回、事件和链接。
2. 更新中文页面的审核记录。
3. 逐页翻译英文，按英文技术文档习惯重写句式，不逐句机翻。
4. 对照代码示例、枚举值、商业版标识和内部链接，确认双语信息等价。
5. 更新英文页面的审核记录并运行本地化检查。

翻译时不得改变方法名、字段名、枚举成员、事件名或代码行为。中文页面新增重要边界后，英文页面必须在同一变更中同步。

## 4. SDK 页面按操作组织

一个页面通常说明一个明确任务或一个不可拆分的操作集合。正文没有强制章节模板，推荐顺序是：

1. 场景、前置条件和方法说明。
2. 参数说明（只有确有查阅价值时）。
3. 可运行的最小示例。
4. 返回结果、后续影响和相关事件。
5. 必要的限制、错误处理和相关页面。

以下规则必须遵守：

- 每个 API 都放在明确的操作标题下；不得在页面级参数表中混合多个 API。
- 三个及以上业务字段，或存在分页、筛选、枚举、单位、互斥关系和必填边界时，才使用“参数说明”表格。
- 无参数、单个简单值或一至两个明确字段，用正文紧贴示例说明。
- 统一使用“参数说明”和“返回结果”；内容一句话即可说清时，不为形式完整增加空章节。
- 不复制没有解释价值的完整 TypeScript 签名或 `Promise<WsResponse<...>>`。
- 消息创建 API 必须说明“只创建、不发送”；发送、查询和本地操作不能被写成同一阶段。
- 状态变更必须区分 Promise 成功、事件到达和重新查询校准。

## 5. 事件与状态合并

事件完整监听代码只出现在唯一归属页。非归属页说明影响并链接过去，不重复注册。所有 `OpenIM.on()` 示例都使用稳定函数引用，并展示对应的 `OpenIM.off()`。

常用合并标识：

- 会话：`conversationID`
- 会话分组：`conversationGroupID`
- 群组：`groupID`
- 群成员：`groupID:userID`
- 好友和黑名单：`userID`
- 消息：`clientMsgID`，必要时同时限定 `conversationID`
- 通话：`roomID`，参与者状态同时使用用户 ID

没有实现证据时，不写“调用后一定触发某事件”。可以说明客户端应综合调用结果、事件或重新查询校准状态。

## 6. WASM 基线

WASM 公开能力以 `@openim/wasm-client-sdk@3.8.3-patch.15.1` 为核对基线，但该包不作为站点运行时依赖。

- 除日志页外，不在正文和示例中传递或展开 `operationID`。
- 不记录已废弃方法，也不公开非分页的好友列表与全量会话列表接口。
- `setConversationDraft()` 作为独立草稿能力记录。
- `Login` 和 `UnUsedEvent` 不进入公开事件文档。
- 用户、关系链、会话、群组、消息和音视频通话使用 OpenIM 真实领域划分。

## 7. Platform API 页面

端点页以 OpenIM 当前 REST API 或固定 OpenAPI 声明为事实源。页面应说明：

- HTTP 方法、路径和认证方式。
- 真实的 path/query/header/body 参数。
- 成功响应中业务数据的结构和意义。
- 有证据的错误、权限、限制、幂等性和副作用。
- 必要的请求与响应示例。

OpenIM REST API 通常使用 `operationID` 做服务端请求追踪，并使用 `token` header 认证；不要写成 `Authorization: Bearer`。标准响应包含 `errCode`、`errMsg`、`errDlt` 和接口数据。没有参数或规则时可以省略相应小节，不使用大量 `Not applicable.` 填充页面。

页面分组可以参考成熟文档的信息架构，但资源、字段和能力必须来自 OpenIM。不得因为参考站存在对应栏目而编造 Channel、Application、Bot 等 OpenIM 不存在的模型。

## 8. 标题、导航和概览页

- 页面标题与左侧菜单使用用户任务或业务结果，例如“设置管理员”，不是 `setGroupMemberRoleLevel`。
- 一个页面只包含一个简单 API 时，不额外创建空泛概览页。
- 概览页应提供跨多个子主题的模型、流程、选择建议或共同边界；只重复子菜单链接的概览应删除或合并。
- 二级分组应帮助用户判断操作类别，不能只为了减少平铺而增加没有语义的层级。

## 9. 链接、图片和代码

内部链接使用当前绝对路径，不带 `.mdx`、`/docs/chat`、`/sdk/v4` 或 `/platform-api/v3`。图片放在 `public/images/docs/**`，使用准确 alt，且不得包含密钥、个人信息、内部域名或未授权素材。

代码块必须标注语言，使用真实包名和方法名，并包含理解调用所需的最小上下文。不要提交真实 token、管理员密钥或生产地址。

## 10. 审核与验证

每完成一页正文修改，立即更新对应 `data/structure/*-content-audit.json`。结构调整还需同步 API/事件所有权清单和测试。

提交前运行：

```bash
pnpm content:status
pnpm check
pnpm build
```

验收时确认：

- 标题、描述、导航和术语正式、准确且双语一致。
- 方法、参数、枚举、返回和事件来自真实实现。
- 代码示例与声明的平台和版本匹配。
- 商业版能力使用与 Platform API 一致的标识和官网入口。
- 内部链接全部使用当前公开地址。
- 页面状态和审核记录反映真实完成度。
- `pnpm audit --prod`、`pnpm check` 和 `pnpm build` 通过。
