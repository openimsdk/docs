---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onUserStatusChanged

## Description

:::info

Triggered when the online status of subscribed users changes.

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
  Function(UserStatusInfo info)? onUserStatusChanged;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [UserStatusInfo](/class/user/userStatusInfo.md) | User status info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onUserStatusChanged:(OIMUserStatusInfo *)info;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------------ |
| info | [OIMUserStatusInfo](/class/user/userStatusInfo.md) | User status info |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
    void onUserStatusChanged(UsersOnlineStatus onlineStatus)
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [onlineStatus](/class/user/userStatusInfo.md) | User profile information |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

enum OnlineState {
  Online = 1,
  Offline = 0,
}
type UserOnlineState = {
  platformID: Platform;
  status: OnlineState;
  userID: string;
};
onUserStatusChanged(data: WSEvent<UserOnlineState>): void;

```

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

IMSDK.on(
  CbEvents.OnUserStatusChanged,
  ({ data }) => {}
);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---- |
| data | [WSEvent](/class/response.md) | -    |

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

enum OnlineState {
  Online = 1,
  Offline = 0,
}
type UserOnlineState = {
  platformID: Platform;
  status: OnlineState;
  userID: string;
};
onUserStatusChanged(data: WSEvent<UserOnlineState>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---- |
| data | [WSEvent](/class/response.md) | -    |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(
  IMSDK.IMEvents.OnUserStatusChanged,
  ({ data }: WSEvent<UserOnlineState>) => {}
);
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnUserStatusChanged(OnlineStatus userOnlineStatus);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| userOnlineStatus | [OnlineStatus](/class/user/userStatusInfo.md) | User status info |

</TabItem>
</Tabs>
