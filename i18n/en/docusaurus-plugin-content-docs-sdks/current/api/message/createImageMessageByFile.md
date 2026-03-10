---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createImageMessageByFile

## Description

:::info

Create an image message based on a file object.

:::

:::caution Note

Only supported on the Web side.

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
IMSDK.createImageMessageByFile({
  sourcePicture: PicBaseInfo;
  bigPicture: PicBaseInfo;
  snapshotPicture: PicBaseInfo;
  sourcePath: string;
  file: File;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name        | Parameter Type                                               | Required | Description                                       |
| --------------- | ------------------------------------------------------ | -------- | ------------------------------------------ |
| sourcePicture   | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Original image information                               |
| bigPicture      | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Large image information                               |
| snapshotPicture | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Thumbnail information                             |
| sourcePath      | string                                                 | Yes      | Absolute path of the image on the local machine; if none, empty string is fine |
| file            | File                                                   | Yes      | File object                                   |

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

const picBaseInfo = {
  uuid: "uuid",
  type: imageFile.type,
  size: imageFile.size,
  width: 1024,
  height: 1024,
  url: "",
}

IMSDK.createImageMessageByFile({
  sourcePicture: picBaseInfo;
  bigPicture: picBaseInfo;
  snapshotPicture: picBaseInfo;
  sourcePath: imageFile.path;
  file: imageFile
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
