---
sidebar_position: 14
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createLocationMessage

## Description

:::info

Create a location message, including the latitude, longitude, and description of the location.

:::

:::caution Note

Latitude and longitude need to be obtained by yourself.

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
  Future<Message> createLocationMessage({
    required double latitude,
    required double longitude,
    required String description,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | ---- |
| description | String   | Yes      | Description |
| latitude    | double   | Yes      | Latitude |
| longitude   | double   | Yes      | Longitude |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
    Message msg = await OpenIM.iMManager.messageManager.createLocationMessage(latitude: latitude, longitude: longitude, description: description);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createLocationMessage:(NSString *)description
                                 latitude:(double)latitude
                                longitude:(double)longitude;

```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | ---- |
| description | NSString | Yes      | Description |
| latitude    | double   | Yes      | Latitude |
| longitude   | double   | Yes      | Longitude |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createLocationMessage:@"" latitude:0 longitude:0];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createLocationMessage(double latitude, double longitude, String description)
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | ---- |
| description | String   | Yes      | Description |
| latitude    | double   | Yes      | Latitude |
| longitude   | double   | Yes      | Longitude |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
       Message Message= OpenIMClient.getInstance().messageManager.  createLocationMessage( latitude,  longitude,  description)
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createLocationMessage({
  description: string;
  longitude: number;
  latitude: number;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description     |
| ----------- | -------- | -------- | -------- |
| description | string   | Yes      | Location description |
| latitude    | number   | Yes      | Latitude     |
| longitude   | number   | Yes      | Longitude     |

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

IMSDK.createLocationMessage({
  description: '',
  longitude: 0,
  latitude: 0,
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
IMSDK.asyncApi('createLocationMessage', operationID: string,{
  description: string;
  longitude: number;
  latitude: number;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| description | string   | Yes      | Location description                                                |
| latitude    | number   | Yes      | Latitude                                                    |
| longitude   | number   | Yes      | Longitude                                                    |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createLocationMessage', IMSDK.uuid(), {
  description: '',
  longitude: 0,
  latitude: 0,
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
OpenIMSDK.createLocationMessage({
  description: string,
  longitude: number,
  latitude: number,
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| description | string   | Yes      | Location description                                                |
| latitude    | number   | Yes      | Latitude                                                    |
| longitude   | number   | Yes      | Longitude                                                    |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createLocationMessage({
  description: '',
  longitude: 0,
  latitude: 0,
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
public static Message CreateLocationMessage(string description, double longitude, double latitude)
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | ---- |
| description | string   | Yes      | Description |
| latitude    | double   | Yes      | Latitude |
| longitude   | double   | Yes      | Longitude |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK. CreateLocationMessage(description,longitude,latitude);
```

</TabItem>

</Tabs>
