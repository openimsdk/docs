---
title: 'How to Configure Offline Push'
sidebar_position: 5
---



In mobile environments, the situation is more complex: when the user is offline, or the app is killed or sent to the background, the system may suspend the process, preventing the **OpenIM long-lived connection** from delivering messages. To ensure timely message delivery, third-party push services are required:

- **Within China**: [GeTui](https://www.getui.com/) is recommended.
- **Outside China**: [Firebase Cloud Messaging (FCM)](https://firebase.google.com/) is recommended.


---

## Server-Side and Client-Side Configuration

Developers using OpenIMSDK need to configure both the **server side** and the **client side**.

### 1. Server-Side Configuration

Using YAML format as an example, here is how to enable offline push with GeTui and Firebase (FCM) configuration samples:

```yaml
# Use GeTui for offline push. You can also choose fcm or jpns.
# Obtain the configuration from the corresponding service provider.

enable: # Choose getui or fcm
  getui:
    pushUrl: https://restapi.getui.com/v2/$appId
    masterSecret:
    appKey:
    intent:
    channelID:
    channelName:
  fcm:
    # File path takes priority; if filePath is empty, URL is used
    filePath:   # Path relative to the config directory, e.g., ./your-fcm-file.json if placed in the config directory
    authURL:    # Must start with https or http
```

### 2. Client-Side Configuration

Refer to the following links for detailed client integration guides:
- [OpenIM Flutter Demo Configuration](https://github.com/openimsdk/openim-flutter-demo/blob/main/CONFIGKEY.zh-CN.md)
- [OpenIM iOS Demo Configuration](https://github.com/openimsdk/openim-ios-demo/blob/main/CONFIGKEY.zh-CN.md)
- [OpenIM Uniapp Demo Configuration](https://github.com/openimsdk/open-im-uniapp-demo/blob/main/CONFIGKEY.md)
- [OpenIM Android Demo Configuration](https://github.com/openimsdk/open-im-android-demo/blob/main/CONFIGKEY.zh-CN.md)
