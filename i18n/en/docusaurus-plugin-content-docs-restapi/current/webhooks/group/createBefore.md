---
sidebar_position: 1
title: Callback Before Creating Group
hide_title: true
---

# Callback Before Creating Group

## Functional Description

Before creating a group, the business server can reject this request, or modify and intervene in the request.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- Before users perform corresponding operations through the client or APP administrators through REST API.

## Timing of Callback
- Before creating a group.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeCreateGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeCreateGroupCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackBeforeCreateGroupCommand",
  "groupID": "12345",
  "groupName": "MyGroup",
  "notification": "Welcome to MyGroup!",
  "introduction": "This is a group for discussing example topics.",
  "faceURL": "http://example.com/path/to/face/image.png",
  "ownerUserID": "user123",
  "createTime": 1673048592000,
  "memberCount": 10,
  "ex": "Extra data",
  "status": 1,
  "creatorUserID": "user123",
  "groupType": 1,
  "needVerification": 1,
  "lookMemberInfo": 1,
  "applyMemberFriend": 0,
  "notificationUpdateTime": 1673048592000,
  "notificationUserID": "user456",
  "initMemberList": [
    {
      "userID": "user789",
      "roleLevel": 60
    },
    {
      "userID": "user101112",
      "roleLevel": 20
    }
  ]
}

```

### Request Package Field Description

| Object                     | Type   | Description                                                    |
|-------------------------|--------|----------------------------------------------------------------|
| callbackCommand         | string | Callback command, here it is the callback before creating a group                             |
| groupID                 | string | Unique identifier of the group                                               |
| groupName               | string | Name of the group                                                     |
| notification            | string | Notification info of the group                                                 |
| introduction            | string | Introduction of the group                                                     |
| faceURL                 | string | URL of the group's icon                                                |
| ownerUserID             | string | User ID of the group owner                                             |
| createTime              | int64  | Timestamp of group creation (milliseconds)                                       |
| memberCount             | uint32 | Number of group members                                                 |
| ex                      | string | Extra data field                                                 |
| status                  | int32  | Status of the group                                                     |
| creatorUserID           | string | User ID of the group creator                                           |
| groupType               | int32  | Group type, fixed as 2.                                                    |
| needVerification        | int32  | Whether verification is needed to join the group                                           |
| lookMemberInfo          | int32  | Whether member info can be viewed                                         |
| applyMemberFriend       | int32  | Whether members can be applied as friends                                     |
| notificationUpdateTime  | int64  | Timestamp of group notification update (milliseconds)                                     |
| notificationUserID      | string | User ID who updated the group notification                                             |
| initMemberList          | array  | List of initial group members, including userID and roleLevel sub-fields            |
| initMemberList.userID   | string | User ID of the initial member                                               |
| initMemberList.roleLevel| int32  | Role level of the initial member               |

## Response Package Example

### Allow Creation

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0,
    "groupID": "G001",
    "groupName": "MyGroup",
    "notification": "Welcome to MyGroup!",
    "introduction": "A group for discussions",
    "faceURL": "http://example.com/groupface.png",
    "ownerUserID": "user01",
    "ex": "Some extra data",
    "status": 1,
    "creatorUserID": "user02",
    "groupType": 1,
    "needVerification": 0,
    "lookMemberInfo": 1,
    "applyMemberFriend": 1
}

```

## Response Package Field Description

| Field         | Value                        | Description                                                                                         |
| ------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode    | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode       | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1.      |
| errMsg        | "An error message"           | Simple error message corresponding to the custom error code.                                        |
| errDlt        | "Detailed error information" | Detailed error information corresponding to the custom error code.                                  |
| nextCode      | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.    |
| groupID             | string  | Unique identifier of the group.                         |
| groupName           | string  | Name of the group.                             |
| notification        | string  | Notification/announcement message of the group.                       |
| introduction        | string  | Introduction of the group.                             |
| faceURL             | string  | URL of the group's icon or picture.                   |
| ownerUserID         | string  | User ID of the group owner.                       |
| ex                  | string  | Extra data or information.                         |
| status              | int32   | Status of the group.                             |
| creatorUserID       | string  | User ID of the creator of the group.                         |
| groupType           | int32   | Group type, fixed as 2.                             |
| needVerification    | int32   | Whether verification is needed to join the group.                   |
| lookMemberInfo      | int32   | Whether group member info can be viewed.                   |
| applyMemberFriend   | int32   | Whether group members can be applied as friends.               |
