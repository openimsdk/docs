---
title: 单聊消息撤回后的回调
hide_title: true
---

# 单聊消息撤回后的回调

## 功能说明
App 业务服务端可以通过该回调获取用户撤回单聊消息的请求。

## 注意事项
- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 OpenIMServer 向 App 后台发起 HTTP/HTTPS POST 请求。
- APP 业务服务端需在超时时间内响应此请求。

## 可能触发该回调的场景
- App 用户通过客户端撤回单聊消息。
- App 管理员通过 REST API admin_msgwithdraw 接口 撤回单聊消息。


## 回调发生时机
- 单聊信息撤回成功之后

## 接口说明

### 请求 URL 示例
此处`CallbackCommand`为：`callbackBeforeAfterMsgCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeAfterMsgCommand?contenttype=json
```

### 请求包示例
```json
{
  "callbackCommand": "callbackBeforeAfterMsgCommand",
  "conversationID": "si_u1_u2:0",
  "seq": 10,
  "userID": "user456"
}
```

### 请求包字段说明

| 对象             | 类型   | 描述                                               |
|-----------------|--------|----------------------------------------------------|
| callbackCommand | string | 回调命令，这里是撤回单聊消息回调                  |
| conversationID | string | 会话ID |
| seq    | string | 消息序列                               |
| userID   | string | 消息发送者的用户ID                               |


## 应答包示例

### 成功应答

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0
}
```



## 应答包字段说明
| 字段         | 值                           | 说明                                       |
|-------------|------------------------------|------------------------------------------|
| actionCode  | 0                            | 表示业务系统的回调是否正确执行。`0`表示操作成功。     |
| errCode     | 0                            | 表示自定义错误码，此处填0代表忽略回调结果。|
| errMsg      | "An error message"           | 自定义错误码对应的简单错误信息。|
| errDlt      | "Detailed error information" | 自定义错误码对应的详细错误信息。|
| nextCode    | 1                            | 下一步执行指令，`1`表示拒绝继续执行，actionCode等于`0`时设置。|

