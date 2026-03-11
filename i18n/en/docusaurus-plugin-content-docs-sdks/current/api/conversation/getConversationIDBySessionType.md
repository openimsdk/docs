---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getConversationIDBySessionType

## Description

:::info

Get the conversation ID based on the session type.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
Future<dynamic> getConversationIDBySessionType({
    required String sourceID,
    required int sessionType,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| ----------- | -------- | -------- | --------------------------------------------------------------- |
| sessionType | [int](/enum/conversationType.md)      | Yes      | Session type |
| sourceID    | String   | Yes      | User ID for one-to-one chat, group ID for group chat |

### Return Result

| Name | Type   | Description     |
| ---- | ------ | -------- |
| ~    | String | Success return |

### Code Example

```dart showLineNumbers
   final conversationID = await OpenIM.iMManager.conversationManager.getConversationIDBySessionType(sourceID: sourceID, sessionType: sessionType);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (NSString *)getConversationIDBySessionType:(OIMConversationType)sessionType
                                    sourceID:(NSString *)sourceID;

```

### Input Parameters

| Parameter Name | Parameter Type                                                   | Required | Description                       |
| ----------- | ---------------------------------------------------------- | -------- | -------------------------- |
| sessionType | [OIMConversationType](/enum/conversationType.md) | Yes      | Session type                   |
| sourceID    | NSString                                                   | Yes      | User ID for one-to-one chat, group ID for group chat |

### Return Result

| Name           | Type     | Description     |
| -------------- | -------- | -------- |
| conversationID | NSString | Success return |

### Code Example

```swift showLineNumbers

NSString *conversationID = [OIMManager.manager getConversationIDBySessionType:OIMConversationTypeC2C sourceID:@""];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

 public String getConversationIDBySessionType(String sourceId, int sessionType)

```

### Input Parameters

| Parameter Name | Parameter Type                                                   | Required | Description                       |
| ----------- | ---------------------------------------------------------- | -------- | -------------------------- |
| sessionType | [OIMConversationType](/enum/conversationType.md) | Yes      | Session type                   |
| sourceID    | String                                                     | Yes      | User ID for one-to-one chat, group ID for group chat |

### Return Result

| Name           | Type   | Description     |
| -------------- | ------ | -------- |
| conversationID | String | Success return |

### Code Example

```java showLineNumbers

 String conversationID=OpenIMClient.getInstance().conversationManager.getConversationIDBySessionType(sourceID,sessionType)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getConversationIDBySessionType({
  sourceID: string;
  sessionType: SessionType;
},operationID?: string): Promise<WsResponse<string>>
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description                                |
| ----------- | -------------------------------------------------- | -------- | ----------------------------------- |
| sourceID    | string                                             | Yes      | User ID for one-to-one chat, or groupID for group chat |
| sessionType | [SessionType](/enum/conversationType.md) | Yes      | Session type                            |

### Return Result

| Parameter Name  | Parameter Type                                       | Description      |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<string\>\>                        | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.getConversationIDBySessionType({
  sourceID: 'user1',
  sessionType: 1,
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
IMSDK.asyncApi('getConversationIDBySessionType', operationID: string, {
  sourceID: string;
  sessionType: SessionType;
}): Promise<string>
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description                                                    |
| ----------- | -------------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                             | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| sourceID    | string                                             | Yes      | User ID for one-to-one chat, or groupID for group chat                     |
| sessionType | [SessionType](/enum/conversationType.md) | Yes      | Session type                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                          | Description      |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<string\>                                        | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getConversationIDBySessionType', IMSDK.uuid(), {
  sourceID: 'user1',
  sessionType: 1,
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
OpenIMSDK.getConversationIDBySessionType({
  sourceID: string,
  sessionType: number,
}, operationID?: string): Promise<string>
```

### Input Parameters

| Parameter Name | Parameter Type                                           | Required | Description                                                    |
| ----------- | -------------------------------------------------- | -------- | ------------------------------------------------------- |
| sourceID    | string                                             | Yes      | User ID for one-to-one chat, or groupID for group chat                     |
| sessionType | [SessionType](/enum/conversationType.md) | Yes      | Session type                                                |
| operationID | string                                             | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |


### Return Result

| Parameter Name  | Parameter Type                                          | Description      |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<string\>                                        | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getConversationIDBySessionType({
  sourceID: 'user1',
  sessionType: 1,
}
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

public static string GetConversationIdBySessionType(string sourceId, int sessionType)

```

### Input Parameters

| Parameter Name | Parameter Type                                                   | Required | Description                       |
| ----------- | ---------------------------------------------------------- | -------- | -------------------------- |
| sourceId    | string                                                     | Yes      | User ID for one-to-one chat, group ID for group chat |
| sessionType | [ConversationType](/enum/conversationType.md) | Yes      | Session type                   |

### Return Result

| Name           | Type   | Description     |
| -------------- | ------ | -------- |
| conversationId | string | Success return |

### Code Example

```C# showLineNumbers

var conversationID =IMSDK.GetConversationIDBySessionType(sourceID,sessionType);

```

</TabItem>

</Tabs>
