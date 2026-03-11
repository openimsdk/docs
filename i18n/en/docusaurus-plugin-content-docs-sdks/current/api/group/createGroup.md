---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createGroup

## Description

:::info

(1) The creator creates a group as the group owner and specifies the group administrator and ordinary group members. After success, all members enter the group immediately;  
(2) It is recommended that the maximum number of group members at a time is 1000, because too many members may cause the data packet to be too large and rejected by the backend.

:::

:::caution Note

(1) If groupID is specified, then groupID cannot be repeated;  
(2) If groupID is not specified, the server will generate a unique groupID.  

**Related Callbacks**:  
[onJoinedGroupAdded](../../callback/onJoinedGroupAdded)  
[onGroupMemberAdded](../../callback/onGroupMemberAdded)  

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
Future<GroupInfo> createGroup({
    required GroupInfo groupInfo,
    List<String> memberUserIDs = const [],
    List<String> adminUserIDs = const [],
    String? ownerUserID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type                         | Required | Description                                  |
| -------------- | -------------------------------------- | -------- | -------------------------------------------- |
| groupInfo      | [GroupInfo](/class/group/groupInfo.md) | Yes      | Group info                                   |
| memberUserIDs  | List<String\>                          | Yes      | List of invited group members                |
| adminUserIDs   | List<String\>                          | No       | List to invite and set as administrators     |
| ownerUserID    | String                                 | No       | Group owner                                  |

### Return Result

| Parameter Name | Parameter Type                         | Description |
| -------------- | -------------------------------------- | ----------- |
| ~              | [GroupInfo](/class/group/groupInfo.md) | Success     |

### Code Example

```dart showLineNumbers
    final groupInfo = await OpenIM.iMManager.groupManager.createGroup(
        groupInfo: GroupInfo(
             groupID: '',
             groupName: groupName,
             faceURL: faceURL,
             groupType: GroupType.work,
        ),
        memberUserIDs: allList.where((e) => e.userID != OpenIM.iMManager.userID)
                                          .map((e) => e.userID!)
                                          .toList(),
     );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)createGroup:(OIMGroupCreateInfo *)groupCreateInfo
          onSuccess:(nullable OIMGroupInfoCallback)onSuccess
          onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name  | Parameter Type                                          | Required | Description                     |
| --------------- | ------------------------------------------------------- | -------- | ------------------------------- |
| groupCreateInfo | [OIMGroupCreateInfo](/class/group/groupInfo.md)         | Yes      | Initialization info during creation |

### Return Result

| Parameter Name | Parameter Type                            | Description |
| -------------- | ----------------------------------------- | ----------- |
| onSuccess      | [OIMGroupInfo](/class/group/groupInfo.md) | Success     |
| onFailure      | OIMFailureCallback                        | Failure     |

### Code Example

```swift showLineNumbers

OIMGroupCreateInfo *group = [OIMGroupCreateInfo new];
group.groupName = @"";
group.introduction = @"";

[OIMManager.manager createGroup:group
                      onSuccess:^(OIMGroupInfo * _Nullable groupInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

    public void createGroup(List<String> memberUserIDs, List<String> adminUserIDs,
                            GroupInfo groupInfo, String ownerUserID, OnBase<GroupInfo> callBack)
```

### Input Parameters

| Parameter Name | Parameter Type                                                        | Required | Description                                  |
| -------------- | --------------------------------------------------------------------- | -------- | -------------------------------------------- |
| groupInfo      | [GroupInitInfo](/class/group/groupInfo.md)                            | Yes      | Group basic info                             |
| memberUserIDs  | string[]                                                              | Yes      | List of invited group members                |
| adminUserIDs   | string[]                                                              | No       | List to invite and set as administrators     |
| ownerUserID    | string                                                                | No       | Group owner ID                               |
| callBack       | [OnBase](/callback/onBase.md)<[GroupInfo](/class/group/groupInfo.md)> | Yes      | Callback interface                           |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().groupManager.createGroup(memberUserIDs,  adminUserIDs,
     groupInfo,  ownerUserID,  new OnBase<String>() {
    @Override
    public void onError(int code, String error) {

    }

    @Override
    public void onSuccess(String data) {

    }
});

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createGroup({
  groupInfo:Partial<GroupItem>,
  memberUserIDs: string[],
  adminUserIDs?: string[],
  ownerUserID?: string
}, operationID?: string): Promise<WsResponse<GroupItem>>
```

### Input Parameters

| Parameter Name | Parameter Type                                          | Required | Description                                                                  |
| -------------- | ------------------------------------------------------- | -------- | ---------------------------------------------------------------------------- |
| groupInfo      | Partial<[GroupItem](/class/group/groupInfo.md)>         | Yes      | Group basic info                                                             |
| memberUserIDs  | string[]                                                | Yes      | List of invited group members                                                |
| adminUserIDs   | string[]                                                | No       | List to invite and set as administrators, mutually exclusive with member list |
| ownerUserID    | string                                                  | No       | Group owner ID, defaults to current user ID                                  |

### Return Result

| Parameter Name  | Parameter Type                                                               | Description      |
| --------------- | ---------------------------------------------------------------------------- | ---------------- |
| Promise.then()  | Promise<WsResponse<[GroupItem](/class/group/groupInfo.md)>>                  | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                   | Failure callback |

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

IMSDK.createGroup({
  groupInfo: {
    groupName: '',
    groupType: 2,
  },
  memberUserIDs: [''],
})
  .then(() => {
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
IMSDK.asyncApi('createGroup', operationID: string, {
  groupInfo: Partial<GroupItem>,
  memberUserIDs: string[],
  adminUserIDs?: string[],
  ownerUserID?: string
}): Promise<GroupItem>
```

### Input Parameters

| Parameter Name | Parameter Type                                          | Required | Description                                                            |
| -------------- | ------------------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string                                                  | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupInfo      | Partial<[GroupItem](/class/group/groupInfo.md)>         | Yes      | Group basic info                                                       |
| memberUserIDs  | string[]                                                | Yes      | List of invited group members                                          |
| adminUserIDs   | string[]                                                | No       | List to invite and set as administrators                               |
| ownerUserID    | string                                                  | No       | Group owner ID                                                         |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                             | Description      |
| --------------- | ---------------------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[GroupItem](/class/group/groupInfo.md)\>           | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>              | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createGroup', IMSDK.uuid(), {
  groupInfo: {
    groupName: '',
    groupType: 2,
  },
  memberUserIDs: [''],
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
OpenIMSDK.createGroup({
  groupInfo: Partial<GroupItem>,
  memberUserIDs: string[],
  adminUserIDs?: string[],
  ownerUserID?: string
}, operationID?: string): Promise<GroupItem>
```

### Input Parameters

| Parameter Name | Parameter Type                                          | Required | Description                                                            |
| -------------- | ------------------------------------------------------- | -------- | ---------------------------------------------------------------------- |
| groupInfo      | Partial<[GroupItem](/class/group/groupInfo.md)>         | Yes      | Group basic info                                                       |
| memberUserIDs  | string[]                                                | Yes      | List of invited group members                                          |
| adminUserIDs   | string[]                                                | No       | List to invite and set as administrators                               |
| ownerUserID    | string                                                  | No       | Group owner ID                                                         |
| operationID    | string                                                  | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result


| Parameter Name  | Parameter Type                                             | Description      |
| --------------- | ---------------------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[GroupItem](/class/group/groupInfo.md)\>           | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>             | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createGroup({
  groupInfo: {
    groupName: '',
    groupType: 2,
  },
  memberUserIDs: [''],
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

public static void CreateGroup(OnBase<GroupInfo> cb, CreateGroupReq groupReqInfo)

```

### Input Parameters

| Parameter Name | Parameter Type                                                        | Required | Description        |
| -------------- | --------------------------------------------------------------------- | -------- | ------------------ |
| cb             | [OnBase](/callback/onBase.md)<[GroupInfo](/class/group/groupInfo.md)> | Yes      | Callback           |
| groupReqInfo   | [CreateGroupReq](/class/group/CreateGroupReq.md)                      | Yes      | Group creation params |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.CreateGroup((groupInfo,errCode,errMsg)=>{
    
},new CreateGroupReq(){
    MemberUserIDs={""},
    GroupInfo = groupInfo,
    AdminUserIDs = {},
    OwnerUserID = "",
});


```

</TabItem>

</Tabs>
