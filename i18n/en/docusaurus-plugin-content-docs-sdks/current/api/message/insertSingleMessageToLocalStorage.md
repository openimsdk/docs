---
sidebar_position: 33
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# insertSingleMessageToLocalStorage

## Description

:::info

Insert a single chat message into local storage. It is only visible on the current device and will not be synchronized to other devices.

:::

:::caution Note

**Related Callback**:      
[onConversationChanged](/callback/onConversationChanged.md)   
Visible only on the current device.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<Message> insertSingleMessageToLocalStorage({
    String? receiverID,
    String? senderID,
    Message? message,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description               |
| -------- | -------------------------------------------------- | -------- | ------------------ |
| message  | [Message](/class/message/messageInfo.md) | Yes      | Message body             |
| receiverID | String                                             | Yes      | Receiving message userID |
| senderID | String                                             | Yes      | Sending message userID  |

### Return Result

| Name | Type                                               | Description     |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
  await OpenIM.iMManager.messageManager.insertSingleMessageToLocalStorage(
      receiverID: '',
      senderID: '',
      message: Message()
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)insertSingleMessageToLocalStorage:(OIMMessageInfo *)message
                                   recvID:(NSString *)recvID
                                   sendID:(NSString *)sendID
                                onSuccess:(nullable OIMMessageInfoCallback)onSuccess
                                onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type       | Required | Description               |
| -------- | -------------- | -------- | ------------------ |
| message  | [OIMMessageInfo](/class/message/messageInfo.md) | Yes      | Message body             |
| recvID   | NSString       | Yes      | Receiving message userID |
| sendID   | NSString       | Yes      | Sending message userID  |

### Return Result

| Name      | Type                                                      | Description     |
| --------- | --------------------------------------------------------- | -------- |
| onSuccess | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |
| onFailure | OIMFailureCallback      | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager insertSingleMessageToLocalStorage:
                                               recvID:@""
                                               sendID:@""
                                            onSuccess:^(OIMMessageInfo * _Nullable message) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
   public void insertSingleMessageToLocalStorage(OnBase<String> base, Message message, String receiver, String sender)
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description               |
| ---------- | -------------------------------------------------- | -------- | ----------------- |
| base       | OnBase<String\>                                    | Yes      | Callback interface          |
| message    | [Message](/class/message/messageInfo.md) | Yes      | Message body            |
| receiverID | String                                             | Yes      | Receiving message userID |
| senderID   | String                                             | Yes      | Sending message userID |

### Code Example

```dart showLineNumbers
        OpenIMClient.getInstance().messageManager.insertSingleMessageToLocalStorage(new OnBase<AdvancedMessage>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(AdvancedMessage data) {

            }
        },   message,  receiver,  sender);
    // todo
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.insertSingleMessageToLocalStorage({
  message: MessageItem;
  recvID: string;
  sendID: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type                                               | Required | Description               |
| -------- | ------------------------------------------------------ | -------- | ----------------- |
| message  | [MessageItem](/class/message/messageInfo.md) | Yes      | Message body            |
| recvID   | string                                                 | Yes      | Receiving message userID |
| sendID   | string                                                 | Yes      | Sending message userID |

### Return Result

| Parameter Name        | Parameter Type                                             | Description         |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.insertSingleMessageToLocalStorage({
  message: {
    // MessageItem
    ...
  };
  recvID: "",
  sendID: "",
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
IMSDK.asyncApi('insertSingleMessageToLocalStorage', operationID: string,{
  message: MessageItem;
  recvID: string;
  sendID: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type                                               | Required | Description                                                    |
| ----------- | ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| operationID | string                                                 | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| message     | [MessageItem](/class/message/messageInfo.md) | Yes      | Message body                                                  |
| recvID      | string                                                 | Yes      | Receiving message userID                                       |
| sendID      | string                                                 | Yes      | Sending message userID                                       |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi(
  'insertSingleMessageToLocalStorage',
  IMSDK.uuid(),
  {
    message: {
      // MessageItem
      ...
    };
    recvID: "",
    sendID: "",
  }
)
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
OpenIMSDK.insertSingleMessageToLocalStorage({
  message: MessageItem;
  recvID: string;
  sendID: string;
},operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type                                               | Required | Description                                                    |
| ----------- | ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| operationID | string                                                 | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| message     | [MessageItem](/class/message/messageInfo.md) | Yes      | Message body                                                  |
| recvID      | string                                                 | Yes      | Receiving message userID                                      |
| sendID      | string                                                 | Yes      | Sending message userID                                       |

### Return Result

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.insertSingleMessageToLocalStorage({
  message: {
    // MessageItem
    ...
  },
  recvID: "",
  sendID: "",
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

public static void InsertSingleMessageToLocalStorage(OnBase<Message> cb, Message message, string recvId, string sendId)

```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description               |
| ---------- | -------------------------------------------------- | -------- | ----------------- |
| cb |    [OnBase](/callback/onBase.md)<[Message](/class/message/messageInfo.md)>                                 | Yes      | Callback interface          |
| message    | [Message](/class/message/messageInfo.md) | Yes      | Message body            |
| receiverId | string                                             | Yes      | Receiving message userID |
| senderId   | string                                             | Yes      | Sending message userID |

### Code Example

```C# showLineNumbers

IMSDK.InsertSingleMessageToLocalStorage((msg,errCode,errMsg)=>{

},   message,  receiverId,  senderId);

```

</TabItem>
</Tabs>
