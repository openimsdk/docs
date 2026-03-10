---
title: User Offline Status Callback
hide_title: true
---

# User Offline Status Callback

## Functional Description

The App business server can change the user status to offline through this callback.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- User initiates an offline request to log out through the client.
- The user's client is disconnected from the network.
- The user actively kills the client process, or the process is killed by the mobile operating system after switching to the background, or the process exits abnormally due to a crash.
- Client heartbeat timeout, such as closing the network, or the network is completely unavailable.

## Timing of Callback

- When the user goes offline actively or passively.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackAfterUserOfflineCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterUserOfflineCommand?contenttype=json
```

### Request Package Example

```json
{
  "userID": "user123",
  "callbackCommand": "callbackAfterUserOfflineCommand",
  "platformID": 3,
  "platform": "Windows"
}
```

### Request Package Field Description

| Object          | Type   | Description                                                             |
| --------------- | ------ | ---------------------------------------------------------------- |
| userID          | string | Unique identifier of the user                                                 |
| callbackCommand | string | Callback command, here it is the user offline status callback callbackAfterUserOfflineCommand |
| platformID      | int64  | Platform ID                                                           |
| Platform        | string | Platform name                                                           |

## Response Package Example

### Handling Result

User offline.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": ""
}
```

## Response Package Field Description

| Field      | Value                        | Description                                                            |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.               |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.                   |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.                                |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code.                                |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
