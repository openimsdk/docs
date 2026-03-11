---
title: Introduction to Wasm Client SDK Architecture
hide_title: true
sidebar_position: 1
---

# Introduction to Wasm Client SDK Architecture

## Preface

In modern Web development, instant messaging features are required in many scenarios, such as chatting, push notifications, and collaboration. However, traditional front-end solutions often rely on third-party cloud services, bringing high costs and data security risks. Now, with the OpenIMSDK open-source project, we can easily build self-hosted instant messaging services and use WebAssembly (WASM) on the client side for efficient cross-platform support. This article will introduce how we built a lightweight and powerful Web SDK based on Go + WebAssembly + SQLite virtualization technology.

## 1. Architecture Overview
The goal of this SDK is to allow developers to directly integrate OpenIMSDK's instant messaging capabilities in a browser environment, while reusing the native (Go) version of OpenIMSDK Core as much as possible, achieving **"One Core, Multi-end Reuse"**. To this end, we chose the following technology stack:

### 1.1 Go + WebAssembly
- Core logic written in Go, including communication protocol parsing, message pulling, message synchronization, etc.
- Packaged the core module into a binary executable in the browser using WASM. It can be used directly on the front-end without reimplementing a lot of logic.

### 1.2 WebAssembly (WASM)
- Can compile Go code into binaries that can run in the browser, while providing near-native performance.
- Provides necessary JS interfaces (host functions) to support bidirectional communication between the SDK and the front-end.

### 1.3 Data Storage: SQLite + sql.js + IndexedDB
- Uses sql.js (JavaScript version of SQLite) to simulate a local database in the browser.
- The underlying layer stores data in the browser's IndexedDB, but it is completely transparent to developers, who can still read and write in native SQL format.
- This "virtualization" approach unifies the database usage patterns between the front-end and the native end, reducing maintenance costs caused by differences across platforms.

### 1.4 API Encapsulation: JSON Communication
- Uses the JSON data format to pass messages between JS and WASM, reducing the complexity of cross-language invocation.
- Encapsulates interfaces that are closer to JavaScript developers' habits, facilitating quick start.

## 2. Main Technical Principles

### 2.1 Go + WebAssembly
> Background:
> Go has a natural advantage in high concurrency and network programming, and can easily abstract and encapsulate logic into an independent core module. Since Go 1.11, it has officially supported compiling Go code into WebAssembly files, making it possible for us to directly run native logic on the Web.

#### Compilation Process
- Environment Variables: In the terminal, set `GOOS=js GOARCH=wasm` to specify the target platform as `js/wasm`.
- Generate `.wasm` File: After compilation, a `.wasm` file and a matching `wasm_exec.js` are generated. The latter is the runtime officially provided by Go, specifically used to start and manage the Go code on the WASM side.

#### Interaction Method
- JSON Message Passing: Because Go and JS are in different execution environments, directly passing complex data structures is difficult. Therefore, on the Go side, we define a unified set of JSON interfaces for receiving/returning data; on the JS side, communication is achieved through serialization/deserialization. Even if the languages are different, they can communicate seamlessly.
- Concurrency and Networking: Go can still use Goroutines and other features to handle network I/O. The browser connects to the self-hosted OpenIM server via WebSocket or other methods to maintain message synchronization.

### 2.2 SQLite Virtualization
> Why do we need local storage?
> In instant messaging scenarios, clients often need to store chat records, user information, and conversation lists locally so that they can be quickly restored and viewed offline after a network disconnection or refresh. On desktop or mobile platforms, SQLite is commonly used as a local database; in the browser environment, we use sql.js to simulate this behavior.

#### How sql.js Works
- sql.js: This is a project that compiles SQLite into JavaScript using Emscripten, allowing native SQL statements to be executed directly in the browser.
- IndexedDB: Since the browser environment cannot directly access the local file system, sql.js will store all data in memory or the browser's native database IndexedDB, and persist it.
- Unified Database Access: From a business perspective, all client SDKs use "one set of SQL" for reading and writing, without the need for deliberate differentiation. For developers, migrating or sharing some logic is very convenient.

