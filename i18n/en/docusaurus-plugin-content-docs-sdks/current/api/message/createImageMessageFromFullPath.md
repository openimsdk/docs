---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createImageMessageFromFullPath

## Description

:::info

Create an image message. The SDK extracts image information based on the absolute path and creates the image message internally.

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
Future<Message> createImageMessageFromFullPath({
    required String imagePath,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description     |
| --------- | -------- | -------- | -------- |
| imagePath | String   | Yes      | Absolute path |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
   Message msg = await OpenIM.iMManager.messageManager.createImageMessageFromFullPath(imagePath: imagePath);
    //todo

```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createImageMessageFromFullPath:(NSString *)imagePath;

```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description     |
| --------- | -------- | -------- | -------- |
| imagePath | NSString | Yes      | Absolute path |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createImageMessageFromFullPath:@""];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
   public Message createImageMessageFromFullPath(String imagePath)
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description     |
| --------- | -------- | -------- | -------- |
| imagePath | String   | Yes      | Absolute path |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
         Message Message= OpenIMClient.getInstance().messageManager. createImageMessageFromFullPath( imagePath);
    //todo

```

</TabItem>

<TabItem value="Web">

:::caution Note

Only supported when called using ffi in electron.

On the Web side, it is recommended to use [createImageMessageByURL](/api/message/createImageMessageByURL.md) or [createImageMessageByFile](/api/message/createImageMessageByFile.md).

:::

### Function Prototype

```ts showLineNumbers
IMSDK.createImageMessageFromFullPath(imagePath: string, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description                                                                                                                                    |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| imagePath  | string   | Yes      | File path, absolute path                                                                                                                |

### Return Result

| Parameter Name        | Parameter Type                                                                     | Description         |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[MessageItem](/class/message/messageInfo.md)>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                         | Failure callback |

### Code Example

```js showLineNumbers
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
const { instance: IMSDK } = getWithRenderProcess();


IMSDK.createImageMessageFromFullPath('file://...')
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
IMSDK.asyncApi('createImageMessageFromFullPath', operationID: string, imagePath: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| imagePath   | string   | Yes      | Absolute image path                                            |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createImageMessageFromFullPath', IMSDK.uuid(), 'imagePath')
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
OpenIMSDK.createImageMessageFromFullPath(imagePath: string, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| imagePath   | string   | Yes      | Absolute image path                                            |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createImageMessageFromFullPath('imagePath')
  .then((data) => {
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

public static Message CreateImageMessageFromFullPath(string imageFullPath)

```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description     |
| --------- | -------- | -------- | -------- |
| imageFullPath | string   | Yes      | Absolute path |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK.CreateImageMessageFromFullPath(imageFullPath);

```

</TabItem>

</Tabs>
