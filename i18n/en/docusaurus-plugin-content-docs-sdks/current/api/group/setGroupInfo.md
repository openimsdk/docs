---
sidebar_position: 8
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setGroupInfo

## Description

:::info

Set group information, including group avatar, name, notification, introduction, extension fields, etc.

:::

:::caution Note

Only administrators and the group owner have permission to set this.

**Related Callbacks**:  
[onGroupInfoChanged](../../callback/onGroupInfoChanged)  

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Natvie', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<dynamic> setGroupInfo(GroupInfo groupInfo,{
    String? operationID,
  })
```

### Input Parameters

| Parameter Name| Parameter Type                           | Required | Description |
| --------- | ---------------------------------------- | -------- | ------- |
| groupID   | NSString                                 | Yes      | Group ID |
| groupInfo | [GroupInfo](/class/group/groupInfo.md)   | Yes      | Group Info |

### Return Result

| Parameter Name| Parameter Type| Description                 |
| -------- | -------- | --------------------------- |
| ~        | ~        | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.groupManager.setGroupInfo();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)setGroupInfo:(OIMGroupInfo *)groupInfo
           onSuccess:(nullable OIMSuccessCallback)onSuccess
           onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name| Parameter Type                           | Required | Description |
| --------- | ---------------------------------------- | -------- | ------- |
| groupID   | NSString                                 | Yes      | Group ID |
| groupInfo | [OIMGroupInfo](/class/group/groupInfo.md)| Yes      | Group Info |

### Return Result

| Parameter Name| Parameter Type     | Description |
| --------- | ------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success  |
| onFailure | OIMFailureCallback | Failure  |

### Code Example

```swift showLineNumbers

OIMGroupInfo *param = [OIMGroupInfo new];
param.introduction = @"";

[OIMManager.manager setGroupInfo:param
                        onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void setGroupInfo(GroupInfo groupInfo, OnBase<String> callBack)
```

### Input Parameters

| Parameter Name| Parameter Type                           | Required | Description |
| --------- | ---------------------------------------- | -------- | -------- |
| callBack  | [OnBase](/callback/onBase.md)            | Yes      | Callback interface |
| groupInfo | [GroupInfo](/class/group/groupInfo.md)   | Yes      | Group Info |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().groupManager.setGroupInfo(groupInfo, new OnBase<String>() {
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
IMSDK.setGroupInfo({
  groupID: string;
  faceURL?: string;
  groupName?: string;
  introduction?: string;
  notification?: string;
  needVerification?: GroupVerificationType;
  applyMemberFriend?: AllowType;
  lookMemberInfo?: AllowType;
  ex?: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name    | Parameter Type                                            | Required | Description                 |
| ----------------- | --------------------------------------------------------- | -------- | -------------------- |
| groupID           | string                                                    | Yes      | Group ID             |
| faceURL           | string                                                    | No       | Group avatar            |
| groupName         | string                                                    | No       | Group name               |
| notification      | string                                                    | No       | Group notification               |
| introduction      | string                                                    | No       | Group introduction               |
| needVerification  | [GroupVerification](/enum/groupVerification.md)           | No       | Group join verification method |
| lookMemberInfo    | [AllowType](/enum/allowType.md)                           | No       | Allow viewing member info |
| applyMemberFriend | [AllowType](/enum/allowType.md)                           | No       | Allow adding friends in group|
| ex                | string                                                    | No       | Extension field      |

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

IMSDK.setGroupInfo({
  groupID: 'groupID',
  groupName: 'new name',
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
IMSDK.asyncApi('setGroupInfo', operationID: string, {
  groupID: string;
  faceURL?: string;
  groupName?: string;
  introduction?: string;
  notification?: string;
  needVerification?: GroupVerificationType;
  applyMemberFriend?: AllowType;
  lookMemberInfo?: AllowType;
  ex?: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type                                            | Required | Description                                                    |
| ----------- | ------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                                        | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID           | string                                                    | Yes      | Group ID              |
| faceURL           | string                                                    | No       | Group avatar            |
| groupName         | string                                                    | No       | Group name               |
| notification      | string                                                    | No       | Group notification               |
| introduction      | string                                                    | No       | Group introduction               |
| needVerification  | [GroupVerification](/enum/groupVerification.md)           | No       | Group join verification method         |
| lookMemberInfo    | [AllowType](/enum/allowType.md)                           | No       | Allow viewing member info |
| applyMemberFriend | [AllowType](/enum/allowType.md)                           | No       | Allow adding friends in group |
| ex                | string                                                    | No       | Extension field      |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('setGroupInfo', IMSDK.uuid(), {
  groupID: 'groupID',
  groupName: 'new name',
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
OpenIMSDK.setGroupInfo({
  groupID: string;
  faceURL?: string;
  groupName?: string;
  introduction?: string;
  notification?: string;
  needVerification?: GroupVerificationType;
  applyMemberFriend?: AllowType;
  lookMemberInfo?: AllowType;
  ex?: string;
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type                                            | Required | Description                                                    |
| ----------- | ------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                                        | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID           | string                                                    | Yes      | Group ID              |
| faceURL           | string                                                    | No       | Group avatar            |
| groupName         | string                                                    | No       | Group name               |
| notification      | string                                                    | No       | Group notification               |
| introduction      | string                                                    | No       | Group introduction               |
| needVerification  | [GroupVerification](/enum/groupVerification.md)           | No       | Group join verification method         |
| lookMemberInfo    | [AllowType](/enum/allowType.md)                           | No       | Allow viewing member info |
| applyMemberFriend | [AllowType](/enum/allowType.md)                           | No       | Allow adding friends in group|
| ex                | string                                                    | No       | Extension field      |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from '@openim/rn-client-sdk';

OpenIMSDK.setGroupInfo(
  {
    groupID: 'groupID',
    groupName: 'new name',
  }
)
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

public static void SetGroupInfo(OnBase<bool> cb, GroupInfo groupInfo)

```

### Input Parameters

| Parameter Name| Parameter Type                           | Required | Description |
| --------- | ---------------------------------------- | -------- | -------- |
| cb        | [onBase](/callback/onBase.md)            | Yes      | Callback |
| groupInfo | [GroupInfo](/class/group/groupInfo.md)   | Yes      | Group Info |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.SetGroupInfo((suc,errCode,errMsg)=>{

},new GroupInfo(){

});
```

</TabItem>

</Tabs>
