---
title: Callback After Creating Single Chat Conversation
hide_title: true
---

# Callback After Creating Single Chat Conversation

## Functional Description

The App business server can operate on users' single chat messages in real-time through this callback, such as:

- Recording the creation of single chat conversations in real-time (logging or synchronizing to other systems).

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIMServer to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users create a single chat conversation through the client.
- App administrators create a single chat conversation through REST API.

## Timing of Callback

- After OpenIMServer receives a message that a user has created a single chat conversation and before delivering the message to the target user.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackAfterSendSingleMsgCommand`

```plaintext
{WEBHOOK_ADDRESS}/callbackAfterSendSingleMsgCommand?contenttype=json
```


### Request Package Example

```json
{
  "callbackCommand": "callbackAfterCreateSingleChatConversationsCommand",
  "ownerUserId": "123228123",
  "conversationId": "si_123228123_622925731",
  "conversationType": 1,
  "userId": "622925731",
  "recvMsgOpt": 0,
  "isPinned": false,
  "isPrivateChat": false,
  "burnDuration": 0,
  "groupAtType": 0,
  "attachedInfo": "",
  "ex": "Extra conversation data"
}
```

### Request Package Field Description

| Object           | Type    | Description                                                               |
| ---------------- | ------- | ------------------------------------------------------------------------- |
| callbackCommand  | string  | Callback command, here it is the callback after creating a single chat conversation |
| ownerUserId      | string  | The user Id of the conversation owner                                       |
| conversationId   | string  | Conversation Id                                                             |
| conversationType | int     | Conversation type, 1 is single chat, 3 is group chat                         |
| userId           | string  | Conversation user Id, this field takes effect when the conversation type is 1 |
| recvMsgOpt       | int     | Message receiving options, 0 for normal receipt; 1 for no message receipt; 2 for receiving messages without notification |
| isPinned         | boolean | Is the conversation pinned                                                  |
| isPrivateChat    | boolean | Is burn after reading enabled                                               |
| burnDuration     | int     | Burn after reading message duration                                         |
| groupAtType      | int     | Group conversation announcement strong prompt type, special identifiers when someone **@ownerUserID** or **@All** in group announcement |
| attachedInfo     | string  | Extension field used by openIM                                              |
| ex               | string  | Extension field used by users                                               |

## Response Package Example

### Successful Response

After the App business server synchronizes data, it sends a callback response package

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

| Field      | Value                        | Description                                                     |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.   |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.    |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code. |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
