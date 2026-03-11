---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onSelfInfoUpdated

## Description

:::info

This callback is received when the logged-in user's personal information changes.

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
  Function(UserInfo info)? onSelfInfoUpdated;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [UserInfo](/class/user/userInfo.md) | Personal profile |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onSelfInfoUpdated:(OIMUserInfo *)info;

```

### Return Results

| Name     | Type | Description |
| -------- | ---- | -------- |
| userInfo | [OIMUserInfo](/class/user/userInfo.md) | Personal profile |

</TabItem>

<TabItem value="Android">
### Return Prototype

```java showLineNumbers
 void onSelfInfoUpdated(UserInfo info)
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [UserInfo](/class/user/userInfo.md) | User profile information |
</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onSelfInfoUpdated(data: WSEvent<SelfUserInfo>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| data | [WSEvent](/class/response.md)<[SelfUserInfo](/class/user/userInfo.md)> | Personal profile |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

IMSDK.on(CbEvents.OnSelfInfoUpdated, ({ data }) => {
  // data: personal profile
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onSelfInfoUpdated(data: WSEvent<SelfUserInfo>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| data | [WSEvent](/class/response.md)<[SelfUserInfo](/class/user/userInfo.md)> | Personal profile |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnSelfInfoUpdated, ({ data }) => {
  // data: personal profile
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnSelfInfoUpdated(UserInfo info);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [UserInfo](/class/user/userInfo.md) | Personal profile |

</TabItem>
</Tabs>
