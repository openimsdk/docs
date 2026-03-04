---
title: '源码部署'
sidebar_position: 3
---

# 🛠 源码部署

## 1. 环境准备

对于服务器硬件、软件、操作系统、以及所依赖组件请参考[此文档](./env-comp)

## 2. 部署 IMServer

### 2.1 clone仓库并切换到最新稳定版tag

```
git clone https://github.com/openimsdk/open-im-server && cd open-im-server
```

### 2.2 部署组件 (mongodb/redis/kafka/MinIO/Etcd)
```
docker compose up -d
```



### 2.3 配置修改 🔧

- 修改 `config/minio.yml` 文件，配置MinIO外网 IP，以支持发送图片视频文件，其中your-server-ip为服务端外网IP

```plaintext
externalAddress="http://your-server-ip:10005"
  ```



### 2.4 🛠️ 初始化下载mage

第一次编译前，linux/mac 下执行：

```
bash bootstrap.sh
```

windows 执行

```
bootstrap.bat
```


中国境内建议设置go代理
```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

### 2.5 🛠️ 编译(linux/windows/mac 平台均可用)


```
mage
```

### 2.6 🚀 启动/停止/检测(linux/windows/mac 平台均可用)

```
# 启动
mage start
# 或 后台启动 收集日志
nohup mage start >> _output/logs/openim.log 2>&1 &
# 停止
mage stop
# 检测
mage check
```



## 3. 快速验证

请参考[快速验证](./quickTestServer)文档

---

## 4. 常见问题

### 4.1 📜 日志查看

IMServer日志位置： `_output/logs/openim-service-log.*`

### 4.2 🚀 启动顺序
启动顺序如下：
- 依赖的组件：mongodb/redis/kafka/minio/etcd
- IMServer


