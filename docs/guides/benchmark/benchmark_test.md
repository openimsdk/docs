---
title: '压力及可靠性测试报告'
hide_title: true
sidebar_position: 1
---

# OpenIM 压力及可靠性测试

## 名词与范围

- **OpenIMSDK**：统称，包含 **OpenIMClientSDK**（客户端 SDK）与 **OpenIMServer**（服务端）。
- **ChatServer**：本文中对 OpenIMServer 消息服务相关模块的统称。
- **APP 管理员**：用于管理侧接口调用的管理员账号（例如获取 token、批量操作等）。
- **APP 业务服务器**：接入 OpenIMServer 的业务后端（负责你的业务逻辑，与 IM 体系通过 API/回调/SDK 集成）。

---

## 背景

OpenIM 不是一个独立的聊天应用程序（如 WeChat 或 Slack），而是一个提供 OpenIMClientSDK 与 OpenIMServer 的即时通讯解决方案。由于 OpenIMClientSDK 底层依赖 Go 语言实现的 `openim-sdk-core`，在没有海量真实终端的情况下，需要通过压测程序模拟大量用户在线与消息收发来评估系统容量、可靠性与时延。

本次测试采用两套测试程序协同：

1. **测试程序 A：openim-sdk-core/integration_test**（用于可靠性/时延与一致性校验）
   - 通过加载并运行 `openim-sdk-core` 来模拟 OpenIMClientSDK 实例，覆盖较完整的客户端链路。

2. **测试程序 B：openim-sdk-core/msgtest**（用于压力/容量）
   - 聚焦登录与消息收发，用于启动大量实例模拟高并发压力场景。

推荐方式：**msgtest 制造压力负载**；**integration_test 抽样验证可靠性与时延**。

---

## 可靠性与时延定义

- **可靠性**：消息投递可靠性（“消息必达”），即消息发送后接收方必须能收到。
- **时延**：从客户端 A 创建并发送消息，到客户端 B 成功接收并入库的耗时。

---

## 测试资源

服务器1：Ubuntu 22.04.2，16 Core，64GB RAM，150GB 机械磁盘：部署组件与 OpenIMServer；同时部署测试程序 B；可能部署测试程序 A 在共享内存 `/dev/shm`。

服务器2：Ubuntu 18.04.5，4 Core，8GB RAM，40GB 机械磁盘：部署测试程序 A 在共享内存 `/dev/shm`。

服务端 `open-im-server/start-config.yml`：将服务实例调整为 `openim-push: 8`、`openim-msgtransfer: 8`，其他保持 1。

---

## 测试场景与结果

### 测试一：200 个用户

测试程序 A 模拟 200 个用户，其中 100 个立刻登录，向小群、好友发送消息。

命令：

`go run main.go -lgr 0.5 -imf -crg -ckgn -ckcon -sem -ckmsn -u 200 -su 10 -lg 2 -cg 2 -cgm 5 -sm 5 -gm 5 -reg`

部署：测试程序 A 部署在服务器 1 的共享内存 `/dev/shm`。

| 参数/结果 | 描述 |
| --- | --- |
| 测试目的 | 少量用户情况下测试消息可靠性和耗时 |
| 用户数量 | 200 用户，其中 100 人立刻登录，另外 100 个延迟登录 |
| 群数量及规模 | 每人加入 0-10 个常规群，群成员人数为 5 人 |
| 发消息频率 | 峰值 40 条/s |
| 消息总数 | 112350 |
| 消息完整性 | 100%（所有消息精准送达） |
| 消息平均时延 | 0.231 秒 |
| 消息最大时延 | 1.703 秒 |

---

### 测试二：5 万在线用户 + 小群

- 测试程序 B：模拟 5 万在线用户，随机发送消息（制造压力）。
- 测试程序 A：模拟 100 个用户（抽样统计可靠性与时延）。

命令（示例）：

- 测试程序 A 注册 10 万用户：`go run main.go -reg -u 100000`
- 测试程序 B 启动 5 万在线用户：`go run main.go -s 49500 -e 99500 -c 100 -i 500 -rs 1000 -rr 1000`
- 测试程序 A 抽样统计：`go run main.go -lgr 0.8 -imf -crg -ckgn -ckcon -sem -ckmsn -u 100 -su 3 -lg 0 -cg 4 -cgm 5 -sm 100 -gm 100 -msgitv 1500 -test`

部署：测试程序 A 在服务器 2 的 `/dev/shm`，测试程序 B 在服务器 1。

| 参数/结果 | 描述 |
| --- | --- |
| 压力情况 | 50000 用户在线，每秒发送约 1700 条消息 |
| 抽样统计用户数 | 100 用户，其中 80 人立刻登录，另外 20 个延迟登录 |
| 抽样统计用户的群数量及规模 | 每人加入 0-20 个常规群，群成员人数为 5 人 |
| 抽样统计消息发送频率 | 峰值 54 条/s |
| 抽样统计消息数 | 170800 |
| 抽样统计消息完整性 | 100%（所有消息精准送达） |
| 抽样统计消息平均时延 | 0.202 秒 |
| 抽样统计消息最大时延 | 3.641 秒 |

#### 测试二：服务器资源消耗

登录用户数：

import online from '../assets/br-login.png'

<img src={online} alt="br-login"/>

消息压力（下图指标表示 1 分钟服务器接收到的消息量）：

import msg from '../assets/br-msg.png'

