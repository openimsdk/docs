---
title: 'Open Source Feature Details'
hide_title: true
sidebar_position: 4
---

# Open Source Feature Details

## 1. Terminology

- **OpenIMSDK**: The overall project name, including OpenIMClientSDK and OpenIMServer.
- **OpenIMClientSDK**: The client SDK.
- **OpenIMServer**: The IM core server.
- **ChatServer**: The business extension server. This documentation no longer uses `Chat` as a standalone product name.
- **APP Administrator**: The backend management role that calls management APIs such as `10009`.

## 2. What the Open Source Edition Includes

| Component | Positioning | Open Source Status / Notes |
| --- | --- | --- |
| OpenIMClientSDK | Client SDK | Open source; provides client-side communication capabilities such as messages, conversations, groups, and contacts, and must be integrated into your own application |
| OpenIMServer | IM core server | Open source; provides the core IM pipeline, message synchronization, REST APIs, Webhook capabilities, and more |
| ChatServer | Business extension server | Open source; provides business extension capabilities such as registration, login, and APP management; if you already have your own account system, you can integrate it as needed or skip deployment |
| Client Demo / Sample UI | SDK integration example | Sample code is provided to demonstrate how to integrate OpenIMClientSDK, but it is not a complete production-ready client |
| Full Client UI | Complete end-user product interface | Not open source; developers need to design and implement it themselves |
| Admin Frontend | Backend page used by APP Administrators | Not currently open source; if you need management capabilities, you can build your own frontend on top of the APP Administrator APIs |

## 3. Open Source Capabilities of OpenIMClientSDK + OpenIMServer

This section focuses on the core capabilities already provided by the open-source edition of OpenIMClientSDK and OpenIMServer.

### 1. Friends and Relationships

- Supports finding, requesting, adding, and deleting friends.
- Supports accepting and rejecting friend requests.
- Supports friend remarks.
- Supports settings for whether friend requests are allowed.
- Friend lists and friend profiles support real-time synchronization.

### 2. Blocklist

- Supports restricting messages and audio/video calls.
- The blocklist synchronizes in real time.
- Supports adding and removing blocked users.

### 3. Groups

- Supports creating and dissolving groups.
- Supports join requests, invitations, leaving groups, and removing group members.
- Supports real-time notifications and synchronization for group names, avatars, and profile changes.
- Supports join verification settings.
- Supports group ownership transfer.
- Supports settings that prevent viewing other group members' profiles or adding them as contacts.
- Supports appointing and removing group administrators.
- Supports searching group members and setting member-specific group profiles.
- Supports muting everyone or muting designated group members.
- Supports publishing group announcements.

### 4. Messages

- Supports text, image, video, emoji, file, voice, contact card, location, custom, and group announcement messages.
- Supports offline messages, roaming messages, multi-device messages, and message history.
- Supports forwarding a single selected message and merged forwarding for multiple selected messages.
- Supports deleting, clearing, copying, and recalling messages.
- Supports editing messages after recall.
- Supports group @mentions, typing indicators in one-to-one chats, burn after reading, do-not-disturb for new messages, clearing chat history, allowing new members to view group history, and new message alerts.
- Supports local message search.

### 5. Conversations

- Supports pinned conversations.
- Supports deleting conversations.
- Supports searching local conversations.
- Supports conversation read state.
- Supports conversation do-not-disturb.

### 6. Server-Side Open Capabilities

- Provides REST APIs for authentication management, user management, relationship management, group management, conversation management, and message management.
- Provides Webhook capabilities such as group callbacks, message callbacks, push callbacks, relationship callbacks, and user callbacks.

### 7. Capacity and Deployment

- Supports up to 3,000 contacts.
- Supports groups with up to 100,000 members.
- Supports second-level synchronization.
- Supports cluster deployment from source code.

### 8. Multi-Device Login Policy

- Supports no forced logout across platforms.
- Supports one logged-in device per platform.
- Supports one logged-in device each on PC, mobile, tablet, web, and mini program.

### 9. Audio and Video Capabilities

- Supports basic one-to-one audio/video call capabilities.
- Group audio/video calls and video conferencing are not open source.
- When integrating one-to-one audio/video calls, business details such as unanswered timeout and cancellation need to be implemented by developers themselves.

## 4. How to Understand the Open Source Scope of OpenIMSDK

- If you only need core IM capabilities, focus on integrating OpenIMClientSDK and deploying OpenIMServer.
- If you also need business extension capabilities such as registration, login, and APP management, deploy ChatServer as needed.
- If you need a complete end-user product interface or an APP Administrator backend page, you need to implement it yourself based on the SDK, REST APIs, and your business requirements.
