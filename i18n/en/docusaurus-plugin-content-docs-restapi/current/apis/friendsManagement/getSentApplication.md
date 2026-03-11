---
sidebar_position: 7
title: Get Sent Friend Applications
hide_title: true
---

<center>

## Get Sent Friend Applications

</center>

### Brief Description

- As an active initiator, get the list of friend applications initiated by this user to other users.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/get_self_friend_apply_list`

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
| pagination            | Required | object | Pagination structure parameter |
| pagination.pageNumber | Required | int    | Current page number, starting from 1 |
| pagination.showNumber | Required | int    | Number of requests on the current page |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "friendRequests": [
      {
        "fromUserID": "11111111",
        "fromNickname": "yourNickname",
        "fromFaceURL": "yourFaceURL",
        "toUserID": "11111112",
        "toNickname": "alantestuid3",
        "toFaceURL": "1111111",
        "handleResult": 1,
        "reqMsg": "hello!",
        "createTime": 1688458858893,
        "handlerUserID": "openIMAdmin",
        "handleMsg": "agree",
        "handleTime": 1688458955357,
        "ex": ""
      },
      {
        "fromUserID": "11111111",
        "fromNickname": "yourNickname",
        "fromFaceURL": "yourFaceURL",
        "toUserID": "11111113",
        "toNickname": "yourNickname",
        "toFaceURL": "yourFaceURL",
        "handleResult": 1,
        "reqMsg": "hello!",
        "createTime": 1688460586632,
        "handlerUserID": "openIMAdmin",
        "handleMsg": "agree",
        "handleTime": 1688460590618,
        "ex": ""
      }
    ],
    "total": 2
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                                                     |
| :------------- | :----- | :-------------------------------------------------------------- |
| errCode        | int    | Error code, 0 means success                                     |
| errMsg         | string | Brief error message, empty                                      |
| errDlt         | errDlt | Detailed error message, empty                                   |
| data           | object | General data object, see structure below                        |
| friendRequests | array  | [Friend Application](/commonFields.md#friendrequestinfo) list |
| total          | int    | Total number of actively sent friend applications             |

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
