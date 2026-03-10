---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# searchGroups

## Description

:::info

Search joined groups by keywords.

:::

:::caution Note

(1) At least one search field must be specified;    
(2) The relationship between multiple fields is an OR relationship.  

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
  Future<List<GroupInfo>> searchGroups({
    List<String> keywordList = const [],
    bool isSearchGroupID = false,
    bool isSearchGroupName = false,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description       |
| ----------------- | ------------- | -------- | ---------- |
| keywordList       | List<String\> | Yes      | Search keywords, currently only supports one keyword search, cannot be empty       |
| isSearchGroupID   | bool          | Yes      | Whether to search group ID by keyword |
| isSearchGroupName | bool          | Yes      | Whether to search group name by keyword|

### Return Result

| Parameter Name | Parameter Type                                         | Description |
| -------- | ------------------------------------------------------ | -------- |
| ~        | List<[GroupInfo](/class/group/groupInfo.md)> | Success  |

### Code Example

```dart showLineNumbers
    List<GroupInfo> list =  await OpenIM.iMManager.groupManager.searchGroups(
      keywordList: ['ok'],
      isSearchGroupID: true,
      isSearchGroupName: true,
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)searchGroups:(OIMSearchGroupParam *)searchParam
           onSuccess:(nullable OIMGroupsInfoCallback)onSuccess
           onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name                        | Parameter Type        | Required | Description                                                         |
| ------------------------------------- | --------------------- | -- |------------------------------------------------------------- |
| OIMSearchGroupParam.keywordList       | NSArray< NSString \*> | Yes | Search keywords, currently only supports one keyword search, cannot be empty               |
| OIMSearchGroupParam.isSearchGroupID   | BOOL                  | No  | Whether to search group ID by keyword (Note: the two cannot both be false simultaneously), default false|
| OIMSearchGroupParam.isSearchGroupName | BOOL                  | No  | Whether to search group name by keyword, default false                        |

### Return Result

| Parameter Name | Parameter Type                                                   | Description |
| --------- | ---------------------------------------------------------------- | -------- |
| onSuccess | NSArray< [OIMGroupInfo](/class/group/groupInfo.md) \*> | Success  |
| onFailure | OIMFailureCallback                                               | Failure  |

### Code Example

```swift showLineNumbers

OIMSearchGroupParam *param = [OIMSearchGroupParam new];
param.isSearchGroupName = YES;
param.keywordList = @[];

[OIMManager.manager searchGroups:param
                       onSuccess:^(NSArray<OIMGroupInfo *> * _Nullable groupsInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
    public void searchGroups(OnBase<List<GroupInfo>> callBack, List<String> keywordList, boolean isSearchGroupID, boolean isSearchGroupName)
```

### Input Parameters

| Parameter Name    | Parameter Type                                                                                  | Required | Description |
| ----------------- | ----------------------------------------------------------------------------------------------- | -------- | ---------- |
| callBack          | [OnBase](/callback/onBase.md)<List<[GroupInfo](/class/group/groupInfo.md)>> | Yes      | Callback interface |
| keywordList       | List<String\>                                                                                   | Yes      | Keywords   |
| isSearchGroupID   | Boolean                                                                                         | Yes      | Search group ID  |
| isSearchGroupName | Boolean                                                                                         | Yes      | Search group nickname |

### Return Result

### Code Example

```java showLineNumbers
 OpenIMClient.getInstance().groupManager.searchGroups(new OnBase<List<GroupInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupInfo> data) {

            }
        }, keywordList,  isSearchGroupID,  isSearchGroupName);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.searchGroups({
    keywordList: string[];
    isSearchGroupID: boolean;
    isSearchGroupName: boolean;
}, operationID?: string): Promise<WsResponse<GroupItem[]>>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                           |
| ----------------- | -------- | -------- | ---------------------------------------------- |
| keywordList       | string[] | Yes      | Search keywords, currently only supports one keyword search, cannot be empty|
| isSearchGroupID   | boolean  | Yes      | Whether to search group ID by keyword                          |
| isSearchGroupName | boolean  | Yes      | Whether to search group name by keyword                        |

### Return Result

| Parameter Name  | Parameter Type                                                           | Description                 |
| --------------- | ------------------------------------------------------------------------ | -------------------- |
| Promise.then()  | Promise<WsResponse<[GroupItem](/class/group/groupInfo.md)[]>\> | Searched group information list |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                     | Failure callback         |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.searchGroups({
  keywordList: ['nickname'];
  isSearchGroupID: false,
  isSearchGroupName: true,
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

```ts showLineNumbers
IMSDK.asyncApi('searchGroups', operationID: string, {
    keywordList: string[];
    isSearchGroupID: boolean;
    isSearchGroupName: boolean;
}): Promise<GroupItem[]>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------------- | -------- | -------- | ------------------------------------------------------- |
| operationID       | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| keywordList       | string[] | Yes      | Search keywords, currently only supports one keyword search, cannot be empty |
| isSearchGroupID   | boolean  | Yes      | Whether to search group ID by keyword                                   |
| isSearchGroupName | boolean  | Yes      | Whether to search group name by keyword                                  |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                               | Description                 |
| --------------- | ------------------------------------------------------------ | -------------------- |
| Promise.then()  | Promise<[GroupItem](/class/group/groupInfo.md)[]\> | Searched group information list |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>      | Failure callback         |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('searchGroups', IMSDK.uuid(), {
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

```ts showLineNumbers
OpenIMSDK.searchGroups({
  keywordList: string[];
  isSearchGroupID: boolean;
  isSearchGroupName: boolean;
}, operationID?: string): Promise<GroupItem[]>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------------- | -------- | -------- | ------------------------------------------------------- |
| keywordList       | string[] | Yes      | Search keywords, currently only supports one keyword search, cannot be empty |
| isSearchGroupID   | boolean  | Yes      | Whether to search group ID by keyword                                   |
| isSearchGroupName | boolean  | Yes      | Whether to search group name by keyword                                  |
| operationID       | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                               | Description                 |
| --------------- | ------------------------------------------------------------ | -------------------- |
| Promise.then()  | Promise<[GroupItem](/class/group/groupInfo.md)[]\> | Searched group information list |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>      | Failure callback         |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.searchGroups({
  keywordList: ['nickname'];
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

public static void SearchGroups(OnBase<List<GroupInfo>> cb, SearchGroupsParam searchParam)

```

### Input Parameters

| Parameter Name    | Parameter Type                                                                                  | Required | Description |
| ----------------- | ----------------------------------------------------------------------------------------------- | -------- | ---------- |
| cb                | [OnBase](/callback/onBase.md)<List<[GroupInfo](/class/group/groupInfo.md)>> | Yes      | Callback   |
| searchParam       | [SearchGroupsParam](/class/group/SearchGroupsParam.md)                                          | Yes      | Search parameters |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.SearchGroups((list,errCode,errMsg)=>{

},new SearchGroupsParam(){
    KeywordList = {},
    IsSearchGroupID = true,
    IsSearchGroupName = false 
} );
```

</TabItem>

</Tabs>
