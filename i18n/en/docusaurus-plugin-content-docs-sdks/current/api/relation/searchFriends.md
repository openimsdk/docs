---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# searchFriends

## Description

:::info

Search by keyword in your own friend list.

:::

:::caution Note

(1) At least one search field must be specified;   
(2) The relationship between multiple fields is OR.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
 Future<List<SearchFriendsInfo>> searchFriends({
    List<String> keywordList = const [],
    bool isSearchUserID = false,
    bool isSearchNickname = false,
    bool isSearchRemark = false,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                                |
| ---------------- | -------------- | -------- | -------------------------------------------------------------------------- |
| keywordList      | List<String\>  | Yes      | Search keyword, currently only supports one keyword search, cannot be empty |
| isSearchUserID   | bool           | Yes      | Whether to search UserID by keyword                                        |
| isSearchNickname | bool           | Yes      | Whether to search nickname by keyword, default false                        |
| isSearchRemark   | bool           | Yes      | Whether to search remark by keyword, default false                          |

### Return Result

| Parameter Name | Parameter Type          | Description |
| -------------- | ----------------------- | ----------- |
| ~              | List<SearchFriendInfo\> | Success     |

#### SearchFriendInfo

| Field Name     | Field Type | Description                               |
| -------------- | ---------- | ----------------------------------------- |
| ownerUserID    | String     | Currently logged-in User ID               |
| friendUserID   | String     | Friend User ID                            |
| nickname       | String     | Friend's nickname                         |
| faceURL        | String     | Friend's avatar URL                       |
| remark         | String     | Friend's remark                           |
| createTime     | int        | Time of becoming friends                  |
| addSource      | int        | Method of becoming friends                |
| operatorUserID | String     | User ID that made both parties friends    |
| attachedInfo   | String     | Not used currently                        |
| ex             | String     | Extension field                           |
| relationship   | int        | 0 for blocklist, 1 for friend             |

### Code Example

```dart showLineNumbers
 List<SearchFriendsInfo> list=  await OpenIM.iMManager.friendshipManager.searchFriends(
      keywordList: ['lucy'],
      isSearchNickname: true,
      isSearchRemark: true,
      isSearchUserID: false,
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)searchFriends:(OIMSearchFriendsParam *)searchParam
            onSuccess:(nullable OIMSearchUsersInfoCallback)onSuccess
            onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name                         | Parameter Type       | Required | Description                                                                |
| -------------------------------------- | -------------------- | -------- | -------------------------------------------------------------------------- |
| OIMSearchFriendsParam.keywordList      | NSArray<NSString \*> | Yes      | Search keyword, currently only supports one keyword search, cannot be empty |
| OIMSearchFriendsParam.isSearchUserID   | BOOL                 | Yes      | Whether to search UserID by keyword                                        |
| OIMSearchFriendsParam.isSearchNickname | BOOL                 | Yes      | Whether to search nickname by keyword, default false                        |
| OIMSearchFriendsParam.isSearchRemark   | BOOL                 | Yes      | Whether to search remark by keyword, default false                          |

### Return Result

| Parameter Name | Parameter Type                     | Description |
| -------------- | ---------------------------------- | ----------- |
| onSuccess      | NSArray< OIMSearchFriendsInfo \* > | Success     |
| onFailure      | OIMFailureCallback                 | Failure     |

#### OIMSearchFriendsInfo

| Field Name     | Field Type      | Description                               |
| -------------- | --------------- | ----------------------------------------- |
| ownerUserID    | NSString        | Currently logged-in User ID               |
| friendUserID   | NSString        | Friend User ID                            |
| nickname       | NSString        | Friend's nickname                         |
| faceURL        | NSString        | Friend's avatar URL                       |
| remark         | NSString        | Friend's remark                           |
| createTime     | NSInteger       | Time of becoming friends                  |
| addSource      | NSInteger       | Method of becoming friends                |
| operatorUserID | NSString        | User ID that made both parties friends    |
| attachedInfo   | NSString        | Not used currently                        |
| ex             | NSString        | Extension field                           |
| relationship   | OIMRelationship | 0 for blocklist, 1 for friend             |


### Code Example

```swift showLineNumbers

OIMSearchFriendsParam *param = [OIMSearchFriendsParam new];
param.keywordList = @[];
param.isSearchRemark = YES;
param.isSearchUserID = YES;

[OIMManager.manager searchFriends:param
                      onSuccess:^(NSArray<OIMSearchFriendsInfo *> * _Nullable usersInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

 public void searchFriends(OnBase<List<FriendInfo>> callBack, List<String> keywordList, boolean isSearchUserID, boolean isSearchNickname, boolean isSearchRemark)

```

### Input Parameters

| Parameter Name   | Parameter Type                                                                   | Required | Description                                                                |
| ---------------- | -------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- |
| callBack         | [OnBase](/callback/onBase.md)<List<[FriendInfo](/class/relation/friendInfo.md)>> | Yes      | Callback interface                                                         |
| keywordList      | List<String\>                                                                    | Yes      | Search keyword, currently only supports one keyword search, cannot be empty |
| isSearchUserID   | Boolean                                                                          | Yes      | Whether to search UserID by keyword                                        |
| isSearchNickname | Boolean                                                                          | Yes      | Whether to search nickname by keyword, default false                        |
| isSearchRemark   | Boolean                                                                          | Yes      | Whether to search remark by keyword, default false                          |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.searchFriends(new OnBase<List<FriendInfo>>(){…},uid,keywordList,isSearchUserID,isSearchNickname,isSearchRemark)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

> [`FriendUserItem`](/class/relation/friendInfo.md)

```ts showLineNumbers
enum Relationship {
  Black,
  Friend
}
type SearchedFriendsInfo = FriendUserItem & {
    relationship: Relationship;
};
IMSDK.searchFriends({
    keywordList: string[];
    isSearchUserID: boolean;
    isSearchNickname: boolean;
    isSearchRemark: boolean;
}, operationID?: string): Promise<WsResponse<SearchedFriendsInfo[]>>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                                |
| ---------------- | -------------- | -------- | -------------------------------------------------------------------------- |
| keywordList      | string[]       | Yes      | Search keyword, currently only supports one keyword search, cannot be empty |
| isSearchUserID   | boolean        | Yes      | Whether to search UserID by keyword                                        |
| isSearchNickname | boolean        | Yes      | Whether to search nickname by keyword                                      |
| isSearchRemark   | boolean        | Yes      | Whether to search remark by keyword                                        |

### Return Result

| Parameter Name  | Parameter Type                                      | Description                           |
| --------------- | --------------------------------------------------- | ------------------------------------- |
| Promise.then()  | Promise<WsResponse<SearchedFriendsInfo[]>\>         | List of searched friend information   |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>          | Failure callback                      |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.searchFriends({
  keywordList: ['nickname'];
  isSearchUserID: false,
  isSearchNickname: true,
  isSearchRemark: true,
})
  .then(({data}) => {
    // Success
  })
  .catch(({ errCode, errMsg }) => {
    // Failure
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

> [`FriendUserItem`](/class/relation/friendInfo.md)

```ts showLineNumbers
enum Relationship {
  Black,
  Friend
}
type SearchedFriendsInfo = FriendUserItem & {
    relationship: Relationship;
};
IMSDK.asyncApi('searchFriends', operationID: string, {
    keywordList: string[];
    isSearchUserID: boolean;
    isSearchNickname: boolean;
    isSearchRemark: boolean;
}): Promise<SearchedFriendsInfo[]>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                            |
| ---------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID      | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| keywordList      | string[]       | Yes      | Search keyword, currently only supports one keyword search, cannot be empty |
| isSearchUserID   | boolean        | Yes      | Whether to search UserID by keyword                                        |
| isSearchNickname | boolean        | Yes      | Whether to search nickname by keyword                                      |
| isSearchRemark   | boolean        | Yes      | Whether to search remark by keyword                                        |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                 | Description                         |
| --------------- | ---------------------------------------------- | ----------------------------------- |
| Promise.then()  | Promise<SearchedFriendsInfo[]\>                | List of searched friend information |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>  | Failure callback                    |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('searchFriends', IMSDK.uuid(), {
  keywordList: ['nickname'];
  isSearchUserID: false,
  isSearchNickname: true,
  isSearchRemark: true,
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

> [`FriendUserItem`](/class/relation/friendInfo.md)

```ts showLineNumbers
enum Relationship {
  Black,
  Friend
}
type SearchedFriendsInfo = FriendUserItem & {
    relationship: Relationship;
};
OpenIMSDK.searchFriends({
  keywordList: string[];
  isSearchUserID: boolean;
  isSearchNickname: boolean;
  isSearchRemark: boolean;
}, operationID?: string): Promise<SearchedFriendsInfo[]>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                            |
| ---------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| keywordList      | string[]       | Yes      | Search keyword, currently only supports one keyword search, cannot be empty |
| isSearchUserID   | boolean        | Yes      | Whether to search UserID by keyword                                        |
| isSearchNickname | boolean        | Yes      | Whether to search nickname by keyword                                      |
| isSearchRemark   | boolean        | Yes      | Whether to search remark by keyword                                        |
| operationID      | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result


| Parameter Name  | Parameter Type                                 | Description                         |
| --------------- | ---------------------------------------------- | ----------------------------------- |
| Promise.then()  | Promise<SearchedFriendsInfo[]\>                | List of searched friend information |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback                    |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.searchFriends({
  keywordList: ['nickname'],
  isSearchUserID: false,
  isSearchNickname: true,
  isSearchRemark: true,
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

public static void SearchFriends(OnBase<List<SearchFriendItem>> cb, SearchFriendsParam searchParam)

```

### Input Parameters

| Parameter Name  | Parameter Type                                                                   | Required | Description                |
| --------------- | -------------------------------------------------------------------------------- | -------- | -------------------------- |
| cb              | [OnBase](/callback/onBase.md)<List<[FriendInfo](/class/relation/friendInfo.md)>> | Yes      | Callback                   |
| searchParam     | [SearchFriendsParam](/class/relation/SearchFriendsParam.md)                      | Yes      | Search parameter settings  |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.SearchFriends((list,errCode,errMsg)=>{

},new SearchFriendsParam(){
    KeywordList = {"keyword"},
    IsSearchUserID = true,
    IsSearchNickname = false,
    IsSearchRemark = false,
});

```

</TabItem>
</Tabs>
