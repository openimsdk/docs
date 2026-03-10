---
title: iOS
hide_title: true
sidebar_position: 1
---

## 🚀 Using the Demo
We strongly recommend running our framework-specific [DEMO](https://github.com/IMSDK/Open-IM-iOS-Demo) first. This will not only give you a hands-on experience of IMSDK's features, but also help you quickly identify and resolve issues during actual integration.

## Integration Steps

### 1. Currently using CocoaPods to obtain the SDK. Add the dependency to your Podfile:

```ruby
pod 'OpenIMSDK', '~>3.0.0'
```

SDK version reference: https://github.com/openimsdk/Open-IM-SDK-iOS.git

### 2. Import the Module

```swift
@import OpenIMSDK;
```

### 3. Initialization

```swift
OIMInitConfig *config = [OIMInitConfig new];
config.apiAddr = @"";
config.wsAddr = @"";
config.objectStorage = @"";

BOOL success = [OIMManager.manager initSDKWithConfig:config
                                        onConnecting:^{

} onConnectFailure:^(NSInteger code, NSString * _Nullable msg) {
    // Connection failure callback
    // code: error code
    // error: error message
} onConnectSuccess:^{
    // SDK successfully connected to the IM server
} onKickedOffline:^{
    // SDK is connecting to the IM server
} onUserTokenExpired:^{
    // Token expired while online: you need to generate a new token and call login() again to re-login.
}];

```

### 4. Set Listeners

#### Method 1
```swift
// Conversation-related listeners
- (void)setConversationListenerWithOnSyncServerStart:(OIMVoidCallback)onSyncServerStart
                                  onSyncServerFinish:(OIMVoidCallback)onSyncServerFinish
                                  onSyncServerFailed:(OIMVoidCallback)onSyncServerFailed
                               onConversationChanged:(OIMConversationsInfoCallback)onConversationChanged
                                   onNewConversation:(OIMConversationsInfoCallback)onNewConversation
                    onTotalUnreadMessageCountChanged:(OIMNumberCallback)onTotalUnreadMessageCountChanged;

// Friend relationship listeners
- (void)setFriendListenerWithOnBlackAdded:(OIMBlackInfoCallback)onBlackAdded
                           onBlackDeleted:(OIMBlackInfoCallback)onBlackDeleted
              onFriendApplicationAccepted:(OIMFriendApplicationCallback)onFriendApplicationAccepted
                 onFriendApplicationAdded:(OIMFriendApplicationCallback)onFriendApplicationAdded
               onFriendApplicationDeleted:(OIMFriendApplicationCallback)onFriendApplicationDeleted
              onFriendApplicationRejected:(OIMFriendApplicationCallback)onFriendApplicationRejected
                      onFriendInfoChanged:(OIMFriendInfoCallback)onFriendInfoChanged
                            onFriendAdded:(OIMFriendInfoCallback)onFriendAdded
                          onFriendDeleted:(OIMFriendInfoCallback)onFriendDeleted;

// Group-related listeners
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

// Message-related listeners
- (void)setAdvancedMsgListenerWithOnRecvMessageRevoked:(OIMRevokedCallback)onRecvMessageRevoked
                                  onRecvC2CReadReceipt:(OIMReceiptCallback)onRecvC2CReadReceipt
                                onRecvGroupReadReceipt:(OIMReceiptCallback)onRecvGroupReadReceipt
                                      onRecvNewMessage:(OIMMessageInfoCallback)onRecvNewMessage;

// Current user info update listener
- (void)setSelfUserInfoUpdateListener:(OIMUserInfoCallback)onUserInfoUpdate;

// User status listener
- (void)setUserListenerWithUserInfoUpdate:(nullable OIMUserInfoCallback)onUserInfoUpdate
                      onUserStatusChanged:(nullable OIMUserStatusInfoCallback)onUserStatusChanged;

// Custom business listener
- (void)setRecvCustomBusinessMessageListener:(OIMObjectCallback)onRecvCustomBusinessMessage;
    
```

#### Method 2

```swift

// Conversation-related listener
- (void)addConversationListener:(id<OIMConversationListener>)listener;
- (void)addIMSDKListener:(id<OIMSDKListener>)listener;
// Friend relationship listener
- (void)addFriendListener:(id<OIMFriendshipListener>)listener;
// Group-related listener
- (void)addGroupListener:(id<OIMGroupListener>)listener;
// Message-related listener
- (void)addAdvancedMsgListener:(id<OIMAdvancedMsgListener>)listener;
// User-related listener
- (void)addUserListener:(id<OIMUserListener>)listener;
// Custom business listener
- (void)addCustomBusinessListener:(id<OIMCustomBusinessListener>)listener;

```

### 5. Login

```swift
[OIMManager.manager login:@""
                    token:@""
                    onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];
```

### Notes

1. The SDK can only be initialized once.

2. All other API calls must be made after the login callback succeeds.
