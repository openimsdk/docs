---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# OfflinePushInfo

## Description

:::info

Offline push details.

:::

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

### OfflinePushInfo

| Field Name       | Field Type | Description               |
| -------------- | -------- | ------------------ |
| title          | String   | Push title           |
| desc           | String   | Push description           |
| iOSPushSound   | String   | Name of the push sound file |
| iOSBadgeCount  | bool     | Show badge           |
| operatorUserID | String   |                    |
| ex             | String   | Extension content           |

</TabItem>

<TabItem value="iOS">

### OIMOfflinePushInfo

| Field Name       | Field Type | Description               |
| -------------- | -------- | ------------------ |
| title          | NSString | Push title           |
| desc           | NSString | Push description           |
| iOSPushSound   | NSString | Name of the push sound file |
| iOSBadgeCount  | BOOL     | Show badge           |
| operatorUserID | NSString |                    |
| ex             | NSString | Extension content                 |

</TabItem>

<TabItem value="Android">

### OfflinePushInfo

| Field Name       | Field Type | Description               |
| -------------- | -------- | ------------------ |
| title          | String   | Push title           |
| desc           | String   | Push description           |
| iOSPushSound   | String   | Name of the push sound file |
| iOSBadgeCount  | boolean     | Show badge           |
| operatorUserID | String   |                    |
| ex             | String   | Extension content           |

</TabItem>

<TabItem value="Web">

### OfflinePushInfo

| Field Name       | Field Type | Description                   |
| -------------- | -------- | ---------------------- |
| title          | string   | Push title               |
| desc           | string   | Push description               |
| iOSPushSound   | string   | Name of the iOS push sound file |
| iOSBadgeCount  | boolean  | Whether to show iOS badge       |
| operatorUserID | string   |                        |
| ex             | string   | Extension content               |

</TabItem>

<TabItem value="uni-app">

### OfflinePushInfo

| Field Name       | Field Type | Description                   |
| -------------- | -------- | ---------------------- |
| title          | string   | Push title               |
| desc           | string   | Push description               |
| iOSPushSound   | string   | Name of the iOS push sound file |
| iOSBadgeCount  | boolean  | Whether to show iOS badge       |
| operatorUserID | string   |                        |
| ex             | string   | Extension content               |

</TabItem>

<TabItem value="React-Native">

### OfflinePushInfo

| Field Name       | Field Type | Description                   |
| -------------- | -------- | ---------------------- |
| title          | string   | Push title               |
| desc           | string   | Push description               |
| iOSPushSound   | string   | Name of the iOS push sound file |
| iOSBadgeCount  | boolean  | Whether to show iOS badge       |
| operatorUserID | string   |                        |
| ex             | string   | Extension content               |

</TabItem>

<TabItem value="Unity">

### OfflinePushInfo

| Field Name       | Field Type | Description               |
| -------------- | -------- | ------------------ |
| Title          | string   | Push title           |
| Desc           | string   | Push description           |
| IOSPushSound   | string   | Name of the push sound file |
| IOSBadgeCount  | bool     | Show badge           |
| OperatorUserID | string   |                    |
| Ex             | string   | Extension content           |

</TabItem>
</Tabs>
