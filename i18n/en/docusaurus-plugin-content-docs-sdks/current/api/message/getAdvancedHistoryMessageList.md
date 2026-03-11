---
sidebar_position: 29
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getAdvancedHistoryMessageList

## Description

:::info

Get historical chat records in a conversation in chronological order (from new to old), such as loading historical messages when scrolling up.

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
  Future<AdvancedMessage> getAdvancedHistoryMessageList({
    String? conversationID,
    int? lastMinSeq,
    Message? startMsg,
    int? count,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name       | Parameter Type                                           | Required | Description                                                                                                           |
| -------------- | -------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| conversationID | Sting                                              | Yes      | Conversation ID                                                                                                        |
| startMsg       | [Message](/class/message/messageInfo.md) | Yes      | Search [count] messages starting from this message. The retrieved list index==length-1 is the latest message, so to get the next page of history startMsg=list.first |
| count          | int                                                | Yes      | Amount                                                                                                           |
| lastMinSeq     | int                                                | Yes      | Do not pass for the first page. Required when fetching from the second page onwards, works together with [startMsg]                                                          |

### Return Result

| Name | Type                                                               | Description     |
| ---- | ------------------------------------------------------------------ | -------- |
| ~    | [AdvancedMessage](/class/message/advancedHistoryInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    AdvancedMessage am = await OpenIM.iMManager.messageManager.getAdvancedHistoryMessageList(
      conversationID: '',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getAdvancedHistoryMessageList:(OIMGetAdvancedHistoryMessageListParam *)opts
                            onSuccess:(nullable OIMGetAdvancedHistoryMessageListCallback)onSuccess
                            onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name              | Parameter Type                              | Required | Description                                                                 |
| --------------------- | ------------------------------------- | -------- | -------------------------------------------------------------------- |
| OIMGetAdvancedHistoryMessageListParam.conversationID   | NSSting                               | Yes      | Conversation ID, if not empty, get by conversation ID, otherwise get by userID and groupID |
| OIMGetAdvancedHistoryMessageListParam.startClientMsgID | NSString                              | Yes      | Starting message clientMsgID, empty string for first pull                               |
| OIMGetAdvancedHistoryMessageListParam.count            | NSInteger                             | Yes      | Amount to pull at once                                                                 |
| OIMGetAdvancedHistoryMessageListParam.lastMinSeq       | NSInteger                             | Yes      | lastMinSeq is the value returned from the last pull callback, context used, needs to be passed back on the second pull        |

### Return Result

| Name      | Type                                                                                                  | Description     |
| --------- | ----------------------------------------------------------------------------------------------------- | -------- |
| onSuccess | NSArray< [OIMGetAdvancedHistoryMessageListInfo](/class/message/advancedHistoryInfo.md) \* > | Success return |
| onFailure | OIMFailureCallback                                                  | Failure return |

### Code Example

```swift showLineNumbers

OIMGetAdvancedHistoryMessageListParam *opts = [OIMGetAdvancedHistoryMessageListParam new];
opts.conversationID = @"";
opts.count = 30;
opts.lastMinSeq = @"";

[OIMManager.manager getAdvancedHistoryMessageList:opts
                                        onSuccess:^(OIMGetAdvancedHistoryMessageListInfo * _Nullable result) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
    public void getAdvancedHistoryMessageList(OnBase<AdvancedMessage> callBack, String conversationID, Message startMsg, int count, ViewType viewType)
```

### Input Parameters

| Parameter Name       | Parameter Type                                                                   | Required | Description                                                                                                           |
| -------------- | -------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------|
| callBack       | OnBase<[AdvancedMessage](/class/message/advancedHistoryInfo.md)> | Yes      | Callback interface                                                                                                       |
| conversationID | Sting                                                                      | Yes      | Conversation ID                                                                                                        |
| startMsg       | [Message](/class/message/messageInfo.md)                         | Yes      | Search [count] messages starting from this message. The retrieved list index==length-1 is the latest message, so to get the next page of history startMsg=list.first       |
| count          | int                                                                        | Yes      | Amount                                                                                                           |
| viewType       | [ViewType](/enum/viewType.md)                                    | Yes      | If it's History, it indicates currently getting historical messages; if it's Search, it indicates performing a search message operation                                                 |

### Code Example

```java showLineNumbers
        OpenIMClient.getInstance().messageManager. getAdvancedHistoryMessageList(new OnBase<AdvancedMessage>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(AdvancedMessage data) {

            }
        } conversationID,  startMsg,  count, ViewType.History);
    // todo
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
enum ViewType {
  History = 0,
  Search = 1,
}
IMSDK.getAdvancedHistoryMessageList({
  viewType: ViewType;
  count: number;
  startClientMsgID: string;
  conversationID: string;
}, operationID?: string): Promise<WsResponse<AdvancedGetMessageResult>>
```

### Input Parameters

| Parameter Name         | Parameter Type | Required | Description                                                                                 |
| ---------------- | -------- | -------- | ------------------------------------------------------------------------------------ |
| conversationID   | string   | Yes      | Conversation ID                                                                              |
| startClientMsgID | string   | Yes      | Starting message clientMsgID, empty string for first pull, subsequently the clientMsgID of the last message from the previous pull |
| count            | number   | Yes      | Amount to pull at once                                                                       |
| viewType        | ViewType   | Yes      | Determine whether it is a normal pull of chat history or getting message context after a search. The open-source version only supports pulling chat history (viewType is 0)                        |

### Return Result

| Parameter Name        | Parameter Type                                                                                          | Description         |
| --------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[AdvancedGetMessageResult](/class/message/advancedHistoryInfo.md)>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                              | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK, ViewType } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.getAdvancedHistoryMessageList({
  viewType: ViewType.History,
  count: 20,
  startClientMsgID: '',
  conversationID: 'conversationID',
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
IMSDK.asyncApi('getAdvancedHistoryMessageList', operationID: string, {
  lastMinSeq: number;
  count: number;
  startClientMsgID: string;
  conversationID: string;
}): Promise<AdvancedGetMessageResult>
```

### Input Parameters

| Parameter Name         | Parameter Type | Required | Description                                                                                 |
| ---------------- | -------- | -------- | ------------------------------------------------------------------------------------ |
| operationID      | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random                              |
| conversationID   | string   | Yes      | Conversation ID                                                                              |
| startClientMsgID | string   | Yes      | Starting message clientMsgID, empty string for first pull, subsequently the clientMsgID of the last message from the previous pull |
| count            | number   | Yes      | Amount to pull at once                                                                       |
| lastMinSeq       | number   | Yes      | lastMinSeq is the value returned from the last pull callback, context used, needs to be passed back on the second pull                        |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                                             | Description         |
| --------------- | ------------------------------------------------------------------------------------ | ------------ |
| Promise.then()  | Promise<[AdvancedGetMessageResult](/class/message/advancedHistoryInfo.md)> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                              | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getAdvancedHistoryMessageList', IMSDK.uuid(), {
  lastMinSeq: 0,
  count: 20,
  startClientMsgID: '',
  conversationID: 'conversationID',
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
OpenIMSDK.getAdvancedHistoryMessageList({
  conversationID: string;
  startClientMsgID: string;
  count: number;
  viewType: ViewType
}, operationID?: string): Promise<AdvancedGetMessageResult>
```

### Input Parameters

| Parameter Name         | Parameter Type | Required | Description                                                                                 |
| ---------------- | -------- | -------- | ------------------------------------------------------------------------------------ |
| conversationID   | string   | Yes      | Conversation ID                                                                              |
| startClientMsgID | string   | Yes      | Starting message clientMsgID, empty string for first pull, subsequently the clientMsgID of the last message from the previous pull |
| count            | number   | Yes      | Amount to pull at once                                                                       |
| viewType        | [ViewType](/enum/viewType.md)   | Yes      | Determine whether it is a normal pull of chat history or getting message context after a search            |
| operationID      | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random                              |

### Return Result

| Parameter Name        | Parameter Type                                                                             | Description         |
| --------------- | ------------------------------------------------------------------------------------ | ------------ |
| Promise.then()  | Promise<[AdvancedGetMessageResult](/class/message/advancedHistoryInfo.md)> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                              | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK, { ViewType } from "@openim/rn-client-sdk";

OpenIMSDK.getAdvancedHistoryMessageList({
  conversationID: 'conversationID',
  startClientMsgID: '',
  count: 20,
  viewType: ViewType.History,
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

public static void GetAdvancedHistoryMessageList(OnBase<AdvancedMessage> cb, GetAdvancedHistoryMessageListParams getMessageOptions)

```

### Input Parameters
| Parameter Name       | Parameter Type                                                                   | Required | Description                                                                                                           |
| -------------- | -------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| cb | OnBase<[AdvancedMessage](/class/message/advancedHistoryInfo.md)> | Yes      | Callback interface                                                                                                       |
| getMessageOptions | [GetAdvancedHistoryMessageListParams](/class/message/GetAdvancedHistoryMessageListParams.md) | Yes      |  Options                                                                                                        |

### Code Example

```C# showLineNumbers
IMSDK.GetAdvancedHistoryMessageList((advanceMessage,errCode,errMsg)=>{

},new GetAdvancedHistoryMessageListParams(){

});
```

</TabItem>

</Tabs>
