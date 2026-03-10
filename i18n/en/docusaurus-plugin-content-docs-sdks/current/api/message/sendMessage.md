---
sidebar_position: 19
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# sendMessage

## Description

:::info

Send a message.

:::

:::caution Note

You need to call createXXXMessage first to create a message. Messages created by createXXXMessageByURL need to be sent via [sendMessageNotOss](/api/message/sendMessageNotOss.md).   
**Related Callbacks**:      
[onNewConversation](/callback/onNewConversation.md)   
[onConversationChanged](/callback/onConversationChanged.md)   
[onRecvNewMessage](/callback/onRecvNewMessage.md)   
[onRecvNewMessages](/callback/onRecvNewMessages.md)

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
  Future<Message> sendMessage({
    required Message message,
    required OfflinePushInfo offlinePushInfo,
    String? userID,
    String? groupID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name        | Parameter Type                                                       | Required | Description                |
| --------------- | -------------------------------------------------------------- | -------- | ------------------- |
| message         | [Message](/class/message/messageInfo.md)             | Yes      | Message body              |
| userID          | String                                                         | No       | Receiving message user ID  |
| groupID         | String                                                         | No       | Receiving message group ID |
| offlinePushInfo | [OfflinePushInfo](/class/message/offlinePushInfo.md) | No       | Offline push info          |

### Return Result

| Name | Type                                               | Description     |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg =  await OpenIM.iMManager.messageManager.sendMessage(message: message, offlinePushInfo: offlinePushInfo);
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)sendMessage:(OIMMessageInfo *)message
             recvID:(NSString * _Nullable)recvID
            groupID:(NSString * _Nullable)groupID
    offlinePushInfo:(OIMOfflinePushInfo * _Nullable)offlinePushInfo
          onSuccess:(nullable OIMMessageInfoCallback)onSuccess
         onProgress:(nullable OIMNumberCallback)onProgress
          onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name        | Parameter Type                                                          | Required | Description                |
| --------------- | ----------------------------------------------------------------- | -------- | ------------------- |
| message         | [OIMMessageInfo](/class/message/messageInfo.md)         | Yes      | Message body              |
| recvID          | NSSting                                                           | No       | Receiving message user ID  |
| groupID         | NSSting                                                           | No       | Receiving message group ID |
| offlinePushInfo | [OIMOfflinePushInfo](/class/message/offlinePushInfo.md) | No       | Offline push info          |

### Return Result

| Name       | Type                                                      | Description     |
| ---------- | --------------------------------------------------------- | -------- |
| onSuccess  | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |
| onProgress | NSInteger                                                 | Send progress |
| onFailure  | OIMFailureCallback      | Failure return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *testMessage = [OIMMessageInfo createTextMessage:@"test"];

[OIMManager.manager sendMessage:testMessage
                         recvID:@""
                        groupID:@""
                offlinePushInfo:nil
                      onSuccess:^(OIMMessageInfo * _Nullable message) {
} onProgress:^(NSInteger number) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public void sendMessage(OnMsgSendCallback base, Message message, String recvUid, String recvGid, OfflinePushInfo offlinePushInfo)
```

### Input Parameters

| Parameter Name        | Parameter Type                                                       | Required | Description                |
| --------------- | -------------------------------------------------------------- | -------- | ------------------- |
| base            | OnMsgSendCallback                                              | Yes      | callback            |
| message         | [Message](/class/message/messageInfo.md)             | Yes      | Message body              |
| userID          | String                                                         | No       | Receiving message user ID  |
| groupID         | String                                                         | No       | Receiving message group ID |
| offlinePushInfo | [OfflinePushInfo](/class/message/offlinePushInfo.md) | No       | Offline push info          |

### Return Result

| Name | Type                                               | Description     |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
      OpenIMClient.getInstance().messageManager.sendMessage( new OnMsgSendCallback(){

              @Override
              public void onError(int code, String error) {
                  //Send failed
              }

              @Override
              public void onProgress(long progress) {
                    //Send progress
              }

              @Override
              public void onSuccess(Message s) {
                     //Send success
              }
          },  message,  recvUid,  recvGid,  offlinePushInfo);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.sendMessage({
  recvID: string;
  groupID: string;
  offlinePushInfo?: OfflinePush;
  message: MessageItem;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name        | Parameter Type                                                       | Required | Description                                          |
| --------------- | -------------------------------------------------------------- | -------- | --------------------------------------------- |
| message         | [MessageItem](/class/message/messageInfo.md)         | Yes      | Message body                                        |
| recvID          | string                                                         | Yes      | Receiving message user ID, pass empty string when sending group message    |
| groupID         | string                                                         | Yes      | Receiving message group ID, pass empty string when sending single chat message |
| offlinePushInfo | [OfflinePushInfo](/class/message/offlinePushInfo.md) | No       | Offline push info                                    |

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

IMSDK.sendMessage({
  recvID: "userID",
  groupID: "",
  message: {
    // MessageItem
    ...
  }
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
IMSDK.asyncApi('sendMessage', operationID: string, {
    recvID: string;
    groupID: string;
    offlinePushInfo?: OfflinePush;
    message: MessageItem;
}): Promise<void>
```

### Input Parameters

| Parameter Name        | Parameter Type                                                       | Required | Description                                                    |
| --------------- | -------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID     | string                                                         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| message         | [MessageItem](/class/message/messageInfo.md)         | Yes      | Message body                                                  |
| recvID          | string                                                         | Yes      | Receiving message user ID, pass empty string when sending group message              |
| groupID         | string                                                         | Yes      | Receiving message group ID, pass empty string when sending single chat message           |
| offlinePushInfo | [OfflinePushInfo](/class/message/offlinePushInfo.md) | Yes      | Offline push info                                              |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('sendMessage', IMSDK.uuid(), {
  recvID: "userID",
  groupID: "",
  message: {
    // MessageItem
    ...
  },
  offlinePushInfo: {
    title: 'you have a new message',
    desc: 'new message',
    ex: '',
    iOSPushSound: '+1',
    iOSBadgeCount: true,
  }
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
OpenIMSDK.sendMessage({
  recvID: string,
  groupID: string,
  offlinePushInfo?: OfflinePush,
  message: MessageItem,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name        | Parameter Type                                                       | Required | Description                                                    |
| --------------- | -------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| message         | [MessageItem](/class/message/messageInfo.md)         | Yes      | Message body                                                  |
| recvID          | string                                                         | Yes      | Receiving message user ID, pass empty string when sending group message              |
| groupID         | string                                                         | Yes      | Receiving message group ID, pass empty string when sending single chat message           |
| offlinePushInfo | [OfflinePushInfo](/class/message/offlinePushInfo.md) | Yes      | Offline push info                                              |
| operationID     | string                                                         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.sendMessage({
  recvID: "userID",
  groupID: "",
  message: {
    // MessageItem
    ...
  },
  offlinePushInfo: {
    title: 'you have a new message',
    desc: 'new message',
    ex: '',
    iOSPushSound: '+1',
    iOSBadgeCount: true,
  }
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

public static void SendMessage(IMsgSendCallBack cb, Message message, string recvId, string groupId, OfflinePushInfo offlinePushInfo,bool isOnlineOnly)

```

### Input Parameters

| Parameter Name        | Parameter Type                                                       | Required | Description                |
| --------------- | -------------------------------------------------------------- | -------- | ------------------- |
| cb |  IMsgSendCallBack             | Yes      | callback            |
| message         | [Message](/class/message/messageInfo.md)             | Yes      | Message body              |
| userId          | string                                                         | No       | Receiving message user ID  |
| groupId         | string                                                         | No       | Receiving message group ID |
| offlinePushInfo | [OfflinePushInfo](/class/message/offlinePushInfo.md) | No       | Offline push info          |
| isOnlineOnly | bool | Yes      |       Receiver must be online to receive, otherwise it will be dropped     |

### Return Result


### Code Example

```C# showLineNumbers

var callback = new MsgSendCallBack() // Implementation of IMsgSendCallBack interface
IMSDK.SendMessage(callback,msg ,recvId,groupId,new OfflinePushInfo(){},false);

```

</TabItem>

</Tabs>
