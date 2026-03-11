---
title: 'Source Code Deployment'
sidebar_position: 3
---

# Production Source Code Deployment for OpenIMServer and ChatServer (Single Node)

## 1. Environment and Component Requirements

OpenIMServer and external components are deployed on the same machine in this guide. Some components can be replaced with cloud services if needed.

- For environment requirements, refer to [Platform & Components](./env-comp)

## 2. Get OpenIMServer and Deploy Dependency Components

It is recommended to pull the repository and switch to the latest official release tag marked with the green **Latest** badge on GitHub Releases.

```bash
git clone https://github.com/openimsdk/open-im-server && cd open-im-server
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
git checkout "$LATEST_STABLE_TAG"
echo "using open-im-server stable release tag: $LATEST_STABLE_TAG"
```

> Here, `latest` means the latest official release marked with the green **Latest** badge on GitHub Releases. It does not include alpha, beta, rc, or other pre-releases. `main` is the development branch and should not be used directly in production.

> Note: all commands below are executed in the OpenIMServer project root directory.

### 2.1 Deploy External Components (Docker Compose)

Make sure `docker` and `docker compose` are available.

1. If one or more components among `mongodb/redis/kafka/minio/etcd` are already deployed on this machine, or if you plan to use cloud services instead (`etcd` does not support cloud services), comment out the corresponding components in `docker-compose.yml`.
2. It is strongly recommended to change the default usernames and passwords in `docker-compose.yml`.

| Component | Location in `docker-compose.yml` |
| --- | --- |
| MongoDB | `MONGO_INITDB_ROOT_USERNAME` `MONGO_INITDB_ROOT_PASSWORD` `MONGO_OPENIM_USERNAME` `MONGO_OPENIM_PASSWORD` |
| Redis | `redis-server --requirepass ...` |
| MinIO | `MINIO_ROOT_USER` `MINIO_ROOT_PASSWORD` |
| Etcd | `ETCD_ROOT_USER` `ETCD_ROOT_PASSWORD` (when auth is enabled) |
| Kafka | `KAFKA_USERNAME` `KAFKA_PASSWORD` (when auth is enabled) |

3. Modify `DATA_DIR` in `.env` so that it points to a large disk for storing external component data.
4. Run the following command to deploy the external components:

```bash
docker compose up -d
```

> The current `open-im-server/docker-compose.yml` starts not only external components but also `openim-web-front` and `openim-admin-front`. If you only want dependency components, adjust the compose file before starting.

### 2.2 Initialization Requirements for Self-Hosted Components or Cloud Services

| Component | Initialization Requirement |
| --- | --- |
| MongoDB | Create the database `openim_v3` in advance |
| Kafka | Create 4 topics in advance: `toRedis`, `toMongo`, `toPush`, `toOfflinePush`, and set each topic to 8 partitions |

## 3. Deploy OpenIMServer

Make sure Go is installed correctly.

> `bootstrap.sh` attempts to install `mage`, but it requires a working `go` command in the system first. If `go version` fails, then `bash bootstrap.sh` and `mage` will also fail.

### 3.1 Go Proxy Recommendation for Mainland China

