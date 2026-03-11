---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# inviteUserToGroup

## Description

:::info

Invite users to a group.

:::

:::caution Note

Determine the result of the group invitation based on the caller's identity and the [group verification option](../../enum/groupVerification).

**Related Callbacks**:    
[onJoinedGroupAdded](../../callback/onJoinedGroupAdded)   
[onGroupMemberAdded](../../callback/onGroupMemberAdded)   
[onGroupApplicationAdded](/callback/onGroupApplicationAdded.md)

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
  Future<List<GroupInviteResult>> inviteUserToGroup({
    required String groupID,
    required List<String> userIDList,
    String? reason,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description             |
| -------------- | -------------- | -------- | ----------------------- |
| groupID        | String         | Yes      | Group ID                |
| reason         | String         | Yes      | Invitation information  |
| userIDList     | List<String\>  | Yes      | Invited User ID List    |

### Return Result

| Parameter Name | Parameter Type            | Description |
| -------------- | ------------------------- | ----------- |
| ~              | List<GroupInviteResult\>  | Success     |

#### GroupInviteResult

| Field Name | Field Type | Description        |
| ---------- | ---------- | ------------------ |
| userID     | String     | User ID            |
| result     | Int        | Invitation result  |

### Code Example

```dart showLineNumbers
    List<GroupInviteResult> list =  await OpenIM.iMManager.groupManager.inviteUserToGroup(
        groupID: '',
        userIDList: [],
      );
     // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)inviteUserToGroup:(NSString *)groupID
                   reason:(NSString *)reason
                  usersID:(NSArray <NSString *> *)usersID
                onSuccess:(nullable OIMSimpleResultsCallback)onSuccess
                onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type        | Required | Description             |
| -------------- | --------------------- | -------- | ----------------------- |
| groupID        | NSString              | Yes      | Group ID                |
| reason         | NSSting               | Yes      | Invitation information  |
| usersID        | NSArray <NSString \*> | Yes      | Invited User ID List    |

### Return Result

| Parameter Name | Parameter Type                    | Description |
| -------------- | --------------------------------- | ----------- |
| onSuccess      | NSArray<OIMSimpleResultInfo \* >  | Success     |
| onFailure      | OIMFailureCallback                | Failure     |

#### OIMSimpleResultInfo

| Field Name | Field Type | Description       |
| ---------- | ---------- | ----------------- |
| userID     | NSString   | User ID           |
| result     | NSInteger  | Invitation result |

### Code Example

```swift showLineNumbers

[OIMManager.manager inviteUserToGroup:@""
                               reason:@""
                              usersID:@[]
                          onSuccess:^(NSArray<OIMSimpleResultInfo *> * _Nullable results) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void inviteUserToGroup(OnBase<List<GroupInviteResult>> callBack, String groupId, List<String> uidList, String reason)
```

### Input Parameters

| Parameter Name | Parameter Type                                   | Required | Description             |
| -------------- | ------------------------------------------------ | -------- | ----------------------- |
| callBack       | [OnBase](/callback/onBase.md)<List<ResultInfo\>> | Yes      | Callback interface      |
| groupId        | String                                           | Yes      | Group ID                |
| reason         | Sting                                            | Yes      | Invitation information  |
| uidList        | List<String\>                                    | Yes      | Invited User ID List    |

### Return Result

### Code Example

```java showLineNumbers
  OpenIMClient.getInstance().groupManager.inviteUserToGroup(new OnBase<List<ResultInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupInviteResult> data) {

            }
        },groupId,uidList,reason)
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.inviteUserToGroup({
  groupID: string;
  reason: string;
  userIDList: string[];
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description             |
| -------------- | -------------- | -------- | ----------------------- |
| groupID        | string         | Yes      | Group ID                |
| reason         | string         | Yes      | Invitation information  |
| userIDList     | string[]       | Yes      | Invited User ID List    |

### Return Result

| Parameter Name  | Parameter Type                             | Description      |
| --------------- | ------------------------------------------ | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

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

IMSDK.inviteUserToGroup({
  groupID: '',
  reason: '',
  userIDList: ['userID'],
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
IMSDK.asyncApi('inviteUserToGroup', operationID: string, {
  groupID: string;
  reason: string;
  userIDList: string[];
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string         | Yes      | Group ID                                                               |
| reason         | string         | Yes      | Invitation information                                                 |
| userIDList     | string[]       | Yes      | Invited User ID List                                                   |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('inviteUserToGroup', IMSDK.uuid(), {
  groupID: '',
  reason: '',
  userIDList: ['userID'],
})
  .then(() => {
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
OpenIMSDK.inviteUserToGroup({
  groupID: string,
  reason: string,
  userIDList: string[], 
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| reason         | string         | Yes      | Invitation information                                                 |
| userIDList     | string[]       | Yes      | Invited User ID List                                                   |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.inviteUserToGroup({
  groupID: '',
  reason: '',
  userIDList: ['userID'],
})
  .then(() => {
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

public static void InviteUserToGroup(OnBase<bool> cb, string groupId, string reason, string[] userIdList)

```

### Input Parameters

| Parameter Name | Parameter Type                                   | Required | Description             |
| -------------- | ------------------------------------------------ | -------- | ----------------------- |
| cb             | [OnBase](/callback/onBase.md)                    | Yes      | Callback interface      |
| groupId        | string                                           | Yes      | Group ID                |
| reason         | sting                                            | Yes      | Invitation information  |
| userIdList     | string[]                                         | Yes      | Invited User ID List    |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.InviteUserToGroup((suc,errCode,errMsg)=>{

},groupId,uidList,reason);
```

</TabItem>

</Tabs>
