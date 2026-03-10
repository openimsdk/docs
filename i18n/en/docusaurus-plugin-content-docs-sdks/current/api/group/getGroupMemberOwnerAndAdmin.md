---
sidebar_position: 17
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getGroupMemberOwnerAndAdmin

## Description

:::info

Get the group owner and administrators of a specified group.

:::

:::caution Note

(1) The caller must join this group before calling.  

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
 Future<List<GroupMembersInfo>> getGroupOwnerAndAdmin({
    required String groupID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| groupID        | String         | Yes      | Group ID    |

### Return Result

| Parameter Name | Parameter Type                                             | Description |
| -------------- | ---------------------------------------------------------- | ----------- |
| ~              | List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>| Success     |

### Code Example

```dart showLineNumbers
    List<GroupMembersInfo> list = await OpenIM.iMManager.groupManager.getGroupOwnerAndAdmin(
          groupID: 'groupId',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getGroupMemberOwnerAndAdmin:(NSString *)groupID
                          onSuccess:(nullable OIMGroupMembersInfoCallback)onSuccess
                          onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| groupID        | NSString       | Yes      | Group ID    |

### Return Result

| Parameter Name | Parameter Type                                                     | Description |
| -------------- | ------------------------------------------------------------------ | ----------- |
| onSuccess      | NSArray< [OIMGroupMemberInfo](/class/group/groupMemberInfo.md) \*> | Success     |
| onFailure      | OIMFailureCallback                                                 | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getGroupMemberOwnerAndAdmin:@""
                                      onSuccess:^(NSArray<OIMGroupMemberInfo *> * _Nullable groupMembersInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

    public void getGroupMemberOwnerAndAdmin(OnBase<List<GroupMembersInfo>> callBack, String groupID)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                             | Required | Description        |
| -------------- | ------------------------------------------------------------------------------------------ | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md)<List<[GroupMembersInfo](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface |
| groupID        | String                                                                                     | Yes      | Group ID           |

### Return Result

### Code Example

```java showLineNumbers

  OpenIMClient.getInstance().groupManager.getGroupMemberOwnerAndAdmin(new OnBase<List<GroupMembersInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupMembersInfo> data) {

            }
        },  groupID)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getGroupMemberOwnerAndAdmin(groupID: string, operationID?: string): Promise<WsResponse<GroupMemberItem[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| groupID        | string         | Yes      | Group ID    |

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

IMSDK.getGroupMemberOwnerAndAdmin('groupID')
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
IMSDK.asyncApi('getGroupMemberOwnerAndAdmin', operationID: string, groupID: string): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string         | Yes      | Group ID                                                               |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                 | Description       |
| --------------- | -------------------------------------------------------------- | ----------------- |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\> | Group member list |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                  | Failure callback  |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getGroupMemberOwnerAndAdmin', IMSDK.uuid(), 'groupID')
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
OpenIMSDK.getGroupMemberOwnerAndAdmin(groupID: string, operationID?: string): Promise<GroupMemberItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                 | Description       |
| --------------- | -------------------------------------------------------------- | ----------------- |
| Promise.then()  | Promise<[GroupMemberItem](/class/group/groupMemberInfo.md)[]\> | Group member list |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                 | Failure callback  |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getGroupMemberOwnerAndAdmin('groupID')
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

public static void GetGroupMemberOwnerAndAdmin(OnBase<List<GroupMember>> cb, string groupId)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                        | Required | Description        |
| -------------- | ------------------------------------------------------------------------------------- | -------- | ------------------ |
| cb             | [OnBase](/callback/onBase.md)<List<[GroupMember](/class/group/groupMemberInfo.md)>> | Yes      | Callback interface |
| groupId        | string                                                                                | Yes      | Group ID           |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetGroupMemberOwnerAndAdmin((list,errCode,errMsg)=>{

},"groupID");

```

</TabItem>
</Tabs>
