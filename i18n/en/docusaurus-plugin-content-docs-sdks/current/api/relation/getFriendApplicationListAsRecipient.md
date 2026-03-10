---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getFriendApplicationListAsRecipient

## Description

:::info

Get the friend application list (as the recipient).

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
  Future<List<FriendApplicationInfo>> getFriendApplicationListAsRecipient(
          {String? operationID})
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                                      | Description |
| -------------- | ------------------------------------------------------------------- | ----------- |
| ~              | List<[FriendApplicationInfo](/class/relation/friendApplication.md)> | Success     |

### Code Example

```dart showLineNumbers
    List<FriendApplicationInfo> list = await OpenIM.iMManager.friendshipManager.getFriendApplicationListAsRecipient();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getFriendApplicationListWithOnSuccess:(nullable OIMFriendApplicationsCallback)onSuccess
                                    onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                                             | Description |
| -------------- | -------------------------------------------------------------------------- | ----------- |
| onSuccess      | NSArray< [OIMFriendApplication](/class/relation/friendApplication.md) \* > | Success     |
| onFailure      | OIMFailureCallback                                                         | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getFriendApplicationListWithOnSuccess:^(NSArray<OIMFriendApplication *> * _Nullable friendApplications) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void getRecvFriendApplicationList(OnBase<List<FriendApplicationInfo>> callBack)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                     | Required | Description        |
| -------------- | -------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md)<List<[FriendApplicationInfo](/class/relation/friendApplication.md)>> | Yes      | Callback interface |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.getRecvFriendApplicationList(new OnBase<List<FriendApplicationInfo>>(){...})

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getFriendApplicationListAsRecipient(params: {
  offset: number;
  count: number;
},operationID?: string): Promise<WsResponse<FriendApplication[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                   |
| -------------- | -------------- | -------- | ----------------------------- |
| offset         | number         | Yes      | Starting index for pagination |
| count          | number         | Yes      | Number of records per page    |

### Return Result

| Parameter Name  | Parameter Type                                                                        | Description                      |
| --------------- | ------------------------------------------------------------------------------------- | -------------------------------- |
| Promise.then()  | Promise<WsResponse<[FriendApplicationItem](/class/relation/friendApplication.md)[]>\> | List of received friend requests |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                            | Failure callback                 |

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

IMSDK.getFriendApplicationListAsRecipient({
  offset: 0,
  count: 10,
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
IMSDK.asyncApi('getFriendApplicationListAsRecipient', operationID: string): Promise<FriendApplication[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                            | Description                      |
| --------------- | ------------------------------------------------------------------------- | -------------------------------- |
| Promise.then()  | Promise<[FriendApplicationItem](/class/relation/friendApplication.md)[]\> | List of received friend requests |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                             | Failure callback                 |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getFriendApplicationListAsRecipient', IMSDK.uuid())
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
OpenIMSDK.getFriendApplicationListAsRecipient(req: {
  offset: number;
  count: number;
  handleResults: number[]
}, operationID?: string): Promise<FriendApplication[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| offset         | number         | Yes      | Starting index for pagination                                          |
| count          | number         | Yes      | Number of records per page                                             |
| handleResults  | number[]       | Yes      | -                                                                      |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                            | Description                      |
| --------------- | ------------------------------------------------------------------------- | -------------------------------- |
| Promise.then()  | Promise<[FriendApplicationItem](/class/relation/friendApplication.md)[]\> | List of received friend requests |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                            | Failure callback                 |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getFriendApplicationListAsRecipient({
  offset: 0,
  count: 10,
  handleResults: [],
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

### Function Prototype

```C# showLineNumbers

public static void GetFriendApplicationListAsRecipient(OnBase<List<FriendApplicationInfo>> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                     | Required | Description |
| -------------- | -------------------------------------------------------------------------------------------------- | -------- | ----------- |
| cb             | [OnBase](/callback/onBase.md)<List<[FriendApplicationInfo](/class/relation/friendApplication.md)>> | Yes      | Callback    |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetFriendApplicationListAsRecipient((list,errCode,errMsg)=>{
    
});

```

</TabItem>

</Tabs>
