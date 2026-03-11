---
title: '版本说明'
hide_title: true
sidebar_position: 5
---

# 版本说明

## 一、名词约定

- **OpenIMSDK**：项目统称，包含 OpenIMClientSDK 与 OpenIMServer。
- **OpenIMClientSDK**：客户端 SDK。
- **OpenIMServer**：IM 基础服务端。
- **ChatServer**：业务扩展服务端，文档中不再使用 `Chat` 作为独立产品名称。
- **APP 管理员**：调用管理类接口（如 `10009`）的后台管理角色。

## 二、版本以 GitHub Releases 为准

生产环境请以 GitHub 上发布的**最新稳定版**为准，也就是 GitHub Releases 页面绿色 **Latest** 标记对应的**最新正式发布版**。

> 不要使用带有 `Pre-release` 标记的版本，也不要在生产环境直接使用 `alpha`、`beta`、`rc` 或 `main`。

| 组件 | 版本来源 |
| --- | --- |
| OpenIMServer | 以 [OpenIMServer Releases](https://github.com/openimsdk/open-im-server/releases) 页面绿色 **Latest** 对应的正式发布版为准 |
| ChatServer | 以 [ChatServer Releases](https://github.com/openimsdk/chat/releases) 页面绿色 **Latest** 对应的正式发布版为准 |
| OpenIMClientSDK | 以你实际集成的客户端 SDK 仓库 Releases 页面绿色 **Latest** 对应的正式发布版为准 |

## 三、生产环境版本选择建议

- 建议始终使用明确的稳定版 `tag`，不要只依赖分支名或手动猜测版本顺序。
- 如需问题复现、灰度回滚或多环境统一，请固定到明确的正式版 `tag`。
- OpenIMServer 与 ChatServer 一起部署时，建议按发布说明选择相互对应的正式版 `tag`。
- OpenIMClientSDK 接入时，建议同时核对目标服务端版本范围与对应 release note，避免跨版本能力差异。

## 四、如何查看当前最新稳定版

可以直接通过 GitHub 的 `releases/latest` 跳转获取当前正式版 `tag`：

```bash
SERVER_LATEST_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
echo "$SERVER_LATEST_TAG"

CHAT_LATEST_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/chat/releases/latest)")
echo "$CHAT_LATEST_TAG"
```

## 五、到哪里看发布说明

- OpenIMServer：查看 [OpenIMServer Releases](https://github.com/openimsdk/open-im-server/releases)
- ChatServer：查看 [ChatServer Releases](https://github.com/openimsdk/chat/releases)
- OpenIMClientSDK：查看你实际使用的客户端 SDK 仓库 Releases 页面与对应 release note

如果你需要长期维护某个版本，请把所用 `tag` 明确记录在部署文档、构建脚本和回滚方案中。
