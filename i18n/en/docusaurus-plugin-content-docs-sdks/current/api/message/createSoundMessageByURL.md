---
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createSoundMessageByURL

## Description

:::info

When you need to store resources yourself, upload the audio via API and obtain the download URL, then create an audio message.

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
Future<Message> createSoundMessageByURL({
    required SoundElem soundElem,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name  | Parameter Type                                           | Required | Description |
| --------- | -------------------------------------------------- | -------- | ---- |
| soundElem | [SoundElem](/class/message/soundElem.md) | Yes      |      |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg = await OpenIM.iMManager.messageManager.createSoundMessageByURL(soundElem: soundElem);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createSoundMessageByURL:(NSString *)fileURL
                                   duration:(NSInteger)duration
                                       size:(NSInteger)size;

```

### Input Parameters

| Parameter Name | Parameter Type  | Required | Description     |
| -------- | --------- | -------- | -------- |
| fileURL  | NSString  | Yes      | Audio URL |
| duration | NSInteger | Yes      | Duration     |
| size     | NSInteger | Yes      | File size |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

 OIMMessageInfo *message = [OIMMessageInfo createSoundMessageByURL:@"" duration:1 size:1024];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createSoundMessageByURL(SoundElem soundElem)
```

### Input Parameters

| Parameter Name  | Parameter Type                                           | Required | Description |
| --------- | -------------------------------------------------- | -------- | ---- |
| soundElem | [SoundElem](/class/message/soundElem.md) | Yes      |      |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```java showLineNumbers
       Message Message= OpenIMClient.getInstance().messageManager.createSoundMessageByURL( soundElem)
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createFileMessageByURL({
  uuid: string;
  soundPath: string;
  sourceUrl: string;
  dataSize: number;
  duration: number;
  soundType?: string;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description                                                                                                                                    |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| soundPath | string   | Yes      | File path, empty string is fine                                                                                                                |
| duration  | number   | Yes      | Recording duration                                                                                                                                |
| uuid      | string   | Yes      | Unique file ID                                                                                                                             |
| sourceUrl | string   | Yes      | Recording download address. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| dataSize  | string   | Yes      | File size                                                                                                                                |
| soundType | string   | Yes      | File type, usually the extension                                                                                                                  |

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
  soundPath: '',
  duration: 6,
  uuid: 'uuid',
  sourceUrl: '',
  dataSize: 1024,
  soundType: 'mp3',
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
IMSDK.asyncApi('createSoundMessageByURL', operationID: string, {
  uuid: string;
  soundPath: string;
  sourceUrl: string;
  dataSize: number;
  duration: number;
  soundType: string;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                                                                                    |
| ----------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random                                                                                 |
| soundPath   | string   | Yes      | File path, empty string is fine                                                                                                                |
| duration    | number   | Yes      | Recording duration                                                                                                                                |
| uuid        | string   | Yes      | Unique file ID                                                                                                                             |
| sourceUrl   | string   | Yes      | Audio download address. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| dataSize    | string   | Yes      | File size                                                                                                                                |
| soundType   | string   | Yes      | File type, usually the extension                                                                                                                  |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createSoundMessageByURL', IMSDK.uuid(), {
  soundPath: '',
  duration: 6,
  uuid: 'uuid',
  sourceUrl: '',
  dataSize: 1024,
  soundType: 'mp3',
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
OpenIMSDK.createSoundMessageByURL({
  uuid: string,
  soundPath: string,
  sourceUrl: string,
  dataSize: number,
  duration: number,
  soundType: string,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                                                                                                    |
| ----------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| soundPath   | string   | Yes      | File path, empty string is fine                                                                                                                |
| duration    | number   | Yes      | Recording duration                                                                                                                                |
| uuid        | string   | Yes      | Unique file ID                                                                                                                             |
| sourceUrl   | string   | Yes      | Audio download address. When uploading the file yourself and sending via [sendMessageNotOss](/api/message/sendMessageNotOss.md), this needs to be the remote URL; otherwise, it should be an empty string |
| dataSize    | string   | Yes      | File size                                                                                                                                |
| soundType   | string   | Yes      | File type, usually the extension                                                                                                                  |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random   

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createSoundMessageByURL({
  soundPath: '',
  duration: 6,
  uuid: 'uuid',
  sourceUrl: '',
  dataSize: 1024,
  soundType: 'mp3',
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

public static Message CreateSoundMessageByURL(SoundElem soundBaseInfo);

```

### Input Parameters

| Parameter Name | Parameter Type  | Required | Description     |
| -------- | --------- | -------- | -------- |
| soundBaseInfo |[SoundElem](/class/message/soundElem.md) | Yes      | Audio configuration |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers

var msg = IMSDK.CreateSoundMessageByURL(new SoundElem(){
    
});

```

</TabItem>

</Tabs>
