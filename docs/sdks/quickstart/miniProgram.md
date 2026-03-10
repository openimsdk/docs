---
title: Mini Program
hide_title: true
sidebar_position: 7
---

## 📱 Mini Program 集成指南

> 本文档详细介绍了如何在小程序或 Web 环境中快速集成 [OpenIM Client SDK](https://www.npmjs.com/package/@openim/client-sdk)，实现即时通讯能力。

---

### ⚠️ 使用须知

:::caution 注意

- 该版本 JSSDK 仅适用于 **IM Server v3.8.2+** 版本  
- SDK 与 IM Server **直接通信**，**不在本地存储消息或会话**  
- 适用范围广：
  - ✅ Web 开发
  - ✅ 微信小程序
  - ✅ uniapp

:::

---

### 🧰 环境准备

在集成前，请确保以下环境满足：

- Node.js ≥ 16.x  
- 已搭建可访问的 IM Server（ws + api）  
- 小程序或 Web 项目已初始化  
- 已开通 HTTPS（微信小程序要求）

> 💡 **提示**：微信小程序环境中需确保 `wss://` 地址配置正确并在后台域名白名单中。

---

### 📦 安装依赖

```bash
npm install @openim/client-sdk --save
# 或
yarn add @openim/client-sdk
```

---

### 🧭 引入与初始化 SDK

```ts
import { getSDK } from '@openim/client-sdk';

const IMSDK = getSDK({
  debug: true, // 开启调试模式（可选）
});
```

> ✅ 建议：在应用初始化阶段（如 `App.vue` 或 `app.js` 中）只初始化一次，全局共享 IMSDK 实例。

---

### 🔐 登录与连接状态监听

在调用 `login` 之前，建议先注册连接事件监听，以便获取 SDK 状态变化。

```ts
import { getSDK, CbEvents, CallbackEvent } from '@openim/client-sdk';

const IMSDK = getSDK();

// 绑定连接状态监听
IMSDK.on(CbEvents.OnConnecting, handleConnecting);
IMSDK.on(CbEvents.OnConnectFailed, handleConnectFailed);
IMSDK.on(CbEvents.OnConnectSuccess, handleConnectSuccess);
IMSDK.on(CbEvents.OnUserTokenExpired, handleTokenExpired);

// 登录
IMSDK.login({
  userID: 'your-user-id',
  token: 'your-token',
  platformID: 5, // Web/小程序为 5
  wsAddr: 'ws://your-server-ip:10001',
  apiAddr: 'http://your-server-ip:10002',
});

function handleConnecting() {
  console.log('⏳ 连接中...');
}

function handleConnectFailed({ errCode, errMsg }: CallbackEvent) {
  console.error('❌ 连接失败', errCode, errMsg);
}

function handleConnectSuccess() {
  console.log('✅ 连接成功');
}

function handleTokenExpired() {
  console.warn('⚠️ Token 已过期，请重新登录');
}
```

> 🔁 **最佳实践**：
>
> - 登录前绑定监听事件，避免漏接状态  
> - 登录后 IM SDK 将自动维持长连接  
> - Token 过期时需重新登录
> - `login`调用成功并不代表连接IMServer成功，需监听连接事件确认状态。

---

### 💬 收发消息

#### 📥 监听接收消息

```ts
import { CbEvents, CallbackEvent, MessageItem } from '@openim/client-sdk';

IMSDK.on(CbEvents.OnRecvNewMessages, handleNewMessages);

function handleNewMessages({ data }: CallbackEvent<MessageItem[]>) {
  console.log('📩 收到新消息', data);
}
```

---

#### 📤 发送文本消息

```ts
// 1. 创建文本消息
const { data: message } = await IMSDK.createTextMessage('Hello OpenIM!');

// 2. 发送消息
IMSDK.sendMessage({
  recvID: 'recipientUserID', // 单聊
  groupID: '',               // 群聊填群ID
  message,
})
  .then(() => {
    console.log('✅ 消息发送成功');
  })
  .catch((err) => {
    console.error('🚫 消息发送失败', err);
  });
```

> 💡 **提示**：
>
> - 单聊使用 `recvID`，群聊使用 `groupID`  
> - 发送成功后，接收方会通过 `OnRecvNewMessages` 回调获取消息  
> - SDK 还支持多种消息类型

---

### 🧪 常见问题排查

| 问题                             | 可能原因                                                     | 解决方案                                                                                 |
|----------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------|
| ❌ 无法连接                      | WebSocket 地址配置错误 / 证书问题                           | 确认 `wsAddr` / `wssAddr` 地址有效，且在小程序后台配置白名单                             |
| 🚫 登录失败                      | Token 错误 / IM Server 地址错误                             | 检查获取 Token 时传入的平台和 IMSDK 登录时传入的平台号是否一致，确认服务器可访问                                                   |
| 📡 无法接收消息                  | 未监听 `OnRecvNewMessages` 事件 / 网络中断                   | 确保事件绑定正确，网络可用，必要时调用 `getLoginStatus` 检查状态                         |
| 🕒 小程序无法连接 ws:// 地址     | 微信小程序仅允许 wss:// 安全连接                             | 使用合法 HTTPS 证书，并在小程序后台配置 wss 白名单                                     |

---

### 🧭 调试建议

- 开启 `debug: true` 查看详细日志  
- 使用浏览器 DevTools / 微信开发者工具检查 WebSocket 连接状态  
- 调用 `IMSDK.getLoginStatus()` 获取实时登录状态  

---

### 🧱 更多 API

[OpenIM Client SDK](https://www.npmjs.com/package/@openim/client-sdk) 提供了丰富的能力，包括但不限于：

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
- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)  
