---
sidebar_position: 100
title: Callback Before Applying to Join Group
hide_title: true
---

# Callback Before Applying to Join Group

## Functional Description
Before applying to join a group, the business server can reject this request, or modify and intervene in the request.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- Before users perform corresponding operations through the client or APP administrators through REST API.

## Timing of Callback
- Before applying to join a group.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeJoinGroupCommand`

```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeJoinGroupCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackBeforeJoinGroupCommand",
  "groupID": "12345",
  "groupType": 2,
  "applyID": "user789",
  "reqMessage": "hello",
  "ex": "Extra data"
}
```

### Request Package Field Description

| Object              | Type     | Description                    |
|-----------------|--------|-----------------------|
| callbackCommand | string | Callback command, here it is the callback before a new member applies to join the group. |
| groupID | string | Unique identifier of the group. |
| groupType | int | Group type, fixed as 2. |
| applyID   | string | User ID applying to join the group.        |
| reqMessage      | string | Application info                                   |
| ex              | string | Extra data field.              |

## Response Package Example

### Allow Joining

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

| Field         | Value                        | Description                                                                                         |
| ------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode    | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode       | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1.      |
| errMsg        | "An error message"           | Simple error message corresponding to the custom error code.                                        |
| errDlt        | "Detailed error information" | Detailed error information corresponding to the custom error code.                                  |
| nextCode      | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.    |
