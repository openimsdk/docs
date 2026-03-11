---
title: Callback Before Setting Friend Remark
hide_title: true
---

# Callback Before Setting Friend Remark

## Functional Description

The App business server can get the user's request to set a friend remark through this callback. At the same time, the business server can refuse the user's setting request, or modify and intervene in the remark content.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users set friend remarks through the client.

## Timing of Callback

- Before OpenIM Server prepares to process the request to set a friend remark.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeSetFriendRemarkCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeSetFriendRemarkCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeSetFriendRemarkCommand",
  "ownerUserID": "user123",
  "friendUserID": "user456",
  "remark": "My Best Friend"
}
```

### Request Package Field Description

| Field           | Type   | Description                                   |
| --------------- | ------ | -------------------------------------- |
| callbackCommand | string | Callback command, here it is the callback before setting friend remark |
| ownerUserID     | string | User ID executing the set remark operation              |
| friendUserID    | string | Friend user ID targeted for setting remark              |
| remark          | string | Content of the set remark                         |

## Response Package Example

### Allow Setting Remark

Allow users to set friend remark.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "0",
  "remark": "My Best Friend"
}
```

## Response Package Field Description

| Field      | Value                        | Description                                                                                                |
| ---------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.                                                   |
| errCode    | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1. |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.                                                                    |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code.                                                                    |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.                                     |
| remark     | string                       | Content of the set remark.                                                                                    |
