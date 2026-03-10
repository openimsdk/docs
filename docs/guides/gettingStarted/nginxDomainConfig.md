---
title: '域名配置'
sidebar_position: 7
---

# 域名及 SSL 证书配置

> 本页仅包含 OpenIMServer 与 ChatServer 相关域名配置。

## 1. 前置条件

- OpenIMServer、ChatServer 已成功启动。
- Nginx 已安装并启用 SSL 模块。
- 已申请域名和 SSL 证书（示例：`im.yourhost.com`）。
- 服务器已放行 `443` 端口。

如果系统尚未安装 Nginx，可先通过发行版包管理器安装（例如 Debian/Ubuntu：`apt-get install -y nginx`）。

## 2. Nginx 配置模板

> 请替换为你的实际域名、证书路径与服务地址。下面的注释说明了每一段配置的作用，建议直接按注释逐项替换。

```nginx
upstream msg_gateway {
    # OpenIMServer WebSocket gateway
    server 127.0.0.1:10001;
}

upstream im_api {
    # OpenIMServer REST API
    server 127.0.0.1:10002;
}

upstream im_chat_api {
    # ChatServer (APP business server) API
    server 127.0.0.1:10008;
}

upstream minio_s3 {
    # MinIO object storage
    server 127.0.0.1:10005;
}

server {
    # Unified external HTTPS entry
    listen 443 ssl;
    server_name im.yourhost.com;

    # SSL certificate and private key paths
    ssl_certificate /usr/local/nginx/conf/ssl/im.yourhost.com_bundle.pem;
    ssl_certificate_key /usr/local/nginx/conf/ssl/im.yourhost.com.key;

    location /msg_gateway {
        # OpenIMServer WebSocket reverse proxy; keep the Upgrade headers
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass http://msg_gateway/;
    }

    location ^~ /api/ {
        # OpenIMServer REST API reverse proxy
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Request-Api $scheme://$host/api;
        proxy_pass http://im_api/;
    }

    location ^~ /chat/ {
        # ChatServer (APP business server) API reverse proxy
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass http://im_chat_api/;
    }

    location ^~ /im-minio-api/ {
        # MinIO file access reverse proxy; keep it consistent with externalAddress
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 300;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        chunked_transfer_encoding off;
        proxy_pass http://minio_s3/;
    }
}
```

## 3. MinIO 配置

- 源码部署：修改 `config/minio.yml` 中 `externalAddress`
- Docker 部署：修改 `.env` 中 `MINIO_EXTERNAL_ADDRESS`

示例值：

```text
https://im.yourhost.com/im-minio-api
```

## 4. 重载 Nginx

```bash
nginx -t
nginx -s reload
```

## 5. OpenIMClientSDK 初始化参数

```text
apiAddr: https://im.yourhost.com/api
wsAddr: wss://im.yourhost.com/msg_gateway
```

## 6. 网关路径对照

| 路径 | 服务 |
| --- | --- |
| `/api/*` | OpenIMServer API（10002） |
| `/msg_gateway` | OpenIMServer WS（10001） |
| `/chat/*` | ChatServer API（10008） |
| `/im-minio-api/*` | MinIO 对象存储（10005） |

## 7. 命名统一

- OpenIMSDK：项目整体名称。
- OpenIMClientSDK：客户端 SDK。
- OpenIMServer：IM 基础服务。
- ChatServer：业务扩展服务，即 APP 业务服务器。
- 管理类 REST API 调用账号统一称为 APP 管理员。

> 当前模板仅覆盖 OpenIMServer 与 ChatServer（APP 业务服务器）的常用对外入口；如果你需要将 APP 管理员接口统一走域名入口，请额外为 `10009` 配置对应的 `upstream` 和 `location`。
