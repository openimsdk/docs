---
title: Callback Before Creating Single Chat Conversation
hide_title: true
---

# Callback Before Creating Single Chat Conversation

## Functional Description

The App business server can operate on the user's single chat conversation creation in real-time through this callback, such as: real-time recording of single chat conversation creation, allowing the creation of a single chat conversation.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIMServer to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users create single chat conversations through the client.

## Timing of Callback

- After OpenIMServer receives that a user is creating a single chat conversation and before delivering the information to the target user.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeCreateSingleChatConversationsCommand`

```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeCreateSingleChatConversationsCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeCreateSingleChatConversationsCommand",
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
| callbackCommand  | string  | Callback command, here it is the callback before creating a single chat conversation |
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

### Allow Creation

Allow creating a single chat conversation.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "",
  "recvMsgOpt": 1,
  "isPinned": true,
  "isPrivateChat": false,
  "burnDuration": 30,
  "groupAtType": 0,
  "attachedInfo": "Modified attached info",
  "ex": "Modified extra data"
}
```

## Response Package Field Description

| Field         | Value                        | Description                                                                                         |
| ------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode    | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode       | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1.      |
| errMsg        | "An error message"           | Simple error message corresponding to the custom error code.                                        |
| errDlt        | "Detailed error information" | Detailed error information corresponding to the custom error code.                                  |
| nextCode      | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.    |
| recvMsgOpt    | int                          | Message receiving options, 0 for normal receipt; 1 for no message receipt; 2 for receiving messages without notification |
| isPinned      | boolean                      | Is the conversation pinned                                                                          |
| isPrivateChat | boolean                      | Is burn after reading enabled                                                                       |
| burnDuration  | int                          | Burn after reading message duration                                                                 |
| groupAtType   | int                          | Group conversation announcement strong prompt type, special identifiers when someone **@ownerUserID** or **@All** in group announcement |
| attachedInfo  | string                       | Extension field used by openIM                                                                      |
| ex            | string                       | Extension field used by users                                                                       |
