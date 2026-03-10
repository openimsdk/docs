---
sidebar_position: 2
title: Update Friend Information
hide_title: true
---

<center>

## Update Friend Information

</center>

### Brief Description

- Modify the remark and pinned information of a specific friend (`friendUserID`) for a specified user (`ownerUserID`). Only pass the fields that need to be modified, zero values are also supported.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/update_friends`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
  "ownerUserID": "11111111",
  "friendUserIDs": ["1112"],
  "remark": "remark",
  "isPinned": true,
  "ex": "ex"
}
```

| Field Name   | Optional | Type    | Description            |
| :----------- | :--- | :------ | ---------------------- |
| ownerUserID  | Required | string  | Set fields for this user's friend |
| friendUserID | Required | string  | Friend to set fields for |
| remark       | Optional | string  | Remark content         |
| isPinned     | Optional | boolean | Whether pinned         |
| ex           | Optional | string  | Extension field        |

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
