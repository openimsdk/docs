---
title: '离线部署指南'
sidebar_position: 7
---



## open-im-server 离线部署指南

本指南将指导您在一台没有连接到互联网的机器上部署`open-im-server`。

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
   - `prom/alertmanager:v0.27.0`
   - `grafana/grafana:11.0.1`
   - `quay.io/coreos/etcd:v3.5.13`
   - `redis`

