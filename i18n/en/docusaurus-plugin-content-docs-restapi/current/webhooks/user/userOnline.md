---
title: User Online Status Callback
hide_title: true
---

# User Online Status Callback

## Functional Description
The App business server can change the user status to online through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- User initiates an online request to log in through the client.
- The user's client successfully reconnects after a network disconnection.
- Set the user's custom status.

## Timing of Callback
- When the user goes online.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterUserOnlineCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterUserOnlineCommand?contenttype=json
```

### Request Package Example
```json
{
  "userID": "user123",
  "callbackCommand": "callbackAfterUserOnlineCommand",
  "platformID": 3,
  "platform": "Windows"
}

```

### Request Package Field Description

| Object                  | Type   | Description                                                    |
|-------------------------|--------|----------------------------------------------------------------|
| userID                  | string | Unique identifier of the user                                               |
| callbackCommand         | string | Callback command, here it is the user online status callback                             |
| platformID      | int64  | Platform ID                                                           |
| Platform        | string | Platform name                                                           |

## Response Package Example

### Handling Result
User online.

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
| Field       | Value                        | Description                                       |
|-------------|------------------------------|------------------------------------------|
| actionCode  | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.     |
| errCode     | 0                            | Custom error code, `0` here means ignore the callback result.|
| errMsg      | "An error message"           | Simple error message corresponding to the custom error code.|
| errDlt      | "Detailed error information" | Detailed error information corresponding to the custom error code.|
| nextCode    | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.|
