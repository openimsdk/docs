---
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onKickedOffline

## Description

:::info

Because the app administrator forces the user offline, or the user is kicked offline due to a login policy.

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
 Function()? onKickedOffline;
```

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers
- (void)onKickedOffline;
```

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
public void onKickedOffline()
```
</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers
onKickedOffline(data: WSEvent): void;
```

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

IMSDK.on(CbEvents.OnKickedOffline, () => {});
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---- |
| data | [WSEvent](/class/response.md) | - |

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers
onKickedOffline(data: WSEvent): void;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---- |
| data | [WSEvent](/class/response.md) | - |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';
IMSDK.subscribe(IMSDK.IMEvents.OnKickedOffline, () => {});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnKickedOffline();
```

</TabItem>
</Tabs>
