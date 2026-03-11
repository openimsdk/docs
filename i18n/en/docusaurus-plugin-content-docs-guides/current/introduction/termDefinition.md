---
title: 'Concepts & Terminology'
hide_title: true
sidebar_position: 3
---
# Concepts & Terminology

## User Types

In OpenIMSDK, users are categorized into three types: **Regular Users**, **App Administrators**, and **System Notification Accounts**.

### Regular Users

- **Fields**: `userID`, `faceURL`, `nickname`, `ex`
- **Description**: Regular users are typically imported from external business systems and represent standard end users in the OpenIMSDK system. The `ex` field serves as an extension field for business use.

### App Administrator

- **Privileges**: Has super admin privileges
- **Usage**: Invokes REST APIs with App Administrator credentials to directly operate the OpenIMSDK system.
- **Built-in Admin**: OpenIMSDK Server has a built-in App Administrator with a `userID` of **imAdmin**.

### System Notification Account

- **Function**: The App Administrator sends notification messages as a System Notification Account, bypassing friend relationship and group permission restrictions. System Notification Accounts can be added via the REST API, and their nickname and avatar can be modified.
- **User Experience**: When a user receives a message from a System Notification Account, the message is displayed in the conversation with the notification account's avatar and nickname.

---

## Groups

The group functionality in OpenIMSDK includes the following aspects:

### Group Types

- **Single Group Type**: The system currently supports only one group type, with no distinction between small and large groups.

### Group Member Limits

- **Maximum Members**: There is no hard limit on group members, supporting up to **100,000** members.

### Joining Methods

Users can join a group through three methods:

1. **Invitation by Group Members**: Existing group members can invite new members to join directly.
2. **Join Request**: Users submit a request and wait for approval from the group owner or administrator.
3. **Open Membership**: Any user can freely join the group without approval.

### Group Roles & Permissions

There are three roles within a group, with descending levels of authority:

1. **Group Owner**
2. **Administrator**
3. **Regular Member**

#### Group Owner

- **Privileges**: Has the highest level of authority.
- **Management Capabilities**:
  - Appoint multiple administrators, all of whom share equal permissions.
  - Dissolve the group.
  - Transfer group ownership to another member.
  - Must transfer ownership before leaving the group.
  - Process join requests.
  - Manage group settings such as announcements and group name.

#### Administrator

- **Privileges**: Equal to other administrators, subordinate to the group owner.
- **Management Capabilities**:
  - Process join requests.
  - Manage group settings such as announcements and group name.
  - Perform management actions on regular members, such as removing or muting members.

#### Regular Member

- **Privileges**: Has basic group usage permissions.
- **Capabilities**: Participate in group chat, view announcements, and send messages.

### Permission Management

- **Higher-Privileged Roles**: Group owners and administrators can perform actions on lower-privileged roles, such as removing members or muting them.
- **Equal Administrator Permissions**: There is no hierarchy among administrators — all share equal permissions.

### Owner & Administrator Management

- **Processing Join Requests**: Both group owners and administrators can review and process join requests.
- **Group Settings Management**: Includes editing announcements, modifying the group name, etc.

---

## Messages & Notifications

### Messages

- **Definition**: Messages refer to actual content sent by users or the system, including text, images, videos, and other multimedia formats.
- **Functionality**:
  - **Content Delivery**: Transmits message content to recipients.
  - **Display & Rendering**: Clearly renders message content on the receiving end, ensuring users can read and understand it.

### Notifications

- **Definition**: Notifications are triggered by user or system actions and delivered to relevant parties in notification form.
- **Usage**:
  - **System Synchronization**: Used to synchronize system state or operations, such as group member sync, contact list sync, etc.
  - **Information Display**: Notifications come in two forms — one displays important events or operation results to users (e.g., group join notifications, system announcements), and the other serves purely as a system-level notification mechanism without being displayed to users as a message.

---

## Message Push

### Online Push

- **Definition**: When a user is online, OpenIM prioritizes its own long-lived connection channel for message delivery — this is called online push.
- **Characteristics**:
  - **High Real-Time Performance**: Messages are delivered to recipients immediately.
  - **Reliability**: Relies on long-lived connections to ensure reliable message delivery.

### Offline Push

- **Definition**: When a user is offline or the app process has been terminated, the OpenIMSDK long-lived connection cannot deliver messages. In this case, third-party push services must be used.
- **Implementation**:
  - **Vendor Push Services**: Uses vendor-specific push services such as APNs (Apple Push Notification Service).
  - **Within China**: Typically uses **GeTui** (个推) service.
  - **Outside China**: Typically uses **Firebase Cloud Messaging (FCM)**.
- **Characteristics**:
  - **Broad Coverage**: Works across various network conditions, ensuring messages are received when the user comes back online.

---

## Message Storage Types

### Local Messages
- Except for the JS SDK, OpenIMSDK messages are fetched and loaded on demand. Messages that have already been fetched by the client are stored locally, collectively referred to as "local messages."

### Multi-Device Sync Messages
- Users typically use multiple devices. When a user sends a message from Device A, that message is synchronized to Device B — these are called "multi-device sync messages."

### Offline Messages
- Messages received while the user is offline are synchronized and loaded from the server as needed upon re-login — these are called "offline messages."

### Roaming Messages
- When a user switches devices or reinstalls the application, the system fetches and synchronizes historical messages — these are called "roaming messages."

---
## Object Storage
- Object Storage is a storage architecture designed for massive amounts of unstructured data. It manages information by storing data as independent "objects," each containing the data itself, extensible metadata, and a globally unique identifier (Key).
- When sending file, image, or video messages, the content is typically uploaded to object storage first to generate a URL, which is then sent to the recipient. This entire process is handled internally by the IMSDK — you do not need to manage it. However, you must configure one of the supported object storage services: MinIO, OSS, COS, or S3.
---
