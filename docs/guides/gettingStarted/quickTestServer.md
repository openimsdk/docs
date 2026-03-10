---
title: '快速验证'
sidebar_position: 9
---

import Image3 from './assets/pc-web.png';

## 📌 一、部署服务端

请参考 [docker部署](./dockerCompose) 或 [源码部署](./imSourceCodeDeployment) 来进行部署。

---

## 📌 二、开放端口

参考 [端口和防火墙](./ports)

## 📌 三、PC Web验证

:::tip
在浏览器中输入 `http://your_server_ip:11001` 来访问 PC Web。`your_server_ip` 为部署前端服务的服务器 IP 地址。
:::

<img src={Image3} width="700" alt="PC Web Interface" />

## 📌 四、服务进程验证

确认 OpenIMServer 与 ChatServer 进程状态正常。

```bash
docker ps | grep -E 'openim-server|openim-chat'
```

如果是源码部署，可执行：

```bash
mage check
```

## 📌 五、域名与网关验证

使用域名和 SSL 时，建议直接调用实际接口确认 OpenIMServer 与 ChatServer 网关路由可达。

```bash
curl -sS -X POST "https://your_domain/api/auth/get_admin_token" \
  -H "Content-Type: application/json" \
  -H "operationID: verify-openim" \
  -d '{"secret":"your_openim_secret","userID":"imAdmin"}'
```

```bash
curl -sS -X POST "https://your_domain/chat/application/latest_version" \
  -H "Content-Type: application/json" \
  -d '{}'
```

> 如果接口返回业务错误但已返回 JSON，通常也表示网关反向代理链路已通。

如果要验证 WebSocket 网关，可使用任意 ws 客户端测试：

```text
wss://your_domain/msg_gateway
```

> 建议在生产环境统一通过 `443` 端口访问，OpenIMClientSDK 初始化时使用：
> - `apiAddr`: `https://your_domain/api`
> - `wsAddr`: `wss://your_domain/msg_gateway`
