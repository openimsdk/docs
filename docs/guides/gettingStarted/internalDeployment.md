---
title: '内网部署'
sidebar_position: 4
---
## 📌 内网部署指南

本指南将指导您在一台纯内网机器上部署 OpenIMSDK 相关服务。

### **Docker部署**

1. 使用一台连接到互联网的机器，克隆仓库：

   ```sh
   git clone https://github.com/openimsdk/openim-docker
   ```

2. 运行`docker compose up -d`以拉取镜像。

3. 保存相应的镜像。命令如下：

   ```sh
   docker save -o image-name.tar image-name:tag
   ```

   例如，需要保存`openim-server`镜像，命令应为：

   ```sh
   docker save -o openim-server.tar openim/openim-server:release-v3.8.1
   ```

   保存`mongo`镜像，命令应为：

   ```sh
   docker save -o mongo.tar mongo:7.0
   ```

   可以使用`docker images`查看拉取的镜像信息，或者在`.env`文件中确认镜像的版本信息。

   所有需要保存的镜像为：

   - `mongo:7.0`
   - `redis:7.0.0`
   - `bitnami/kafka:3.5.1`
   - `minio/minio:RELEASE.2024-01-11T07-46-16Z`
   - `quay.io/coreos/etcd:v3.5.13`
   - `openim/openim-web-front:release-v3.8.1`
   - `openim/openim-admin-front:release-v1.8.3`
   - `openim/openim-server:release-v3.8.2`
   - `openim/openim-chat:v1.8.2`

   以下为监控告警组件镜像，可根据需求选择性部署：

   - `prom/prometheus:v2.51.2`
   - `prom/alertmanager:v0.27.0`
   - `grafana/grafana:11.0.1`
   - `prom/node-exporter:v1.7.0`

4. 通过内网或者物理介质将**镜像文件**和**docker仓库文件**拷贝到部署机器上。

5. 导入镜像到`docker`中，命令为：
   ```bash
   docker load -i image-name.tar
   ```

   例如`openim-server`镜像导入命令为：

   ```sh
   docker load -i openim-server.tar
   ```

6. 在仓库目录下运行：
   ```sh
   docker compose up -d
   ```

   需要启动监控组件则运行：
   ```sh
   docker compose --profile m up -d
   ```

### **源码部署**

1. 使用一台连接到互联网的机器，克隆 OpenIMServer 仓库，建议切换到 `release-v3.8.2` 分支：

   ```sh
   git clone https://github.com/openimsdk/open-im-server
   ```

2. 克隆 ChatServer 仓库，建议切换到 `release-v1.8.3` 分支
   ```bash
   git clone https://github.com/openimsdk/chat
   ```

3. 参考[docker部署](#docker部署)步骤，保存镜像，区别为不需要`openim/openim-server:release-v3.8.2`和`openim/openim-chat:v1.8.2`。

4. 通过内网或者物理介质将**镜像文件**、**OpenIMServer 仓库文件**、**ChatServer 仓库文件**拷贝到部署机器上。

5. 导入镜像到`docker`中，命令为：

   ```bash
   docker load -i image-name.tar
   ```

   例如`mongo`镜像导入命令为：

   ```sh
   docker load -i mongo.tar
   ```

6. 在 OpenIMServer 目录下依次运行：
   ```bash
   docker compose up -d  # 如需启用监控组件则为 docker compose --profile m up -d
   mage
   mage start
   ```

7. 在 ChatServer 目录下运行：
   ```bash
   mage
   mage start
   ```

   
