---
title: Browser
hide_title: true
sidebar_position: 5
---


## 🧭 Browser Integration Guide

> This document provides a detailed guide on integrating the [OpenIM WASM Client SDK](https://github.com/openimsdk/open-im-sdk-web-wasm) into your Web / Electron project for quick setup and message communication.

---

### 🚀 Quick Demo

We strongly recommend running our official sample project before starting integration:

👉 [OpenIM Electron Demo](https://github.com/openimsdk/openim-electron-demo)

This Demo helps you:

- Quickly verify IM SDK core functionality  
- Familiarize yourself with the complete login and messaging workflow  
- Avoid path and configuration issues during integration

---

### 🧰 Requirements

Before integrating the SDK, ensure:

- Node.js ≥ 16.x  
- npm or yarn package manager  
- Browser supports WebAssembly (all modern mainstream browsers support it)  
- Frontend framework (e.g., React, Vue, Electron) is properly initialized

> ⚠️ Note: If using Webpack 4, refer to [this issue](https://github.com/openimsdk/open-im-sdk-web-wasm/issues/73) for additional configuration.

---

### 📦 Install Dependencies

```bash
npm install @openim/wasm-client-sdk
# or
yarn add @openim/wasm-client-sdk
```

---

### 📁 Configure WASM Static Resources

The SDK requires WebAssembly files to run. Copy the static resources to your project's `public` directory.

1. Navigate to the `node_modules/@openim/wasm-client-sdk` directory  
2. Find the `assets` folder  
3. Copy the following files to your project's `public` directory:

```bash
openIM.wasm
sql-wasm.wasm
wasm_exec.js
```

4. Add the following `<script>` tag in `public/index.html`:

```html
<script src="/wasm_exec.js"></script>
```

> ⚠️ Paths must match the `coreWasmPath` and `sqlWasmPath` parameters.

---

### 🧭 Initialize SDK

Initialize the SDK in your project's entry file.

```ts
import { getSDK } from '@openim/wasm-client-sdk';

const IMSDK = getSDK({
  coreWasmPath: "/openIM.wasm",      // WASM core file path
  sqlWasmPath: "/sql-wasm.wasm",     // SQLite WASM file path
  debug: true                        // Enable debug logging
});
```

> 💡 It is recommended to call `getSDK` early in the application lifecycle, ensuring it is only initialized once globally.

---

### 🔐 Login & Event Listeners

The SDK provides a series of event callbacks for monitoring connection status.  
You can bind these events before logging in for subsequent status monitoring and reconnection handling.

```ts
import { getSDK, CbEvents } from '@openim/wasm-client-sdk';

const IMSDK = getSDK();

// Connection-related events
IMSDK.on(CbEvents.OnConnecting, () => console.log('⏳ Connecting...'));
IMSDK.on(CbEvents.OnConnectSuccess, () => console.log('✅ Connected'));
IMSDK.on(CbEvents.OnConnectFailed, (e) => console.error('❌ Connection failed', e));
IMSDK.on(CbEvents.OnUserTokenExpired, () => console.warn('⚠️ Token expired'));

// Login
IMSDK.login({
  userID: 'yourUserID',
  token: 'yourToken',
  platformID: 5,  // 5 for Web
  apiAddr: 'http://your-server-ip:10002',
  wsAddr: 'ws://your-server-ip:10001',
})
  .then(() => console.log('🎉 Login successful'))
  .catch(({ errCode, errMsg }) => console.error('🚫 Login failed', errCode, errMsg));
```

> 🔁 **Best Practices**:  
> - Bind events before logging in to avoid missing status changes.  
> - After token expiration, call `IMSDK.login()` again to refresh the connection.  
> - A successful `login` call does not mean the connection to IMServer is established — listen for connection events to confirm status.

---

### 💬 Send & Receive Messages

#### Listen for Messages

```ts
IMSDK.on(CbEvents.OnRecvNewMessages, ({ data: messages }) => {
  messages.forEach((msg) => {
    console.log('📩 New message received:', msg);
  });
});
```

#### Send a Text Message

```ts
// Create a text message
const { data: message } = await IMSDK.createTextMessage('Hello OpenIM!');

// Send message
IMSDK.sendMessage({
  recvID: 'targetUserID', // For private chat
  groupID: '',            // For group chat
  message,
})
  .then(({ data: succeedMessage }) => {
    console.log('✅ Sent successfully', succeedMessage);
  })
  .catch(({ errCode, errMsg }) => {
    console.error('🚫 Send failed', errCode, errMsg);
  });
```

> 📝 **Tips**:  
> - Use `recvID` for private chats, `groupID` for group chats.  
> - You can use `IMSDK.createImageMessageByFile()`, `IMSDK.createVideoMessageByFile()`, and other APIs to send different message types.  
> - The successfully sent message returned is the complete message structure populated by the server.

---

### 🧪 Troubleshooting

| Issue Type                    | Possible Cause                                                                 | Solution                                                                                 |
|-----------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| ❌ Console shows `window.Go() is undefined` | Static resource `wasm_exec.js` not copied or path misconfigured                                                 | Verify files exist in the `public` directory and paths match initialization parameters                                       |
| ⚠️ `WebAssembly` initialization failed | Browser version too old or incorrect path                                               | Use a modern browser, check `coreWasmPath` and `sqlWasmPath` paths                                |
| 🚫 Connection failed                  | Wrong token, incorrect API address, or port blocked by firewall                                 | Verify the platform passed when obtaining the token matches the platform used for IMSDK login, confirm `apiAddr` and `wsAddr` are accessible                                     |
---

### 🧭 Debugging Tips

- Enable `debug: true` to view detailed logs
- Use browser DevTools → Network to monitor WebSocket connection status
- Use `IMSDK.getLoginStatus()` to check login status

---

### 🧱 More APIs

The SDK provides rich APIs covering:

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
- [WebAssembly MDN Documentation](https://developer.mozilla.org/en-US/docs/WebAssembly)
