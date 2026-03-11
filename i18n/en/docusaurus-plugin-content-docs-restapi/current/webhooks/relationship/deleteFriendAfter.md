---
title: Callback After Deleting Friend
hide_title: true
---

# Callback After Deleting Friend

## Functional Description

The App business server can view users' friend deletion information in real-time through this callback.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users delete friends through the client.
- App administrators delete friends through REST API.

## Timing of Callback

- After OpenIM Server receives the delete friend request and successfully deletes the friend.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackAfterDeleteFriendCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterDeleteFriendCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterDeleteFriendCommand",
  "ownerUserID": "user123",
  "friendUserID": "user456"
}
```

### Request Package Field Description

| Field           | Type   | Description                             |
| --------------- | ------ | -------------------------------- |
| callbackCommand | string | Callback command, here it is the callback after deleting a friend |
| ownerUserID     | string | User ID performing the delete operation            |
| friendUserID    | string | User ID of the deleted friend              |

## Response Package Example

### Operation Successful

Example of a successful operation response.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "0"
}
```

## Response Package Field Description

| Field      | Value                        | Description                                                                                                   |
| ---------- | ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.                                                     |
| errCode    | 20001                        | Custom error code, ranges from 20001-29999. Set when actionCode is not 0; set when nextCode is 1. |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.                                                                      |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code.                                                                      |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.                                       |
