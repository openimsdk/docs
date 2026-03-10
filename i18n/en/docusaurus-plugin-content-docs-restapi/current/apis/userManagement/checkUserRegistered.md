---
sidebar_position: 2
title: Check User Registration Status
hide_title: true
---

<center>

## Check User Registration Status

</center>

### Brief Description

- Query whether the designated user IDs are already registered in the IMServer.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/account_check`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "checkUserIDs": ["11111111", "11111112"]
}
```

| Field Name   | Optional | Type  | Description                   |
| :----------- | :--- | :---- | ---------------------- |
| checkUserIDs | Required | array | List of user IDs to query |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "results": [
      {
        "userID": "11111111",
        "accountStatus": 1
      },
      {
        "userID": "11111112",
        "accountStatus": 0
      }
    ]
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name        | Type   | Description                                               |
| :-------------------- | :----- | :------------------------------------------------- |
| errCode               | int    | Error code, 0 means successful                                  |
| errMsg                | string | Brief error message, empty                          |
| errDlt                | errDlt | Detailed error message, empty                          |
| data                  | object | Generic data object, specific structure is below                       |
| results               | array  | Query results                                           |
| results.userID        | string | User ID                                            |
| results.accountStatus | int | Account status, 0: not registered, 1: registered |

### Failure Return Example

```json
{
  "errCode": 1004,
  "errMsg": "RecordNotFoundError",
  "errDlt": ": [1004]RecordNotFoundError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name | Type   | Description                          |
| :------ | :----- | :---------------------------- |
| errCode | int    | Error code, specifically check the global error code document |
| errMsg  | string | Brief error message                  |
| errDlt  | errDlt | Detailed error message                  |