### 2.3 Front-end API Design

- Methods Exposed by SDK: For example `login()`, `sendMessage()`, `getConversationListSplit()`, etc.; these interfaces will call the corresponding functions inside WASM after being wrapped as a JSON string internally.
- Event/Callback Handling: For examples like new message notifications, connection status changes, etc., JS sets up event listeners. Once a message returns from WASM, it notifies through the corresponding events.

## 3. Core Process

import wasm_call_map from './assets/wasm_call_map.png'

<p align="center">
    <img src={wasm_call_map} alt="Preview" width="80%"/>
</p>

As shown in the figure above, the core invocation process of the WASM SDK is:
1. The user initiates a call to the SDK API (exposed by the JS layer).
2. The JS SDK layer passes the invocation request to the OpenIMSDK Core implemented in WASM.
3. The WASM Core reversely invokes the JS layer to execute the actual SQLite read/write logic (implemented by sql.js).
4. The JS Database Access Logic completes the SQLite operations, then returns the results to the WASM Core.
5. The WASM Core encapsulates and processes the results, then returns them to the JS SDK layer.
6. Finally, the JS layer returns the processing results to the invoking user.

> **Performance Optimization**: SQLite operations executed by the JS layer are placed in a Web Worker to avoid blocking the UI thread.

## 4. Advantages and Limitations

### Advantages
1. Highly reusable, reducing maintenance costs
- Because multiple ends (Web, desktop, mobile) can share the same OpenIMSDK Core (written in Go), simply compiling it to the target platform can significantly reduce the difficulty of developing and maintaining multi-person, multi-end projects.
2. Near-native performance
- WASM code executes efficiently, providing a friendlier environment for heavy-load processing like encryption/decryption, serialization, and message synchronization, allowing large or complex IM apps to run smoothly in a browser.
3. Stable local caching
- With the local caching from sql.js + IndexedDB, users can still access chat records and conversation lists after the page is refreshed or the network is disconnected, improving availability and user experience.
4. Security
- WebAssembly runs within a sandbox environment. The communication boundary between JS and WASM is clear, effectively reducing unexpected memory access risks.
5. Fast Iteration
- When core logic needs to be updated, simply recompile the `.wasm` file and replace the deployment; keeping front-end interfaces consistent keeps upgrade costs low.

### Limitations
1. Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge, etc.) have relatively complete WebAssembly support, but compatibility issues might arise in older browsers.
- IndexedDB has unusual compatibility or capacity limits in specific environments, requiring advanced planning.
2. Learning and Debugging Difficulty
- Although integrating the SDK only requires calling interfaces encapsulated in the JS layer, debugging the interaction between Go WASM and sql.js for underlying issues is more complex than pure JS debugging.
3. Initial Load File Size
- The `.wasm` file can be relatively large, which adds loading time under poor network connections. This can be optimized along with CDNs and lazy loading strategies.
4. Web Worker Communication Overhead
- Although placing SQLite operations in Web Worker helps avoid UI blocking, there is some overhead with cross-thread communication, requiring balance in business design.

## 5. Summary

This OpenIM Web SDK, based on WebAssembly and virtualized SQLite, inherits the network and business logic of the Go end to the greatest extent while fully utilizing the browser's built-in IndexedDB for local persistent storage. For developers, without rewriting complex front-end business logic, they can achieve IM capabilities with near-native performance.
- Shared Core: Shares the same core logic with SDKs on other platforms (mobile, desktop), reducing duplicated development.
- Local Cache: Users can smoothly view message history in the browser and complete most operations even if the network is poor.
- Self-hosted: Developers have complete control over backend services, minimizing the data security and cost pressures imposed by external dependencies.

If you're looking for an open-source IM solution dynamically deployable on the Web, or want a self-hosted model controlling data and backend architecture, give this SDK a try. It can bring higher performance and security, simplify the front-end and back-end collaboration process, and achieve fast delivery.

More Resources
- [OpenIMSDK Official Website](https://www.openim.io)
- [OpenIMSDK Documentation](https://docs.openim.io)
- [GitHub Repository](https://github.com/openimsdk)
