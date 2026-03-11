---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onConversationChanged

## Description

:::info

Triggered when key information for some conversations changes, such as changes to the unread count or the last message of a conversation.

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
  Function(List<ConversationInfo> list)? onConversationChanged;
```

### Return Results

| Name | Type                                                                        | Description     |
| ---- | --------------------------------------------------------------------------- | -------- |
| list | List<[ConversationInfo](/class/conversation/conversationInfo.md)> | Conversation info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onConversationChanged:(NSArray <OIMConversationInfo *> *)conversations;

```

### Return Results

| Name          | Type                                                                                    | Description     |
| ------------- | --------------------------------------------------------------------------------------- | -------- |
| conversations | NSArray < [OIMConversationInfo](/class/conversation/conversationInfo.md) \* > | Conversation info |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
 void onConversationChanged(List<ConversationInfo> list);
```

### Return Results

| Name | Type                                                                        | Description     |
| ---- | --------------------------------------------------------------------------- | -------- |
| list | List<[ConversationInfo](/class/conversation/conversationInfo.md)> | Conversation info |

</TabItem>


<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onConversationChanged(data: WSEvent<ConversationItem[]>): void;

```

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.on(
  CbEvents.OnConversationChanged,
  ({ data }) => {
    // data: conversation info list
  }
);
```

### Return Results

| Name | Type                                                                                                             | Description     |
| ---- | ---------------------------------------------------------------------------------------------------------------- | -------- |
| data | [WSEvent](/class/response.md)<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Conversation info |

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onConversationChanged(data: WSEvent<ConversationItem[]>): void;

```

### Return Results

| Name | Type                                                                                                             | Description     |
| ---- | ---------------------------------------------------------------------------------------------------------------- | -------- |
| data | [WSEvent](/class/response.md)<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Conversation info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(
  IMSDK.IMEvents.OnConversationChanged,
  ({ data }: WSEvent<ConversationItem[]>) => {
    // data: conversation info
  }
);
```

</TabItem>
<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnConversationChanged(List<Conversation> list);
```

### Return Results

| Name | Type                                                                        | Description     |
| ---- | --------------------------------------------------------------------------- | -------- |
| list | List<[Conversation](/class/conversation/conversationInfo.md)> | Conversation info |

</TabItem>
</Tabs>
