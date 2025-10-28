---
sidebar_position: 15
title: 标记群聊会话已读后回调
hide_title: true
---

# 群聊消息已读上报后回调

## 功能说明
操作成功后，业务服务端可通过该回调，进行必要的数据同步或其他业务逻辑处理。




## 注意事项
- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 IMServer 向 业务服务端发起 HTTP/HTTPS POST 请求。
- 业务服务端需在超时时间内响应此请求。


## 可能触发该回调的场景
- 客户端调用MarkAllConversationMessageAsRead 和 MarkConversationMessageAsRead时触发。

## 回调发生时机
- 用户通过客户端进行标记群聊会话已读成功后。

## 接口说明

### 请求 URL 示例
此处`CallbackCommand`为：`callbackAfterGroupMsgReadCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterGroupMsgReadCommand?contenttype=json
```

### 请求包示例
```json
{
  "callbackCommand": "callbackGroupMsgReadCommand",
  "sendID": "user123",
  "receiveID": "group789",
  "unreadMsgNum": 5,
  "contentType": 101,
}
```

### 请求包字段说明

| 对象             | 类型   | 描述                                               |
|-----------------|--------|----------------------------------------------------|
| callbackCommand | string | 回调命令，这里是群消息已读回调                    |
| sendID          | string | 发送消息的用户ID                                     |
| receiveID       | string | 接收消息的群组ID                                     |
| unreadMsgNum    | int64  | 未读消息数量                                         |
| contentType | int | 消息类型 |


## 应答包示例

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": ""
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

