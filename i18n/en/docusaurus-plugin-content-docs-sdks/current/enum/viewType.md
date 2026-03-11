---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# ViewType

:::info

When [getting conversation history messages](/api/message/getAdvancedHistoryMessageList.md), the client uses this to notify the SDK of the current specific operation.

:::

## Current Operation Type

| Enum Value | Description              |
| ---------- | ------------------------ |
| 0          | Pull history messages    |
| 1          | Search history messages  |

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

<TabItem value="iOS">

### ViewType

| Enum Name  | Enum Value |
| ---------- | ---------- |
| History    | 0          |
| Search     | 1          |

</TabItem>

<TabItem value="Flutter">

### ViewType

| Enum Name  | Enum Value |
| --------- | ---------- |
| History   | 0          |
| Search    | 1          |

</TabItem>

<TabItem value="Web">

### ViewType

| Enum Name  | Enum Value |
| --------- | ---------- |
| History   | 0          |
| Search    | 1          |

</TabItem>
<TabItem value="Android">

### ViewType

| Enum Name  | Enum Value |
| --------- | ---------- |
| History   | 0          |
| Search    | 1          |

</TabItem>

<TabItem value="uni-app">

### ViewType

| Enum Name  | Enum Value |
| --------- | ---------- |
| History   | 0          |
| Search    | 1          |

</TabItem>

<TabItem value="React-Native">
### ViewType

| Enum Name  | Enum Value |
| --------- | ---------- |
| History   | 0          |
| Search    | 1          |

</TabItem>

<TabItem value="Unity">
### ViewType

| Enum Name  | Enum Value |
| --------- | ---------- |
| History   | 0          |
| Search    | 1          |

</TabItem>

</Tabs>
