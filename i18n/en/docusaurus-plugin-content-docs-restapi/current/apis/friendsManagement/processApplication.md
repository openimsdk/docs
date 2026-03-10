---
sidebar_position: 9
title: Process Friend Application
hide_title: true
---

<center>

## Process Friend Application

</center>

### Brief Description

- Agree or reject the friend application initiated by `fromUserID` to `toUserID`.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/add_friend_response`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
  "fromUserID": "11111111",
  "toUserID": "11111112",
  "handleResult": 1,
  "handleMsg": "agree"
}
```

| Field Name   | Optional | Type   | Description                 |
| :----------- | :--- | :----- | --------------------------- |
| fromUserID   | Required | string | Initiator                   |
| toUserID     | Required | string | Receiver                    |
| handleResult | Required | int    | Processing result. 1: Agree; -1: Reject |
| handleMsg    | Required | string | Processing message          |

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
