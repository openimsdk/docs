---
title: 'Version Notes'
hide_title: true
sidebar_position: 5
---

# Version Notes



**OpenIMSDK** maintains long-term support for the following versions:

- **SDK** v3.8 series
- **Server** v3.8 series
- **Chat** v1.8 series

Within the same major version, data is compatible across different minor versions. We recommend upgrading to the latest minor version, and using **tags** to ensure version accuracy and stability.

Due to limited maintenance resources, other versions will no longer be supported. Please upgrade as soon as possible to benefit from the latest features and optimizations.

## Current Latest Stable Versions

- **Server**: v3.8.3-patch.3
- **SDK**: v3.8.3-patch.3
- **Chat**: v1.8.4-patch.2

---

# Changelog

# v3.8.3-patch (2025-3-7)

## Server v3.8.3-patch.3

| **Category**         | **Description**                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **Bug Fixes**        | Fixed seq conversion tool not exiting correctly on failure.                               |
|                      | Fixed incorrect KickedToken setting.                                                     |
|                      | Fixed timed message destruction errors.                                                  |
|                      | Fixed abnormal messages missing timestamps, causing SDK exceptions.                      |
|                      | Fixed crash when recalling messages from members who already left the group.              |
|                      | Fixed incorrect time unit for user-set timed message destruction.                        |
|                      | Fixed seq conversion tool not being read correctly in Docker environments.                |
|                      | Fixed offline push errors and missing badge counts.                                      |
|                      | Fixed group info changes not being notified to the SDK correctly.                        |
|                      | Fixed incorrect sorting after admin changes.                                             |
|                      | Fixed incorrect notification type for group join events.                                 |
| **Improvements**     | Optimized sendNotification parameter passing to optionally include sender identification. |
|                      | Mapped Mongo backup folder in Docker and improved log output.                            |
|                      | Optimized batch incremental group member retrieval.                                      |

## SDK v3.8.3-patch.3

| **Category**         | **Description**                                                         |
| -------------------- | ----------------------------------------------------------------------- |
| **Bug Fixes**        | Fixed potential message duplication under poor network conditions.       |
|                      | Fixed conversation ID serialization errors.                             |
|                      | Fixed message gaps caused by server crashes or request cache expiration. |
|                      | Fixed conversation avatars not updating when user changes their avatar.  |
|                      | Fixed sync failures when seq is 0.                                      |
|                      | Fixed group member info retrieval failures.                             |
|                      | Fixed duplicate messages when pulling directly from the server.         |
| **Improvements**     | Optimized performance when handling large numbers of friend/group requests. |

## Chat v1.8.4-patch.2

| **Category**         | **Description**                                                    |
| -------------------- | ------------------------------------------------------------------ |
| **Bug Fixes**        | Fixed infinite loop in user attribute migration tool.              |
|                      | Fixed potential deadlock when getting cached AdminToken.            |
| **Improvements**     | Optimized proto gen and adopted new version of gRPC generation tool. |

---

# v3.8.3 (2025-1-10)

## Server v3.8.3

| **Category**         | **Description**                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| **New Features**     | Implemented GetLastMessage API.                                                                    |
|                      | Implemented syncing max/min seq from seq_user to the conversation collection for isEnd evaluation.  |
| **Improvements**     | Optimized Crontask scheduled message deletion implementation.                                       |
|                      | Changed upload log API `systemType` field to `AppFramework`.                                       |
|                      | Optimized common RPC call methods.                                                                 |
|                      | Optimized message caching logic.                                                                   |
|                      | Optimized log output functions.                                                                    |
|                      | Added `AppMangerLevel` field to the NotificationAccountInfo struct.                                |
| **Bug Fixes**        | Fixed group member avatar setting not taking effect.                                               |
|                      | Fixed log.ZPanic printing issues.                                                                  |
|                      | Fixed Server returning isEnd to control message pulling by SDK.                                    |
|                      | Fixed RPC panic recovery.                                                                          |
|                      | Fixed other fields not taking effect when setting IsPrivateChat.                                   |
|                      | Fixed occasional deletion of original messages when quoting messages.                              |
|                      | Fixed new members being able to read the last history message when `EnableHistoryForNewMembers` is disabled. |
|                      | Fixed incorrect KickTokens persistence.                                                            |
|                      | Fixed forwarding @messages to other groups causing abnormal conversation creation.                 |
|                      | Fixed online status errors.                                                                        |
|                      | Fixed service discovery and automatic port assignment errors.                                      |
|                      | Fixed GetUsersOnline returning incorrect online user list.                                         |
| **Other**            | Updated frontend image versions.                                                                   |

## SDK v3.8.3

| **Category**         | **Description**                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------ |
| **Improvements**     | Added parameters for message positioning and directional pulling, avoiding UI data interference. |
|                      | Optimized message retrieval logic.                                                         |
| **Bug Fixes**        | Fixed index creation error when chatlog table name contains `-`.                           |
|                      | Fixed current user info potentially being empty after reinstalling the app.                |
|                      | Fixed voice messages not being filtered when searching with empty keywords.                |
|                      | Fixed quoted messages not correctly switching to recalled state when app resumes from background. |

## Chat v1.8.4

| **Category**         | **Description**                                            |
| -------------------- | ---------------------------------------------------------- |
| **New Features**     | Implemented admin dashboard configuration center features. |
| **Improvements**     | Optimized Kubernetes adaptation and service image builds.  |
|                      | Optimized message retrieval logic.                         |
| **Bug Fixes**        | Fixed gRPC connection memory leak on Windows.              |
|                      | Fixed error stack printing issues.                         |

---

# Version Compatibility

| Module     | Version | Compatible Versions              |
| ---------- | ------- | -------------------------------- |
| **SDK**    | v3.8.3  | Server v3.8.3                    |
| **Server** | v3.8.3  | SDK v3.8.2, SDK v3.8.3           |
| **Chat**   | v1.8.4  | Server v3.8.2, Server v3.8.3    |
