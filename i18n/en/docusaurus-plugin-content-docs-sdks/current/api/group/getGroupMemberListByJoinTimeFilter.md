---
sidebar_position: 18
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getGroupMemberListByJoinTimeFilter

## Description

:::info

Get the member information of a certain group, supporting filtering by join time.

:::

:::caution Note

(1) The caller must join this group before calling;  
(2) Since it is retrieved locally from the APP, the recommended maximum is 10,000 at a time.  
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
 Future<List<GroupMembersInfo>> getGroupMemberListByJoinTime({
    required String groupID,
    int offset = 0,
    int count = 0,
    int joinTimeBegin = 0,
    int joinTimeEnd = 0,
    List<String> filterUserIDList = const [],
    String? operationID,
  })
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                     |
| ---------------- | -------------- | -------- | ----------------------------------------------- |
| groupID          | String         | Yes      | Group ID                                        |
| offset           | int            | Yes      | Start offset, used for paginated pull           |
| count            | int            | Yes      | Number of members fetched per page              |
| joinTimeBegin    | int            | Yes      | Earliest join time, 0 means no limit            |
| joinTimeEnd      | int            | Yes      | Latest join time, 0 means no limit              |
| filterUserIDList | List<String\>  | No       | List of group member userIDs to be excluded     |

### Return Result

| Parameter Name | Parameter Type                                             | Description |
| -------------- | ---------------------------------------------------------- | ----------- |
| ~              | List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>| Success     |

### Code Example

```dart showLineNumbers
    List<GroupMembersInfo> list = await OpenIM.iMManager.groupManager.getGroupMemberListByJoinTime(
          groupID: 'groupId',

    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getGroupMemberListByJoinTimeFilter:(NSString *)groupID
                                    offset:(NSInteger)offset
                                     count:(NSInteger)count
                             joinTimeBegin:(NSInteger)joinTimeBegin
                               joinTimeEnd:(NSInteger)joinTimeEnd
                          filterUserIDList:(NSArray <NSString *> *)filterUserIDList
                                 onSuccess:(nullable OIMGroupMembersInfoCallback)onSuccess
                                 onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name   | Parameter Type        | Required | Description                                     |
| ---------------- | --------------------- | -------- | ----------------------------------------------- |
| groupID          | NSString              | Yes      | Group ID                                        |
| offset           | NSInteger             | Yes      | Start offset, used for paginated pull           |
| count            | NSInteger             | Yes      | Number of members fetched per page              |
| joinTimeBegin    | NSInteger             | Yes      | Earliest join time, 0 means no limit            |
| joinTimeEnd      | NSInteger             | Yes      | Latest join time, 0 means no limit              |
| filterUserIDList | NSArray <NSString *>  | Yes      | List of group member userIDs to be excluded     |

### Return Result

| Parameter Name | Parameter Type                                                     | Description |
| -------------- | ------------------------------------------------------------------ | ----------- |
| onSuccess      | NSArray< [OIMGroupMemberInfo](/class/group/groupMemberInfo.md) \*> | Success     |
| onFailure      | OIMFailureCallback                                                 | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getGroupMemberListByJoinTimeFilter:@""
                                                        offset:0
                                                         count:100
                                                 joinTimeBegin:[NSDate new].timeIntervalSince1970
                                                   joinTimeEnd:[NSDate new].timeIntervalSince1970
                                              filterUserIDList:@[]
                                                     onSuccess:^(NSArray<OIMGroupMemberInfo *> * _Nullable groupMembersInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

    public void getGroupMemberListByJoinTime(OnBase<List<GroupMembersInfo>> callBack, String groupID, int offset, int count, long joinTimeBegin, long joinTimeEnd, List<String> excludeUserIDList)

```

### Input Parameters

| Parameter Name    | Parameter Type                                                                             | Required | Description                         |
| ----------------- | ------------------------------------------------------------------------------------------ | -------- | ----------------------------------- |
| callBack          | [OnBase](/callback/onBase.md)<List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface                  |
| groupID           | String                                                                                     | Yes      | Group ID                            |
| offset            | int                                                                                        | Yes      | Start index                         |
| count             | int                                                                                        | Yes      | Total count                         |
| joinTimeBegin     | int                                                                                        | Yes      | Join start time                     |
| joinTimeEnd       | int                                                                                        | Yes      | Join end time                       |
| excludeUserIDList | List<String\>                                                                                | No       | Member IDs to be excluded           |

### Return Result

### Code Example

