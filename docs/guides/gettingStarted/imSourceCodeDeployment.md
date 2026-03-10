---
title: '源码部署'
sidebar_position: 3
---

# OpenIMSDK 服务端生产环境源码部署（单机）

## 一、环境及组件要求

OpenIMServer 与外部组件部署在同一台机器上，部分组件可按需使用云服务。

- 环境要求请先参考：[平台及组件要求](./env-comp)

## 二、获取 OpenIMServer 并部署依赖组件

建议通过仓库拉取并切到 GitHub Releases 页面绿色 **Latest** 对应的**最新正式发布 tag**。

```bash
git clone https://github.com/openimsdk/open-im-server && cd open-im-server
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
git checkout "$LATEST_STABLE_TAG"
echo "using open-im-server stable release tag: $LATEST_STABLE_TAG"
```

> 这里的 latest 指 GitHub Releases 页面绿色 Latest 的**正式发布版**，不包含 alpha/beta/rc 等预发布版本。当前该仓库会把 `v3.8.3-patch.12` 识别为最新正式版，而不会误选 `v3.8.4-alpha.1` 这类预发布版本。

> 注意：后续所有命令都在 OpenIMServer 项目根目录执行。

### 2.1 部署外部组件（Docker Compose）

确保 `docker` 和 `docker compose` 已可用。

1. 如果本机已部署 `mongodb/redis/kafka/minio/etcd` 中一个或多个组件，或计划改用云服务（`etcd` 不支持云服务），可在 `docker-compose.yml` 注释对应组件。
2. 强烈建议修改 `docker-compose.yml` 里的默认账号和密码。

| 组件 | 在 `docker-compose.yml` 中的位置 |
| --- | --- |
| MongoDB | `MONGO_INITDB_ROOT_USERNAME` `MONGO_INITDB_ROOT_PASSWORD` `MONGO_OPENIM_USERNAME` `MONGO_OPENIM_PASSWORD` |
| Redis | `redis-server --requirepass ...` |
| MinIO | `MINIO_ROOT_USER` `MINIO_ROOT_PASSWORD` |
| Etcd | `ETCD_ROOT_USER` `ETCD_ROOT_PASSWORD`（启用鉴权时） |
| Kafka | `KAFKA_USERNAME` `KAFKA_PASSWORD`（启用鉴权时） |

3. 修改 `.env` 中的 `DATA_DIR`，指向大磁盘目录用于外部组件数据存储。
4. 执行以下命令部署外部组件：

```bash
docker compose up -d
```

### 2.2 自行部署组件或使用云服务时的初始化要求

| 存储组件 | 初始化要求 |
| --- | --- |
| MongoDB | 预先创建数据库：`openim_v3` |
| Kafka | 预先创建 4 个 topic：`toRedis` `toMongo` `toPush` `toOfflinePush`，每个 topic 设置 8 个分区 |

## 三、部署 OpenIMServer

确保 Go 已正确安装。

### 3.1 中国境内建议设置 Go 代理

```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

### 3.2 初始化（仅执行一次）

```bash
bash bootstrap.sh
```

### 3.3 编译

```bash
mage
```

首次编译耗时较长，请耐心等待。

### 3.4 基础配置修改

| 描述 | 所在文件 |
| --- | --- |
| Kafka 用户名、密码、地址 | `config/kafka.yml` |
| Redis 密码、地址 | `config/redis.yml` |
| MinIO 用户名、密码、地址；`externalAddress` 必须改为外网 IP 或域名路径 | `config/minio.yml` |
| S3 云存储密钥（使用 S3 时） | `config/openim-rpc-third.yml` |
| Etcd 用户名、密码、地址 | `config/discovery.yml` |
| MongoDB 用户名、密码、地址 | `config/mongodb.yml` |
| OpenIMServer `secret` | `config/share.yml` |

> `minio.yml` 的 `externalAddress` 必须改为外网 IP 或域名路径，否则 IM 无法正常发送图片和文件。

### 3.5 启动/停止/检测

| 任务 | 命令 | 说明 |
| --- | --- | --- |
| 后台启动 | `nohup mage start >> _output/logs/openim.log 2>&1 &` | 生产环境建议使用 |
| 停止 | `mage stop` | - |
| 检测 | `mage check` | - |

## 四、获取 Chat

> 如果已有自有账号系统，可不部署 ChatServer。

同样建议拉取后切到 GitHub Releases 页面绿色 **Latest** 对应的**最新正式发布 tag**：

```bash
git clone https://github.com/openimsdk/chat && cd chat
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/chat/releases/latest)")
git checkout "$LATEST_STABLE_TAG"
echo "using chat stable release tag: $LATEST_STABLE_TAG"
```

> 如需复现指定版本，按实际发布说明改为固定 tag；若服务端联调需要固定到 `v3.8.3-patch.12` 对应版本，也请同时固定 ChatServer 的对应正式版 tag。

## 五、部署 ChatServer

> 注意：以下命令都在 ChatServer 项目根目录执行。

### 5.1 编译

```bash
mage
```

### 5.2 基础配置修改

| 描述 | 所在文件 |
| --- | --- |
| Redis 用户名、密码、地址 | `config/redis.yml` |
| Etcd 用户名、密码、地址 | `config/discovery.yml` |
| MongoDB 用户名、密码、地址 | `config/mongodb.yml` |
| OpenIMServer `secret` | `config/share.yml` |
| ChatServer `secret` | `config/chat-rpc-admin.yml` |

### 5.3 启动/停止/检测

| 任务 | 命令 | 说明 |
| --- | --- | --- |
| 后台启动 | `nohup mage start >> _output/logs/chat.log 2>&1 &` | 生产环境建议使用 |
| 停止 | `mage stop` | - |
| 检测 | `mage check` | - |

## 六、配置文件说明

- OpenIMServer 配置说明请以当前检出代码的 `config/README_zh_CN.md` 为准。
- ChatServer 配置说明请以当前检出代码的 `config/README_zh_CN.md` 为准。

## 七、关于离线推送

- 个推：开源版对个推支持不够精细，需按业务自行调试。
- Firebase：修改 `config/openim-push.yml` 中 `fcm.filepath`。

## 八、服务实例个数修改（可选）

在 `start-config.yml` 的 `serviceBinaries` 中，除 `openim-msggateway` 和 `openim-api` 外，其他服务可直接调整实例数。

对 `openim-msggateway` 与 `openim-api`：

- 服务实例数要和对应配置文件里的端口数量保持一致。
- 修改后重启服务生效。

## 九、监控告警（可选）

可按需启用服务器资源与 OpenIMServer/ChatServer 指标监控、仪表盘展示与告警通知。

## 十、重要指引

### 10.1 `secret` 修改

强烈建议修改默认 `secret`：

- 至少 8 位
- 数字 + 字母组合
- 妥善保密

### 10.2 端口开放与客户端地址

不使用域名/SSL 时，端口开放与 SDK 地址请参考：[端口和防火墙](./ports)

- `apiAddr: http://your_server_ip:10002`
- `wsAddr: ws://your_server_ip:10001`

使用域名/SSL 时，配置请参考：[域名及 SSL 证书配置](./nginxDomainConfig)

- 按部署要求修改域名解析，绑定 IP 与域名
- 域名模式一般仅对外开放 `443`
- `apiAddr: https://your_domain.com/api`
- `wsAddr: wss://your_domain.com/msg_gateway`

### 10.3 单机生产环境数据备份及恢复

请参考：[单机生产环境数据备份及恢复](./faultRecovery)
