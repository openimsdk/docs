---
title: SDK Overview
hide_title: true
sidebar_position: 1
---

## IMSDK

With this SDK, you can add instant messaging capabilities to your application. After connecting to a self-hosted **IMServer**, you can integrate instant messaging features into your app with just a few lines of code.

The core functionality of IMSDK is implemented based on **[open-im-sdk-core](https://github.com/openimsdk/openim-sdk-core)**. Below are the details for each platform:

### iOS Integration

- **Tool**: gomobile
- **Output**: XCFramework
- **Interaction**: iOS communicates with the SDK via JSON
- **API**: The SDK provides re-encapsulated APIs for easy integration
- **Data Storage**: iOS uses the SQLite layer provided internally by the SDK

### Android Integration

- **Tool**: gomobile
- **Output**: AAR
- **Interaction**: Android communicates with the SDK via JSON
- **API**: The SDK provides re-encapsulated APIs for easy integration
- **Data Storage**: Android uses the SQLite layer provided internally by the SDK

### Web Integration

- **Language**: Go
- **Feature**: Compiled to WebAssembly (WASM) using Go's WebAssembly support
- **Interaction**: Web pages communicate with the SDK via JSON
- **API**: The SDK provides re-encapsulated APIs for easy integration
- **Data Storage**: JavaScript uses [sql.js](https://sql.js.org/) to virtualize SQLite stored in IndexedDB for SQL logic

### Electron Integration

- **Language**: Go
- **Feature**: Uses cgo to export the core as C interfaces, providing dynamic libraries (DLL, SO, DYLIB) for use by other languages
- **Interaction**: Communicates with C interfaces via JSON using FFI (Foreign Function Interface)
- **API**: The SDK provides re-encapsulated APIs for easy use
- **Data Storage**: Uses the SQLite layer provided internally by the SDK

### Unity Integration

- **Library**: Dynamic C library compiled from Go
- **Output**: Platform-specific openimsdk.dll or libopenimsdk.so
- **Interaction**: C# (PInvoke) bindings for exported C functions
- **API**: C# data structure definitions with JSON data binding
