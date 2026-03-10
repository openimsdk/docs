---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createImageMessageByURL

## Description

:::info

When you need to store resources yourself, upload the image via API and obtain the download URL, then create an image message.

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
  Future<Message> createImageMessageByURL({
    required String sourcePath,
    required PictureInfo sourcePicture,
    required PictureInfo bigPicture,
    required PictureInfo snapshotPicture,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name        | Parameter Type                                               | Required | Description           |
| --------------- | ------------------------------------------------------ | -------- | -------------- |
| sourcePath   | String | Yes      | Absolute path of the image on the local machine; if none, empty string is fine    |
| sourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Original image information   |
| bigPicture      | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Large image information   |
| snapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Thumbnail information |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg = await OpenIM.iMManager.messageManager.createImageMessageByURL(sourcePath: '', sourcePicture: sourcePicture, bigPicture: bigPicture, snapshotPicture: snapshotPicture);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createImageMessageByURL:(NSString *)sourcePath
                              sourcePicture:(OIMPictureInfo *)source
                                 bigPicture:(OIMPictureInfo *)big
                            snapshotPicture:(OIMPictureInfo *)snapshot;

```

### Input Parameters

| Parameter Name | Parameter Type                                                  | Required | Description           |
| -------- | --------------------------------------------------------- | -------- | -------------- |
| sourcePath   | String | Yes      | Absolute path of the image on the local machine; if none, empty string is fine    |
| source   | [OIMPictureInfo](/class/message/pictureInfo.md) | Yes      | Original image information   |
| big      | [OIMPictureInfo](/class/message/pictureInfo.md) | Yes      | Large image information   |
| snapshot | [OIMPictureInfo](/class/message/pictureInfo.md) | Yes      | Thumbnail information |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMPictureInfo *source = [OIMPictureInfo new];
source.url = @"";
OIMPictureInfo *big = [OIMPictureInfo new];
big.url = @"";
OIMPictureInfo *snapshot = [OIMPictureInfo new];
snapshot.url = @"";

 OIMMessageInfo *message = [OIMMessageInfo createImageMessageByURL:sourcePath sourcePicture:source bigPicture:big snapshotPicture:snapshot];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createImageMessageByURL(PictureInfo sourcePicture, PictureInfo bigPicture, PictureInfo snapshotPicture)
```

### Input Parameters

| Parameter Name        | Parameter Type                                               | Required | Description           |
| --------------- | ------------------------------------------------------ | -------- | -------------- |
| sourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Original image information   |
| bigPicture      | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Large image information   |
| snapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Thumbnail information |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
     Message Message= OpenIMClient.getInstance().messageManager. createImageMessageByURL( sourcePicture,  bigPicture,  snapshotPicture)
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createImageMessageByURL({
  sourcePicture: PicBaseInfo;
  bigPicture: PicBaseInfo;
  snapshotPicture: PicBaseInfo;
  sourcePath: string;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name        | Parameter Type                                               | Required | Description                                       |
| --------------- | ------------------------------------------------------ | -------- | ------------------------------------------ |
| sourcePicture   | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Original image information                               |
| bigPicture      | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Large image information                               |
| snapshotPicture | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Thumbnail information                             |
| sourcePath      | string                                                 | Yes      | Absolute path of the image on the local machine; if none, empty string is fine |

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
  type: "png",
  size: 1024,
  width: 1024,
  height: 1024,
  url: "http://xxx.com/xxx.png", // Fill with an empty string when sending via sendMessageByBuffer
}

IMSDK.createImageMessage({
  sourcePicture: picBaseInfo;
  bigPicture: picBaseInfo;
  snapshotPicture: picBaseInfo;
  sourcePath: string;
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
IMSDK.asyncApi('createImageMessageByURL', operationID: string, {
  sourcePicture: PicBaseInfo;
  bigPicture: PicBaseInfo;
  snapshotPicture: PicBaseInfo;
  sourcePath: string;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name        | Parameter Type                                               | Required | Description                                                    |
| --------------- | ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| operationID     | string                                                 | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| sourcePicture   | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Original image information                                            |
| bigPicture      | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Large image information                                            |
| snapshotPicture | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Thumbnail information                                          |
| sourcePath      | string                                                 | Yes      | Absolute path of the image on the local machine; if none, empty string is fine              |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

const picBaseInfo = {
  uuid: 'uuid',
  type: 'png',
  size: 1024,
  width: 1024,
  height: 1024,
  url: 'http://xxx.com/xxx.png',
};

IMSDK.asyncApi(
  'createImageMessageByURL',
  IMSDK.uuid(),
  {
    sourcePicture: picBaseInfo;
    bigPicture: picBaseInfo;
    snapshotPicture: picBaseInfo;
    sourcePath: ""
  }
)
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
OpenIMSDK.createImageMessageByURL({
  sourcePicture: PicBaseInfo,
  bigPicture: PicBaseInfo,
  snapshotPicture: PicBaseInfo,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name        | Parameter Type                                               | Required | Description                                                    |
| --------------- | ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| sourcePicture   | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Original image information                                            |
| bigPicture      | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Large image information                                            |
| snapshotPicture | [PicBaseInfo](/class/message/pictureInfo.md) | Yes      | Thumbnail information                                          |
| sourcePath      | string                                                 | Yes      | Absolute path of the image on the local machine; if none, empty string is fine              |
| operationID     | string                                                 | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

const picBaseInfo = {
  uuid: 'uuid',
  type: 'png',
  size: 1024,
  width: 1024,
  height: 1024,
  url: 'http://xxx.com/xxx.png',
};

OpenIMSDK.createImageMessageByURL({
  sourcePicture: picBaseInfo,
  bigPicture: picBaseInfo,
  snapshotPicture: picBaseInfo,
  sourcePath: ""
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

public static Message CreateImageMessageByURL(string sourcePath, PictureBaseInfo sourcePicture, PictureBaseInfo bigPicture, PictureBaseInfo snapshotPicture)

```

### Input Parameters

| Parameter Name        | Parameter Type                                               | Required | Description           |
| --------------- | ------------------------------------------------------ | -------- | -------------- |
| sourcePath   | string | Yes      | Absolute path of the image on the local machine; if none, empty string is fine    |
| sourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Original image information   |
| bigPicture      | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Large image information   |
| snapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | Yes      | Thumbnail information |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK.CreateImageMessageByURL(sourcePath,sourcePicture, bigPicture, snapshotPicture);
```

</TabItem>
</Tabs>