```java showLineNumbers

  OpenIMClient.getInstance().groupManager.getGroupMemberListByJoinTime(new OnBase<List<GroupMembersInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupMembersInfo> data) {

            }
        },  groupID,  offset,  count,  joinTimeBegin,  joinTimeEnd, excludeUserIDList)


```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getGroupMemberListByJoinTimeFilter({
    groupID: string;
    offset: number;
    count: number;
    joinTimeBegin: number;
    joinTimeEnd: number;
    filterUserIDList: string[];
}, operationID?: string): Promise<WsResponse<GroupMemberItem[]>>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                     |
| ---------------- | -------------- | -------- | ----------------------------------------------- |
| groupID          | string         | Yes      | Group ID                                        |
| offset           | number         | Yes      | Start offset, used for paginated pull           |
| count            | number         | Yes      | Number of members fetched per page              |
| joinTimeBegin    | number         | Yes      | Earliest join time, 0 means no limit            |
| joinTimeEnd      | number         | Yes      | Latest join time, 0 means no limit              |
| filterUserIDList | string[]       | Yes      | List of group member userIDs to be excluded     |

### Return Result

| Parameter Name  | Parameter Type                                                               | Description       |
| --------------- | ---------------------------------------------------------------------------- | ----------------- |
| Promise.then()  | Promise<WsResponse<[GroupMemberItem](/class/group/groupMemberInfo.md)[]>\>   | Group member list |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                   | Failure callback  |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.getGroupMemberListByJoinTimeFilter({
  groupID: '',
  offset: 0,
  count: 20,
  joinTimeBegin: 0,
  joinTimeEnd: 0,
  filterUserIDList: ['userID'],
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
IMSDK.asyncApi("getGroupMemberListByJoinTimeFilter",operationID: string;
  {
    groupID: string;
    offset: number;
    count: number;
    joinTimeBegin: number;
    joinTimeEnd: number;
    filterUserIDList: string[];
  }
): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                            |
| ---------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID      | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID          | string         | Yes      | Group ID                                                               |
| offset           | number         | Yes      | Start offset, used for paginated pull                                  |
| count            | number         | Yes      | Number of members fetched per page                                     |
| joinTimeBegin    | number         | Yes      | Earliest join time, 0 means no limit                                   |
| joinTimeEnd      | number         | Yes      | Latest join time, 0 means no limit                                     |
| filterUserIDList | string[]       | Yes      | List of group member userIDs to be excluded                            |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                 | Description       |
| --------------- | -------------------------------------------------------------- | ----------------- |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\> | Group member list |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                  | Failure callback  |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getGroupMemberListByJoinTimeFilter', IMSDK.uuid(), {
  groupID: '',
  offset: 0,
  count: 20,
  joinTimeBegin: 0,
  joinTimeEnd: 0,
  filterUserIDList: ['userID'],
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
OpenIMSDK.getGroupMemberListByJoinTimeFilter({
  groupID: string,
  offset: number,
  count: number,
  joinTimeBegin: number,
  joinTimeEnd: number,
  filterUserIDList: string[],
}, operationID?: string): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description                                                            |
| ---------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID          | string         | Yes      | Group ID                                                               |
| offset           | number         | Yes      | Start offset, used for paginated pull                                  |
| count            | number         | Yes      | Number of members fetched per page                                     |
| joinTimeBegin    | number         | Yes      | Earliest join time, 0 means no limit                                   |
| joinTimeEnd      | number         | Yes      | Latest join time, 0 means no limit                                     |
| filterUserIDList | string[]       | Yes      | List of group member userIDs to be excluded                            |
| operationID      | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                 | Description       |
| --------------- | -------------------------------------------------------------- | ----------------- |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\> | Group member list |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                 | Failure callback  |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getGroupMemberListByJoinTimeFilter({
  groupID: '',
  offset: 0,
  count: 20,
  joinTimeBegin: 0,
  joinTimeEnd: 0,
  filterUserIDList: ['userID'],
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

public static void GetGroupMemberListByJoinTimeFilter(OnBase<List<GroupMember>> cb, string groupId, int offset, int count, long joinTimeBegin, long joinTimeEnd, string[] filterUserIDList)

```

### Input Parameters

| Parameter Name    | Parameter Type                                                                        | Required | Description                         |
| ----------------- | ------------------------------------------------------------------------------------- | -------- | ----------------------------------- |
| cb                | [OnBase](/callback/onBase.md)<List<[GroupMember](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface                  |
| groupId           | string                                                                                | Yes      | Group ID                            |
| offset            | int                                                                                   | Yes      | Start index                         |
| count             | int                                                                                   | Yes      | Total count                         |
| joinTimeBegin     | long                                                                                  | Yes      | Join start time                     |
| joinTimeEnd       | long                                                                                  | Yes      | Join end time                       |
| excludeUserIDList | string[]                                                                              | No       | Member IDs to be excluded           |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetGroupMemberListByJoinTimeFilter((list,errCode,errMsg)=>{

},"groupId",0,0,0,0,{""});

```

</TabItem>

</Tabs>
