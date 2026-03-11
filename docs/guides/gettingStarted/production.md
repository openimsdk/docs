---
title: '生产环境'
sidebar_position: 8
slug: /gettingStarted/production
---

# 生产环境

本文只描述生产环境**运行时故障**会造成的影响，以及对应的恢复方式。

## 一、通用恢复顺序

1. 先恢复外部组件。
2. 再恢复 OpenIMServer。
3. 最后恢复 ChatServer。

## 二、外部组件运行时故障

| 组件故障 | 运行时影响 | 恢复方式 |
| --- | --- | --- |
| MongoDB 不可用 | OpenIMServer `10002` 可能仍可返回，但 ChatServer 与 APP 管理员接口常失败 | 先恢复 MongoDB；恢复后立即复测 `10002/10008/10009`，若仍异常，再重启 OpenIMServer / ChatServer |
| Redis 不可用 | OpenIMServer 鉴权链路异常；源码部署常见 `auth-rpc-service down`，Docker 一体化部署常见 Redis 连接或解析错误 | 先恢复 Redis；观察 `30-60s`，若 OpenIMServer 鉴权仍异常，再重启 OpenIMServer |
| Kafka 不可用 | 基础探针可能仍正常，但消息转发、推送链路会异常 | 先恢复 Kafka；恢复后补做消息发送、消费、推送闭环验证 |
| Etcd 不可用 | 已运行实例通常短时可继续服务，但服务重启阶段可能失败 | 先恢复 Etcd；如果服务注册未恢复，再重启 OpenIMServer / ChatServer |
| MinIO 不可用 | 文件上传下载失败；源码部署下基础探针通常仍可用，Docker 一体化部署下可能连带 `10002/10008/10009` 异常 | 先恢复 MinIO，并检查 `externalAddress`；若 Docker 一体化部署在 `30-60s` 后基础探针仍未恢复，再重启 OpenIMServer / ChatServer 服务栈 |

### 外部组件恢复命令

`openim-docker` 部署：

```bash
cd /path/to/openim-docker
docker compose up -d mongo redis kafka etcd minio
```

`open-im-server` 源码部署：

```bash
cd /path/to/open-im-server
docker compose up -d mongodb redis kafka etcd minio
```

> `openim-docker` 默认服务名为 `mongo`，`open-im-server` 默认服务名为 `mongodb`。

## 三、OpenIMServer 运行时故障

| 服务故障 | 运行时影响 | 恢复方式 |
| --- | --- | --- |
| `openim-api` | `10002` 通常不可用 | 在 `open-im-server` 目录执行 `mage stop && mage start` |
| `openim-rpc-auth` | OpenIMServer 鉴权探针失败，ChatServer 探针可能仍可用 | 在 `open-im-server` 目录执行 `mage stop && mage start` |
| `openim-msggateway` | WebSocket 实时链路中断 | 在 `open-im-server` 目录执行 `mage stop && mage start` |
| `openim-msgtransfer` / `openim-push` | 消息链路、推送链路退化，基础探针不一定失败 | 在 `open-im-server` 目录执行 `mage stop && mage start`，恢复后补做消息闭环验证 |
| `openim-crontask` | 定时任务停止执行 | 在 `open-im-server` 目录执行 `mage stop && mage start` |

OpenIMServer 恢复命令：

```bash
cd /path/to/open-im-server
mage check
mage stop
mage start
mage check
```

## 四、ChatServer 运行时故障

| 服务故障 | 运行时影响 | 恢复方式 |
| --- | --- | --- |
| `chat-api` | APP 业务服务器接口 `10008` 通常不可用 | 在 `chat` 目录执行 `mage stop && mage start` |
| `chat-rpc` | ChatServer 核心业务调用失败，基础 HTTP 端口可能仍在 | 在 `chat` 目录执行 `mage stop && mage start` |
| `admin-api` | APP 管理员接口 `10009` 通常不可用，但 `10008` 可能仍可用 | 在 `chat` 目录执行 `mage stop && mage start` |
| `admin-rpc` | APP 管理员业务调用失败 | 在 `chat` 目录执行 `mage stop && mage start` |
| `bot-api` / `bot-rpc` | Bot 相关能力异常 | 在 `chat` 目录执行 `mage stop && mage start` |

ChatServer 恢复命令：

```bash
cd /path/to/chat
mage check
mage stop
mage start
mage check
```

## 五、恢复后确认

恢复完成后，至少确认以下三项：

1. `mage check` 或 `docker ps` 正常。
2. `10002`、`10008`、`10009` 三个基础探针恢复。
3. Kafka、MinIO 场景补做消息与文件链路验证。

> OpenIMServer、ChatServer 的基础探针都必须带 `operationID` 请求头。
