---
sidebar_position: 12
title: Get User Group Join Applications
hide_title: true
---

<center>

## Get User Group Join Applications List

</center>

### Brief Description
- Get all application lists of a designated user applying to join the group, sorted by time.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/get_user_req_group_applicationList` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "userID": "1225441072",
  "pagination": {
    "pageNumber": 1,
    "showNumber": 100
  }
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| userID | Required | string | User ID |
| pagination | Required | object | Pagination parameter structure |
| pagination.pageNumber | Optional | int | Current page number, starting from 1 |
| pagination.showNumber | Optional | int | Number of requests on the current page |
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
          "userID": "1225441072",
          "nickname": "blooming66",
          "faceURL": "",
          "ex": ""
        },
        "groupInfo": {
          "groupID": "3666081223",
          "groupName": "Group1",
          "notification": "notification1",
          "introduction": "",
          "faceURL": "",
          "ownerUserID": "1054527962",
          "createTime": 1687747185342,
          "memberCount": 14,
          "ex": "",
          "status": 0,
          "creatorUserID": "1054527962",
          "groupType": 2,
          "needVerification": 0,
          "lookMemberInfo": 0,
          "applyMemberFriend": 0,
          "notificationUpdateTime": 0,
          "notificationUserID": ""
        },
        "handleResult": 1,
        "reqMsg": "EEE",
        "handleMsg": "reason",
        "reqTime": 1687747407352,
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
| groupRequests | array | [Group application object](/commonFields.md#grouprequestinfo) list |
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
