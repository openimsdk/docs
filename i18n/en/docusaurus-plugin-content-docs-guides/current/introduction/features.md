---
title: 'Open Source Feature Details'
hide_title: true
sidebar_position: 4
---

## Open Source Edition Feature Details

The open-source edition includes the following components, each with specific capabilities described below:

### 1. IM SDK / IM Server

- **Description:**
  - Provides the core functionality for instant messaging.
  - Comprises the client-side IMSDK and the server-side IMServer.
- **Features:**
  - Does not include a user interface (UI) — developers must integrate it into their applications.
  - Supports core features such as message sending, receiving, and management.

### 2. Client UI

- **Description:**
  - Provides a demo for demonstrating how to import and use the client SDK.
- **Features:**
  - Offers basic UI examples to help developers understand SDK integration.
  - Does not include full application functionality — must be extended as needed.
  - The complete client UI is not open source.

### 3. Audio/Video Calls

- **Description:**
  - Supports one-on-one audio and video calls.
- **Features:**
  - Provides basic audio/video call interfaces.
  - Group audio/video calls and video conferencing are not open source.

### 4. Admin Dashboard Frontend

- **Description:**
  - Frontend interface for managing and monitoring the IM system.
- **Features:**
  - Provides basic management features such as user management and message management.
  - Frontend code is not open source.
---



## IMSDK/IMServer Feature Reference

This document provides a detailed description of all features available in the IMSDK/IMServer open-source edition.

### Contacts

- **Basic Operations**
  - Search, request, find, add, and delete contacts.
- **Friend Requests**
  - Accept or reject friend requests.
- **Contact Alias**
  - Users can set alias names for their contacts.
- **Add Contact Permissions**
  - Configure whether to allow friend requests.
- **Real-Time Sync**
  - Contact list and contact profiles support real-time synchronization.

### Blocklist
  - Blocks messages and audio/video calls from blocked users.
  - Blocklist synchronizes in real time.
  - Add and remove users from the blocklist.

### Groups

- **Group Management**
  - Create and dissolve groups.
- **Member Management**
  - Request to join, invite members, leave groups, and remove members.
- **Group Profile Sync**
  - Group name, avatar changes, and profile updates are notified and synchronized in real time.
- **Join Verification**
  - Configure group join verification settings.
- **Ownership**
  - Transfer group ownership.
- **Member Permission Settings**
  - Restrict viewing other members' profiles or adding other members as contacts.
  - Appoint and remove group administrators.
  - Search group members and set member-specific group profiles.
- **Muting**
  - Group-wide mute and individual member muting.
- **Announcements**
  - Publish group announcements.

### Messages
- **Message Types**
  - Text, image, video, emoji, file, voice, contact card, location, custom messages, and group announcements.
- **Message Management**
  - Offline messages, roaming messages, multi-device sync messages, and message history.
  - Single message forwarding and multi-message merge forwarding.
  - Delete, clear, copy, and recall messages.
  - Edit after recall.
- **Message Interactions**
  - Group @mentions, typing indicator in private chats, burn after reading, do not disturb for new messages, clear chat history, allow new members to view group history, new message alerts.
  - Local message search.

### Conversations
- **Pin conversations**
- **Delete conversations**
- **Search local conversations**
- **Mark conversations as read**
- **Conversation do-not-disturb**

### REST API
- **Authentication Management**
- **User Management**
- **Relationship Management**
- **Group Management**
- **Conversation Management**
- **Message Management**

### Webhooks
- **Supports group callbacks, message callbacks, push callbacks, relationship callbacks, and user callbacks**

### Capacity & Performance

- **Contact Capacity**
  - Supports up to 3,000 contacts.
- **Group Capacity**
  - Supports large groups with up to 100,000 members.
- **Sync Speed**
  - Second-level synchronization.
- **Deployment**
  - Supports cluster deployment from source code.

### Multi-Device Login Policy
- **All platforms — no mutual kick-off**
- **One device per platform**
- **PC, Mobile, Pad, Web, and Mini Program — one device each**

### Audio/Video Calls
- **One-on-one audio/video calls. Developers need to implement additional logic such as timeout handling, cancellation, etc.**
