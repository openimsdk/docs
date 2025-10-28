---
sidebar_position: 100
title: 转让群主之后的回调
hide_title: true
---

# 转让群主之后的回调

## 功能说明

操作成功后，业务服务端可通过该回调，进行必要的数据同步或其他业务逻辑处理。

## 注意事项
- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 IMServer 向 业务服务端发起 HTTP/HTTPS POST 请求。
- 业务服务端需在超时时间内响应此请求。


## 可能触发该回调的场景

- 用户通过客户端或APP管理员通过REST API进行相应操作成功后。

## 回调发生时机
- 转让群主成功后。

## 接口说明

### 请求 URL 示例
此处`CallbackCommand`为：`callbackAfterTransferGroupOwnerCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterTransferGroupOwnerCommand?contenttype=json
```

### 请求包示例
```json
{
  "callbackCommand": "callbackAfterTransferGroupOwnerCommand",
  "groupID": "G12345",
  "oldOwnerUserID": "userOld123",
  "newOwnerUserID": "userNew456"
}
```

### 请求包字段说明

| 字段            | 类型   | 描述                               |
|---------------|--------|----------------------------------|
| callbackCommand | string | 回调命令，这里是转移群组所有权之后的回调 |
| groupID        | string | 群组的唯一标识符                    |
| oldOwnerUserID | string | 原群主的用户ID                      |
| newOwnerUserID | string | 新群主的用户ID                      |

## 应答包示例

### 处理成功
表示业务系统成功处理了群组所有权转移的回调。

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0
}
```

### 处理失败
表示业务系统无法处理该回调，提供错误信息。

```json
{
    "actionCode": 1,
    "errCode": 5002,
    "errMsg": "Unable to process the request",
    "errDlt": "The group ownership transfer cannot be processed due to internal policy",
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