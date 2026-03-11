---
title: 创建单聊会话后的回调
hide_title: true
---

# 创建单聊会话后的回调

## 功能说明

App 业务服务端可以通过该回调实时对用户的单聊消息进行操作，如：

- 对创建单聊会话进行实时记录（记录日志或同步到其他系统）。

## 注意事项

- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 OpenIMServer 向 App 后台发起 HTTP/HTTPS POST 请求。
- APP 业务服务端需在超时时间内响应此请求。

## 可能触发该回调的场景

- App 用户通过客户端创建单聊会话。
- App 管理员通过 REST API 创建单聊会话

## 回调发生时机

- OpenIMServer 收到用户创建单聊会话消息，并将该消息下发给目标用户之后。

## 接口说明

### 请求 URL 示例

此处`CallbackCommand`为：`callbackAfterSendSingleMsgCommand`

```plaintext
{WEBHOOK_ADDRESS}/callbackAfterSendSingleMsgCommand?contenttype=json
```


### 请求包示例

```json
{
  "callbackCommand": "callbackAfterCreateSingleChatConversationsCommand",
  "ownerUserId": "123228123",
  "conversationId": "si_123228123_622925731",
  "conversationType": 1,
  "userId": "622925731",
  "recvMsgOpt": 0,
  "isPinned": false,
  "isPrivateChat": false,
  "burnDuration": 0,
  "groupAtType": 0,
  "attachedInfo": "",
  "ex": "Extra conversation data"
}
```

### 请求包字段说明

| 对象             | 类型    | 描述                                                                      |
| ---------------- | ------- | ------------------------------------------------------------------------- |
| callbackCommand  | string  | 回调命令，这里是创建单聊会话后的回调                                      |
| ownerUserId      | string  | 会话的拥有者用户 Id                                                       |
| conversationId   | string  | 会话 Id                                                                   |
| conversationType | int     | 会话类型，1 为单聊，3 为群聊                                              |
| userId           | string  | 会话用户 Id，当会话类型为 1 时，此字段生效                                |
| recvMsgOpt       | int     | 接收消息参数，0 为接收消息；1 为不接收消息；2 为接收消息但不提醒          |
| isPinned         | boolean | 会话是否置顶                                                              |
| isPrivateChat    | boolean | 是否开启阅后即焚                                                          |
| burnDuration     | int     | 阅后即焚消息持续时间                                                      |
| groupAtType      | int     | 群会话公告强提示类型，群公告有人**@ownerUserID** , **@全体** 的特殊标识符 |
| attachedInfo     | string  | openIM 使用的拓展字段                                                     |
| ex               | string  | 用户使用的拓展字段                                                        |

## 应答包示例

### 成功响应

App 业务服务端同步数据后，发送回调应答包

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

| 字段       | 值                           | 说明                                                            |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | 表示业务系统的回调是否正确执行。`0`表示操作成功。               |
| errCode    | 0                            | 表示自定义错误码，此处填 0 代表忽略回调结果。                   |
| errMsg     | "An error message"           | 自定义错误码对应的简单错误信息。                                |
| errDlt     | "Detailed error information" | 自定义错误码对应的详细错误信息。                                |
| nextCode   | 1                            | 下一步执行指令，`1`表示拒绝继续执行，actionCode 等于`0`时设置。 |
