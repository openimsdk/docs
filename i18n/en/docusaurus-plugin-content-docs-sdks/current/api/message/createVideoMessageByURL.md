---
sidebar_position: 10
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createVideoMessageByURL

## Description

:::info

When you need to store resources yourself, upload the video and thumbnail via API, obtain the download URLs, and then create a video message.

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
  Future<Message> createVideoMessageByURL({
    required VideoElem videoElem,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name  | Parameter Type                                           | Required | Description     |
| --------- | -------------------------------------------------- | -------- | -------- |
| videoElem | [VideoElem](/class/message/videoElem.md) | Yes      | Video address |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg = await OpenIM.iMManager.messageManager.createVideoMessageByURL(videoElem: videoElem);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createVideoMessageByURL:(NSString *)fileURL
                                  videoType:(NSString * _Nullable)videoType
                                   duration:(NSInteger)duration
                                      size:(NSInteger)size
                                   snapshot:(NSString * _Nullable)snapshotURL

```

### Input Parameters

| Parameter Name     | Parameter Type  | Required | Description         |
| ------------ | --------- | -------- | ------------ |
| fileURL      | NSString  | Yes      | Video URL    |
| videoType    | NSString  | No       | Video type     |
| duration     | NSInteger | Yes      | Duration         |
| size         | NSInteger | Yes      | File size         |
| snapshotPath | NSString  | No       | Video thumbnail URL |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createVideoMessageByURL:@"" videoType:nil duration:1 size:1024 snapshot:nil];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
   public Message createVideoMessageByURL(VideoElem videoElem)
```

### Input Parameters

| Parameter Name  | Parameter Type                                           | Required | Description     |
| --------- | -------------------------------------------------- | -------- | -------- |
| videoElem | [VideoElem](/class/message/videoElem.md) | Yes      | Video address |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
        Message Message= OpenIMClient.getInstance().messageManager. createVideoMessageByURL(videoElem)
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createFileMessageByURL({
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
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description                                                                                                                                        |
| -------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | 
| videoPath      | string   | Yes      | File path, empty string is fine                                                                                                                    |
| duration       | number   | Yes      | Video duration                                                                                                                                    |
| videoType      | string   | Yes      | File type, usually the extension                                                                                                                      |
| snapshotPath   | string   | Yes      | Video thumbnail path, empty string is fine                                                                                                                                             | 
| videoUUID      | string   | Yes      | Unique video file ID                                                                                                                             |
| videoUrl       | string   | Yes      | Video download URL. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string       |
| videoSize      | number   | Yes      | File size                                                                                                                                    |
| snapshotUUID   | string   | Yes      | Unique video thumbnail ID                                                                                                                             |
| snapshotSize   | number   | Yes      | Video thumbnail size                                                                                                                              |
| snapshotUrl    | string   | Yes      | Video thumbnail download URL. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| snapshotWidth  | number   | Yes      | Video thumbnail width                                                                                                                              |
| snapshotHeight | number   | Yes      | Video thumbnail height                                                                                                                              |
| snapShotType   | string   | Yes      | Video thumbnail type, usually the extension                                                                                                                |                                |

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
  videoPath: '',
  duration: 6,
  videoType: 'mp4',
  snapshotPath: '',
  videoUUID: '',
  videoUrl: '',
  videoSize: 1024,
  snapshotUUID: '',
  snapshotSize: 1024,
  snapshotUrl: '',
  snapshotWidth: 1024,
  snapshotHeight: 1024,
  snapShotType: 'png',
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
IMSDK.asyncApi('createVideoMessageByURL', operationID: string, {
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
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description                                                                                                                                        |
| -------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| operationID    | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random                                                                                     |
| videoPath      | string   | Yes      | File path, empty string is fine                                                                                                                    |
| duration       | number   | Yes      | Video duration                                                                                                                                    |
| videoType      | string   | Yes      | File type, usually the extension                                                                                                                      |
| snapshotPath   | string   | Yes      | Video thumbnail path, empty string is fine                                                                                                                                             |
| videoUUID      | string   | Yes      | Unique video file ID                                                                                                                             |
| videoUrl       | string   | Yes      | Video download URL. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string       |
| videoSize      | number   | Yes      | File size                                                                                                                                    |
| snapshotUUID   | string   | Yes      | Unique video thumbnail ID                                                                                                                             |
| snapshotSize   | number   | Yes      | Video thumbnail size                                                                                                                              |
| snapshotUrl    | string   | Yes      | Video thumbnail download URL. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| snapshotWidth  | number   | Yes      | Video thumbnail width                                                                                                                              |
| snapshotHeight | number   | Yes      | Video thumbnail height                                                                                                                              |
| snapShotType   | string   | Yes      | Video thumbnail type, usually the extension                                                                                                                |                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createVideoMessageByURL', IMSDK.uuid(), {
  videoPath: '',
  duration: 6,
  videoType: 'mp4',
  snapshotPath: '',
  videoUUID: '',
  videoUrl: '',
  videoSize: 1024,
  snapshotUUID: '',
  snapshotSize: 1024,
  snapshotUrl: '',
  snapshotWidth: 1024,
  snapshotHeight: 1024,
  snapShotType: 'png',
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
OpenIMSDK.createVideoMessageByURL({
  videoPath: string,
  duration: number,
  videoType: string,
  snapshotPath: string,
  videoUUID: string,
  videoUrl: string,
  videoSize: number,
  snapshotUUID: string,
  snapshotSize: number,
  snapshotUrl: string,
  snapshotWidth: number,
  snapshotHeight: number,
  snapShotType: string,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description                                                                                                                                        |
| -------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| videoPath      | string   | Yes      | File path, empty string is fine                                                                                                                    |
| duration       | number   | Yes      | Video duration                                                                                                                                    |
| videoType      | string   | Yes      | File type, usually the extension                                                                                                                      |
| snapshotPath   | string   | Yes      | Video thumbnail path, empty string is fine                                                                                                                                             |
| videoUUID      | string   | Yes      | Unique video file ID                                                                                                                             |
| videoUrl       | string   | Yes      | Video download URL. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string       |
| videoSize      | number   | Yes      | File size                                                                                                                                    |
| snapshotUUID   | string   | Yes      | Unique video thumbnail ID                                                                                                                             |
| snapshotSize   | number   | Yes      | Video thumbnail size                                                                                                                              |
| snapshotUrl    | string   | Yes      | Video thumbnail download URL. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| snapshotWidth  | number   | Yes      | Video thumbnail width                                                                                                                              |
| snapshotHeight | number   | Yes      | Video thumbnail height                                                                                                                              |
| snapShotType   | string   | Yes      | Video thumbnail type, usually the extension                                                                                                                |                                |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random                                                                                     |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createVideoMessageByURL({
  videoPath: '',
  duration: 6,
  videoType: 'mp4',
  snapshotPath: '',
  videoUUID: '',
  videoUrl: '',
  videoSize: 1024,
  snapshotUUID: '',
  snapshotSize: 1024,
  snapshotUrl: '',
  snapshotWidth: 1024,
  snapshotHeight: 1024,
  snapShotType: 'png',
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

public static Message CreateVideoMessageByURL(VideoElem videoBaseInfo)

```

### Input Parameters

| Parameter Name  | Parameter Type                                           | Required | Description     |
| --------- | -------------------------------------------------- | -------- | -------- |
|videoBaseInfo | [VideoElem](/class/message/videoElem.md) | Yes      | Video address |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK.CreateVideoMessageByURL(new VideoBaseInfo(){
    
});
```

</TabItem>

</Tabs>
