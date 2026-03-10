---
title: 'Platform & Components'
sidebar_position: 1
---

# 🧩 Platform & Component Requirements

Applies to the OpenIMServer and ChatServer deployment documents under `docs/guides/gettingStarted`.

---

## 1. Terminology

- **OpenIMSDK**: The overall project name, including OpenIMClientSDK and OpenIMServer.
- **OpenIMClientSDK**: The client SDK.
- **OpenIMServer**: The IM core server.
- **ChatServer**: The business extension server. This documentation no longer uses `Chat` as a standalone product name.
- **APP Administrator**: The backend management role that calls management APIs such as `10009`.
- **APP Business Server**: The application-side server that calls business extension APIs such as `10008`.

## 2. Version and Branch Strategy

- `main`: The development branch for unreleased changes in continuous integration. It is not recommended for production.
- `vX.Y.Z...`: Stable release version naming.
- For production, prefer the latest official release marked with the green **Latest** badge on the GitHub Releases page.
- If you need reproducible troubleshooting, rollback, or multi-environment consistency, pin an explicit stable release tag.

## 3. Environment Requirements

| Item | Details | Notes |
| --- | --- | --- |
| Operating system | Linux | Officially uses `ubuntu 22.04`; `Debian 13` has also been verified to work |
| Hardware resources | 8 CPU cores, 16 GB RAM, 10 Mbps bandwidth, 1 TB disk | Estimated for 100k registered users, 10% daily online ratio, 50k-member large groups, and 600 messages per second; requires a public IP |
| CPU architecture | `x86_64` | ARM requires separate verification |
| Golang | `v1.22.7` or higher | [Installation reference](https://go.dev/learn/) |
| Docker | `v24.0.5` or higher | Must include `compose` support |
| Git | `v2.17.1` or higher | [Installation reference](https://git-scm.com/downloads) |

## 4. External Component Requirements

| Component | Recommended Version | Supported Modes in OpenIMServer | ChatServer Access Mode | Cloud Support / Notes |
| --- | --- | --- | --- | --- |
| MongoDB | `v7.0` | `standalone`, `replicaSet` | `address` or `uri` | Supported; for replica sets, `uri` is preferred |
| Redis | `v7.0.0` | `standalone`, `cluster`, `sentinel` | `standalone`, `clusterMode` | Supported; `sentinel` is explicitly supported only in OpenIMServer config |
| Etcd | `v3.5.13` | Single node, multi-node cluster | Multi-address access | No managed cloud support |
| Kafka | `v3.5.1` | Single node, distributed cluster | Not directly used by ChatServer | Supported; required topics must be created in advance |
| MinIO | `RELEASE.2024-01-11T07-46-16Z` | Single node | Not directly used by ChatServer | Can be replaced with S3-compatible storage such as `COS`, `OSS`, `Kodo`, or `AWS S3` |

---
