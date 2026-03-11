---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getSpecifiedFriendsInfo

## Description

:::info

Get the nickname, avatar, and remark of specified friends. This function fetches from the local APP. It is recommended to have a maximum of 10000 at a time.

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
    Future<List<FriendInfo>> getFriendsInfo({
        required List<String> userIDList,
        bool filterBlack = false,
        String? operationID,
    })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                         |
| -------------- | -------------- | -------- | ----------------------------------- |
| userIDList     | List< String\> | Yes      | List of User IDs                    |
| filterBlack    | bool           | No       | Whether to filter out the blocklist |

### Return Result

| Parameter Name | Parameter Type                                  | Description |
| -------------- | ----------------------------------------------- | ----------- |
| ~              | List< [FriendInfo](/class/user/publicInfo.md) > | Success     |

### Code Example

```dart showLineNumbers
     List<FriendInfo> list = await OpenIM.iMManager.friendshipManager.getFriendsInfo(userIDList: []);
     // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getSpecifiedFriendsInfo:(NSArray <NSString *> *)usersID 
                    filterBlack:(BOOL)filterBlack 
                       onSuccess:(nullable OIMFriendInfoCallback)onSuccess
                       onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type         | Required | Description                         |
| -------------- | ---------------------- | -------- | ----------------------------------- |
| usersID        | NSArray \<NSString \*> | Yes      | List of User IDs                    |
| filterBlack    | BOOL                   | Yes      | Whether to filter out the blocklist |

### Return Result

| Parameter Name | Parameter Type                                                 | Description |
| -------------- | -------------------------------------------------------------- | ----------- |
| onSuccess      | NSArray\<List< [OIMFriendInfo](/class/user/publicInfo.md) \* > | Success     |
| onFailure      | OIMFailureCallback                                             | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getSpecifiedFriendsInfo:@[] 
                                filterBlack: NO
                                  onSuccess:^(NSArray<OIMFriendInfo *> * _Nullable userInfos) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void getFriendsInfo(OnBase<List<UserInfo>> base, List<String> uidList, Boolean filterBlack)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                         |
| -------------- | -------------- | -------- | ----------------------------------- |
| userIDList     | List\<String\> | Yes      | List of User IDs                    |
| filterBlack    | Boolean        | No       | Whether to filter out the blocklist |


### Code Example

```java showLineNumbers
OpenIMClient.getInstance().friendshipManager.getFriendsInfo(new OnBase<List<UserInfo>>() {
    @Override
    public void onError(int code, String error) {
        // todo: handle error information
    }
    @Override
    public void onSuccess(List<UserInfo> data) {
        // todo: request successful, returns List<UserInfo>
    }
}, uidList, filterBlack);
```
</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getSpecifiedFriendsInfo({
  friendUserIDList: string[];
  filterBlack?: boolean;
}, operationID?: string): Promise<WsResponse<FriendUserItem[]>>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                            |
| ---------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| friendUserIDList | string[]       | Yes      | List of User IDs                                                       |
| filterBlack      | boolean        | No       | Whether to filter out blocked friends, defaults to not filtering       |
| operationID      | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                          | Description                 |
| --------------- | ----------------------------------------------------------------------- | --------------------------- |
| Promise.then()  | Promise<WsResponse<[FriendUserItem](/class/relation/friendInfo.md)[]>\> | List of friend information  |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                              | Failure callback            |

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
IMSDK.getSpecifiedFriendsInfo({ 
  friendUserIDList: userIDList 
})
  .then(({ data }) => {
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
IMSDK.asyncApi('getSpecifiedFriendsInfo', operationID: string, {
  friendUserIDList: string[];
  filterBlack?: boolean;
}): Promise<FriendUserItem[]>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                            |
| ---------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| friendUserIDList | string[]       | Yes      | List of User IDs                                                       |
| filterBlack      | boolean        | No       | Whether to filter out the blocklist                                    |
| operationID      | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                          | Description                 |
| --------------- | ----------------------------------------------------------------------- | --------------------------- |
| Promise.then()  | Promise<WsResponse<[FriendUserItem](/class/relation/friendInfo.md)[]>\> | List of friend information  |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                           | Failure callback            |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

const userIDList = ['userID1', 'userID2'];
IMSDK.asyncApi('getSpecifiedFriendsInfo', IMSDK.uuid(), {
  friendUserIDList: userIDList
})
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
OpenIMSDK.getSpecifiedFriendsInfo({
  friendUserIDList: string[];
  filterBlack?: boolean;
}, operationID?: string): Promise<FriendUserItem[]>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                            |
| ---------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| friendUserIDList | string[]       | Yes      | List of User IDs                                                       |
| filterBlack      | boolean        | No       | Whether to filter out the blocklist                                    |
| operationID      | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |    

### Return Result

| Parameter Name  | Parameter Type                                                          | Description                 |
| --------------- | ----------------------------------------------------------------------- | --------------------------- |
| Promise.then()  | Promise<WsResponse<[FriendUserItem](/class/relation/friendInfo.md)[]>\> | List of friend information  |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                          | Failure callback            |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

const userIDList = ['userID1', 'userID2'];
OpenIMSDK.getSpecifiedFriendsInfo({
  friendUserIDList: userIDList
})
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

public static void GetSpecifiedFriendsInfo(OnBase<List<FriendInfo>> cb, string[] userIdList,bool filterBlack)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                   | Required | Description                         |
| -------------- | -------------------------------------------------------------------------------- | -------- | ----------------------------------- |
| cb             | [OnBase](/callback/onBase.md)<List<[FriendInfo](/class/relation/friendInfo.md)>> | Yes      | Callback                            |
| userIdList     | string[]                                                                         | Yes      | Collection of User IDs              |
| filterBlack    | bool                                                                             | Yes      | Whether to filter out the blocklist |


### Code Example

```C# showLineNumbers

IMSDK.GetSpecifiedFriendsInfo((list,errCode,errMsg)=>{

},{"userid"},true);

```
</TabItem>

</Tabs>
