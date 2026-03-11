---
title: 'Ports'
sidebar_position: 6
---

# 🔐 Ports and Firewall

## 1. Without a Domain Name and SSL Certificate

The following ports must be opened on the server. Other ports should not be exposed publicly.

| Module | Port | Description | Action |
| --- | --- | --- | --- |
| OpenIMServer | TCP:10001 | WebSocket message port used by OpenIMClientSDK | Open the port |
| OpenIMServer | TCP:10002 | API port for users, friends, groups, messages, and related APIs | Open the port |
| OpenIMServer | TCP:10005 | MinIO object storage | Open the port |
| ChatServer | TCP:10008 | APP Business Server APIs such as registration and login | Open the port |
| ChatServer | TCP:10009 | APP Administrator APIs such as statistics and user bans | Open the port |
| Web frontend (optional) | TCP:11001 | PC Web frontend; needed for browser-based quick verification | Open if needed |
| Admin frontend (optional) | TCP:11002 | APP Administrator frontend page | Open if needed |

In the client SDK, initialize with:

```text
apiAddr: http://your_server_ip:10002
wsAddr: ws://your_server_ip:10001
```

## 2. With a Domain Name and SSL Certificate

The following ports must be opened on the server. Other ports should not be exposed publicly.

| Port | Description | Action |
| --- | --- | --- |
| TCP:443 | Default HTTPS port | Open the port |

Configuration reference: [Domain and SSL Certificate Configuration](./nginxDomainConfig)

Complete DNS resolution first so that the IP is bound to the domain.

In the client SDK, initialize with:

```text
apiAddr: https://your_domain.com/api
wsAddr: wss://your_domain.com/msg_gateway
```

> Monitoring, frontend, and other service ports are recommended to stay internal-only and be exposed only when needed.

> If you want to access `11001` directly from the browser as described in [Quick Verification](./quickTestServer), the frontend port must be reachable. If you do not need frontend page verification, you do not need to expose `11001/11002` publicly.
