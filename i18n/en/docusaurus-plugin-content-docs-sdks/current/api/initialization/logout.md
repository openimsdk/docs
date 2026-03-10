---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# logout


## Description

:::info

The APP needs to wait for the logout callback to succeed.   
After a successful logout, you will no longer receive new messages sent by others.
If switching accounts, you need to wait for user A's logout callback to succeed before calling user B's login, otherwise the login may fail.  
If the APP lifecycle is consistent with the SDK lifecycle, you can call logout when the user exits the APP.

:::

:::caution Note

(1) When receiving [onKickedOffline](/callback/onKickedOffline.md) and [onUserTokenExpired](/callback/onUserTokenExpired.md) from the SDK, it means being kicked offline, the token is invalid, or the token has expired.       
After the SDK triggers this internally, it will automatically call logout, so there is no need to make an external call to the logout function.

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
  Future<dynamic> logout({String? operationID})
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type | Description             |
| -------- | -------- | ---------------- |
| ~        | ~        | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.logout();
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)logoutWithOnSuccess:(nullable OIMSuccessCallback)onSuccess
                  onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                               | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager logoutWithOnSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
     public void logout(OnBase<String> base)
```

### Parameter Details

| Parameter Name | Parameter Type                                | Required | Description     |
| -------- | --------------------------------------- | -------- | -------- |
| base     | [OnBase](/callback/onBase.md) | Yes      | Callback interface |

### Code Example

```java showLineNumbers
   OpenIMClient.getInstance().logout(new OnBase<String>() {
                    @Override
                    public void onError(int code, String error) {
                     // Logout failed

                    }

                    @Override
                    public void onSuccess(String data) {
                      // Logout succeeded

                    }
                });
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers

IMSDK.logout(): Promise<WsResponse>;

```

### Input Parameters

None

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

const status = IMSDK.logout()
  .then(() => {
    // Logout successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers

IMSDK.asyncApi('logout',operationID: string): Promise<void>;

```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('logout', IMSDK.uuid())
  .then(() => {
    // Logout successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="React-Native">

### Function Prototype

```js showLineNumbers
OpenIMSDK.logout(operationID?: string): Promise<void>
```

### Parameter Details

| Parameter Name | Parameter Type                                | Required | Description     |
| -------- | --------------------------------------- | -------- | -------- |
| operationID     | string | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |


### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.logout()
  .then(() => {
    // Logout successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void Logout(onBase<bool> cb)

```

### Parameter Details

| Parameter Name | Parameter Type                                | Required | Description     |
| -------- | --------------------------------------- | -------- | -------- |
| cb       | [onBase](/callback/onBase.md)  | Yes      | Success or failure callback |


### Code Example

```C# showLineNumbers
IMSDK.Logout((suc, errCode, errMsg) =>
{
});
```

</TabItem>
</Tabs>
