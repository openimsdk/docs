---
sidebar_position: 15
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createQuoteMessage

## Description

:::info

Create a quote (reply) message.

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
  Future<Message> createQuoteMessage({
    required String text,
    required Message quoteMsg,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description         |
| -------- | -------------------------------------------------- | -------- | ------------ |
| text     | String                                             | Yes      | Text content     |
| quoteMsg | [Message](/class/message/messageInfo.md) | Yes      | Replied message |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg = await OpenIM.iMManager.messageManager.createQuoteMessage(text: text, quoteMsg: quoteMsg);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createQuoteMessage:(NSString *)text
                               message:(OIMMessageInfo *)message;

```

### Input Parameters

| Parameter Name | Parameter Type                                                  | Required | Description         |
| -------- | --------------------------------------------------------- | -------- | ------------ |
| text     | NSString                                                  | Yes      | Text content     |
| message  | [OIMMessageInfo](/class/message/messageInfo.md) | Yes      | Replied message |

### Return Result

| Name | Type                                                      | Description |
| ---- | --------------------------------------------------------- | -------- |
| msg  | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *msg = [OIMMessageInfo createQuoteMessage:@""
                                                 message:];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createQuoteMessage(String text, Message message)
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description         |
| -------- | -------------------------------------------------- | -------- | ------------ |
| text     | String                                             | Yes      | Text content     |
| quoteMsg | [Message](/class/message/messageInfo.md) | Yes      | Replied message |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
   Message Message= OpenIMClient.getInstance().messageManager.createQuoteMessage( text,  message);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createQuoteMessage({
    text: string;
    message: MessageItem;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name | Parameter Type                                               | Required | Description       |
| -------- | ------------------------------------------------------ | -------- | ---------- |
| text     | string                                                 | Yes      | Text content   |
| message  | [MessageItem](/class/message/messageInfo.md) | Yes      | Replied message |

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

IMSDK.createQuoteMessage({
  text: '',
  message: {
    ...
  },
})
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
IMSDK.asyncApi('createQuoteMessage', operationID: string, {
  text: string;
  message: MessageItem;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type                                               | Required | Description                                                    |
| ----------- | ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| operationID | string                                                 | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| text        | string                                                 | Yes      | Text content                                                |
| message     | [MessageItem](/class/message/messageInfo.md) | Yes      | Replied message                                              |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

const message = { ... } as MessageItem

IMSDK.asyncApi('createQuoteMessage', IMSDK.uuid(), {
  text: '',
  message: {
    ...
  },
})
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
OpenIMSDK.createQuoteMessage({
  text: string,
  message: MessageItem,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type                                               | Required | Description                                                    |
| ----------- | ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| operationID | string                                                 | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| text        | string                                                 | Yes      | Text content                                                |
| message     | [MessageItem](/class/message/messageInfo.md) | Yes      | Replied message                                              |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

const message = { ... } as MessageItem

OpenIMSDK.createQuoteMessage({
  text: '',
  message: {
    ...
  },
})
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

public static Message CreateQuoteMessage(string text, Message message)

```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description         |
| -------- | -------------------------------------------------- | -------- | ------------ |
| text     | string                                             | Yes      | Text content     |
| message | [Message](/class/message/messageInfo.md) | Yes      | Replied message |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers

var msg = IMSDK.CreateQuoteMessage(Text,message);

```

</TabItem>

</Tabs>
