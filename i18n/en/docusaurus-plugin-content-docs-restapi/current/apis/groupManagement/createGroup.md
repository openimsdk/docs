---
sidebar_position: 1
title: Create Group
hide_title: true
---

<center>

## Create Group

</center>

### Brief Description
- Create a group, need to specify the group owner, group members (including the group owner) cannot be less than 3 people.
### Request Method
- `post` 
### Request URL
- `{API_ADDRESS}/group/create_group` 


### Header
| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |


### Request Parameter Example


```json
{
  "memberUserIDs": [
    "1225441072"
  ],
  "adminUserIDs": [
    "2065939257"
  ],
  "ownerUserID": "1054527962",
  "groupInfo": {
    "groupID": "xadxwr24",
    "groupName": "yourg group name",
    "notification": "notification",
    "introduction": "introduction",
    "faceURL": "faceURL url",
    "ex": "ex",
    "groupType": 2,
    "needVerification": 0,
    "lookMemberInfo": 0,
    "applyMemberFriend": 0
  }
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| memberUserIDs | Optional | array | Group member list |
| adminUserIDs | Optional | array | Group admin list |
| ownerUserID | Required | string | Group owner |
| groupInfo | Required | object | [Group Info](/commonFields.md#groupinfo) list |
| groupInfo.groupID | Optional | string | Group ID |
| groupInfo.groupName | Required | string | Group name |
| groupInfo.notification | Optional | string | Group notice |
| groupInfo.introduction | Optional | string | Group introduction |
| groupInfo.faceURL | Optional | string | Group avatar URL |
| groupInfo.ex | Optional | string | Group extension field |
| groupInfo.groupType | Required | int | Group type, fixed as 2. |
| groupInfo.needVerification | Optional | int | Whether verifying is needed to join group |
| groupInfo.lookMemberInfo | Optional | int | Whether able to view other member's info |
| groupInfo.applyMemberFriend | Optional | int | Whether group member is allowed to add friend |
### Success Return Example


```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "groupInfo": {
      "groupID": "xadxwr24",
      "groupName": "yourg group name",
      "notification": "notification",
      "introduction": "introduction",
      "faceURL": "faceURL url",
      "ownerUserID": "199975690",
      "createTime": 1679656402377,
      "memberCount": 4,
      "ex": "ex",
      "status": 0,
      "creatorUserID": "",
      "groupType": 2,
      "needVerification": 0,
      "lookMemberInfo": 0,
      "applyMemberFriend": 0,
      "notificationUpdateTime": 0,
      "notificationUserID": ""
    }
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
| groupInfo | object | [Group Info](/commonFields.md#groupinfo) list |
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
