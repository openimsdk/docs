---
sidebar_position: 12
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# refuseGroupApplication

## Description

:::info

Refuse group join application.

:::

:::caution Note
(1) Only the group owner or group administrator of this group can call this module;     
(2) After the group join request is refused, administrators and the group owner cannot operate it again.

**Related Callbacks**:    
[onGroupApplicationRejected](../../callback/onGroupApplicationRejected)  

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
  Future<dynamic> refuseGroupApplication({
    required String groupID,
    required String userID,
    String? handleMsg,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description             |
| --------- | -------- | -------- | ----------------------- |
| groupID   | String   | Yes      | Group ID                |
| userID    | Sting    | Yes      | Applicant's userID      |
| handleMsg | Sting    | No       | Reason for refusal      |

### Return Result

| Parameter Name | Parameter Type | Description                 |
| -------- | -------- | --------------------------- |
| ~        | ~        | Operation successful if no exception is thrown |

### Code Example

```dart showLineNumbers
 await OpenIM.iMManager.groupManager.refuseGroupApplication(
      groupID: '',
      userID: '',
      handleMsg: '',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)refuseGroupApplication:(NSString *)groupID
                    fromUserId:(NSString *)fromUserID
                     handleMsg:(NSString * _Nullable)handleMsg
                     onSuccess:(nullable OIMSuccessCallback)onSuccess
                     onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description         |
| ---------- | -------- | -------- | ------- |
| groupID    | NSString | Yes      | Group ID |
| fromUserID | NSSting  | Yes      | Applicant's userID    |
| handleMsg  | NSSting  | No       | Reason for refusal    |

### Return Result

| Parameter Name | Parameter Type       | Description |
| --------- | -------------------- | ----------- |
| onSuccess | OIMSuccessCallback   | Success     |
| onFailure | OIMFailureCallback   | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager refuseGroupApplication:@""
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
public void refuseGroupApplication(OnBase<String> callBack, String gid, String uid, String handleMsg)

```

### Input Parameters

| Parameter Name | Parameter Type                 | Required | Description             |
| --------- | ------------------------------ | -------- | ----------------------- |
| callBack  | [OnBase](/callback/onBase.md)  | Yes      | Callback interface      |
| gid       | String                         | Yes      | Group ID                |
| uid       | Sting                          | Yes      | Refused User ID         |
| handleMsg | Sting                          | No       | Information             |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().groupManager.refuseGroupApplication(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        },gid,uid,handleMsg);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.refuseGroupApplication({
  groupID: string;
  fromUserID: string;
  handleMsg: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description             |
| ---------- | -------- | -------- | ------------- |
| groupID    | string   | Yes      | Group ID                |
| fromUserID | string   | Yes      | Applicant's userID      |
| handleMsg  | string   | Yes      | Reason for refusal      |

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

IMSDK.refuseGroupApplication({
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
IMSDK.asyncApi('refuseGroupApplication', operationID: string, {
  groupID: string;
  fromUserID: string;
  handleMsg: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| ----------- | -------- | -------- | ---------------------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID     | string   | Yes      | Group ID                                                               |
| fromUserID  | string   | Yes      | Applicant's userID                                                     |
| handleMsg   | string   | Yes      | Reason for refusal                                                     |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('refuseGroupApplication', IMSDK.uuid(), {
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
OpenIMSDK.refuseGroupApplication({
  groupID: string,
  fromUserID: string,
  handleMsg: string,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| ----------- | -------- | -------- | ---------------------------------------------------------------------- |
| groupID     | string   | Yes      | Group ID                                                               |
| fromUserID  | string   | Yes      | Applicant's userID                                                     |
| handleMsg   | string   | Yes      | Reason for refusal                                                     |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.refuseGroupApplication({
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

public static void RefuseGroupApplication(OnBase<bool> cb, string groupId, string fromUserId, string handleMsg)

```

### Input Parameters

| Parameter Name | Parameter Type                 | Required | Description             |
| --------- | ------------------------------ | -------- | ------------- |
| cb        | [onBase](/callback/onBase.md)  | Yes      | Callback interface      |
| groupId   | string                         | Yes      | Group ID                |
| fromUserId| sting                          | Yes      | Refused User ID         |
| handleMsg | sting                          | No       | Information             |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.RefuseGroupApplication((suc,errCode,errMsg)=>{

},gid,uid,handleMsg);
```

</TabItem>

</Tabs>
