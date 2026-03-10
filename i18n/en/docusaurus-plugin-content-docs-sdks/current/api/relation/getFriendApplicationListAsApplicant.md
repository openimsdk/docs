---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getFriendApplicationListAsApplicant

## Description

:::info

Get the friend application list (as the applicant).

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
  Future<List<FriendApplicationInfo>> getFriendApplicationListAsApplicant(
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
    List<FriendApplicationInfo> list = await OpenIM.iMManager.friendshipManager.getFriendApplicationListAsApplicant();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getSendFriendApplicationListWithOnSuccess:(nullable OIMFriendApplicationsCallback)onSuccess
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

[OIMManager.manager getSendFriendApplicationListWithOnSuccess:^(NSArray<OIMFriendApplication *> * _Nullable friendApplications) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void getSendFriendApplicationList(OnBase<List<FriendApplicationInfo>> callBack)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                     | Required | Description        |
| -------------- | -------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md)<List<[FriendApplicationInfo](/class/relation/friendApplication.md)>> | Yes      | Callback interface |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.getSendFriendApplicationList(new OnBase<List<FriendApplicationInfo>>{...})

```

</TabItem>

<TabItem value="Web">

### Function Prototype

``` ts showLineNumbers
IMSDK.getFriendApplicationListAsApplicant(params: {
  offset: number;
  count: number;
},operationID?: string): Promise<WsResponse<FriendApplication[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                    |
| -------------- | -------------- | -------- | ------------------------------ |
| offset         | number         | Yes      | Starting index for pagination  |
| count          | number         | Yes      | Number of records per page     |

### Return Result

| Parameter Name  | Parameter Type                                                                                | Description                  |
| --------------- | --------------------------------------------------------------------------------------------- | ---------------------------- |
| Promise.then()  | Promise<WsResponse<[FriendApplicationItem](/class/relation/friendApplication.md)[]>\>         | List of sent friend requests |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                                    | Failure callback             |

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

IMSDK.getFriendApplicationListAsApplicant({
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
IMSDK.asyncApi('getFriendApplicationListAsApplicant', operationID: string): Promise<FriendApplication[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                            | Description                  |
| --------------- | ------------------------------------------------------------------------- | ---------------------------- |
| Promise.then()  | Promise<[FriendApplicationItem](/class/relation/friendApplication.md)[]\> | List of sent friend requests |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                             | Failure callback             |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getFriendApplicationListAsApplicant', IMSDK.uuid())
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
OpenIMSDK.getFriendApplicationListAsApplicant(req: {
  offset: number;
  count: number;
}, operationID?: string): Promise<FriendApplication[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| offset         | number         | Yes      | Starting index for pagination                                          |
| count          | number         | Yes      | Number of records per page                                             |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                            | Description                  |
| --------------- | ------------------------------------------------------------------------- | ---------------------------- |
| Promise.then()  | Promise<[FriendApplicationItem](/class/relation/friendApplication.md)[]\> | List of sent friend requests |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                            | Failure callback             |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getFriendApplicationListAsApplicant({
  offset: 0,
  count: 10,
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

public static void GetFriendApplicationListAsApplicant(OnBase<List<FriendApplicationInfo>> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                     | Required | Description |
| -------------- | -------------------------------------------------------------------------------------------------- | -------- | ----------- |
| cb             | [OnBase](/callback/onBase.md)<List<[FriendApplicationInfo](/class/relation/friendApplication.md)>> | Yes      | Callback    |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetFriendApplicationListAsApplicant((list,errCode,errMsg)=>{

});

```

</TabItem>


</Tabs>
