---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# subscribeUsersStatus

## Description

:::info

Subscribe to the online status of specified users and return their online status.

:::

:::caution Note

The maximum number of subscriptions per user cannot exceed 3000. If it exceeds, they will be eliminated according to the subscription time.


**Related Callbacks**:    
[onUserStatusChanged](../../callback/onUserStatusChanged)  


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
  Future<List<UserStatusInfo>> subscribeUsersStatus(
    List<String> userIDs, {
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type      | Required | Description    |
| -------- | ------------- | -------- | ------- |
| userIDs  | List<String\> | Yes      | User ID list |

### Return Result

| Parameter Name | Parameter Type              | Description         |
| -------- | --------------------- | ------------ |
| then     | List<[UserStatusInfo](/class/user/userStatusInfo.md) > | Success callback |
| onError  | Function              | Failure callback |

### Code Example

```dart showLineNumbers
await OpenIM.iMManager.userManager.subscribeUsersStatus([]);
// todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)subscribeUsersStatus:(NSArray<NSString *> *)userIDs
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
| onSuccess | NSArray<[OIMUserStatusInfo](/class/user/userStatusInfo.md) >                           | Success return |
| onFailure | OIMFailureCallback | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager subscribeUsersStatus:@[]
                                   onSuccess:^(NSArray<OIMUserStatusInfo *> * _Nullable statusInfos) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
    public void subscribeUsersOnlineStatus(OnBase<List<UsersOnlineStatus>> callBack, List<String> uid)
```

### Input Parameters

| Parameter Name | Parameter Type                                                                                                    | Required | Description    |
| -------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------- |
| callback | [OnBase](/callback/onBase.md)<List<[UsersOnlineStatus](/class/user/userStatusInfo.md)>> | Yes      | Callback interface |
| ids      | List<String\>                                                                                               | Yes      | User ID list |

### Code Example

```java showLineNumbers
        OpenIMClient.getInstance().userInfoManager.subscribeUsersOnlineStatus(new OnBase<List<UsersOnlineStatus>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<UsersOnlineStatus> data) {
            // todo
            }
        },ids);

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.subscribeUsersStatus(userIDList: string[], operationID?: string): Promise<WsResponse<UserOnlineState[]>>
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

const userIDList = ['userID1', 'userID2'];
IMSDK.subscribeUsersStatus(userIDList)
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
IMSDK.asyncApi('subscribeUsersStatus', operationID: string, userIDList: string[]): Promise<UserOnlineState[]>
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

const userIDList = ['userID1', 'userID2'];
IMSDK.asyncApi('subscribeUsersStatus', IMSDK.uuid(), userIDList)
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
OpenIMSDK.subscribeUsersStatus(userIDList: string[], operationID?: string): Promise<UserOnlineState[]>
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

const userIDList = ['userID1', 'userID2'];
OpenIMSDK.subscribeUsersStatus(userIDList)
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

public static void SubscribeUsersStatus(OnBase<List<OnlineStatus>> cb, string[] userIds)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                                    | Required | Description    |
| -------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------- |
| cb | [OnBase](/callback/onBase.md)<List<[UsersOnlineStatus](/class/user/userStatusInfo.md)>> | Yes      | Callback|
| userIdS      |  string[]                                                                                              | Yes      | User ID collection |

### Code Example

```C# showLineNumbers

IMSDK.SubscribeUsersStatus((list, errCode, errMsg)=>{

},userIdS);

```

</TabItem>

</Tabs>
