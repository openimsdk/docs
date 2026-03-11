---
sidebar_position: 24
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# isJoinGroup

## Description

:::info

Whether the current user has joined a group

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
 Future<bool> isJoinedGroup({
    required String groupID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| groupID        | String         | Yes      | Group ID    |

### Return Result

| Parameter Name | Parameter Type | Description                                |
| -------------- | -------------- | ------------------------------------------ |
| ~              | ~              | Operation successful if no exception thrown|

### Code Example

```dart showLineNumbers
   await OpenIM.iMManager.groupManager.isJoinedGroup(
      groupID: 'groupID',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)isJoinedGroup:(NSString *)groupID
            onSuccess:(nullable OIMBoolCallback)onSuccess
            onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| groupID        | NSString       | Yes      | Group ID    |

### Return Result

| Parameter Name | Parameter Type                                         | Description |
| -------------- | ------------------------------------------------------ | ----------- |
| onSuccess      | OIMSuccessCallback                                     | Success     |
| onFailure      | OIMFailureCallback                                     | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager isJoinedGroup:@""
                       onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

 public void isJoinGroup(OnBase<Bool> callBack)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description        |
| -------------- | ----------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface |

### Return Result

### Code Example

```java showLineNumbers

   OpenIMClient.getInstance().groupManager.dismissGroup(new OnBase<Bool>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(Bool data) {

            }
        },gid);

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.isJoinGroup(groupID: string, operationID?: string): Promise<WsResponse<boolean>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                        | Description      |
| --------------- | ----------------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)<boolean\>\>  | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>            | Failure callback |

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

IMSDK.isJoinGroup('groupID')
  .then(() => {
    // Success
  })
  .catch(({ errCode, errMsg }) => {
    // Failure
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('isJoinGroup', operationID: string, groupID: string): Promise<boolean>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string         | Yes      | Group ID                                                               |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<boolean\>                             | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('isJoinGroup', IMSDK.uuid(), 'groupID')
  .then(() => {
    // Success
  })
  .catch(({ errCode, errMsg }) => {
    // Failure
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.isJoinGroup(groupID: string, operationID?: string): Promise<boolean>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<boolean\>                              | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.isJoinGroup('groupID')
  .then(() => {
    // Success
  })
  .catch((error) => {
    // Failure
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void IsJoinGroup(OnBase<bool> cb, string groupId)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description |
| -------------- | ----------------------------- | -------- | ----------- |
| cb             | [OnBase](/callback/onBase.md) | Yes      | Callback    |
| groupId        | string                        | Yes      | Group ID    |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.DismissGroup((suc,errCode,errMsg)=>{

},groupID);

```

</TabItem>

</Tabs>
