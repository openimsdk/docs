---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# addFriend

## Description

:::info

Initiate a friend request to add the other party as a friend.

:::

:::caution Note

**Related callbacks**:    
[onFriendApplicationAdded](../../callback/onFriendApplicationAdded) 

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
  Future<dynamic> addFriend({
    required String userID,
    String? reason,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description             |
| -------------- | -------------- | -------- | ----------------------- |
| userID         | String         | Yes      | User ID to add          |
| reason         | String         | Yes      | Request message         |

### Return Result

| Parameter Name | Parameter Type | Description                                   |
| -------------- | -------------- | --------------------------------------------- |
| ~              | ~              | Added successfully if no exception is thrown  |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.friendshipManager.addFriend(userID: 'userID',reason: 'i want to');
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)addFriend:(NSString *)userID
       reqMessage:(NSString * _Nullable)reqMessage
        onSuccess:(nullable OIMSuccessCallback)onSuccess
        onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description             |
| -------------- | -------------- | -------- | ----------------------- |
| userID         | NSString       | Yes      | User ID to add          |
| reqMessage     | NSString       | Yes      | Request message         |

### Return Result

| Parameter Name | Parameter Type     | Description |
| -------------- | ------------------ | ----------- |
| onSuccess      | OIMSuccessCallback | Success     |
| onFailure      | OIMFailureCallback | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager addFriend:@""
                    reqMessage:@""
                    onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void addFriend(OnBase<String> callBack, String uid,String reqMessage)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description                                                         |
| -------------- | ----------------------------- | -------- | ------------------------------------------------------------------- |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface                                                  |
| uid            | String                        | Yes      | User ID                                                             |
| reqMessage     | String                        | Yes      | The message the other party sees when requesting to add as a friend |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.addFriend(new OnBase<String>(){...},uid,reqMessage)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.addFriend({
  toUserID: string;
  reqMsg: string;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description             |
| -------------- | -------------- | -------- | ----------------------- |
| toUserID       | string         | Yes      | User ID to add          |
| reqMsg         | string         | Yes      | Friend request message  |

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

IMSDK.addFriend({
  toUserID: '',
  reqMsg: '',
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
IMSDK.asyncApi('addFriend', operationID: string, {
  toUserID: string;
  reqMsg: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| toUserID       | string         | Yes      | User ID to add                                                         |
| reqMsg         | string         | Yes      | Friend request message                                                 |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('addFriend', IMSDK.uuid(), {
  toUserID: '',
  reqMsg: '',
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
OpenIMSDK.addFriend({
  toUserID: string;
  reqMsg: string;
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| toUserID       | string         | Yes      | User ID to add                                                         |
| reqMsg         | string         | Yes      | Friend request message                                                 |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.addFriend({
  toUserID: '',
  reqMsg: '',
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

public static void AddFriend(OnBase<bool> cb, ApplyToAddFriendReq userIdReqMsg)

```

### Input Parameters

| Parameter Name | Parameter Type                                                | Required | Description             |
| -------------- | ------------------------------------------------------------- | -------- | ----------------------- |
| cb             | [OnBase](/callback/onBase.md)                                 | Yes      | Callback                |
| userIdReqMsg   | [ApplyToAddFriendReq](/class/relation/ApplyToAddFriendReq.md) | Yes      | Add friend parameters   |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.AddFriend((suc,errCode,errMsg)=>{

},new ApplyToAddFriendReq(){
    FromUserID = "",
    ToUserID = "",
    ReqMsg = "",
    Ex = "",
});

```

</TabItem>

</Tabs>
