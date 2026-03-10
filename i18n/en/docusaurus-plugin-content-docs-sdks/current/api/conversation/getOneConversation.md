---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getOneConversation

## Description

:::info

Get conversation information. Specify groupID for group chat, specify counterparty's userID for one-to-one chat.

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
  Future<ConversationInfo> getOneConversation({
    required String sourceID,
    required int sessionType,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| ----------- | -------- | -------- | --------------------------------------------------------------- |
| sessionType | [int](/enum/conversationType.md)      | Yes      | Session type |
| sourceID    | String   | Yes      | User ID for one-to-one chat, group ID for group chat |

### Return Result

| Name | Type                                                                  | Description |
| ---- | --------------------------------------------------------------------- | -------- |
| ~    | [ConversationInfo](/class/conversation/conversationInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    final conversationInfo = await OpenIM.iMManager.conversationManager.getOneConversation(sourceID: sourceID, sessionType: sessionType);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getOneConversationWithSessionType:(OIMConversationType)sessionType
                                 sourceID:(NSString *)sourceID
                                onSuccess:(nullable OIMConversationInfoCallback)onSuccess
                                onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type                                                   | Required | Description                       |
| ----------- | ---------------------------------------------------------- | -------- | -------------------------- |
| sessionType | [OIMConversationType](/enum/conversationType.md) | Yes      | Session type                   |
| sourceID    | NSString                                                   | Yes      | User ID for one-to-one chat, group ID for group chat |

### Return Result

| Name      | Type                                                                     | Description     |
| --------- | ------------------------------------------------------------------------ | -------- |
| onSuccess | [OIMConversationInfo](/class/conversation/conversationInfo.md) | Success return |
| onFailure | OIMFailureCallback                     | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getOneConversationWithSessionType:
                                             sourceID:@""
                                            onSuccess:^(OIMConversationInfo * _Nullable conversation) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void getOneConversation(OnBase<ConversationInfo> base, String sourceId, int sessionType)
```

### Input Parameters

| Parameter Name | Parameter Type                                                                                                             | Required | Description                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------- |
| base        | [OnBase](/callback/onBase.md)<[ConversationInfo](/class/conversation/conversationInfo.md)> | Yes      | Callback interface                                                        |
| sessionType | int                                                                                                                  | Yes      | Session type [ConversationType](/enum/conversationType.md) |
| sourceID    | String                                                                                                               | Yes      | User ID for one-to-one chat, group ID for group chat |

### Code Example

```java showLineNumbers
   OpenIMClient.getInstance().conversationManager.getOneConversation(new OnBase<List<ConversationInfo>>() {
              @Override
              public void onError(int code, String error) {

              }

              @Override
              public void onSuccess(List<ConversationInfo> data) {

              }
          },sessionType,sourceID);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getOneConversation({
  sourceID: string;
  sessionType: SessionType;
},operationID?: string): Promise<WsResponse<ConversationItem>>
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description                                |
| ----------- | -------------------------------------------------- | -------- | ----------------------------------- |
| sourceID    | string                                             | Yes      | User ID for one-to-one chat(user ID), or groupID(group ID) |
| sessionType | [SessionType](/enum/conversationType.md) | Yes      | Session type                            |

### Return Result

| Parameter Name  | Parameter Type                                                                              | Description      |
| --------------- | ------------------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[ConversationItem](/class/conversation/conversationInfo.md)>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                        | Failure callback |

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

IMSDK.getOneConversation({
  sourceID: 'user1',
  sessionType: 1,
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
IMSDK.asyncApi('getOneConversation', operationID: string, {
  sourceID: string;
  sessionType: SessionType;
}): Promise<ConversationItem>
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description                                                    |
| ----------- | -------------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                             | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| sourceID    | string                                             | Yes      | User ID for one-to-one chat(user ID), or groupID(group ID) |
| sessionType | [SessionType](/enum/conversationType.md) | Yes      | Session type                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                                       | Description      |
| --------------- | ------------------------------------------------------------------------------ | ------------ |
| Promise.then()  | Promise<[ConversationItem](/class/conversation/conversationInfo.md)> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                        | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getOneConversation', IMSDK.uuid(), {
  sourceID: 'user1',
  sessionType: 1,
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
OpenIMSDK.getOneConversation({
  sessionType: number,
  sourceID: string,
}, operationID?: string): Promise<ConversationItem>
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description                                                    |
| ----------- | -------------------------------------------------- | -------- | ------------------------------------------------------- |
| sourceID    | string                                             | Yes      | User ID for one-to-one chat, or groupID for group chat         |
| sessionType | [SessionType](/enum/conversationType.md) | Yes      | Session type                                                |
| operationID | string                                             | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                                       | Description      |
| --------------- | ------------------------------------------------------------------------------ | ------------ |
| Promise.then()  | Promise<[ConversationItem](/class/conversation/conversationInfo.md)> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                        | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

 OpenIMSDK.getOneConversation({
  sourceID: 'user1',
  sessionType: 1,
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

public static void GetOneConversation(OnBase<Conversation> cb, ConversationType sessionType, string sourceId)

```


### Input Parameters

| Parameter Name | Parameter Type    | Required | Description                                                            |
| ----------- | -----------------| -------- | --|
| cb |[OnBase](/callback/onBase.md)<[Conversation](/class/conversation/conversationInfo.md)> | Yes      | Callback interface                                                        |
| sessionType | [ConversationType](/enum/conversationType.md)       | Yes      | Session type |
| sourceId    | string    | Yes      | User ID for one-to-one chat, group ID for group chat |

### Code Example

```C# showLineNumbers
IMSDK.GetOneConversation((list,errCode,errMsg)=>{

},sessionType,sourceID);
```

</TabItem>
</Tabs>
