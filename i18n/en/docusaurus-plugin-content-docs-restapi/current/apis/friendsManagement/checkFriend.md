---
sidebar_position: 3
title: Check Friend Relationship
hide_title: true
---

<center>

## Check Friend Relationship

</center>

### Brief Description

- Check if two users have a friend relationship.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/friend/is_friend`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
  "userID1": "11111111",
  "userID2": "11111112"
}
```

| Field Name | Optional | Type   | Description |
| :------ | :--- | :----- | ------- |
| userID1 | Required | string | User ID |
| userID2 | Required | string | User ID |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "inUser1Friends": true,
    "inUser2Friends": true
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type    | Description                           |
| :------------- | :------ | :------------------------------------ |
| errCode        | int     | Error code, 0 means success           |
| errMsg         | string  | Brief error message, empty            |
| errDlt         | errDlt  | Detailed error message, empty         |
| data           | object  | General data object, see structure below |
| inUser1Friends | boolean | true: userID2 is in userID1's friend list |
| inUser2Friends | boolean | true: userID1 is in userID2's friend list |

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
