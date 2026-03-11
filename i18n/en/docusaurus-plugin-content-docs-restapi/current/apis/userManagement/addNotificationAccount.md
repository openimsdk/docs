---
sidebar_position: 9
title: Add System Account
hide_title: true
---

<div align="center">

## Add System Account, including Notification Account and Bot

</div>

### Brief Description

- Add system account
- Notification account cannot get `token`

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/user/add_notification_account`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md)                 |

### Request Parameter Example

```json
{
  "userID": "userID",
  "nickName": "notification1",
  "faceURL": "url",
  "appMangerLevel": 3
}
```

| Field Name     | Optional | Type   | Description                                      |
| :------------- | :--- | :----- | ------------------------------------------------ |
| userID         | Optional | string | Notification account ID                                        |
| nickName       | Required | string | Notification account nickname                                       |
| faceURL        | Required | string | Notification account avatar                                       |
| appMangerLevel | Required | int    | 3 or 4 |

### Success Return Example

```json
{
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "data": {
        "userID": "userID",
        "faceURL": "url",
        "nickName": "notification1",
        "appMangerLevel": 3
    }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                      |
| :------- | :----- | :------------------------ |
| errCode  | int    | Error code, 0 means successful         |
| errMsg   | string | Brief error message, empty |
| errDlt   | errDlt | Detailed error message, empty |
| data | object | Notification account information |

### Failure Return Example

```json
{
  "errCode": 1001,
  "errMsg": "ArgsError",
  "errDlt": "nickName is empty: 1001 ArgsError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name | Type   | Description                          |
| :------ | :----- | :---------------------------- |
| errCode | int    | Error code, specifically check the global error code document |
| errMsg  | string | Brief error message                  |
| errDlt  | errDlt | Detailed error message                  |
