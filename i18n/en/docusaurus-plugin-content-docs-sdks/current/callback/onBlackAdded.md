---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onBlackAdded

## Description

:::info

This callback is triggered when a user is added to the blacklist.

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
  Function(BlacklistInfo info)? onBlacklistAdded;
```

### Return Results

| Name | Type                                                  | Description     |
| ---- | ----------------------------------------------------- | -------- |
| info | [BlacklistInfo](/class/relation/blackInfo.md) | Blacklist info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onBlackAdded:(OIMBlackInfo *)info;

```

### Return Results

| Name | Type                                                 | Description     |
| ---- | ---------------------------------------------------- | -------- |
| info | [OIMBlackInfo](/class/relation/blackInfo.md) | Blacklist info |

</TabItem>

<TabItem value="Android">

### Function Prototype

```Java showLineNumbers

-  void onBlacklistAdded(BlacklistInfo u)

```

### Return Results

| Name | Type                                                  | Description     |
| ---- | ----------------------------------------------------- | -------- |
| info | [BlacklistInfo](/class/relation/blackInfo.md) | Blacklist info |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onBlackAdded(data: WSEvent<BlackUserItem>): void;

```

### Return Results

| Name | Type                                                                                           | Description       |
| ---- | ---------------------------------------------------------------------------------------------- | ---------- |
| data | [WSEvent](/class/response.md)<[BlackUserItem](/class/relation/blackInfo.md)> | Blacklist info |

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

IMSDK.on(CbEvents.OnBlackAdded, ({ data }) => {
  // data: blacklist info
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onBlackAdded(data: WSEvent<BlackUserItem>): void;

```

### Return Results

| Name | Type                                                                                           | Description       |
| ---- | ---------------------------------------------------------------------------------------------- | ---------- |
| data | [WSEvent](/class/response.md)<[BlackUserItem](/class/relation/blackInfo.md)> | Blacklist info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnBlackAdded, ({ data }) => {
  // data: blacklist info
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnBlackAdded(BlackInfo blackInfo);
```

### Return Results

| Name | Type                                                  | Description     |
| ---- | ----------------------------------------------------- | -------- |
| info | [BlackInfo](/class/relation/blackInfo.md) | Blacklist info |

</TabItem>
</Tabs>
