---
sidebar_position: 8
title: Get Designated Group Member
hide_title: true
---

<center>

## Get Designated Group Member

</center>

### Brief Description
- Get detailed information about designated group members.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/get_group_members_info` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "groupID": "324253771",
  "userIDs": ["7009965934"]
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| groupID | Required | string | Group ID |
| userIDs | Required | array | Group member ID list |
### Success Return Example


```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "members": [
      {
        "groupID": "xadxwr24",
        "userID": "199975690",
        "roleLevel": 2,
        "joinTime": 1679656402380,
        "nickname": "Jason",
        "faceURL": "ic_avatar_05",
        "appMangerLevel": 0,
        "joinSource": 2,
        "operatorUserID": "openIMAdmin",
        "ex": "",
        "muteEndTime": 0,
        "inviterUserID": "openIMAdmin"
      },
      {
        "groupID": "xadxwr24",
        "userID": "1910095287",
        "roleLevel": 1,
        "joinTime": 1679656402380,
        "nickname": "2234",
        "faceURL": "",
        "appMangerLevel": 0,
        "joinSource": 2,
        "operatorUserID": "openIMAdmin",
        "ex": "",
        "muteEndTime": 0,
        "inviterUserID": "openIMAdmin"
      }
    ]
  }
}
```
### Parameter Description for Success Return Example


| Parameter Name | Type | Description |
| :----    | :-------    | :--- |
| errCode | int | Error code, 0 means successful |
| errMsg | string | Brief error message, empty |
| errDlt | errDlt | Detailed error message, empty |
| data | object | Generic data object, specific structure is below |
| members | array | [Group member info](/commonFields.md#groupmemberinfo) list |
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
