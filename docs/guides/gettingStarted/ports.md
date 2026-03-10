---
title: '端口开放'
sidebar_position: 6
---

# 🔐 端口及防火墙

---

## 📡 IM Server 端口

以下端口需在防火墙中放行，以确保 IMServer 正常通信。

| TCP 端口 | 说明 | 操作 ⚙️ |
| --- | --- | --- |
| **10001** | WebSocket 消息端口，用于客户端 SDK 通信 | ✅ 放行 |
| **10002** | API 端口，提供用户、好友、群组、消息等接口 | ✅ 放行 |
| **10005** | 当使用 MinIO 存储时需开启（IMServer 默认使用 MinIO） | ✅ 放行 |

---

## 💻 Web 前端与管理后台端口

| TCP 端口 | 说明 | 操作 ⚙️ |
| --- | --- | --- |
| **11001** | PC Web 端与管理后台前端资源端口 | ✅ 放行 |

---

## 📊 Grafana 监控端口

| TCP 端口 | 说明 | 操作 ⚙️ |
| --- | --- | --- |
| **13000** | Grafana 监控可视化端口 | ✅ 放行 |

---

> ⚠️ **提示：**
> 若服务器启用了防火墙（如 `ufw` 或 `firewalld`），请确保以上端口已放行。
> 例如在 Linux 上使用命令：
>
> ```bash
> sudo ufw allow 10001:10005/tcp
> sudo ufw allow 11001/tcp
> sudo ufw allow 13000/tcp
> sudo ufw reload
> ```
>

使用在线端口检测工具（适合公网服务器）

你也可以使用网页工具检测，例如：

https://portchecker.co/

https://www.yougetsignal.com/tools/open-ports/

在输入框中填入你的服务器公网 IP 和端口号，即可查看是否能被访问。
