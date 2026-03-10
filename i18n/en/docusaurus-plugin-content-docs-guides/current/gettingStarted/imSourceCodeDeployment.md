---
title: 'Source Code Deployment'
sidebar_position: 3
---

# 🛠 Source Code Deployment

## 1. Prerequisites

For server hardware, software, operating system, and component requirements, please refer to [this document](./env-comp).

## 2. Deploy IMServer

### 2.1 Clone the Repository and Switch to the Latest Stable Tag

```
git clone https://github.com/openimsdk/open-im-server && cd open-im-server
```

### 2.2 Deploy Components (MongoDB/Redis/Kafka/MinIO/Etcd)
```
docker compose up -d
```



### 2.3 Modify Configuration 🔧

- Edit the `config/minio.yml` file to configure the MinIO external IP for sending images, videos, and files. Replace `your-server-ip` with your server's public IP address:

```plaintext
externalAddress="http://your-server-ip:10005"
  ```



### 2.4 🛠️ Initialize and Download Mage

Before the first build, run on Linux/macOS:

```
bash bootstrap.sh
```

On Windows:

```
bootstrap.bat
```


For users in China, it is recommended to set a Go proxy:
```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

### 2.5 🛠️ Build (Linux/Windows/macOS)


```
mage
```

### 2.6 🚀 Start/Stop/Check (Linux/Windows/macOS)

```
# Start
mage start
# Or start in background and collect logs
nohup mage start >> _output/logs/openim.log 2>&1 &
# Stop
mage stop
# Health check
mage check
```



## 3. Quick Verification

Please refer to the [Quick Verification](./quickTestServer) document.

---

## 4. FAQ

### 4.1 📜 Viewing Logs

IMServer log location: `_output/logs/openim-service-log.*`

### 4.2 🚀 Startup Order
The startup order is as follows:
- Dependencies: MongoDB/Redis/Kafka/MinIO/Etcd
- IMServer
