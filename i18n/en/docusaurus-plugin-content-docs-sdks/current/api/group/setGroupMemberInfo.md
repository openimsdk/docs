---
sidebar_position: 16
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setGroupMemberInfo

## Description

:::info

Modify group member information.

:::

:::caution Note

The group owner can modify administrator and ordinary member information; administrators can modify ordinary member information.

**Related Callbacks**:  
[onGroupMemberInfoChanged](/callback/onGroupMemberInfoChanged.md)

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
  Future<dynamic> setGroupMemberInfo({
    required SetGroupMembersInfo groupMembersInfo,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name   | Parameter Type                                                  | Required | Description |
| ---------------- | --------------------------------------------------------------- | -------- | -------- |
| groupMembersInfo | [SetGroupMembersInfo](/class/group/SetGroupMemberInfo.md) | Yes      | Member Info |

### Return Result

| Parameter Name | Parameter Type | Description                 |
| -------- | -------- | --------------------------- |
| ~        | ~        | Operation successful if no exception is thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.groupManager.setGroupMemberInfo(
      groupMembersInfo: ,
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers
- (void)setGroupMemberInfo:(OIMSetGroupMembersInfo *)groupMembersInfo
                 onSuccess:(nullable OIMSuccessCallback)onSuccess
                 onFailure:(nullable OIMFailureCallback)onFailure;
```

### Input Parameters

| Parameter Name   | Parameter Type                                                  | Required | Description |
| ---------------- | --------------------------------------------------------------- | -------- | -------- |
| groupMembersInfo | [OIMSetGroupMembersInfo](/class/group/SetGroupMemberInfo.md) | Yes      | Member Info |

### Return Result

| Parameter Name| Parameter Type     | Description |
| --------- | ------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success  |
| onFailure | OIMFailureCallback | Failure  |

### Code Example

```swift showLineNumbers
[OIMManager.manager setGroupMemberInfo:
                                 onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];
```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
 public void setGroupMemberInfo(SetGroupMemberInfo info,OnBase<String> callBack)
```

### Input Parameters

| Parameter Name   | Parameter Type                                                  | Required | Description |
| ---------------- | --------------------------------------------------------------- | -------- | -------- |
| groupMembersInfo | [SetGroupMemberInfo](/class/group/SetGroupMemberInfo.md) | Yes      | Member Info |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().groupManager.setGroupMemberInfo(groupInfo, new OnBase<String>() {
    @Override
    public void onError(int code, String error) {
      // todo: handle error info
    }
    @Override
    public void onSuccess(String data) {
      // todo: request successful
    }
});
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.setGroupMemberInfo({
  groupID: string;
  userID: string;
  nickname?: string;
  faceURL?: string;
  roleLevel?: GroupMemberRole;
  ex?: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description    |
| --------- | -------- | -------- | -------------- |
| groupID   | string   | Yes      | Group ID       |
| userID    | string   | Yes      | User ID        |
| nickname  | string   | No       | Group member nickname |
| faceURL   | string   | No       | Group member avatar URL |
| roleLevel | string   | No       | Group member role     |
| ex        | string   | No       | Group member extension info |

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

IMSDK.setGroupMemberInfo({
  groupID: '',
  userID: '',
  nickname: 'new name',
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
IMSDK.asyncApi('setGroupMemberInfo', operationID: string, {
  groupID: string;
  userID: string;
  nickname?: string;
  faceURL?: string;
  roleLevel?: GroupMemberRole;
  ex?: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID     | string   | Yes      | Group ID                                                 |
| userID      | string   | Yes      | User ID                                                 |
| nickname    | string   | No       | Group member nickname                                              |
| faceURL     | string   | No       | Group member avatar URL                                              |
| roleLevel   | string   | No       | Group member role                                              |
| ex          | string   | No       | Group member extension info                                          |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('setGroupMemberInfo', IMSDK.uuid(), {
  groupID: '',
  userID: '',
  nickname: 'new name',
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
OpenIMSDK.setGroupMemberInfo({
  groupID: string;
  userID: string;
  nickname?: string;
  faceURL?: string;
  roleLevel?: GroupMemberRole;
  ex?: string;
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| groupID     | string   | Yes      | Group ID                                                 |
| userID      | string   | Yes      | User ID                                                 |
| nickname    | string   | No       | Group member nickname                                              |
| faceURL     | string   | No       | Group member avatar URL                                              |
| roleLevel   | string   | No       | Group member role                                              |
| ex          | string   | No       | Group member extension info                                          |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.setGroupMemberInfo({
  groupID: '',
  userID: '',
  nickname: 'new name',
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

public static void SetGroupMemberInfo(OnBase<bool> cb, SetGroupMemberInfo groupMemberInfo)

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description         |
| -------- | -------- | -------- | ------------ |
| cb       | [OnBase](/callback/onBase.md) | Yes      | Callback    |
| groupMemberInfo| [SetGroupMemberInfo](/class/group/SetGroupMemberInfo.md) | Yes      | Member Setup |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.SetGroupMemberInfo((suc,errCode,errMsg)=>{

},new SetGroupMemberInfo(){

});

```

</TabItem>
</Tabs>
