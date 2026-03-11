---
title: Flutter
hide_title: true
sidebar_position: 3
---


## 🚀 Using the Demo
We strongly recommend running our framework-specific [DEMO](https://github.com/openimsdk/Open-IM-Flutter-Demo) first. This will not only give you a hands-on experience of IMSDK's features, but also help you quickly identify and resolve issues during actual integration.




## Integration Steps

### 1. Add Dependency to yaml

       flutter_openim_sdk: latest

### 2. Import Package

      import 'package:flutter_openim_sdk/flutter_openim_sdk.dart';

### 3. Initialization

```dart
final success = await OpenIM.iMManager.initSDK(
    platform: 0, // Platform, refer to the IMPlatform class
    apiAddr: "", // SDK API address
    wsAddr: "",  // SDK WebSocket address
    dataDir: "", // Data storage path, e.g., var apath = (await getApplicationDocumentsDirectory()).path
    objectStorage: 'cos', // Image server, default 'cos'
    logLevel: 6, // Log level, default 6
    listener: OnConnectListener(
      onConnectSuccess: () {
        // Successfully connected to server
      },
      onConnecting: () {
        // Connecting to server, suitable for showing "Connecting" status in UI
      },
      onConnectFailed: (code, errorMsg) {
        // Failed to connect to server, can prompt user about network unavailability
      },
      onUserSigExpired: () {
        // Login token has expired, please use a newly issued UserSig to log in again
      },
      onKickedOffline: () {
        // Current user was kicked offline. UI can prompt "You have logged in on another device. Would you like to log in again?"
      },
    ),
  );
```

### 4. Set Listeners

```dart
// Set listeners
    OpenIM.iMManager
      //
      ..userManager.setUserListener(OnUserListener(
      ))
      // Add message listener (remove when not in use)
      ..messageManager.setAdvancedMsgListener(OnAdvancedMsgListener(
      ))

      // Set up message sending progress listener
      ..messageManager.setMsgSendProgressListener(OnMsgSendProgressListener(
      ))
      ..messageManager.setCustomBusinessListener(
      )
      // Set up friend relationship listener
      ..friendshipManager.setFriendshipListener(OnFriendshipListener(
      ))

      // Set up conversation listener
      ..conversationManager.setConversationListener(OnConversationListener(
      ))

      // Set up group listener
      ..groupManager.setGroupListener(OnGroupListener(
      ));
```

### 5. Login

```dart
// Returns the current logged-in user's profile
final userInfo = await OpenIM.iMManager.login(
      userID: "", // userID from your business server
      token: "", // token obtained by your business server exchanging the secret with OpenIM server
    );
```
