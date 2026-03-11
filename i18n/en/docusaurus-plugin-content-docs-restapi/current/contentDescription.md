---
sidebar_position: 10
title: Message Types
toc_max_heading_level: 4 
---

# `contentType` and Corresponding `content` Description in Messages

### **Brief Description**

- `{API_ADDRESS}/msg/send_msg` [API](../restapi/apis/messageManagement/sendMessage) request field `contentType` supported message types description and detailed field description of message `content`.

:::caution Note

For image, voice, video, file and other message types, you need to [upload the file](./apis/uploadManagement/initUpload.md) to get the download address before sending the message.

:::

### **`contentType` Summary**

| `contentType` Value | Type Description   |
| :------------: | :--------- |
|      101       | Text message   |
|      102       | Image message   |
|      103       | Audio message   |
|      104       | Video message   |
|      105       | File message   |
|      106       | @ message      |
|      109       | Location message   |
|      110       | Custom message |

### **`content` Details**

- `content` is a json object, different message types correspond to different json objects.

#### **contentType=101 Text Message** 📜

```json
{
  ...,
  "content": {
      "content": "hello"
  },
  ....
}
```

| Parameter | Required | Type | Description |
| :-----: | :--: | :----: | :----------------- |
| content | Yes | string | Specific content of text message |

#### **Card Message** 🏷️

```json
{
  ...,
  "content": {
      "userID":"",
      "nickname":"",
      "faceURL":"",
      "ex":""
  },
  ....
}
```

| Parameter | Required | Type | Description |
| :------: | :--: | :----: | :------- |
|  userID  | Yes | string | User ID |
| nickname | Yes | string | Username |
| faceURL  | Yes | string | User avatar |
|    ex    | No | string | Extension field |

#### **Image Message** 📷

```json
{
  ...,
  "content": {
      "sourcePath":"",
  "sourcePicture":{
      "uuid":"",
      "type":"",
      "size":0,
      "width":0,
      "height":0,
      "url":""
  },
  "bigPicture":{
      "uuid":"",
      "type":"",
      "size":0,
      "width":0,
      "height":0,
      "url":""
  },
  "snapshotPicture":{
      "uuid":"",
      "type":"",
      "size":0,
      "width":0,
      "height":0,
      "url":""
  }
  },
  ....
}
```

| Parameter | Required | Type | Description |
| :-------------: | :--: | :----: | :--------------------------------------------------------------------- |
|   sourcePath    | No | string | Local path of image file |
|  sourcePicture  | Yes | object | Original image information |
|   bigPicture    | Yes | object | Large image information |
| snapshotPicture | Yes | object | Thumbnail information |
|      uuid       | No | string | Unique ID of image file |
|      type       | Yes | string | Image file type |
|      size       | No | int | Image file size |
|      width      | Yes | int | Image width |
|     height      | Yes | int | Image height |
|       url       | Yes | string | Image download address, need to [upload file](./apis/uploadManagement/initUpload.md) first |

#### **Voice Message** 🎤

```json
{
  ...,
  "content": {
      "uuid":"",
      "soundPath":"",
      "sourceUrl":"",
      "dataSize":0,
      "duration":0,
      "soundType":""
  },
  ....
}
```

| Parameter | Required | Type | Description |
| :-------: | :--: | :----: | :------------------------------------------------------------------------- |
|   uuid    | No | string | Unique ID of voice file |
| soundPath | No | string | Local path of voice file |
| sourceUrl | Yes | string | Voice file download address, need to [upload file](./apis/uploadManagement/initUpload.md) first |
| dataSize  | No | int | Voice file size |
| duration  | Yes | int | Voice duration |
| soundType | No | string | Voice file type |

#### **Video Message** 📹

```json
{
  ...,
  "content": {
      "videoPath":"",
      "videoUUID":"",
      "videoUrl":"",
      "videoType":"",
      "videoSize":0,
      "duration":0,
      "snapshotPath":"",
      "snapshotUUID":"",
      "snapshotSize":0,
      "snapshotUrl":"",
      "snapshotWidth":0,
      "snapshotHeight":0
  },
  ....
}
```

| Parameter | Required | Type | Description |
| :------------: | :--: | :----: | :------------------------------------------------------------------------------- |
|   videoPath    | No | string | Local path of video file |
|   videoUUID    | No | string | Unique ID of video file |
|    videoUrl    | Yes | string | Video file download address, need to [upload file](./apis/uploadManagement/initUpload.md) first |
|   videoType    | Yes | string | Video file type |
|   videoSize    | Yes | int | Video file size |
|    duration    | Yes | int | Video duration |
|  snapshotPath  | No | string | Local path of video cover image file |
|  snapshotUUID  | No | string | Unique ID of video cover image |
|  snapshotSize  | No | int | Size of video cover image file |
|  snapshotUrl   | Yes | string | Video cover image file download address, need to [upload file](./apis/uploadManagement/initUpload.md) first |
| snapshotWidth  | Yes | int | Video cover image width |
| snapshotHeight | Yes | int | Video cover image height |

#### **File Message** 📁

```json
{
  ...,
  "content": {
      "filePath":"",
      "uuid":"",
      "sourceUrl":"",
      "fileName":"",
      "fileSize":0,
      "fileType":""
  },
  ....
}
```

| Parameter | Required | Type | Description |
| :-------: | :--: | :----: | :--------------------------------------------------------------------- |
| filePath  | No | string | Local path of file |
|   uuid    | No | string | Unique ID of file |
| sourceUrl | Yes | string | File download address, need to [upload file](./apis/uploadManagement/initUpload.md) first |
| fileName  | Yes | string | File name |
| fileSize  | Yes | int | File size |
| fileType  | No | string | File type |

#### **Emoji Message** 😄

```json
{
  ...,
  "content":{
    "index": 0,
    "data": ""
  },
  ...
}
```

| Parameter | Required | Type | Description |
| :----: | :--: | :----: | :------------------- |
| index  | Yes | int | Emoji index |
|  data  | No | string | Emoji custom json data |

#### **Location Message** 📍

```json
{
  ...,
  "content":{
  "description": "",
  "longitude": 0,
  "latitude": 0
  },
  ...,
}
```

| Parameter | Required | Type | Description |
| :---------: | :--: | :----: | :------- |
| description | No | string | Location description |
|  longitude  | Yes | double | Longitude |
|  latitude   | Yes | double | Latitude |

#### **@ Message** 📢

```json
{
  ...,
  "content": {
      "text": "",
      "atUserList": ['12312'],
      "isAtSelf": false,
  },
  ....
}
```

| Parameter | Required | Type | Description |
| :--------: | :--: | :-----: | :----------- |
|    text    | No | string | Message text content |
| atUserList | Yes | array | User list to @ |
|  isAtSelf  | No | boolean | Whether to @ self |

#### **Custom Message** 🖌️

```json
{
  ...,
  "content": {
      "data": "",
      "description": "",
      "extension": ""
  },
  ....
}
```

| Parameter | Required | Type | Description |
| :---------: | :--: | :----: | :------------------- |
|    data     | Yes | string | User-defined message content |
| description | No | string | Extended description information |
|  extension  | No | string | Extension field |
