---
sidebar_position: 13
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createForwardMessage

## Description

:::info

Create a forward message.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<Message> createForwardMessage({
    required Message message,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description           |
| -------- | -------------------------------------------------- | -------- | -------------- |
| message  | [Message](/class/message/messageInfo.md) | Yes      | The message to be forwarded |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
  Message msg = await OpenIM.iMManager.messageManager.createForwardMessage(message: message);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createForwardMessage:(OIMMessageInfo *)msg;

```

### Input Parameters

| Parameter Name | Parameter Type                                                  | Required | Description           |
| -------- | --------------------------------------------------------- | -------- | -------------- |
| msg      | [OIMMessageInfo](/class/message/messageInfo.md) | Yes      | The message to be forwarded |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createForwardMessage: ];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createForwardMessage(Message message)
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description           |
| -------- | -------------------------------------------------- | -------- | -------------- |
| message  | [Message](/class/message/messageInfo.md) | Yes      | The message to be forwarded |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
     Message Message= OpenIMClient.getInstance().messageManager. createForwardMessage( message)
    //todo
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createForwardMessage(message:MessageItem, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name | Parameter Type                                               | Required | Description         |
| -------- | ------------------------------------------------------ | -------- | ------------ |
| text     | string                                                 | Yes      | Text content     |
| message  | [MessageItem](/class/message/messageInfo.md) | Yes      | The forwarded message |

### Return Result

| Parameter Name        | Parameter Type                                                                     | Description         |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[MessageItem](/class/message/messageInfo.md)>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                         | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

const message = {...} as MessageItem;

IMSDK.createForwardMessage(message)
  .then(({data}) => {
    // Call successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('createForwardMessage', operationID: string, message: MessageItem): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type                                               | Required | Description                                                    |
| ----------- | ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| operationID | string                                                 | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| message     | [MessageItem](/class/message/messageInfo.md) | Yes      | The message to be forwarded                                            |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

const message = {...} as MessageItem;

IMSDK.asyncApi('createForwardMessage', IMSDK.uuid(), message)
  .then((data) => {
    // Call successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.createForwardMessage( message: MessageItem, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type                                               | Required | Description                                                    |
| ----------- | ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| message     | [MessageItem](/class/message/messageInfo.md) | Yes      | The message to be forwarded                                            |
| operationID | string                                                 | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

const message = {...} as MessageItem;

OpenIMSDK.createForwardMessage(message)
  .then((data) => {
    // Call successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers
public static Message CreateForwardMessage(Message msg)
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description           |
| -------- | -------------------------------------------------- | -------- | -------------- |
| msg  | [Message](/class/message/messageInfo.md) | Yes      | The message to be forwarded |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK.CreateForwardMessage(msg);
```

</TabItem>

</Tabs>
