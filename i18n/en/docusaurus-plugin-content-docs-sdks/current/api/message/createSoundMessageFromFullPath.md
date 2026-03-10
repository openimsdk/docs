---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createSoundMessageFromFullPath

## Description

:::info

Create an audio message. The SDK extracts audio information based on the absolute path and creates the audio message internally.

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
  Future<Message> createSoundMessageFromFullPath({
    required String soundPath,
    required int duration,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description     |
| --------- | -------- | -------- | -------- |
| soundPath | String   | Yes      | Absolute path |
| duration  | int      | Yes      | Duration     |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg = await OpenIM.iMManager.messageManager.createSoundMessageFromFullPath(soundPath: soundPath, duration: duration);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createSoundMessageFromFullPath:(NSString *)soundPath
                                          duration:(NSInteger)duration;
```

### Input Parameters

| Parameter Name  | Parameter Type  | Required | Description     |
| --------- | --------- | -------- | -------- |
| soundPath | NSString  | Yes      | Absolute path |
| duration  | NSInteger | Yes      | Duration     |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createSoundMessageFromFullPath:@"" duration:1];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
   public Message createSoundMessageFromFullPath(String soundPath, long duration)
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description     |
| --------- | -------- | -------- | -------- |
| soundPath | String   | Yes      | Absolute path |
| duration  | int      | Yes      | Duration     |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
       Message Message= OpenIMClient.getInstance().messageManager.createSoundMessageFromFullPath( soundPath,  duration)
```

</TabItem>

<TabItem value="Web">

:::caution Note

Only supported when called using ffi in electron.

On the Web side, it is recommended to use [createSoundMessageByURL](/api/message/createSoundMessageByURL.md) or [createSoundMessageByFile](/api/message/createSoundMessageByFile.md).

:::

### Function Prototype

```ts showLineNumbers
IMSDK.createSoundMessageFromFullPath({
  soundPath: string,
  duration: number
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name  | Parameter Type | Required | Description                                                                                                                                    |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| soundPath  | string   | Yes      | File path, absolute path                                                                                                                |
| duration  | number   | Yes      | Audio duration, in seconds                                                                                                                                |

### Return Result

| Parameter Name        | Parameter Type                                                                     | Description         |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[MessageItem](/class/message/messageInfo.md)>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                         | Failure callback |

### Code Example

```js showLineNumbers
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
const { instance: IMSDK } = getWithRenderProcess();

IMSDK.createSoundMessageFromFullPath({
  soundPath: 'file://...',
  duration: 9
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
IMSDK.asyncApi('createSoundMessageFromFullPath', operationID: string, {
  soundPath: string,
  duration: number
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| soundPath   | string   | Yes      | Absolute file path                                            |
| duration    | number   | Yes      | Recording duration                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createSoundMessageFromFullPath', IMSDK.uuid(), {
  soundPath: 'soundPath',
  duration: 6,
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
OpenIMSDK.createSoundMessageFromFullPath({
  soundPath: string,
  duration: number,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| soundPath   | string   | Yes      | Absolute file path                                            |
| duration    | number   | Yes      | Recording duration                                                |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createSoundMessageFromFullPath({
  soundPath: 'soundPath',
  duration: 6,
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
public static Message CreateSoundMessageFromFullPath(string soundPath, long duration);
```

### Input Parameters

| Parameter Name  | Parameter Type  | Required | Description     |
| --------- | --------- | -------- | -------- |
| soundPath | string | Yes      | Absolute path |
| duration  | long | Yes      | Duration     |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers

var msg = IMSDK.CreateSoundMessageFromFullPath(sourcePath,duration);

```

</TabItem>
</Tabs>
