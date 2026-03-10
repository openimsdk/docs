---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onNewRecvMessageRevoked

## Description

:::info

Received when a received message is revoked or a sent message is revoked.

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
    Function(RevokedInfo info)? onRecvMessageRevokedV2;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [RevokedInfo](/class/message/revokedInfo.md) | Revoked info details |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onNewRecvMessageRevoked:(OIMMessageRevokedInfo *)messageRevoked;

```

### Return Results

| Name           | Type | Description |
| -------------- | ---- | -------- |
| messageRevoked | [OIMMessageRevokedInfo](/class/message/revokedInfo.md) | Revoked info details |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
      void onRecvMessageRevokedV2(RevokedInfo info);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [RevokedInfo](/class/message/revokedInfo.md) | Revoked info |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onNewRecvMessageRevoked(data: WSEvent<RevokedInfo>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------------ |
| data | [WSEvent](/class/response.md)<[RevokedInfo](/class/message/revokedInfo.md)> | Revoked info details |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

IMSDK.on(CbEvents.OnNewRecvMessageRevoked, ({ data }) => {
  // data: revoked info details
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onNewRecvMessageRevoked(data: WSEvent<RevokedInfo>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------------ |
| data | [WSEvent](/class/response.md)<[RevokedInfo](/class/message/revokedInfo.md)> | Revoked info details |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnNewRecvMessageRevoked, ({ data }) => {
  // data: revoked info details
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnNewRecvMessageRevoked(MessageRevoked info);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [MessageRevoked](/class/message/revokedInfo.md) | Revoked info details |

</TabItem>
</Tabs>
