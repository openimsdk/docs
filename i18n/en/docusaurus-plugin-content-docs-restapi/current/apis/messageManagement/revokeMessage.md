---
sidebar_position: 4
title: Revoke Message
hide_title: true
---

<center>

## Revoke Message

</center>

### Brief Description
- Simulate a user revoking a sent message.

### Request Method
- `post` 

### Request URL
- `{API_ADDRESS}/msg/revoke_msg` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----       | :-------      | :---     | :--- | ------ |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example

```json
{
  "userID": "9906953281",
  "conversationID": "si_2699373280_9906953281",
  "seq": 2
}
```

| Field Name | Optional | Type | Description |
| :---- | :------- | :--- | :--- |
| userID | Required | string | Revoker's ID, message sender's ID or APP admin's ID; In group chat, it can also be the ID of a group member with a higher rank than yourself |
| conversationID | Required | string | Conversation ID |
| seq | Required | string | The seq of this message |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": ""
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type | Description |
| :---- | :------- | :--- |
| errCode | int | Error code, 0 means successful |
| errMsg | string | Brief error message, empty |
| errDlt | errDlt | Detailed error message, empty |
| data | object | Generic data object, specific structure is below |
| token | string ||
| expireTimeSeconds | string ||

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
