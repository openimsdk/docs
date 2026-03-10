---
sidebar_position: 34
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setMessageLocalEx

## Description

:::info

Modify the local message ex field, e.g., setting the save path after downloading a file.

:::

:::caution Note

**Related Callback**:      
[onConversationChanged](/callback/onConversationChanged.md)   
If the modified message is the latest message, the latest message of the conversation will change.

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
  Future setMessageLocalEx({
    required String conversationID,
    required String clientMsgID,
    required String localEx,
    String? operationID,
  });
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description               |
| -------------- | -------- | -------- | ------------------ |
| conversationID | String   | Yes      | Conversation ID            |
| clientMsgID    | String   | Yes      | Message ID               |
| localEx        | String   | Yes      | ex info to set       |

### Return Result

| Parameter Name | Parameter Type | Description         |
| -------- | -------- | ------------ |
| then     | void     | Success callback |
| onError  | Function | Failure callback |

### Code Example

```swift showLineNumbers
OpenIM.iMManager.messageManager.setMessageLocalEx(conversationID: '', clientMsgID: '', localEx: 'localEx');
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers
- (void)setMessageLocalEx:(NSString *)conversationID
              clientMsgID:(NSString *)clientMsgID
                  localEx:(NSString *)localEx
                onSuccess:(OIMSuccessCallback)onSuccess
                onFailure:(OIMFailureCallback)onFailure;
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description               |
| -------------- | -------- | -------- | ------------------ |
| conversationID | NSString | Yes      | Conversation ID            |
| clientMsgID    | NSString | Yes      | Message ID               |
| localEx        | NSString | Yes      | ex info to set       |

### Return Result

| Parameter Name | Parameter Type           | Description         |
| --------- | ------------------ | ------------ |
| onSuccess | OIMSuccessCallback | Success callback |
| onFailure | OIMFailureCallback | Failure callback |

### Code Example

```swift showLineNumbers
[OIMManager.manager setMessageLocalEx:@""
                              clientMsgID:@""
                                  localEx:@""
                                onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];
```

</TabItem>

<TabItem value="Android">
### Function Prototype

```java showLineNumbers
public void setMessageLocalEx(OnBase<String> callBack, String conversationID, String clientMsgID, String localEx)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description               |
| -------------- | -------- | -------- | ------------------ |
| OnBase |  [OnBase](/callback/onBase.md)   | Yes      | Callback interface            |
| conversationID | String   | Yes      | Conversation ID            |
| clientMsgID    | String   | Yes      | Message ID               |
| localEx        | String   | Yes      | ex info to set       |


### Code Example

```java showLineNumbers
 OpenIMClient.getInstance()
            .messageManager.setMessageLocalEx(new OnBase<String>() {
                @Override
                public void onError(int code, String error) {

                }

                @Override
                public void onSuccess(String data) {

                }
            },conversationID,clientMsgID,localEx);
```
</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.setMessageLocalEx({
  conversationID: string;
  clientMsgID: string;
  localEx: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description               |
| -------------- | -------- | -------- | ------------------ |
| conversationID | string   | Yes      | Conversation ID            |
| clientMsgID    | string   | Yes      | Message ID               |
| localEx        | string   | Yes      | ex info to set       |

### Return Result

| Parameter Name        | Parameter Type                                            | Description         |
| --------------- | --------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[WsResponse](/class/response.md)> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.setMessageLocalEx({
  conversationID: 'conversationID',
  clientMsgID: 'clientMsgID',
  localEx: 'localEx',
})
  .then(() => {
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
IMSDK.asyncApi('setMessageLocalEx', operationID: string, {
  conversationID: string;
  clientMsgID: string;
  localEx: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| operationID    | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| conversationID | string   | Yes      | Conversation ID                                                 |
| clientMsgID    | string   | Yes      | Message ID                                                 |
| localEx        | string   | Yes      | ex info to set                                        |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('setMessageLocalEx', IMSDK.uuid(), {
  conversationID: 'conversationID',
  clientMsgID: 'clientMsgID',
  localEx: 'localEx',
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
OpenIMSDK.setMessageLocalEx( {
  conversationID: string;
  clientMsgID: string;
  localEx: string;
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| conversationID | string   | Yes      | Conversation ID                                                 |
| clientMsgID    | string   | Yes      | Message ID                                                 |
| localEx        | string   | Yes      | ex info to set                                        |

### Return Result

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.setMessageLocalEx({
  conversationID: 'conversationID',
  clientMsgID: 'clientMsgID',
  localEx: 'localEx',
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

public static void SetMessageLocalEx(OnBase<bool> cb, string conversationId, string clientMsgId, string localEx)

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description               |
| -------------- | -------- | -------- | ------------------ |
| cb | [OnBase](/callback/onBase.md)        | Yes      | Callback interface         |
| conversationId | string   | Yes      | Conversation ID            |
| clientMsgId    | string   | Yes      | Message ID               |
| localEx        | string   | Yes      | ex info to set       |


### Code Example

```C# showLineNumbers

IMSDK.SetMessageLocalEx((suc,errCode,errMsg)=>{

},conversationId,clientMsgId,localEx);

```
</TabItem>

</Tabs>
