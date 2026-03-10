---
title: Browser
hide_title: true
sidebar_position: 5
---


## 🧭 Browser 集成指南

> 本文档详细介绍了如何在 Web / Electron 项目中集成[OpenIM WASM Client SDK](https://github.com/openimsdk/open-im-sdk-web-wasm)，并实现快速接入与消息通信功能。

---

### 🚀 快速体验 Demo

我们强烈建议您在开始集成之前，先运行我们提供的官方示例项目：

👉 [OpenIM Electron Demo](https://github.com/openimsdk/openim-electron-demo)

该 Demo 可以帮助您：

- 快速验证 IM SDK 的核心功能  
- 熟悉登录、收发消息的完整流程  
- 避免集成过程中出现的路径和配置问题

---

### 🧰 环境要求

在集成 SDK 之前，请确保：

- Node.js ≥ 16.x  
- npm 或 yarn 包管理工具  
- 浏览器支持 WebAssembly (主流现代浏览器均支持)  
- 前端框架（例如 React、Vue、Electron）已正确初始化

> ⚠️ 注意：如果使用 Webpack 4，请参考[这个 issue](https://github.com/openimsdk/open-im-sdk-web-wasm/issues/73)完成额外配置。

---

### 📦 安装依赖

```bash
npm install @openim/wasm-client-sdk
# 或者
yarn add @openim/wasm-client-sdk
```

---

### 📁 配置 WASM 静态资源

SDK 依赖 WebAssembly 文件运行。请将静态资源正确拷贝到项目 `public` 目录中。

1. 进入 `node_modules/@openim/wasm-client-sdk` 目录  
2. 找到 `assets` 文件夹  
3. 拷贝以下文件至项目的 `public` 目录：

```bash
openIM.wasm
sql-wasm.wasm
wasm_exec.js
```

4. 在 `public/index.html` 中添加以下 `<script>` 引入：

```html
<script src="/wasm_exec.js"></script>
```

> ⚠️ 路径必须与 `coreWasmPath`、`sqlWasmPath` 参数对应。

---

### 🧭 初始化 SDK

在项目入口文件中初始化 SDK。

```ts
import { getSDK } from '@openim/wasm-client-sdk';

const IMSDK = getSDK({
  coreWasmPath: "/openIM.wasm",      // wasm 核心文件路径
  sqlWasmPath: "/sql-wasm.wasm",     // sqlite wasm 文件路径
  debug: true                        // 是否开启调试日志
});
```

> 💡 建议将 `getSDK` 的调用放在应用生命周期的早期阶段，确保全局只初始化一次。

---

### 🔐 登录与监听事件

SDK 提供了一系列事件回调用于监听连接状态。  
在登录前，您可以绑定这些事件，便于后续状态监控与重连处理。

```ts
import { getSDK, CbEvents } from '@openim/wasm-client-sdk';

const IMSDK = getSDK();

// 连接相关事件
IMSDK.on(CbEvents.OnConnecting, () => console.log('⏳ 连接中...'));
IMSDK.on(CbEvents.OnConnectSuccess, () => console.log('✅ 连接成功'));
IMSDK.on(CbEvents.OnConnectFailed, (e) => console.error('❌ 连接失败', e));
IMSDK.on(CbEvents.OnUserTokenExpired, () => console.warn('⚠️ Token 已过期'));

// 登录
IMSDK.login({
  userID: 'yourUserID',
  token: 'yourToken',
  platformID: 5,  // Web 端为 5
  apiAddr: 'http://your-server-ip:10002',
  wsAddr: 'ws://your-server-ip:10001',
})
  .then(() => console.log('🎉 登录成功'))
  .catch(({ errCode, errMsg }) => console.error('🚫 登录失败', errCode, errMsg));
```

> 🔁 **最佳实践**：  
> - 登录前先绑定事件，避免漏接状态变更。  
> - Token 过期后需重新调用 `IMSDK.login()` 刷新连接。  
> - `login`调用成功并不代表连接IMServer成功，需监听连接事件确认状态。

---

### 💬 收发消息

#### 监听消息

```ts
IMSDK.on(CbEvents.OnRecvNewMessages, ({ data: messages }) => {
  messages.forEach((msg) => {
    console.log('📩 收到新消息:', msg);
  });
});
```

#### 发送文本消息

```ts
// 创建一条文本消息
const { data: message } = await IMSDK.createTextMessage('Hello OpenIM!');

// 发送消息
IMSDK.sendMessage({
  recvID: 'targetUserID', // 单聊时填写
  groupID: '',            // 群聊时填写
  message,
})
  .then(({ data: succeedMessage }) => {
    console.log('✅ 发送成功', succeedMessage);
  })
  .catch(({ errCode, errMsg }) => {
    console.error('🚫 发送失败', errCode, errMsg);
  });
```

> 📝 **Tips**：  
> - 单聊使用 `recvID`，群聊使用 `groupID`。  
> - 可以使用 `IMSDK.createImageMessageByFile()`、`IMSDK.createVideoMessageByFile()` 等 API 发送其他类型的消息。  
> - 发送成功后返回的是服务端补全后的完整消息结构。

---

### 🧪 常见问题排查

| 问题类型                    | 可能原因                                                                 | 解决方案                                                                                 |
|-----------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| ❌ 控制台提示 `window.Go() is undefined` | 静态资源`wasm_exec.js`未拷贝或路径配置不一致                                                 | 确认 `public` 目录下文件存在且路径与初始化参数一致                                       |
| ⚠️ `WebAssembly` 初始化失败 | 浏览器版本过低或路径不正确                                               | 使用现代浏览器，检查 `coreWasmPath` 与 `sqlWasmPath` 路径                                |
| 🚫 连接失败                  | Token 错误、API 地址错误、端口被防火墙拦截                                 | 检查获取 Token 时传入的平台和 IMSDK 登录时传入的平台号是否一致，确认 `apiAddr`、`wsAddr` 可访问                                     |
---

### 🧭 调试建议

- 开启 `debug: true` 以便查看详细日志
- 通过浏览器 DevTools → Network 监控 WS 连接状态
- 使用 `IMSDK.getLoginStatus()` 判断登录态

---

### 🧱 更多 API

SDK 提供了丰富的 API，涵盖：

- ✅ 用户信息管理  
- 📩 消息记录查询  
- 🧑‍🤝‍🧑 群组操作  
- 📡 自定义消息体发送  
- 🛡️ 会话管理、撤回、已读回执等

👉 完整接口文档请参考：  
[IMSDK API列表](../api)

---

### 📚 参考资料

- [OpenIM 官网](https://openim.io)  
- [OpenIM GitHub](https://github.com/openimsdk)  
- [WebAssembly MDN 文档](https://developer.mozilla.org/zh-CN/docs/WebAssembly)