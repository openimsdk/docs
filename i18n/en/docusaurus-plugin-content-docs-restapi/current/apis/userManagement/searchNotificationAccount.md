---
sidebar_position: 10
title: Get System Account
hide_title: true
---

<center>
## Get System Account

</center>

### Brief Description

- Get the list of created system accounts (notification accounts, bots), including ID, avatar, and name.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/search_notification_account`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "keyword": "",
  "pagination": {
    "pageNumber": 1,
    "showNumber": 10
  }
}
```

| Field Name            | Optional | Type   | Description                                                    |
| :-------------------- | :--- | :----- | ------------------------------------------------------- |
| keyword               | Optional | string | Fill in userID or nickname, default to return system account for corresponding pagination when empty |
| pagination            | Required | object | Pagination parameter structure                                          |
| pagination.pageNumber | Required | int    | Current page number, starting from 1                                     |
| pagination.showNumber | Required | int    | Number of requests on the current page                                          |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "total": 5,
    "notificationAccounts": [
      {
        "userID": "1974356875",
        "faceURL": "url",
        "nickName": "notification1111111",
        "appMangerLevel": 3
      },
      {
        "userID": "8719627904",
        "faceURL": "",
        "nickName": "notification1",
        "appMangerLevel": 3
      },
      {
        "userID": "4208409642",
        "faceURL": "",
        "nickName": "notification1",
        "appMangerLevel": 3
      },
      {
        "userID": "2776836221",
        "faceURL": "",
        "nickName": "robot",
        "appMangerLevel": 4
      }
    ]
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name               | Type   | Description                         |
| :------------------- | :----- | :--------------------------- |
| errCode              | int    | Error code, 0 means successful            |
| errMsg               | string | Brief error message, empty    |
| errDlt               | errDlt | Detailed error message, empty    |
| data                 | object | Generic data object, specific structure is below |
| total                | int    | Total number of system accounts               |
| notificationAccounts | array  | System account list               |
| userID               | string | System account ID                |
| faceURL              | string | System account avatar               |
| nickName             | string | System account nickname         |
| appMangerLevel | int | 3 or 4 |

### Failure Return Example

```json
{
  "errCode": 1001,
  "errMsg": "ArgsError",
  "errDlt": "1001 ArgsError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name | Type   | Description                          |
| :------ | :----- | :---------------------------- |
| errCode | int    | Error code, specifically check the global error code document |
| errMsg  | string | Brief error message                  |
| errDlt  | errDlt | Detailed error message                  |
