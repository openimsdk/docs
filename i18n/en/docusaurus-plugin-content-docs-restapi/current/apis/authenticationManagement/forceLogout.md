---
sidebar_position: 3
title: Force User Logout
hide_title: true
---

<center>

## Force User Logout

</center>

### Brief Description

- Force a user to log out from a specific terminal, the client SDK will receive the `onKickedOffline` callback event.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/auth/force_logout`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](./getAdminToken.md) |

### Request Parameter Example

```json
{
  "platformID": 2,
  "userID": "4950983283"
}
```

| Field Name | Optional | Type | Description |
| :--------- | :--- | :----- | ----------------------------------------------------------------------------------------------------------------- |
| platformID | Required | int    | [Terminal type when user logs in](/commonFields.md) |
| userID     | Required | string | User ID |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": ""
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type | Description |
| :------ | :----- | :--------------------------- |
| errCode | int    | Error code, 0 means success |
| errMsg  | string | Brief error message, empty on success |
| errDlt  | errDlt | Detailed error message, empty on success |

### Failure Return Example

```json
{
  "errCode": 1004,
  "errMsg": "RecordNotFoundError",
  "errDlt": ": [1004]RecordNotFoundError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name | Type | Description |
| :------ | :----- | :---------------------------- |
| errCode | int    | Error code, see global error code document for details |
| errMsg  | string | Brief error message |
| errDlt  | errDlt | Detailed error message |
