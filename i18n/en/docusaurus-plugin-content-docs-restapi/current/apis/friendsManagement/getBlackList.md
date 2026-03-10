---
sidebar_position: 11
title: Get Blacklist
hide_title: true
---

<center>

## Get Blacklist

</center>

### Brief Description

- Get the blacklist of a specified user.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/get_black_list`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
  "userID": "11111111",
  "pagination": {
    "pageNumber": 1,
    "showNumber": 100
  }
}
```

| Field Name            | Optional | Type   | Description                |
| :-------------------- | :--- | :----- | ------------------- |
| userID                | Required | string | User ID             |
| pagination            | Required | object | Pagination parameter structure |
| pagination.pageNumber | Required | int    | Current page number, starting from 1 |
| pagination.showNumber | Required | int    | Number of requests on the current page |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "blacks": [
      {
        "ownerUserID": "11111111",
        "createTime": 1688460626,
        "blackUserInfo": {
          "userID": "11111113",
          "nickname": "yourNickname",
          "faceURL": "yourFaceURL",
          "ex": ""
        },
        "addSource": 0,
        "operatorUserID": "openIMAdmin",
        "ex": ""
      }
    ],
    "total": 1
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                                               |
| :------ | :----- | :-------------------------------------------------------- |
| errCode | int    | Error code, 0 means success                                |
| errMsg  | string | Brief error message, empty                                 |
| errDlt  | errDlt | Detailed error message, empty                              |
| data    | object | General data object, see structure below                     |
| blacks  | array  | [Blacklist info](/commonFields.md#blackinfo) list |
| total   | int    | Total number of blacklisted users                        |

### Failure Return Example

```json
{
  "errCode": 1004,
  "errMsg": "RecordNotFoundError",
  "errDlt": ": [1004]RecordNotFoundError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name | Type   | Description                   |
| :------ | :----- | :---------------------------- |
| errCode | int    | Error code, see global error code document for details |
| errMsg  | string | Brief error message           |
| errDlt  | errDlt | Detailed error message        |
