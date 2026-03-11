---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onRecvOfflineNewMessages

## Description

:::info

When the application is running in the background and receives new messages, this callback is received, and it may carry multiple messages.

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

onRecvOfflineNewMessages(data: WSEvent<MessageItem[]>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| data | [WSEvent](/class/response.md)<[MessageItem](/class/message/messageInfo.md)[]> | New message |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

IMSDK.on(CbEvents.OnRecvOfflineNewMessages, ({ data }) => {
  // data: new offline message list
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onRecvOfflineNewMessages(data: WSEvent<MessageItem[]>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| data | [WSEvent](/class/response.md)<[MessageItem](/class/message/messageInfo.md)[]> | New message |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnRecvOfflineNewMessages, ({ data }) => {
  // data: new offline message list
});
```

</TabItem>

</Tabs>
