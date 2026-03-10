---
sidebar_position: 13
title: Callback After New Member Joins Group
hide_title: true
---

# Callback After New Member Joins Group

## Functional Description
After a successful operation, the business server can perform necessary data synchronization or other business logic processing through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- After users perform corresponding operations through the client or APP administrators through REST API, and new users successfully join the group.

## Timing of Callback
- After a new user successfully joins the group by any means.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterJoinGroupCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterJoinGroupCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterJoinGroupCommand",
  "operationID": "1646445464564",
  "groupID": "12345",
  "userID": "user789",
  "ex": "Extra data",
  "groupEx": "GroupExtra data"
}

```

### Request Package Field Description

| Object                     | Type   | Description                                                    |
|-------------------------|--------|----------------------------------------------------------------|
| callbackCommand         | string | Callback command, here it is the callback after a new member joins the group.                             |
| operationID | string | operationID used for global link tracking |
| userID                  | string | User ID of the member who joined the group.                                             |
| groupID                 | string | Unique identifier of the group.                                               |
| ex                      | string | Extra data field.                                                 |
| groupEx                 | string | Extra data field of the group.                                              |

## Response Package Example
After the App backend synchronizes data, it sends a callback response package.

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 1
}

```

## Response Package Field Description

| Field      | Value                        | Description                                                     |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.   |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.    |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code. |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
