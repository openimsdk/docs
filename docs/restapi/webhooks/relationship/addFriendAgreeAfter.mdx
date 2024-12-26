---
title: 添加好友对方同意之后的回调
hide_title: true
---

# 在添加好友对方同意之后的回调

## 功能说明

App 后台可以通过该回调实时查看用户的新增好友信息。

## 注意事项

- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 OpenIM Server 向 App 后台发起 HTTP/HTTPS POST 请求。
- APP 业务服务端需在超时时间内响应此请求。

## 可能触发该回调的场景

- App 用户同意加好友请求后。

## 回调发生时机

- OpenIM Server 成功添加好友后触发

## 接口说明

### 请求 URL 示例

此处`CallbackCommand`为：`callbackAfterAddFriendCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterAddFriendCommand?contenttype=json
```

### 请求包示例

```json
{
  "callbackCommand": "callbackAfterAddFriendCommand",
  "fromUserID": "user123",
  "toUserID": "user456",
  "handleMsg": "Let's be friends!",
  "handleResult": 1
}
```

### 请求包字段说明

| 对象            | 类型   | 描述                                   |
| --------------- | ------ | -------------------------------------- |
| callbackCommand | string | 回调命令，这里是同意添加好友之后的回调 |
| fromUserID      | string | 发起好友同意请求的用户 ID              |
| toUserID        | string | 接收好友同意请求的用户 ID              |
| handleMsg          | string | 好友请求处理的附加消息                        |
| handleResult          | int32 | 好友请求处理的结果                        |

## 应答包示例

### 处理结果

处理用户同意添加好友的请求的结果。

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "1"
}
```

## 应答包字段说明

| 字段       | 值                           | 说明                                                                                                    |
| ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| actionCode | 0                            | 表示业务系统的回调是否正确执行。`0`表示操作成功。                                                       |
| errCode    | 20001                        | 表示自定义错误码，范围在 20001-29999 之间。在 actionCode 不等于 0 时设置；在 nextCode 不等于 1 时设置。 |
| errMsg     | "An error message"           | 自定义错误码对应的简单错误信息。                                                                        |
| errDlt     | "Detailed error information" | 自定义错误码对应的详细错误信息。                                                                        |
| nextCode   | 1                            | 下一步执行指令，`1`表示拒绝继续执行，actionCode 等于`0`时设置。                                       |
