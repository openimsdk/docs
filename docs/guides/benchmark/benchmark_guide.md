---
title: '压测程序使用说明'
hide_title: true
sidebar_position: 2
---

# 压测程序使用说明

本文用于指导客户在开源版环境中修改配置、编译与运行压测程序。

---

## 联动压测流程

按下面步骤即可完成一次“压力 + 抽样可靠性/时延”的联动压测。

1）启动服务端（OpenIMServer + 组件）。

- 根据压测规模调整服务端实例数（例如 `openim-push: 8`、`openim-msgtransfer: 8`）。

2）启动压力侧（msgtest）。

- 先修改 msgtest 连接配置（以 `msgtest/module/pressure.go` 为准），再编译并运行。

3）启动抽样侧（integration_test）。

- 修改 integration_test 连接配置文件：`integration_test/internal/config/config.go`。
- 在压力稳定后启动 integration_test，执行可靠性与时延统计、必要的一致性校验。

---

## integration_test

程序路径：`openim-sdk-core/integration_test/`

### 参数说明

| 参数 | 含义 | 类型 |
| --- | --- | --- |
| test | SDK 是否运行测试模式 | bool |
| u | 用户数量 | int |
| su | 拥有所有好友的用户数量 | int |
| lg | 大群数量 | int |
| lgm | 大群人数 | int |
| cg | 每个人创建的常规群聊数量 | int |
| cgm | 常规群人数 | int |
| sm | 每人发送的私聊消息数量 | int |
| gm | 每人发送的群聊消息数量 | int |
| msgitv | 发送消息间隔（ms） | int |
| reg | 是否注册 | bool |
| imf | 是否导入好友 | bool |
| crg | 是否创建群组 | bool |
| sem | 是否发送消息 | bool |
| ckgn | 是否检查群组数量 | bool |
| ckcon | 是否检查会话数量 | bool |
| ckmsn | 是否检查消息数量 | bool |
| ckuni | 是否模拟卸载重装并再次检查 | bool |
| lgr | 登录用户比例/登录率 | float |

### 配置文件

- 文件：`openim-sdk-core/integration_test/internal/config/config.go`
- 需要修改：`TestIP / APIAddr / WsAddr / AdminUserID / Secret / PlatformID / DataDir`

### 示例命令与说明

- 仅注册用户（用于准备数据）：

```bash
go run main.go -reg -u 100000
```

- 抽样登录 + 导入好友 + 建群 + 发消息 + 校验（常用联动压测模式）：

```bash
go run main.go \
  -lgr 0.8 -test \
  -u 100 -su 3 -lg 0 -cg 4 -cgm 5 \
  -sm 100 -gm 100 -msgitv 1500 \
  -imf -crg -sem -ckgn -ckcon -ckmsn
```

- 小规模全链路校验（用于快速验证环境可跑通）：

```bash
go run main.go \
  -test \
  -u 10 -su 3 -lg 2 -cg 4 -cgm 5 \
  -sm 6 -gm 7 -msgitv 1000 \
  -reg -lgr 0.7 -imf -crg -ckgn -ckcon -sem -ckmsn -ckuni
```

---

## msgtest

程序路径：`openim-sdk-core/msgtest/`，入口：`msgtest/main/main.go`

### 编译

```bash
cd openim-sdk-core/msgtest

go build -o main ./main
```

### 生效配置

msgtest 的连接配置

- 文件：`openim-sdk-core/msgtest/module/pressure.go`
- 需要修改：`TESTIP / APIADDR / WSADDR / MANAGERUSERID / SECRET / PLATFORMID`

### 参数说明

| 参数 | 含义 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `-o` | 在线用户总数 | int | 20000 |
| `-s` | 起始用户（与 `-e` 配合使用） | int | 0 |
| `-e` | 结束用户（与 `-s` 配合使用） | int | 0 |
| `-sr` | 单聊抽样率 | float | 0.01 |
| `-rs` | 单聊随机发送者数量 | int | 0 |
| `-rr` | 单聊每个发送者随机接收者数量 | int | 0 |
| `-c` | 每个发送者向每个接收者发送的消息条数 | int | 0 |
| `-i` | 每个发送者发送间隔（毫秒） | int | 1000 |
| `-r` | 是否注册用户 | bool | false |
| `-u` | 仅保持在线，不发送消息 | bool | false |
| `-pp` | 是否开启 pprof（0.0.0.0:6060） | bool | false |
| `-gsr` | 群聊发送者比例 | float | 0.1 |
| `-gor` | 群聊在线比例 | float | 0.0 |
| `-htg` | 10 万人群数量 | int | 0 |
| `-ttg` | 1 万人群数量 | int | 0 |
| `-otg` | 1 千人群数量 | int | 0 |
| `-hog` | 100 人群数量 | int | 0 |
| `-fog` | 50 人群数量 | int | 0 |
| `-teg` | 10 人群数量 | int | 0 |

### 示例命令

- 5 万在线（仅保持在线）：

```bash
nohup ./main -o 50000 -u >> openIM.log 2>&1 &
```

- 5 万在线 + 单聊压测（示例：300 发送者，300 接收者，每对 100 条）：

```bash
nohup ./main -o 50000 -rs 300 -rr 300 -c 100 -i 1 -r >> openIM.log 2>&1 &
```

---

# 注意事项

以下调整用于提升压测稳定性，避免“压测程序自身压力”干扰对 OpenIMServer（ChatServer）承载能力的判断。

1. 修改请求超时时间
   - 程序：OpenIMClientSDK（`openim-sdk-core`）
   - 位置：`openim-sdk-core/pkg/network/http_client.go`
   - 修改：搜索 `Timeout`，将默认超时适当延长。

2. 修改 SDK 异步管道超时时间
   - 程序：OpenIMClientSDK（`openim-sdk-core`）
   - 位置：`openim-sdk-core/pkg/common/trigger_channel.go`
   - 修改：找到 `const timeout`，将管道超时时间适当调大。

3. 修改服务端通知超时时间
   - 程序：OpenIMServer
   - 位置：`open-im-server/pkg/notification/msg.go`
   - 修改：搜索 `WithTimeout`，适当调大 `context` 超时时间。

4. 降低服务端日志级别
   - 程序：OpenIMServer
   - 位置：`open-im-server/config/log.yml`
   - 修改：将 `remainLogLevel` 设置为 3。

5. 通知消息未读状态（用于未读数统计口径一致）
   - 程序：OpenIMServer
   - 位置：`open-im-server/config/notification.yml`
   - 修改：将 `groupCreated` 与 `friendApplicationApproved` 的 `unreadCount` 设置为 `true`。

6. 服务端最大连接数量（FD）
   - 程序：OpenIMServer
   - 位置：`open-im-server/start-config.yml`
   - 修改：根据需要登录的用户数量，将 `maxFileDescriptors` 适当调大。

7. 客户端动态端口范围
   - 位置：msgtest 所在压测机

```sh
sudo sysctl -w net.ipv4.ip_local_port_range="10000 65000"
```

8. 打开全量在线缓存
   - 程序：OpenIMServer
   - 位置：`open-im-server/config/openim-push.yml`
   - 修改：将 `fullUserCache` 设置为 `true`。
