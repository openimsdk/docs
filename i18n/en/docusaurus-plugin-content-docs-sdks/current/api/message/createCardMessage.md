---
sidebar_position: 16
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# createCardMessage

## Description

:::info

Create a business card message.

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
  Future<Message> createCardMessage({
       required String userID,
       required String nickname,
       String? faceURL,
       String? ex,
       String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| userID   | String   | Yes      | User ID  |
| nickname | String   | Yes      | User nickname |
| faceURL  | String   | Yes      | User avatar URL |
| ex       | String   | Yes      | Extension information |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
  Message msg = await OpenIM.iMManager.messageManager.createCardMessage(
      'userID':'userID',
    );
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

+ (OIMMessageInfo *)createCardMessage:(NSString *)content;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| content  | NSString | Yes      | Text content |

### Return Result

| Name    | Type                                                      | Description |
| ------- | --------------------------------------------------------- | -------- |
| message | [OIMMessageInfo](/class/message/messageInfo.md) | Success return |

### Code Example

```swift showLineNumbers

OIMMessageInfo *message = [OIMMessageInfo createCardMessage:@""];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
public Message createCardMessage(CardElem cardElem)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| userID   | String   | Yes      | User ID  |
| nickname | String   | Yes      | User nickname |
| faceURL  | String   | Yes      | User avatar URL |
| ex       | String   | Yes      | Extension information |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```dart showLineNumbers
      Message msg= OpenIMClient.getInstance().messageManager.createCardMessage(cardElem);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.createCardMessage({
  userID: string;
  nickname: string;
  faceURL: string;
  ex: string;
}, operationID?: string): Promise<WsResponse<MessageItem>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| userID   | String   | Yes      | User ID  |
| nickname | String   | Yes      | User nickname |
| faceURL  | String   | Yes      | User avatar URL |
| ex       | String   | Yes      | Extension information |

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

IMSDK.createCardMessage({
  userID: '',
  nickname: '',
  faceURL: '',
  ex: '',
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
IMSDK.asyncApi('createCardMessage', operationID: string, {
  userID: string;
  nickname: string;
  faceURL: string;
  ex: string;
}): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| userID      | String   | Yes      | User ID                                                 |
| nickname    | String   | Yes      | User nickname                                                |
| faceURL     | String   | Yes      | User avatar URL                                                |
| ex          | String   | Yes      | Extension information                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('createCardMessage', IMSDK.uuid(), {
  userID: '',
  nickname: '',
  faceURL: '',
  ex: '',
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
OpenIMSDK.login({
  userID:string,
  nickname:string,
  faceURL:string,
  ex:string
}, operationID?: string): Promise<MessageItem>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| userID      | string   | Yes      | User ID                                                 |
| nickname    | string   | Yes      | User nickname                                                |
| faceURL     | string   | Yes      | User avatar URL                                                |
| ex          | string   | Yes      | Extension information                                                |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                         | Description         |
| --------------- | ---------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[MessageItem](/class/message/messageInfo.md)\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>          | Failure callback |

### Code Example
```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.createCardMessage({
  userID: '',
  nickname: '',
  faceURL: '',
  ex: '',
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
public static Message CreateCardMessage(CardElem cardInfo)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | -------- |
| cardInfo      | [CardElem](/class/message/cardElem.md)| Yes      | Card content |

### Return Result

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | -------- |
| ~    | [Message](/class/message/messageInfo.md) | Success return |

### Code Example

```C# showLineNumbers
var msg = IMSDK.CreateCardMessage(new CardElem(){

});
```

</TabItem>

</Tabs>
