---
sidebar_position: 15
title: Process Group Join Application
hide_title: true
---

<center>

## Process Group Join Application

</center>

### Brief Description
- Process join group application, agree and reject someone to join the group.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/group_application_response` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "groupID": "xadxwr24",
  "fromUserID": "2966378840",
  "handledMsg": "",
  "handleResult": 1
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| groupID | Required | string | Group ID |
| fromUserID | Required | string | Applying user ID |
| handledMsg | Optional | string | Processing message |
| handleResult | Required | int | Processing result; -1: Reject the user to join the group, 1: Agree the user to join the group |
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
