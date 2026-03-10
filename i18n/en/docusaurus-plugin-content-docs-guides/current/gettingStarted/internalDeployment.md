---
title: 'Air-Gapped Deployment'
sidebar_position: 4
---
## 📌 Air-Gapped Deployment Guide

This guide walks you through deploying OpenIM services on a machine without internet access (air-gapped/internal network).

### **Docker Deployment**

1. On an internet-connected machine, clone the repository:

   ```sh
   git clone https://github.com/openimsdk/openim-docker
   ```

2. Run `docker compose up -d` to pull all required images.

3. Save the required images. The command is:

   ```sh
   docker save -o image-name.tar image-name:tag
   ```

   For example, to save the `openim-server` image:

   ```sh
   docker save -o openim-server.tar openim/openim-server:release-v3.8.1
   ```

   To save the `mongo` image:

   ```sh
   docker save -o mongo.tar mongo:7.0
   ```

   You can use `docker images` to view pulled image information, or check the `.env` file for image version details.

   All images that need to be saved:

   - `mongo:7.0`
   - `redis:7.0.0`
   - `bitnami/kafka:3.5.1`
   - `minio/minio:RELEASE.2024-01-11T07-46-16Z`
   - `quay.io/coreos/etcd:v3.5.13`
   - `openim/openim-web-front:release-v3.8.1`
   - `openim/openim-admin-front:release-v1.8.3`
   - `openim/openim-server:release-v3.8.2`
   - `openim/openim-chat:v1.8.2`

   The following are monitoring and alerting component images (optional):

   - `prom/prometheus:v2.51.2`
   - `prom/alertmanager:v0.27.0`
   - `grafana/grafana:11.0.1`
   - `prom/node-exporter:v1.7.0`

4. Transfer the **image files** and **docker repository files** to the deployment machine via internal network or physical media.

5. Import images into Docker:
   ```bash
   docker load -i image-name.tar
   ```

   For example, to import the `openim-server` image:

   ```sh
   docker load -i openim-server.tar
   ```

6. In the repository directory, run:
   ```sh
   docker compose up -d
   ```

   To start with monitoring components:
   ```sh
   docker compose --profile m up -d
   ```

### **Source Code Deployment**

1. On an internet-connected machine, clone the server repository (recommended: switch to the release-v3.8.2 branch):

   ```sh
   git clone https://github.com/openimsdk/open-im-server
   ```

2. Clone the `chat` repository (recommended: switch to the release-v1.8.3 branch):
   ```bash
   git clone https://github.com/openimsdk/chat
   ```

3. Follow the [Docker deployment](#docker-deployment) steps to save images, except you do not need `openim/openim-server:release-v3.8.2` and `openim/openim-chat:v1.8.2`.

4. Transfer the **image files**, **server repository files**, and **chat repository files** to the deployment machine via internal network or physical media.

5. Import images into Docker:

   ```bash
   docker load -i image-name.tar
   ```

   For example, to import the `mongo` image:

   ```sh
   docker load -i mongo.tar
   ```

6. In the `server` directory, run the following commands in order:
   ```bash
   docker compose up -d  # To enable monitoring: docker compose --profile m up -d
   mage
   mage start
   ```

7. In the `chat` directory, run:
   ```bash
   mage
   mage start
   ```
