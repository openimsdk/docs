---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getLoginUserID

## Description

:::info

Get the userID of the currently logged-in user.

:::

:::caution Note

Ensure this API is called after a successful login callback.

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
  Future<String> getLoginUserID()
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type | Description    |
| -------- | -------- | ------- |
| ~        | String   | User ID |

### Code Example

```dar showLineNumbers
String userID = await OpenIM.iMManager.getLoginUserID();

```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers
- (NSString *)getLoginUserID;
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type | Description    |
| -------- | -------- | ------- |
| NSString | userID   | User ID |

### Code Example

```swift showLineNumbers

NSString *userID = [OIMManager.manager getLoginUserID];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
  public String getLoginUserID()
```

### Return Result

| Parameter Name | Parameter Type | Description    |
| -------- | -------- | ------- |
| String   | userID   | User ID |

### Code Example

```java showLineNumbers
       String userID = OpenIMClient.getInstance().getLoginUserID();
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getLoginUserID(operationID?: string): Promise<WsResponse<string>>;
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                             | Description            |
| --------------- | ---------------------------------------------------- | --------------- |
| Promise.then()  | Promise<WsResponse<string\>\>                        | Current logged user ID |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback    |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.getLoginUserID()
  .then(({ data }) => {
    // data: Current logged user userID
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi("getLoginUserID",operationID: string): Promise<string>;
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                                | Description            |
| --------------- | ------------------------------------------------------- | --------------- |
| Promise.then()  | Promise<string\>                                        | Current logged user ID |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback    |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getLoginUserID', 'operationID')
  .then((data) => {
    // data: Current logged user userID
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```js showLineNumbers
OpenIMSDK.getLoginUserID(operationID?: string): Promise<string>
```

### Return Result

| Parameter Name  | Parameter Type                                                | Description            |
| --------------- | ------------------------------------------------------- | --------------- |
| Promise.then()  | Promise<string\>                                        | Current logged user ID |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback    |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getLoginUserID();
  .then((data) => {
    // data: Current logged user userID
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers
public static string GetLoginUserId()
```

### Return Result

| Parameter Type    | Description            |
| -----------| --------------- |
| string     | Current logged user ID |

### Code Example

```C# showLineNumbers
var userId = IMSDK.GetLoginUserId();
```

</TabItem>

</Tabs>
