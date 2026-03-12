---
title: 'docker部署'
sidebar_position: 2

---
## 1.环境准备 🌍
对于服务器硬件、软件、操作系统、以及所依赖组件请参考[此文档](./env-comp)

## 2. 部署 OpenIMServer
### 2.1 仓库克隆 🗂️

建议使用 GitHub Releases 页面绿色 **Latest** 对应的**最新正式发布 tag**，不要直接按 tag 名字排序，也不要使用 alpha/rc 等预发布版本。

```bash
git clone https://github.com/openimsdk/openim-docker && cd openim-docker
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/openim-docker/releases/latest)")
git checkout "$LATEST_STABLE_TAG"
echo "using openim-docker stable release tag: $LATEST_STABLE_TAG"
```

> 这里的 latest 指 GitHub Releases 页面绿色 Latest 的**正式发布版**，不包含 alpha/beta/rc 等预发布版本。`main` 为开发版分支，生产环境不要直接使用 `main`。

### 2.2 配置修改 🔧

- 修改 `.env` 文件，配置 MinIO 外网 IP，以支持发送图片和文件，其中 `your-server-ip` 为服务端外网 IP。

  ```plaintext
  MINIO_EXTERNAL_ADDRESS="http://your-server-ip:10005"
  ```



### 2.3服务启动 🚀

- 启动服务：

```bash
docker compose up -d
```

> 首次执行会拉取较大的镜像，耗时可能较长。启动完成后建议等待 `30-60s`，再执行健康检查或接口验证。

> 本文档默认在**干净环境**下启动。如果机器上已经存在同名容器（如 `mongo`、`redis`、`kafka`、`etcd`、`minio`、`openim-server`、`openim-chat`），`docker compose up -d` 会因为 `container_name` 冲突而失败。此时应先停掉并删除同名容器，或改用已存在组件并调整配置。

> 如果启动时看到 `ETCD_USERNAME`、`ETCD_PASSWORD`、`KAFKA_USERNAME`、`KAFKA_PASSWORD` 未设置的 warning，而你并未启用这些组件的鉴权，这类提示通常可以忽略。


- 停止服务：

```bash
docker compose down
```

- 查看日志：

```bash
docker compose logs -f openim-server openim-chat
```

### 2.4 监控告警（可选）

如需同时启动 `Prometheus`、`Alertmanager`、`Grafana`、`node-exporter`，可执行：

```bash
docker compose --profile m up -d
```

默认端口以当前 `.env` 为准，常用值如下：

- `19090`：Prometheus
- `19093`：Alertmanager
- `13000`：Grafana
- `19100`：node-exporter

## 3. 快速体验 ⚡

快速体验 OpenIMSDK 核心能力，并测试 OpenIMServer/ChatServer 部署是否正常，请参考[快速验证](./quickTestServer)。

## 4. 常见问题

### unhealthy定位
1. 执行 `docker exec -it openim-server mage check` 与 `docker exec -it openim-chat mage check`，确认是否持续超过一分钟；
2. 执行 `docker compose logs -f openim-server openim-chat` 查看日志；
3. 如果 `openim-chat` 在启动初期短暂报 `connect: connection refused`，先等待 `30-60s` 后再复查健康状态；这通常是依赖 `openim-server` 尚未完全就绪导致的启动时序现象。

### 配置项修改
进入容器修改config目录下的修改配置文件无效！
必须采用环境变量的方式修改配置，参考[设置环境变量指南](https://github.com/openimsdk/openim-docker/issues/136)。
