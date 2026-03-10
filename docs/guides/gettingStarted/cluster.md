---
title: '集群部署'
sidebar_position: 5
---



# 同一内网下 OpenIMServer 源码集群部署指南

本文以 A、B 两台机器（内网 IP 分别为 `IP_A` 和 `IP_B`）为例，它们位于同一内网环境中，用于部署集群版 OpenIMServer 与 Nginx。
假设您已部署 Redis 集群、MongoDB 分片集群、Kafka 集群及 Etcd 集群，具体地址如下：
- **Redis 集群地址**: `redisAddr1`, `redisAddr2`, `redisAddr3`
- **MongoDB 集群地址**: `mongoAddr1`, `mongoAddr2`, `mongoAddr3`
- **Kafka 集群地址**: `kafkaAddr1`, `kafkaAddr2`, `kafkaAddr3`
- **Etcd 集群地址**: `etcdAddr1`, `etcdAddr2`, `etcdAddr3`

以上组件建议部署在 三台或更多节点 上，以确保高可用性与负载均衡

此外，MinIO 的内部服务访问地址配置为 `your_minio_internal_address`，外部访问地址配置为 `your_minio_external_address`。
A 和 B 两台机器以及组件集群内网互通，且A、B两台机器都有外网IP。

### 目录结构

1. [前提条件](#前提条件)
2. [克隆仓库](#1-克隆仓库)
3. [配置修改](#2-配置修改)
4. [配置 nginx](#3-配置-nginx)
5. [设置 DNS](#4-设置-dns)
6. [启动服务](#5-启动服务)

### 前提条件

确保以下组件已正确部署并运行：

- **Redis 集群**
- **MongoDB 分片集群**
- **Kafka 集群**
- **Etcd 集群**
- **MinIO 服务**

> 本文仅覆盖两台 OpenIMServer 业务节点与 Nginx 的部署，不包含 Redis/MongoDB/Kafka/Etcd 集群本身的搭建过程。若当前只有两台空机器，请先完成这些外部组件集群的部署后再继续本文步骤。

### 1. 克隆仓库

在两台机器（A 和 B）上分别执行以下命令以克隆 OpenIMServer 仓库，并切到 GitHub Releases 页面绿色 **Latest** 对应的**最新正式发布 tag**：

```bash
git clone https://github.com/openimsdk/open-im-server
cd open-im-server
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
git checkout "$LATEST_STABLE_TAG"
```

> 这里的 latest 指 GitHub Releases 页面绿色 Latest 的**正式发布版**，不包含 alpha/beta/rc 等预发布版本。建议两台机器使用同一个正式版 tag；如需固定版本（例如 `v3.8.3-patch.12`），请在两台机器都执行 `git checkout v3.8.3-patch.12`。

### 2. 配置修改

在机器 A 和 B 上，按照以下步骤修改配置文件，确保各组件正确连接。所有地址字段均采用单行列表格式 `address: [addr1, addr2, addr3]`。

#### 2.1 Kafka 配置

编辑 `open-im-server/config/kafka.yml` 文件，设置 `address` 字段为 Kafka 集群地址列表：

```yaml
address: [kafkaAddr1, kafkaAddr2, kafkaAddr3]
```

#### 2.2 MinIO 配置

编辑 `open-im-server/config/minio.yml` 文件，设置 `internalAddress` 和 `externalAddress`：

```yaml
internalAddress: your_minio_internal_address
externalAddress: your_minio_external_address
```

#### 2.3 MongoDB 配置

编辑 `open-im-server/config/mongodb.yml` 文件，设置 `address` 字段为 MongoDB 集群地址列表：

```yaml
address: [mongoAddr1, mongoAddr2, mongoAddr3]
```

#### 2.4 Etcd 配置

编辑 `open-im-server/config/discovery.yml` 文件，设置 `etcd.address` 字段为 Etcd 集群地址列表：

```yaml
etcd:
  address: [etcdAddr1, etcdAddr2, etcdAddr3]
```

#### 2.5 Redis 配置

编辑 `open-im-server/config/redis.yml` 文件，设置 `address` 字段为 Redis 集群地址列表，并启用集群模式：

```yaml
address: [redisAddr1, redisAddr2, redisAddr3]
clusterMode: true
```

### 3. 配置 nginx

在机器 A 、B上部署 `nginx`，参考以下配置。请确保替换为您的实际域名、SSL 证书路径和 SSL 密钥路径。

> 🚀 **提示**: 确保替换成您的实际域名、SSL 证书路径和 SSL 密钥。

```nginx
events {
    worker_connections 1024;
}

http {
    # open-im-server
    upstream msg_gateway {
        server IP_A:10001;
        server IP_B:10001;
    }

    upstream im_api {
        # OpenIMServer API 地址，可根据部署情况指定多个
        server IP_A:10002;
        server IP_B:10002;
    }

    server {
        listen       443 ssl;
        server_name  yourhost.com;  # 替换为您的域名

        ssl_certificate     /usr/local/nginx/conf/ssl/your_host_bundle.pem;  # 替换为您的证书路径
        ssl_certificate_key /usr/local/nginx/conf/ssl/your_host.key;        # 替换为您的证书密钥路径

        location ^~ /api/ {
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_set_header X-Request-Api $scheme://$host/api;
            proxy_pass http://im_api/;
        }

        location /msg_gateway/ {
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_pass http://msg_gateway/;
        }
    }

    # 可选: HTTP 重定向到 HTTPS
    server {
        listen 80;
        server_name yourhost.com;  # 替换为您的域名

        return 301 https://$host$request_uri;
    }
}
```

将此配置添加到 `nginx` 的配置文件中， 并reload使配置生效：

### 4. 设置 DNS

将您的域名 `yourhost.com` 指向机器A、B的外网 IP 地址。

### 5. 启动服务

在两台机器（A 和 B）的 `open-im-server` 目录下执行以下命令以编译和启动服务：

中国境内建议设置go代理
```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

#### 5.1 编译

首次在每台机器执行前，建议先运行：

```bash
bash bootstrap.sh
```

该步骤会安装 `mage`。如果你的机器已预装 `mage`，可跳过。

```bash
mage
```

#### 5.2 启动服务

```bash
mage start
```


## **常见问题/注意事项**

1. 部署`kafka`时，需要修改`kafka`广播的端口。如果使用`open-im-server`中的`docker-compose.yml`部署，修改`service.kafka.environment.KAFKA_CFG_ADVERTISED_LISTENERS`中的`EXTERNAL`为访问`kafka`组件的地址。其他部署方式请自行修改。
   例如：`KAFKA_CFG_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,EXTERNAL://192.168.2.36:19094`。
2. 多台机器部署需要保证时钟一致，服务才可正常运行。如`token`的签发允许各个机器的时钟误差在`5s`以内。
