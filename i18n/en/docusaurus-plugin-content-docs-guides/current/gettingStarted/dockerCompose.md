---
title: 'Docker Deployment'
sidebar_position: 2

---
## 1. Environment Preparation 🌍
For server hardware, software, operating system, and dependent components, please refer to [this document](./env-comp).

## 2. Deploy OpenIMServer
### 2.1 Clone the Repository 🗂️

Use the latest official release tag marked with the green **Latest** badge on the GitHub Releases page. Do not sort tags manually, and do not use pre-release versions such as alpha or rc.

```bash
git clone https://github.com/openimsdk/openim-docker && cd openim-docker
git fetch --tags
LATEST_STABLE_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/openim-docker/releases/latest)")
git checkout "$LATEST_STABLE_TAG"
echo "using openim-docker stable release tag: $LATEST_STABLE_TAG"
```

> Here, `latest` means the latest official release marked with the green **Latest** badge on GitHub Releases. It does not include alpha, beta, rc, or other pre-releases. `main` is the development branch and should not be used directly in production.

### 2.2 Configuration Changes 🔧

- Edit `.env` and configure the MinIO external IP to support image and file sending. Replace `your-server-ip` with your server's public IP.

  ```plaintext
  MINIO_EXTERNAL_ADDRESS="http://your-server-ip:10005"
  ```

### 2.3 Start Services 🚀

- Start services:

```bash
docker compose up -d
```

> The first run pulls large images and may take some time. After startup, wait `30-60s` before running health checks or API verification.

> This document assumes a **clean environment**. If the machine already has containers with the same names such as `mongo`, `redis`, `kafka`, `etcd`, `minio`, `openim-server`, or `openim-chat`, `docker compose up -d` will fail because of `container_name` conflicts. In that case, stop and remove those containers first, or reuse the existing components after adjusting configuration.

> If startup shows warnings such as missing `ETCD_USERNAME`, `ETCD_PASSWORD`, `KAFKA_USERNAME`, or `KAFKA_PASSWORD`, and you have not enabled authentication for those components, these warnings can usually be ignored.

- Stop services:

```bash
docker compose down
```

- View logs:

```bash
docker logs -f openim-server
```

### 2.4 Monitoring & Alerting (Optional)

If you also want to start `Prometheus`, `Alertmanager`, `Grafana`, and `node-exporter`, run:

```bash
docker compose --profile m up -d
```

Default ports follow the current `.env`. Common values are:

- `19090`: Prometheus
- `19093`: Alertmanager
- `13000`: Grafana
- `19100`: node-exporter

## 3. Quick Experience ⚡

To quickly experience core OpenIMSDK capabilities and verify whether OpenIMServer / ChatServer deployment is working, refer to [Quick Verification](./quickTestServer).

> Additional note for the current project layout: if you deploy from the two source repositories `open-im-server` and `chat`, `open-im-server/docker-compose.yml` is mainly used for dependency components, and ChatServer still needs to be started with `mage start` in the `chat` directory. See [Source Code Deployment](./imSourceCodeDeployment).

## 4. FAQ

### Troubleshooting `unhealthy`
1. Run `docker exec -it openim-server mage check` and confirm whether the state lasts longer than one minute.
2. Run `docker logs -f openim-server` to inspect logs.
3. If `openim-chat` briefly reports `connect: connection refused` during startup, wait `30-60s` and check again. This is usually a startup ordering issue while `openim-server` is still becoming ready.

### Configuration Changes
Editing files under the container `config` directory does not work.
Configuration changes must be made through environment variables. See the [environment variable guide](https://github.com/openimsdk/openim-docker/issues/136).
