---
sidebar_position: 1
title: Get Admin Token
hide_title: true
---

<center>

## Get APP Admin Token

</center>

### Brief Description

- Use secret to get APP admin token for other REST APIs to use

⚠️ **Note**: IMServer has a built-in APP admin, its `userID` is `imAdmin`

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/auth/get_admin_token`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | -------------------------------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |

### Request Parameter Example

```json
{
  "secret": "openIM123",
  "userID": "imAdmin"
}
```

| Field Name | Optional | Type | Description |
| :--------- | :--- | :----- | ------------------------------------------------------------------ |
| secret     | Required | string | Secret key, `secret` field in `config/share.yaml` |
| userID     | Required | string | APP admin ID, default is `imAdmin` |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJvcGVuSU1BZG1pbiIsIlBsYXRmb3JtSUQiOjEsImV4cCI6MTY5Njc1NDgwNSwibmJmIjoxNjg4OTc4NTA1LCJpYXQiOjE2ODg5Nzg4MDV9.SAu86X3PzfYjtjBeYA4vZefNr1IiFKRgg12FeiXSm14",
    "expireTimeSeconds": 7776000
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type | Description |
| :---------------- | :----- | :--------------------------- |
| errCode           | int    | Error code, 0 means success |
| errMsg            | string | Brief error message, empty on success |
| errDlt            | errDlt | Detailed error message, empty on success |
| data              | object | General data object, see structure below |
| token             | string | APP admin token |
| expireTimeSeconds | string | Token expiration time (in seconds) |

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
