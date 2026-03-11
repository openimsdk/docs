---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# AttachedInfoElem

## Description

:::info

Message attached information.

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

### AttachedInfoElem

| Field Name | Field Type | Description |
| ---------------- | ---------------------------------------------------------------- | ---------------------------------- |
| groupHasReadInfo | [GroupHasReadInfo](/class/message/groupHasReadInfo.md) | Group message read info |
| isPrivateChat | bool | Indicates whether it is a burn-after-reading message, only supported in single chat |
| burnDuration | int | Burn-after-reading destruction time |
| hasReadTime | int | Read timestamp |

</TabItem>

<TabItem value="iOS">

### OIMAttachedInfoElem

| Field Name        | Field Type                                                          | Description                        |
| ----------------- | ------------------------------------------------------------------- | ---------------------------------- |
| groupHasReadInfo  | [OIMGroupHasReadInfo](/class/message/groupHasReadInfo.md) | Group message read info |
| isPrivateChat     | BOOL                                                                | Indicates whether it is a burn-after-reading message, only supported in single chat |
| burnDuration      | NSTimeInterval                                                      | Burn-after-reading destruction time |
| hasReadTime       | NSTimeInterval                                                      | Read timestamp |
| messageEntityList | -                                                                   | Currently unused |

</TabItem>

<TabItem value="Android">

### AttachedInfoElem

| Field Name       | Field Type                                                       | Description                        |
| ---------------- | ---------------------------------------------------------------- | ---------------------------------- |
| groupHasReadInfo | [GroupHasReadInfo](/class/message/groupHasReadInfo.md) | Group message read info |
| isPrivateChat    | boolean                                                          | Indicates whether it is a burn-after-reading message, only supported in single chat |
| burnDuration     | int                                                              | Burn-after-reading destruction time |
| hasReadTime      | int                                                              | Read timestamp |

</TabItem>

<TabItem value="Web">

### AttachedInfoElem

| Field Name        | Field Type                                                       | Description                                                   |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| groupHasReadInfo  | [GroupHasReadInfo](/class/message/groupHasReadInfo.md) | Group message read info |
| isPrivateChat     | boolean                                                          | Indicates whether it is a burn-after-reading message, only supported in single chat |
| burnDuration      | number                                                           | Burn-after-reading destruction time, client times it itself, calls api to delete message after arriving at time |
| hasReadTime       | number                                                           | Read timestamp |
| messageEntityList | -                                                                | Currently unused |

</TabItem>

<TabItem value="uni-app">

### AttachedInfoElem

| Field Name        | Field Type                                                       | Description                                                   |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| groupHasReadInfo  | [GroupHasReadInfo](/class/message/groupHasReadInfo.md) | Group message read info |
| isPrivateChat     | boolean                                                          | Indicates whether it is a burn-after-reading message, only supported in single chat |
| burnDuration      | number                                                           | Burn-after-reading destruction time, client times it itself, calls api to delete message after arriving at time |
| hasReadTime       | number                                                           | Read timestamp |
| messageEntityList | -                                                                | Currently unused |

</TabItem>

<TabItem value="React-Native">

### AttachedInfoElem

| Field Name        | Field Type                                                       | Description                                                   |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| groupHasReadInfo  | [GroupHasReadInfo](/class/message/groupHasReadInfo.md) | Group message read info |
| isPrivateChat     | boolean                                                          | Indicates whether it is a burn-after-reading message, only supported in single chat |
| burnDuration      | number                                                           | Burn-after-reading destruction time, client times it itself, calls api to delete message after arriving at time |
| hasReadTime       | number                                                           | Read timestamp |
| messageEntityList | -                                                                | Currently unused |

</TabItem>

<TabItem value="Unity">

### AttachedInfoElem

| Field Name       | Field Type                                                       | Description                        |
| ---------------- | ---------------------------------------------------------------- | ---------------------------------- |
| GroupHasReadInfo | [GroupHasReadInfo](/class/message/groupHasReadInfo.md) | Group message read info |
| IsPrivateChat    | bool                                                             | Indicates whether it is a burn-after-reading message, only supported in single chat |
| BurnDuration     | int                                                              | Burn-after-reading destruction time |
| HasReadTime      | int                                                              | Read timestamp |

</TabItem>

</Tabs>
