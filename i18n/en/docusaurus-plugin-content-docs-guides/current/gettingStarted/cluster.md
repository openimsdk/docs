---
title: 'Cluster Deployment'
sidebar_position: 5
---



# IMServer Source Code Cluster Deployment Guide (Same LAN)

This guide uses machines A and B (with internal IPs `IP_A` and `IP_B`) as an example. They are located in the same LAN environment, used for deploying the clustered IM Server and Nginx.
Assuming you have already deployed Redis cluster, MongoDB sharded cluster, Kafka cluster, and Etcd cluster at the following addresses:
- **Redis Cluster**: `redisAddr1`, `redisAddr2`, `redisAddr3`
- **MongoDB Cluster**: `mongoAddr1`, `mongoAddr2`, `mongoAddr3`
- **Kafka Cluster**: `kafkaAddr1`, `kafkaAddr2`, `kafkaAddr3`
- **Etcd Cluster**: `etcdAddr1`, `etcdAddr2`, `etcdAddr3`

These components should be deployed on three or more nodes to ensure high availability and load balancing.

Additionally, MinIO's internal access address is configured as `your_minio_internal_address`, and the external access address is `your_minio_external_address`.
Machines A and B, as well as the component clusters, have internal network connectivity. Both machines A and B also have public IPs.

### Table of Contents

1. [Prerequisites](#prerequisites)
2. [Clone Repository](#1-clone-repository)
3. [Modify Configuration](#2-modify-configuration)
4. [Configure Nginx](#3-configure-nginx)
5. [Set Up DNS](#4-set-up-dns)
6. [Start Services](#5-start-services)

### Prerequisites

Ensure the following components are properly deployed and running:

- **Redis Cluster**
- **MongoDB Sharded Cluster**
- **Kafka Cluster**
- **Etcd Cluster**
- **MinIO Service**

### 1. Clone Repository

On both machines (A and B), run the following commands to clone the `open-im-server` repository:

```bash
git clone https://github.com/openimsdk/open-im-server
cd open-im-server
```

### 2. Modify Configuration

On both machines A and B, modify the configuration files as follows to ensure all components are correctly connected. All address fields use the inline list format `address: [addr1, addr2, addr3]`.

#### 2.1 Kafka Configuration

Edit the `open-im-server/config/kafka.yml` file, setting the `address` field to the Kafka cluster address list:

```yaml
address: [kafkaAddr1, kafkaAddr2, kafkaAddr3]
```

#### 2.2 MinIO Configuration

Edit the `open-im-server/config/minio.yml` file, setting `internalAddress` and `externalAddress`:

```yaml
internalAddress: your_minio_internal_address
externalAddress: your_minio_external_address
```

#### 2.3 MongoDB Configuration

Edit the `open-im-server/config/mongodb.yml` file, setting the `address` field to the MongoDB cluster address list:

```yaml
address: [mongoAddr1, mongoAddr2, mongoAddr3]
```

#### 2.4 Etcd Configuration

Edit the `open-im-server/config/discovery.yml` file, setting the `etcd.address` field to the Etcd cluster address list:

```yaml
etcd:
  address: [etcdAddr1, etcdAddr2, etcdAddr3]
```

#### 2.5 Redis Configuration

Edit the `open-im-server/config/redis.yml` file, setting the `address` field to the Redis cluster address list and enabling cluster mode:

```yaml
address: [redisAddr1, redisAddr2, redisAddr3]
clusterMode: true
```

### 3. Configure Nginx

Deploy `nginx` on both machines A and B using the following configuration. Make sure to replace with your actual domain name, SSL certificate path, and SSL key path.

> 🚀 **Tip**: Make sure to replace with your actual domain name, SSL certificate path, and SSL key.

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
        # IM API server addresses — specify multiple based on your deployment
        server IP_A:10002;
        server IP_B:10002;
    }

    server {
        listen       443 ssl;
        server_name  yourhost.com;  # Replace with your domain

        ssl_certificate     /usr/local/nginx/conf/ssl/your_host_bundle.pem;  # Replace with your certificate path
        ssl_certificate_key /usr/local/nginx/conf/ssl/your_host.key;        # Replace with your certificate key path

        location ^~/api/ {
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

    # Optional: HTTP to HTTPS redirect
    server {
        listen 80;
        server_name yourhost.com;  # Replace with your domain

        return 301 https://$host$request_uri;
    }
}
```

Add this configuration to your `nginx` config file and reload to apply:

### 4. Set Up DNS

Point your domain `yourhost.com` to the public IP addresses of machines A and B.

### 5. Start Services

On both machines (A and B), run the following commands in the `open-im-server` directory to build and start the services:

For users in China, it is recommended to set a Go proxy:
```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

#### 5.1 Build
```bash
mage
```

#### 5.2 Start Services

```bash
mage start
```


## **FAQ / Important Notes**

1. When deploying `Kafka`, you need to modify the Kafka advertised port. If using the `docker-compose.yml` from `open-im-server`, modify `service.kafka.environment.KAFKA_CFG_ADVERTISED_LISTENERS` where `EXTERNAL` should be set to the address for accessing the Kafka component. For other deployment methods, modify accordingly.
   Example: `KAFKA_CFG_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,EXTERNAL://192.168.2.36:19094`.
2. Multi-machine deployments require clock synchronization across machines for services to run correctly. For example, the `token` signing process allows a maximum clock skew of `5 seconds` between machines.
