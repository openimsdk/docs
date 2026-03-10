---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# unsubscribeUsersStatus

## Description

:::info

Unsubscribe from the online status of specified users.

:::

:::caution Note

After unsubscribing, you will no longer be notified of their online/offline status.

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
  Future unsubscribeUsersStatus(
    List<String> userIDs, {
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type      | Required | Description    |
| -------- | ------------- | -------- | ------- |
| userIDs  | List<String\> | Yes      | User ID list |

### Return Result

| Parameter Name | Parameter Type | Description         |
| -------- | -------- | ------------ |
| then     | void     | Success callback |
| onError  | Function | Failure callback |

### Code Example

```dart showLineNumbers
await OpenIM.iMManager.userManager.unsubscribeUsersStatus([]);
// todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)unsubscribeUsersStatus:(NSArray<NSString *> *)userIDs
                   onSuccess:(nullable OIMUserStatusInfosCallback)onSuccess
                   onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type              | Required | Description    |
| -------- | --------------------- | -------- | ------- |
| userIDs  | NSArray<NSString \*\> | Yes      | User ID list |

### Return Result

| Parameter Name  | Parameter Type                                             | Description     |
| --------- | ---------------------------------------------------- | -------- |
| onSuccess | OIMSuccessCallback                                   | Success return |
| onFailure | OIMFailureCallback | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager unsubscribeUsersStatus:@[]
                                   onSuccess:^(NSString * _Nullable result) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
 public void unsubscribeOnlineUsersStatus(OnBase<String> callBack, List<String> uid)
```

### Input Parameters

| Parameter Name | Parameter Type                                                                                                    | Required | Description    |
| -------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------- |
| callback | [OnBase](/callback/onBase.md)<List<[UsersOnlineStatus](/class/user/userStatusInfo.md)>> | Yes      | Callback interface |
| ids      | List<String\>                                                                                               | Yes      | User ID list |

### Code Example

```java showLineNumbers
        OpenIMClient.getInstance().userInfoManager.unsubscribeOnlineUsersStatus(new OnBase<List<UsersOnlineStatus>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<UsersOnlineStatus> data) {

            }
        },ids);
// todo
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.unsubscribeUsersStatus(userIDList: string[], operationID?: string): Promise<WsResponse<UserOnlineState[]>>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description         |
| ---------- | -------- | -------- | ------------ |
| userIDList | string[] | Yes      | User ID list |

### Return Result

| Parameter Name  | Parameter Type                                                                           | Description                 |
| --------------- | ---------------------------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<WsResponse<[UserOnlineState](/class/user/userStatusInfo.md)[]>\> | User online status details list |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                               | Failure callback         |

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

IMSDK.unsubscribeUsersStatus()
  .then(({ data }) => {
    // data: User online status details list
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('unsubscribeUsersStatus', operationID: string, userIDList: string[]): Promise<UserOnlineState[]>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| userIDList  | string[] | Yes      | User ID list                                            |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                               | Description                 |
| --------------- | ---------------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<[UserOnlineState](/class/user/userStatusInfo.md)[]\> | User online status details list |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                | Failure callback         |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('unsubscribeUsersStatus', IMSDK.uuid())
  .then((data) => {
    // data: User online status details list
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.unsubscribeUsersStatus(userIDList: string[], operationID?: string): Promise<UserOnlineState[]>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| userIDList  | string[] | Yes      | User ID list                                            |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                               | Description                 |
| --------------- | ---------------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<[UserOnlineState](/class/user/userStatusInfo.md)[]\> | User online status details list |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                | Failure callback         |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.unsubscribeUsersStatus(userIDList)
  .then((data) => {
    // data: User online status details list
  })
  .catch((error) => {
    // Call failed
  });
```
</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void UnsubscribeUsersStatus(OnBase<bool> cb, string[] userIds)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                                    | Required | Description    |
| -------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------- |
| cb | [OnBase](/callback/onBase.md) |Yes       |  Callback |
| userIDS     |  string[]                                                                                             | Yes      | User ID collection |

### Code Example

```C# showLineNumbers

IMSDK.UnsubscribeUsersStatus((suc,errCode,errMsg)=>{

},userIdS);

```

</TabItem>

</Tabs>
