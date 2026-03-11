---
title: Callback After Setting Friend Remark
hide_title: true
---

# Callback After Setting Friend Remark

## Functional Description

The App business server can get the operation result of the user setting friend remark through this callback, and the App backend can perform operations such as data synchronization based on this.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users set friend remark through the client.
- App administrators set friend remark through REST API.

## Timing of Callback

- After OpenIM Server processes the request to set friend remark.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackAfterSetFriendRemarkCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterSetFriendRemarkCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterSetFriendRemarkCommand",
  "ownerUserID": "user123",
  "friendUserID": "user456",
  "remark": "My Best Friend"
}
```

### Request Package Field Description

| Field           | Type   | Description                                 |
| --------------- | ------ | ------------------------------------ |
| callbackCommand | string | Callback command, here it is the callback after setting friend remark |
| ownerUserID     | string | User ID executing the set remark operation            |
| friendUserID    | string | Friend user ID targeted for setting remark            |
| remark          | string | Content of the set remark                       |

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
