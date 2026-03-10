---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# uploadFile

## Description

:::info

Upload a file via the SDK.

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
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future uploadFile({
    required String id,
    required String filePath,
    required String fileName,
    String? contentType,
    String? cause,
    String? operationID,
  });

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                 |
| -------- | -------- | -------- | -------------------- |
| filePath | String   | Yes      | Absolute path of the file |
| id       | String   | Yes      | Unique ID for the upload        |
| fileName     | String   | Yes      | File name             |
| cause    | NSString | No       | File category             |
| contentType     | NSString | No       | mimeType of the file            |

### Return Result

| Name | Type   | Description                 |
| ---- | ------ | -------------------- |
| ~    | String | Returns `{"url":"xxxx"}` |

### Code Example

```dart showLineNumbers
final result = await OpenIM.iMManager.uploadFile(
        id: const Uuid().v4(),
        filePath: path,
        fileName: path,
      );
      if (result is String) {
            final url = jsonDecode(result)['url'];
            Logger.print('url:$url');
       }
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)uploadFile:(NSString *)fullPath
           name:(NSString * _Nullable)name
          cause:(NSString * _Nullable)cause
     onProgress:(OIMUploadProgressCallback)onProgress
   onCompletion:(OIMUploadCompletionCallback)onCompletion
      onSuccess:(OIMSuccessCallback)onSuccess
      onFailure:(OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                 |
| -------- | -------- | -------- | -------------------- |
| fullPath | NSString | Yes      | Absolute path of the file |
| cause    | NSString | No       | File category             |
| name     | NSString | No       | File name             |

### Return Result

| Name         | Type                                                   | Description     |
| ------------ | ------------------------------------------------------ | -------- |
| onProgress   | NSInteger                                              | Upload progress |
| onCompletion | OIMUploadCompletionCallback                            | Upload completed |
| onSuccess    | OIMSuccessCallback | Success return |
| onFailure    | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager uploadFile:@""
                          name:nil
                         cause:nil
                    onProgress:^(NSInteger saveBytes, NSInteger currentBytes, NSInteger totalBytes) {

} onCompletion:^(NSInteger totalBytes, NSString * _Nonnull url, NSInteger putType) {

} onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public void uploadFile(OnBase<String> base, OnPutFileListener listener,
                           PutArgs putArgs)
```

### Input Parameters

The PutArgs entity must pass the following two parameters:

| Parameter Name | Parameter Type | Required | Description                 |
| -------- | -------- | -------- | -------------------- |
| fullPath | String   | Yes      | Absolute path of the file |
| putID    | String   | No       | Unique ID for the upload            |


### Code Example

```dart showLineNumbers
     OpenIMClient.getInstance().uploadFile(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        }, new OnPutFileListener() {
            @Override
            public void hashComplete(String hash, long total) {

            }

            @Override
            public void hashProgress(long current, long total) {

            }

            @Override
            public void open(long size) {

            }

            @Override
            public void putComplete(long total, long putType) {

            }

            @Override
            public void putProgress(long save, long current, long total) {

            }

            @Override
            public void putStart(long current, long total) {

            }
        },putArgs);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.uploadFile({
  name: string;
  contentType: string;
  uuid: string;
  file?: File;
  filepath?: string; // Only effective when called using ffi in electron
  cause?: string
},operationID?: string): Promise<WsResponse<{url:string}>>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description        |
| ----------- | -------- | -------- | ----------- |
| name        | string   | Yes      | File name      |
| contentType | string   | Yes      | File type    |
| uuid        | string   | Yes      | Unique ID of the file |
| file        | string   | No       | File object    |
| filepath    | string   | No       | Absolute path of the file, only effective when called using ffi in electron |
| cause        | string   | No       | File category    |

### Return Result

| Parameter Name  | Parameter Type                                             | Description         |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<{url:string}>\>                   | Remote link of the file |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.uploadFile({
  name: 'fileName.zip',
  contentType: 'zip',
  uuid: 'uuid',
  cause: '',
  file: File, // Pass file object on web
  // filepath: 'path://...' // Only effective when called using ffi in electron, 'file' is not needed then
})
  .then(({ data: { url } }) => {
    // url: Remote link of the file
  })
  .catch(({ errCode, errMsg }) => {
    // Upload failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('uploadFile', operationID: string, {
  name: string;
  contentType: string;
  uuid: string;
  filepath: string;
}): Promise<{url:string}>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| name        | string   | Yes      | File name                                                  |
| contentType | string   | Yes      | File type                                                |
| uuid        | string   | Yes      | Unique ID of the file                                             |
| filepath    | string   | Yes      | Absolute path of the file                                            |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<{url:string}\>                                  | Remote link of the file |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('uploadFile', IMSDK.uuid(), {
  name: 'fileName.zip',
  contentType: 'zip',
  uuid: 'uuid',
  filepath: 'path://...',
})
  .then((data) => {
    // data: Remote link of the file
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.uploadFile({
  name: string;
  contentType: string;
  uuid: string;
  filepath: string;
}, operationID?: string): Promise<{ url: string }>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| name        | string   | Yes      | File name                                                  |
| contentType | string   | Yes      | File type                                                |
| uuid        | string   | Yes      | Unique ID of the file                                             |
| filepath    | string   | Yes      | Absolute path of the file                                            |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<{url:string}\>                                  | Remote link of the file |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.uploadFile({
  name: 'fileName.zip',
  contentType: 'zip',
  uuid: 'uuid',
  filepath: 'path://...',
})
  .then((data) => {
    // data: Remote link of the file
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>
</Tabs>
