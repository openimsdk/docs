---
sidebar_position: 13
title: Get User Related Group Join Applications
hide_title: true
---

<center>

## From the perspective of a group or admin, get join applications for designated user's related groups

</center>

### Brief Description
- First, get all groups where the designated user is a member or admin, then return the group join application records of these groups.

### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/get_recv_group_applicationList` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "fromUserID": "8423809271",
  "pagination": {
    "pageNumber": 1,
    "showNumber": 100
  }
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| fromUserID | Required | string | User ID |
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
    "total": 1,
    "groupRequests": [
      {
        "userInfo": {
          "userID": "4356065820",
          "nickname": "Tom",
          "faceURL": "http://203.56.175.233:10002/third/object?name=%2Fdata%2Fuser%2F0%2Fcn.rentsoft.flutter.openim.consumer.base.open%2Fcache%2Fimage_cropper_1688350826192.jpg",
          "ex": ""
        },
        "groupInfo": {
          "groupID": "1085123084",
          "groupName": "Rose baby, Jack Dawson, Jacky",
          "notification": "notification1",
          "introduction": "",
          "faceURL": "",
          "ownerUserID": "8423809271",
          "createTime": 1688353410770,
          "memberCount": 3,
          "ex": "",
          "status": 0,
          "creatorUserID": "8423809271",
          "groupType": 2,
          "needVerification": 0,
          "lookMemberInfo": 0,
          "applyMemberFriend": 0,
          "notificationUpdateTime": 0,
          "notificationUserID": ""
        },
        "handleResult": 1,
        "reqMsg": "",
        "handleMsg": "reason",
        "reqTime": 1688376825952,
        "handleUserID": "",
        "handleTime": 0,
        "ex": "",
        "joinSource": 3,
        "inviterUserID": ""
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
| total | int | Total number of group join applications |
| groupRequests | array | [Group join application object](/commonFields.md#grouprequestinfo) list |
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
