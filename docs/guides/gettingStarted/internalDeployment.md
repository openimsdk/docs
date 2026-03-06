---
title: '内网部署'
sidebar_position: 4
---
## 📌 内网部署指南

本指南将指导您在一台纯内网机器上部署 OpenIMSDK 相关服务。

## 版本策略（重要）

- 默认建议：在联网机器上拉取仓库后，切换到 **latest tag** 再做离线打包。
- 如需固定版本（例如 `v3.8.3-patch.12`）：将 `git checkout "$LATEST_TAG"` 替换为 `git checkout v3.8.3-patch.12`。
- 强烈建议：OpenIMServer、ChatServer、openim-docker 使用同一批次发布版本，避免跨版本组合。

### **Docker部署**

1. 使用一台连接到互联网的机器，克隆仓库并切换到 latest tag：

   ```sh
   git clone https://github.com/openimsdk/openim-docker && cd openim-docker
   git fetch --tags
   LATEST_TAG=$(git tag --sort=-v:refname | head -n 1)
   git checkout "$LATEST_TAG"
   echo "using openim-docker tag: $LATEST_TAG"
   ```

2. 运行 `docker compose up -d` 拉取镜像并生成本地镜像清单。

3. 导出当前 compose 实际使用镜像（避免手工维护版本号）：

   ```sh
   docker compose config --images | sort -u > images.txt
   ```

4. 批量保存镜像：

   ```sh
   while read -r image; do
     docker save -o "$(echo "$image" | tr '/:' '_').tar" "$image"
   done < images.txt
   ```

5. 通过内网或物理介质将**镜像文件**和**openim-docker 仓库文件**拷贝到部署机器。

6. 在部署机器导入镜像：

   ```bash
   docker load -i image-name.tar
   ```

7. 在仓库目录下运行：

   ```sh
   docker compose up -d
   ```

   需要启动监控组件则运行：
   ```sh
   docker compose --profile m up -d
   ```

### **源码部署**

1. 使用一台连接到互联网的机器，克隆 OpenIMServer 并切换到 latest tag：

   ```sh
   git clone https://github.com/openimsdk/open-im-server && cd open-im-server
   git fetch --tags
   LATEST_TAG=$(git tag --sort=-v:refname | head -n 1)
   git checkout "$LATEST_TAG"
   echo "using open-im-server tag: $LATEST_TAG"
   ```

2. 克隆 ChatServer 并切换到 latest tag：

   ```bash
   git clone https://github.com/openimsdk/chat && cd chat
   git fetch --tags
   LATEST_TAG=$(git tag --sort=-v:refname | head -n 1)
   git checkout "$LATEST_TAG"
   echo "using chat tag: $LATEST_TAG"
   ```

3. 参考 [docker部署](#docker部署) 步骤保存依赖组件镜像（源码部署场景不需要服务端业务镜像）。

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
