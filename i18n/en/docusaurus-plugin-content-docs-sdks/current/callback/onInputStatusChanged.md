---
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onInputStatusChanged

## Description

:::info

Input status callback.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Return Prototype

```dart showLineNumbers

 ValueChanged< InputStatusChangedData >? onInputStatusChanged;

```

### Return Results

| Name      | Type | Description |
| --------- | ---- | -------- |
| InputStatusChangedData | [InputStatusChangedData](/class/conversation/inputStatusChangedData.md) | Input status changed info |


</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onConversationUserInputStatusChanged:(OIMInputStatusChangedData *)inputStatusChangedData;

```

### Return Results

| Name      | Type | Description |
| --------- | ---- | -------- |
| OIMInputStatusChangedData | [OIMInputStatusChangedData](/class/conversation/inputStatusChangedData.md) | Input status changed info |

</TabItem>

<TabItem value="Android">

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onInputStatusChanged(data: WSEvent<InputStatusChangedData>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| data | [WSEvent](/class/response.md)<[InputStatusChangedData](/class/conversation/inputStatusChangedData.md)> | Input status changed info |

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

IMSDK.on(CbEvents.onInputStatusChanged, ({ data }) => {
  // data 
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onInputStatusChanged(data: InputStatusChangedData): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| data | [InputStatusChangedData](/class/conversation/inputStatusChangedData.md) | Input status changed info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe('onInputStatusChanged', (data) => {
  // data
});
```

</TabItem>

<TabItem value="React-Native">

### Return Prototype

```ts showLineNumbers

onInputStatusChanged(data: InputStatusChangedData): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------ |
| data | [InputStatusChangedData](/class/conversation/inputStatusChangedData.md) | Input status changed info |

### Call Example

```js showLineNumbers
import { OpenIMEmitter } from "open-im-sdk-rn";

OpenIMEmitter.addListener("onInputStatusChanged", (data) => {
  // data
});
```

</TabItem>

<TabItem value="Unity">

</TabItem>

</Tabs>
