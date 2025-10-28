---
sidebar_position: 16
title: 解散群组后回调
hide_title: true
---


# 解散群组后回调

## 功能说明
操作成功后，业务服务端可通过该回调，进行必要的数据同步或其他业务逻辑处理。

## 注意事项
- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 IMServer 向 业务服务端发起 HTTP/HTTPS POST 请求。
- 业务服务端需在超时时间内响应此请求。


## 可能触发该回调的场景
- 用户通过客户端或APP管理员通过REST API进行相应操作成功后。

## 回调发生时机
- 群组解散成功后。

## 接口说明

### 请求 URL 示例
此处`CallbackCommand`为：`callbackAfterDisMissGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterDisMissGroupCommand?contenttype=json
```

### 请求包示例

```json
{
  "callbackCommand": "callbackAfterDisMissGroupCommand",
  "groupID": "G001",
  "groupType": 2,
  "ownerID": "user123",
  "membersID": ["user456", "user789"]
}

```


### 请求包字段说明

| 对象                     | 类型   | 描述                                                    |
|-------------------------|--------|----------------------------------------------------------------|
| callbackCommand         | string | 回调命令，这里是群组解散后的回调                             |
| groupID                 | string | 群组的唯一标识符                                               |
| groupType               | int32  | 群类型，固定为2。                                                    |
| ownerID                 | string | 群主ID                                       |
| membersID     | array  | 群组成员的列表，包括用户ID，表示解散时群组中的成员            |


## 应答包示例

### 处理结果
App 后台记录群解散信息后，发送回调应答包。

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 1
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

