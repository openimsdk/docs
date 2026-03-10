---
sidebar_position: 14
title: Callback Before Inviting New Members to Join Group
hide_title: true
---

# Callback Before Inviting New Members to Join Group

## Functional Description

Before inviting new members to join a group, the business server can reject this request, or modify and intervene in the request.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- Before users perform corresponding operations through the client or APP administrators through REST API.

## Timing of Callback
- Before inviting new members to join a group.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeInviteJoinGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeInviteJoinGroupCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeInviteJoinGroupCommand",
  "operationID": "1646445464564",
  "groupID": "12345",
  "reason": "friend",
  "invitedUserIDs": "[\"user1\",\"user2\"]"
}
```

### Request Package Field Description

| Object                     | Type   | Description                                                    |
|-------------------------|--------|----------------------------------------------------------------|
| callbackCommand         | string | Callback command, here it is the callback before inviting friends to join a group.                             |
| operationID | string | operationID used for global link tracking |
| groupID                 | string | Unique identifier of the group.                                               |
| reason | string | Invitation reason |
| invitedUserIDs                  | string | Array of User IDs invited to join the group in string format.                                             |

## Response Package Example

### Allow Creation
Allow users to join the group.

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0,
    "invitedUserIDs": "[\"user1\",\"user2\"]"
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
| invitedUserIDs                  | string | Array of User IDs invited to join the group in string format.                                             |
