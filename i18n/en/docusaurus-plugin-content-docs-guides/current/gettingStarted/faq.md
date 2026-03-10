---
title: 'FAQ'
sidebar_position: 10
---

## 1. How to Upgrade

Within the same major version, data is compatible across different minor versions. For example, data from version **3.8.0** will work correctly after upgrading to **3.8.2**. This section covers the specific upgrade steps for this scenario.

### Docker Deployment

1. **Navigate to the existing `openim-docker` directory:**
    ```bash
    cd openim-docker
    ```

2. **Edit the `.env` file and modify the image tag. For example, change:**
    ```env
    OPENIM_SERVER_IMAGE=openim/openim-server:release-v3.8.0
    ```
    **to:**
    ```env
    OPENIM_SERVER_IMAGE=openim/openim-server:release-v3.8.2
    ```

3. **Stop the existing Docker services:**
    ```bash
    docker compose down
    ```

4. **Start the updated Docker services:**
    ```bash
    docker compose up -d
    ```

### Source Code Deployment

1. **Navigate to the existing `open-im-server` directory:**

    ```bash
    cd open-im-server
    ```

2. **Stop the current service:**
    ```bash
    mage stop
    ```

3. **Switch branch and update code:**
    ```bash
    git pull
    ```

4. **Build and start the service:**
    ```bash
    mage
    mage start
    ```


---
## 2. How to Migrate Data

After starting each component that IMServer depends on using `docker compose up -d`, a `components` folder is generated in the IMServer root directory. All data produced by IMServer (such as users, groups, messages, etc.) is stored in this folder. To migrate data, first stop all services and components:

`Docker` deployment:

```sh
docker compose down
```

Source code deployment:

```sh
mage stop  # Stop services
docker compose down  # Stop components
```

Then move the entire folder to the new data directory, update the `DATA_DIR` value in the `.env` file to the new data directory path, and restart services and components:

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

To clear all data, first stop all services and components:

`Docker` deployment:

```sh
docker compose down
```

Source code deployment:

```sh
mage stop  # Stop services
docker compose down  # Stop components
```

Then delete the `components` folder under `open-im-server`.

On the client side, uninstall and reinstall the `app`.

---
## 4. Text Messages Work but Image Sending Fails

Image sending failures are typically caused by unconfigured third-party object storage. The default object storage is `MinIO` — you need to modify the relevant configuration:
```
Source code deployment:
Edit the config/minio.yml file and configure the MinIO external IP to support sending images, videos, and files.
Replace your-server-ip with your server's public IP.
externalAddress="http://your-server-ip:10005"
```

```
Docker deployment:
Edit the .env file and configure the MinIO external IP to support sending images, videos, and files.
Replace your-server-ip with your server's public IP.
MINIO_EXTERNAL_ADDRESS="http://your-server-ip:10005"
```
---

## 5. Reducing MongoDB and Kafka Memory Usage

If you deployed components using `Docker`, you can limit the memory usage of `mongo` and `kafka` in the `docker-compose.yml` file.

`MongoDB`:

```yml
  mongodb:
    environment:
    - wiredTigerCacheSizeGB=0.5  # Set to an appropriate value in GB
```

`Kafka`:

```yml
  kafka:
    environment:
      KAFKA_HEAP_OPTS: "-Xms256m -Xmx256m"  # Add this memory limit
```

---
