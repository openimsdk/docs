---
sidebar_position: 2
title: Callback After Creating Group
hide_title: true
---

# Callback After Creating Group

## Functional Description

After a successful operation, the business server can perform necessary data synchronization or other business logic processing through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- After users perform corresponding operations successfully through the client or APP administrators through REST API.

## Timing of Callback
- After creating a group.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterCreateGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterCreateGroupCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackAfterCreateGroupCommand",
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
| callbackCommand         | string | Callback command, here it is the callback after creating a group                             |
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
| groupType               | int32  | Group type, fixed as 2.                                                     |
| needVerification        | int32  | Whether verification is needed to join the group                                           |
| lookMemberInfo          | int32  | Whether member info can be viewed                                         |
| applyMemberFriend       | int32  | Whether members can be applied as friends                                     |
| notificationUpdateTime  | int64  | Timestamp of group notification update (milliseconds)                                     |
| notificationUserID      | string | User ID who updated the group notification                                             |
| initMemberList          | array  | List of initial group members, including userID and roleLevel sub-fields            |
| initMemberList.userID   | string | User ID of the initial member                                               |
| initMemberList.roleLevel| int32  | Role level of the initial member               |

## Response Package Example
After the App backend synchronizes data, it sends a callback response package.

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 1
}

```

## Response Package Field Description

| Field      | Value                        | Description                                                     |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.   |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.    |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code. |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
