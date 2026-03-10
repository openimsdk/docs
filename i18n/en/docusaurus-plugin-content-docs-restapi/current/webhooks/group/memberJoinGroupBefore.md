---
sidebar_position: 11
title: Callback Before Member Joins Group
hide_title: true
---

# Callback Before Member Joins Group

## Functional Description

Before a user joins a group by any means, the business server can reject this request, or modify and intervene in the request.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- Before users perform corresponding operations through the client or APP administrators through REST API, intended to make users join the group.

## Timing of Callback

- Before a group member joins the group by any means.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeMembersJoinGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeMembersJoinGroupCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeMembersJoinGroupCommand",
  "groupID": "12345",
  "memberList": [
    {
      "userID": "666",
      "ex": "337845818, 3q"
    },
    {
      "userID": "1028",
      "ex": "Are U OK"
    }
  ],
  "groupEx": "test Group"
}
```

### Request Package Field Description

| Object              | Type   | Description                                                             |
| ----------------- | ------ | ---------------------------------------------------------------- |
| callbackCommand   | string | Callback command, here it is the callback before members join the group.                             |
| groupID           | string | Unique identifier of the group.                                               |
| memberList        | array  | List of info of members about to join the group, including userID and user extra info ex. |
| memberList.userID | string | User ID of the member                                                    |
| memberList.ex     | string | User extra info of the member                                               |
| groupEx           | string | Extra info of the group.                                                 |

## Response Package Example

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": 0,
  "memberCallbackList": [
    {
      "userID": "3034068043",
      "nickname": "3q",
      "faceURL": "http://203.56.175.233:10002/third/object?name=%2Fdata%2Fuser%2F0%2Fcn.rentsoft.flutter.openim.consumer%2Fcache%2Fimage_cropper_1687330588901.jpg",
      "roleLevel": 20,
      "muteEndTime": 0,
      "ex": "Some extra data"
    },
    {
      "userID": "3034068043",
      "nickname": "President Lei",
      "faceURL": "http://203.56.175.233:10002/third/object?name=%2Fdata%2Fuser%2F0%2Fcn.rentsoft.flutter.openim.consumer%2Fcache%2Fimage_cropper_1687330588901.jpg",
      "roleLevel": 100,
      "muteEndTime": 0,
      "ex": "Some extra data"
    }
  ]
}
```

## Response Package Field Description

| Field                           | Value                        | Description                                                                                                |
| ------------------------------ | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode                     | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.                                                   |
| errCode                        | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1. |
| errMsg                         | "An error message"           | Simple error message corresponding to the custom error code.                                                                    |
| errDlt                         | "Detailed error information" | Detailed error information corresponding to the custom error code.                                                                    |
| nextCode                       | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.                                     |
| memberCallbackList             | array                        | List of Callback after webhook                                                                    |
| memberCallbackList.userID      | string                       | User ID                                                                                             |
| memberCallbackList.nickname    | string                       | User nickname                                                                                            |
| memberCallbackList.faceURL     | string                       | User avatar URL                                                                                        |
| memberCallbackList.roleLevel   | int32                        | User permission level                                                                                        |
| memberCallbackList.muteEndTime | int64                        | User mute end time                                                                                    |
| memberCallbackList.ex          | string                       | User extra info                                                                                        |
