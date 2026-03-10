---
title: Electron
hide_title: true
sidebar_position: 6
---


## 🚀使用 Demo
我们强烈建议您首先运行我们为您准备的框架相关的示例 [DEMO](https://github.com/openimsdk/openim-electron-demo) (feat-electron-ffi分支)。这不仅可以让您直观体验 IMSDK 的功能，还将帮助您在实际集成过程中迅速定位和解决问题。


## 快速集成

### 1. 添加依赖

```shell
npm install @openim/wasm-client-sdk @openim/electron-client-sdk --save
```

### 2. 获取 wasm 所需静态资源

> 在项目根目录下的`node_modules`目录下找到`@openim/wasm-client-sdk`子目录，将其中`assets`文件夹下的所有文件拷贝到项目公共资源目录中（public）。

- 文件清单

```bash
openIM.wasm
sql-wasm.wasm
wasm_exec.js
```

- 拷贝完成后在您的`index.html`文件中通过 script 标签引入`wasm_exec.js`文件

- 可能存在的问题
  > 如果您正在使用webpack4，可能需要参考这个issue来进行配置[How to import @openim/wasm-client-sdk in webpack4.x](https://github.com/openimsdk/open-im-sdk-web-wasm/issues/73)

### 3. 引入 SDK

- 主进程

```typescript
import OpenIMSDKMain from '@openim/electron-client-sdk';

...
new OpenIMSDKMain(libPath, mainWindow.webContents);
...
```

- preload脚本

```typescript
import '@openim/electron-client-sdk/lib/preload';

...
```

- 渲染进程

```typescript
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';

const { instance } = getWithRenderProcess();

export const IMSDK = instance;
```

### 4. 登录、设置监听
> 注意：在electron和web环境下，初始化SDK的方式有所不同。如果需要同时支持electron和web，需要注意分别处理。

```typescript
import { CbEvents, LogLevel } from '@openim/wasm-client-sdk';
import type { WSEvent } from '@openim/wasm-client-sdk/lib/types/entity';

IMSDK.on(CbEvents.OnConnecting, handleConnecting);
IMSDK.on(CbEvents.OnConnectFailed, handleConnectFailed);
IMSDK.on(CbEvents.OnConnectSuccess, handleConnectSuccess);

// electron
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

// web
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

### 5. 收发消息

```typescript
import { CbEvents } from '@openim/wasm-client-sdk';
import type { WSEvent, MessageItem } from '@openim/wasm-client-sdk/lib/types/entity';

// Listenfor new messages 📩
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