---
title: 'Cluster Deployment'
sidebar_position: 5
---



# OpenIMServer Source Code Cluster Deployment Guide on the Same Internal Network

This guide uses machines A and B (with internal IPs `IP_A` and `IP_B`) as examples. They are located in the same internal network and are used to deploy clustered OpenIMServer and Nginx.
Assume that you have already deployed a Redis cluster, MongoDB sharded cluster, Kafka cluster, and Etcd cluster with the following addresses:
- **Redis cluster addresses**: `redisAddr1`, `redisAddr2`, `redisAddr3`
- **MongoDB cluster addresses**: `mongoAddr1`, `mongoAddr2`, `mongoAddr3`
- **Kafka cluster addresses**: `kafkaAddr1`, `kafkaAddr2`, `kafkaAddr3`
- **Etcd cluster addresses**: `etcdAddr1`, `etcdAddr2`, `etcdAddr3`

It is recommended to deploy these components on three or more nodes to ensure high availability and load balancing.

In addition, MinIO is configured with `your_minio_internal_address` for internal access and `your_minio_external_address` for external access.
Machines A and B, as well as the component clusters, must be reachable over the internal network, and both A and B must have public IPs.

### Table of Contents

1. [Prerequisites](#prerequisites)
2. [Clone the Repository](#1-clone-the-repository)
3. [Modify Configuration](#2-modify-configuration)
4. [Configure Nginx](#3-configure-nginx)
5. [Configure DNS](#4-configure-dns)
6. [Start Services](#5-start-services)

### Prerequisites

Ensure that the following components are already deployed and running correctly:

- **Redis cluster**
- **MongoDB sharded cluster**
- **Kafka cluster**
- **Etcd cluster**
- **MinIO service**

> This document only covers deploying two OpenIMServer business nodes and Nginx. It does not include the deployment of the Redis / MongoDB / Kafka / Etcd clusters themselves. If you currently only have two empty machines, complete those external component clusters first before continuing.

### 1. Clone the Repository

Run the following commands on both machines (A and B) to clone the OpenIMServer repository and switch to the latest official release tag marked with the green **Latest** badge on GitHub Releases:

```bash
git clone https://github.com/openimsdk/open-im-server
cd open-im-server
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
git checkout "$LATEST_STABLE_TAG"
```

> Here, `latest` means the latest official release marked with the green **Latest** badge on GitHub Releases. It does not include alpha, beta, rc, or other pre-releases. It is recommended that both machines use the same stable tag. If you need a fixed version such as `v3.8.3-patch.12`, run `git checkout v3.8.3-patch.12` on both machines.

### 2. Modify Configuration

On machines A and B, modify the configuration files as follows so that all components connect correctly. All address fields use the single-line list format `address: [addr1, addr2, addr3]`.

#### 2.1 Kafka Configuration

Edit `open-im-server/config/kafka.yml` and set the `address` field to the Kafka cluster address list:

```yaml
address: [kafkaAddr1, kafkaAddr2, kafkaAddr3]
```

#### 2.2 MinIO Configuration

Edit `open-im-server/config/minio.yml` and set `internalAddress` and `externalAddress`:

```yaml
internalAddress: your_minio_internal_address
externalAddress: your_minio_external_address
```

#### 2.3 MongoDB Configuration

Edit `open-im-server/config/mongodb.yml` and set the `address` field to the MongoDB cluster address list:

```yaml
address: [mongoAddr1, mongoAddr2, mongoAddr3]
```

#### 2.4 Etcd Configuration

Edit `open-im-server/config/discovery.yml` and set `etcd.address` to the Etcd cluster address list:

```yaml
etcd:
  address: [etcdAddr1, etcdAddr2, etcdAddr3]
```

#### 2.5 Redis Configuration

Edit `open-im-server/config/redis.yml`, set `address` to the Redis cluster address list, and enable cluster mode:

```yaml
address: [redisAddr1, redisAddr2, redisAddr3]
clusterMode: true
```

### 3. Configure Nginx

Deploy `nginx` on machines A and B using the following configuration. Make sure to replace it with your actual domain, SSL certificate path, and SSL private key path.

> 🚀 **Tip**: Be sure to replace the example domain, SSL certificate path, and SSL key path with your actual values.

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
        # OpenIMServer API addresses; add more upstreams if needed
        server IP_A:10002;
        server IP_B:10002;
    }

    server {
        listen       443 ssl;
        server_name  yourhost.com;  # Replace with your domain

        ssl_certificate     /usr/local/nginx/conf/ssl/your_host_bundle.pem;  # Replace with your certificate path
        ssl_certificate_key /usr/local/nginx/conf/ssl/your_host.key;        # Replace with your private key path

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

    # Optional: redirect HTTP to HTTPS
    server {
        listen 80;
        server_name yourhost.com;  # Replace with your domain

        return 301 https://$host$request_uri;
    }
}
```

Add this configuration to the Nginx configuration file and reload it to apply the changes:

### 4. Configure DNS

Point your domain `yourhost.com` to the public IP addresses of machines A and B.

### 5. Start Services

Run the following commands in the `open-im-server` directory on both machines (A and B) to build and start the services:

For users in Mainland China, setting a Go proxy is recommended:
```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

#### 5.1 Build

Before the first execution on each machine, it is recommended to run:

```bash
bash bootstrap.sh
```

This step installs `mage`. If `mage` is already installed on your machine, you can skip it.

```bash
mage
```

#### 5.2 Start Services

```bash
mage start
```


## **FAQ / Notes**

1. When deploying `kafka`, you need to modify the Kafka advertised port. If you use `docker-compose.yml` from `open-im-server`, change the `EXTERNAL` listener in `service.kafka.environment.KAFKA_CFG_ADVERTISED_LISTENERS` to the address used to access the `kafka` component. If you use another deployment method, adjust it accordingly.
   For example: `KAFKA_CFG_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,EXTERNAL://192.168.2.36:19094`.
2. In multi-machine deployment, the clocks of all machines must stay synchronized, or services may fail. For example, token issuing only tolerates clock drift within `5s`.
