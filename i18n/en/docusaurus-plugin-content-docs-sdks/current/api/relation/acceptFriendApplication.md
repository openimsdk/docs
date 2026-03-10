---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# acceptFriendApplication

## Description

:::info

Agree to the other party's friend request, establishing a two-way friendship.

:::

:::caution Note

**Related callbacks**:      
[onFriendApplicationAccepted](../../callback/onFriendApplicationAccepted)   
[onFriendAdded](../../callback/onFriendAdded)  

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
  Future<dynamic> acceptFriendApplication({
    required String userID,
    String? handleMsg,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description        |
| -------------- | -------------- | -------- | ------------------ |
| userID         | String         | Yes      | Applicant User ID  |
| handleMsg      | String         | No       | Message            |

### Return Result

| Parameter Name | Parameter Type | Description                                          |
| -------------- | -------------- | ---------------------------------------------------- |
| ~              | ~              | Processed successfully if no exception is thrown     |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.friendshipManager.acceptFriendApplication(
      userID: 'userID',
      handleMsg: 'ok, i agree',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)acceptFriendApplication:(NSString *)userID
                      handleMsg:(NSString *)msg
              onSuccess:(nullable OIMSuccessCallback)onSuccess
              onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description       |
| -------------- | -------------- | -------- | ----------------- |
| userID         | NSString       | Yes      | Applicant User ID |
| msg            | NSString       | Yes      | Message           |

### Return Result

| Parameter Name | Parameter Type     | Description |
| -------------- | ------------------ | ----------- |
| onSuccess      | OIMSuccessCallback | Success     |
| onFailure      | OIMFailureCallback | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager acceptFriendApplication:@""
                                          handleMsg:@""
                                          onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```Java showLineNumbers

public void acceptFriendApplication(OnBase<String> callBack, String uid, String msg)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description        |
| -------------- | ----------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface |
| uid            | String                        | Yes      | User ID            |
| msg            | String                        | Yes      | Message            |

### Return Result

### Code Example

```Java showLineNumbers

OpenIMClient.getInstance().friendshipManager.acceptFriendApplication(new OnBase<String>(){...},uid,msg)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.acceptFriendApplication({
    toUserID: string;
    handleMsg: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description       |
| -------------- | -------------- | -------- | ----------------- |
| toUserID       | string         | Yes      | Applicant User ID |
| handleMsg      | string         | Yes      | Operation message |

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

IMSDK.acceptFriendApplication({
  toUserID: '',
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
IMSDK.asyncApi('acceptFriendApplication', operationID: string, {
    toUserID: string;
    handleMsg: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| toUserID       | string         | Yes      | Applicant User ID                                                      |
| handleMsg      | string         | Yes      | Operation message                                                      |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('acceptFriendApplication', IMSDK.uuid(), {
  toUserID: '',
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
OpenIMSDK.acceptFriendApplication({
  toUserID: string;
  handleMsg: string;
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| toUserID       | string         | Yes      | Applicant User ID                                                      |
| handleMsg      | string         | Yes      | Operation message                                                      |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.acceptFriendApplication({
  toUserID: '',
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

public static void AcceptFriendApplication(OnBase<bool> cb, ProcessFriendApplicationParams userIdHandleMsg)

```

### Input Parameters

| Parameter Name  | Parameter Type                                                                      | Required | Description           |
| --------------- | ----------------------------------------------------------------------------------- | -------- | --------------------- |
| cb              | [OnBase](/callback/onBase.md)                                                       | Yes      | Callback              |
| userIdHandleMsg | [ProcessFriendApplicationParams](/class/relation/ProcessFriendApplicationParams.md) | Yes      | Add friend parameters |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.AcceptFriendApplication((suc,errCode,errMsg)=>{
},new ProcessFriendApplicationParams(){
    ToUserID = "userid",
    HandleMsg = "",
});
```

</TabItem>

</Tabs>
