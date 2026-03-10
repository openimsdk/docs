---
sidebar_position: 5
title: Send Notification
hide_title: true
---

<center>

## Send Business Notification

</center>

### Brief Description
- Business service sends custom notification, the client will receive `OnRecvCustomBusinessMessage` callback.

### Request Method
- `post` 

### Request URL
- `{API_ADDRESS}/msg/send_business_notification`


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----       | :-------      | :---     | :--- | ------ |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example

```json
{
  "sendUserID": "openIMAdmin",
  "recvUserID": "2839678182",
  "recvGroupID": "",
  "key": "xxx",
  "data": "xxxxxx",
  "sendMsg": false,
  "reliabilityLevel": 1
}
```

| Field Name | Optional | Type | Description |
| :---- | :------- | :--- | :--- |
| sendUserID | Required | string | System notification number ID, or user ID |
| recvUserID | Optional | string | Receiver user ID, can only choose one between this and `recvGroupID` |
| recvGroupID | Optional | string | Receiver group ID, can only choose one between this and `recvUserID` |
| key | Required | string | Based on business classification, the client can use this field to process `data` differently |
| data | Required | string | Business data |
| sendMsg | Optional | bool | Whether to send in the form of a message, Default: false |
| reliabilityLevel | Optional | int | Notification message reliability level, 1: Online push. 2: Guaranteed notification (Triggered even upon disconnection reconnect or re-login, used for guaranteed scenarios. At this reliability level, due to full sequence synchronization, it's advised not to send too many, as it will affect client message synchronization performance), Default: 1 |

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
