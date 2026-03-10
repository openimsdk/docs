---
sidebar_position: 8
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createSoundMessageByFile

## Description

:::info

Create an audio message based on a file object.

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
IMSDK.createSoundMessageByFile({
  uuid: string;
  soundPath: string;
  sourceUrl: string;
  dataSize: number;
  duration: number;
  soundType: string;
  file: File;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description                                                                                                                                    |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| soundPath | string   | Yes      | Absolute file path, if none, empty string is fine                                                                                                      |
| duration  | number   | Yes      | Recording duration                                                                                                                                |
| uuid      | string   | Yes      | Unique file ID                                                                                                                             |
| sourceUrl | string   | Yes      | Recording download address. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| dataSize  | string   | Yes      | File size                                                                                                                                |
| soundType | string   | Yes      | File type, usually the extension                                                                                                                  |
| file      | File     | Yes      | File object                                                                                                                                |

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

IMSDK.createSoundMessageByFile({
  soundPath: soundFile.path,
  duration: 6,
  uuid: 'uuid',
  sourceUrl: '',
  dataSize: soundFile.size,
  soundType: soundFile.type,
  file: soundFile,
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
