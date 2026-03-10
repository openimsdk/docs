---
title: 'Docker Deployment'
sidebar_position: 2

---
## 1. Prerequisites 🌍
For server hardware, software, operating system, and component requirements, please refer to [this document](./env-comp).

## 2. Deploy IMServer
### 2.1 Clone the Repository 🗂️

```bash
git clone https://github.com/openimsdk/openim-docker && cd openim-docker
```

### 2.2 Modify Configuration 🔧

- Edit the `.env` file to configure the MinIO external IP for sending images, videos, and files. Replace `your-server-ip` with your server's public IP address:

  ```plaintext
  MINIO_EXTERNAL_ADDRESS="http://your-server-ip:10005"
  ```



### 2.3 Start Services 🚀

- Start services:

```bash
docker compose up -d
```


- Stop services:

```bash
docker compose down
```

- View logs:

```bash
docker logs -f openim-server
```

## 3. Quick Verification ⚡

To quickly test the core capabilities of OpenIMSDK and verify your deployment, refer to [Quick Verification](./quickTestServer).


## 4. FAQ

### Troubleshooting Unhealthy Status
1. Run `docker exec -it openim-server mage check` and verify if it has been running for more than one minute.
2. Run `docker logs -f openim-server` to view logs.

### Modifying Configuration
Editing configuration files inside the `config` directory within the container has no effect!
You must use environment variables to modify configuration. Refer to the [Environment Variable Configuration Guide](https://github.com/openimsdk/openim-docker/issues/136).
