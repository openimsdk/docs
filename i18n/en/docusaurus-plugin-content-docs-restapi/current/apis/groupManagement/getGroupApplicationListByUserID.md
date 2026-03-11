---
sidebar_position: 14
title: Get Multiple Users' Group Join Application Records
hide_title: true
---

<center>

## Get Multiple Users' Group Join Application Records in a Specified Group

</center>

### Brief Description
- Query the group join application records of multiple users in a specified group.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/get_group_users_req_application_list` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "groupID": "234",
  "userIDs": [
    "123"
  ]
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| groupID | Required | string | Group ID |
| userIDs | Required | array | User ID list |
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
          "groupName": "group1",
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
        "reqMsg": "hello",
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
