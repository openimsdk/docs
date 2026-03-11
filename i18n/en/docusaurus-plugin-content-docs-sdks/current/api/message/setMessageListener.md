---
sidebar_position: -1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setMessageListener

## Description

:::info

Set the listener for message events to receive asynchronous callback notifications for events related to message changes, enabling the UI to detect and handle them promptly.

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

```dart showLineNumbers
  Future setAdvancedMsgListener(OnAdvancedMsgListener listener)
```

### Return Result

| Parameter Name | Parameter Type                                                            | Description |
| -------- | ------------------------------------------------------------------- | ---- |
| listener | [OnAdvancedMsgListener](/listener/advancedMsgListener.md) | Yes  |

### Code Example

```dart showLineNumbers
OpenIM.iMManager.messageManager.setAdvancedMsgListener(OnAdvancedMsgListener(
      onMsgDeleted: (Message msg){},
      onNewRecvMessageRevoked: (RevokedInfo info){},
      onRecvC2CReadReceipt: (List<ReadReceiptInfo> list){},
      onRecvGroupReadReceipt: (List<ReadReceiptInfo> list){},
      onRecvMessageExtensionsAdded: (String msgID, List<KeyValue> list){},
      onRecvMessageExtensionsChanged: (String msgID, List<KeyValue> list){},
      onRecvMessageExtensionsDeleted: (String msgID, List<String> list){},
      onRecvOfflineNewMessages: (List<Message> list){},
      onRecvNewMessage: (Message msg){},
    ));
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift

- (void)addAdvancedMsgListener:(id<OIMAdvancedMsgListener>)listener NS_SWIFT_NAME(addAdvancedMsgListener(listener:));

```

### Return Result

| Parameter Name | Parameter Type                                                                    | Description |
| -------- | --------------------------------------------------------------------------- | ---- |
| listener | id < [OIMAdvancedMsgListener](/listener/advancedMsgListener.md) > | Yes  |

### Code Example

```swift showLineNumbers

[OIMManager.callbacker addAdvancedMsgListener:self];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public void setAdvancedMsgListener(OnAdvanceMsgListener listener)
```

### Input Parameters

| Parameter Name | Parameter Type                                                            | Description |
| -------- | ------------------------------------------------------------------- | ---- |
| listener | [OnAdvancedMsgListener](/listener/advancedMsgListener.md) | Yes  |

### Code Example

```dart showLineNumbers
     OpenIMClient.getInstance().messageManager.setAdvancedMsgListener(new OnAdvanceMsgListener() {
            @Override
            public void onRecvNewMessage(Message msg) {

            }

            @Override
            public void onRecvC2CReadReceipt(List<ReadReceiptInfo> list) {

            }

            @Override
            public void onRecvGroupMessageReadReceipt(List<ReadReceiptInfo> list) {

            }

            @Override
            public void onRecvMessageRevoked(String msgId) {

            }

            @Override
            public void onRecvMessageRevokedV2(RevokedInfo info) {

            }

            @Override
            public void onRecvMessageExtensionsChanged(String msgID, List<KeyValue> list) {

            }

            @Override
            public void onRecvMessageExtensionsDeleted(String msgID, List<String> list) {

            }

            @Override
            public void onRecvMessageExtensionsAdded(String msgID, List<KeyValue> list) {

            }

            @Override
            public void onMsgDeleted(Message message) {

            }

            @Override
            public void onRecvOfflineNewMessages(List<Message> list) {

            }
        });
```

</TabItem>

<TabItem value="Web">

:::caution Note

Automatically set after successful login. Can be used for listening directly on the client. [See details of message events here](/listener/advancedMsgListener.md)

:::

</TabItem>

<TabItem value="uni-app">

:::caution Note

Automatically set after successful initialization. The callback will be passed to the client via `globalEvent`. [See details of message events here](/listener/advancedMsgListener.md)

:::

</TabItem>
<TabItem value="React-Native">

:::caution Note

Automatically set after successful login. Can be used for listening directly on the client. [See details of message events here](/listener/batchMsgListener.md)

:::

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers
public static void SetAdvancedMsgListener(IAdvancedMsgListener l)
```

### Input Parameters

| Parameter Name | Parameter Type                                                            | Description |
| -------- | ------------------------------------------------------------------- | ---- |
| l | [OnAdvancedMsgListener](/listener/advancedMsgListener.md) | Yes  |

### Code Example

```C# showLineNumbers
IMSDK.SetAdvancedMsgListener(listener);
```

</TabItem>
</Tabs>
