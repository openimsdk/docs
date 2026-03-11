---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getSelfUserInfo

## Description

:::info

Get the basic information of the currently logged-in user.

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
  Future<UserInfo> getSelfUserInfo({
    String? operationID,
  })
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                      | Description |
| -------- | --------------------------------------------- | ---- |
| ~        | [UserInfo](/class/user/userInfo.md) | Success return    |

### Code Example

```dart showLineNumbers
    UserInfo info = await OpenIM.iMManager.userManager.getSelfUserInfo();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getSelfInfoWithOnSuccess:(OIMUserInfoCallback)onSuccess
                       onFailure:(OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                             | Description     |
| --------- | ---------------------------------------------------- | -------- |
| onSuccess | [OIMUserInfo](/class/user/userInfo.md)     | Success return |
| onFailure | OIMFailureCallback | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getSelfInfoWithOnSuccess:^(OIMUserInfo * _Nullable userInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void getSelfUserInfo(OnBase<UserInfo> callBack)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                               | Required | Description     |
| -------- | -------------------------------------------------------------------------------------- | -------- | -------- |
| callBack | [OnBase](/callback/onBase.md)<[UserInfo](/class/user/userInfo.md)> | Yes      | Callback interface |

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.getSelfUserInfo(new OnBase<UserInfo>(){…})

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getSelfUserInfo(operationID?: string): Promise<WsResponse<SelfUserInfo>>
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                                                | Description         |
| --------------- | ----------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[SelfUserInfo](/class/user/userInfo.md)>\> | User info object |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                    | Failure callback |

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

IMSDK.getSelfUserInfo()
  .then(({ data }) => {
    // data: Personal info of current logged-in user
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('getSelfUserInfo', operationID: string): Promise<SelfUserInfo>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                    | Description         |
| --------------- | ----------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[SelfUserInfo](/class/user/userInfo.md)\> | User info object |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>     | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getSelfUserInfo', IMSDK.uuid())
  .then((data) => {
    // data: Personal info of current logged-in user
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.getSelfUserInfo(operationID?: string): Promise<SelfUserInfo>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                    | Description         |
| --------------- | ----------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[SelfUserInfo](/class/user/userInfo.md)\> | User info object |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>     | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getSelfUserInfo()
  .then((data) => {
    // data: Personal info of current logged-in user
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void GetSelfUserInfo(OnBase<UserInfo> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                               | Required | Description     |
| -------- | -------------------------------------------------------------------------------------- | -------- | -------- |
| cb       | [OnBase](/callback/onBase.md)<[UserInfo](/class/user/userInfo.md)> | Yes      | Callback |


### Code Example

```C# showLineNumbers

IMSDK.GetSelfUserInfo((userInfo,errCode,errMsg)=>{

});

```

</TabItem>
</Tabs>

