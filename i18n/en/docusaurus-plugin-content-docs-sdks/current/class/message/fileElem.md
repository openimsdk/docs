---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# FileElem

## Description

:::info

File information.

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

### FileElem

| Field Name  | Field Type | Description  |
| --------- | -------- | ------------ |
| uuID      | String   | Unique ID    |
| filePath  | String   | Local resource address |
| fileSize  | int      | Size         |
| fileName  | String   | File name    |
| sourceUrl | String   | File remote address  |

</TabItem>

<TabItem value="iOS">

### OIMFileElem

| Field Name  | Field Type  | Description  |
| --------- | --------- | ------------ |
| uuID      | NSString  | Unique ID    |
| filePath  | NSString  | Local resource address |
| fileSize  | NSInteger | Size         |
| fileName  | NSString  | File name    |
| sourceUrl | CGFloat   | File remote address  |

</TabItem>

<TabItem value="Android">

### FileElem

| Field Name  | Field Type | Description  |
| --------- | -------- | ------------ |
| uuID      | String   | Unique ID    |
| filePath  | String   | Local resource address |
| fileSize  | int      | Size         |
| fileName  | String   | File name    |
| sourceUrl | String   | File remote address  |

</TabItem>

<TabItem value="Web">

### FileElem

| Field Name  | Field Type | Description  |
| --------- | -------- | ------------ |
| uuID      | string   | Unique ID    |
| filePath  | string   | Local resource address |
| fileSize  | number   | Size         |
| fileName  | string   | File name    |
| sourceUrl | string   | File remote address |

</TabItem>

<TabItem value="uni-app">

### FileElem

| Field Name  | Field Type | Description  |
| --------- | -------- | ------------ |
| uuID      | string   | Unique ID    |
| filePath  | string   | Local resource address |
| fileSize  | number   | Size         |
| fileName  | string   | File name    |
| sourceUrl | string   | File remote address |

</TabItem>

<TabItem value="React-Native">

### FileElem

| Field Name  | Field Type | Description  |
| --------- | -------- | ------------ |
| UUID      | string   | Unique ID    |
| FilePath  | string   | Local resource address |
| FileSize  | int      | Size         |
| FileName  | string   | File name    |
| SourceUrl | string   | File remote address  |

</TabItem>


<TabItem value="Unity">

### FileElem

| Field Name  | Field Type | Description  |
| --------- | -------- | ------------ |
| uuID      | string   | Unique ID    |
| filePath  | string   | Local resource address |
| fileSize  | number   | Size         |
| fileName  | string   | File name    |
| sourceUrl | string   | File remote address |

</TabItem>


</Tabs>
