---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getLoginStatus

## Description

:::info

Get the user's login status. If this API is called while the SDK is not yet initialized, it will return -1001 (Uninitialized).

:::

:::caution Note

Note the difference between connection status and login status. `login` can only be called when in the unlogged status.

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
  Future<int?> getLoginStatus()
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type | Description                                    |
| -------- | -------- | --------------------------------------- |
| ~        | [int](/enum/loginStatus.md)     | Login status. 1: unlogged, 2: logging, 3: logged |

### Code Example

```dart showLineNumbers
   int? status = await OpenIM.iMManager.getLoginStatus();
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers
- (OIMLoginStatus)getLoginStatus;
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type | Description                                    |
| --------- | -------- | --------------------------------------- |
| status | [OIMLoginStatus](/enum/loginStatus.md)   | Login status. 1: unlogged, 2: logging, 3: logged |

### Code Example

```swift showLineNumbers

OIMLoginStatus status = [OIMManager.manager getLoginStatus];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
    public int getLoginStatus()
```

### Return Result

| Parameter Name | Parameter Type | Description                                    |
| -------- | -------- | --------------------------------------- |
| ~        | int      | [LoginStatus](/enum/loginStatus.md) Login status |

### Code Example

```java showLineNumbers
    int status = OpenIMClient.getInstance().getLoginStatus();
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getLoginStatus(operationID?:string): Promise<WsResponse<LoginStatus>>;
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                                            | Description         |
| --------------- | ------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[LoginStatus](/enum/loginStatus.md)>\> | Login status     |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                | Failure callback |

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

IMSDK.getLoginStatus()
  .then(({ data }) => {
    // data: LoginStatus
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('getLoginStatus',operationID: string): Promise<LoginStatus>;
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                                | Description             |
| --------------- | ------------------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[LoginStatus](/enum/loginStatus.md)\> | Current user login status |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback     |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getLoginStatus', 'operationID');
  .then((data) => {
    // data: LoginStatus
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="React-Native">

### Function Prototype

```js showLineNumbers
OpenIMSDK.getLoginStatus(operationID?: string): Promise<LoginStatus>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                    |
| -------- | -------- | -------- | --------------------------------------- |
| operationID        | string     | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                | Description             |
| --------------- | ------------------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[LoginStatus](/enum/loginStatus.md)\> | Current user login status |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback     |


### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getLoginStatus();
  .then((data) => {
    // data: LoginStatus
  })
  .catch((error) => {
    // Call failed
  });
```
</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static LoginStatus GetLoginStatus()

```
### Return Result
| Type                                                | Description             |
| ------| ---------------- |
| enum  | Empty(0),Logout(1),Logging(2),Logged(3)  |


### Code Example

```C# showLineNumbers
var status = IMSDK.GetLoginStatus()
if(status == LoginStatus.Logout){

}else if(status == LoginStatus.Logging){

}else if(status == LoginStatus.Logged){

}
```
</TabItem>
</Tabs>
