---
sidebar_position: 8
title: Modify User Info
hide_title: true
---

<center>

## Modify User Information

</center>

### Brief Description

- Modify user's avatar, nickname, Ex, and other information. Only send fields that need modifications, zero values are also supported.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/update_user_info_ex`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "userInfo": {
    "userID": "2",
    "nickname": "alantestuid3",
    "faceURL": "",
    "ex": "123"
  }
}
```

| Field Name        | Optional | Type   | Description     |
| :---------------- | :--- | :----- | -------- |
| userInfo          | Required | object | User information |
| userInfo.userID   | Required | string | User ID  |
| userInfo.nickname | Optional | string | User nickname |
| userInfo.faceURL  | Optional | string | User avatar |
| ex                | Optional | string | Extension field |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": ""
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                         |
| :------ | :----- | :--------------------------- |
| errCode | int    | Error code, 0 means successful            |
| errMsg  | string | Brief error message, empty    |
| errDlt  | errDlt | Detailed error message, empty    |


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
