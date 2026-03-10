---
title: 'Domain Configuration'
sidebar_position: 7
---

# Domain and SSL Certificate Configuration

> This page only covers domain configuration related to OpenIMServer and ChatServer.

## 1. Prerequisites

- OpenIMServer and ChatServer are already running successfully.
- Nginx is installed with SSL support enabled.
- You have applied for a domain and SSL certificate (for example `im.yourhost.com`).
- Port `443` is open on the server.

If Nginx is not installed yet, install it first using the package manager of your distribution (for example on Debian/Ubuntu: `apt-get install -y nginx`).

## 2. Nginx Configuration Template

> Replace the domain, certificate paths, and service addresses with your real values. The comments below explain the purpose of each block; it is recommended to replace them line by line according to the comments.

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

## 3. MinIO Configuration

- Source deployment: modify `externalAddress` in `config/minio.yml`
- Docker deployment: modify `MINIO_EXTERNAL_ADDRESS` in `.env`

Example value:

```text
https://im.yourhost.com/im-minio-api
```

## 4. Reload Nginx

```bash
nginx -t
nginx -s reload
```

## 5. OpenIMClientSDK Initialization Parameters

```text
apiAddr: https://im.yourhost.com/api
wsAddr: wss://im.yourhost.com/msg_gateway
```

## 6. Gateway Path Mapping

| Path | Service |
| --- | --- |
| `/api/*` | OpenIMServer API (`10002`) |
| `/msg_gateway` | OpenIMServer WebSocket (`10001`) |
| `/chat/*` | ChatServer API (`10008`) |
| `/im-minio-api/*` | MinIO object storage (`10005`) |

## 7. Naming Consistency

- OpenIMSDK: the overall project name.
- OpenIMClientSDK: the client SDK.
- OpenIMServer: the IM core service.
- ChatServer: the business extension service, i.e. the APP Business Server.
- Accounts calling management REST APIs are uniformly referred to as APP Administrators.

> The current template only covers the common external entry points for OpenIMServer and ChatServer (APP Business Server). If you also need to expose APP Administrator APIs through the domain entry, add an additional `upstream` and `location` for `10009`.
