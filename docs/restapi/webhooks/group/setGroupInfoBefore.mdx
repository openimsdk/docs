---
sidebar_position: 7
title: 设置群组信息之前的回调
hide_title: true
---

# 设置群组信息之前的回调

## 功能说明


设置群组信息前，业务服务端可拒绝此请求，或对请求做修改和干预。

## 注意事项
- 为启用回调，必须配置回调 URL，并开启本条回调协议对应的开关。配置方法详见 [回调说明](../introduction) 文档。
- 回调的方向是 IMServer 向 业务服务端发起 HTTP/HTTPS POST 请求。
- 业务服务端需在超时时间内响应此请求。

## 可能触发该回调的场景

- 用户通过客户端或APP管理员通过REST API进行相应操作前

## 回调发生时机

- 设置群组信息之前。

## 接口说明

### 请求 URL 示例
此处`CallbackCommand`为：`callbackBeforeSetGroupInfoExCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeSetGroupInfoExCommand?contenttype=json
```

### 请求包示例

```json
{
  "callbackCommand": "callbackBeforeSetGroupInfoExCommand",
  "operationID": "1646445464564",
  "groupID": "G002",
  "groupName": {
    "value": "NewGroupName"
  },
  "notification": {
    "value": "Updated group notification"
  },
  "introduction": {
    "value": "Updated group introduction"
  },
  "faceURL": {
    "value": "http://example.com/new/path/to/face/image.png"
  },
  "ex": {
    "value": "Updated extra data"
  },
  "needVerification": {
    "value": 0
  },
  "lookMemberInfo": {
    "value": 1
  },
  "applyMemberFriend": {
    "value": 0
  }
}
```

### 请求包字段说明

| 字段              | 类型        | 描述                                               |
| ----------------- | ----------- | -------------------------------------------------- |
| callbackCommand   | string      | 回调命令，这里为设置群组信息之前的回调             |
| operationID       | string      | 用于全局链路追踪，建议使用时间戳，在每个请求中独立 |
| groupID           | string      | 群组的唯一标识符                                   |
| groupName         | StringValue | 群组的名称                                         |
| notification      | StringValue | 群组的通知信息                                     |
| introduction      | StringValue | 群组的简介                                         |
| faceURL           | StringValue | 群组的图标的 URL                                   |
| ex                | StringValue | 额外的数据字段                                     |
| needVerification  | Int32Value  | 是否需要验证加入群组                               |
| lookMemberInfo    | Int32Value  | 是否可以查看群成员信息                             |
| applyMemberFriend | Int32Value  | 是否可以申请加群成员为好友                         |

## 应答包示例

### 允许修改

允许修改群组信息。

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "nextCodeValue",
  "groupInfoForSet": {
    "groupID": "G002",
    "groupName": {
      "value": "NewGroupName"
    },
    "notification": {
      "value": "Updated group notification"
    },
    "introduction": {
      "value": "Updated group introduction"
    },
    "faceURL": {
      "value": "http://example.com/new/path/to/face/image.png"
    },
    "ex": {
      "value": "Updated extra data"
    },
    "needVerification": {
      "value": 0
    },
    "lookMemberInfo": {
      "value": 1
    },
    "applyMemberFriend": {
      "value": 0
    }
  }
}
```

## 应答包字段说明

| 字段              | 类型                         | 描述                                                                                                |
| ----------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode        | 0                            | 表示业务系统的回调是否正确执行。`0`表示操作成功。                                                   |
| errCode           | 5001                         | 表示自定义错误码，范围在 5000-9999 之间。在 actionCode 不等于 0 时设置；在 nextCode 等于 1 时设置。 |
| errMsg            | "An error message"           | 自定义错误码对应的简单错误信息。                                                                    |
| errDlt            | "Detailed error information" | 自定义错误码对应的详细错误信息。                                                                    |
| nextCode          | 1                            | 下一步执行指令，`1`表示拒绝继续执行，actionCode 等于`0`时设置。                                     |
| groupID           | string                       | 群组的唯一标识符                                                                                    |
| groupName         | StringValue                  | 群组的名称                                                                                          |
| notification      | StringValue                  | 群组的通知信息                                                                                      |
| introduction      | StringValue                  | 群组的简介                                                                                          |
| faceURL           | StringValue                  | 群组的图标的 URL                                                                                    |
| ex                | StringValue                  | 额外的数据字段                                                                                      |
| needVerification  | Int32Value                   | 是否需要验证加入群组                                                                                |
| lookMemberInfo    | Int32Value                   | 是否可以查看群成员信息                                                                              |
| applyMemberFriend | Int32Value                   | 是否可以申请加群成员为好友                                                                          |
