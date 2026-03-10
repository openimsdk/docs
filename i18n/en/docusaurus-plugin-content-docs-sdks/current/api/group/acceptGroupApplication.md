---
sidebar_position: 11
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# acceptGroupApplication

## Description

:::info

The group owner or administrator accepts the group application.

:::

:::caution Note

After the group application is approved, the administrator and group owner can no longer operate.

**Related Callbacks**:  
[onGroupApplicationAccepted](../../callback/onGroupApplicationAccepted)  
[onGroupMemberAdded](../../callback/onGroupMemberAdded)  
[onJoinedGroupAdded](../../callback/onJoinedGroupAdded)  

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
 Future<dynamic> acceptGroupApplication({
    required String groupID,
    required String userID,
    String? handleMsg,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| groupID        | String         | Yes      | Group ID    |
| userID         | Sting          | Yes      | Applicant's User ID |
| handleMsg      | Sting          | No       | Remark      |

### Return Result

| Parameter Name | Parameter Type | Description |
| -------------- | -------------- | ----------- |
| ~              | ~              | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.groupManager.acceptGroupApplication(
      groupID: 'groupID',
      userID: 'userID',
      handleMsg: 'haha',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)acceptGroupApplication:(NSString *)groupID
                    fromUserId:(NSString *)fromUserID
                     handleMsg:(NSString * _Nullable)handleMsg
                     onSuccess:(nullable OIMSuccessCallback)onSuccess
                     onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description         |
| -------------- | -------------- | -------- | ------------------- |
| groupID        | NSString       | Yes      | Group ID            |
| fromUserID     | NSSting        | Yes      | Applicant's User ID |
| handleMsg      | NSSting        | No       | Message             |

### Return Result

| Parameter Name | Parameter Type     | Description |
| -------------- | ------------------ | ----------- |
| onSuccess      | OIMSuccessCallback | Success     |
| onFailure      | OIMFailureCallback | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager acceptGroupApplication:@""
                                fromUserId:@""
                                handleMsg:@""
                                onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void acceptGroupApplication(OnBase<String> callBack, String gid, String uid, String handleMsg)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description        |
| -------------- | ----------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface |
| gid            | String                        | Yes      | Group ID           |
| uid            | String                        | Yes      | User ID            |
| handleMsg      | String                        | No       | Message            |

### Return Result

### Code Example

```java showLineNumbers
  OpenIMClient.getInstance().groupManager.acceptGroupApplication(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        },gid,uid,handleMsg)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.acceptGroupApplication({
    groupID: string;
    fromUserID: string;
    handleMsg: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description         |
| -------------- | -------------- | -------- | ------------------- |
| groupID        | string         | Yes      | Group ID            |
| fromUserID     | string         | Yes      | Applicant's User ID |
| handleMsg      | string         | Yes      | Operational message |

### Return Result

| Parameter Name  | Parameter Type                               | Description      |
| --------------- | -------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\>   | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>   | Failure callback |

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

IMSDK.acceptGroupApplication({
  groupID: '',
  fromUserID: '',
  handleMsg: '',
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
IMSDK.asyncApi('acceptGroupApplication', operationID: string, {
  groupID: string;
  fromUserID: string;
  handleMsg: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string         | Yes      | Group ID                                                               |
| fromUserID     | string         | Yes      | Applicant's User ID                                                    |
| handleMsg      | string         | Yes      | Operational message                                                    |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('acceptGroupApplication', IMSDK.uuid(), {
  groupID: '',
  fromUserID: '',
  handleMsg: '',
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
OpenIMSDK.acceptGroupApplication({
  groupID: string,
  fromUserID: string,
  handleMsg: string,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| fromUserID     | string         | Yes      | Applicant's User ID                                                    |
| handleMsg      | string         | Yes      | Operational message                                                    |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.acceptGroupApplication({
  groupID: '',
  fromUserID: '',
  handleMsg: '',
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

public static void AcceptGroupApplication(OnBase<bool> cb, string groupId, string fromUserId, string handleMsg)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description        |
| -------------- | ----------------------------- | -------- | ------------------ |
| cb             | [OnBase](/callback/onBase.md) | Yes      | Callback interface |
| groupID        | string                        | Yes      | Group ID           |
| fromUserID     | string                        | Yes      | User ID            |
| handleMsg      | string                        | No       | Message            |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.AcceptGroupApplication((suc,errCode,errMsg)=>{

},gid,uid,handleMsg);

```

</TabItem>


</Tabs>
