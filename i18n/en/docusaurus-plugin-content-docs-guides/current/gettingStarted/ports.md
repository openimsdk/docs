---
title: 'Ports & Firewall'
sidebar_position: 6
---

# 🔐 Ports & Firewall

---

## 📡 IM Server Ports

The following ports must be allowed through the firewall for IMServer to communicate properly.

| TCP Port | Description | Action ⚙️ |
| --- | --- | --- |
| **10001** | WebSocket message port for client SDK communication | ✅ Allow |
| **10002** | API port providing user, contact, group, and message interfaces | ✅ Allow |
| **10005** | Required when using MinIO storage (default in IMServer) | ✅ Allow |

---

## 💻 Web Frontend & Admin Dashboard Ports

| TCP Port | Description | Action ⚙️ |
| --- | --- | --- |
| **11001** | PC Web client and admin dashboard frontend resources | ✅ Allow |

---

## 📊 Grafana Monitoring Port

| TCP Port | Description | Action ⚙️ |
| --- | --- | --- |
| **13000** | Grafana monitoring dashboard | ✅ Allow |

---

> ⚠️ **Note:**
> If your server has a firewall enabled (such as `ufw` or `firewalld`), make sure the above ports are allowed.
> For example, on Linux:
>
> ```bash
> sudo ufw allow 10001:10005/tcp
> sudo ufw allow 11001/tcp
> sudo ufw allow 13000/tcp
> sudo ufw reload
> ```
>

You can also use online port checking tools (for public-facing servers):

https://portchecker.co/

https://www.yougetsignal.com/tools/open-ports/

Enter your server's public IP and port number to check if it is accessible.
