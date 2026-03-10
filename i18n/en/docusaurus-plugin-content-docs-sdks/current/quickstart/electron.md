---
title: Electron
hide_title: true
sidebar_position: 6
---


## 🚀 Using the Demo
We strongly recommend running our framework-specific [DEMO](https://github.com/openimsdk/openim-electron-demo) (feat-electron-ffi branch) first. This will not only give you a hands-on experience of IMSDK's features, but also help you quickly identify and resolve issues during actual integration.


## Quick Integration

### 1. Add Dependencies

```shell
npm install @openim/wasm-client-sdk @openim/electron-client-sdk --save
```

### 2. Obtain WASM Static Resources

> In the `node_modules` directory under your project root, find the `@openim/wasm-client-sdk` subdirectory and copy all files from the `assets` folder to your project's public resource directory (public).

- File list

```bash
openIM.wasm
sql-wasm.wasm
wasm_exec.js
```

- After copying, include `wasm_exec.js` via a script tag in your `index.html` file

- Potential issues
  > If using Webpack 4, you may need to refer to this issue for configuration: [How to import @openim/wasm-client-sdk in webpack4.x](https://github.com/openimsdk/open-im-sdk-web-wasm/issues/73)

### 3. Import SDK

- Main process

```typescript
import OpenIMSDKMain from '@openim/electron-client-sdk';

...
new OpenIMSDKMain(libPath, mainWindow.webContents);
...
```

- Preload script

```typescript
import '@openim/electron-client-sdk/lib/preload';

...
```

- Renderer process

```typescript
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';

const { instance } = getWithRenderProcess();

export const IMSDK = instance;
```

### 4. Login & Set Listeners
> Note: SDK initialization differs between Electron and Web environments. If you need to support both, handle them separately.

```typescript
import { CbEvents, LogLevel } from '@openim/wasm-client-sdk';
import type { WSEvent } from '@openim/wasm-client-sdk/lib/types/entity';

IMSDK.on(CbEvents.OnConnecting, handleConnecting);
IMSDK.on(CbEvents.OnConnectFailed, handleConnectFailed);
IMSDK.on(CbEvents.OnConnectSuccess, handleConnectSuccess);

// Electron
await IMSDK.initSDK({
  platformID: 'your-platform-id',
  apiAddr: 'http://your-server-ip:10002',
  wsAddr: 'ws://your-server-ip:10001',
  dataDir: 'your-db-dir',
  logFilePath: 'your-log-file-path',
  logLevel: LogLevel.Debug,
  isLogStandardOutput: true,
});

await IMSDK.login({
  userID: 'your-user-id',
  token: 'your-token',
});

// Web
await IMSDK.login({
  userID: 'your-user-id',
  token: 'your-token',
  platformID: 5,
  apiAddr: 'http://your-server-ip:10002',
  wsAddr: 'ws://your-server-ip:10001',
  logLevel: LogLevel.Debug,
});

function handleConnecting() {
  // Connecting...
}

function handleConnectFailed({ errCode, errMsg }: WSEvent) {
  // Connection failed ❌
  console.log(errCode, errMsg);
}

function handleConnectSuccess() {
  // Connection successful ✅
}
```

### 5. Send & Receive Messages

```typescript
import { CbEvents } from '@openim/wasm-client-sdk';
import type { WSEvent, MessageItem } from '@openim/wasm-client-sdk/lib/types/entity';

// Listen for new messages 📩
IMSDK.on(CbEvents.OnRecvNewMessages, handleNewMessages);

const message = (await IMSDK.createTextMessage('hello openim')).data;

IMSDK.sendMessage({
  recvID: 'recv user id',
  groupID: '',
  message,
})
  .then(() => {
    // Message sent successfully ✉️
  })
  .catch(err => {
    // Failed to send message ❌
    console.log(err);
  });

function handleNewMessages({ data }: WSEvent<MessageItem[]>) {
  // New message list 📨
  console.log(data);
}
```
