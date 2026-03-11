---
sidebar_position: 1
title: Send Message
hide_title: true
---

<center>

## Send Message

</center>

### Brief Description
- Send a message to a designated user or group as someone, can also be used to import historical messages from other platforms.

### Request Method
- `post` 

### Request URL
- `{API_ADDRESS}/msg/send_msg` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----       | :-------      | :---     | :--- | ------ |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](../authenticationManagement/getAdminToken) |


### Request Parameter Example

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

| Field Name | Optional | Type | Description |
| :---- | :------- | :--- | :--- |
| sendID | Required | string | System notification number ID, or user ID |
| recvID | Required | string | Receiver ID, fill in userID for single chat, groupID for group chat |
| senderPlatformID | Optional | int | [Terminal type](/commonFields.md) of the message sender, defaults to 10 |
| content | Required | object | Specific content of the message, internally a json object, contentType sets different json objects, refer to [Message types](../../../restapi/contentDescription) |
| contentType | Required | int | [Message type](/contentDescription.md) |
| sessionType | Required | int | [Session type](/commonFields.md) |
| isOnlineOnly | Optional | boolean | Receiver message options, defaults to false, the user will receive it whether offline or online; otherwise, only received when online |
| notOfflinePush | Optional | boolean | Offline push settings, defaults to false, push offline; otherwise, do not push offline |
| sendTime | Optional | int | Message sending time, in milliseconds, generally filled in when importing historical messages |
| offlinePushInfo | Optional | object | Specific content of the offline push, if not filled in, use the server's default push information. Becomes effective when notOfflinePush is false |
| offlinePushInfo.title | Optional | string | Title for offline push |
| offlinePushInfo.desc | Optional | string | Specific description for offline push |
| offlinePushInfo.ex | Optional | string | Offline push extension field |
| offlinePushInfo.iOSPushSound | Optional | string | Offline push sound for IOS |
| offlinePushInfo.iOSBadgeCount | Optional | boolean | Whether IOS offline push messages count into desktop icon unread count |
| ex | Optional | string | Extension field |

### Success Return Example

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

### Parameter Description for Success Return Example

| Parameter Name | Type | Description |
| :---- | :------- | :--- |
| errCode | int | Error code, 0 means successful |
| errMsg | string | Brief error message, empty |
| errDlt | errDlt | Detailed error message, empty |
| data | object | Generic data object, specific structure is below |
| serverMsgID | string | Server message ID, reserved field |
| clientMsgID | string | Client message ID, this ID is the unique ID for the message |
| sendTime | int | The time the message was sent |

### Failure Return Example

```json
{
  "errCode": 1004,
  "errMsg": "RecordNotFoundError",
  "errDlt": ": [1004]RecordNotFoundError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name | Type | Description |
| :---- | :------- | :--- |
| errCode | int | Error code, specifically check the global error code document |
| errMsg | string | Brief error message |
| errDlt | errDlt | Detailed error message |
