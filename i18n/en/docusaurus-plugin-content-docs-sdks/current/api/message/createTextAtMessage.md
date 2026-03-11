---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createTextAtMessage

## Description

:::info

Create an @ message. Currently, a maximum of 10 people can be @'ed in a single message. If you want to @ everyone, just add an at element with the userID `AtAllTag`.    
Also, if you want to quote a message while @'ing someone, you need to pass the quoted message as a parameter; there is no need to call `createQuoteMessage` anymore.

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
  Future<Message> createTextAtMessage({
    required String text,
    required List<String> atUserIDList,
    List<AtUserInfo> atUserInfoList = const [],
    Message? quoteMessage,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name       | Parameter Type                                               | Required | Description              |
| -------------- | ------------------------------------------------------ | -------- | ----------------- |
| text           | String                                                 | Yes      | Content              |
| atUserIDList   | List<String\>                                          | Yes      | List of userID to be @'ed |
| atUserInfoList | List<[AtUserInfo](/class/message/atInfo.md)> | Yes      | User info list of @'ed users |
| quoteMessage   | [Message](/class/message/messageInfo.md)     | Yes      | Quoted message        |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg = await OpenIM.iMManager.messageManager.createTextAtMessage(text: text, atUserIDList: atUserIDList);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createTextAtMessage:(NSString *)text
                              atUidList:(NSArray<NSString *> *)atUidList
                            atUsersInfo:(NSArray<OIMAtInfo *> *)atUsersInfo
                                message:(OIMMessageInfo * _Nullable)msg;

```

### Input Parameters

| Parameter Name    | Parameter Type                                                      | Required | Description              |
| ----------- | ------------------------------------------------------------- | -------- | ----------------- |
| text        | NSString                                                      | Yes      | Content              |
| atUidList   | NSArray<NSString \*>                                          | Yes      | List of userID to be @'ed |
| atUsersInfo | NSArray< [OIMAtInfo](/class/message/atInfo.md) \* > | Yes      | User info list of @'ed users |
| msg         | [OIMMessageInfo](/class/message/messageInfo.md)     | Yes      | Quoted message        |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMAtInfo *user1 = [OIMAtInfo new];
user1.atUserID = @"";
user1.groupNickname = @"";

OIMMessageInfo *message = [OIMMessageInfo createTextAtMessage:@"" atUidList:@[] atUsersInfo:@[user1] message:nil];

```

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createTextAtAllMessage:(NSString *)text
                               displayText:(NSString * _Nullable)displayText
                                   message:(OIMMessageInfo * _Nullable)message;

```

### Input Parameters

| Parameter Name    | Parameter Type                                                  | Required | Description       |
| ----------- | --------------------------------------------------------- | -------- | ---------- |
| text        | NSString                                                  | Yes      | Content       |
| displayText | NSString                                                  | No       | Display text |
| msg         | [OIMMessageInfo](/class/message/messageInfo.md) | No       | Quoted message |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createTextAtAllMessage:@""
                                                     displayText:nil
                                                         message:nil];
```


</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createTextAtMessage(String text, List<String> atUserIDList, List<AtUserInfo> atUserInfoList, Message quoteMessage)
```

### Input Parameters

| Parameter Name       | Parameter Type                                               | Required | Description              |
| -------------- | ------------------------------------------------------ | -------- | ----------------- |
| text           | String                                                 | Yes      | Content              |
| atUserIDList   | List<String\>                                          | Yes      | List of userID to be @'ed |
| atUserInfoList | List<[AtUserInfo](/class/message/atInfo.md)> | Yes      | User info list of @'ed users |
| quoteMessage   | [Message](/class/message/messageInfo.md)     | Yes      | Quoted message        |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
       Message Message= OpenIMClient.getInstance().messageManager.createTextAtMessage( text, atUserIDList, atUserInfoList,  quoteMessage)
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createTextAtMessage({
    text: string;
    atUserIDList: string[];
    atUsersInfo: AtUsersInfoItem[];
    message?: MessageItem;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name     | Parameter Type                                                | Required | Description              |
| ------------ | ------------------------------------------------------- | -------- | ----------------- |
| text         | string                                                  | Yes      | Content              |
| atUserIDList | string[]                                                | Yes      | List of userID to be @'ed |
| atUsersInfo  | [AtUsersInfoItem](/class/message/atInfo.md)[] | Yes      | User info list of @'ed users |
| message      | [MessageItem](/class/message/messageInfo.md)  | Yes      | Quoted message        |

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

IMSDK.createTextAtMessage({
  text: "",
  atUserIDList: ['userID'],
  atUsersInfo: [
    {
      atUserID: "userID",
      groupNickname: ""
    },
  ],
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
IMSDK.asyncApi('createTextAtMessage', operationID: string, {
  text: string;
  atUserIDList: string[];
  atUsersInfo: AtUsersInfoItem[];
  message?: MessageItem;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name     | Parameter Type                                                | Required | Description                                                    |
| ------------ | ------------------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID  | string                                                  | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| text         | string                                                  | Yes      | Content                                                    |
| atUserIDList | string[]                                                | Yes      | List of userID to be @'ed                                       |
| atUsersInfo  | [AtUsersInfoItem](/class/message/atInfo.md)[] | Yes      | User info list of @'ed users                                       |
| message      | [MessageItem](/class/message/messageInfo.md)  | Yes      | Quoted message                                              |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createTextAtMessage', IMSDK.uuid(), {
  text: "",
  atUserIDList: ['userID'],
  atUsersInfo: [
    {
      atUserID: "userID",
      groupNickname: ""
    },
  ],
  message: {
    // MessageItem
    ...
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
OpenIMSDK.createTextAtMessage({
  text: string,
  atUserIDList: string[],
  atUsersInfo: AtUsersInfoItem[];
  message?: MessageItem;
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name     | Parameter Type                                                | Required | Description                                                    |
| ------------ | ------------------------------------------------------- | -------- | ------------------------------------------------------- |
| text         | string                                                  | Yes      | Content                                                    |
| atUserIDList | string[]                                                | Yes      | List of userID to be @'ed                                       |
| atUsersInfo  | [AtUsersInfoItem](/class/message/atInfo.md)[] | Yes      | User info list of @'ed users                                       |
| message      | [MessageItem](/class/message/messageInfo.md)  | Yes      | Quoted message                                              |
| operationID  | string                                                  | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createTextAtMessage({
  text: "",
  atUserIDList: ['userID'],
  atUsersInfo: [
    {
      atUserID: "userID",
      groupNickname: ""
    },
  ],
  message: {
    // MessageItem
    ...
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

public static Message CreateTextAtMessage(string text, string[] atUserList, AtInfo[] atUsersInfo, Message message)

```

### Input Parameters

| Parameter Name       | Parameter Type                                               | Required | Description              |
| -------------- | ------------------------------------------------------ | -------- | ----------------- |
| text           | string                                                 | Yes      | Content              |
| atUserList   | string[]                                          | Yes      | List of userID to be @'ed |
| atUsersInfo | [AtInfo](/class/message/atInfo.md) []| Yes      | User info list of @'ed users |
| message   | [Message](/class/message/messageInfo.md)     | Yes      | Quoted message        |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK.CreateTextAtMessage(text, atUserList , atUsersInfo , message);
```

</TabItem>

</Tabs>
