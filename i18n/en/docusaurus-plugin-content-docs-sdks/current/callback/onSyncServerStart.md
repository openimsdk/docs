---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onSyncServerStart

## Description

:::info

Callback when syncing conversations with the server starts.

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
Function()? onSyncServerStart;
```

### Return Results

None

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onSyncServerStart;

```

### Return Results

None

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
    void onSyncServerStart()
```

### Return Results

None

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onSyncServerStart(): void;

```

### Return Results

None

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

IMSDK.on(CbEvents.OnSyncServerStart, () => {});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onSyncServerStart(): void;

```

### Return Results

None

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnSyncServerStart, () => {});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnSyncServerStart();
```

### Return Results

None

</TabItem>
</Tabs>
