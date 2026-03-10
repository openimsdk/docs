---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# checkFriend

## Description

:::info

Check the friend relationship. If the user is not in your friend list or has been added to the blocklist, the returned result is non-friend.
If you only need to check if the other party is in your friend list, it is recommended to call the `getSpecifiedFriendsInfo` API.

:::

:::caution Note

Since friendship is a two-way relationship, only checking whether the other party is in your friend list cannot verify whether you are in their friend list.

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
 Future<List<FriendshipInfo>> checkFriend({
    required List<String> userIDList,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description      |
| -------------- | -------------- | -------- | ---------------- |
| userIDList     | List<String\>  | Yes      | List of User IDs |

### Return Result

| Parameter Name | Parameter Type          | Description |
| -------------- | ----------------------- | ----------- |
| ~              | List<FriendshipInfo\>   | Success     |

#### FriendshipInfo

| Field Name | Field Type | Description                                                        |
| ---------- | ---------- | ------------------------------------------------------------------ |
| userID     | String     | UserID                                                             |
| result     | int        | When checkFriend: result is 1 means friend (and not in blocklist)  |

### Code Example

```dart showLineNumbers
   final list = await OpenIM.iMManager.friendshipManager.checkFriend(userIDList: ['ID']);
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)checkFriend:(NSArray <NSString *> *)usersID
          onSuccess:(nullable OIMSimpleResultsCallback)onSuccess
          onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type        | Required | Description      |
| -------------- | --------------------- | -------- | ---------------- |
| usersID        | NSArray <NSString \*> | Yes      | List of User IDs |

### Return Result

| Parameter Name | Parameter Type                    | Description |
| -------------- | --------------------------------- | ----------- |
| onSuccess      | NSArray< OIMSimpleResultInfo \* > | Success     |
| onFailure      | OIMFailureCallback                | Failure     |

#### OIMSimpleResultInfo

| Field Name | Field Type | Description                                                        |
| ---------- | ---------- | ------------------------------------------------------------------ |
| userID     | NSString   | User ID                                                            |
| result     | NSInteger  | When checkFriend: result is 1 means friend (and not in blocklist)  |

### Code Example

```swift showLineNumbers

[OIMManager.manager checkFriend:@[]
                              onSuccess:^(NSArray<OIMSimpleResultInfo *> * _Nullable results) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void checkFriend(OnBase<List<FriendshipInfo>> callBack, List<String> uidList)

```

### Input Parameters

| Parameter Name | Parameter Type                                        | Required | Description            |
| -------------- | ----------------------------------------------------- | -------- | ---------------------- |
| callBack       | [OnBase](/callback/onBase.md)<List<FriendshipInfo\>>  | Yes      | Callback interface     |
| uidList        | String                                                | Yes      | Collection of User IDs |

#### FriendInfo

| Field Name | Field Type | Description                          |
| ---------- | ---------- | ------------------------------------ |
| userID     | String     | UserID                               |
| result     | int        | 1 means friend (and not blocklisted) |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.checkFriend(new OnBase<FriendshipInfo>(){...},uidList)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
type FriendshipInfo = {
    result: number; //  1 means friend, 0 means non-friend
    userID: string;
};
IMSDK.checkFriend(userIDList: string[], operationID?: string): Promise<WsResponse<FriendshipInfo[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description      |
| -------------- | -------------- | -------- | ---------------- |
| userIDList     | string[]       | Yes      | List of User IDs |

### Return Result

| Parameter Name  | Parameter Type                                 | Description                                        |
| --------------- | ---------------------------------------------- | -------------------------------------------------- |
| Promise.then()  | Promise<WsResponse<FriendshipInfo[]>\>         | List of friend relationship result information     |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>     | Failure callback                                   |

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
IMSDK.checkFriend(userIDList)
  .then((data) => {
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
type FriendshipInfo = {
    result: number; //  1 means friend, 0 means non-friend
    userID: string;
};
IMSDK.asyncApi('checkFriend', operationID: string, userIDList: string[]): Promise<FriendshipInfo[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| userIDList     | string[]       | Yes      | List of User IDs                                                       |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description                                        |
| --------------- | --------------------------------------------- | -------------------------------------------------- |
| Promise.then()  | Promise<FriendshipInfo[]\>                    | List of friend relationship result information     |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback                                   |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

const userIDList = ['userID1', 'userID2'];
IMSDK.asyncApi('checkFriend', IMSDK.uuid(), userIDList)
  .then((data) => {
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
type FriendshipInfo = {
    result: number; //  1 means friend, 0 means non-friend
    userID: string;
};
OpenIMSDK.checkFriend(userIDList: string[], operationID?: string): Promise<FriendshipInfo[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| userIDList     | string[]       | Yes      | List of User IDs                                                       |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result


| Parameter Name  | Parameter Type                                 | Description                                        |
| --------------- | ---------------------------------------------- | -------------------------------------------------- |
| Promise.then()  | Promise<FriendshipInfo[]\>                     | List of friend relationship result information     |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback                                   |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

const userIDList = ['userID1', 'userID2'];
OpenIMSDK.checkFriend(userIDList)
  .then((data) => {
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

public static void CheckFriend(OnBase<List<UserIDResult>> cb, string[] userIdList)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                           | Required | Description            |
| -------------- | ---------------------------------------------------------------------------------------- | -------- | ---------------------- |
| cb             | [OnBase](/callback/onBase.md)<List<[UserIDResult](/class/relation/UserIdResult.md)>>     | Yes      | Callback               |
| userIdList     | string[]                                                                                 | Yes      | Collection of User IDs |


### Code Example

```C# showLineNumbers

IMSDK.CheckFriend((list,errCode,errMsg)=>{

}, {"userid1","userid2"});

```

</TabItem>

</Tabs>
