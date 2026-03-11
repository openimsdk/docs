---
sidebar_position: 25
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# deleteMessageFromLocalStorage

## Description

:::info

Delete a message from local storage. It can still be retrieved after reinstalling the APP.

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
{ label: 'Browser/Electron', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future deleteMessageFromLocalStorage({
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
    await OpenIM.iMManager.messageManager.deleteMessageFromLocalStorage(
        "conversationID":"conversationID",
        "clientMsgID":"clientMsgID",
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)deleteMessageFromLocalStorage:(NSString *)conversationID
                          clientMsgID:(NSString *)clientMsgID
                            onSuccess:(OIMSuccessCallback)onSuccess
                            onFailure:(OIMFailureCallback)onFailure;

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

[OIMManager.manager deleteMessageFromLocalStorage:
                                        onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
 public void deleteMessageFromLocalStorage(String conversationID, String clientMsgID, OnBase<String> callBack)
```

### Input Parameters

| Parameter Name       | Parameter Type                                         | Required | Description     |
| -------------- | ------------------------------------------------ | -------- | -------- |
| conversationID | String                                           | Yes      | Conversation ID  |
| clientMsgID    | String                                           | Yes      | Message ID  |
| callBack       | [OnBase<String\>](/callback/onBase.md) | Yes      | Callback interface |

### Code Example

```dart showLineNumbers
        OpenIMClient.getInstance().messageManager. deleteMessageFromLocalStorage(conversationID,  clientMsgID,new OnBase<String>() {
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
IMSDK.deleteMessageFromLocalStorage({
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

IMSDK.deleteMessageFromLocalStorage({
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
IMSDK.asyncApi('deleteMessageFromLocalStorage', operationID: string, {
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

IMSDK.asyncApi('deleteMessageFromLocalStorage', IMSDK.uuid(), {
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
OpenIMSDK.deleteMessageFromLocalStorage({
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

OpenIMSDK.deleteMessageFromLocalStorage({
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

public static void DeleteMessageFromLocalStorage(OnBase<bool> cb, string conversationId, string clientMsgId)

```

### Input Parameters

| Parameter Name       | Parameter Type                                         | Required | Description     |
| -------------- | ------------------------------------------------ | -------- | -------- |
| cb | [onBase](/callback/onBase.md) | Yes      | Callback interface |
| conversationId | string                                           | Yes      | Conversation ID  |
| clientMsgId    | string                                           | Yes      | Message ID  |

### Code Example

```C# showLineNumbers
IMSDK.DeleteMessageFromLocalStorage((suc,errCode,errMsg)=>{

},conversationId,clientMsgId);
```

</TabItem>
</Tabs>
