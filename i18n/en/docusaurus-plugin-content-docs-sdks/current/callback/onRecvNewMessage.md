---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onRecvNewMessage

## Description

:::info

This callback is received when a new message arrives. It carries only one message.
When batch message listening [setBatchMsgListener](/api/message/setBatchMsgListener.md) is set up, this callback will not trigger.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Return Prototype

```dart showLineNumbers
  Function(Message msg)? onRecvNewMessage;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| msg  | [Message](/class/message/messageInfo.md) | Message body |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onRecvNewMessage:(OIMMessageInfo *)msg;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| msg  | [OIMMessageInfo](/class/message/messageInfo.md) | Message body |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
void onRecvNewMessage(Message msg)
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| msg  | [Message](/class/message/messageInfo.md) | Message body |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onRecvNewMessage(data: WSEvent<MessageItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| data | [WSEvent](/class/response.md)<[MessageItem](/class/message/messageInfo.md)> | New message |

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

IMSDK.on(CbEvents.OnRecvNewMessage, ({ data }) => {
  // data: new message
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onRecvNewMessage(data: WSEvent<MessageItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| data | [WSEvent](/class/response.md)<[MessageItem](/class/message/messageInfo.md)> | New message |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnRecvNewMessage, ({ data }) => {
  // data: new message
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnRecvNewMessage(Message msg);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| msg  | [Message](/class/message/messageInfo.md) | Message body |

</TabItem>
</Tabs>
