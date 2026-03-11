---
sidebar_position: 11
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createVideoMessageByFile

## Description

:::info

Create a video message based on a file object.

:::

:::caution Note

Only supported on the Web side, and it is best not to use it for large file uploads. For files larger than 1G, it is recommended to use the [createVideoMessageByURL](/api/message/createVideoMessageByURL.md) API.

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
IMSDK.createVideoMessageByFile({
  videoPath: string;
  duration: number;
  videoType: string;
  snapshotPath: string;
  videoUUID: string;
  videoUrl: string;
  videoSize: number;
  snapshotUUID: string;
  snapshotSize: number;
  snapshotUrl: string;
  snapshotWidth: number;
  snapshotHeight: number;
  snapShotType: string;
  videoFile: File;
  snapshotFile: File;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description                                                                                                                                        |
| -------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | 
| videoPath      | string   | Yes      | Absolute file path, if none, empty string is fine                                                                                                          |
| duration       | number   | Yes      | Video duration                                                                                                                                    |
| videoType      | string   | Yes      | File type, usually the extension                                                                                                                      |
| snapshotPath   | string   | Yes      | Video thumbnail path, empty string is fine                                                                                                                                             | 
| videoUUID      | string   | Yes      | Unique video file ID                                                                                                                             |
| videoUrl       | string   | Yes      | Video download address. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string       |
| videoSize      | number   | Yes      | File size                                                                                                                                    |
| snapshotUUID   | string   | Yes      | Unique video thumbnail ID                                                                                                                             |
| snapshotSize   | number   | Yes      | Video thumbnail size                                                                                                                              |
| snapshotUrl    | string   | Yes      | Video thumbnail download address. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| snapshotWidth  | number   | Yes      | Video thumbnail width                                                                                                                              |
| snapshotHeight | number   | Yes      | Video thumbnail height                                                                                                                              |
| snapShotType   | string   | Yes      | Video thumbnail type, usually the extension                                                                                                                |                                |
| videoFile      | File     | Yes      | Video file object                                                                                                                                |
| snapshotFile   | File     | Yes      | Video thumbnail file object                                                                                                                          |

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

IMSDK.createVideoMessageByFile({
  videoPath: videoFile.path,
  duration: 6,
  videoType: videoFile.type,
  snapshotPath: snapshotFile.path,
  videoUUID: '',
  videoUrl: '',
  videoSize: videoFile.size,
  snapshotUUID: '',
  snapshotSize: snapshotFile.size,
  snapshotUrl: '',
  snapshotWidth: 1024,
  snapshotHeight: 1024,
  snapShotType: snapshotFile.type,
  videoFile,
  snapshotFile,
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
