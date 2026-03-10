---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# deleteFriend

## Description

:::info

Delete a friend.

:::

:::caution Note

(1) Because it is a two-way friendship, this function only removes the other party from your own friend list;  
(2) Deleting a friend will not automatically delete the conversation. To delete the conversation, you can call the function to delete the conversation.   

**Related callbacks**:    
[onFriendDeleted](../../callback/onFriendDeleted) 
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
  Future<dynamic> deleteFriend({
    required String userID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| userID         | String         | Yes      | User ID     |

### Return Result

| Parameter Name | Parameter Type | Description                                     |
| -------------- | -------------- | ----------------------------------------------- |
| ~              | ~              | Deleted successfully if no exception is thrown  |

### Code Example

```dart showLineNumbers
   await OpenIM.iMManager.friendshipManager.deleteFriend(userID: 'userID');
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)deleteFriend:(NSString *)friendUserID
           onSuccess:(nullable OIMSuccessCallback)onSuccess
           onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| friendUserID   | NSString       | Yes      | User ID     |

### Return Result

| Parameter Name | Parameter Type     | Description |
| -------------- | ------------------ | ----------- |
| onSuccess      | OIMSuccessCallback | Success     |
| onFailure      | OIMFailureCallback | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager deleteFriend:@""
                       onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">
### Function Prototype

```java showLineNumbers

 public void deleteFriend(OnBase<String> callBack, String uid)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description        |
| -------------- | ----------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface |
| uid            | String                        | Yes      | User ID            |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.deleteFriend(new OnBase<String>(){...},uid)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.deleteFriend(userID: string, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------------- | -------- | ----------- |
| userID         | string         | Yes      | User ID     |

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

IMSDK.deleteFriend('userID')
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
IMSDK.asyncApi('deleteFriend', operationID: string, userID: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| userID         | string         | Yes      | User ID                                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('deleteFriend', IMSDK.uuid(), 'userID')
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
OpenIMSDK.deleteFriend(userID: string, operationID?: string): Promise<void>;
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| userID         | string         | Yes      | User ID                                                                |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.deleteFriend('userID')
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

public static void DeleteFriend(OnBase<bool> cb, string friendUserId)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description        |
| -------------- | ----------------------------- | -------- | ------------------ |
| cb             | [OnBase](/callback/onBase.md) | Yes      | Callback interface |
| friendUserId   | string                        | Yes      | User ID            |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.DeleteFriend((suc,errCode,errMsg)=>{

},"userId");

```

</TabItem>
</Tabs>
