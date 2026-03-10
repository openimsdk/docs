---
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# inputStatusChangedData

## 功能介绍

:::info

输入状态改变信息

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
]
}>

<TabItem value="Flutter">

### InputStatusChangedData

| 字段名称          | 字段类型                                           | 描述                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| userID          | String                                               | 用户ID                                                              |
| conversationID     | String                                               | 会话ID                                                   |
| platformIDs      | List< int >                                                | 平台号                                                    |

</TabItem>

<TabItem value="iOS">

### OIMInputStatusChangedData

| 字段名称          | 字段类型                                           | 描述                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| userID          | NSString                                               | 用户ID                                                              |
| conversationID     | NSString                                               | 会话ID                                                   |
| platformIDs      | List< NSInteger >                                                | 平台号                                                    |

</TabItem>

<TabItem value="Android">

</TabItem>


<TabItem value="uni-app">

### InputStatusChangedData

| 字段名称          | 字段类型                                           | 描述                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| userID          | string                                               | 用户ID                                                              |
| conversationID     | string                                               | 会话ID                                                   |
| platformIDs      | number[]                                              | 平台号                                                    |

</TabItem>

<TabItem value="Web">

### InputStatusChangedData

| 字段名称          | 字段类型                                           | 描述                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| userID          | string                                               | 用户ID                                                              |
| conversationID     | string                                               | 会话ID                                                   |
| platformIDs      | number[]                                              | 平台号                                                    |

</TabItem>

<TabItem value="React-Native">

### InputStatusChangedData

| 字段名称          | 字段类型                                           | 描述                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| userID          | string                                               | 用户ID                                                              |
| conversationID     | string                                               | 会话ID                                                   |
| platformIDs      | number[]                                              | 平台号                                                    |

</TabItem>


</Tabs>
