---
sidebar_position: 1
title: Callback Description
hide_title: true
---

# 📞 Callback Description

📢 **OpenIMSDK** provides powerful callback features. Before or after a specific event occurs, **IMServer** proactively notifies the business server via HTTP/HTTPS requested methods. In this way, the business server can intervene in the subsequent processes of the event or perform data synchronization based on these callbacks.

## 📑 Callback Classification

Based on processing timing, callbacks are divided into two main categories:

- 🚫 **Callbacks Before Sending Event**: This type of callback (before type) is designed to allow the business server to intervene in event processing, for example, filtering sensitive words in messages. **IMServer** will determine the subsequent process based on the callback return value.

- 📤 **Notifications After Sending Event**: This type of callback (after type) is primarily used to notify the business server that an event is completed. For example, after a user joins a group, the business server can perform data synchronization or other business operations, such as sending a welcome message to the group. At this point, **IMServer** will ignore the callback's return value and error code.

## ⚙️ Configuration Description

```yaml
url: http://127.0.0.1:10006/callbackExample
beforeSendSingleMsg:
  enable: false
  timeout: 5
  failedContinue: true
  deniedTypes: []
beforeUpdateUserInfoEx:
  enable: false
  timeout: 5
  failedContinue: true
```

- url: Business server `callback` address, HTTP/HTTPS supported
- enable: Whether to enable this callback, `true` is enabled
- timeout: Response timeout (seconds)
- failedContinue: Whether to continue the process after a timeout or HTTP/HTTPS request failure, `true` is continue, only valid for `before` type callbacks.
- deniedTypes: Only contentTypes not in deniedTypes will trigger the callback. If not set, all message types will trigger the callback.

## 🔄 Callback Protocol

**IMServer** utilizes a third-party callback mechanism based on the **HTTP/HTTPS** protocol. When initiating a callback request, **IMServer** uses the **POST** request method to notify the business server. The specific content of these requests will be directly included in the request package body.

### Request URL Example

```plaintext
{WEBHOOK_ADDRESS}/callbackCommand?contenttype=json
```

### Request Parameter Description

| Parameter | Description |
| ----------------- | ------------------------------------------------------------ |
| {WEBHOOK_ADDRESS} | The url field in webhooks.yml, domain name or host name, for example `http://127.0.0.1:10006/callbackExample` |
| callbackCommand | Callback command, can be specifically viewed in each callback method description |
| contenttype | Request input parameter, is `json` type |

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :----- | :--- | ------ | -------------------------------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
