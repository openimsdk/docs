---
title: Callback After Agreeing To Add Friend
hide_title: true
---

# Callback After Agreeing To Add Friend

## Functional Description

The App backend can view users' newly added friend verification messages in real-time through this callback.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- After an App user agrees to a friend request.

## Timing of Callback

- Triggered after OpenIM Server successfully adds a friend.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackAfterAddFriendCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterAddFriendCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterAddFriendCommand",
  "fromUserID": "user123",
  "toUserID": "user456",
  "handleMsg": "Let's be friends!",
  "handleResult": 1
}
```

### Request Package Field Description

| Object            | Type   | Description                                   |
| --------------- | ------ | -------------------------------------- |
| callbackCommand | string | Callback command, here it is the callback after agreeing to add a friend |
| fromUserID      | string | User ID originating the friend request              |
| toUserID        | string | User ID receiving the friend request              |
| handleMsg          | string | Additional message when handling the friend request                        |
| handleResult          | int32 | Result of the friend request handling                        |

## Response Package Example

### Handling Result

The result of processing a user's request to agree to add a friend.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "1"
}
```

## Response Package Field Description

| Field      | Value                        | Description                                                                                                    |
| ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.                                                       |
| errCode    | 20001                        | Custom error code, ranges from 20001-29999. Set when actionCode is not 0; set when nextCode is not 1. |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.                                                                        |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code.                                                                        |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.                                       |
