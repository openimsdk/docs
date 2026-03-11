---
sidebar_position: 1
title: Import (Register) User
hide_title: true
---

<center>

## Import (Register) User

</center>

### Brief Description

- IMServer has no business logic like user registration and user password verification. After the business system completes user registration and login, call this interface to import to IMServer to achieve account integration.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/user_register`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](../authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "users": [
    {
      "userID": "11111112",
      "nickname": "yourNickname",
      "faceURL": "yourFaceURL"
    }
  ]
}
```

| Field Name     | Optional | Type   | Description                                             |
| :------------- | :--- | :----- | ------------------------------------------------ |
| users          | Required | array  | User list                                         |
| users.userID   | Required | string | User ID                                          |
| users.nickname | Required | string | User nickname                                         |
| users.faceURL  | Required | string | User avatar URL                                     |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": ""
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                      |
| :------ | :----- | :------------------------ |
| errCode | int    | Error code, 0 means successful        |
| errMsg  | string | Brief error message, empty |
| errDlt  | errDlt | Detailed error message, empty |

### Failure Return Example

```json
{
  "errCode": 1004,
  "errMsg": "RecordNotFoundError",
  "errDlt": ": [1004]RecordNotFoundError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name  | Type   | Description                          |
| :------ | :----- | :---------------------------- |
| errCode | int    | Error code, specifically check the global error code document |
| errMsg  | string | Brief error message                  |
| errDlt  | errDlt | Detailed error message                  |
