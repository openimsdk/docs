---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# VideoElem

## Description

:::info

Video information.

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

### VideoElem

| Field Name       | Field Type | Description         |
| -------------- | -------- | ------------ |
| videoUUID      | String   | Unique ID      |
| videoPath      | String   | Local resource address |
| videoType      | String   | Resource type     |
| videoSize      | int      | Size         |
| duration       | int      | Duration         |
| videoUrl       | String   | Video remote address     |
| snapshotUUID   | String   | Unique ID      |
| snapshotPath   | String   | Type         |
| snapshotSize   | int      | Size         |
| snapshotWidth  | int      | Width         |
| snapshotHeight | int      | Height         |
| snapshotUrl    | String   | Video thumbnail address     |

</TabItem>

<TabItem value="iOS">

### OIMVideoElem

| Field Name       | Field Type  | Description         |
| -------------- | --------- | ------------ |
| videoUUID      | NSString  | Unique ID      |
| videoPath      | NSString  | Local resource address |
| videoType      | NSString  | Resource type     |
| videoSize      | NSInteger | Size         |
| duration       | NSInteger | Duration         |
| videoUrl       | CGFloat   | Video remote address     |
| snapshotUUID   | NSString  | Unique ID      |
| snapshotPath   | NSString  | Type         |
| snapshotSize   | NSInteger | Size         |
| snapshotWidth  | CGFloat   | Width         |
| snapshotHeight | CGFloat   | Height         |
| snapshotUrl    | CGFloat   | Video thumbnail address     |

</TabItem>

<TabItem value="Android">

### VideoElem

| Field Name       | Field Type | Description         |
| -------------- | -------- | ------------ |
| videoUUID      | String   | Unique ID      |
| videoPath      | String   | Local resource address |
| videoType      | String   | Resource type     |
| videoSize      | int      | Size         |
| duration       | int      | Duration         |
| videoUrl       | String   | Picture URL     |
| snapshotUUID   | String   | Unique ID      |
| snapshotPath   | String   | Type         |
| snapshotSize   | int      | Size         |
| snapshotWidth  | int      | Width         |
| snapshotHeight | int      | Height         |
| snapshotUrl    | String   | Video thumbnail address     |

</TabItem>

<TabItem value="Web">

### VideoElem

| Field Name       | Field Type | Description         |
| -------------- | -------- | ------------ |
| videoUUID      | string   | Unique ID      |
| videoPath      | string   | Local resource address |
| videoType      | string   | Resource type     |
| videoSize      | number   | Size         |
| duration       | number   | Duration         |
| videoUrl       | string   | Picture URL     |
| snapshotUUID   | string   | Unique ID      |
| snapshotPath   | string   | Type         |
| snapshotSize   | number   | Size         |
| snapshotWidth  | number   | Width         |
| snapshotHeight | number   | Height         |
| snapshotUrl    | string   | Video thumbnail address     |

</TabItem>

<TabItem value="uni-app">

### VideoElem

| Field Name       | Field Type | Description         |
| -------------- | -------- | ------------ |
| videoUUID      | string   | Unique ID      |
| videoPath      | string   | Local resource address |
| videoType      | string   | Resource type     |
| videoSize      | number   | Size         |
| duration       | number   | Duration         |
| videoUrl       | string   | Picture URL     |
| snapshotUUID   | string   | Unique ID      |
| snapshotPath   | string   | Type         |
| snapshotSize   | number   | Size         |
| snapshotWidth  | number   | Width         |
| snapshotHeight | number   | Height         |
| snapshotUrl    | string   | Video thumbnail address     |

</TabItem>

<TabItem value="React-Native">

### VideoElem

| Field Name       | Field Type | Description         |
| -------------- | -------- | ------------ |
| videoUUID      | string   | Unique ID      |
| videoPath      | string   | Local resource address |
| videoType      | string   | Resource type     |
| videoSize      | number   | Size         |
| duration       | number   | Duration         |
| videoUrl       | string   | Picture URL     |
| snapshotUUID   | string   | Unique ID      |
| snapshotPath   | string   | Type         |
| snapshotSize   | number   | Size         |
| snapshotWidth  | number   | Width         |
| snapshotHeight | number   | Height         |
| snapshotUrl    | string   | Video thumbnail address     |

</TabItem>

<TabItem value="Unity">

###  VideoBaseInfo

| Field Name       | Field Type | Description         |
| -------------- | -------- | ------------ |
| VideoUUID      | string   | Unique ID      |
| VideoPath      | string   | Local resource address |
| VideoType      | string   | Resource type     |
| VideoSize      | int      | Size         |
| Duration       | int      | Duration         |
| VideoUrl       | string   | Video remote address     |
| SnapshotUUID   | string   | Unique ID      |
| SnapshotPath   | string   | Type         |
| SnapshotSize   | int      | Size         |
| SnapshotWidth  | int      | Width         |
| SnapshotHeight | int      | Height         |
| SnapshotUrl    | string   | Video thumbnail address     |

</TabItem>
</Tabs>
