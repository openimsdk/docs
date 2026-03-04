---
sidebar_position: 14
title: 邀请新成员加入群组之前的回调
hide_title: true
---


# 邀请新成员加入群组之前的回调

## 功能说明

邀请新成员加入群组前，业务服务端可拒绝此请求，或对请求做修改和干预。




## 注意事项
- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 IMServer 向 业务服务端发起 HTTP/HTTPS POST 请求。
- 业务服务端需在超时时间内响应此请求。



## 可能触发该回调的场景
- 用户通过客户端或APP管理员通过REST API进行相应操作前

## 回调发生时机
- 邀请新成员加入群组之前。

## 接口说明

### 请求 URL 示例
此处`CallbackCommand`为：`callbackBeforeInviteJoinGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeInviteJoinGroupCommand?contenttype=json
```

### 请求包示例

```json
{
  "callbackCommand": "callbackBeforeInviteJoinGroupCommand",
  "operationID": "1646445464564",
  "groupID": "12345",
  "reason": "friend",
  "invitedUserIDs": "[user1,user2]"
}
```


### 请求包字段说明

| 对象                     | 类型   | 描述                                                    |
|-------------------------|--------|----------------------------------------------------------------|
| callbackCommand         | string | 回调命令，这里是邀请好友加入群组之前的回调。                             |
| operationID | string | operationID用于全局链路追踪 |
| groupID                 | string | 群组的唯一标识符。                                               |
| reason | string | 邀请理由 |
| invitedUserIDs                  | string[] | 加入群组的用户ID。                                             |

## 应答包示例

### 允许创建
允许用户加入群组。

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0,
    "invitedUserIDs": "[user1,user2]"
}

```

## 应答包字段说明

| 字段         | 值                           | 说明                                       |
|-------------|------------------------------|------------------------------------------|
| actionCode  | 0                            | 表示业务系统的回调是否正确执行。`0`表示操作成功。     |
| errCode     | 5001                        | 表示自定义错误码，范围在5000-9999之间。在 actionCode 不等于0时设置；在 nextCode 等于1时设置。|
| errMsg      | "An error message"           | 自定义错误码对应的简单错误信息。|
| errDlt      | "Detailed error information" | 自定义错误码对应的详细错误信息。|
| nextCode    | 1                            | 下一步执行指令，actionCode等于`0`时设置，`1`表示拒绝继续执行。|
| invitedUserIDs                  | string[] | 加入群组的用户ID。                                             |



