---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# RecvMsgOpt

:::info

In the `globalRecvMsgOpt` of [User Info](/class/user/userInfo.md), it globally controls whether to receive offline pushes.  
In the `recvMsgOpt` of a [Conversation](/class/conversation/conversationInfo.md), in addition to controlling whether to receive offline pushes for that conversation, it also controls whether the unread count of that conversation is included in the total unread count.

:::

## Conversation Message Receive Options

| Enum Value | Description                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 0          | Receive messages normally                                                                                                     |
| 1          | Reserved field                                                                                                                |
| 2          | Receive messages, but no offline push. When in a conversation, this conversation is not included in the total unread count.   |

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### ReceiveMessageOpt

| Enum Name  | Enum Value |
| ---------- | ---------- |
| receive    | 0          |
| notReceive | 1          |
| notNotify  | 2          |

</TabItem>

<TabItem value="iOS">

### OIMReceiveMessageOpt

| Enum Name                      | Enum Value |
| ------------------------------ | ---------- |
| OIMReceiveMessageOptReceive    | 0          |
| OIMReceiveMessageOptNotReceive | 1          |
| OIMReceiveMessageOptNotNotify  | 2          |

</TabItem>

<TabItem value="Android">

### Opt

| Enum Name               | Enum Value |
| ----------------------- | ---------- |
| NORMAL                  | 0          |
| NotReceiveMessage       | 1          |
| ReceiveNotNotifyMessage | 2          |

</TabItem>

<TabItem value="Web">

### MessageReceiveOptType

| Enum Name  | Enum Value |
| ---------- | ---------- |
| Nomal      | 0          |
| NotReceive | 1          |
| NotNotify  | 2          |

</TabItem>

<TabItem value="uni-app">

### MessageReceiveOptType

| Enum Name  | Enum Value |
| ---------- | ---------- |
| Nomal      | 0          |
| NotReceive | 1          |
| NotNotify  | 2          |

</TabItem>

<TabItem value="React-Native">

### MessageReceiveOptType

| Enum Name  | Enum Value |
| ---------- | ---------- |
| Nomal      | 0          |
| NotReceive | 1          |
| NotNotify  | 2          |

</TabItem>

<TabItem value="Unity">

### MessageReceiveOptType

| Enum Name  | Enum Value |
| ---------- | ---------- |
| Nomal      | 0          |
| NotReceive | 1          |
| NotNotify  | 2          |

</TabItem>

</Tabs>
