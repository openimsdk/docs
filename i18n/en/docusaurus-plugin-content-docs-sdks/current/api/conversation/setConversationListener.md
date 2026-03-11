---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setConversationListener

## Description

:::info

Set a conversation listener to asynchronously notify the UI layer of new conversations, conversation data changes, etc.

:::

:::caution Note

(1) Call immediately after initSDK;  
(2) Can only be called once.

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

```dart
  Future setConversationListener(OnConversationListener listener)
```

### Return Result

| Parameter Name | Parameter Type                                                            | Description |
| -------- | ------------------------------------------------------------------- | ---- |
| listener | [ConversationListener](/listener/conversationListener.md) | Yes   |

### Code Example

```dart showLineNumbers

```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift
- (void)addConversationListener:(id<OIMConversationListener>)listener NS_SWIFT_NAME(addConversationListener(listener:));
```

### Return Result

| Parameter Name | Parameter Type                                                                   | Description |
| -------- | -------------------------------------------------------------------------- | ---- |
| listener | id < [ConversationListener](/listener/conversationListener.md) > | Yes   |

### Code Example

```swift showLineNumbers

[OIMManager.callbacker addConversationListener:self];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java
  public void setOnConversationListener(OnConversationListener listener)
```

### Return Result

| Parameter Name | Parameter Type                                                            | Description |
| -------- | ------------------------------------------------------------------- | ---- |
| listener | [ConversationListener](/listener/conversationListener.md) | Yes   |

### Code Example

```java showLineNumbers
  OpenIMClient.getInstance().conversationManager.setOnConversationListener(new OnConversationListener() {
            @Override
            public void onConversationChanged(List<ConversationInfo> list) {

            }

            @Override
            public void onNewConversation(List<ConversationInfo> list) {

            }

            @Override
            public void onSyncServerFailed() {

            }

            @Override
            public void onSyncServerFinish() {

            }

            @Override
            public void onSyncServerStart() {

            }

            @Override
            public void onTotalUnreadMessageCountChanged(int i) {

            }
        });
```

</TabItem>

<TabItem value="Web">

:::caution Note

Set automatically after successful login. Can be used directly, [see conversation events details](/listener/conversationListener.md)

:::

</TabItem>

<TabItem value="uni-app">

:::caution Note

Set automatically after successful initialization. Callbacks will be passed to the client via `globalEvent`, [see conversation events details](/listener/conversationListener.md)

:::

</TabItem>

<TabItem value="React-Native">

:::caution Note

Set automatically after successful login. Can be used directly, [see conversation events details](/listener/conversationListener.md)

:::

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C#
public static void SetConversationListener(IConversationListener l)
```

### Return Result

| Parameter Name | Parameter Type                                                            | Description |
| -------- | ------------------------------------------------------------------- | ---- |
| l | [IConversationListener](/listener/conversationListener.md) | Yes   |

### Code Example

```C# showLineNumbers

IMSDK.SetConversationListener(listener);

```

</TabItem>
</Tabs>
