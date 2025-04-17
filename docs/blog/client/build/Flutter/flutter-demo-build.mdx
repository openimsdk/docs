---
title: Flutter Demo 的快速编译与运行
hide_title: false
sidebar_position: 2
---

## 前言

本文将指导你从零开始，快速搭建并运行基于 OpenIMSDK 的 Flutter 即时通讯应用。本项目基于开源的 OpenIMSDK，集成 [`flutter_openim_sdk`](https://pub.dev/packages/flutter_openim_sdk)，支持 iOS 和 Android 平台的即时通讯功能。相比 Twilio 或 Sendbird 等第三方云通信服务，OpenIMSDK 提供自托管部署，显著降低成本，同时确保数据安全与隐私。

## 1. 项目背景

OpenIMSDK 是一款开源即时通讯 SDK，提供高度可控的服务器部署和数据管理，适合对安全性和自主性要求高的场景。开发者可基于 OpenIMSDK 构建类似微信、Slack 或 Zoom 的应用，支持文本聊天、音视频通话等功能。

import demo_preview1 from './assets/preveiw1.zh-CN.jpeg';
import demo_preview2 from './assets/preveiw2.zh-CN.jpeg';

<div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
  <img src={demo_preview1} alt="预览图" width="32%" />
  <img src={demo_preview2} alt="预览图" width="32%" />
</div>

## 2. 环境准备

### 系统要求
- **Windows**: 10 或更高版本
- **macOS**: 14.6 或更高版本

### 开发工具
- **Flutter**: 3.24.5（参考[官方安装指南](https://docs.flutter.cn/get-started/install)）
- **Xcode**: 15.4（用于 iOS 开发）
- **Android Studio**: Koala | 2024.1.1 Patch 1
- **Git**: 用于代码版本管理

### 服务端准备
- 部署最新版本的 **OpenIM Server**（参考[官方 Docker Compose 部署指南](https://docs.openim.io/zh-Hans/guides/gettingStarted/dockerCompose)）。
- 确保本地网络可与服务端正常通信。

## 3. 获取示例项目

克隆示例项目代码：

```bash
git clone https://github.com/openimsdk/openim-flutter-demo.git
cd openim-flutter-demo
```

## 4. 安装依赖

在项目根目录运行以下命令：

```bash
flutter clean
flutter pub get
```

> **提示**：若依赖安装失败，检查 `pubspec.yaml` 中的版本兼容性，或运行 `flutter pub cache repair` 清理缓存。

## 5. 配置服务端地址

修改服务端地址以连接你的 OpenIM Server：

1. 打开 `openim_common/lib/src/config.dart` 文件。
2. 更新 `_host` 常量为你的服务器 IP 或域名：
   ```dart
   static const _host = "your-server-ip-or-domain";
   ```

> **注意**：
> - 默认端口无需修改，除非服务端配置变更。
> - 若使用 HTTPS 域名，需配置 Nginx 并确保证书有效。

## 6. 运行项目

通过以下命令运行项目：

```bash
flutter run
```

或者在 IDE（如 Android Studio 或 VS Code）中选择目标设备（iOS 或 Android）并点击“Run”。

## 7. 启用音视频通话

OpenIMSDK 开源版支持一对一音视频通话。启用该功能需：

1. 在服务端部署音视频服务（参考[LiveKit 服务器配置指南](https://github.com/openimsdk/chat/blob/main/HOW_TO_SETUP_LIVEKIT_SERVER.md)）。
2. 验证服务端配置，确保客户端可正常连接。

> **多人通话**：如需多人音视频或视频会议功能，请联系官方邮箱 `contact@openim.io` 获取支持。

## 8. 构建生产环境

### iOS
生成 iOS 应用（`.ipa` 文件）：

```bash
flutter build ipa
```

### Android
生成 Android 应用（`.apk` 文件）：

```bash
flutter build apk
```

构建产物位于 `build/` 目录。

## 9. 常见问题解答

### 1. 支持多语言吗？
是的，Demo 默认支持中文和英文，可通过添加语言文件扩展其他语言。

### 2. 支持哪些平台？
目前支持 iOS（最低版本 13.0）和 Android。

### 3. Android Release 包白屏？
Release 包可能因代码混淆导致白屏，尝试禁用混淆：

```bash
flutter build apk --no-shrink
```

或在 `android/app/build.gradle` 的 `release` 配置中添加：

```gradle
release {
    minifyEnabled false
    useProguard false
    shrinkResources false
}
```

### 4. 需要代码混淆怎么办？
在混淆规则中添加以下配置，保留 OpenIMSDK 相关类：

```bash
-keep class io.openim.** { *; }
-keep class open_im_sdk.** { *; }
-keep class open_im_sdk_callback.** { *; }
```

### 5. Android 包无法在模拟器运行？
Demo 默认移除部分 CPU 架构，需添加模拟器支持：

在 `android/app/build.gradle` 中配置：

```gradle
ndk {
    abiFilters "armeabi-v7a", "x86"
}
```

### 6. iOS 构建或运行报错？
确保 CPU 架构为 `arm64`，并按以下步骤操作：

```bash
flutter clean
flutter pub get
cd ios
rm -f Podfile.lock
rm -rf Pods
pod install
```

连接真机后运行或归档（Archive）。

![iOS CPU 设置](https://user-images.githubusercontent.com/7018230/155913400-6231329a-aee9-4082-8d24-a25baad55261.png)

### 7. ffmpeg不能使用？
可以自行编译或者使用其它源，例如： https://github.com/carl-designlibro/ffmpeg-kit

## 10. 结语

通过本文，你应已成功运行 OpenIMSDK 的 Flutter 示例项目。OpenIMSDK 提供高安全性和低成本的通信解决方案，适合企业级即时通讯需求。

如遇问题，欢迎：
- 在 [GitHub Issues](https://github.com/openimsdk/openim-flutter-demo/issues) 提交反馈。
- 访问 [OpenIMSDK 官网](https://www.openim.io) 或 [官方文档](https://docs.openim.io)。
- 联系官方邮箱 `contact@openim.io`。

更多资源：
- [GitHub 仓库](https://github.com/openimsdk)