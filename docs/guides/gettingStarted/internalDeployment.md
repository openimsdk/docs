---
title: '内网部署'
sidebar_position: 4
---

## 📌 内网部署指南

内网部署主流程：**在联网构建机执行 `mage export` 导出部署包，再拷贝到内网目标机运行**。


## 一、版本与分支策略

- `main`：开发版分支，仅用于跟进未发布变更。
- `vX.Y.Z...`：稳定版发布版本。
- 内网生产环境建议统一使用 GitHub Releases 页面绿色 **Latest** 对应的**最新正式发布版**。

## 二、总体流程

1. 在**联网构建机**拉取 OpenIMServer / ChatServer 稳定版代码。
2. 在联网构建机执行 `mage export`，生成可直接带走的部署归档。
3. 将部署归档、配置文件、外部组件安装包拷贝到**内网目标机**。
4. 在内网目标机解压部署归档，直接使用归档内自带的 `./mage` 启动和检查服务。

## 三、外部组件准备方式

OpenIMServer / ChatServer 的内网部署包只负责业务服务本身。外部组件（MongoDB、Redis、Kafka、Etcd、MinIO）有两种准备方式。

### 方案 A：目标机使用 Docker

如果目标机尚未安装 Docker，建议在联网机器提前下载与目标机发行版、架构匹配的 Docker 离线安装包，再拷贝到内网目标机安装。

- Debian / Ubuntu：准备 `docker-ce`、`docker-ce-cli`、`containerd.io`、`docker-buildx-plugin`、`docker-compose-plugin` 对应的 `.deb` 包
- RHEL / CentOS：准备上述组件对应的 `.rpm` 包

安装完成后，再通过 `docker load` 导入你提前保存好的外部组件镜像。

### 方案 B：目标机不使用 Docker

可以直接将 MongoDB、Redis、Kafka、Etcd、MinIO 的官方二进制包或内部制品包拷贝到内网目标机，按各组件自己的 systemd / supervisor / 脚本方式启动。

这种模式下，OpenIMServer / ChatServer 只需要正确指向这些组件的地址与账号信息，不要求目标机安装 Docker。

## 四、联网构建机导出 OpenIMServer

```bash
git clone https://github.com/openimsdk/open-im-server && cd open-im-server
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
git checkout "$LATEST_STABLE_TAG"

bash bootstrap.sh
PLATFORMS="linux_amd64" mage export
```

执行成功后，部署归档默认生成在：

```text
_output/export/
```

典型文件名示例：

```text
exported_open-im-server_v3.8.3-patch.12_linux_amd64.tar.gz
```

## 五、联网构建机导出 ChatServer

```bash
git clone https://github.com/openimsdk/chat && cd chat
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/chat/releases/latest)")
git checkout "$LATEST_STABLE_TAG"

bash bootstrap.sh
PLATFORMS="linux_amd64" mage export
```

典型文件名示例：

```text
exported_chat_v1.8.4-patch.3_linux_amd64.tar.gz
```

## 六、部署包内容说明

`mage export` 生成的归档会包含：

- 已编译好的业务二进制
- `start-config.yml`
- 运行所需配置文件
- 可直接在目标机执行的 `mage` 启动器

因此，**内网目标机不需要再安装 Go，也不需要重新编译源码**。

## 七、拷贝到内网目标机

将以下内容拷贝到内网目标机：

- OpenIMServer 导出归档
- ChatServer 导出归档
- 外部组件镜像包或二进制安装包
- 你的实际配置文件（如域名、外部组件地址、`secret`、MinIO `externalAddress`）

## 八、在内网目标机部署外部组件

### 1. Docker 方式

如果目标机使用 Docker：

```bash
docker load -i image-name.tar
```

导入完所有外部组件镜像后，再按你的组件编排文件启动。

### 2. 非 Docker 方式

如果目标机不用 Docker：

- 启动 MongoDB
- 启动 Redis
- 启动 Kafka
- 启动 Etcd
- 启动 MinIO

然后把这些组件的地址、账号、密码写入 OpenIMServer / ChatServer 的配置文件。

## 九、在内网目标机解压并启动 OpenIMServer

```bash
mkdir -p /opt/openim/open-im-server
tar -xzf exported_open-im-server_v*.tar.gz -C /opt/openim/open-im-server
cd /opt/openim/open-im-server
```

修改配置文件中的外部组件地址、`secret`、MinIO `externalAddress` 后，执行：

```bash
./mage check
./mage start
./mage check
```

## 十、在内网目标机解压并启动 ChatServer

```bash
mkdir -p /opt/openim/chat
tar -xzf exported_chat_v*.tar.gz -C /opt/openim/chat
cd /opt/openim/chat
```

修改 ChatServer 配置文件中的 Redis、MongoDB、Etcd、OpenIMServer `secret` 后，执行：

```bash
./mage check
./mage start
./mage check
```

## 十一、运行时常用命令

OpenIMServer：

```bash
cd /opt/openim/open-im-server
./mage check
./mage stop
./mage start
```

ChatServer：

```bash
cd /opt/openim/chat
./mage check
./mage stop
./mage start
```

## 十二、内网部署注意事项

1. `main` 是开发版，不要拿 `main` 做内网生产包。
2. `mage export` 的目标机侧运行依赖已经随归档带出，因此不要再在目标机重新执行源码编译流程。
3. 如果目标机与构建机架构不同，请在联网构建机通过 `PLATFORMS` 指定目标平台，例如 `PLATFORMS="linux_amd64" mage export` 或 `PLATFORMS="linux_arm64" mage export`。
4. 外部组件无论使用 Docker 还是二进制拷贝方式，都需要先保证地址和鉴权信息与 OpenIMServer / ChatServer 配置一致。
