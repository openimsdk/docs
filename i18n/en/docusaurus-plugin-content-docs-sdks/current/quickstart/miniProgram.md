---
title: Mini Program
hide_title: true
sidebar_position: 7
---

## 📱 Mini Program Integration Guide

> This document provides a detailed guide on quickly integrating the [OpenIM Client SDK](https://www.npmjs.com/package/@openim/client-sdk) into Mini Programs or Web environments for instant messaging capabilities.

---

### ⚠️ Prerequisites

:::caution Note

- This JSSDK version is only compatible with **IM Server v3.8.2+**  
- The SDK communicates **directly with IM Server** and **does not store messages or conversations locally**  
- Applicable to:
  - ✅ Web development
  - ✅ WeChat Mini Programs
  - ✅ uni-app

:::

---

### 🧰 Environment Setup

Before integration, ensure the following requirements are met:

- Node.js ≥ 16.x  
- An accessible IM Server (ws + api) is deployed  
- Mini Program or Web project is initialized  
- HTTPS is enabled (required by WeChat Mini Programs)

> 💡 **Tip**: In WeChat Mini Program environments, ensure the `wss://` address is correctly configured and added to the domain whitelist in the Mini Program admin panel.

---

### 📦 Install Dependencies

```bash
npm install @openim/client-sdk --save
# or
yarn add @openim/client-sdk
```

---

### 🧭 Import & Initialize SDK

```ts
import { getSDK } from '@openim/client-sdk';

const IMSDK = getSDK({
  debug: true, // Enable debug mode (optional)
});
```

> ✅ Recommendation: Initialize only once during the application startup phase (e.g., in `App.vue` or `app.js`), sharing the IMSDK instance globally.

---

### 🔐 Login & Connection Status Monitoring

Before calling `login`, it is recommended to register connection event listeners to track SDK status changes.

```ts
import { getSDK, CbEvents, CallbackEvent } from '@openim/client-sdk';

const IMSDK = getSDK();

// Bind connection status listeners
IMSDK.on(CbEvents.OnConnecting, handleConnecting);
IMSDK.on(CbEvents.OnConnectFailed, handleConnectFailed);
IMSDK.on(CbEvents.OnConnectSuccess, handleConnectSuccess);
IMSDK.on(CbEvents.OnUserTokenExpired, handleTokenExpired);

// Login
IMSDK.login({
  userID: 'your-user-id',
  token: 'your-token',
  platformID: 5, // 5 for Web/Mini Program
  wsAddr: 'ws://your-server-ip:10001',
  apiAddr: 'http://your-server-ip:10002',
});

function handleConnecting() {
  console.log('⏳ Connecting...');
}

function handleConnectFailed({ errCode, errMsg }: CallbackEvent) {
  console.error('❌ Connection failed', errCode, errMsg);
}

function handleConnectSuccess() {
  console.log('✅ Connected');
}

function handleTokenExpired() {
  console.warn('⚠️ Token expired, please log in again');
}
```

> 🔁 **Best Practices**:
>
> - Bind event listeners before logging in to avoid missing status changes  
> - After login, the IM SDK automatically maintains the long-lived connection  
> - Re-login is required when the token expires
> - A successful `login` call does not mean the connection to IMServer is established — listen for connection events to confirm status.

---

### 💬 Send & Receive Messages

#### 📥 Listen for Incoming Messages

```ts
import { CbEvents, CallbackEvent, MessageItem } from '@openim/client-sdk';

IMSDK.on(CbEvents.OnRecvNewMessages, handleNewMessages);

function handleNewMessages({ data }: CallbackEvent<MessageItem[]>) {
  console.log('📩 New messages received', data);
}
```

---

#### 📤 Send a Text Message

```ts
// 1. Create a text message
const { data: message } = await IMSDK.createTextMessage('Hello OpenIM!');

// 2. Send the message
IMSDK.sendMessage({
  recvID: 'recipientUserID', // For private chat
  groupID: '',               // For group chat, fill in group ID
  message,
})
  .then(() => {
    console.log('✅ Message sent successfully');
  })
  .catch((err) => {
    console.error('🚫 Failed to send message', err);
  });
```

> 💡 **Tips**:
>
> - Use `recvID` for private chats, `groupID` for group chats  
> - After successful sending, the recipient receives the message via the `OnRecvNewMessages` callback  
> - The SDK also supports various message types

---

### 🧪 Troubleshooting

| Issue                             | Possible Cause                                                     | Solution                                                                                 |
|----------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------| 
| ❌ Cannot connect                      | WebSocket address misconfigured / certificate issue                           | Verify `wsAddr` / `wssAddr` is valid and whitelisted in the Mini Program admin panel                             |
| 🚫 Login failed                      | Wrong token / incorrect IM Server address                             | Check that the platform passed when obtaining the token matches the platform used for IMSDK login, verify server is accessible                                                   |
| 📡 Cannot receive messages                  | `OnRecvNewMessages` event not registered / network disconnected                   | Ensure event binding is correct, network is available, call `getLoginStatus` to check status if needed                         |
| 🕒 Mini Program cannot connect to ws:// address     | WeChat Mini Programs only allow secure wss:// connections                             | Use a valid HTTPS certificate and configure the wss whitelist in the Mini Program admin panel                                     |

---

### 🧭 Debugging Tips

- Enable `debug: true` to view detailed logs  
- Use browser DevTools / WeChat Developer Tools to inspect WebSocket connection status  
- Call `IMSDK.getLoginStatus()` to get real-time login status  

---

### 🧱 More APIs

[OpenIM Client SDK](https://www.npmjs.com/package/@openim/client-sdk) provides rich capabilities including but not limited to:

- ✅ User information management  
- 📩 Message history queries  
- 🧑‍🤝‍🧑 Group operations  
- 📡 Custom message sending  
- 🛡️ Conversation management, message recall, read receipts, etc.

👉 Full API documentation:  
[IMSDK API Reference](../api)

---

### 📚 References

- [OpenIM Official Website](https://openim.io)  
- [OpenIM GitHub](https://github.com/openimsdk)  
- [WeChat Mini Program Documentation](https://developers.weixin.qq.com/miniprogram/dev/framework/)  
