---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getBlackList

## Description

:::info

Get the blocklist.

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
 Future<List<BlacklistInfo>> getBlackList({String? operationID})
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                      | Description |
| -------------- | --------------------------------------------------- | ----------- |
| ~              | List<[BlacklistInfo](/class/relation/blackInfo.md)> | Success     |

### Code Example

```dart showLineNumbers
    List<BlacklistInfo> list = await OpenIM.iMManager.friendshipManager.getBlackList();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getBlackListWithOnSuccess:(nullable OIMBlacksInfoCallback)onSuccess
                         onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                             | Description |
| -------------- | ---------------------------------------------------------- | ----------- |
| onSuccess      | NSArray< [OIMBlackInfo](/class/relation/blackInfo.md) \* > | Success     |
| onFailure      | OIMFailureCallback                                         | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getBlackListWithOnSuccess:^(NSArray<OIMBlackInfo *> * _Nullable userInfos) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void getBlackList(OnBase<List<UserInfo>> callBack)

```

### Input Parameters

| Parameter Name | Parameter Type                                                           | Required | Description        |
| -------------- | ------------------------------------------------------------------------ | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md)<List<[UserInfo](/class/user/userInfo.md)>> | Yes      | Callback interface |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.getBlackList(new OnBase<List<UserInfo>>(){...})

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getBlackList(operationID?: string): Promise<WsResponse<BlackUserItem[]>>
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                                        | Description                            |
| --------------- | --------------------------------------------------------------------- | -------------------------------------- |
| Promise.then()  | Promise<WsResponse<[BlackUserItem](/class/relation/blackInfo.md)[]>\> | List of blocklist information objects  |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                            | Failure callback                       |

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

IMSDK.getBlackList()
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
IMSDK.asyncApi('getBlackList', operationID: string): Promise<BlackUserItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                            | Description                           |
| --------------- | --------------------------------------------------------- | ------------------------------------- |
| Promise.then()  | Promise<[BlackUserItem](/class/relation/blackInfo.md)[]\> | List of blocklist information objects |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>             | Failure callback                      |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getBlackList', IMSDK.uuid())
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
OpenIMSDK.getBlackList(operationID?: string): Promise<BlackUserItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                            | Description                           |
| --------------- | --------------------------------------------------------- | ------------------------------------- |
| Promise.then()  | Promise<[BlackUserItem](/class/relation/blackInfo.md)[]\> | List of blocklist information objects |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>            | Failure callback                      |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getBlackList()
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

public static void GetBlackList(OnBase<List<BlackInfo>> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                                               | Required | Description |
| -------------- | ---------------------------------------------------------------------------- | -------- | ----------- |
| cb             | [OnBase](/callback/onBase.md)<List<[BlackInfo](/class/relation/blackInfo.md)>> | Yes      | Callback    |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetBlackList((list,errCode,errMsg)=>{

});

```

</TabItem>
</Tabs>
