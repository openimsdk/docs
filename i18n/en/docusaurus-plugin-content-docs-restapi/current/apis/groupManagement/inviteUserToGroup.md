---
sidebar_position: 2
title: Invite to Group
hide_title: true
---

<center>

## Invite to Group

</center>

### Brief Description
- Invite user to group. Whether user can be pulled into the group is determined by the join group setting. If verification is required, group owner or group admin need to agree to proceed.

### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/invite_user_to_group` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "groupID": "2759960147",
  "invitedUserIDs": [
    "1225441072",
    "9906953281"
  ],
  "reason": "your reason"
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| groupID | Required | string | Group ID |
| invitedUserIDs | Required | array | Invited user ID list |
| reason | Optional | string | Invite reason |
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
