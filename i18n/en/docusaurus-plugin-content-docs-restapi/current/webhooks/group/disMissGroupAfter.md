---
sidebar_position: 16
title: Callback After Dismissing Group
hide_title: true
---

# Callback After Dismissing Group

## Functional Description
After a successful operation, the business server can perform necessary data synchronization or other business logic processing through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- After users perform corresponding operations successfully through the client or APP administrators through REST API.

## Timing of Callback
- After a group is successfully dismissed.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterDisMissGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterDisMissGroupCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterDisMissGroupCommand",
  "groupID": "G001",
  "groupType": 2,
  "ownerID": "user123",
  "membersID": ["user456", "user789"]
}

```

### Request Package Field Description

| Object                     | Type   | Description                                                    |
|-------------------------|--------|----------------------------------------------------------------|
| callbackCommand         | string | Callback command, here it is the callback after dismissing a group                             |
| groupID                 | string | Unique identifier of the group                                               |
| groupType               | int32  | Group type, fixed as 2.                                                    |
| ownerID                 | string | Group owner ID                                       |
| membersID     | array  | List of group members, including user IDs, representing members in the group upon dismissal            |

## Response Package Example

### Processing Result
After the App backend records the group dismissal info, it sends a callback response package.

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
