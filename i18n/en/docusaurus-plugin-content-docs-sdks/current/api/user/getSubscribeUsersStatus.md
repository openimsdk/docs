---
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getSubscribeUsersStatus

## Description

:::info

Get the online status of all subscribed users.

:::

:::caution Note

Retrieve the online status of all subscribed users at once, returning a maximum of 3000.

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
  Future<List<UserStatusInfo>> getSubscribeUsersStatus({
    String? operationID,
  })
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type              | Description         |
| -------- | --------------------- | ------------ |
| then     | List<[UserStatusInfo](/class/user/userStatusInfo.md) > | Success callback |
| onError  | Function              | Failure callback |

### Code Example

```dart showLineNumbers
await OpenIM.iMManager.userManager.getSubscribeUsersStatus();
// todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getSubscribeUsersStatusWithOnSuccess:(nullable OIMUserStatusInfosCallback)onSuccess
                                   onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                             | Description     |
| --------- | ---------------------------------------------------- | -------- |
| onSuccess | NSArray<[OIMUserStatusInfo](/class/user/userStatusInfo.md) *>      | Success return |
| onFailure | OIMFailureCallback | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getSubscribeUsersStatusWithOnSuccess:^(NSArray<OIMUserStatusInfo *> * _Nullable statusInfos) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void getSubscribeOnlineUsersStatus(OnBase<List<UsersOnlineStatus>> callBack)
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                                                                                    | Description         |
| -------- | ----------------------------------------------------------------------------------------------------------- | ------------ |
| callBack | [OnBase](/callback/onBase.md)<List<[UsersOnlineStatus](/class/user/userStatusInfo.md)>> | Success callback |

### Code Example

```java showLineNumbers
        OpenIMClient.getInstance()
            .userInfoManager.getSubscribeOnlineUsersStatus(new OnBase<List<UsersOnlineStatus>>() {
                @Override
                public void onError(int code, String error) {

                }

                @Override
                public void onSuccess(List<UsersOnlineStatus> data) {
                // todo
                }
            });

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getSubscribeUsersStatus(operationID?: string): Promise<WsResponse<UserOnlineState[]>>
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                                                           | Description                 |
| --------------- | ---------------------------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<WsResponse<[UserOnlineState](/class/user/userStatusInfo.md)[]>\> | Subscribed user online status details list |
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

IMSDK.getSubscribeUsersStatus()
  .then(({ data }) => {
    // data: Subscribed user online status details list
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('getSubscribeUsersStatus', operationID: string): Promise<UserOnlineState[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                               | Description                 |
| --------------- | ---------------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<[UserOnlineState](/class/user/userStatusInfo.md)[]\> | Subscribed user online status details list |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                | Failure callback         |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getSubscribeUsersStatus', IMSDK.uuid())
  .then((data) => {
    // data: Subscribed user online status details list
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.getSubscribeUsersStatus(operationID?: string): Promise<UserOnlineState[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                               | Description                 |
| --------------- | ---------------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<[UserOnlineState](/class/user/userStatusInfo.md)[]\> | Subscribed user online status details list |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                | Failure callback         |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getSubscribeUsersStatus()
  .then((data) => {
    // data: Subscribed user online status details list
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void GetSubscribeUsersStatus(OnBase<List<OnlineStatus>> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                                    | Description         |
| -------- | ----------------------------------------------------------------------------------------------------------- | ------------ |
| cb | [OnBase](/callback/onBase.md)<List<[UsersOnlineStatus](/class/user/userStatusInfo.md)>>| Callback|

### Code Example

```C# showLineNumbers

IMSDK.GetSubscribeUsersStatus((list ,errCode,errMsg)=>{

});

```

</TabItem>

</Tabs>
