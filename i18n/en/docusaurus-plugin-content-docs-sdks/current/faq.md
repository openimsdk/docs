---
title: FAQ
hide_title: true
sidebar_position: 10
---

# FAQ

## Do I need to get a conversation before sending a message?

When sending a message, you do not need to retrieve any conversation-related parameters beforehand. Here's how it works:

- **Private Chat**: Only the `userID` parameter is required.
- **Group Chat**: Only the `groupID` parameter is required.

## When should I call `getOneConversation`?

When a user initiates a chat from the client, the chat window UI typically displays conversation-related information.

1. **If the user selects a conversation from the conversation list to start chatting**:
     - The conversation information is already included in the conversation list, so there's no need to call `getOneConversation`.
2. **If the user initiates a chat from another entry point**:
     - You need to call `getOneConversation` first to retrieve the conversation information.
3. **Displaying conversation information in the chat UI**:
    - Based on product requirements, conversation information can be displayed in the chat UI.
