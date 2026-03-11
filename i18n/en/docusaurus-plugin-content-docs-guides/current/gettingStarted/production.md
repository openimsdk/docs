---
title: 'Production'
sidebar_position: 8
slug: /gettingStarted/production
---

# Production

This page only describes the impact of **runtime failures** in production and how to recover from them.

## 1. General Recovery Order

1. Recover external components first.
2. Recover OpenIMServer next.
3. Recover ChatServer last.

## 2. Runtime Failures of External Components

| Failed Component | Runtime Impact | Recovery Action |
| --- | --- | --- |
| MongoDB unavailable | OpenIMServer `10002` may still respond, but ChatServer and APP Administrator APIs often fail | Recover MongoDB first; immediately retest `10002/10008/10009`; if still abnormal, restart OpenIMServer / ChatServer |
| Redis unavailable | OpenIMServer authentication becomes abnormal; source deployment often shows `auth-rpc-service down`, while all-in-one Docker deployment often shows Redis connection or resolution errors | Recover Redis first; observe for `30-60s`; if OpenIMServer authentication is still abnormal, restart OpenIMServer |
| Kafka unavailable | Basic probes may still pass, but message transfer and push paths become abnormal | Recover Kafka first; then run end-to-end message send / consume / push verification |
| Etcd unavailable | Running instances can usually keep serving for a short period, but service restarts may fail | Recover Etcd first; if service registration does not recover, restart OpenIMServer / ChatServer |
| MinIO unavailable | File upload/download fails; in source deployment the basic probes usually remain healthy, while all-in-one Docker deployment may also break `10002/10008/10009` | Recover MinIO and verify `externalAddress`; if all-in-one Docker deployment still does not recover within `30-60s`, restart the OpenIMServer / ChatServer service stack |

### External Component Recovery Commands

For `openim-docker` deployment:

```bash
cd /path/to/openim-docker
docker compose up -d mongo redis kafka etcd minio
```

For `open-im-server` source deployment:

```bash
cd /path/to/open-im-server
docker compose up -d mongodb redis kafka etcd minio
```

> The default service name is `mongo` in `openim-docker`, and `mongodb` in `open-im-server`.

## 3. OpenIMServer Runtime Failures

| Failed Service | Runtime Impact | Recovery Action |
| --- | --- | --- |
| `openim-api` | `10002` is usually unavailable | Run `mage stop && mage start` in the `open-im-server` directory |
| `openim-rpc-auth` | OpenIMServer auth probes fail, while ChatServer probes may still be available | Run `mage stop && mage start` in the `open-im-server` directory |
| `openim-msggateway` | Real-time WebSocket connectivity is interrupted | Run `mage stop && mage start` in the `open-im-server` directory |
| `openim-msgtransfer` / `openim-push` | Message delivery and push degrade; basic probes may still pass | Run `mage stop && mage start` in the `open-im-server` directory, then run message-path verification |
| `openim-crontask` | Scheduled tasks stop running | Run `mage stop && mage start` in the `open-im-server` directory |

OpenIMServer recovery command:

```bash
cd /path/to/open-im-server
mage check
mage stop
mage start
mage check
```

## 4. ChatServer Runtime Failures

| Failed Service | Runtime Impact | Recovery Action |
| --- | --- | --- |
| `chat-api` | The APP Business Server API `10008` is usually unavailable | Run `mage stop && mage start` in the `chat` directory |
| `chat-rpc` | Core ChatServer business calls fail, while the basic HTTP port may still exist | Run `mage stop && mage start` in the `chat` directory |
| `admin-api` | The APP Administrator API `10009` is usually unavailable, while `10008` may still work | Run `mage stop && mage start` in the `chat` directory |
| `admin-rpc` | APP Administrator business calls fail | Run `mage stop && mage start` in the `chat` directory |
| `bot-api` / `bot-rpc` | Bot-related capabilities fail | Run `mage stop && mage start` in the `chat` directory |

ChatServer recovery command:

```bash
cd /path/to/chat
mage check
mage stop
mage start
mage check
```

## 5. Post-Recovery Verification

After recovery, verify at least the following:

1. `mage check` or `docker ps` is healthy.
2. The three basic probes `10002`, `10008`, and `10009` are restored.
3. For Kafka and MinIO incidents, run additional message-path and file-path verification.

> Basic probes for OpenIMServer and ChatServer must include the `operationID` request header.
