---
title: Callback After Reporting Group Chat Message Read
hide_title: true
---

# Callback After Reporting Group Chat Message Read

## Functional Description
The App business server can view the read actions of users' group chat messages in real-time through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIMServer to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- App users report group chat messages as read through the client.
- App administrators set group chat messages as read through the REST API interface.


## Timing of Callback

- After successfully reporting group chat messages as read.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterSingleMsgReadCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterSingleMsgReadCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterSingleMsgReadCommand",
  "conversationID": "si_u1_u2:0"
  "userID": "user123",
  "seqs": [20, 35],
  "contentType": 101
}
```

### Request Package Field Description

| Object              | Type     | Description                         |
|-----------------|--------|----------------------------|
| callbackCommand | string | Callback command, here it is the group chat message read callback           |
| conversationID          | string | Conversation ID                  |
| userID       | string | User ID receiving the message                  |
| contentType     | int32  | Message type |
| seqs     | []int64  | Read message sequences |


## Response Package Example

### Successful Response
Successfully received and processed the user's request to read group chat messages.

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0
}
```

## Response Package Field Description

| Field         | Value                        | Description                                       |
|-------------|------------------------------|------------------------------------------|
| actionCode  | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.     |
| errCode     | 20001                        | Custom error code, ranges from 20001-29999. Set when actionCode is not 0; set when nextCode is not 1.|
| errMsg      | "An error message"           | Simple error message corresponding to the custom error code.|
| errDlt      | "Detailed error information" | Detailed error information corresponding to the custom error code.|
| nextCode    | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.|
