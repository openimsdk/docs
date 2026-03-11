---
sidebar_position: 3
title: Multiple Users Selectively Setting Fields for a Conversation with the Same ID
hide_title: true
---

<center>

## Multiple Users Selectively Setting Fields for a Conversation with the Same ID

</center>

### Brief Description
- Multiple users can selectively set fields for the same conversation.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/conversation/set_conversations` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "userIDs": [
    "6965946400"
  ],
  "conversation": {
    "conversationID": "si_4365007572_6965946400",
    "conversationType": 1,
    "userID": "4365007572",
    "groupID": "",
    "recvMsgOpt": 0,
    "attachedInfo": "attached",
    "isPinned": false,
    "isPrivateChat": true,
    "ex": "",
    "burnDuration": 30
  }
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| userIDs | Required | array | List of user IDs to set message fields |
| conversation | Required | object | Conversation object |
| conversation.conversationID | Required | string | Conversation ID |
| conversation.conversationType | Required | int | Conversation type, 1 for single chat, 3 for group chat |
| conversation.userID | Optional | string | Required when conversation type is single chat |
| conversation.groupID | Optional | string | Required when conversation type is group chat |
| conversation.recvMsgOpt | Optional | int | Conversation Do Not Disturb status |
| conversation.attachedInfo | Optional | string | Conversation additional information, reserved field |
| conversation.isPinned | Optional | boolean | Whether conversation is pinned |
| conversation.isPrivateChat | Optional | boolean | Whether read and burn is turned on |
| conversation.ex | Optional | string | Conversation extension field |
| conversation.burnDuration | Optional | int | Set conversation read and burn time, unit is seconds |
### Success Return Example


```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": null
}
```
### Parameter Description for Success Return Example


| Parameter Name | Type | Description |
| :----    | :-------    | :--- |
| errCode | int | Error code, 0 means successful |
| errMsg | string | Brief error message, empty |
| errDlt | errDlt | Detailed error message, empty |
| data | object | Generic data object, specific structure is below |
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
| :----    | :-------    | :--- |
| errCode | int | Error code, specifically check the global error code document |
| errMsg | string | Brief error message |
| errDlt | errDlt | Detailed error message |
