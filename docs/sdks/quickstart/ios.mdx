---
title: iOS
hide_title: true
sidebar_position: 1
---

## 🚀使用 Demo
我们强烈建议您首先运行我们为您准备的框架相关的示例 [DEMO](https://github.com/IMSDK/Open-IM-iOS-Demo)。这不仅可以让您直观体验 IMSDK 的功能，还将帮助您在实际集成过程中迅速定位和解决问题。

## 集成步骤

### 1. 目前采用 cocoapds 获取 sdk，添加依赖到 Podfile：

```ruby
pod 'OpenIMSDK', '~>3.0.0'
```

SDK 版本参考：https://github.com/openimsdk/Open-IM-SDK-iOS.git

### 2. 引入模块

```swift
@import OpenIMSDK;
```

### 3. 初始化

```swift
OIMInitConfig *config = [OIMInitConfig new];
config.apiAddr = @"";
config.wsAddr = @"";
config.objectStorage = @"";

BOOL success = [OIMManager.manager initSDKWithConfig:config
                                        onConnecting:^{

} onConnectFailure:^(NSInteger code, NSString * _Nullable msg) {
    // 连接失败的回调函数
    // code 错误码
    // error 错误信息
} onConnectSuccess:^{
    // SDK 已经成功连接到IM服务器
} onKickedOffline:^{
    // SDK 正在连接到IM服务器
} onUserTokenExpired:^{
    // 在线时票据过期：此时您需要生成新的 token 并再次调用 的 login() 函数重新登录。
}];

```

### 4. 设置监听器

#### 方式一
```swift
// 会话相关监听
- (void)setConversationListenerWithOnSyncServerStart:(OIMVoidCallback)onSyncServerStart
                                  onSyncServerFinish:(OIMVoidCallback)onSyncServerFinish
                                  onSyncServerFailed:(OIMVoidCallback)onSyncServerFailed
                               onConversationChanged:(OIMConversationsInfoCallback)onConversationChanged
                                   onNewConversation:(OIMConversationsInfoCallback)onNewConversation
                    onTotalUnreadMessageCountChanged:(OIMNumberCallback)onTotalUnreadMessageCountChanged;

// 好友关系链相关监听
- (void)setFriendListenerWithOnBlackAdded:(OIMBlackInfoCallback)onBlackAdded
                           onBlackDeleted:(OIMBlackInfoCallback)onBlackDeleted
              onFriendApplicationAccepted:(OIMFriendApplicationCallback)onFriendApplicationAccepted
                 onFriendApplicationAdded:(OIMFriendApplicationCallback)onFriendApplicationAdded
               onFriendApplicationDeleted:(OIMFriendApplicationCallback)onFriendApplicationDeleted
              onFriendApplicationRejected:(OIMFriendApplicationCallback)onFriendApplicationRejected
                      onFriendInfoChanged:(OIMFriendInfoCallback)onFriendInfoChanged
                            onFriendAdded:(OIMFriendInfoCallback)onFriendAdded
                          onFriendDeleted:(OIMFriendInfoCallback)onFriendDeleted;

// 群组相关监听
- (void)setGroupListenerWithOnGroupInfoChanged:(OIMGroupInfoCallback)onGroupInfoChanged
                            onJoinedGroupAdded:(OIMGroupInfoCallback)onJoinedGroupAdded
                          onJoinedGroupDeleted:(OIMGroupInfoCallback)onJoinedGroupDeleted
                            onGroupMemberAdded:(OIMGroupMemberInfoCallback)onGroupMemberAdded
                          onGroupMemberDeleted:(OIMGroupMemberInfoCallback)onGroupMemberDeleted
                      onGroupMemberInfoChanged:(OIMGroupMemberInfoCallback)onGroupMemberInfoChanged
                       onGroupApplicationAdded:(OIMGroupApplicationCallback)onGroupApplicationAdded
                     onGroupApplicationDeleted:(OIMGroupApplicationCallback)onGroupApplicationDeleted
                    onGroupApplicationAccepted:(OIMGroupApplicationCallback)onGroupApplicationAccepted
                    onGroupApplicationRejected:(OIMGroupApplicationCallback)onGroupApplicationRejected
                              onGroupDismissed:(nullable OIMGroupInfoCallback)onGroupDismissed;

// 消息相关监听
- (void)setAdvancedMsgListenerWithOnRecvMessageRevoked:(OIMRevokedCallback)onRecvMessageRevoked
                                  onRecvC2CReadReceipt:(OIMReceiptCallback)onRecvC2CReadReceipt
                                onRecvGroupReadReceipt:(OIMReceiptCallback)onRecvGroupReadReceipt
                                      onRecvNewMessage:(OIMMessageInfoCallback)onRecvNewMessage;

// 登录用户相关监听
- (void)setSelfUserInfoUpdateListener:(OIMUserInfoCallback)onUserInfoUpdate;

// 用户状态相关监听
- (void)setUserListenerWithUserInfoUpdate:(nullable OIMUserInfoCallback)onUserInfoUpdate
                      onUserStatusChanged:(nullable OIMUserStatusInfoCallback)onUserStatusChanged;

// 自定义业务相关监听
- (void)setRecvCustomBusinessMessageListener:(OIMObjectCallback)onRecvCustomBusinessMessage;
    
```

#### 方式二

```swift

// 会话相关监听
- (void)addConversationListener:(id<OIMConversationListener>)listener;
- (void)addIMSDKListener:(id<OIMSDKListener>)listener;
// 好友关系链相关监听
- (void)addFriendListener:(id<OIMFriendshipListener>)listener;
// 群组相关监听
- (void)addGroupListener:(id<OIMGroupListener>)listener;
// 消息相关监听
- (void)addAdvancedMsgListener:(id<OIMAdvancedMsgListener>)listener;
// 用户相关监听
- (void)addUserListener:(id<OIMUserListener>)listener;
// 自定义业务相关监听
- (void)addCustomBusinessListener:(id<OIMCustomBusinessListener>)listener;

```

### 5. 登录

```swift
[OIMManager.manager login:@""
                    token:@""
                    onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];
```

### 注意

1、SDK 只能初始化一次。

2、其他 api 调用必须保证登录回调成功后操作。
