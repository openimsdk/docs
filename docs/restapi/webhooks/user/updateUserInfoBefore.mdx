---
title: 更新用户信息之前的回调
hide_title: true
---

# 更新用户信息之前的回调

## 功能说明

App 业务服务端可以通过该回调获取用户更新个人信息的请求，或对请求做修改和干预。

## 注意事项

- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 OpenIM Server 向 App 后台发起 HTTP/HTTPS POST 请求。
- APP 业务服务端需在超时时间内响应此请求。

## 可能触发该回调的场景

- App 用户通过客户端更新个人信息。
- App 管理员通过 REST API 更新用户信息。:

## 回调发生时机

- OpenIM Server 准备更新用户信息之前。

## 接口说明

### 请求 URL 示例

此处`CallbackCommand`为：`callbackBeforeUpdateUserInfoExCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeUpdateUserInfoExCommand?contenttype=json
```

### 请求包示例

```json
{
  "callbackCommand": "callbackBeforeUpdateUserInfoExCommand",
  "userID": "user123",
  "nickName": "John Doe",
  "faceURL": "http://example.com/path/to/fac  e/image.png",
  "ex": "Extra data"
}
```

### 请求包字段说明

| 字段            | 类型        | 描述                                   |
| --------------- | ----------- | -------------------------------------- |
| callbackCommand | string      | 回调命令，这里是更新用户信息之前的回调 |
| userID          | string      | 用户的唯一标识符                       |
| nickName        | StringValue | 用户的昵称                             |
| faceURL         | StringValue | 用户头像的 URL                         |
| ex              | StringValue | 额外的数据字段                         |

## 应答包示例

### 允许更新

允许用户更新信息。

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "0",
  "nickName": "John Doe Updated",
  "faceURL": "http://example.com/new/face/image.png",
  "ex": "Updated extra data"
}
```

## 应答包字段说明

| 字段       | 值                           | 说明                                                                                                |
| ---------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode | 0                            | 表示业务系统的回调是否正确执行。`0`表示操作成功。                                                   |
| errCode    | 5001                         | 表示自定义错误码，范围在 5000-9999 之间。在 actionCode 不等于 0 时设置；在 nextCode 等于 1 时设置。 |
| errMsg     | "An error message"           | 自定义错误码对应的简单错误信息。                                                                    |
| errDlt     | "Detailed error information" | 自定义错误码对应的详细错误信息。                                                                    |
| nextCode   | 1                            | 下一步执行指令，`1`表示拒绝继续执行，actionCode 等于`0`时设置。                                     |
| nickName   | StringValue                  | 用户的昵称                                                                                          |
| faceURL    | StringValue                  | 用户头像的 URL                                                                                      |
| ex         | StringValue                  | 额外的数据字段                                                                                      |
