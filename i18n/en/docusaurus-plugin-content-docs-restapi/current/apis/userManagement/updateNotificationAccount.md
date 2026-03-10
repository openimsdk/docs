---
sidebar_position: 11
title: Modify System Account
hide_title: true
---

<center>

## Modify System Account Information

</center>

### Brief Description

- Modify system account information, including avatar and nickname.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/update_notification_account`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "userID": "1974356875",
  "nickName": "notification1",
  "faceURL": "url"
}
```

| Field Name | Optional | Type   | Description       |
| :------- | :--- | :----- | ---------- |
| userID   | Required | string | System account ID  |
| nickName | Required | string | System account nickname |
| faceURL  | Required | string | System account avatar |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": ""
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                      |
| :------ | :----- | :------------------------ |
| errCode | int    | Error code, 0 means successful         |
| errMsg  | string | Brief error message, empty |
| errDlt  | errDlt | Detailed error message, empty |

### Failure Return Example

```json
{
  "errCode": 1001,
  "errMsg": "ArgsError",
  "errDlt": "1001 ArgsError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name | Type   | Description                          |
| :------ | :----- | :---------------------------- |
| errCode | int    | Error code, specifically check the global error code document |
| errMsg  | string | Brief error message                  |
| errDlt  | errDlt | Detailed error message                  |
