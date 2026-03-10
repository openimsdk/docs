---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# uploadLogs

## Description

:::info

Upload SDK logs to the server for problem analysis and positioning. `line` is the number of lines to upload. When `line` is 0, all logs are uploaded.

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
   Future uploadLogs({
    String? ex,
    int line = 0,
    String? operationID,
  })
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                      | Description |
| -------- | --------------------------------------------- | ---- |
| ~        | ~ | Returns success if no exception is thrown    |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.uploadLogs();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)uploadLogsWithProgress:(OIMUploadProgressCallback)onProgress
                          line:(NSInteger )line
                            ex:(NSString *)ex
                     onSuccess:(OIMSuccessCallback)onSuccess
                     onFailure:(OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                             | Description     |
| --------- | ---------------------------------------------------- | -------- |
| onSuccess | OIMSuccessCallback   | Success return |
| onFailure | OIMFailureCallback | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager uploadLogsWithProgress:^(NSInteger saveBytes, NSInteger currentBytes, NSInteger totalBytes) {
            
} line:0 ex:nil onSuccess:^(NSString * _Nullable data) {
    
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
IMSDK.uploadLogs({
  line: number,
  ex: string,
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| line | number   | Yes      | Number of lines to upload from back to front |         |
| ex | string   | Yes      | Extra fields        |
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

IMSDK.uploadLogs({ line: 10000, ex: "" })
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
IMSDK.asyncApi('uploadLogs', operationID: string, {
  line: number,
  ex: string,
}): Promise<void>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| line | number   | Yes      | Number of lines to upload from back to front |         |
| ex | string   | Yes      | Extra fields        |
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

IMSDK.asyncApi('uploadLogs', IMSDK.uuid(), { line: 10000, ex: "" })
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
OpenIMSDK.uploadLogs({
  line: number,
  ex: string,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| line | number   | Yes      | Number of lines to upload from back to front |         |
| ex | string   | Yes      | Extra fields        |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                    | Description         |
| --------------- | ----------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>     | Failure callback |


### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.uploadLogs({ line: 10000, ex: "" })
  .then(() => {
    // Call successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

</Tabs>
