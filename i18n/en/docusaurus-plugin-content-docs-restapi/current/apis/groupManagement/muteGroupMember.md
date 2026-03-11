---
sidebar_position: 18
title: Mute Group Member
hide_title: true
---

<center>

## Mute Group Member

</center>

### Brief Description
- Mute a group member.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/mute_group_member`


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "groupID": "889944039",
  "userID": "2824146701",
  "mutedSeconds": 10
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| groupID | Required | string | Group ID |
| userID | Required | string | Group member ID |
| mutedSeconds | Required | int | Number of seconds muted |
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
| :----    | :-------    | :--- |
| errCode | int | Error code, 0 means successful |
| errMsg | string | Brief error message, empty |
| errDlt | errDlt | Detailed error message, empty |
| data | object | Generic data object, specific structure is below |
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
| :----    | :-------    | :--- |
| errCode | int | Error code, specifically check the global error code document |
| errMsg | string | Brief error message |
| errDlt | errDlt | Detailed error message |
