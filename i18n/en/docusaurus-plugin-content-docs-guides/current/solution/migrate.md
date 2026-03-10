---
title: 'How to Migrate from Cloud Services'
sidebar_position: 4

---




In an OpenIMSDK system, the following key data stores are typically involved:
- **User information**
- **Friend relationships**
- **Blocklist**
- **Groups**
- **Messages**
- **Conversations** (can usually be rebuilt from messages)

If you are migrating from another IM cloud service to **OpenIMSDK**, or upgrading from a lower version to a higher version (e.g., from 3.3 to 3.8), follow these steps for data import and synchronization.

---

## 1. Import Users

- **API Reference**: [User Registration/Import](../../restapi/apis/userManagement/userRegister)
- **Purpose**: Import user information from external or legacy systems into OpenIMSDK.

---

## 2. Import Friend Relationships

- **API Reference**: [Batch Import Friends](../../restapi/apis/friendsManagement/importFriend)
- **Purpose**: Import friend relationships from external or legacy systems into OpenIMSDK.

---

## 3. Import Blocklist

- **API Reference**: [Add to Blocklist](../../restapi/apis/friendsManagement/addBlackList)
- **Purpose**: Import blocklist data from external or legacy systems into OpenIMSDK.

---

## 4. Create Groups

- **API Reference**: [Create Group](../../restapi/apis/groupManagement/createGroup)
- **Purpose**: Import groups from external or legacy systems into OpenIMSDK.

---

## 5. Import Group Members

- **API Reference**: [Invite Users to Group](../../restapi/apis/groupManagement/inviteUserToGroup)
- **Purpose**: Import group members from external or legacy systems into OpenIMSDK.

---

## 6. Import Messages

- **API Reference**: [Send Message API](../../restapi/apis/messageManagement/sendMessage)
- **Key Field**: `sendTime`
- **Purpose**: Import historical messages from external or legacy systems into OpenIMSDK. If upgrading OpenIMSDK, you need to parse historical messages and import them via this API.

---

## 7. Set Conversation State

- **API Reference**: [Set Conversations API](../../restapi/apis/conversationManagement/setConversations)
- **Purpose**: Import conversation states from external or legacy systems into OpenIMSDK.

---

After completing the above steps, the OpenIMSDK system will have complete user information, friend relationships, blocklist data, groups, messages, and conversation states. Upgrade client SDKs to the corresponding version to complete the migration.
For syncing friend aliases, group settings, etc., call the corresponding REST APIs.
