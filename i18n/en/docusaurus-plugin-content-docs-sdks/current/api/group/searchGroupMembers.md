---
sidebar_position: 15
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# searchGroupMembers

## Description

:::info

Search for group members of a particular group through keywords.

:::

:::caution Note

(1) Only group members have search permissions;  
(2) At least one search field must be specified;  
(3) The relationship between multiple fields is an OR relationship.   

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
Future<List<GroupMembersInfo>> searchGroupMembers({
    required String groupID,
    List<String> keywordList = const [],
    bool isSearchUserID = false,
    bool isSearchMemberNickname = false,
    int offset = 0,
    int count = 40,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name         | Parameter Type| Required | Description            |
| ---------------------- | ------------- | -------- | -------------- |
| groupID                | String        | Yes      | Group ID               |
| keywordList            | List<String\> | Yes      | Keywords               |
| isSearchUserID         | bool          | Yes      | Search by User ID      |
| isSearchMemberNickname | bool          | Yes      | Search by User Nickname|
| offset                 | int           | Yes      | Starting offset        |
| count                  | int           | Yes      | Total number of queries at one time |

### Return Result

| Parameter Name | Parameter Type                                                      | Description |
| -------- | ------------------------------------------------------------------- | -------- |
| ~        | List<[GroupMembersInfo](/class/group/groupMemberInfo.md)> | Success |

### Code Example

```dart showLineNumbers
  List<GroupMembersInfo> list =  await OpenIM.iMManager.groupManager.searchGroupMembers(
      groupID: '',
      keywordList: ['haha'],
      isSearchUserID: true,
      isSearchMemberNickname: true,
      offset: 0,
      count: 20,
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)searchGroupMembers:(OIMSearchGroupMembersParam *)searchParam
                 onSuccess:(nullable OIMGroupMembersInfoCallback)onSuccess
                 onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name         | Parameter Type        | Required | Description                                           |
| ---------------------- | --------------------- | -----------------------| - |----------------------- |
| SearchGroupMembersParam.groupID                | NSString              | Yes | Group ID                                          |
| SearchGroupMembersParam.keywordList            | NSArray< NSString \*> | Yes | Search keywords, currently only supports one keyword search, cannot be empty |
| SearchGroupMembersParam.isSearchUserID         | BOOL                  | No  | Whether to search by UserID                        |
| SearchGroupMembersParam.isSearchMemberNickname | BOOL                  | No  | Whether to search by nickname, default false               |
| SearchGroupMembersParam.offset                 | NSInteger             | No  | Offset                                         |
| SearchGroupMembersParam.count                  | NSInteger             | No  | Quantity                                           |

### Return Result

| Parameter Name | Parameter Type                                                               | Description |
| --------- | ---------------------------------------------------------------------------- | -------- |
| onSuccess | NSArray< [OIMGroupMemberInfo](/class/group/groupMemberInfo.md) \*> | Success  |
| onFailure | OIMFailureCallback                                                           | Failure  |

### Code Example

```swift showLineNumbers

OIMSearchGroupMembersParam *param = [OIMSearchGroupMembersParam new];
param.groupID = @"";
param.keywordList = @[];
param.offset = 0;
param.count = 20;

[OIMManager.manager searchGroupMembers:param
                              onSuccess:^(NSArray<OIMGroupMemberInfo *> * _Nullable groupMembersInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void searchGroupMembers(OnBase<List<GroupMembersInfo>> callBack, String groupID, List<String> keywordList, boolean isSearchUserID, boolean isSearchMemberNickname, int offset, int count)

```

### Input Parameters

| Parameter Name         | Parameter Type                                                                                               | Required | Description           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | -------- | -------------- |
| callBack               | [OnBase](/callback/onBase.md)<List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface    |
| groupID                | String                                                                                                       | Yes      | Group ID              |
| keywordList            | List<String\>                                                                                                | Yes      | Keywords              |
| isSearchUserID         | Boolean                                                                                                      | Yes      | Search by User ID     |
| isSearchMemberNickname | Boolean                                                                                                      | Yes      | Search by User Nickname|
| offset                 | int                                                                                                          | Yes      | Starting offset       |
| count                  | int                                                                                                          | Yes      | Total number of queries at one time|

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().groupManager.searchGroupMembers(new OnBase<List<GroupMembersInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupMembersInfo> data) {

            }
        }, groupID,  keywordList,  isSearchUserID,  isSearchMemberNickname,  offset,  count);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.searchGroupMembers({
    groupID: string;
    keywordList: string[];
    isSearchUserID: boolean;
    isSearchMemberNickname: boolean;
    offset: number;
    count: number;
}, operationID?: string): Promise<WsResponse<GroupMemberItem[]>>
```

### Input Parameters

| Parameter Name         | Parameter Type | Required | Description                                           |
| ---------------------- | -------- | -------- | ---------------------------------------------- |
| groupID                | string   | Yes      | Group ID                                        |
| keywordList            | string[] | Yes      | Search keywords, currently only supports one keyword search, cannot be empty |
| isSearchUserID         | boolean  | Yes      | Whether to search group member userID by keyword                  |
| isSearchMemberNickname | boolean  | Yes      | Whether to search group member nickname by keyword                     |
| offset                 | number   | Yes      | Starting offset, used for paginated fetching                         |
| count                  | number   | Yes      | Number of members to pull on one page                   |

### Return Result

| Parameter Name  | Parameter Type                                                                       | Description                   |
| --------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| Promise.then()  | Promise<WsResponse<[GroupMemberItem](/class/group/groupMemberInfo.md)[]>\> | Searched group member information list |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                 | Failure callback           |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.searchGroupMembers({
  groupID: '',
  keywordList: ['nickname'],
  isSearchUserID: false,
  isSearchMemberNickname: true,
  offset: 0,
  count: 20,
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
IMSDK.asyncApi('searchGroupMembers', operationID: string, {
    groupID: string;
    keywordList: string[];
    isSearchUserID: boolean;
    isSearchMemberNickname: boolean;
    offset: number;
    count: number;
}): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                    |
| ---------------- | -------- | -------- | ------------------------------------------------------- |
| operationID      | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| keywordList      | string[] | Yes      | Search keywords, currently only supports one keyword search, cannot be empty |
| isSearchUserID   | boolean  | Yes      | Whether to search userID by keyword                                 |
| isSearchNickname | boolean  | Yes      | Whether to search nickname by keyword                               |
| isSearchRemark   | boolean  | Yes      | Whether to search remark by keyword                                    |
| offset           | number   | Yes      | Starting offset, used for paginated fetching                         |
| count            | number   | Yes      | Number of members to pull on one page                   |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                           | Description                   |
| --------------- | ------------------------------------------------------------------------ | ---------------------- |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\> | Searched group member information list |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                  | Failure callback           |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('searchGroupMembers', IMSDK.uuid(), {
  groupID: '',
  keywordList: ['nickname'],
  isSearchUserID: false,
  isSearchMemberNickname: true,
  offset: 0,
  count: 20,
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
OpenIMSDK.searchGroupMembers({
  groupID: string;
  keywordList: string[];
  isSearchUserID: boolean;
  isSearchMemberNickname: boolean;
  offset: number;
  count: number;
}, operationID?: string): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                    |
| ---------------- | -------- | -------- | ------------------------------------------------------- |
| keywordList      | string[] | Yes      | Search keywords, currently only supports one keyword search, cannot be empty |
| isSearchUserID   | boolean  | Yes      | Whether to search userID by keyword                                 |
| isSearchNickname | boolean  | Yes      | Whether to search nickname by keyword                               |
| isSearchRemark   | boolean  | Yes      | Whether to search remark by keyword                                    |
| operationID      | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| offset           | number   | Yes      | Starting offset, used for paginated fetching                         |
| count            | number   | Yes      | Number of members to pull on one page                   |

### Return Result

| Parameter Name  | Parameter Type                                                           | Description                   |
| --------------- | ------------------------------------------------------------------------ | ---------------------- |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\> | Searched group member information list |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                 | Failure callback           |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.searchGroupMembers({
  groupID: '',
  keywordList: ['nickname'],
  isSearchUserID: false,
  isSearchMemberNickname: true,
  offset: 0,
  count: 20,
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

public static void SearchGroupMembers(OnBase<List<GroupMember>> cb, SearchGroupMembersParam searchParam)

```

### Input Parameters

| Parameter Name         | Parameter Type| Required | Description           |
| ---------------------- | --------------| -------- | -------------- |
| cb                     | [OnBase](/callback/onBase.md)<List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface    |
| searchParam            | [SearchGroupMembersParam](/class/group/SearchGroupMembersParam.md) | Yes      | Group ID              |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.SearchGroupMembers((list,errCode,errMsg)=>{

},new SearchGroupMembersParam(){
});
```

</TabItem>

</Tabs>
