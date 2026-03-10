---
sidebar_position: 11
title: Modify Group Member Information
hide_title: true
---

<center>

## Modify Group Member Information

</center>

### Brief Description
- Modify group member information, roleLevel field cannot be set to 100 (which is the group owner). If you need to transfer the group owner, please use [Transfer Group Owner](/apis/groupManagement/transferGroup.md).
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/set_group_member_info`


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "members": [
    { 
      "groupID": "2137448827",
      "userID": "2699373280",
      "nickName": "newName",
      "faceURL": "new faceURL",
      "roleLevel": 60,
      "ex":""
    }
  ]
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| members | Required | array | List of group member objects |
| members.groupID | Required | string | Group ID |
| members.userID | Required | string | Group member ID |
| members.nickName | Optional | string | Group member nickname |
| members.faceURL | Optional | string | Group member avatar |
| members.roleLevel | Optional | int | Group member level, 100: group owner, 60: admin, 20: normal member |
| members.ex | Optional | string | Group member extension field |
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
