---
sidebar_position: 18
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# deleteConversationAndDeleteAllMsg

## Description

:::info

Delete the designated conversation and all its messages from local and server storage.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron', value: 'Web', },
{label:'React-Native',value:'React-Native'},
{label:'Unity',value:'Unity'},
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<dynamic> deleteConversationAndDeleteAllMsg({
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
| ~    | ~    | Deletion successful if no exception is thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.conversationManager.deleteConversationAndDeleteAllMsg(conversationID: conversationID);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)deleteConversationAndDeleteAllMsg:(NSString *)conversationID
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

[OIMManager.manager deleteConversationAndDeleteAllMsg:@""
                                            onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void deleteConversationAndDeleteAllMsg(OnBase<String> base, String conversionID)
```

### Input Parameters

| Parameter Name | Parameter Type                          | Required | Description |
| -------------- | --------------------------------------- | -------- | -------- |
| base           | [OnBase](/callback/onBase.md) | Yes      | Callback interface |
| conversationID | String                                  | Yes      | Conversation ID  |

### Code Example

```java showLineNumbers
     OpenIMClient.getInstance().conversationManager.deleteConversationAndDeleteAllMsg(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        },conversationID);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.deleteConversationAndDeleteAllMsg(conversationID: string, operationID?: string): Promise<WsResponse>
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

IMSDK.deleteConversationAndDeleteAllMsg('conversationID')
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
IMSDK.asyncApi('deleteConversationAndDeleteAllMsg', operationID: string, conversationID: string): Promise<void>
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
  'deleteConversationAndDeleteAllMsg',
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
OpenIMSDK.deleteConversationAndDeleteAllMsg(conversationID: string, operationID?: string): Promise<void>
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

OpenIMSDK.deleteConversationAndDeleteAllMsg("conversationID")
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

public static void DeleteConversationAndDeleteAllMsg(OnBase<bool> cb, string conversationId)

```

### Input Parameters

| Parameter Name | Parameter Type                          | Required | Description |
| -------------- | --------------------------------------- | -------- | -------- |
| cb | [OnBase](/callback/onBase.md) | Yes      | Callback interface |
| conversationId | string                                  | Yes      | Conversation ID  |

### Code Example

```C# showLineNumbers
IMSDK.DeleteConversationAndDeleteAllMsg((suc,errCode,errMsg)=>{

},conversationId);
```

</TabItem>

</Tabs>
