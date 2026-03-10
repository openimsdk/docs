---
sidebar_position: 17
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# clearConversationAndDeleteAllMsg

## Description

:::info

Delete the messages in a specified conversation from both local and server, but the conversation itself will still be kept.

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
{ label: 'Browser/Electron', value: 'Web', },
{label: 'React-Native', value: 'React-Native',},
{label: 'Unity', value: 'Unity',},
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future clearConversationAndDeleteAllMsg({
    required String conversationID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | String   | Yes      | Conversation ID |

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation successful if no exception is thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.conversationManager.clearConversationAndDeleteAllMsg(conversationID: conversationID);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)clearConversationAndDeleteAllMsg:(NSString *)conversationID
                                 onSuccess:(nullable OIMSuccessCallback)onSuccess
                                 onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | NSString | Yes      | Conversation ID |

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager clearConversationAndDeleteAllMsg:@""
                                             onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">
### Function Prototype

```java showLineNumbers
public void clearConversationAndDeleteAllMsg(String conversationID, OnBase<String> callBack)
```

### Input Parameters

| Parameter Name | Parameter Type                          | Required | Description |
| -------------- | --------------------------------------- | -------- | -------- |
| conversationID | String                                  | Yes      | Conversation ID  |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface |

### Code Example

```java showLineNumbers
        OpenIMClient.getInstance().messageManager.clearConversationAndDeleteAllMsg(conversationID,new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        })
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.clearConversationAndDeleteAllMsg(conversationID: string, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | string   | Yes      | Conversation ID |

### Return Result

| Parameter Name  | Parameter Type                                       | Description      |
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

IMSDK.clearConversationAndDeleteAllMsg('conversationID')
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
IMSDK.asyncApi('clearConversationAndDeleteAllMsg', operationID: string, conversationID: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| operationID    | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| conversationID | string   | Yes      | Conversation ID                                                 |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                          | Description      |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi(
  'clearConversationAndDeleteAllMsg',
  IMSDK.uuid(),
  'conversationID'
)
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
OpenIMSDK.clearConversationAndDeleteAllMsg(conversationID: string, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| conversationID | string   | Yes      | Conversation ID                                                 |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result
| Parameter Name  | Parameter Type                                          | Description      |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.clearConversationAndDeleteAllMsg("conversationID")
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

public static void ClearConversationAndDeleteAllMsg(OnBase<bool> cb, string conversationId);

```

### Input Parameters

| Parameter Name | Parameter Type                          | Required | Description |
| -------------- | --------------------------------------- | -------- | -------- |
| cb |[OnBase](/callback/onBase.md) | Yes      | Callback interface |
| conversationId | string                                  | Yes      | Conversation ID  |

### Code Example

```C# showLineNumbers
IMSDK.ClearConversationAndDeleteAllMsg((suc,errCode,errMsg)=>{

},conversationId);
```

</TabItem>

</Tabs>
