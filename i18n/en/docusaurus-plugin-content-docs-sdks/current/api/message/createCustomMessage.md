---
sidebar_position: 17
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createCustomMessage

## Description

:::info

Create a custom message, the fields of which are defined by the developer, and the SDK is only responsible for pass-through.

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
  Future<Message> createCustomMessage({
    required String data,
    required String extension,
    required String description,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | -------- |
| data        | String   | Yes      | Text content |
| extension   | String   | No       | Extension content |
| description | String   | No       | Description content |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
  Message msg = await OpenIM.iMManager.messageManager.createCustomMessage(
      data: jsonEncode({'key1':'value1'}),
      extension: '',
      description: ''
    );
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createCustomMessage:(NSString *)data
                              extension:(NSString * _Nullable)extension
                            description:(NSString * _Nullable)description;

```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | -------- |
| data        | NSString | Yes      | Text content |
| extension   | NSString | No       | Extension content |
| description | NSString | No       | Description content |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createCustomMessage:@""
                                                    extension:@""
                                                  description:@""];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public Message createCustomMessage(String data, String extension, String description)
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | -------- |
| data        | String   | Yes      | Text content |
| extension   | String   | No       | Extension content |
| description | String   | No       | Description content |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
 Message Message= OpenIMClient.getInstance().messageManager.createCustomMessage(data,  extension,  description);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createCustomMessage({
  data: string;
  extension: string;
  description: string;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | -------- |
| data        | String   | Yes      | Text content |
| extension   | String   | No       | Extension content |
| description | String   | No       | Description content |

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

IMSDK.createCustomMessage({
  data: '',
  extension: '',
  description: '',
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
IMSDK.asyncApi('createCustomMessage', operationID: string, {
  data: string;
  extension: string;
  description: string;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| data        | String   | Yes      | Text content                                                |
| extension   | String   | No       | Extension content                                                |
| description | String   | No       | Description content                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createCustomMessage', IMSDK.uuid(), {
  data: '',
  extension: '',
  description: '',
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
OpenIMSDK.createCustomMessage({
  data: string, 
  extension: string, 
  description: string
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| data        | String   | Yes      | Text content                                                |
| extension   | String   | Yes      | Extension content                                                |
| description | String   | Yes       | Description content                                                |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createCustomMessage({
  data: '',
  extension: '',
  description: '',
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
public static Message CreateCustomMessage(string data, string extension, string description)
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description |
| ----------- | -------- | -------- | -------- |
| data        | string   | Yes      | Text content |
| extension   | string   | No       | Extension content |
| description | string   | No       | Description content |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK.CreateCustomMessage(data,extension,description);
```

</TabItem>

</Tabs>
