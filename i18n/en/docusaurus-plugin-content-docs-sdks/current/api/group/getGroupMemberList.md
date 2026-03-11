---
sidebar_position: 13
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getGroupMemberList

## Description

:::info

Get the list of group members in a specified group.

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
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
 Future<List<GroupMembersInfo>> getGroupMemberList({
    required String groupID,
    int filter = 0,
    int offset = 0,
    int count = 0,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type                    | Required | Description                                                                                                     |
| -------------- | --------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| groupID        | String                            | Yes      | Group ID                                                                                                        |
| filter         | [int](/enum/groupMemberFilter.md) | Yes      | Filter members: 0 all, 1 group owner, 2 administrator, 3 ordinary member, 4 administrator + ordinary member, 5 group owner + administrator |
| offset         | int                               | Yes      | Start offset                                                                                                    |
| count          | int                               | Yes      | Number of members                                                                                               |

### Return Result

| Parameter Name | Parameter Type                                             | Description |
| -------------- | ---------------------------------------------------------- | ----------- |
| ~              | List<[GroupMemberInfo](/class/group/groupMemberInfo.md)> | Success     |

### Code Example

```dart showLineNumbers
   List<GroupMembersInfo> list = await OpenIM.iMManager.groupManager.getGroupMemberList(
      groupID: 'groupID',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getGroupMemberList:(NSString *)groupID
                    filter:(OIMGroupMemberFilter)filter
                    offset:(NSInteger)offset
                     count:(NSInteger)count
                 onSuccess:(nullable OIMGroupMembersInfoCallback)onSuccess
                 onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type                                     | Required | Description |
| -------------- | -------------------------------------------------- | -------- | ----------- |
| groupID        | NSString                                           | Yes      | Group ID    |
| filter         | [OIMGroupMemberFilter](/enum/groupMemberFilter.md) | Yes      | Member level|
| offset         | NSInteger                                          | Yes      | Start offset|
| count          | NSInteger                                          | Yes      | Number of members |

### Return Result

| Parameter Name | Parameter Type                                                     | Description |
| -------------- | ------------------------------------------------------------------ | ----------- |
| onSuccess      | NSArray< [OIMGroupMemberInfo](/class/group/groupMemberInfo.md) \*> | Success     |
| onFailure      | OIMFailureCallback                                                 | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getGroupMemberList:@""
                                filter:0
                                offset:0
                                 count:20
                             onSuccess:^(NSArray<OIMGroupMemberInfo *> * _Nullable groupMembersInfo) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void getGroupMemberList(OnBase<List<GroupMembersInfo>> callBack, String groupId, int filter, int offset, int count)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                             | Required | Description                                              |
| -------------- | ------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------- |
| callBack       | [OnBase](/callback/onBase.md)<List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface                                       |
| groupId        | String                                                                                     | Yes      | Group ID                                                 |
| filter         | int                                                                                        | No       | [GroupMemberFilter](/enum/groupMemberFilter.md) filter members |
| offset         | int                                                                                        | Yes      | Offset                                                   |
| count          | int                                                                                        | Yes      | Number per page                                          |

### Return Result

### Code Example

```java showLineNumbers

  OpenIMClient.getInstance().groupManager.getGroupMemberList(new OnBase<List<GroupMembersInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupMembersInfo> data) {

            }
        }, groupId,  filter,  offset,  count);

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getGroupMemberList({
    groupID: string;
    filter: GroupMemberFilter;
    offset: number;
    count: number;
}, operationID?: string): Promise<WsResponse<GroupMemberItem[]>>
```

### Input Parameters

| Parameter Name | Parameter Type                                  | Required | Description                                       |
| -------------- | ----------------------------------------------- | -------- | ------------------------------------------------- |
| groupID        | string                                          | Yes      | Group ID                                          |
| filter         | [GroupMemberFilter](/enum/groupMemberFilter.md) | Yes      | Filter by group member role                       |
| offset         | number                                          | Yes      | Start offset, used for paginated pull             |
| count          | number                                          | Yes      | Number of members fetched per page                |

### Return Result

| Parameter Name  | Parameter Type                                                                       | Description         |
| --------------- | ------------------------------------------------------------------------------------ | ------------------- |
| Promise.then()  | Promise<WsResponse<[GroupMemberItem](/class/group/groupMemberInfo.md)[]>\>           | Group member list   |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                           | Failure callback    |

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

IMSDK.getGroupMemberList({
  groupID: '',
  filter: 0,
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
IMSDK.asyncApi("getGroupMemberList",operationID: string,
  {
    groupID: string;
    filter: GroupMemberFilter;
    offset: number;
    count: number;
  }
): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type                                  | Required | Description                                                            |
| -------------- | ----------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string                                          | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string                                          | Yes      | Group ID                                                               |
| filter         | [GroupMemberFilter](/enum/groupMemberFilter.md) | Yes      | Group member role                                                      |
| offset         | number                                          | Yes      | Start offset, used for paginated pull                                  |
| count          | number                                          | Yes      | Number of members fetched per page                                     |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                   | Description        |
| --------------- | ---------------------------------------------------------------- | ------------------ |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\>   | Group member list  |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                    | Failure callback   |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getGroupMemberList', IMSDK.uuid(), {
  groupID: '',
  filter: 0,
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
OpenIMSDK.getGroupMemberList({
  groupID: string,
  filter: GroupMemberFilter,
  offset: number,
  count: number,
}, operationID?: string): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type                                  | Required | Description                                                            |
| -------------- | ----------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string                                          | Yes      | Group ID                                                               |
| filter         | [GroupMemberFilter](/enum/groupMemberFilter.md) | Yes      | Group member role                                                      |
| offset         | number                                          | Yes      | Start offset, used for paginated pull                                  |
| count          | number                                          | Yes      | Number of members fetched per page                                     |
| operationID    | string                                          | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                   | Description        |
| --------------- | ---------------------------------------------------------------- | ------------------ |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\>   | Group member list  |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                   | Failure callback   |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getGroupMemberList({
  groupID: '',
  filter: 0,
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

public static void GetGroupMemberList(OnBase<List<GroupMember>> cb, string groupId, GroupMemberFilter filter, int offset, int count)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                             | Required | Description        |
| -------------- | ------------------------------------------------------------------------------------------ | -------- | ------------------ |
| cb             | [OnBase](/callback/onBase.md)<List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface |
| groupId        | string                                                                                     | Yes      | Group ID           |
| filter         | [GroupMemberFilter](/enum/groupMemberFilter.md)                                            | No       | Filter members     |
| offset         | int                                                                                        | Yes      | Offset             |
| count          | int                                                                                        | Yes      | Number per page    |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetGroupMemberList((list,errCode,errMsg)=>{

}, groupId,  filter,  offset,  count);

```

</TabItem>
</Tabs>
