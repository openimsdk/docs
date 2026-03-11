---
title: Unity
hide_title: true
sidebar_position: 2
---

## 🚀 Using the Demo
We strongly recommend running our framework-specific [DEMO](https://github.com/openimsdk/open-im-unity-demo.git) first. This will not only give you a hands-on experience of IMSDK's features, but also help you quickly identify and resolve issues during actual integration.

## Integration Steps

### 1. Create a Unity project and clone [open-im-sdk-unity](https://github.com/openimsdk/open-im-sdk-unity.git) into the Assets directory

### 2. Import Namespace

```C#
using OpenIM.IMSDK.Unity;
using OpenIM.IMSDK.Unity.Listener;
```

### 3. Initialization

```C# 
var suc = IMSDK.InitSDK(IMConfig config, IConnListener connCallBack);
```

### 4. Set Listeners

```C#
// Conversation listener
IMSDK.SetConversationListener(conversation);
// Friend listener
IMSDK.SetFriendShipListener(friendship);
// Group listener
IMSDK.SetGroupListener(group);

```

### 5. Login

Note: Set listeners before logging in.

```C#
IMSDK.Login((suc, errCode, errMsg)=>{

}, string uid, string token, )
```

### 6. Logout

```C#
IMSDK.Logout((suc, errCode, errMsg)=>{

})
```
### 7. Cleanup

```C#
IMSDK.UnInitSDK();
```