<img src={msg} alt="br-msg"/>

CPU 使用情况：

import cpu from '../assets/br-cpu.png'

<img src={cpu} alt="br-cpu"/>

| 进程 | CPU占用 |
| --- | --- |
| openim-msggateway | 210% |
| mongo | 100% |
| kafka | 84% |
| redis | 67% |
| openim-rpc-msg | 56% |
| openim-msgtransfer | 27%*8 |
| openim-push | 13%*8 |
| 其他 OpenIM 服务以及组件 | 65% |
| 总计 | 902% |

物理内存占用情况：

import mem from '../assets/br-mem.png'

<img src={mem} alt="br-mem"/>

| 进程 | 内存占用 |
| --- | --- |
| openim-msggateway | 2.1 GiB |
| mongo | 717 MiB |
| kafka | 1.1GiB |
| redis | 85MiB |
| openim-rpc-msg | 162MiB |
| openim-msgtransfer | 74 MiB*8 |
| openim-push | 126 MiB*8 |
| 其他 OpenIM 服务以及组件 | 457 MiB |
| 总计（所有 OpenIM 服务以及组件） | 6.986GiB |

备注：以上表格内容为粗略统计，在总计中不包括 docker 转发数据到容器的资源消耗。

---

### 测试三：10 万人大群（商业版 OpenIM）

以下数据为商业版 OpenIM 测试结果。

#### 代码修改

为保证超大规模建群/在线场景可跑通，需要对测试程序做适配性修改：

- 测试程序 A：`internal/group/notification.go`
  - 搜索 `case constant.MemberInvitedNotification:`，注释该 `case` 内容。

- 测试程序 A：`internal/group/group.go`
  - 搜索 `syncer.WithNotice[*model_struct.LocalGroupMember, group.GetGroupMemberListResp`，在下方 `switch state` 中注释 `case syncer.Insert` 块。

- 测试程序 B：`internal/interaction/long_conn_mgr.go`
  - 在 `handleMessage` 方法开头直接 `return nil`。

#### 测试资源与部署

使用 5 台 64 核 128G 服务器：其中 4 台部署测试程序 B，1 台部署服务端；另有 1 台 16 核 32G 服务器部署测试程序 A。全部使用内网连接。

#### 运行方式

- 测试程序 B：模拟 10 万在线用户，几乎不发送消息。
- 测试程序 A：模拟 20 个用户，全部立刻登录，对 1 个 10 万人大群与好友发送消息。

1）测试程序 A 注册 20 万用户：

`go run main.go -reg -u 200000`

2）测试程序 A 创建 1 个大群（11 万群成员）：

`go run main.go -lgr 1 -imf -crg -ckgn -ckcon -u 20 -su 1 -lg 1 -cg 0 -lgm 110000 -msgitv 40 -gm 5000 -sm 0`

3）建群完成后，4 台测试程序 B 各启动 2.5 万在线用户：

- `go run main.go -o 25000 -s 11 -e 25011 -c 1000 -i 500000 -rs 1000 -rr 1000`
- `go run main.go -o 25000 -s 25011 -e 50011 -c 1000 -i 500000 -rs 1000 -rr 1000`
- `go run main.go -o 25000 -s 50011 -e 75011 -c 1000 -i 500000 -rs 1000 -rr 1000`
- `go run main.go -o 25000 -s 75011 -e 100011 -c 1000 -i 500000 -rs 1000 -rr 1000`

4）确认 10 万用户登录完毕后，再启动测试程序 A 执行消息发送与校验：

`go run main.go -lgr 1 -sem -ckmsn -u 20 -su 1 -lg 1 -cg 0 -lgm 110000 -msgitv 40 -gm 5000 -sm 0`

测试程序 A 部署在服务器共享内存 `/dev/shm`。

#### 结果

| 参数/结果 | 描述 |
| --- | --- |
| 压力情况 | 100000 用户在线，每秒发送约 200 条消息，推送消息频率为 2000w 条/s |
| 抽样统计用户数 | 20 用户，其中 20 人立刻登录 |
| 抽样统计用户的群数量及规模 | 1 个大群，每个群 110000 人，其中 10010 人在线 |
| 抽样统计消息发送频率 | 峰值 200 条/s |
| 抽样统计消息数 | 190w |
| 抽样统计消息完整性 | 100%（所有消息精准送达） |
| 抽样统计消息平均时延 | 0.805 秒 |
| 抽样统计消息最大时延 | 3.772 秒 |

#### 资源消耗

该场景下服务端资源消耗峰值：

- CPU：48.81%（约 31 核+）
- 内存：11.06%（约 14.15G）
- 出网带宽：11.158Gibit/s
- 入网带宽：252.372Mibit/s

测试程序 B 的服务器主要资源消耗峰值：

- CPU：38.01%（约 24 核+）

---

## 结果分析

OpenIM 支持同时在线 5 万人，面对每秒 1700 条消息的压力时，消息可达率达到 100%。平均消息时延低于 1 秒，最大时延不超过 3 秒。

---

## 配置建议

按照 10 万注册用户、日常在线 10% 用户、支持 5 万大群计算、每秒 600 条消息，建议配置：

| 名称 | 配置 |
| --- | --- |
| 内存 | 16G |
| CPU | 8核 |
| 网络带宽 | 10M |

备注：消息包大小按 2KB 计算，实际大小与消息内容有关；常规文字消息包大小约 700 字节。

