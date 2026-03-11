---
sidebar_position: 12
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createMergeMessage

## Description

:::info

Create a merge message, combining multiple messages into one. Parameters include title, summary list, and multiple messages.

:::

:::caution Note

It is recommended that the total number of merged messages be less than 100.

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
  Future<Message> createMergerMessage({
    required List<Message> messageList,
    required String title,
    required List<String> summaryList,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name    | Parameter Type                                                 | Required | Description         |
| ----------- | -------------------------------------------------------- | -------- | ------------ |
| messageList | List<[Message](/class/message/messageInfo.md)> | Yes      | Message list     |
| title       | String                                                   | Yes      | Title         |
| summaryList | List<String\>                                            | Yes      | Message summary list |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg = await OpenIM.iMManager.messageManager.createMergerMessage(messageList: messageList, title: title, summaryList: summaryList);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createMergeMessage:(NSArray <OIMMessageInfo *> *)messages
                                 title:(NSString *)title
                           summaryList:(NSArray <NSString *> *)summarys;

```

### Input Parameters

| Parameter Name | Parameter Type                                                                 | Required | Description         |
| -------- | ------------------------------------------------------------------------ | -------- | ------------ |
| messages | NSArray < [OIMMessageInfo](/class/message/messageInfo.md) \* > | Yes      | Message list     |
| title    | NSString                                                                 | Yes      | Title         |
| summarys | NSArray <NSString \*>                                                    | Yes      | Message summary list |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createMergeMessage:@[]
                                                       title:@""
                                                 summaryList:@[]];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createMergerMessage(List<Message> messageList, String title, List<String> summaryList)
```

### Input Parameters

| Parameter Name    | Parameter Type                                                 | Required | Description         |
| ----------- | -------------------------------------------------------- | -------- | ------------ |
| messageList | List<[Message](/class/message/messageInfo.md)> | Yes      | Message list     |
| title       | String                                                   | Yes      | Title         |
| summaryList | List<String\>                                            | Yes      | Message summary list |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
     Message Message= OpenIMClient.getInstance().messageManager.createMergerMessage( messageList,  title,  summaryList);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createMergerMessage({
  messageList: MessageItem[];
  title: string;
  summaryList: string[];
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name    | Parameter Type                                                 | Required | Description         |
| ----------- | -------------------------------------------------------- | -------- | ------------ |
| messageList | [MessageItem](/class/message/messageInfo.md)[] | Yes      | Message list     |
| title       | string                                                   | Yes      | Title         |
| summaryList | string[]                                                 | Yes      | Message summary list |

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

IMSDK.createMergerMessage({
  messageList: [
    {
      // message
      ...
    }
  ],
  title: "Chat history with xx",
  summaryList: ["xx: Hello", "xx: Hello"];
})
  .then(({ data }) => {
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
IMSDK.asyncApi('createMergerMessage', operationID: string, {
  messageList: MessageItem[];
  title: string;
  summaryList: string[];
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type                                                 | Required | Description                                                    |
| ----------- | -------------------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                                   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| messageList | [MessageItem](/class/message/messageInfo.md)[] | Yes      | Message list                                                |
| title       | string                                                   | Yes      | Title                                                    |
| summaryList | string[]                                                 | Yes      | Message summary list                                            |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createMergerMessage', IMSDK.uuid(), {
  messageList: [
    {
      // message
      ...
    }
  ],
  title: "Chat history with xx",
  summaryList: ["xx: Hello", "xx: Hello"];
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
OpenIMSDK.createMergerMessage({
  title: string,
  messageList: Array,
  summaryList: Array,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type                                                 | Required | Description                                                    |
| ----------- | -------------------------------------------------------- | -------- | ------------------------------------------------------- |
| messageList | [MessageItem](/class/message/messageInfo.md)[] | Yes      | Message list                                                |
| title       | string                                                   | Yes      | Title                                                    |
| summaryList | string[]                                                 | Yes      | Message summary list                                            |
| operationID | string                                                   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createMergerMessage({
  messageList: [
    {
      // message
      ...
    }
  ],
  title: "Chat history with xx",
  summaryList: ["xx: Hello", "xx: Hello"];
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

public static Message CreateMergerMessage(Message[] messageList, string title, string[] summaryList)

```

### Input Parameters

| Parameter Name    | Parameter Type                                                 | Required | Description         |
| ----------- | -------------------------------------------------------- | -------- | ------------ |
| messageList | [Message](/class/message/messageInfo.md)[] | Yes      | Message list     |
| title       | string                                                   | Yes      | Title         |
| summaryList | string[]                                            | Yes      | Message summary list |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK.CreateMergerMessage(messageList,title,summaryList);
```

</TabItem>
</Tabs>
