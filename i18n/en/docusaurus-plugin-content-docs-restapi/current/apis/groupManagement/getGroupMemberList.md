---
sidebar_position: 7
title: Get Group Member List
hide_title: true
---

<center>

## Get Group Member List

</center>

### Brief Description
- Get the group member list matching pagination, sorted by group owner, admin, normal.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/get_group_member_list`


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "groupID": "2559217223",
  "keyword":"userID",
  "pagination": {
    "pageNumber": 1,
    "showNumber": 100
  }
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| groupID | Required | string | Group ID |
| keyword | Optional | string | Group member's userID or nickname, if empty, returns matching paginated data |
| pagination | Required | object | Pagination parameter structure |
| pagination.pageNumber | Required | int | Current page number, starting from 1 |
| pagination.showNumber | Required | int | Number of requests on the current page |
### Success Return Example


```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "total": 5,
    "members": [
      {
        "groupID": "2559217223",
        "userID": "3034068043",
        "roleLevel": 20,
        "joinTime": 1687762198048,
        "nickname": "OK",
        "faceURL": "http://203.56.175.233:10002/third/object?name=%2Fdata%2Fuser%2F0%2Fcn.rentsoft.flutter.openim.consumer%2Fcache%2Fimage_cropper_1687330588901.jpg",
        "appMangerLevel": 0,
        "joinSource": 2,
        "operatorUserID": "4771680259",
        "ex": "",
        "muteEndTime": 0,
        "inviterUserID": "4771680259"
      },
      {
        "groupID": "2559217223",
        "userID": "3645617224",
        "roleLevel": 60,
        "joinTime": 1687762198048,
        "nickname": "Huo",
        "faceURL": "http://203.56.175.233:10002/third/object?name=%2Fdata%2Fuser%2F0%2Fcn.rentsoft.flutter.openim.consumer%2Fcache%2Fimage_cropper_1687846002615.jpg",
        "appMangerLevel": 0,
        "joinSource": 2,
        "operatorUserID": "4771680259",
        "ex": "",
        "muteEndTime": 0,
        "inviterUserID": "4771680259"
      },
      {
        "groupID": "2559217223",
        "userID": "3791793226",
        "roleLevel": 20,
        "joinTime": 1687760824107,
        "nickname": "Wo",
        "faceURL": "",
        "appMangerLevel": 0,
        "joinSource": 2,
        "operatorUserID": "4771680259",
        "ex": "",
        "muteEndTime": 0,
        "inviterUserID": "4771680259"
      },
      {
        "groupID": "2559217223",
        "userID": "4771680259",
        "roleLevel": 100,
        "joinTime": 1687760824107,
        "nickname": "Lumia",
        "faceURL": "http://203.56.175.233:10002/third/object?name=%2Fdata%2Fuser%2F0%2Fcn.rentsoft.flutter.openim.consumer%2Fcache%2Fimage_cropper_1687330764676.jpg",
        "appMangerLevel": 0,
        "joinSource": 2,
        "operatorUserID": "4771680259",
        "ex": "",
        "muteEndTime": 0,
        "inviterUserID": "4771680259"
      },
      {
        "groupID": "2559217223",
        "userID": "7117248489",
        "roleLevel": 20,
        "joinTime": 1687762198048,
        "nickname": "Hello",
        "faceURL": "",
        "appMangerLevel": 0,
        "joinSource": 2,
        "operatorUserID": "4771680259",
        "ex": "",
        "muteEndTime": 0,
        "inviterUserID": "4771680259"
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
| total | int | Total number of group members |
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
