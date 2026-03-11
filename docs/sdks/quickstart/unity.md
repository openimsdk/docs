---
title: Unity
hide_title: true
sidebar_position: 2
---

## 🚀使用 Demo
我们强烈建议您首先运行我们为您准备的框架相关的示例 [DEMO](https://github.com/openimsdk/open-im-unity-demo.git) 。这不仅可以让您直观体验 IMSDK 的功能，还将帮助您在实际集成过程中迅速定位和解决问题。

## 集成步骤

### 1. 创建Unity工程，克隆[open-im-sdk-unity](https://github.com/openimsdk/open-im-sdk-unity.git)  到Assets目录

### 2. 引用命名空间

```C#
using OpenIM.IMSDK.Unity;
using OpenIM.IMSDK.Unity.Listener;
```

### 3. 初始化

```C# 
var suc = IMSDK.InitSDK(IMConfig config,IConnListener connCallBack);
```

### 4. 设置监听器

```C#
// 会话监听
IMSDK.SetConversationListener(conversation);
// 好友监听
IMSDK.SetFriendShipListener(friendship);
// 群组监听
IMSDK.SetGroupListener(group);

```

### 5. 登录

注意：先设置监听器后登录

```C#
IMSDK.Login((suc,errCode,errMsg)=>{

}, string uid, string token, )
```

### 6. 注销

```C#
IMSDK.Logout((suc,errCode,errMsg)=>{

})
```
### 7. 退出

```C#
IMSDK.UnInitSDK();
```