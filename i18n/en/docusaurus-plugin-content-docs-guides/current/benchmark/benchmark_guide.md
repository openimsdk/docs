---
title: 'Benchmark Tool Guide'
hide_title: true
sidebar_position: 2
---

# Benchmark Tool Guide

This document guides you through modifying configuration, building, and running the benchmark programs in the open-source edition.

---

## Combined Stress Testing Workflow

Follow these steps to complete a combined "stress + sampling reliability/latency" benchmark:

1) Start the server (OpenIMServer + components).

- Adjust server instance counts based on the test scale (e.g., `openim-push: 8`, `openim-msgtransfer: 8`).

2) Start the stress side (msgtest).

- Modify the msgtest connection config first (see `msgtest/module/pressure.go`), then build and run.

3) Start the sampling side (integration_test).

- Modify the integration_test connection config file: `integration_test/internal/config/config.go`.
- After the stress load stabilizes, start integration_test to run reliability and latency statistics with necessary consistency checks.

---

## integration_test

Program path: `openim-sdk-core/integration_test/`

### Parameters

| Parameter | Description | Type |
| --- | --- | --- |
| test | Whether the SDK runs in test mode | bool |
| u | Number of users | int |
| su | Number of users with all friends | int |
| lg | Number of large groups | int |
| lgm | Number of large group members | int |
| cg | Number of regular groups created per user | int |
| cgm | Number of regular group members | int |
| sm | Number of private messages sent per user | int |
| gm | Number of group messages sent per user | int |
| msgitv | Message sending interval (ms) | int |
| reg | Whether to register users | bool |
| imf | Whether to import friends | bool |
| crg | Whether to create groups | bool |
| sem | Whether to send messages | bool |
| ckgn | Whether to check group count | bool |
| ckcon | Whether to check conversation count | bool |
| ckmsn | Whether to check message count | bool |
| ckuni | Whether to simulate uninstall/reinstall and recheck | bool |
| lgr | Login user ratio / login rate | float |

### Configuration File

- File: `openim-sdk-core/integration_test/internal/config/config.go`
- Fields to modify: `TestIP / APIAddr / WsAddr / AdminUserID / Secret / PlatformID / DataDir`

### Example Commands

- Register users only (data preparation):

```bash
go run main.go -reg -u 100000
```

- Sampling login + import friends + create groups + send messages + verification (common combined benchmark mode):

```bash
go run main.go \
  -lgr 0.8 -test \
  -u 100 -su 3 -lg 0 -cg 4 -cgm 5 \
  -sm 100 -gm 100 -msgitv 1500 \
  -imf -crg -sem -ckgn -ckcon -ckmsn
```

- Small-scale full pipeline verification (for quickly verifying the environment works):

```bash
go run main.go \
  -test \
  -u 10 -su 3 -lg 2 -cg 4 -cgm 5 \
  -sm 6 -gm 7 -msgitv 1000 \
  -reg -lgr 0.7 -imf -crg -ckgn -ckcon -sem -ckmsn -ckuni
```

---

## msgtest

Program path: `openim-sdk-core/msgtest/`, entry point: `msgtest/main/main.go`

### Build

```bash
cd openim-sdk-core/msgtest

go build -o main ./main
```

### Configuration

msgtest connection configuration:

- File: `openim-sdk-core/msgtest/module/pressure.go`
- Fields to modify: `TESTIP / APIADDR / WSADDR / MANAGERUSERID / SECRET / PLATFORMID`

### Parameters

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| `-o` | Total online users | int | 20000 |
| `-s` | Start user (used with `-e`) | int | 0 |
| `-e` | End user (used with `-s`) | int | 0 |
| `-sr` | Private chat sampling rate | float | 0.01 |
| `-rs` | Number of random private chat senders | int | 0 |
| `-rr` | Number of random recipients per sender | int | 0 |
| `-c` | Messages per sender per recipient | int | 0 |
| `-i` | Send interval per sender (ms) | int | 1000 |
| `-r` | Whether to register users | bool | false |
| `-u` | Stay online only, no message sending | bool | false |
| `-pp` | Enable pprof (0.0.0.0:6060) | bool | false |
| `-gsr` | Group chat sender ratio | float | 0.1 |
| `-gor` | Group chat online ratio | float | 0.0 |
| `-htg` | Number of 100K-member groups | int | 0 |
| `-ttg` | Number of 10K-member groups | int | 0 |
| `-otg` | Number of 1K-member groups | int | 0 |
| `-hog` | Number of 100-member groups | int | 0 |
| `-fog` | Number of 50-member groups | int | 0 |
| `-teg` | Number of 10-member groups | int | 0 |

### Example Commands

- 50K online (stay online only):

```bash
nohup ./main -o 50000 -u >> openIM.log 2>&1 &
```

- 50K online + private chat stress test (example: 300 senders, 300 recipients, 100 messages each):

```bash
nohup ./main -o 50000 -rs 300 -rr 300 -c 100 -i 1 -r >> openIM.log 2>&1 &
```

---

# Important Notes

The following adjustments improve benchmark stability to prevent the "benchmark program's own overhead" from interfering with OpenIMServer (ChatServer) capacity assessment.

1. Modify request timeout
   - Program: OpenIMClientSDK (`openim-sdk-core`)
   - Location: `openim-sdk-core/pkg/network/http_client.go`
   - Action: Search for `Timeout` and increase the default timeout appropriately.

2. Modify SDK async pipeline timeout
   - Program: OpenIMClientSDK (`openim-sdk-core`)
   - Location: `openim-sdk-core/pkg/common/trigger_channel.go`
   - Action: Find `const timeout` and increase the pipeline timeout appropriately.

3. Modify server notification timeout
   - Program: OpenIMServer
   - Location: `open-im-server/pkg/notification/msg.go`
   - Action: Search for `WithTimeout` and increase the `context` timeout appropriately.

4. Lower server log level
   - Program: OpenIMServer
   - Location: `open-im-server/config/log.yml`
   - Action: Set `remainLogLevel` to 3.

5. Notification message unread status (for consistent unread count metrics)
   - Program: OpenIMServer
   - Location: `open-im-server/config/notification.yml`
   - Action: Set `unreadCount` to `true` for `groupCreated` and `friendApplicationApproved`.

6. Server max connection count (FD)
   - Program: OpenIMServer
   - Location: `open-im-server/start-config.yml`
   - Action: Increase `maxFileDescriptors` based on the number of users to be logged in.

7. Client dynamic port range
   - Location: The benchmark machine running msgtest

```sh
sudo sysctl -w net.ipv4.ip_local_port_range="10000 65000"
```

8. Enable full online cache
   - Program: OpenIMServer
   - Location: `open-im-server/config/openim-push.yml`
   - Action: Set `fullUserCache` to `true`.
