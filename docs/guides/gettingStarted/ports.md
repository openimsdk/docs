---
title: '端口开放'
sidebar_position: 6
---

# 🔐 端口及防火墙

## 一、不使用域名及 SSL 证书

以下端口需要在服务器放行，其他端口不要对外。

| 模块 | 端口 | 说明 | 操作 |
| --- | --- | --- | --- |
| OpenIMServer | TCP:10001 | ws 协议，消息端口，用于 OpenIMClientSDK | 端口放行 |
| OpenIMServer | TCP:10002 | api 端口，如用户、好友、群组、消息等接口 | 端口放行 |
| OpenIMServer | TCP:10005 | MinIO 作为对象存储 | 端口放行 |
| ChatServer | TCP:10008 | 业务系统，如注册、登录等 | 端口放行 |
| ChatServer | TCP:10009 | 管理后台，如统计、封号等 | 端口放行 |

在客户端 SDK 中，初始化参数如下：

```text
apiAddr: http://your_server_ip:10002
wsAddr: ws://your_server_ip:10001
```

## 二、使用域名及 SSL 证书

以下端口需要在服务器放行，其他端口不要对外。

| 端口 | 说明 | 操作 |
| --- | --- | --- |
| TCP:443 | HTTPS 默认网络端口 | 端口放行 |

配置参考：[域名及 SSL 证书配置](./nginxDomainConfig)

请先完成域名解析，设置 IP 与域名绑定关系。

在客户端 SDK 中，初始化参数如下：

```text
apiAddr: https://your_domain.com/api
wsAddr: wss://your_domain.com/msg_gateway
```

> 说明：监控、前端等其他服务端口建议仅内网开放，按实际部署需求控制暴露范围。
