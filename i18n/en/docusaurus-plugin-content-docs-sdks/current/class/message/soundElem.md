---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SoundElem

## Description

:::info

Audio information.

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

### SoundElem

| Field Name  | Field Type | Description         |
| --------- | -------- | ------------ |
| uuID      | String   | Unique ID      |
| soundPath | String   | Local resource address |
| dataSize  | int      | Size         |
| duration  | int      | Duration         |
| sourceUrl | String   | Audio remote address     |

</TabItem>

<TabItem value="iOS">

### OIMSoundElem

| Field Name  | Field Type  | Description         |
| --------- | --------- | ------------ |
| uuID      | NSString  | Unique ID      |
| soundPath | NSString  | Local resource address |
| dataSize  | NSInteger | Size         |
| duration  | NSInteger | Duration         |
| sourceUrl | CGFloat   | Audio remote address     |

</TabItem>

<TabItem value="Android">

### SoundElem

| Field Name  | Field Type | Description         |
| --------- | -------- | ------------ |
| uuID      | String   | Unique ID      |
| soundPath | String   | Local resource address |
| dataSize  | int      | Size         |
| duration  | int      | Duration         |
| sourceUrl | String   | Audio remote address     |

</TabItem>

<TabItem value="Web">

### SoundElem

| Field Name  | Field Type | Description         |
| --------- | -------- | ------------ |
| uuID      | string   | Unique ID      |
| soundPath | string   | Local resource address |
| dataSize  | number   | Size         |
| duration  | number   | Duration         |
| sourceUrl | string   | Audio remote address     |

</TabItem>

<TabItem value="uni-app">

### SoundElem

| Field Name  | Field Type | Description         |
| --------- | -------- | ------------ |
| uuID      | string   | Unique ID      |
| soundPath | string   | Local resource address |
| dataSize  | number   | Size         |
| duration  | number   | Duration         |
| sourceUrl | string   | Audio remote address     |

</TabItem>

<TabItem value="React-Native">

### SoundElem

| Field Name  | Field Type | Description         |
| --------- | -------- | ------------ |
| uuID      | string   | Unique ID      |
| soundPath | string   | Local resource address |
| dataSize  | number   | Size         |
| duration  | number   | Duration         |
| sourceUrl | string   | Audio remote address     |

</TabItem>

<TabItem value="Unity">

### SoundBaseInfo

| Field Name  | Field Type | Description         |
| --------- | -------- | ------------ |
| UUID      | string   | Unique ID      |
| SoundPath | string   | Local resource address |
| DataSize  | int      | Size         |
| Duration  | int      | Duration         |
| SourceUrl | string   | Audio remote address     |
| SourceType | string   | Audio type|

</TabItem>
</Tabs>
