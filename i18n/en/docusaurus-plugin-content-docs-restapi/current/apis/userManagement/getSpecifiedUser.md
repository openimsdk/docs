---
sidebar_position: 5
title: Get User Details
hide_title: true
---

<center>

## Get Specified User Details List

</center>

### Brief Description

- Get the details list of specified users.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/get_users_info`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "userIDs": ["11111111", "11111112"]
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
  "data": {
    "usersInfo": [
      {
        "userID": "11111111",
        "nickname": "yourNickname",
        "faceURL": "yourFaceURL",
        "ex": "",
        "createTime": 1688454168302,
        "appMangerLevel": 18,
        "globalRecvMsgOpt": 0
      },
      {
        "userID": "11111112",
        "nickname": "alantestuid3",
        "faceURL": "1111111",
        "ex": "",
        "createTime": 0,
        "appMangerLevel": 18,
        "globalRecvMsgOpt": 0
      }
    ]
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                                                   |
| :-------- | :----- | :----------------------------------------------------- |
| errCode   | int    | Error code, 0 means successful                                      |
| errMsg    | string | Brief error message, empty                              |
| errDlt    | errDlt | Detailed error message, empty                              |
| data      | object | Generic data object, specific structure is below                           |
| usersInfo | array  | [User info](/commonFields.md#userinfo) list |

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
