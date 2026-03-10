---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onFriendDeleted

## Description

:::info

This callback is triggered when a user's friend list decreases.

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
  Function(FriendInfo info)? onFriendDeleted;
```

### Return Results

| Name | Type                                                | Description     |
| ---- | --------------------------------------------------- | -------- |
| info | [FriendInfo](/class/relation/friendInfo.md) | Friend info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onFriendDeleted:(OIMFriendInfo *)info;

```

### Return Results

| Name | Type                                                   | Description     |
| ---- | ------------------------------------------------------ | -------- |
| info | [OIMFriendInfo](/class/relation/friendInfo.md) | Friend info |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
 void onFriendDeleted(FriendInfo u)
```

### Return Results

| Name | Type                                                | Description     |
| ---- | --------------------------------------------------- | -------- |
| u | [FriendInfo](/class/relation/friendInfo.md) | Friend info |


</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onFriendDeleted(data: WSEvent<FriendUserItem>): void;

```

### Return Results

| Name | Type                                                                                             | Description     |
| ---- | ------------------------------------------------------------------------------------------------ | -------- |
| data | [WSEvent](/class/response.md)<[FriendUserItem](/class/relation/friendInfo.md)> | Friend info |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.on(CbEvents.OnFriendDeleted, ({ data }) => {
  // data: friend info
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onFriendDeleted(data: WSEvent<FriendUserItem>): void;

```

### Return Results

| Name | Type                                                                                             | Description     |
| ---- | ------------------------------------------------------------------------------------------------ | -------- |
| data | [WSEvent](/class/response.md)<[FriendUserItem](/class/relation/friendInfo.md)> | Friend info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnFriendDeleted, ({ data }) => {
  // data: friend info
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnFriendDeleted(FriendInfo info);
```

### Return Results

| Name | Type                                                | Description     |
| ---- | --------------------------------------------------- | -------- |
| info | [FriendInfo](/class/relation/friendInfo.md) | Friend info |

</TabItem>
</Tabs>
