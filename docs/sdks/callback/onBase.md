---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onBase

## 功能介绍

:::info

sdk 会回调此接口，成功会调用 onSuccess 方法并返回特定的数据，失败则调用 onError 返回错误信息

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Android', value: 'Android', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Android">

### 函数原型

```java showLineNumbers

public interface OnBase<T> {
    /**
     * 失败
     */
    void onError(int code, String error);

    /**
     * 成功
     */
    void onSuccess(T data);
}

```

### 返回结果

| 名称      | 描述                                   |
| --------- | -------------------------------------- |
| onError   | 错误代码与错误信息                     |
| onSuccess | 泛型类型（根据调用函数的签名指定类型） |

</TabItem>

<TabItem value="Unity">

### 委托

```C# showLineNumbers
public delegate void OnBase<T>(T data, int errCode, string errMsg);
```

### 参数

| 参数名称 | 类型  | 描述     |
| -------- | --------| -------- | 
| data | T |  返回数据 |
| errCode | int | 错误码 |
| errMsg | string |错误信息 |

</TabItem>

</Tabs>
