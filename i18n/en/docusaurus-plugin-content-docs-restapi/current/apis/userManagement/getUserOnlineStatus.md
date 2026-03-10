---
sidebar_position: 6
title: Get User Online Status
hide_title: true
---

<center>

## Get Specified User Online Status

</center>

### Brief Description

- Get the online status and token of the specified user's terminals.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/get_users_online_status`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ----------------------------------------------------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
  "userIDs": ["2890713225"]
}
```

| Field Name | Optional | Type  | Description                   |
| :------ | :--- | :---- | ---------------------- |
| userIDs | Required | array | List of user IDs to query |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": [
    {
      "userID": "2890713225",
      "status": 1,
      "detailPlatformStatus": [
        {
          "platformID": 2,
          "connID": "bbb7c4da159b1ec6beb81c9e4129b075",
          "isBackground": false,
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIyODkwNzEzMjI1IiwiUGxhdGZvcm1JRCI6MywiZXhwIjoxNzA0Njk1NzI0LCJuYmYiOjE2OTY5MTk0MjQsImlhdCI6MTY5NjkxOTcyNH0.-TBNT0YKn_8YH9oO8A8SYEpNzOg1-EQD8O23R0MsVLE"
        },
        {
          "platformID": 3,
          "connID": "f18b67b5f57f01604b9f7c338238f43d",
          "isBackground": false,
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIyODkwNzEzMjI1IiwiUGxhdGZvcm1JRCI6MiwiZXhwIjoxNzA0NTA5ODg4LCJuYmYiOjE2OTY3MzM1ODgsImlhdCI6MTY5NjczMzg4OH0.uii4Sf05z7VIGCDXUEtqq7cwdXakWkJJrCwYUigvc3I"
        }
      ]
    }
  ]
}
```

### Parameter Description for Success Return Example

| Parameter Name                            | Type    | Description                                                                                                                                                            |
| :-------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| errCode                           | int     | Error code, 0 means successful                                                                                                                                              |
| errMsg                            | string  | Brief error message, empty                                                                                                                                              |
| errDlt                            | errDlt  | Detailed error message, empty                                                                                                                                              |
| data                              | object  | Generic data object, specific structure is below                                                                                                                                    |
| userID                            | string  | User ID                                                                                                                                                         |
| status                            | int     | Online status, online: 1, offline: 0                                                                                                                                      |
| detailPlatformStatus              | array   | Online details of each terminal, only contains detailed information of online terminals when status is 1, otherwise it is an empty array.                                                                                                             |
| detailPlatformStatus.platformID     | int  | [Terminal type when user logged in](/commonFields.md) |
| detailPlatformStatus.connID       | string  | Connection ID                                                                                                                                                         |
| detailPlatformStatus.isBackground | boolean | Is app in background                                                                                                                                                |
| detailPlatformStatus.token        | string  | token info                                                                                                                                                      |

### Failure Return Example

```json
{
  "errCode": 1004,
  "errMsg": "RecordNotFoundError",
  "errDlt": ": [1004]RecordNotFoundError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name  | Type   | Description                           |
| :------ | :----- | :----------------------------- |
| errCode | int    | Error code, specifically check the global error code document |
| errMsg  | string | Brief error message                   |
| errDlt  | errDlt | Detailed error message                   |
