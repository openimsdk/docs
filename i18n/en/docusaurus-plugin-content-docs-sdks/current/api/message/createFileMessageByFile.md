---
sidebar_position: 11.3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createFileMessageByFile

## Description

:::info

Create a file message based on a file object.

:::

:::caution Note

Only supported on the Web side, and it is best not to use it for large file uploads. For files larger than 1G, it is recommended to use the [createFileMessageByURL](/api/message/createFileMessageByURL.md) interface.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
]
}>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createFileMessageByFile({
  filePath: string;
  fileName: string;
  uuid: string;
  sourceUrl: string;
  fileSize: number;
  fileType: string;
  file: File;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description                                   |
| --------- | -------- | -------- | -------------------------------------- |
| filePath  | string   | Yes      | Absolute file path, if none, empty string is fine |
| fileName  | string   | Yes      | File name                               |
| uuid      | string   | Yes      | Unique file ID                            |
| sourceUrl | string   | Yes      | Empty string is fine                           |
| fileSize  | number   | Yes      | File size                               |
| fileType  | string   | Yes      | File type                               |
| file      | File     | Yes      | File object                               |

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

IMSDK.createFileMessageByFile({
  filePath: videoFile.path || '',
  fileName: videoFile.name,
  uuid: 'uuid',
  sourceUrl: '',
  fileSize: videoFile.size,
  fileType: videoFile.type,
  file: videoFile,
})
  .then(({ data }) => {
    // Call successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

</Tabs>
