---
title: '常见问题'
sidebar_position: 10
---

## 一、如何升级

在同一大版本内，不同小版本之间的数据通常兼容。建议优先升级到目标仓库 GitHub Releases 页面绿色 **Latest** 对应的**最新正式发布 tag**；如需固定版本（例如 `v3.8.3-patch.12`），请显式 checkout 对应 tag。

### Docker 部署

1. **进入已有的 `openim-docker` 目录：**
    ```bash
    cd openim-docker
    ```

2. **拉取最新正式版 release tag 并切换：**
    ```bash
    git fetch --tags
    TARGET_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/openim-docker/releases/latest)")
    git checkout "$TARGET_TAG"
    echo "upgrade openim-docker to stable release tag: $TARGET_TAG"
    ```

3. **检查 `.env` 中镜像 tag 与当前仓库版本一致（必要时按发布说明手动调整）。**

4. **停止现有的 Docker 服务：**
    ```bash
    docker compose down
    ```

5. **启动更新后的 Docker 服务：**
    ```bash
    docker compose pull
    docker compose up -d
    ```

### 源码部署

1. **进入已有的 `open-im-server` 目录：**
   
    ```bash
    cd open-im-server
    ```
    
2. **停止当前服务：**
    ```bash
    mage stop
    ```

3. **切换到最新正式版 release tag（或指定 tag）并更新代码：**
    ```bash
    git fetch --tags
    TARGET_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
    git checkout "$TARGET_TAG"
    ```

4. **编译并启动服务：**
    ```bash
    mage
    mage start
    ```

5. **如果部署了 ChatServer，也建议同步升级到对应 tag 后再重启 ChatServer。**

> 说明：这里的 latest 指 GitHub Releases 页面绿色 Latest 的**正式发布版**，不包含 alpha/beta/rc 等预发布版本。


---
## 二、 如何迁移数据

在使用 `docker compose up -d` 启动组件后，当前部署仓库根目录下会生成一个 `components` 文件夹（例如 `openim-docker/components` 或 `open-im-server/components`）。运行后产生的数据（如用户、群聊、消息等）都保存在这个目录中。如果需要迁移数据，需要先关闭服务和组件：

`docker`部署：

```sh
docker compose down
```

源码部署：

```sh
mage stop  # Stop services
docker compose down  # Stop components
```

然后移动整个文件夹到数据目录，修改.env文件中DATA_DIR的值为新数据目录，再启动服务和组件：

`docker`部署：

```sh
docker compose up -d  # Start components
```

源码部署：

```sh
docker compose up -d  # Start components
mage start  # Start services
```

---
## 三、 如何清除数据

如需要清除数据，需要先关闭服务和组件：

`docker`部署：

```sh
docker compose down
```

源码部署：

```sh
mage stop  # Stop services
docker compose down  # Stop components
```

然后删除当前部署仓库下的 `components` 文件夹。

客户端方面需要重新卸载重装`app`。

---
## 四、 发送文本消息正常，但发送图片失败

一般发送图片失败是由于没有配置第三方存储的原因。默认使用的第三方存储为`minio`，需修改相关配置

源码部署：修改 `config/minio.yml`，将 `externalAddress` 改为外网 IP 或域名路径。

```yaml
externalAddress: http://your-server-ip:10005
```

Docker 部署：修改 `.env`，将 `MINIO_EXTERNAL_ADDRESS` 改为外网 IP 或域名路径。

```dotenv
MINIO_EXTERNAL_ADDRESS="http://your-server-ip:10005"
```
---

## 五、 减少Mongo、Kafka内存占用

如果是是使用`docker`部署的各个组件，可以通过在`docker-compose.yml`文件中限制`mongo`和`kafka`的内存的方式来减小内存的占用。

`mongo`（`openim-docker` 中的服务名）或 `mongodb`（`open-im-server` 中的服务名）：

> 如果你使用源码部署，请把下面示例中的 `mongo` 替换为 `mongodb`。

```yml
  mongo:
    environment:
    - wiredTigerCacheSizeGB=0.5  # Adjust to an appropriate value, unit: GB
```

`kafka`：

```yml
  kafka:
    environment:
      KAFKA_HEAP_OPTS: "-Xms256m -Xmx256m"  # Add this memory limit
```

---
