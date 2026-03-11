---
sidebar_position: 3
title: Delete Messages
hide_title: true
---

<center>

## Clear User's All Messages

</center>

### Brief Description
- Delete all messages for a user from the server, without affecting messages already synchronized to the client.

### Request Method
- `post` 

### Request URL
- `{API_ADDRESS}/msg/user_clear_all_msg` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----       | :-------      | :---     | :--- | ------ |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example

```json
{
  "userID": "3034068043",
  "deleteSyncOpt": {
      "isSyncSelf": true,
      "isSyncOther": true
  }
}
```

| Field Name | Optional | Type | Description |
| :---- | :------- | :--- | :--- |
| userID | Required | string | User ID |
| deleteSyncOpt | Required | object | Delete synchronization options |
| deleteSyncOpt.isSyncSelf | Optional | string | Whether to sync own messages |
| deleteSyncOpt.isSyncOther | Optional | string | Whether to sync other's messages |

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
