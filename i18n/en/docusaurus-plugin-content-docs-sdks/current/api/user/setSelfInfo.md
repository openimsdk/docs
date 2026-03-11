---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setSelfInfo

## Description

:::info

Modify the personal information of the currently logged-in user. Includes the Ex field.

:::

:::caution Note




**Related Callbacks**:    
[onSelfInfoUpdated](/callback/onSelfUserInfoUpdate.md)  


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
  Future<String?> setSelfInfo({
    String? nickname,
    String? faceURL,
    int? globalRecvMsgOpt,
    String? ex,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description           |
| -------------- | -------- | -------- | -------------- |
| nickname       | String?  | No       | User nickname       |
| faceURL        | String?  | No       | User avatar URL       |
| globalRecvMsgOpt | int?     | No       | Global receive offline push settings              |
| ex             | String?  | No       | Extension information       |

### Return Result

| Parameter Name | Parameter Type | Description                 |
| -------- | -------- | -------------------- |
| ~        | ~        | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
   await OpenIM.iMManager.userManager.setSelfInfo(
      nickname: 'lucy',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)setSelfInfo:(OIMUserInfo *)userInfo
          onSuccess:(OIMSuccessCallback)onSuccess
          onFailure:(OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description         |
| -------- | ------------------------------------------------ | -------- | ------------ |
| userInfo | [OIMUserInfo](/class/user/userInfo.md) | Yes      | User related information |

### Return Result

| Parameter Name  | Parameter Type                                               | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

OIMUserInfo *info = [OIMUserInfo new];
info.nickname = @"";
info.faceURL = @"";

[OIMManager.manager setSelfInfo:info
                      onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
 public void setSelfInfo(OnBase<String> base, UserInfoReq userInfoReq)
```

### Input Parameters

The UserInfoReq request structure properties are as follows:

| Parameter Name       | Parameter Type | Required | Description           |
| -------------- | -------- | -------- | -------------- |
| userID       | String  | Yes      | User ID       |
| nickname        | String  | No       | User nickname       |
| faceURL | String     | No       | User avatar              |
| ex             | String  | No       | Extension parameter       |
| globalRecvMsgOpt             | Integer  | No       | Global Do Not Disturb, 1: block messages; 2: receive messages but do not notify; 0: normal       |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().userInfoManager.setSelfInfo(new OnBase<String>(){
    @Override
    public void onError(int code, String error) {
      // todo: Handle error message
    }
    @Override
    public void onSuccess(String data) {
      // todo: Request successful
    }
},userInfoReq);

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.setSelfInfo(userInfo: Partial<Omit<SelfUserInfo, 'userID'>>, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type                                                                   | Required | Description     |
| -------- | -------------------------------------------------------------------------- | -------- | -------- |
| userInfo | Partial<Omit<[SelfUserInfo](/class/user/userInfo.md), 'userID'>> | Yes      | Personal info |

### Return Result

| Parameter Name  | Parameter Type                                             | Description         |
| --------------- | ---------------------------------------------------- | ------------ |
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

const userInfo = {
  nickname: '', // Nickname to modify, optional
  faceURL: '', // Avatar to modify, optional
  ex: '', // Extension field content to modify, optional
};
IMSDK.setSelfInfo(userInfo)
  .then(() => {
    // Call successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('setSelfInfo', operationID: string, userInfo: Partial<Omit<SelfUserInfo, 'userID'>>): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type                                                                   | Required | Description                                                    |
| ----------- | -------------------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                                                     | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| userInfo    | Partial<Omit<[SelfUserInfo](/class/user/userInfo.md), 'userID'>> | Yes      | Personal info                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

const userInfo = {
  nickname: '', // Nickname to modify, optional
  faceURL: '', // Avatar to modify, optional
  ex: '', // Extension field content to modify, optional
};
IMSDK.asyncApi('setSelfInfo', IMSDK.uuid(), userInfo)
  .then(() => {
    // Call successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.setSelfInfo(
  userInfo: Partial<SelfUserInfo>,
  operationID?: string
): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type                                                                   | Required | Description                                                    |
| ----------- | -------------------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| userInfo    | Partial<[SelfUserInfo](/class/user/userInfo.md)> | Yes      | Personal info                                                |
| operationID | string                                                                     | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

const userInfo = {
  nickname: '', // Nickname to modify, optional
  faceURL: '', // Avatar to modify, optional
  ex: '', // Extension field content to modify, optional
};

OpenIMSDK.setSelfInfo(userInfo)
  .then(() => {
    // Call successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void SetSelfInfo(onBase<bool> cb, UserInfo userInfo)

```

### Input Parameters

| Parameter Name       | Parameter Type                                | Required | Description                           |
| -------------- | --------------------------------------- | -------- | ------------------------------ |
| cb | [OnBase](/callback/onBase.md) | Yes      | Callback                       |
| userInfo | [UserInfo](/class/user/userInfo.md) | Yes      | Name                           |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.SetSelfInfo((suc,errCode,errMsg)=>{

},userInfo);

```

</TabItem>
</Tabs>
