---
sidebar_position: 10
title: Modify Group Information
hide_title: true
---

<center>
## Modify Group Information

</center>

### Brief Description

- Modify group information. Only pass the fields that need to be modified, zero value is also supported.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/group/set_group_info_ex`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example

```json
{
    "groupID": "xadxwr24",
    "groupName": "new name",
    "notification": "new notification",
    "introduction": "new introduction",
    "faceURL": "www.newfaceURL.com",
    "ex": "new ex",
    "needVerification": 1,
    "lookMemberInfo": 1,
    "applyMemberFriend": 1
}
```
| Field Name | Optional | Type | Description |
| :----    | :-------    | :--- | --- |
| groupID | Required | string | Group ID to be modified |
| groupName | Optional | string | New group name |
| notification | Optional | string | New group notification |
| introduction | Optional | string | New group introduction |
| faceURL | Optional | string | New group avatar |
| ex | Optional | string | New group extended field |
| needVerification | Optional | int | Do joining the group need verification; 0: Applying to join the group needs to be agreed, member invitation can directly join the group, 1: Everyone joining the group needs verification, except group owner and admin inviting to join the group, 2: Directly join the group|
| lookMemberInfo | Optional | int | Can other group member's information be viewed; 0: Allowed to view group member information, 1: Not allowed to view group member information |
| applyMemberFriend | Optional | int | Can group members add friends; 0: Allowed to add friends from group members, 1: Not allowed to add |
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