```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

### 3.2 Initialization (Run Once Only)

```bash
bash bootstrap.sh
```

### 3.3 Build

```bash
mage
```

The first build may take a long time. Please be patient.

### 3.4 Basic Configuration Changes

| Description | File |
| --- | --- |
| Kafka username, password, and address | `config/kafka.yml` |
| Redis password and address | `config/redis.yml` |
| MinIO username, password, and address; `externalAddress` must be changed to a public IP or domain path | `config/minio.yml` |
| S3 cloud storage credentials (when using S3) | `config/openim-rpc-third.yml` |
| Etcd username, password, and address | `config/discovery.yml` |
| MongoDB username, password, and address | `config/mongodb.yml` |
| OpenIMServer `secret` | `config/share.yml` |

> The `externalAddress` in `minio.yml` must be changed to a public IP or domain path, otherwise IM will not be able to send images and files correctly.

### 3.5 Start / Stop / Check

| Task | Command | Notes |
| --- | --- | --- |
| Start in background | `nohup mage start >> _output/logs/openim.log 2>&1 &` | Recommended for production |
| Stop | `mage stop` | - |
| Check | `mage check` | - |

> After the first startup, wait `20-30s` before running `mage check` or API verification, to avoid mistaking short startup connection failures for final errors.

## 4. Get ChatServer

> If you already have your own account system, ChatServer may be optional.

It is also recommended to pull the repository and switch to the latest official release tag marked with the green **Latest** badge on GitHub Releases:

```bash
git clone https://github.com/openimsdk/chat && cd chat
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/chat/releases/latest)")
git checkout "$LATEST_STABLE_TAG"
echo "using chat stable release tag: $LATEST_STABLE_TAG"
```

> If you need to reproduce a specific version, switch to the required fixed tag according to the release notes. If server-side integration must stay aligned with the version corresponding to `v3.8.3-patch.12`, also pin ChatServer to the matching official release tag.

## 5. Deploy ChatServer

> Note: all commands below are executed in the ChatServer project root directory.

### 5.1 Build

```bash
mage
```

### 5.2 Basic Configuration Changes

| Description | File |
| --- | --- |
| Redis username, password, and address | `config/redis.yml` |
| Etcd username, password, and address | `config/discovery.yml` |
| MongoDB username, password, and address | `config/mongodb.yml` |
| OpenIMServer `secret` | `config/share.yml` |
| ChatServer `secret` | `config/chat-rpc-admin.yml` |

### 5.3 Start / Stop / Check

| Task | Command | Notes |
| --- | --- | --- |
| Start in background | `nohup mage start >> _output/logs/chat.log 2>&1 &` | Recommended for production |
| Stop | `mage stop` | - |
| Check | `mage check` | - |

> ChatServer depends on OpenIMServer being available first. It is recommended to start ChatServer only after `mage check` succeeds on OpenIMServer, then wait `20-30s` before verifying the `10008/10009` APIs.

## 6. Configuration File Reference

- For OpenIMServer configuration details, use `config/README_zh_CN.md` in the currently checked-out code.
- For ChatServer configuration details, use `config/README_zh_CN.md` in the currently checked-out code.

## 7. Offline Push

- GeTui: supported. Apply for `AppID`, `AppKey`, and `MasterSecret` from GeTui, then integrate them according to the official process.
- Firebase: modify `fcm.filepath` in `config/openim-push.yml`.

## 8. Change the Number of Service Instances (Optional)

In `start-config.yml`, all services except `openim-msggateway` and `openim-api` can have their instance counts adjusted directly in `serviceBinaries`.

For `openim-msggateway` and `openim-api`:

- the number of service instances must match the number of ports configured in the corresponding config files
- restart the service after modification for the change to take effect

## 9. Monitoring & Alerting (Optional)

WIP

## 10. Important Guidance

### 10.1 Change the `secret`

It is strongly recommended to change the default `secret`:

- at least 8 characters
- use a combination of letters and digits
- keep it secret and secure

### 10.2 Open Ports and Client Addresses

Without a domain or SSL, refer to [Ports and Firewall](./ports)

- `apiAddr: http://your_server_ip:10002`
- `wsAddr: ws://your_server_ip:10001`

With a domain and SSL, refer to [Domain and SSL Certificate Configuration](./nginxDomainConfig)

- modify DNS records and bind the IP to the domain
- in domain mode, usually only `443` is exposed externally
- `apiAddr: https://your_domain.com/api`
- `wsAddr: wss://your_domain.com/msg_gateway`

### 10.3 Backup and Recovery for Single-Node Production

Please refer to [Backup and Recovery for Single-Node Production](./production)
