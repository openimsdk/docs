---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setUserListener

## Description

:::info

Set a user event listener to receive asynchronous callback notifications for changes in logged-in user profiles and online status changes of subscribed users, so that the UI can perceive and handle them in time.

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
  Future setUserListener(OnUserListener listener)
```

### Return Result

| Parameter Name | Parameter Type                                              | Description                   |
| -------- | ----------------------------------------------------- | ---------------------- |
| listener | [OnUserListener](/listener/userListener.md) | Callback function for user info updates |

### Code Example

```dart showLineNumbers
    OpenIM.iMManager.userManager.setUserListener(OnUserListener(
      onSelfInfoUpdated: (UserInfo userInfo){},
      userStatusChanged: (UserStatusInfo statusInfo){}
    ));
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift
- (void)setUserListenerWithUserInfoUpdate:(nullable OIMUserInfoCallback)onUserInfoUpdate
                      onUserStatusChanged:(nullable OIMUserStatusInfoCallback)onUserStatusChanged;
```

### Return Result
  
| Parameter Name            | Parameter Type                                                     | Description                   |
| ------------------- | ------------------------------------------------------------ | ---------------------- |
| onUserInfoUpdate    | OIMUserInfo                                                  | Callback function for user info updates |
| onUserStatusChanged | [OIMUserStatusInfo](/class/user/userStatusInfo.md) | Callback function for user status changes |

### Code Example

```swift showLineNumbers

[OIMManager.callbacker setSelfUserInfoUpdateListenerWithUserInfoUpdate:^(OIMUserInfo * _Nullable userInfo) {

} onUserStatusChanged:^(OIMUserStatusInfo * _Nullable statusInfo) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

  public void setOnUserListener(OnUserListener listener)

```

### Input Parameters

| Parameter Name | Parameter Type                                              | Required               | Description |
| -------- | ----------------------------------------------------- | ---------------------- | ---- |
| listener | [OnUserListener](/listener/userListener.md) | Callback function for user info updates |

### Return Result

### Code Example

```java showLineNumbers

   OpenIMClient.getInstance().userInfoManager.setOnUserListener(new OnUserListener(){...})

```

</TabItem>

<TabItem value="Web">

:::caution Note

Automatically set after successful login, you can directly use the listener in the client. For details on user events, [see here](/listener/userListener.md).

:::

</TabItem>

<TabItem value="uni-app">

:::caution Note

Automatically set after successful initialization. Callbacks will be passed to the client via `globalEvent`. For details on user events, [see here](/listener/userListener.md).

:::

</TabItem>
<TabItem value="React-Native">

:::caution Note

Automatically set after successful login, you can directly use the listener in the client. For details on user events, [see here](/listener/userListener.md).

:::

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers
public static void SetUserListener(IUserListener listener)
```

### Input Parameters

| Parameter Name | Parameter Type                                              | Required               | Description |
| -------- | ----------------------------------------------------- | ---------------------- | ---- |
| listener | [IUserListener](/listener/userListener.md) | Callback function for user info updates |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.SetUserListener(listener);

```

</TabItem>
</Tabs>
