---
sidebar_position: 27
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# deleteAllMsgFromLocalAndSvr

## Description

:::info

Delete all messages in all local and server conversations, the conversations will still be retained.

:::

:::caution Note

**Related Callback**:      
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
{label:'React-Native',value:'React-Native',},
{label:'Unity',value:'Unity',},
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<dynamic> deleteAllMsgFromLocalAndSvr({
    String? operationID,
  })
```

### Input Parameters

None

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation is successful if no exception is thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.messageManager.deleteAllMsgFromLocalAndSvr();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)deleteAllMsgFromLocalAndSvrWithOnSuccess:(nullable OIMSuccessCallback)onSuccess
                                       onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager deleteAllMsgFromLocalAndSvrWithOnSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
   public void deleteAllMsgFromLocalAndSvr(OnBase<String> base)
```

### Input Parameters

| Name     | Type                                             | Required | Description |
| -------- | ------------------------------------------------ | ---- | -------- |
| callBack | [OnBase<String\>](/callback/onBase.md) | Yes   | Callback interface |

### Code Example

```dart showLineNumbers
       OpenIMClient.getInstance().messageManager. deleteAllMsgFromLocalAndSvr(new OnBase<String>() {
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
IMSDK.deleteAllMsgFromLocalAndSvr(operationID?: string): Promise<WsResponse>
```

### Input Parameters

None

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

IMSDK.deleteAllMsgFromLocalAndSvr()
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
IMSDK.asyncApi('deleteAllMsgFromLocalAndSvr', operationID: string): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('deleteAllMsgFromLocalAndSvr', IMSDK.uuid())
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
OpenIMSDK.deleteAllMsgFromLocalAndSvr(operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.deleteAllMsgFromLocalAndSvr()
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

public static void DeleteAllMsgFromLocalAndSVR(OnBase<bool> cb)

```

### Input Parameters

| Name     | Type                                             | Required | Description |
| -------- | ------------------------------------------------ | ---- | -------- |
| cb | [OnBase](/callback/onBase.md) | Yes   | Callback interface |

### Code Example

```C# showLineNumbers

IMSDK.DeleteAllMsgFromLocalAndSVR((suc,errCode,errMsg)=>{

});

```

</TabItem>
</Tabs>
