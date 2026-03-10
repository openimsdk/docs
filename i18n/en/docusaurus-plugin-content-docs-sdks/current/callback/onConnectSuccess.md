---
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onConnectSuccess

## Description

:::info

Triggered after a WebSocket connection is successfully established.

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

 Function()? onConnectSuccess;

```

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onConnectSuccess;

```

</TabItem>

<TabItem value="Android">

### Prototype

```java showLineNumbers

void onConnectSuccess();

```
### Return Prototype
 None

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onConnectSuccess(data: WSEvent): void;

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

IMSDK.on(CbEvents.OnConnectSuccess, () => {});
```

### Return Results

| Name | Type                                    | Description |
| ---- | --------------------------------------- | ---- |
| data | [WSEvent](/class/response.md) | -    |

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onConnectSuccess(data: WSEvent): void;

```

### Return Results

| Name | Type                                    | Description |
| ---- | --------------------------------------- | ---- |
| data | [WSEvent](/class/response.md) | -    |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnConnectSuccess, () => {});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnConnectSuccess();
```

</TabItem>
</Tabs>
