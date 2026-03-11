---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onFriendInfoChanged

## Description

:::info

This callback is triggered when a friend's personal information (including remarks) changes.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Return Prototype

```dart showLineNumbers
  Function(FriendInfo info)? onFriendInfoChanged;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [FriendInfo](/class/relation/friendInfo.md) | Friend info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers
- (void)onFriendInfoChanged:(OIMFriendInfo *)info;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [OIMFriendInfo](/class/relation/friendInfo.md) | Friend info |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
 void onFriendInfoChanged(FriendInfo u)
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| u | [FriendInfo](/class/relation/friendInfo.md) | Friend info |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers
onFriendInfoChanged(data: WSEvent<FriendUserItem>): void;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| data | [WSEvent](/class/response.md)<[FriendUserItem](/class/relation/friendInfo.md)> | Friend info |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

IMSDK.on(CbEvents.OnFriendInfoChanged, ({ data }) => {
  // data: friend info
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers
onFriendInfoChanged(data: WSEvent<FriendUserItem>): void;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| data | [WSEvent](/class/response.md)<[FriendUserItem](/class/relation/friendInfo.md)> | Friend info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnFriendInfoChanged, ({ data }) => {
  // data: friend info
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnFriendInfoChanged(FriendInfo info);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [FriendInfo](/class/relation/friendInfo.md) | Friend info |

</TabItem>
</Tabs>
