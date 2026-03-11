---
sidebar_position: 18
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createFaceMessageWithIndex

## Description

:::info

Create a face/emoji message.

:::

:::caution Note

Custom emojis, animations, etc. If all platforms synchronize the same set of emojis, you can use the `index` parameter. If platforms do not synchronize emojis, you can use the `data` parameter, in which case it is recommended to set `index` to -1.

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
  Future<Message> createFaceMessage({
    int index = -1,
    String? data,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                        |
| -------- | -------- | -------- | --------------------------- |
| index    | int      | No       | Position emoji, matching based on index   |
| data     | String   | No       | URL emoji, display directly using URL |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
 Message msg = await OpenIM.iMManager.messageManager.createFaceMessage(
      data: 'https://xxx/xxx/xx.png'
    );
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createFaceMessageWithIndex:(NSInteger)index
                                          data:(NSString *)dataStr;

```

### Input Parameters

| Parameter Name | Parameter Type  | Required | Description |
| -------- | --------- | -------- | ---- |
| index    | NSInteger | Yes      | Index |
| dataStr  | NSString  | Yes      | Content |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createFaceMessageWithIndex:0 data:@""];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
 public Message createFaceMessage(long index, String data)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                        |
| -------- | -------- | -------- | --------------------------- |
| index    | int      | No       | Position emoji, matching based on index   |
| data     | String   | No       | URL emoji, display directly using URL |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
       Message Message= OpenIMClient.getInstance().messageManager.createFaceMessage( index,  data)
    //todo
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createFaceMessage({
  index: number;
  data: string;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | ---- |
| index    | number   | Yes      | Index |
| data     | string   | Yes      | Content |

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

IMSDK.createFaceMessage({
  index: 0,
  data: 'https://xxx/xxx/xx.png',
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
IMSDK.asyncApi('createFaceMessage', operationID: string, {
  index: number;
  dataStr: string;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| index       | number   | Yes      | Index                                                    |
| dataStr     | string   | Yes      | Content                                                    |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createFaceMessage', IMSDK.uuid(), {
  index: 0,
  dataStr: 'https://xxx/xxx/xx.png',
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
OpenIMSDK.createFaceMessage({
  index: number;
  data: string;
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| index       | number   | Yes      | Index                                                    |
| data        | string   | Yes      | Content                                                    |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result


| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createFaceMessage({
  index: 0,
  data: 'https://xxx/xxx/xx.png',
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

public static Message CreateFaceMessage(int index, string data)

```

### Input Parameters

| Parameter Name | Parameter Type  | Required | Description |
| -------- | --------- | -------- | ---- |
| index    | int | Yes      | Index |
| data |  string| Yes      | Content |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers

var msg = IMSDK.CreateFaceMessage(index,data);

```

</TabItem>
</Tabs>
