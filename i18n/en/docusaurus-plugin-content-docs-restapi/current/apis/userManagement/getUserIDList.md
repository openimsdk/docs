---
sidebar_position: 4
title: Get Registered User ID
hide_title: true
---

<center>

## Get Registered User ID List

</center>

### Brief Description

- Get the list of user IDs registered in the IMServer.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/get_all_users_uid`

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
    "total": 0,
    "userIDs": [
      "openIM123456",
      "openIM654321",
      "openIMAdmin",
      "kernaltestuid2",
      "alantestuid2"
    ]
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                         |
| :------ | :----- | :--------------------------- |
| errCode | int    | Error code, 0 means successful            |
| errMsg  | string | Brief error message, empty    |
| errDlt  | errDlt | Detailed error message, empty    |
| data    | object | Generic data object, specific structure is below |
| total   | int    | Total number of users                     |
| userIDs | array  | List of user IDs                 |

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
