---
sidebar_position: 3
title: Get Registered Users
hide_title: true
---

<center>

## Get Registered Users List

</center>

### Brief Description

- Get the list of users registered in the IMServer.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/get_users`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "pagination": {
    "pageNumber": 1,
    "showNumber": 100
  }
}
```

| Field Name            | Optional | Type   | Description                |
| :-------------------- | :--- | :----- | ------------------- |
| pagination            | Required | object | Pagination parameter structure      |
| pagination.pageNumber | Required | int    | Current page number, starting from 1 |
| pagination.showNumber | Required | int    | Number of requests on the current page      |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "total": 47,
    "users": [
      {
        "userID": "1154602570",
        "nickname": "Gordon",
        "faceURL": "http://123.321.1.1:10002/third/object?name=%2Fdata%2Fuser%2F0%2Fcn.rentsoft.flutter.openim.consumer.base.open%2Fcache%2Ff3a37e95-6479-48f4-b13d-d38ce9515869%2Fed34c96d017a57eae7f3c8509546bf1c.gif",
        "ex": "",
        "createTime": 0,
        "appMangerLevel": 18,
        "globalRecvMsgOpt": 0
      },
      {
        "userID": "1192927498",
        "nickname": "Blooming",
        "faceURL": "",
        "ex": "",
        "createTime": 1688381391965,
        "appMangerLevel": 18,
        "globalRecvMsgOpt": 0
      }
    ]
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                                                   |
| :------ | :----- | :----------------------------------------------------- |
| errCode | int    | Error code, 0 means successful                                      |
| errMsg  | string | Brief error message, empty                              |
| errDlt  | errDlt | Detailed error message, empty                              |
| data    | object | Generic data object, specific structure is below                           |
| total   | int    | Total number of users                                               |
| users   | array  | [User info](/commonFields.md#userinfo) list |

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
