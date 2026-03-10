---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onRecvNewMessages

## Description

:::info

This callback is received when new messages arrive. It may carry multiple messages.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
]
}>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onRecvNewMessages(data: WSEvent<MessageItem[]>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| data | [WSEvent](/class/response.md)<[MessageItem](/class/message/messageInfo.md)[]> | New message |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.on(CbEvents.OnRecvNewMessages, ({ data }) => {
  // data: new message list
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onRecvNewMessages(data: WSEvent<MessageItem[]>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| data | [WSEvent](/class/response.md)<[MessageItem](/class/message/messageInfo.md)[]> | New message |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnRecvNewMessages, ({ data }) => {
  // data: new message list
});
```

</TabItem>

</Tabs>
