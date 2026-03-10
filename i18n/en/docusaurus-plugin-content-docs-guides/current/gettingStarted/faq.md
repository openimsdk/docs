---
title: 'FAQ'
sidebar_position: 10
---

## 1. How to Upgrade

Within the same major version, data is usually compatible across minor versions. It is recommended to upgrade to the latest official release tag marked with the green **Latest** badge on GitHub Releases. If you need a fixed version (for example `v3.8.3-patch.12`), explicitly checkout that tag.

### Docker Deployment

1. **Enter the existing `openim-docker` directory:**
    ```bash
    cd openim-docker
    ```

2. **Fetch and switch to the latest official release tag:**
    ```bash
    git fetch --tags
    TARGET_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/openim-docker/releases/latest)")
    git checkout "$TARGET_TAG"
    echo "upgrade openim-docker to stable release tag: $TARGET_TAG"
    ```

3. **Check whether the image tags in `.env` match the current repository version, and adjust them manually according to the release notes if necessary.**

4. **Stop the current Docker services:**
    ```bash
    docker compose down
    ```

5. **Start the upgraded Docker services:**
    ```bash
    docker compose pull
    docker compose up -d
    ```

### Source Code Deployment

1. **Enter the existing `open-im-server` directory:**

    ```bash
    cd open-im-server
    ```

2. **Stop the current service:**
    ```bash
    mage stop
    ```

3. **Switch to the latest official release tag (or a specified tag) and update the code:**
    ```bash
    git fetch --tags
    TARGET_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
    git checkout "$TARGET_TAG"
    ```

4. **Build and start the service:**
    ```bash
    mage
    mage start
    ```

5. **If ChatServer is also deployed, it is recommended to upgrade ChatServer to the corresponding tag and then restart it as well.**

> Here, `latest` means the latest official release marked with the green **Latest** badge on GitHub Releases. It does not include alpha, beta, rc, or other pre-releases.

---
## 2. How to Migrate Data

After starting components with `docker compose up -d`, a `components` directory is created in the current deployment repository root (for example `openim-docker/components` or `open-im-server/components`). Runtime data such as users, groups, and messages is stored there. If you need to migrate data, stop services and components first:

`Docker` deployment:

```sh
docker compose down
```

Source code deployment:

```sh
mage stop  # Stop services
docker compose down  # Stop components
```

Then move the entire folder to the new data directory, update the `DATA_DIR` value in `.env`, and start services and components again:

`Docker` deployment:

```sh
docker compose up -d  # Start components
```

Source code deployment:

```sh
docker compose up -d  # Start components
mage start  # Start services
```

---
## 3. How to Clear Data

If you need to clear all data, stop services and components first:

`Docker` deployment:

```sh
docker compose down
```

Source code deployment:

```sh
mage stop  # Stop services
docker compose down  # Stop components
```

Then delete the `components` directory under the current deployment repository.

On the client side, you need to uninstall and reinstall the app.

---
## 4. Text Messages Work but Image Sending Fails

If text messages work but images fail, the usual reason is that third-party object storage is not configured correctly. The default object storage is `minio`, so you need to modify the related configuration.

For source deployment, edit `config/minio.yml` and change `externalAddress` to the public IP or domain path:

```yaml
externalAddress: http://your-server-ip:10005
```

For Docker deployment, edit `.env` and change `MINIO_EXTERNAL_ADDRESS` to the public IP or domain path:

```dotenv
MINIO_EXTERNAL_ADDRESS="http://your-server-ip:10005"
```

---

## 5. Reduce MongoDB and Kafka Memory Usage

If the components were deployed with `docker`, you can reduce memory usage by limiting `mongo` and `kafka` in `docker-compose.yml`.

`mongo` (service name in `openim-docker`) or `mongodb` (service name in `open-im-server`):

> If you use source deployment, replace `mongo` in the following example with `mongodb`.

```yml
  mongo:
    environment:
    - wiredTigerCacheSizeGB=0.5  # Adjust to an appropriate value, unit: GB
```

`kafka`:

```yml
  kafka:
    environment:
      KAFKA_HEAP_OPTS: "-Xms256m -Xmx256m"  # Add this memory limit
```

---
