---
sidebar_position: 12
title: Remove Blacklist
hide_title: true
---

<center>

## Remove Blacklist

</center>

### Brief Description

- Remove `blackUserID` from `ownerUserID`'s blacklist, restoring a normal relationship.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/remove_black`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
  "ownerUserID": "11111111",
  "blackUserID": "11111113"
}
```

| Field Name  | Optional | Type   | Description                  |
| :---------- | :--- | :----- | --------------------- |
| ownerUserID | Required | string | Remove blacklist from this user |
| blackUserID | Required | string | Removed blacklist user ID |

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
