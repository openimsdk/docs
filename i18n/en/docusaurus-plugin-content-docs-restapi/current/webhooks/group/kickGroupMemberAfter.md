---
sidebar_position: 12
title: Callback After Kicking Group Member
hide_title: true
---

# Callback After Kicking Group Member

## Functional Description
After a successful operation, the business server can perform necessary data synchronization or other business logic processing through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- After users perform corresponding operations successfully through the client or APP administrators through REST API.

## Timing of Callback
- After a group member is successfully kicked out.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterKickGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterKickGroupCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterKickGroupCommand",
  "groupID": "G001",
  "kickedUserIDs": ["user123", "user456"],
  "reason": "Violation of group rules"
}
```

### Request Package Field Description

| Field           | Type     | Description                                         |
|--------------|----------|--------------------------------------------|
| callbackCommand | string   | Callback command, here it is the callback after kicking a group member              |
| groupID       | string   | Unique identifier of the group                            |
| kickedUserIDs | []string | List of User IDs of the kicked group members                  |
| reason        | string   | Reason for kicking the member                               |

## Response Package Example

### Allow Kicking
Allow kicking the specified group members.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": 0
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
