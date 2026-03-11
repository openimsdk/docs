---
title: Callback Before User Registration Request
hide_title: true
---

# Callback Before User Registration Request

## Functional Description

The App business server can get the user's registration request through this callback, and the business server can reject the user's registration request, or modify and intervene in the request.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- New user registers an account through the client.

## Timing of Callback

- When OpenIM Server receives a user registration request, before processing the user request.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeUserRegisterCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeUserRegisterCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeUserRegisterCommand",
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

| Field            | Type   | Description                             |
| ---------------- | ------ | -------------------------------- |
| callbackCommand  | string | Callback command, here it is the callback before user registration |
| users            | object | User information object                     |
| userID           | string | Unique identifier of the user                 |
| nickname         | string | Nickname of the user                       |
| faceURL          | string | URL of the user's avatar                   |
| ex               | string | Extra data field                   |
| createTime       | int64  | User creation timestamp (milliseconds)         |
| appMangerLevel   | int32  | Manager level of the user                   |
| globalRecvMsgOpt | int32  | Global receive message option of the user           |

### Header

| Header Name | Example Value        | Optional | Type   | Description                         |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, recommended to use timestamp, unique in each request |

## Response Package Example

### Operation Successful

Example of a successful operation response.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "0",
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

## Response Package Field Description

| Field            | Value                        | Description                                                                                                |
| ---------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode       | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.                                                   |
| errCode          | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1. |
| errMsg           | "An error message"           | Simple error message corresponding to the custom error code.                                                                    |
| errDlt           | "Detailed error information" | Detailed error information corresponding to the custom error code.                                                                    |
| nextCode         | 1                            | Next execution instruction,                                                                                    |
| users            | object                       | User information object                                                                                        |
| userID           | string                       | Unique identifier of the user                                                                                    |
| nickname         | string                       | Nickname of the user                                                                                          |
| faceURL          | string                       | URL of the user's avatar                                                                                      |
| ex               | string                       | Extra data field                                                                                      |
| createTime       | int64                        | User creation timestamp (milliseconds)                                                                            |
| appMangerLevel   | int32                        | Manager level of the user                                                                                      |
| globalRecvMsgOpt | int32                        | Global receive message option of the user                                                                              |
