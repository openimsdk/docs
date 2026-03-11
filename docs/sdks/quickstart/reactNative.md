---
title: React Native
hide_title: true
sidebar_position: 4
---

## 使用 Demo 🚀
我们强烈建议您首先运行我们为您准备的框架相关的示例 [DEMO](https://github.com/openimsdk/openim-reactnative-demo) 。这不仅可以让您直观体验 OpenIMSDK 的功能，还将帮助您在实际集成过程中迅速定位和解决问题。

## 注意事项 ❗️

- **Android 16KB 页大小支持：** 从 `v3.8.3-patch.12` 开始，Android 核心依赖升级为 `io.openim:core-sdk:3.8.3-patch12+1`，新增了对使用 16KB 内存页大小设备的兼容性。

- **Expo 支持：** 从 `v3.8.3-patch.10.3` 及之后版本开始支持 Expo 的 development build（custom dev client）。

- 从 `v3.8.3-patch.10` 版本开始，包名从 `open-im-sdk-rn` 改为 `@openim/rn-client-sdk`。

- 从 `v3.8.3-patch.10.2` 版本开始，`operationID` 参数是可选的（如果未提供，SDK 将自动生成一个），在之前的版本，这个参数是必填的，必须显式传递。（operationID 用于后端日志查询）

- 从 `v3.8.3-patch.10.2` 版本开始，您可以使用 `OpenIMSDK.on()` 来监听事件，在之前的版本，您必须使用 `OpenIMEmitter` 对象。最新版本兼容两种方式，但推荐使用 `OpenIMSDK.on()`，因为它提供了更好的 TypeScript 类型提示。

- `v3.5.1` 包含了重大的破坏性更新。如果您需要升级，请检查传入参数和返回数据。

## 集成步骤 ( React Native CLI )

### 1. 添加依赖

#### 在 React Native CLI 项目中安装

```sh
# 安装 openim sdk
npm install @openim/rn-client-sdk

# 安装 iOS 依赖
cd ios && pod install && cd ..
```

#### 在 Expo 项目中安装

`v3.8.3-patch.10.3` 及之后版本支持 Expo。由于该包桥接了原生模块，因此需要使用 development build（custom dev client），不支持 Expo Go。

```sh
# 安装 openim sdk
npm install @openim/rn-client-sdk

# 生成原生工程并运行
npx expo prebuild
npx expo run:android
npx expo run:ios

# 可选：安装 Expo 开发客户端
npx expo install expo-dev-client
```

### 2. 初始化 SDK

```ts
import OpenIMSDK from '@openim/rn-client-sdk';
import RNFS from 'react-native-fs';

RNFS.mkdir(RNFS.DocumentDirectoryPath + '/tmp');

OpenIMSDK.initSDK({
  apiAddr: 'http://your-server-ip:10002',
  wsAddr: 'ws://your-server-ip:10001',
  dataDir: RNFS.DocumentDirectoryPath + '/tmp',
  logFilePath: RNFS.DocumentDirectoryPath + '/tmp',
  logLevel: 5,
  isLogStandardOutput: true,
});
```

### 3. 登录、设置监听

```ts
import OpenIMSDK from '@openim/rn-client-sdk';

OpenIMSDK.login({
  userID: 'IM user ID',
  token: 'IM user token',
});

OpenIMSDK.on('onConnecting', () => {
  console.log('onConnecting');
});

OpenIMSDK.on('onConnectSuccess', () => {
  console.log('onConnectSuccess');
});

OpenIMSDK.on('onConnectFailed', ({ errCode, errMsg }) => {
  console.log('onConnectFailed', errCode, errMsg);
});
```

如果您使用的是 `v3.8.3-patch.10.2` 以前的版本，请使用以下代码：

```ts
import OpenIMSDKRN, { OpenIMEmitter } from '@openim/rn-client-sdk';

OpenIMSDKRN.login({
  userID: 'IM user ID',
  token: 'IM user token',
}, 'opid');

OpenIMEmitter.addListener('onConnecting', () => {
  console.log('onConnecting');
});

OpenIMEmitter.addListener('onConnectSuccess', () => {
  console.log('onConnectSuccess');
});

OpenIMEmitter.addListener('onConnectFailed', ({ errCode, errMsg }) => {
  console.log('onConnectFailed', errCode, errMsg);
});
```

### 4. 收发消息

```ts
import OpenIMSDK from '@openim/rn-client-sdk';
import type { MessageItem } from '@openim/rn-client-sdk';

OpenIMSDK.on('onRecvNewMessages', (messages: MessageItem[]) => {
  console.log('onRecvNewMessages', messages);
});

const message = await OpenIMSDK.createTextMessage('hello openim');

OpenIMSDK.sendMessage({
  recvID: 'recipient user ID',
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
```

如果您使用的是 `v3.8.3-patch.10.2` 以前的版本，请使用以下代码：

```ts
import OpenIMSDKRN, { OpenIMEmitter } from '@openim/rn-client-sdk';

OpenIMEmitter.addListener('onRecvNewMessages', (messages) => {
  console.log('onRecvNewMessages', messages);
});

const message = await OpenIMSDKRN.createTextMessage('hello openim', 'opid');

OpenIMSDKRN.sendMessage({
  recvID: 'recipient user ID',
  groupID: '',
  message,
}, 'opid')
  .then(() => {
    // Message sent successfully ✉️
  })
  .catch(err => {
    // Failed to send message ❌
    console.log(err);
  });
```
