---
sidebar_position: 7
title: Modify User DND
hide_title: true
---

<center>

## Modify Specified User's Global Do-Not-Disturb Status

</center>

### Brief Description

- Modify specified user's global do-not-disturb status.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/set_global_msg_recv_opt`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "userID": "11111112",
  "globalRecvMsgOpt": 0
}
```

| Field Name       | Optional | Type   | Description                                                               |
| :--------------- | :--- | :----- | ------------------------------------------------------------------ |
| userID           | Required | string | User ID                                                            |
| globalRecvMsgOpt | Required | int    | Global receive message opt, 0 indicates normal receipt and push, 2 indicates normal receipt without offline push. |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": ""
}
```

### Parameter Description for Success Return Example

| Parameter Name  | Type   | Description                         |
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
