---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onNewConversation

## Description

:::info

Received when a new conversation is generated.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Return Prototype

```dart showLineNumbers
  Function(List<ConversationInfo> list)? onNewConversation;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| list | List<[ConversationInfo](/class/conversation/conversationInfo.md)> | Conversation info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onNewConversation:(NSArray <OIMConversationInfo *> *)conversations;

```

### Return Results

| Name          | Type | Description |
| ------------- | ---- | -------- |
| conversations | NSArray < [OIMConversationInfo](/class/conversation/conversationInfo.md) \* > | Conversation info |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
  void onNewConversation(List<ConversationInfo> list)
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| list | List<[ConversationInfo](/class/conversation/conversationInfo.md)> | Conversation info |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onNewConversation(data: WSEvent<ConversationItem[]>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| data | [WSEvent](/class/response.md)<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Conversation info |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

IMSDK.on(
  CbEvents.OnNewConversation,
  ({ data }: WSEvent<ConversationItem[]>) => {
    // data: conversation info
  }
);
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onNewConversation(data: WSEvent<ConversationItem[]>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| data | [WSEvent](/class/response.md)<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Conversation info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(
  IMSDK.IMEvents.OnNewConversation,
  ({ data }: WSEvent<ConversationItem[]>) => {
    // data: conversation info
  }
);
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnNewConversation(List<Conversation> list);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| list | List<[Conversation](/class/conversation/conversationInfo.md)> | Conversation info |

</TabItem>
</Tabs>
