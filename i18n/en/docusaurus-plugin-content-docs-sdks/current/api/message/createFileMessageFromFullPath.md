---
sidebar_position: 11.1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createFileMessageFromFullPath

## Description

:::info

Create a file message. The SDK extracts file information based on the absolute path and creates the file message internally.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<Message> createFileMessageFromFullPath({
    required String filePath,
    required String fileName,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| filePath | String   | Yes      | Absolute path |
| fileName | String   | Yes      | File name |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
  Message msg = await OpenIM.iMManager.messageManager.createFileMessageFromFullPath(filePath: filePath, fileName: fileName);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createFileMessageFromFullPath:(NSString *)filePath
                                         fileName:(NSString *)fileName;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| filePath | NSString | Yes      | Absolute path |
| fileName | NSString | Yes      | File name |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createFileMessageFromFullPath:@"" fileName:@""];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
   public Message createFileMessageFromFullPath(String filePath, String fileName)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| filePath | String   | Yes      | Absolute path |
| fileName | String   | Yes      | File name |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
       Message Message= OpenIMClient.getInstance().messageManager. createFileMessageFromFullPath( filePath,  fileName)
```

</TabItem>

<TabItem value="Web">

:::caution Note

Only supported when called using ffi in electron.

On the Web side, it is recommended to use [createFileMessageByURL](/api/message/createFileMessageByURL.md) or [createFileMessageByFile](/api/message/createFileMessageByFile.md)

:::

### Function Prototype

```ts showLineNumbers
IMSDK.createFileMessageFromFullPath({
  filePath: string;
  fileName: string;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description                                                                                                                                    |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| filePath  | string   | Yes      | File path, absolute path                                                                                                                |
| fileName  | string   | Yes      | File name                                                                                                                                |

### Return Result

| Parameter Name        | Parameter Type                                                                     | Description         |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[MessageItem](/class/message/messageInfo.md)>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                         | Failure callback |

### Code Example

```js showLineNumbers
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
const { instance: IMSDK } = getWithRenderProcess();


IMSDK.createFileMessageFromFullPath({
  filePath: 'file://...',
  fileName: 'fileName.mp4',
})
  .then(({ data }) => {
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
IMSDK.asyncApi('createFileMessageFromFullPath', operationID: string, {
  filePath: string,
  fileName: string
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| filePath    | number   | Yes      | Absolute file path                                            |
| fileName    | string   | Yes      | File name                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createFileMessageFromFullPath', IMSDK.uuid(), {
  filePath: '',
  fileName: '',
})
  .then((data) => {
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
OpenIMSDK.createFileMessageFromFullPath({
  filePath: string,
  fileName: string
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| filePath    | number   | Yes      | Absolute file path                                            |
| fileName    | string   | Yes      | File name                                                |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |



### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createFileMessageFromFullPath({
  filePath: '',
  fileName: '',
})
  .then(({ data }) => {
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

public static Message CreateFileMessageFromFullPath(string fileFullPath, string fileName)

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| filePath | string | Yes      | Absolute path |
| fileName | string | Yes      | File name |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers

var msg = IMSDK.CreateFileMessageFromFullPath(fileFullPath,fileName);

```

</TabItem>

</Tabs>
