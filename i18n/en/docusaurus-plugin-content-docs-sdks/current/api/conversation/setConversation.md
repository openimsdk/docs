---
sidebar_position: 10
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setConversation

## Description

:::info

Set conversation information, including pinned status, do-not-disturb status, ex, and other fields.

:::

:::caution Note

**Related Callbacks**:  
[onConversationChanged](/callback/onConversationChanged.md)

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
Future setConversation(
    String conversationID,
    ConversationReq req, {
    String? operationID,
  })
```

### Input Parameters

| Parameter Name  | Parameter Type                                                      | Required | Description         |
| --------------- | ------------------------------------------------------------------- | -------- | ------------ |
| conversationID  | String                                                              | Yes      | Conversation ID      |
| conversationReq | [ConversationReq](/class/conversation/conversationReq.md) | Yes      | Modified structural values |

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.conversationManager.setConversation(conversationID, req);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)setConversation:(NSString *)conversationID
                   req:(OIMConversationReq *)req
                   onSuccess:(nullable OIMSuccessCallback)onSuccess
                   onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type                                                         | Required | Description         |
| -------------- | ---------------------------------------------------------------------- | -------- | ------------ |
| conversationID | NSString                                                               | Yes      | Conversation ID      |
| req            | [OIMConversationReq](/class/conversation/conversationReq.md) | Yes      | Modified structural values |

### Return Result

| Name      | Type               | Description     |
| --------- | ------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager setConversation:@""
                               req: req
                               onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void setConversation(OnBase<String> base, String conversationID, ConversationReq conversationReq)
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description |
| --------------  | -------- | -------- | ------- |
| conversationID  | String   | Yes      | Conversation ID |
| conversationReq | [ConversationReq](/class/conversation/conversationReq.md)   | Yes      | Modified structural values    |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().conversationManager.setConversation(new OnBase<String>() {
    @Override
    public void onError(int code, String error) {
        // todo: handle error information
    }
    @Override
    public void onSuccess(String data) {
        // todo: request successful
    }
}, conversationID , conversationReq);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.setConversation({
    conversationID: string;
    recvMsgOpt?: MessageReceiveOptType;
    groupAtType?: GroupAtType;
    burnDuration?: number;
    isPinned?: boolean;
    isPrivateChat?: boolean;
    ex?: string;
},operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description                   |
| -------------- | ------------------------------------------------------ | -------- | ---------------------- |
| conversationID | string                                                 | Yes      | Conversation ID                |
| recvMsgOpt     | [MessageReceiveOptType](/enum/recvMsgOpt.md) | No       | Receive message opt status     |
| groupAtType    | [GroupAtType](/enum/groupAtType.md)          | No       | Group at reminder type         |
| isPinned       | boolean                                                | No       | Whether the conversation is pinned           |
| isPrivateChat  | boolean                                                | No       | Whether burn-after-reading is enabled |
| burnDuration   | number                                                 | No       | Burn duration (seconds)     |
| ex             | string                                                 | No       | Extension field               |

### Return Result

| Parameter Name  | Parameter Type                                        | Description         |
| --------------- | ----------------------------------------------------- | ------------ |
| Promise.then()  | Promise\<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise\<[WsResponse](/class/response.md)\> | Failure callback |

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

IMSDK.setConversation({
  conversationID: 'conversationID',
  isPinned: true,
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
IMSDK.asyncApi('setConversation', operationID: string, {
  conversationID: string;
  recvMsgOpt?: MessageReceiveOptType;
  groupAtType?: GroupAtType;
  burnDuration?: number;
  isPinned?: boolean;
  isPrivateChat?: boolean;
  ex?: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| conversationID | string                                                 | Yes      | Conversation ID                |
| recvMsgOpt     | [MessageReceiveOptType](/enum/recvMsgOpt.md) | No       | Receive message opt status     |
| groupAtType    | [GroupAtType](/enum/groupAtType.md)          | No       | Group at reminder type         |
| isPinned       | boolean                                                | No       | Whether the conversation is pinned           |
| isPrivateChat  | boolean                                                | No       | Whether burn-after-reading is enabled |
| burnDuration   | number                                                 | No       | Burn duration (seconds)     |
| ex             | string                                                 | No       | Extension field               |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                           | Description         |
| --------------- | -------------------------------------------------------- | ------------ |
| Promise.then()  | Promise\<void\>                                          | Success callback |
| Promise.catch() | Promise\<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('setConversation', IMSDK.uuid(), {
  conversationID: '',
  isPinned: true,
})
  .then(() => {
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
OpenIMSDK.setConversation({
  conversationID: string;
  recvMsgOpt?: MessageReceiveOptType;
  groupAtType?: GroupAtType;
  burnDuration?: number;
  isPinned?: boolean;
  isPrivateChat?: boolean;
  ex?: string;
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| conversationID | string                                                 | Yes      | Conversation ID                |
| recvMsgOpt     | [MessageReceiveOptType](/enum/recvMsgOpt.md) | No       | Receive message opt status     |
| groupAtType    | [GroupAtType](/enum/groupAtType.md)          | No       | Group at reminder type         |
| isPinned       | boolean                                                | No       | Whether the conversation is pinned           |
| isPrivateChat  | boolean                                                | No       | Whether burn-after-reading is enabled |
| burnDuration   | number                                                 | No       | Burn duration (seconds)     |
| ex             | string                                                 | No       | Extension field               |

### Return Result

| Parameter Name  | Parameter Type                                           | Description         |
| --------------- | -------------------------------------------------------- | ------------ |
| Promise.then()  | Promise\<void\>                                          | Success callback |
| Promise.catch() | Promise\<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.setConversation(
  {
    conversationID: '',
    isPinned: true,
  }
)
  .then(() => {
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

public static void SetConversation(OnBase<bool> cb, string conversationId, ConversationReq req)

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description    |
| -------------- | -------- | -------- | ------- |
| conversationId | string   | Yes      | Conversation ID |
| conversationReq      | [ConversationReq](/class/conversation/conversationReq.md)   | Yes      | Modified structural values    |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.SetConversation((suc,errCode,errMsg)=> {
    
}, conversationId , conversationReq);
```

</TabItem>

</Tabs>
