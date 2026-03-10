---
sidebar_position: 3
title: Apply to Join Group
hide_title: true
---

<center>

## Apply to Join Group

</center>

### Brief Description
- User apply to join group. When the group setting is allow anyone to join, the user will join the group directly, otherwise the group owner or admin need to agree to proceed.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/join_group`


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
 "groupID": "xadxwr24",
 "reqMessage": "req msg join group",
 "joinSource": 0,
 "inviterUserID": "4251711209"
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| groupID | Required | string | Group ID |
| reqMessage | Optional | string | Applying message |
| joinSource | Required | int | Joining source, 1: admin invite, 2: be invited, 3: search join, 4: scan code join |
| inviterUserID | Required | string | Applier ID |
| ex | Optional | string | Extension field |
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
