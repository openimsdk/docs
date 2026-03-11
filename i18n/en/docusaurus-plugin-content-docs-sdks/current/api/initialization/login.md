---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# login

## Description

:::info

User login. You must wait for the success callback (not just a successful return) before calling other APIs.
You need to call the login API in the following scenarios:  
(1) After the APP starts, retrieve a new token from the server;  
(2) After the token expires post-login, retrieve a new token from the server;  
(3) After being forcefully logged out by the APP administrator, retrieve a new token from the server;  
(4) After the user voluntarily logs out, retrieve a new token from the server.  

You do NOT need to call the login API in the following scenarios:  
(1) The user's network disconnects and reconnects;  
(2) While a login process is already underway and not yet completed.

:::

:::caution Note

(1) If a failure callback occurs, retrying is meaningless. View the error message, check parameters, adjust the code, and then continue;  
(2) In one App, the SDK does not support logging in with multiple accounts at the same time. You must call logout first before logging into another account;  
(3) With the exception of setting listeners, initialization, and getting the login status, all other APIs must be called only after the SDK login callback succeeds;    
(4) A successful login callback may not mean the IM login is truly successful. You need to observe the IM connection status callback. Only when [onConnectSuccess](/callback/onConnectSuccess.md) is received does it mean login and connection to the IM are successful.

**Related Callbacks**:      
[onConnectFailed](/callback/onConnectFailed.md)   
[onConnecting](/callback/onConnecting.md)   
[onConnectSuccess](/callback/onConnectSuccess.md)   
[onUserTokenExpired](/callback/onUserTokenExpired.md)
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
  Future<UserInfo> login({
    required String userID,
    required String token,
    String? operationID,
    Future<UserInfo> Function()? defaultValue,
  })
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                |
| ----------- | -------- | -------- | ------------------------------------------------------------------- |
| operationID | String?  | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random             |
| userID      | String   | Yes      | IM user userID                                                      |
| token       | String   | Yes      | OpenIM user token, obtained via user_token after business backend validates credentials |

### Return Result

| Name | Field Type                                      | Description           |
| ---- | --------------------------------------------- | -------------- |
| ~    | [UserInfo](/class/user/userInfo.md) | Current logged in user info |

### Code Example

```dart showLineNumbers
   UserInfo userInfo = await OpenIM.iMManager.login(userID: '', token: '');
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers
- (void)login:(NSString *)userID
        token:(NSString *)token
    onSuccess:(nullable OIMSuccessCallback)onSuccess
    onFailure:(nullable OIMFailureCallback)onFailure;
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                |
| ----------- | -------- | -------- | ------------------------------------------------------------------- |
| operationID | NSString | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random             |
| userID      | NSString | Yes      | IM user userID                                                      |
| token       | NSString | Yes      | OpenIM user token, obtained via user_token after business backend validates credentials |

### Return Result

| Parameter Name  | Parameter Type                                               | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager login:@"" // userID comes from your business server
                    token:@""  // token needs to be obtained by your business server from OpenIM server
                onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
     public void login(@NotNull final OnBase<String> callBack, String uid, String token)
```

### Parameter Details

| Parameter Name | Parameter Type                                | Required | Description                                                                |
| -------- | --------------------------------------- | -------- | ------------------------------------------------------------------- |
| callBack | [OnBase](/callback/onBase.md) | Yes      | Callback interface                                                            |
| userID   | String                                  | Yes      | IM user userID                                                      |
| token    | String                                  | Yes      | OpenIM user token, obtained via user_token after business backend validates credentials |

### Code Example

```java showLineNumbers
     OpenIMClient.getInstance().login(new OnBase<String>() {
                        @Override
                        public void onError(int code, String error) {

                        }

                        @Override
                        public void onSuccess(String data) {

                        }
                    }, userID, imToken);
```

</TabItem>

<TabItem value="Web">

:::caution Note

`@openim/wasm-client-sdk` is the solution for most browser scenarios and will store historical messages, whereas `@openim/client-sdk` is a lighter solution without any storage and also supports use in Mini Programs.

:::


### Function Prototype

```ts showLineNumbers
IMSDK.login(config: InitAndLoginConfig, operationID?: string): Promise<WsResponse>
```

- When called in Electron using ffi introduction
```ts showLineNumbers
IMSDK.login(config: { userID: string; token: string }, operationID?: string): Promise<WsResponse>
```

### Input Parameters (Browser/MiniProgram)

| Parameter Name    | Parameter Type                                              | Required | Description                                                    |
| ----------- | ----------------------------------------------------- | -------- | ------------------------------------------------------- |
| config      | [InitAndLoginConfig](/class/init/config.md) | Yes      | Initialization & Login parameter                                        |
| operationID | string                                                | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |


### Input Parameters (Electron)

| Parameter Name    | Parameter Type                                              | Required | Description                                                    |
| ----------- | ----------------------------------------------------- | -------- | ------------------------------------------------------- |
| userID | string                                                | Yes      | IM user userID |
| token | string                                                | Yes      | OpenIM user token, obtained via user_token after business backend validates credentials |


### Return Result

| Parameter Name  | Parameter Type                                             | Description         |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

const config = {
    userID: string;       // IM user userID
    token: string;        // IM user token
    platformID: number;   // Current login platform ID
    apiAddr: string;   // IM API address, usually `http://your-server-ip:10002` or `https://your-server-ip/api`
    wsAddr: string;    // IM WS address, usually `ws://your-server-ip:10001` or `wss://your-server-ip/msg_gateway`
}
IMSDK.login(config)
  .then(() => {
    // Login successful
  })
  .catch(({ errCode, errMsg }) => {
    // Login failed
  });
```

- When called in Electron using ffi introduction

```js showLineNumbers
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';

const { instance: IMSDK } = getWithRenderProcess();

await IMSDK.login({
  userID: 'your-user-id',
  token: 'your-token',
});
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('login', operationID: string, {
  userID: string,
  token: string
}): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                       |
| ----------- | -------- | -------- | -------------------------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random                    |
| userID      | string   | Yes      | IM user userID                                                             |
| token       | string   | Yes      | OpenIM user token, obtained via `auth/user_token` after business backend validates credentials |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('login', IMSDK.uuid(), {
  userID: '',
  token: '',
})
  .then(() => {
    // Login successful
  })
  .catch(({ errCode, errMsg }) => {
    // Login failed
  });
```

</TabItem>

<TabItem value="React-Native">

### Function Prototype

```js showLineNumbers
OpenIMSDK.login({
  userID:string, 
  token:string
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                |
| ----------- | -------- | -------- | ------------------------------------------------------------------- |
| userID      | String   | Yes      | IM user userID                                                      |
| token       | String   | Yes      | OpenIM user token, obtained via user_token after business backend validates credentials |
| operationID | String   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random             |

### Return Result

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from '@openim/rn-client-sdk';

OpenIMSDK.login({
  userID: 'IM user ID',
  token: 'IM user token',
})
  .then(() => {
    // Login successful
  })
  .catch((error) => {
    // Login failed
  });
```
</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void Login(OnBase<bool> cb, string uid, string token)

```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                |
| ----------- | -------- | -------- | ------------------------------------------------------------------- |
| cb          | [OnBase](/callback/onBase.md)| Yes      | Login success or failure callback |
| uid         | string   | Yes      | IM user userID                                                      |
| token       | string   | Yes      | OpenIM user token, obtained via user_token after business backend validates credentials |

### Code Example

```C# showLineNumbers

IMSDK.Login((suc, errCode, errMsg) =>
{
},userId, token);

```
</TabItem>

</Tabs>
