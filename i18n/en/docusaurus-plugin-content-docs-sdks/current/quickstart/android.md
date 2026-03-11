---
title: Android
hide_title: true
sidebar_position: 2
---

## 🚀 Using the Demo
We strongly recommend running our framework-specific [DEMO](https://github.com/openimsdk/Open-IM-Android-Demo) first. This will not only give you a hands-on experience of IMSDK's features, but also help you quickly identify and resolve issues during actual integration.

## Integration Steps

### 1. Add Dependencies

    implementation 'io.openim:android-sdk:latest@aar'
    implementation 'io.openim:core-sdk:latest@aar'
    implementation 'com.google.code.gson:gson:2.9.0'

### 2. Import Package

    import io.openim.android.sdk.OpenIMClient

### 3. Initialization

```java
InitConfig initConfig=new InitConfig(
            Constant.getImApiUrl(),// SDK API address
            Constant.getImWsUrl(),// SDK WebSocket address
            getStorageDir(),// SDK database storage directory
            );

 OpenIMClient.getInstance().initSDK(
            application, // Application
            initConfig,// InitConfig
            new OnConnListener() {
                @Override
                public void onConnectFailed(long code, String error) {
                    // Failed to connect to server
                }

                @Override
                public void onConnectSuccess() {
                    // Successfully connected to server
                }

                @Override
                public void onConnecting() {
                    // Connecting to server...
                }

                @Override
                public void onKickedOffline() {
                    // Current user was kicked offline
                }

                @Override
                public void onUserTokenExpired() {
                    // Login token has expired
                }
            });
```

### 4. Set Listeners

```java
// Set listeners
// The SDK uses the set approach — calling set multiple times will replace the previous listener.
// It is recommended to use a middleware with an add-based dispatch mechanism. Refer to the IMEvent class in the demo.

    // Current user profile change callback
   OpenIMClient.getInstance().userInfoManager.setOnUserListener(info -> {});
   // New message, read receipt, and message revocation listeners
   OpenIMClient.getInstance().messageManager.setAdvancedMsgListener(new OnAdvanceMsgListener() { }
   // Friend relationship change listener
   OpenIMClient.getInstance().friendshipManager.setOnFriendshipListener(new OnFriendshipListener() {}
   // Conversation added or changed listener
   OpenIMClient.getInstance().conversationManager.setOnConversationListener(new OnConversationListener() {}
   // Group relationship change listener
   OpenIMClient.getInstance().groupManager.setOnGroupListener(new OnGroupListener() {}
   // Signaling listener
   OpenIMClient.getInstance().signalingManager.setSignalingListener(new OnSignalingListener() {}
```

### 5. Login

Note: Set listeners before logging in.

```java
OpenIMClient.getInstance().login(new OnBase<String>() {
          @Override
          public void onError(int code, String error) {
          }

          @Override
          public void onSuccess(String data) {
          // All other API calls must be made after the login callback succeeds

          }
       }, userID, imToken);
```
