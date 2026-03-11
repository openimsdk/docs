---
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onConnectFailed

## Description

:::info

Triggered after a WebSocket connection attempt fails.

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

 Function()? onConnectFailed;

```

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onConnectFailed:(NSInteger)code err:(NSString *)err;

```

</TabItem>

<TabItem value="Android">

```java showLineNumbers

void onConnectFailed(long code, String error);

```
### Return Results

| Name | Type                                    | Description             |
| ---- | --------------------------------------- | ---------------- |
| code | long  | Error code |
| error | String  | Error info |


</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onConnectFailed(data: WSEvent): void;

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

IMSDK.on(CbEvents.OnConnectFailed, ({ errCode, errMsg }) => {});
```

### Return Results

| Name | Type                                    | Description             |
| ---- | --------------------------------------- | ---------------- |
| data | [WSEvent](/class/response.md) | Connection failure error info |

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onConnectFailed(data: WSEvent): void;

```

### Return Results

| Name | Type                                    | Description             |
| ---- | --------------------------------------- | ---------------- |
| data | [WSEvent](/class/response.md) | Connection failure error info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnConnectFailed, ({ errCode, errMsg }) => {});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnConnectFailed(int errCode, string errMsg);
```

</TabItem>
</Tabs>
