---
title: 创建群聊对话前的回调
hide_title: true
---

# 在创建群聊对话前的回调

## 功能说明

App 业务服务端可以通过该回调实时对用户的群聊对话创建进行操作，如：对发群聊对话创建进行实时记录、允许创建群聊对话。

## 注意事项

- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 OpenIMServer 向 App 后台发起 HTTP/HTTPS POST 请求。
- APP 业务服务端需在超时时间内响应此请求。

## 可能触发该回调的场景

- App 用户通过客户端创建群聊对话。

## 回调发生时机

- OpenIMServer 收到用户创建群聊对话之后、将该信息下发给目标用户之前。

## 接口说明

### 请求 URL 示例

此处`CallbackCommand`为：`callbackBeforeCreateSingleChatConversationsCommand`

```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeCreateSingleChatConversationsCommand?contenttype=json
```

### 请求包示例

```json
{
  "callbackCommand": "callbackBeforeCreateSingleChatConversationsCommand",
  "ownerUserId": "123228123",
  "conversationId": "sg_215808001",
  "conversationType": 3,
  "groupId": "215808001",
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
| callbackCommand    | string | 回调命令，这里是创建群聊对话前的回调                      |
| ownerUserId      | string  | 会话的拥有者用户 Id                                                       |
| conversationId   | string  | 会话 Id                                                                   |
| conversationType | int     | 会话类型，1 为单聊，3 为群聊                                              |
| groupId           | string  | 会话群组 Id，当会话类型为 3 时，此字段生效                                |
| recvMsgOpt       | int     | 接收消息参数，0 为接收消息；1 为不接收消息；2 为接收消息但不提醒          |
| isPinned         | boolean | 会话是否置顶                                                              |
| isPrivateChat    | boolean | 是否开启阅后即焚                                                          |
| burnDuration     | int     | 阅后即焚消息持续时间                                                      |
| groupAtType      | int     | 群会话公告强提示类型，群公告有人**@ownerUserID** , **@全体** 的特殊标识符 |
| attachedInfo     | string  | openIM 使用的拓展字段                                                     |
| ex               | string  | 用户使用的拓展字段                                                        |

## 应答包示例

### 允许创建

允许创建群聊对话。

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "",
  "recvMsgOpt": 1,
  "isPinned": true,
  "isPrivateChat": false,
  "burnDuration": 30,
  "groupAtType": 0,
  "attachedInfo": "Modified attached info",
  "ex": "Modified extra data"
}
```

## 应答包字段说明

| 字段          | 值         | 说明                                                                                                |
| ------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| actionCode    | 0          | 表示业务系统的回调是否正确执行。`0`表示操作成功。                                                   |
| errCode       | 5001       | 表示自定义错误码，范围在 5000-9999 之间。在 actionCode 不等于 0 时设置；在 nextCode 等于 1 时设置。 |
| errMsg     | "An error message"           | 自定义错误码对应的简单错误信息。                                |
| errDlt     | "Detailed error information" | 自定义错误码对应的详细错误信息。                                |
| nextCode      | 1          | 下一步执行指令，`1`表示拒绝继续执行，actionCode 等于`0`时设置。                                     |
| recvMsgOpt    | int        | 接收消息参数，0 为接收消息；1 为不接收消息；2 为接收消息但不提醒                                    |
| isPinned      | boolean    | 会话是否置顶                                                                                        |
| isPrivateChat | boolean    | 是否开启阅后即焚                                                                                    |
| burnDuration  | int        | 阅后即焚消息持续时间                                                                                |
| groupAtType   | int        | 群会话公告强提示类型，群公告有人**@ownerUserID** , **@全体** 的特殊标识符                           |
| attachedInfo  | string     | openIM 使用的拓展字段                                                                               |
| ex            | string     | 用户使用的拓展字段                                                                                  |
