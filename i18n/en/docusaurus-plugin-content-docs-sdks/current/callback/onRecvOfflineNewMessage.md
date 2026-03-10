---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onRecvOfflineNewMessage

## Description

:::info

When the application is running in the background and receives a new message, this callback is received, and it carries only one message.
When batch message listening [setBatchMsgListener](/api/message/setBatchMsgListener.md) is set up, this callback will not trigger.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Return Prototype

```dart
void recvOfflineNewMessage(Message msg)
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| msg  | [Message](/class/message/messageInfo.md) | New offline message |

</TabItem>

<TabItem value="Android">

```java showLineNumbers

void onRecvOfflineNewMessage(List<Message> msg)

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| msg  | List<[Message](/class/message/messageInfo.md)> | New offline message |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onRecvOfflineNewMessage(data: WSEvent<MessageItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| data | [WSEvent](/class/response.md)<[MessageItem](/class/message/messageInfo.md)> | New offline message |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

IMSDK.on(CbEvents.OnRecvOfflineNewMessage, ({ data }) => {
  // data: new offline message
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onRecvOfflineNewMessage(data: WSEvent<MessageItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| data | [WSEvent](/class/response.md)<[MessageItem](/class/message/messageInfo.md)> | New offline message |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnRecvOfflineNewMessage, ({ data }) => {
  // data: new offline message
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C#
void OnRecvOfflineNewMessage(Message msg);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| msg  | [Message](/class/message/messageInfo.md) | New offline message |

</TabItem>
</Tabs>
