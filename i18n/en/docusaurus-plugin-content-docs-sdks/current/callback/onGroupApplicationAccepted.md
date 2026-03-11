---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onGroupApplicationAccepted

## Description

:::info

When a group join application is accepted, the applicant and the group owner/administrators receive this callback.

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
  Function(GroupApplicationInfo info)? onGroupApplicationAccepted;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------------ |
| info | [GroupApplicationInfo](/class/group/groupApplicationInfo.md) | Group application info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onGroupApplicationAccepted:(OIMGroupApplicationInfo *)groupApplication;

```

### Return Results

| Name        | Type | Description |
| ----------- | ---- | ------------ |
| application | [OIMGroupApplicationInfo](/class/group/groupApplicationInfo.md) | Group application info |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
  void onGroupApplicationAccepted(GroupApplicationInfo info)
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------------ |
| info | [GroupApplicationInfo](/class/group/groupApplicationInfo.md) | Group application info |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onGroupApplicationAccepted(data: WSEvent<GroupApplicationItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| data | [WSEvent](/class/response.md)<[GroupApplicationItem](/class/group/groupApplicationInfo.md)> | Group application info |

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

IMSDK.on(CbEvents.OnGroupApplicationAccepted, ({ data }) => {
  // data: group join application
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onGroupApplicationAccepted(data: WSEvent<GroupApplicationItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| data | [WSEvent](/class/response.md)<[GroupApplicationItem](/class/group/groupApplicationInfo.md)> | Group application info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnGroupApplicationAccepted, ({ data }) => {
  // data: group join application
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```c# showLineNumbers
void OnGroupApplicationAccepted(GroupApplicationInfo application);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------------ |
| application | [GroupApplicationInfo](/class/group/groupApplicationInfo.md) | Group application info |

</TabItem>
</Tabs>
