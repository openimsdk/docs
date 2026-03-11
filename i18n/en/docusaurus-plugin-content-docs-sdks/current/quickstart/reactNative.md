---
title: React Native
hide_title: true
sidebar_position: 4
---

## Using the Demo 🚀
We strongly recommend running our framework-specific [DEMO](https://github.com/openimsdk/openim-reactnative-demo) first. This will not only give you a hands-on experience of OpenIMSDK's features, but also help you quickly identify and resolve issues during actual integration.

## Important Notes ❗️

- Starting from version `v3.8.3-patch.10`, the package name changed from `open-im-sdk-rn` to `@openim/rn-client-sdk`.

- Starting from version `v3.8.3-patch.10.2`, the `operationID` parameter is optional (if not provided, the SDK will auto-generate one). In earlier versions, this parameter was required and had to be passed explicitly. (operationID is used for backend log queries)

- Starting from version `v3.8.3-patch.10.2`, you can use `OpenIMSDK.on()` to listen for events. In earlier versions, you had to use the `OpenIMEmitter` object. The latest version supports both methods, but `OpenIMSDK.on()` is recommended as it provides better TypeScript type hints.

- `v3.5.1` contains significant breaking changes. If upgrading, please verify input parameters and return data.

## Integration Steps (React Native CLI)

### 1. Add Dependency

```sh
yarn add @openim/rn-client-sdk
```

### 2. Initialize SDK

```ts
import OpenIMSDK from '@openim/rn-client-sdk';
import RNFS from 'react-native-fs';

RNFS.mkdir(RNFS.DocumentDirectoryPath + '/tmp');

OpenIMSDK.initSDK({
  platformID: 2,  // 1: iOS, 2: Android
  apiAddr: 'http://your-server-ip:10002',
  wsAddr: 'ws://your-server-ip:10001',
  dataDir: RNFS.DocumentDirectoryPath + '/tmp',
  logFilePath: RNFS.DocumentDirectoryPath + '/tmp',
  logLevel: 5,
  isLogStandardOutput: true,
});
```

### 3. Login & Set Listeners

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

For versions prior to `v3.8.3-patch.10.2`, use the following code:

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

### 4. Send & Receive Messages

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

For versions prior to `v3.8.3-patch.10.2`, use the following code:

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
