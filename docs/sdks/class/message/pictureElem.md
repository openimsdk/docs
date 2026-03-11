---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# PictureElem

## 功能介绍

:::info

图片信息。

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

### PictureElem

| 字段名称        | 字段类型                                               | 描述         |
| --------------- | ------------------------------------------------------ | ------------ |
| sourcePath      | String                                                 | 本地资源地址 |
| sourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | 原图片详情   |
| bigPicture      | [PictureInfo](/class/message/pictureInfo.md) | 大图片详情   |
| snapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | 缩略图片详情 |

</TabItem>

<TabItem value="iOS">

### OIMPictureElem

| 字段名称        | 字段类型                                                  | 描述         |
| --------------- | --------------------------------------------------------- | ------------ |
| sourcePath      | NSString                                                  | 本地资源地址 |
| sourcePicture   | [OIMPictureInfo](/class/message/pictureInfo.md) | 原图片详情   |
| bigPicture      | [OIMPictureInfo](/class/message/pictureInfo.md) | 大图片详情   |
| snapshotPicture | [OIMPictureInfo](/class/message/pictureInfo.md) | 缩略图片详情 |

</TabItem>

<TabItem value="Android">

### PictureElem

| 字段名称        | 字段类型                                               | 描述         |
| --------------- | ------------------------------------------------------ | ------------ |
| sourcePath      | String                                                 | 本地资源地址 |
| sourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | 原图片详情   |
| bigPicture      | [PictureInfo](/class/message/pictureInfo.md) | 大图片详情   |
| snapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | 缩略图片详情 |

</TabItem>

<TabItem value="Web">

### PictureElem

| 字段名称        | 字段类型                                               | 描述         |
| --------------- | ------------------------------------------------------ | ------------ |
| sourcePath      | string                                                 | 本地资源地址 |
| sourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | 原图片详情   |
| bigPicture      | [PictureInfo](/class/message/pictureInfo.md) | 大图片详情   |
| snapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | 缩略图片详情 |

</TabItem>

<TabItem value="uni-app">

### PictureElem

| 字段名称        | 字段类型                                               | 描述         |
| --------------- | ------------------------------------------------------ | ------------ |
| sourcePath      | string                                                 | 本地资源地址 |
| sourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | 原图片详情   |
| bigPicture      | [PictureInfo](/class/message/pictureInfo.md) | 大图片详情   |
| snapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | 缩略图片详情 |

</TabItem>

<TabItem value="React-Native">
### PictureElem

| 字段名称        | 字段类型                                               | 描述         |
| --------------- | ------------------------------------------------------ | ------------ |
| sourcePath      | string                                                 | 本地资源地址 |
| sourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | 原图片详情   |
| bigPicture      | [PictureInfo](/class/message/pictureInfo.md) | 大图片详情   |
| snapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | 缩略图片详情 |

</TabItem>

<TabItem value="Unity">
### PictureElem

| 字段名称        | 字段类型                                               | 描述         |
| --------------- | ------------------------------------------------------ | ------------ |
| SourcePath      | string                                                 | 本地资源地址 |
| SourcePicture   | [PictureInfo](/class/message/pictureInfo.md) | 原图片详情   |
| BigPicture      | [PictureInfo](/class/message/pictureInfo.md) | 大图片详情   |
| SnapshotPicture | [PictureInfo](/class/message/pictureInfo.md) | 缩略图片详情 |

</TabItem>



</Tabs>
