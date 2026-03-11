---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onBase

## Description

:::info

The SDK will call back this interface. On success, it calls the `onSuccess` method and returns specific data; on failure, it calls `onError` and returns error info.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Android', value: 'Android', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public interface OnBase<T> {
    /**
     * Fail
     */
    void onError(int code, String error);

    /**
     * Success
     */
    void onSuccess(T data);
}

```

### Return Results

| Name      | Description                                   |
| --------- | -------------------------------------- |
| onError   | Error code and error info                     |
| onSuccess | Generic type (specified according to the calling function's signature) |

</TabItem>

<TabItem value="Unity">

### Delegate

```C# showLineNumbers
public delegate void OnBase<T>(T data, int errCode, string errMsg);
```

### Parameters

| Parameter Name | Type  | Description     |
| -------- | --------| -------- |
| data | T |  Returned data |
| errCode | int | Error code |
| errMsg | string | Error info |

</TabItem>

</Tabs>
