---
sidebar_position: 1
title: 发送消息
hide_title: true
---

<center>

## 发送消息

</center>

### 简要描述
- 以某人身份向指定用户或群组发送消息，也可用于从其他平台导入历史消息。
### 请求方式
- `post` 
### 请求URL
- `{API_ADDRESS}/msg/send_msg` 


### Header
|header名|示例值|选填|类型|说明|
|:----    |:-------    |:--- |---|------      |
|operationID|1646445464564|必填|string|用于全局链路追踪，建议使用时间戳，在每个请求中独立|
|token|eyJhbxxxx3Xs|必填|string|[管理员 token](../authenticationManagement/getAdminToken)|


### 请求参数示例


```json
{
  "sendID": "openIMAdmin",
  "recvID": "2839678182",
  "content": {
    "content": "hello!!"
  },
  "contentType": 101,
  "sessionType": 1,
  "isOnlineOnly": false,
  "notOfflinePush": false,
  "sendTime": 1695212630740,
  "offlinePushInfo": {
    "title": "send message",
    "desc": "",
    "ex": "",
    "iOSPushSound": "default",
    "iOSBadgeCount": true
  },
  "ex": "ex"
}
```
|字段名|选填|类型|说明|
|:----    |:-------    |:--- |---|
|sendID|必填|string|系统通知号ID，或用户ID|
|recvID|必填|string|接收者ID，单聊填userID，群聊填groupID|
|senderPlatformID|选填|int|消息发送者的[终端类型](/commonFields.md)，默认为10|
|content|必填|object|消息的具体内容，内部是json对象，contentType 设置不同的json对象 参考[消息类型](../../../restapi/contentDescription) |
|contentType|必填|int|[消息类型](/contentDescription.md)|
|sessionType|必填|int|[会话类型](/commonFields.md)|
|isOnlineOnly|选填|boolean|接收者接收消息选项，默认为false，用户离线在线都会收到；否则，仅在线才收到|
|notOfflinePush|选填|boolean|离线推送设置，默认为false，进行离线推送；否则，不进行离线推送|
|sendTime|选填|int|消息发送时间，单位毫秒，一般在导入历史消息时填写|
|offlinePushInfo|选填|object|离线推送的具体内容，如果不填写，使用服务器默认推送信息。notOfflinePush为false时生效|
|offlinePushInfo.title|选填|string|离线推送的标题|
|offlinePushInfo.desc|选填|string|离线推送的具体描述|
|offlinePushInfo.ex|选填|string|离线推送扩展字段|
|offlinePushInfo.iOSPushSound|选填|string|IOS的离线推送声音|
|offlinePushInfo.iOSBadgeCount|选填|boolean|IOS离线推送消息是否计入桌面图标未读数|
|ex|选填|string|扩展字段|
### 成功返回示例


```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "serverMsgID": "8698dd5d163dd79b8fdfa333fee06f40",
    "clientMsgID": "1ca0e4cf279ad5cce6b28331b2b42092",
    "sendTime": 1679558586210
  }
}
```
### 成功返回示例的参数说明


|参数名|类型|说明|
|:----    |:-------    |:--- |
|errCode|int|错误码，0表示成功|
|errMsg|string|错误简要信息，为空|
|errDlt|errDlt|错误详细信息，为空|
|data|object|通用数据对象，具体结构见下方|
|serverMsgID|string|服务器消息ID，预留字段|
|clientMsgID|string|客户端消息ID，此ID为消息唯一ID|
|sendTime|int|消息发送的时间|
### 失败返回示例


```json
{
  "errCode": 1004,
  "errMsg": "RecordNotFoundError",
  "errDlt": ": [1004]RecordNotFoundError"
}
```
### 失败返回示例的参数说明


|参数名|类型|说明|
|:----    |:-------    |:--- |
|errCode|int|错误码，具体查看全局错误码文档|
|errMsg|string|错误简要信息|
|errDlt|errDlt|错误详细信息|
