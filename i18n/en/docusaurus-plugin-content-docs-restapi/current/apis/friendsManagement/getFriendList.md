---
sidebar_position: 5
title: Get Friend List
hide_title: true
---

<center>

## Get Friend List

</center>

### Brief Description

- Get the friend list of a specified user.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/get_friend_list`

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
    "friendsInfo": [
      {
        "ownerUserID": "11111111",
        "remark": "",
        "createTime": 1688458955,
        "friendUser": {
          "userID": "11111112",
          "nickname": "alantestuid3",
          "faceURL": "1111111",
          "ex": "",
          "createTime": 0,
          "appMangerLevel": 0,
          "globalRecvMsgOpt": 0
        },
        "addSource": 2,
        "operatorUserID": "11111111",
        "ex": ""
      },
      {
        "ownerUserID": "11111111",
        "remark": "",
        "createTime": 1688459860,
        "friendUser": {
          "userID": "11111113",
          "nickname": "yourNickname",
          "faceURL": "yourFaceURL",
          "ex": "",
          "createTime": 0,
          "appMangerLevel": 0,
          "globalRecvMsgOpt": 0
        },
        "addSource": 2,
        "operatorUserID": "11111111",
        "ex": ""
      }
    ],
    "total": 2
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                                              |
| :---------- | :----- | :------------------------------------------------------- |
| errCode     | int    | Error code, 0 means success                                |
| errMsg      | string | Brief error message, empty                                 |
| errDlt      | errDlt | Detailed error message, empty                              |
| data        | object | General data object, see structure below                 |
| friendsInfo | array  | [Friend Info](/commonFields.md#friendinfo) list   |
| total       | int    | Total number of friends returned                         |

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
