---
sidebar_position: 1
title: Import Friends
hide_title: true
---

<center>

## Import Friends

</center>

### Brief Description

- Make a specified user (`ownerUserID`) establish a two-way friend relationship with multiple users (`friendUserIDs`).

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/import_friend`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
  "ownerUserID": "2778222451",
  "friendUserIDs": ["4776986466"]
}
```

| Field Name    | Optional | Type   | Description        |
| :------------ | :--- | :----- | ------------------ |
| ownerUserID   | Required | string | Specified user ID |
| friendUserIDs | Required | string | Specified friend ID list |

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
