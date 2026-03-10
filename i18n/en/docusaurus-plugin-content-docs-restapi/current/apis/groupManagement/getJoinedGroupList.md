---
sidebar_position: 9
title: Get Joined Groups
hide_title: true
---

<center>

## Get Joined Groups

</center>

### Brief Description
- Get groups joined by designated user.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/get_joined_group_list` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "fromUserID": "9906953281",
  "pagination": {
    "showNumber": 10,
    "pageNumber": 1
  }
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| fromUserID | Required | string | User ID |
| pagination | Required | object | Pagination parameter structure |
| pagination.showNumber | Required | int | Current page number, starting from 1 |
| pagination.pageNumber | Required | int | Number of requests on the current page |
### Success Return Example


```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "total": 3,
    "groups": [
      {
        "groupID": "2137448827",
        "groupName": "11111",
        "notification": "",
        "introduction": "",
        "faceURL": "",
        "ownerUserID": "3517105008",
        "createTime": 1687753739612,
        "memberCount": 3,
        "ex": "",
        "status": 0,
        "creatorUserID": "2699373280",
        "groupType": 2,
        "needVerification": 0,
        "lookMemberInfo": 0,
        "applyMemberFriend": 0,
        "notificationUpdateTime": 0,
        "notificationUserID": ""
      },
      {
        "groupID": "2759960147",
        "groupName": "Group2",
        "notification": "",
        "introduction": "",
        "faceURL": "",
        "ownerUserID": "4771680259",
        "createTime": 1688106933734,
        "memberCount": 7,
        "ex": "",
        "status": 0,
        "creatorUserID": "4771680259",
        "groupType": 2,
        "needVerification": 0,
        "lookMemberInfo": 0,
        "applyMemberFriend": 0,
        "notificationUpdateTime": 0,
        "notificationUserID": ""
      },
      {
        "groupID": "3686066424",
        "groupName": "Group3",
        "notification": "",
        "introduction": "",
        "faceURL": "",
        "ownerUserID": "9906953281",
        "createTime": 1687933342067,
        "memberCount": 3,
        "ex": "",
        "status": 0,
        "creatorUserID": "9906953281",
        "groupType": 2,
        "needVerification": 0,
        "lookMemberInfo": 0,
        "applyMemberFriend": 0,
        "notificationUpdateTime": 0,
        "notificationUserID": ""
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
| total | int | Total number of joined groups |
| groups | array | [Group info](/commonFields.md#groupinfo) list |
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
