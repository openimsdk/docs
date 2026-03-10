---
sidebar_position: 9
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createVideoMessageFromFullPath

## Description

:::info

Create a video message. The SDK extracts video information based on the absolute path and creates the video message internally.

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
Future<Message> createVideoMessageFromFullPath({
    required String videoPath,
    required String videoType,
    required int duration,
    required String snapshotPath,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name     | Parameter Type | Required | Description         |
| ------------ | -------- | -------- | ------------ |
| videoPath    | String   | Yes      | Absolute path     |
| videoType    | String   | Yes      | Video type     |
| duration     | int      | Yes      | Duration         |
| snapshotPath | String   | Yes      | Video thumbnail path |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
   Message msg = await OpenIM.iMManager.messageManager.createVideoMessageFromFullPath(videoPath: videoPath, videoType: videoType, duration: duration, snapshotPath: snapshotPath);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createVideoMessageFromFullPath:(NSString *)videoPath
                                         videoType:(NSString *)videoType
                                          duration:(NSInteger)duration
                                      snapshotPath:(NSString *)snapshotPath;

```

### Input Parameters

| Parameter Name     | Parameter Type  | Required | Description         |
| ------------ | --------- | -------- | ------------ |
| videoPath    | NSString  | Yes      | Absolute path     |
| videoType    | NSString  | Yes      | Video type     |
| duration     | NSInteger | Yes      | Duration         |
| snapshotPath | NSString  | Yes      | Video thumbnail path |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createVideoMessageFromFullPath:@"" videoType:@"" duration:1 snapshotPath:@""];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createVideoMessageFromFullPath(String videoPath, String videoType, long duration, String snapshotPath)
```

### Input Parameters

| Parameter Name     | Parameter Type | Required | Description         |
| ------------ | -------- | -------- | ------------ |
| videoPath    | String   | Yes      | Absolute path     |
| videoType    | String   | Yes      | Video type     |
| duration     | int      | Yes      | Duration         |
| snapshotPath | String   | Yes      | Video thumbnail path |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
       Message Message= OpenIMClient.getInstance().messageManager. createVideoMessageFromFullPath( videoPath,  videoType,  duration,  snapshotPath)
```

</TabItem>

<TabItem value="Web">

:::caution Note

Only supported when called using ffi in electron.

On the Web side, it is recommended to use [createVideoMessageByURL](/api/message/createVideoMessageByURL.md) or [createVideoMessageByFile](/api/message/createVideoMessageByFile.md).

:::

### Function Prototype

```ts showLineNumbers
IMSDK.createVideoMessageFromFullPath({
  videoPath: string,
  videoType: string,
  duration: number,
  snapshotPath: string,
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description                                                                                                                                    |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| videoPath    | string   | Yes      | Video file absolute path                                        |
| videoType    | string   | Yes      | Video type, usually the extension                                  |
| duration     | number   | Yes      | Duration                                                    |
| snapshotPath | string   | Yes      | Video thumbnail absolute path                                        |

### Return Result

| Parameter Name        | Parameter Type                                                                     | Description         |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[MessageItem](/class/message/messageInfo.md)>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                         | Failure callback |

### Code Example

```js showLineNumbers
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
const { instance: IMSDK } = getWithRenderProcess();


IMSDK.createVideoMessageFromFullPath({
  videoPath: 'file://...',
  videoType: 'mp4',
  duration: 9,
  snapshotPath: 'file://...',
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
IMSDK.asyncApi('createVideoMessageFromFullPath', operationID: string, {
  videoPath: string,
  videoType: string,
  duration: number,
  snapshotPath: string,
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name     | Parameter Type | Required | Description                                                    |
| ------------ | -------- | -------- | ------------------------------------------------------- |
| operationID  | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| videoPath    | string   | Yes      | Video file absolute path                                        |
| videoType    | string   | Yes      | Video type, usually the extension                                  |
| duration     | number   | Yes      | Duration                                                    |
| snapshotPath | string   | Yes      | Video thumbnail absolute path                                        |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createVideoMessageFromFullPath', IMSDK.uuid(), {
  videoPath: '',
  videoType: 'mp4',
  duration: 12,
  snapshotPath: '',
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
OpenIMSDK.createVideoMessageFromFullPath({
  videoPath: string,
  videoType: string,
  duration: number,
  snapshotPath: string,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name     | Parameter Type | Required | Description                                                    |
| ------------ | -------- | -------- | ------------------------------------------------------- |
| videoPath    | string   | Yes      | Video file absolute path                                        |
| videoType    | string   | Yes      | Video type, usually the extension                                  |
| duration     | number   | Yes      | Duration                                                    |
| snapshotPath | string   | Yes      | Video thumbnail absolute path                                        |
| operationID  | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createVideoMessageFromFullPath({
  videoPath: '',
  videoType: 'mp4',
  duration: 12,
  snapshotPath: '',
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

public static Message CreateVideoMessageFromFullPath(string videoFullPath, string videoType, long duration, string snapshotFullPath);

```

### Input Parameters

| Parameter Name     | Parameter Type  | Required | Description         |
| ------------ | --------- | -------- | ------------ |
| videoPath    | string | Yes      | Absolute path     |
| videoType    | string | Yes      | Video type     |
| duration     | long| Yes      | Duration         |
| snapshotFullPath| string | Yes      | Video thumbnail path |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers

var msg = IMSDK.CreateVideoMessageFromFullPath(videoFullPath,videoType,duration,snapshotFullPath);

```

</TabItem>

</Tabs>
