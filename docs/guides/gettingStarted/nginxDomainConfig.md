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

## 2. Nginx 配置模板

> 请替换为你的实际域名、证书路径与服务地址。

```nginx
upstream msg_gateway {
    # OpenIMServer message gateway
    server 127.0.0.1:10001;
}

upstream im_api {
    # OpenIMServer API
    server 127.0.0.1:10002;
}

upstream im_chat_api {
    # ChatServer API
    server 127.0.0.1:10008;
}

upstream minio_s3 {
    # MinIO object storage
    server 127.0.0.1:10005;
}

server {
    listen 443;
    server_name im.yourhost.com;

    ssl on;
    ssl_certificate /usr/local/nginx/conf/ssh/im.yourhost.com_bundle.pem;
    ssl_certificate_key /usr/local/nginx/conf/ssh/im.yourhost.com.key;

    location /msg_gateway {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass http://msg_gateway/;
    }

    location ^~/api/ {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Request-Api $scheme://$host/api;
        proxy_pass http://im_api/;
    }

    location ^~/chat/ {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass http://im_chat_api/;
    }

    location ^~/im-minio-api/ {
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
- ChatServer：业务扩展服务。
- 管理类 REST API 调用账号统一称为 APP 管理员。
