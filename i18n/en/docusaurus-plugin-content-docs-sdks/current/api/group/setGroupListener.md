---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setGroupListener

## Description

:::info

Set the group event listener to perform asynchronous callback notifications for group changes so that the UI can sense and handle them in a timely manner.

:::

:::caution Note

(1) Call it immediately after initSDK;  
(2) It can only be called once.

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
 Future setGroupListener(OnGroupListener listener)
```

### Return Result

| Parameter Name| Parameter Type | Description |
| -------- | ------------------------------------------------------- | ---- |
| listener | [OnGroupListener](/listener/groupListener.md) | Yes   |

### Code Example

```dart showLineNumbers
  OpenIM.iMManager.groupManager.setGroupListener(OnGroupListener(
      onGroupApplicationAccepted: (GroupApplicationInfo info){},
      onGroupApplicationAdded: (GroupApplicationInfo info){},
      onGroupApplicationDeleted: (GroupApplicationInfo info){},
      onGroupApplicationRejected: (GroupApplicationInfo info){},
      onGroupInfoChanged: (GroupInfo info){},
      onGroupMemberAdded: (GroupMembersInfo info){},
      onGroupMemberDeleted: (GroupMembersInfo info){},
      onGroupMemberInfoChanged: (GroupMembersInfo info){},
      onJoinedGroupAdded: (GroupInfo info){},
      onJoinedGroupDeleted: (GroupInfo info){},
    ));
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift
- (void)addGroupListener:(id<OIMGroupListener>)listener NS_SWIFT_NAME(addGroupListener(listener:));
```

### Return Result

| Parameter Name| Parameter Type | Description |
| -------- | ------------------------------------------------------------ | ---- |
| listener | id < [GroupListener](/listener/groupListener.md) > | Yes   |

### Code Example

```swift showLineNumbers
[OIMManager.callbacker addGroupListener:self];
```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
    public void setOnGroupListener(OnGroupListener listener)
```

### Input Parameters

| Parameter Name| Parameter Type | Required | Description |
| -------- | ------------------------------------------------------- | -------- | -------- |
| listener | [OnGroupListener](/listener/groupListener.md) | Yes      | Callback interface |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().groupManager.setOnGroupListener(new OnGroupListener() {
            @Override
            public void onGroupApplicationAccepted(GroupApplicationInfo info) {

            }

            @Override
            public void onGroupApplicationAdded(GroupApplicationInfo info) {

            }

            @Override
            public void onGroupApplicationDeleted(GroupApplicationInfo info) {

            }

            @Override
            public void onGroupApplicationRejected(GroupApplicationInfo info) {

            }

            @Override
            public void onGroupInfoChanged(GroupInfo info) {

            }

            @Override
            public void onGroupMemberAdded(GroupMembersInfo info) {

            }

            @Override
            public void onGroupMemberDeleted(GroupMembersInfo info) {

            }

            @Override
            public void onGroupMemberInfoChanged(GroupMembersInfo info) {

            }

            @Override
            public void onJoinedGroupAdded(GroupInfo info) {

            }

            @Override
            public void onJoinedGroupDeleted(GroupInfo info) {

            }
        });
```

</TabItem>

<TabItem value="Web">

:::caution Note

Set automatically after successful login, you can use the listener directly in the client, [see group event details](/listener/groupListener.md)

:::

</TabItem>

<TabItem value="uni-app">

:::caution Note

Set automatically after successful initialization. The callback will be passed to the client via `globalEvent`, [see group event details](/listener/groupListener.md)

:::

</TabItem>
<TabItem value="React-Native">

:::caution Note

Set automatically after successful login, you can use the listener directly in the client, [see group event details](/listener/groupListener.md)

:::

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers
public static void SetGroupListener(IGroupListener l)
```

### Input Parameters

| Parameter Name| Parameter Type | Required | Description |
| -------- | ------------------------------------------------------- | -------- | -------- |
| l        | [IGroupListener](/listener/groupListener.md) | Yes      | Callback interface |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.SetGroupListener(IGroupListener l);

```

</TabItem>
</Tabs>
