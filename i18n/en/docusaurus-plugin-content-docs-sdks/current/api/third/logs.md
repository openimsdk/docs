---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# logs

## Description

:::info

This interface is used to print log information outside the application, which is convenient for the SDK to uniformly collect and upload to the server for problem analysis and positioning.

:::

:::caution Note

This interface is expected to be updated.

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
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
   Future logs({
    int logLevel = 5,
    String? file,
    int line = 0,
    String? msgs,
    String? err,
    List<dynamic>? keyAndValues,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| logLevel | int   | No       | Log print level         |
| file | String   | No       | File name        |
| line | int   | No       | Record line number         |
| err | String   | No       | Error info         |
| keyAndValues | List   | No       | Parameters         |

### Return Result

None

### Code Example

```dart showLineNumbers
   OpenIM.iMManager.logs();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)logs:(NSString *)file
        line:(NSInteger)line
        msgs:(NSString *)msgs
         err:(NSString *)err
keyAndValues:(NSArray *)keyAndValues
    logLevel:(NSInteger )logLevel;

```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| logLevel | NSInteger   | No       | Log print level         |
| file | NSString   | No       | File name        |
| line | NSInteger   | No       | Record line number         |
| err | NSString   | No       | Error info         |
| keyAndValues | NSArray   | No       | Parameters         |

### Return Result

None

### Code Example

```swift showLineNumbers

[OIMManager.manager logs:@""
                        line:0
                        msgs:@""
                         err:@""
                keyAndValues:@[]
                    logLevel:5];

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

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.getSelfUserInfo(new OnBase<UserInfo>(){…})

```

</TabItem>

<TabItem value="Web">

:::caution Note

`@openim/client-sdk` and `@openim/wasm-client-sdk` do not provide this method. It can only be called if `@openim/electron-client-sdk` is introduced in electron using the ffi method.

:::

### Function Prototype

```ts showLineNumbers
IMSDK.logs({
  logLevel: number,
  file: string,
  line: number,
  msgs: string,
  err: string,
  keyAndValue: string
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| logLevel | number   | No       | Log print level         |
| file | string   | No       | File name        |
| line | number   | No       | Record line number         |
| msgs | string   | No       | Message info         |
| err | string   | No       | Error info         |
| keyAndValues | string   | No       | Parameters         |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                                | Description         |
| --------------- | ----------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                    | Failure callback |

### Code Example

```js showLineNumbers
// use in electron with ffi
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
const { instance: IMSDK } = getWithRenderProcess();

IMSDK.logs({
  logLevel: 5,
  file: 'file',
  line: 10,
  msgs: 'msgs',
  err: 'err',
  keyAndValue: 'keyAndValue'
})
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
IMSDK.asyncApi('logs', operationID: string, {
  logLevel: number,
  file: string,
  line: number,
  msgs: string,
  err: string,
  keyAndValue: string
}): Promise<void>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| logLevel | number   | No       | Log print level         |
| file | string   | No       | File name        |
| line | number   | No       | Record line number         |
| msgs | string   | No       | Message info         |
| err | string   | No       | Error info         |
| keyAndValues | string   | No       | Parameters         |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                    | Description         |
| --------------- | ----------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>     | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('logs', IMSDK.uuid(), {
  logLevel: 5,
  file: 'file',
  line: 10,
  msgs: 'msgs',
  err: 'err',
  keyAndValue: 'keyAndValue'
})
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
OpenIMSDK.logs({
  logLevel: number,
  file: string,
  line: number,
  msgs: string,
  err: string,
  keyAndValue: string
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| logLevel | number   | No       | Log print level         |
| file | string   | No       | File name        |
| line | number   | No       | Record line number         |
| msgs | string   | No       | Message info         |
| err | string   | No       | Error info         |
| keyAndValues | string   | No       | Parameters         |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                    | Description         |
| --------------- | ----------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>     | Failure callback |


### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.logs({
  logLevel: 5,
  file: 'file',
  line: 10,
  msgs: 'msgs',
  err: 'err',
  keyAndValue: 'keyAndValue'
})
  .then(() => {
    // Call successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

</Tabs>
