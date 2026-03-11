---
sidebar_position: 6
title: Send Friend Application
hide_title: true
---

<center>

## Send Friend Application

</center>

### Brief Description

- `fromUserID` initiates a friend application to `toUserID`.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/add_friend`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
  "fromUserID": "11111111",
  "toUserID": "11111113",
  "reqMsg": "hello!",
  "ex": ""
}
```

| Field Name | Optional | Type   | Description            |
| :--------- | :--- | :----- | ---------------------- |
| fromUserID | Required | string | User actively initiating the friend application |
| toUserID   | Required | string | User receiving the friend application |
| reqMsg     | Optional | string | Application message    |
| ex         | Optional | string | Extension field        |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": ""
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                  |
| :------ | :----- | :--------------------------- |
| errCode | int    | Error code, 0 means success  |
| errMsg  | string | Brief error message, empty   |
| errDlt  | errDlt | Detailed error message, empty|

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
