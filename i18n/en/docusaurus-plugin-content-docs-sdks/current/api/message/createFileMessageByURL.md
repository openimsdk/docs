---
sidebar_position: 11.2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createFileMessageByURL

## Description

:::info

When you need to store resources yourself, upload the file via API and obtain the download URL, then call this API to create a file message.

:::

:::caution Note

Messages created through this API must be sent via [sendMessageNotOss](/api/message/sendMessageNotOss.md).

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
  Future<Message> createFileMessageByURL({
    required FileElem fileElem,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description |
| -------- | ------------------------------------------------ | -------- | -------- |
| fileElem | [FileElem](/class/message/fileElem.md) | Yes      | Absolute path |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
   Message msg = await OpenIM.iMManager.messageManager.createFileMessageByURL(fileElem: FileElem());
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createFileMessageByURL:(NSString *)fileURL
                                  fileName:(NSString * _Nullable)fileName
                                      size:(NSInteger)size;

```

### Input Parameters

| Parameter Name | Parameter Type  | Required | Description |
| -------- | --------- | -------- | -------- |
| fileURL  | NSString  | Yes      | Absolute path |
| fileName | NSString  | No       | File name |
| size     | NSInteger | Yes      | File size |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createFileMessageByURL:@"" fileName:nil, size:1];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createFileMessageByURL(FileElem fileElem)
```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description |
| -------- | ------------------------------------------------ | -------- | -------- |
| fileElem | [FileElem](/class/message/fileElem.md) | Yes      | Absolute path |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
  Message Message= OpenIMClient.getInstance().messageManager.createFileMessageByURL( fileElem)
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createFileMessageByURL({
  filePath: string;
  fileName: string;
  uuid: string;
  sourceUrl: string;
  fileSize: number;
  fileType?: string;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description                                                                                                                                    |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| filePath  | string   | Yes      | File path, empty string is fine                                                                                                                |
| fileName  | string   | Yes      | File name                                                                                                                                |
| uuid      | string   | Yes      | Unique file ID                                                                                                                             |
| sourceUrl | string   | Yes      | Download address. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| fileSize  | string   | Yes      | File size                                                                                                                                |
| fileType  | string   | Yes      | File type, usually the extension                                                                                                                  |

### Return Result

| Parameter Name        | Parameter Type                                                                     | Description         |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[MessageItem](/class/message/messageInfo.md)>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                         | Failure callback |

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

IMSDK.createFileMessageByURL({
  filePath: '',
  fileName: 'fileName.mp4',
  uuid: 'uuid',
  sourceUrl: '',
  fileSize: 1024,
  fileType: 'mp4',
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
IMSDK.asyncApi('createFileMessageByURL', operationID: string, {
  filePath: string;
  fileName: string;
  uuid: string;
  sourceUrl: string;
  fileSize: number;
  fileType: string;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                                                                         |
| ----------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random                                                                      |
| filePath    | string   | Yes      | File path, empty string is fine                                                                                                     |
| fileName    | string   | Yes      | File name                                                                                                                     |
| uuid        | string   | Yes      | Unique file ID                                                                                                                  |
| sourceUrl   | string   | Yes      | Remote URL address obtained after uploading the file yourself. Needs to be sent via [sendMessageNotOss](/api/message/sendMessageNotOss.md) |
| fileSize    | string   | Yes      | File size                                                                                                                     |
| fileType    | string   | Yes      | File type, usually the extension                                                                                                       |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createFileMessageByURL', IMSDK.uuid(), {
  filePath: '',
  fileName: 'fileName.mp4',
  uuid: 'uuid',
  sourceUrl: 'https://sourceUrl.mp4',
  fileSize: 1024,
  fileType: 'mp4',
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
OpenIMSDK.createFileMessageByURL( {
  filePath: string,
  fileName: string,
  uuid: string,
  sourceUrl: string,
  fileSize: number,
  fileType: string,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                                                                         |
| ----------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| filePath    | string   | Yes      | File path, empty string is fine                                                                                                     |
| fileName    | string   | Yes      | File name                                                                                                                     |
| uuid        | string   | Yes      | Unique file ID                                                                                                                  |
| sourceUrl   | string   | Yes      | Remote URL address obtained after uploading the file yourself. Needs to be sent via [sendMessageNotOss](/api/message/sendMessageNotOss.md) |
| fileSize    | string   | Yes      | File size                                                                                                                     |
| fileType    | string   | Yes      | File type, usually the extension                                                                                                       |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random                                                                      |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example
```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createFileMessageByURL({
  filePath: '',
  fileName: 'fileName.mp4',
  uuid: 'uuid',
  sourceUrl: 'https://sourceUrl.mp4',
  fileSize: 1024,
  fileType: 'mp4',
})
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

public static Message CreateFileMessageByURL(FileElem fileElem)

```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description |
| -------- | ------------------------------------------------ | -------- | -------- |
| fileElem  | [FileElem](/class/message/fileElem.md) | Yes      | Absolute path |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers

var msg = IMSDK.CreateFileMessageByURL(new FileElem(){

});

```

</TabItem>

</Tabs>
