---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# updateFriends

## Description

:::info

Update friend information, including pinned, remark, and ex fields.

:::

:::caution Note

**Related callbacks**:  
[onFriendInfoChanged](../../callback/onFriendInfoChanged)  
[onConversationChanged](../../callback/onConversationChanged)

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
Future updateFriends(
    UpdateFriendsReq req, {
    String? operationID,
  })
```

### Input Parameters

| Parameter Name   | Parameter Type                                          | Required | Description          |
| ---------------- | ------------------------------------------------------- | -------- | -------------------- |
| updateFriendsReq | [UpdateFriendsReq](/class/relation/updateFriendsReq.md) | Yes      | Structure of changes |

### Return Result

| Name | Type | Description                                 |
| ---- | ---- | ------------------------------------------- |
| ~    | ~    | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.conversationManager.updateFriends(req);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)updateFriends:(OIMUpdateFriendsReq *)req
                   onSuccess:(nullable OIMSuccessCallback)onSuccess
                   onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type                                          | Required | Description          |
| -------------- | ------------------------------------------------------- | -------- | -------------------- |
| req            | [UpdateFriendsReq](/class/relation/updateFriendsReq.md) | Yes      | Structure of changes |

### Return Result

| Name      | Type               | Description |
| --------- | ------------------ | ----------- |
| onSuccess | OIMSuccessCallback | Success     |
| onFailure | OIMFailureCallback | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager updateFriends:req
                               onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

```java showLineNumbers
public void updateFriendsReq(OnBase<String> base, UpdateFriendsReq updateFriendsReq)
```

### Input Parameters

| Parameter Name   | Parameter Type                                          | Required | Description          |
| ---------------- | ------------------------------------------------------- | -------- | -------------------- |
| updateFriendsReq | [UpdateFriendsReq](/class/relation/updateFriendsReq.md) | Yes      | Structure of changes |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().friendshipManager.updateFriendsReq(new OnBase<String>() {
    @Override
    public void onError(int code, String error) {
      // todo: handle error information
    }
    @Override
    public void onSuccess(String data) {
      // todo: request successful
    }
}, updateFriendsReq);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.updateFriends({
  friendUserIDs: string[];
  isPinned?: boolean;
  remark?: boolean;
  ex?: boolean;
},operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                    |
| -------------- | -------------- | -------- | ------------------------------ |
| friendUserIDs  | string[]       | Yes      | List of friend IDs             |
| isPinned       | boolean        | No       | Whether it is a starred friend |
| remark         | string         | No       | Friend's remark                |
| ex             | string         | No       | ex field                       |

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

IMSDK.updateFriends({
  friendUserIDs: ['userID'],
  remark: "new remark"
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
IMSDK.asyncApi('updateFriends', operationID: string, {
  friendUserIDs: string[];
  isPinned?: boolean;
  remark?: boolean;
  ex?: boolean;
}): Promise<FullUserItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| friendUserIDs  | string[]       | Yes      | List of friend IDs                                                     |
| isPinned       | boolean        | No       | Whether it is a starred friend                                         |
| remark         | string         | No       | Friend's remark                                                        |
| ex             | string         | No       | ex field                                                               |


### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\>    | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('updateFriends', IMSDK.uuid(), {
  friendUserIDs: ['userID'],
  remark: "new remark"
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
OpenIMSDK.updateFriends({
  friendUserIDs: string[];
  isPinned?: boolean;
  remark?: boolean;
  ex?: boolean;
}, operationID?: string): Promise<FullUserItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| friendUserIDs  | string[]       | Yes      | List of friend IDs                                                     |
| isPinned       | boolean        | No       | Whether it is a starred friend                                         |
| remark         | string         | No       | Friend's remark                                                        |
| ex             | string         | No       | ex field                                                               |


### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\>     | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from '@openim/rn-client-sdk';

OpenIMSDK.updateFriends({
  friendUserIDs: ['userID'],
  remark: "new remark"
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

```C# showLineNumbers

public static void UpdateFriends(OnBase<bool> cb, UpdateFriendsReq req);

```

### Input Parameters

| Parameter Name   | Parameter Type                                          | Required | Description          |
| ---------------- | ------------------------------------------------------- | -------- | -------------------- |
| cb               | [OnBase](/callback/onBase.md)                           | Yes      | Callback             |
| updateFriendsReq | [UpdateFriendsReq](/class/relation/updateFriendsReq.md) | Yes      | Structure of changes |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.UpdateFriends((suc,errCode,errMsg)=>{

}
, updateFriendsReq);

```

</TabItem>

</Tabs>
