---
title: Callback After Revoking Single Chat Message
hide_title: true
---

# Callback After Revoking Single Chat Message

## Functional Description
The App business server can get the request of user revoking single chat messages through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIMServer to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- App users revoke single chat messages through the client.
- App administrators revoke single chat messages through the REST API admin_msgwithdraw interface.


## Timing of Callback
- After single chat message is successfully revoked.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeAfterMsgCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeAfterMsgCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackBeforeAfterMsgCommand",
  "conversationID": "si_u1_u2:0",
  "seq": 10,
  "userID": "user456"
}
```

### Request Package Field Description

| Object             | Type   | Description                                               |
|-----------------|--------|----------------------------------------------------|
| callbackCommand | string | Callback command, here it is the revoke single chat message callback                  |
| conversationID | string | Conversation ID |
| seq    | string | Message sequence                               |
| userID   | string | User ID of the message sender                               |


## Response Package Example

### Successful Response

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
| errCode     | 0                            | Custom error code, `0` here means ignore the callback result.|
| errMsg      | "An error message"           | Simple error message corresponding to the custom error code.|
| errDlt      | "Detailed error information" | Detailed error information corresponding to the custom error code.|
| nextCode    | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.|
