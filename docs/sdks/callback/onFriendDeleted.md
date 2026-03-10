---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onFriendDeleted

## 功能介绍

:::info

某个用户的好友列表减少时会收到该回调。

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

### 返回原型

```dart showLineNumbers
  Function(FriendInfo info)? onFriendDeleted;
```

### 返回结果

| 名称 | 类型                                                | 描述     |
| ---- | --------------------------------------------------- | -------- |
| info | [FriendInfo](/class/relation/friendInfo.md) | 好友信息 |

</TabItem>

<TabItem value="iOS">

### 返回原型

```swift showLineNumbers

- (void)onFriendDeleted:(OIMFriendInfo *)info;

```

### 返回结果

| 名称 | 类型                                                   | 描述     |
| ---- | ------------------------------------------------------ | -------- |
| info | [OIMFriendInfo](/class/relation/friendInfo.md) | 好友信息 |

</TabItem>

<TabItem value="Android">

### 返回原型

```java showLineNumbers
 void onFriendDeleted(FriendInfo u)
```

### 返回结果

| 名称 | 类型                                                | 描述     |
| ---- | --------------------------------------------------- | -------- |
| u | [FriendInfo](/class/relation/friendInfo.md) | 好友信息 |


</TabItem>

<TabItem value="Web">

### 返回原型

```ts showLineNumbers

onFriendDeleted(data: WSEvent<FriendUserItem>): void;

```

### 返回结果

| 名称 | 类型                                                                                             | 描述     |
| ---- | ------------------------------------------------------------------------------------------------ | -------- |
| data | [WSEvent](/class/response.md)<[FriendUserItem](/class/relation/friendInfo.md)> | 好友信息 |

### 调用示例

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
  // data 好友信息
});
```

</TabItem>

<TabItem value="uni-app">

### 返回原型

```ts showLineNumbers

onFriendDeleted(data: WSEvent<FriendUserItem>): void;

```

### 返回结果

| 名称 | 类型                                                                                             | 描述     |
| ---- | ------------------------------------------------------------------------------------------------ | -------- |
| data | [WSEvent](/class/response.md)<[FriendUserItem](/class/relation/friendInfo.md)> | 好友信息 |

### 调用示例

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnFriendDeleted, ({ data }) => {
  // data 好友信息
});
```

</TabItem>

<TabItem value="Unity">

### 返回原型

```C# showLineNumbers
void OnFriendDeleted(FriendInfo info);
```

### 返回结果

| 名称 | 类型                                                | 描述     |
| ---- | --------------------------------------------------- | -------- |
| info | [FriendInfo](/class/relation/friendInfo.md) | 好友信息 |

</TabItem>
</Tabs>
