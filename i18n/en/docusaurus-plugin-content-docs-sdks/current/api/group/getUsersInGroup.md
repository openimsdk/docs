---
sidebar_position: 24
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getUsersInGroup

## Description

:::info

Check if a batch of users is in a specified group.

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
Future<dynamic> getUsersInGroup(
    String groupID,
    List<String> userIDs, {
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| groupID        | String         | Yes      | Group ID    |
| userIDs        | List< String\> | Yes      | User ID List|

### Return Result

| Parameter Name | Parameter Type | Description                               |
| -------------- | -------------- | ----------------------------------------- |
| ~              | ~              | Operation successful if no exception thrown|

### Code Example

```dart showLineNumbers
   await OpenIM.iMManager.groupManager.getUsersInGroup(
      groupID: '',
      userIDs: []
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getUsersInGroup:(NSString *)groupID
                userIDs:(NSArray<NSString *> *)userIDs
            onSuccess:(nullable OIMStringArrayCallback)onSuccess
            onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type      | Required | Description  |
| -------------- | ------------------- | -------- | ------------ |
| groupID        | NSString            | Yes      | Group ID     |
| userIDs        | NSArray< String\>   | Yes      | User ID List |

### Return Result

| Parameter Name | Parameter Type                                         | Description |
| -------------- | ------------------------------------------------------ | ----------- |
| onSuccess      | OIMSuccessCallback                                     | Success     |
| onFailure      | OIMFailureCallback                                     | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getUsersInGroup:@"" 
                            userIDs: @[]
                       onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

 public void getUsersInGroup(OnBase<String[]> callBack, String groupId, String[] userIdList)

```

### Input Parameters

| Parameter Name | Parameter Type                                | Required | Description        |
| -------------- | --------------------------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md)                 | Yes      | Callback interface |
| groupID        | string                                        | Yes      | Group ID           |
| userIDList     | string[]                                      | Yes      | User ID List       |

### Return Result

### Code Example

```java showLineNumbers

   OpenIMClient.getInstance().groupManager.getUsersInGroup(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String[] data) {

            }
        },gid);

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getUsersInGroup({
  groupID: string;
  userIDList: string[];
}, operationID?: string): Promise<WsResponse<string[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| userIDList     | string[]       | Yes      | User ID List                                                           |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                       | Description      |
| --------------- | ---------------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)<string[]>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>           | Failure callback |

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

IMSDK.getUsersInGroup({
  groupID: 'groupID',
  userIDList: ['userIDList'],
})
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
IMSDK.asyncApi('getUsersInGroup', operationID: string, {
  groupID: string;
  userIDList: string[];
}): Promise<string[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| userIDList     | string[]       | Yes      | User ID List                                                           |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<string[]>                             | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getUsersInGroup', IMSDK.uuid(), {
  groupID: 'groupID',
  userIDList: ['userIDList'],
})
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
OpenIMSDK.getUsersInGroup({
  groupID: string;
  userIDList: string[];
}, operationID?: string): Promise<string[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| userIDList     | string[]       | Yes      | User ID List                                                           |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<string[]\>                             | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getUsersInGroup({
  groupID: 'groupID',
  userIDList: ['userIDList'],
})
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

public static void GetUsersInGroup(OnBase<string[]> cb, string groupId, string[] userIdList)

```

### Input Parameters

| Parameter Name | Parameter Type                                | Required | Description  |
| -------------- | --------------------------------------------- | -------- | ------------ |
| cb             | [OnBase](/callback/onBase.md)                 | Yes      | Callback     |
| groupId        | string                                        | Yes      | Group ID     |
| userIdList     | string[]                                      | Yes      | User ID List |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetUsersInGroup((suc,errCode,errMsg)=>{

},groupId,new string[]{"userId"});

```

</TabItem>

</Tabs>
