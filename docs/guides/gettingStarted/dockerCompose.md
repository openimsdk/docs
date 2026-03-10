---
title: 'docker部署'
sidebar_position: 2

---
## 1.环境准备 🌍
对于服务器硬件、软件、操作系统、以及所依赖组件请参考[此文档](./env-comp)

## 2. 部署 OpenIMServer
### 2.1 仓库克隆 🗂️

```bash
git clone https://github.com/openimsdk/openim-docker && cd openim-docker
```

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


- 停止服务：

```bash
docker compose down
```

- 查看日志：

```bash
docker logs -f openim-server
```

## 3. 快速体验 ⚡

快速体验 OpenIMSDK 核心能力，并测试 OpenIMServer/ChatServer 部署是否正常，请参考[快速验证](./quickTestServer)。

> 补充（基于当前项目目录）：如果你是按 `open-im-server` + `chat` 两个源码仓库部署，`open-im-server/docker-compose.yml` 主要用于依赖组件，ChatServer 仍需在 `chat` 目录执行 `mage start`。可参考[源码部署](./imSourceCodeDeployment)。


## 4. 常见问题

### unhealthy定位
1. 执行 `docker exec -it openim-server mage check` 确认是否超过一分钟；
2. 执行 docker logs -f openim-server 查看日志；

### 配置项修改
进入容器修改config目录下的修改配置文件无效！
必须采用环境变量的方式修改配置，参考[设置环境变量指南](https://github.com/openimsdk/openim-docker/issues/136)。
