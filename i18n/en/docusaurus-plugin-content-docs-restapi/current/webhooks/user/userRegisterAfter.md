---
title: Callback After User Registration Request
hide_title: true
---

# Callback After User Registration Request

## Functional Description

The App business server can get the user's registration request through this callback, and the App backend can perform operations such as data synchronization based on this.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- After a new user registers an account through the client.

## Timing of Callback

- After OpenIM Server successfully processes a new user account registration.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackAfterUserRegisterCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterUserRegisterCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterUserRegisterCommand",
  "users": {
    "userID": "user123",
    "nickname": "John Doe",
    "faceURL": "http://example.com/path/to/face/image.png",
    "ex": "Extra data",
    "createTime": 1673048592000,
    "appMangerLevel": 1,
    "globalRecvMsgOpt": 1
  }
}
```

### Request Package Field Description

| Field            | Type   | Description                                 |
| ---------------- | ------ | ------------------------------------ |
| callbackCommand  | string | Callback command, here it is the callback after user registration |
| users            | object | User information object                         |
| userID           | string | Unique identifier of the user                     |
| nickname         | string | Nickname of the user                           |
| faceURL          | string | URL of the user's avatar                       |
| ex               | string | Extra data field                       |
| createTime       | int64  | User creation timestamp (milliseconds)             |
| appMangerLevel   | int32  | Manager level of the user                       |
| globalRecvMsgOpt | int32  | Global receive message option of the user               |

## Response Package Example

### Operation Successful

App backend successfully synchronizes data.

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
| nextCode   | 1                            | Next execution instruction,                                                                                      |
