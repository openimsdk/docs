---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getFriendListPage

## Description

:::info

Get a paginated list of a specified number of friends. `offset` is the starting index for pagination, and `count` is the number of records per page.

:::

:::caution Note

The `count` number should not be too large, otherwise the request duration will be too long.

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
  Future<List<FriendInfo>> getFriendListPage({String? operationID, bool filterBlack = false, int offset = 0, int count = 40,})
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                         |
| -------------- | -------------- | -------- | ----------------------------------- |
| filterBlack    | bool           | No       | Whether to filter out the blocklist |
| offset         | int            | Yes      | Starting index for pagination       |
| count          | int            | Yes      | Number of records per page          |

### Return Result

| Parameter Name | Parameter Type                                         | Description |
| -------------- | ------------------------------------------------------ | ----------- |
| ~              | List< [FriendInfo](/class/relation/friendInfo.md) \* > | Success     |

### Code Example

```dart showLineNumbers
    List<FriendInfo> list = await OpenIM.iMManager.friendshipManager.getFriendListPage();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getFriendListPageWithFilterBlack:(BOOL)filterBlack 
                          offset:(NSInteger)offset 
                          count:(NSInteger)count
                          onSuccess:(nullable OIMFriendInfoCallback)onSuccess
                         onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                         |
| -------------- | -------------- | -------- | ----------------------------------- |
| filterBlack    | BOOL           | No       | Whether to filter out the blocklist |
| offset         | NSInteger      | Yes      | Starting index for pagination       |
| count          | NSInteger      | Yes      | Number of records per page          |

### Return Result

| Parameter Name | Parameter Type                                               | Description |
| -------------- | ------------------------------------------------------------ | ----------- |
| onSuccess      | NSArray< [OIMFriendInfo](/class/relation/friendInfo.md) \* > | Success     |
| onFailure      | OIMFailureCallback                                           | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getFriendListPageWithFilterBlack: NO
                          offset:offset 
                          count:count
onSuccess:^(NSArray<OIMFriendInfo *> * _Nullable userInfos) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void getFriendListPage(OnBase<List<UserInfo>> base, int offset, int count, Boolean filterBlack)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                         |
| -------------- | -------------- | -------- | ----------------------------------- |
| offset         | int            | Yes      | Starting index for pagination       |
| count          | int            | Yes      | Number of records per page          |
| filterBlack    | Boolean        | No       | Whether to filter out the blocklist |

### Return Result

| Parameter Name | Parameter Type                              | Description |
| -------------- | ------------------------------------------- | ----------- |
| data           | List<[UserInfo](/class/user/userInfo.md)> | Success     |

### Code Example


```java showLineNumbers
OpenIMClient.getInstance().friendshipManager.getFriendListPage(new OnBase<List<UserInfo>>() {
    @Override
    public void onError(int code, String error) {
        // todo: handle error information
    }
    @Override
    public void onSuccess(List<UserInfo> data) {
        // todo: request successful, returns List<UserInfo>
    }
}, filterBlack);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getFriendListPage({
  offset: number;
  count: number;
  filterBlack?: boolean;
}, operationID?: string): Promise<WsResponse<FriendUserItem[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| offset         | number         | Yes      | Starting index for pagination                                          |
| count          | number         | Yes      | Number of records per page                                             |
| filterBlack    | boolean        | No       | Whether to filter out blocked friends, defaults to not filtering       |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                          | Description                               |
| --------------- | ----------------------------------------------------------------------- | ----------------------------------------- |
| Promise.then()  | Promise<WsResponse<[FriendUserItem](/class/relation/friendInfo.md)[]>\> | List of friend information objects        |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                              | Failure callback                          |

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

IMSDK.getFriendListPage({ offset, count })
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
IMSDK.asyncApi('getFriendListPage', operationID: string, {
  offset: number;
  count: number;
  filterBlack?: boolean;
}): Promise<FriendUserItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| offset         | number         | Yes      | Starting index for pagination                                          |
| count          | number         | Yes      | Number of records per page                                             |
| filterBlack    | boolean        | No       | Whether to filter out the blocklist                                    |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                          | Description                        |
| --------------- | ----------------------------------------------------------------------- | ---------------------------------- |
| Promise.then()  | Promise<WsResponse<[FriendUserItem](/class/relation/friendInfo.md)[]>\> | List of friend information objects |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                           | Failure callback                   |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getFriendListPage', IMSDK.uuid(), {
  offset,
  count,
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
OpenIMSDK.getFriendListPage({
  offset: number;
  count: number;
  filterBlack?: boolean;
}, operationID?: string): Promise<FriendUserItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| offset         | number         | Yes      | Starting index for pagination                                          |
| count          | number         | Yes      | Number of records per page                                             |
| filterBlack    | boolean        | No       | Whether to filter out the blocklist                                    |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                          | Description                        |
| --------------- | ----------------------------------------------------------------------- | ---------------------------------- |
| Promise.then()  | Promise<WsResponse<[FriendUserItem](/class/relation/friendInfo.md)[]>\> | List of friend information objects |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                          | Failure callback                   |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getFriendListPage({
  offset,
  count,
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

public static void GetFriendListPage(OnBase<List<FriendInfo>> cb,bool filterBlack)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                   | Required | Description                         |
| -------------- | -------------------------------------------------------------------------------- | -------- | ----------------------------------- |
| cb             | [OnBase](/callback/onBase.md)<List<[FriendInfo](/class/relation/friendInfo.md)>> | Yes      | Callback                            |
| filterBlack    | bool                                                                             | Yes      | Whether to filter out the blocklist |


### Code Example

```C# showLineNumbers

IMSDK.GetFriendListPage((list,errCode,errMsg)=>{

},true);

```

</TabItem>



</Tabs>
