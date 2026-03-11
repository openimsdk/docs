---
sidebar_position: 2
title: Get User Token
hide_title: true
---

<center>

## Get User Token

</center>

### Brief Description

- Get user token, need to specify the terminal type used when logging in.


### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/auth/get_user_token`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](./getAdminToken.md) |

### Request Parameter Example

```json
{
  "platformID": 1,
  "userID": "111111"
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
| token             | string | Obtained user token |
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
