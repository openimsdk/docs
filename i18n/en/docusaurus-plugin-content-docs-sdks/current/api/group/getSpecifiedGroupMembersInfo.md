---
sidebar_position: 14
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getSpecifiedGroupMembersInfo

## Description

:::info

Get the specified group member information.

:::

:::caution Note

(1) The caller must join this group before calling;  
(2) It is recommended that the group member list is a maximum of 10,000 at a time.

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
Future<List<GroupMembersInfo>> getGroupMembersInfo({
    required String groupID,
    required List<String> userIDList,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description        |
| -------------- | -------------- | -------- | ------------------ |
| groupID        | String         | Yes      | Group ID           |
| userIDList     | List<String\>  | Yes      | List of member IDs |

### Return Result

| Parameter Name | Parameter Type                                             | Description |
| -------------- | ---------------------------------------------------------- | ----------- |
| ~              | List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>| Success     |

### Code Example

```dart showLineNumbers
    List<GroupMembersInfo> list = await OpenIM.iMManager.groupManager.getGroupMembersInfo(
      groupID: 'groupID',
      userIDList: ['1129'],
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getSpecifiedGroupMembersInfo:(NSString *)groupID
                             usersID:(NSArray <NSString *> *)usersID
                           onSuccess:(nullable OIMGroupMembersInfoCallback)onSuccess
                           onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type        | Required | Description        |
| -------------- | --------------------- | -------- | ------------------ |
| groupID        | NSString              | Yes      | Group ID           |
| usersID        | NSArray <NSString \*> | Yes      | List of member IDs |

### Return Result

| Parameter Name | Parameter Type                                                     | Description |
| -------------- | ------------------------------------------------------------------ | ----------- |
| onSuccess      | NSArray< [OIMGroupMemberInfo](/class/group/groupMemberInfo.md) \*> | Success     |
| onFailure      | OIMFailureCallback                                                 | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getSpecifiedGroupMembersInfo:@""
                                         usersID:@[]
                                       onSuccess:^(NSArray<OIMGroupMemberInfo *> * _Nullable groupMembersInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

 public void getGroupMembersInfo(OnBase<List<GroupMembersInfo>> callBack, String groupId, List<String> uidList)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                             | Required | Description        |
| -------------- | ------------------------------------------------------------------------------------------ | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md)<List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface |
| groupId        | String                                                                                     | Yes      | Group ID           |
| uidList        | List<String\>                                                                              | Yes      | List of member IDs |

### Return Result

### Code Example

```java showLineNumbers

  OpenIMClient.getInstance().groupManager.getGroupMembersInfo(new OnBase<List<GroupMembersInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupMembersInfo> data) {

            }
        },groupId,uidList)


```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getSpecifiedGroupMembersInfo({
  groupID: string;
  userIDList: string[];
}, operationID?: string): Promise<WsResponse<GroupMemberItem[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description              |
| -------------- | -------------- | -------- | ------------------------ |
| groupID        | string         | Yes      | Group ID                 |
| userIDList     | string[]       | Yes      | List of group member IDs |

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

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.getSpecifiedGroupMembersInfo({
  groupID: '',
  userIDList: ['userID'],
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
IMSDK.asyncApi('getSpecifiedGroupMembersInfo', operationID: string, {
  groupID: string;
  userIDList: string[];
}): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string         | Yes      | Group ID                                                               |
| userIDList     | string[]       | Yes      | List of group member IDs                                               |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                 | Description       |
| --------------- | -------------------------------------------------------------- | ----------------- |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\> | Group member list |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                  | Failure callback  |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getSpecifiedGroupMembersInfo', IMSDK.uuid(), {
  groupID: '',
  userIDList: ['userID'],
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
OpenIMSDK.getSpecifiedGroupMembersInfo({
  groupID: string,
  userIDList: string[], 
}, operationID?: string): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| userIDList     | string[]       | Yes      | List of group member IDs                                               |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                 | Description       |
| --------------- | -------------------------------------------------------------- | ----------------- |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\> | Group member list |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                 | Failure callback  |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getSpecifiedGroupMembersInfo({
  groupID: '',
  userIDList: ['userID'],
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

public static void GetSpecifiedGroupMembersInfo(OnBase<List<GroupMember>> cb, string groupId, string[] userIdList)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                        | Required | Description        |
| -------------- | ------------------------------------------------------------------------------------- | -------- | ------------------ |
| cb             | [OnBase](/callback/onBase.md)<List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface |
| groupId        | string                                                                                | Yes      | Group ID           |
| userIdList     | string[]                                                                              | Yes      | List of member IDs |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetSpecifiedGroupMembersInfo((list,errCode,errMsg)=>{

},groupId,userIdList);

```

</TabItem>

</Tabs>
