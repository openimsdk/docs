---
sidebar_position: 24
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# deleteMessage

## Description

:::info

Delete a message from local and server.

:::

:::caution Note

**Related Callback**:      
[onConversationChanged](/callback/onConversationChanged.md)   
If the deleted message is the latest message, the latest message of the conversation will change

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label:'React-Native',value:'React-Native',},
{ label:'Unity',value:'Unity',},
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<dynamic> deleteMessageFromLocalAndSvr({
    required String conversationID,
    required String clientMsgID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description    |
| -------------- | -------- | -------- | ------- |
| conversationID | String   | Yes      | Conversation ID |
| clientMsgID    | String   | Yes      | Message ID |

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation is successful if no exception is thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.messageManager.deleteMessageFromLocalAndSvr(
        "conversationID":"conversationID",
        "clientMsgID":"clientMsgID",
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)deleteMessage:(NSString *)conversationID
          clientMsgID:(NSString *)clientMsgID
            onSuccess:(nullable OIMSuccessCallback)onSuccess
            onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description    |
| -------------- | -------- | -------- | ------- |
| conversationID | NSString | Yes      | Conversation ID |
| clientMsgID    | NSString | Yes      | Message ID |

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager deleteMessage:@""
                      clientMsgID:@""
                      onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">
### Function Prototype

```dart showLineNumbers
    public void deleteMessageFromLocalAndSvr(String conversationID, String clientMsgID, OnBase<String> callBack)
```

### Input Parameters

| Parameter Name       | Parameter Type                                         | Required | Description     |
| -------------- | ------------------------------------------------ | -------- | -------- |
| conversationID | String                                           | Yes      | Conversation ID  |
| clientMsgID    | String                                           | Yes      | Message ID  |
| callBack       | [OnBase<String\>](/callback/onBase.md) | Yes      | Callback interface |

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation is successful if no exception is thrown |

### Code Example

```dart showLineNumbers
     OpenIMClient.getInstance().messageManager. deleteMessageFromLocalAndSvr(conversationID,  clientMsgID,new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        })
    // todo
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.deleteMessage({
  conversationID: string;
  clientMsgID: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description    |
| -------------- | -------- | -------- | ------- |
| conversationID | string   | Yes      | Conversation ID |
| clientMsgID    | string   | Yes      | Message ID |

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

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.deleteMessage({
  conversationID: '',
  clientMsgID: '',
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
IMSDK.asyncApi('deleteMessage', operationID: string, {
  conversationID: string;
  clientMsgID: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| operationID    | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| conversationID | string   | Yes      | Conversation ID                                                 |
| clientMsgID    | string   | Yes      | Message ID                                                 |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('deleteMessage', IMSDK.uuid(), {
  conversationID: '',
  clientMsgID: '',
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
OpenIMSDK.deleteMessage({
  conversationID: string,
  clientMsgID:string
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| conversationID | string   | Yes      | Conversation ID                                                 |
| clientMsgID    | string   | Yes      | Message ID                                                 |

### Return Result

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.deleteMessage({
  conversationID: '',
  clientMsgID: '',
})
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

public static void DeleteMessage(OnBase<bool> cb, string conversationId, string clientMsgId)

```

### Input Parameters

| Parameter Name       | Parameter Type                                         | Required | Description     |
| -------------- | ------------------------------------------------ | -------- | -------- |
| cb | [OnBase](/callback/onBase.md) | Yes      | Callback interface |
| conversationId | string                                           | Yes      | Conversation ID  |
| clientMsgId    | string                                           | Yes      | Message ID  |

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation is successful if no exception is thrown |

### Code Example

```C# showLineNumbers
IMSDK.DeleteMessage((suc,errCode,errMsg)=>{

},conversationId,clientMsgId);
```

</TabItem>
</Tabs>
