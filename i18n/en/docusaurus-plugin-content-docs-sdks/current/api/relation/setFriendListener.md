---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setFriendListener

## Description

:::info

Set the relationship chain event listener to asynchronously callback and notify related events of relationship chain changes, so that the UI can perceive and process them in a timely manner.

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
  Future setFriendshipListener(OnFriendshipListener listener)
```

### Input Parameters

| Parameter Name | Parameter Type                                          | Required | Description |
| -------------- | ------------------------------------------------------- | -------- | ----------- |
| listener       | [OnFriendshipListener](/listener/friendshipListener.md) | Yes      |             |

### Return Result

~

### Code Example

```dart showLineNumbers
    OpenIM.iMManager.friendshipManager.setFriendshipListener(OnFriendshipListener(
      onBlacklistAdded: (BlacklistInfo i){},
      onBlacklistDeleted: (BlacklistInfo i){},
      onFriendAdded: (FriendInfo i){},
      onFriendApplicationAccepted: (FriendApplicationInfo i){},
      onFriendApplicationAdded: (FriendApplicationInfo i){},
      onFriendApplicationDeleted: (FriendApplicationInfo i){},
      onFriendApplicationRejected: (FriendApplicationInfo i){},
      onFriendDeleted: (FriendInfo i){},
      onFriendInfoChanged: (FriendInfo i){},
    ));
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift
- (void)addFriendListener:(id<OIMFriendshipListener>)listener NS_SWIFT_NAME(addFriendListener(listener:));
```

### Input Parameters

| Parameter Name | Parameter Type                                                  | Required | Description |
| -------------- | --------------------------------------------------------------- | -------- | ----------- |
| listener       | id < [OIMFriendshipListener](/listener/friendshipListener.md) > | Yes      |             |

### Return Result

None

### Code Example

```swift showLineNumbers
[OIMManager.callbacker addFriendListener:self];
```

</TabItem>

<TabItem value="Android">

### Function Prototype

```Java
 public void setOnFriendshipListener(OnFriendshipListener listener)
```

### Input Parameters

| Parameter Name | Parameter Type                                                 | Required | Description |
| -------------- | -------------------------------------------------------------- | -------- | ----------- |
| listener       | id <[OnFriendshipListener](/listener/friendshipListener.md)> | Yes      |             |

### Return Result

None

### Code Example

```Java showLineNumbers
OpenIMClient.getInstance().friendshipManager.setOnFriendshipListener(new OnFriendshipListener{...} )
```

</TabItem>

<TabItem value="Web">

:::caution Note

Set automatically after successful login, you can directly use the listener in the client. For [friend event details, see](/listener/friendshipListener.md)

:::

</TabItem>

<TabItem value="uni-app">

:::caution Note

Set automatically after successful initialization. The callback will be passed to the client through `globalEvent`. For [friend event details, see](/listener/friendshipListener.md)

:::

</TabItem>
<TabItem value="React-Native">

:::caution Note

Set automatically after successful login, you can directly use the listener in the client. For [friend event details, see](/listener/friendshipListener.md)

:::

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C#

public static void SetFriendShipListener(IFriendShipListener listener)

```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description |
| -------------- | ------------------------------------------------------ | -------- | ----------- |
| listener       | [IFriendShipListener](/listener/friendshipListener.md) | Yes      |             |

### Return Result

None

### Code Example

```C# showLineNumbers

IMSDK.SetFriendShipListener(listener)

```

</TabItem>

</Tabs>
