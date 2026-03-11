---
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getTotalUnreadMsgCount

## Description

:::info

Get the total number of unread messages across all conversations.

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
  Future<dynamic> getTotalUnreadMsgCount({
    String? operationID,
  })
```

### Input Parameters

None

### Return Result

| Name | Type    | Description     |
| ---- | ------- | -------- |
| ~    | dynamic | Success return |

### Code Example

```dart showLineNumbers
    final count = await OpenIM.iMManager.conversationManager.getTotalUnreadMsgCount();
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getTotalUnreadMsgCountWithOnSuccess:(nullable OIMNumberCallback)onSuccess
                                  onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | [OIMNumberCallback](/callback/onProgress.md) | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getTotalUnreadMsgCountWithOnSuccess:^(NSInteger number) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
   public void getTotalUnreadMsgCount(OnBase<String> base)
```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description     |
| -------- | ------------------------------------------------ | -------- | -------- |
| base     | [OnBase<String\>](/callback/onBase.md) | Yes      | Callback interface |

### Code Example

```java showLineNumbers
    OpenIMClient.getInstance().conversationManager.getTotalUnreadMsgCount(new OnBase<String>() {
              @Override
              public void onError(int code, String error) {

              }

              @Override
              public void onSuccess(String data) {

              }
          });
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getTotalUnreadMsgCount(operationID?: string): Promise<WsResponse<number>>
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                             | Description         |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<number\>\>                        | Success callback |
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

IMSDK.getTotalUnreadMsgCount()
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
IMSDK.asyncApi('getTotalUnreadMsgCount', operationID: string): Promise<number>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<number\>                                        | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getTotalUnreadMsgCount', IMSDK.uuid())
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
OpenIMSDK.getTotalUnreadMsgCount(operationID?: string): Promise<number>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<number\>                                        | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getTotalUnreadMsgCount()
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

public static void GetTotalUnreadMsgCount(OnBase<int> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description     |
| -------- | ------------------------------------------------ | -------- | -------- |
| cb | [OnBase](/callback/onBase.md) | Yes      | Callback interface |

### Code Example

```C# showLineNumbers
IMSDK.GetTotalUnreadMsgCount((count,err,errMsg)=>{

});
```

</TabItem>
</Tabs>
