---
title: Error Codes
sidebar_position: 11
---



## 🚫 Global Error Codes

> ⚠️ **Note**: Error codes are divided into two categories:
>
> - **Client Error Codes**: Range `10000~20000`
> - **Server Error Codes**: Range `0~9999`
> - **Business Server Custom Webhook Error Codes**: Range `20001-29999`

## 🖥 Client Error Codes

| **Error Code** | **Description**                                                         |
|----------|-------------------------------------------------------------------|
| 10000      | 🌐 Network request error                                                    |
| 10001      | ⏱ Network timeout error                                                 |
| 10002      | ❌ Parameter error                                                         |
| 10003      | ⌛ Context timeout error, usually means the user has already exited                               |
| 10004      | 🔄 Resource not fully loaded, usually means not initialized or login has not returned successfully         |
| 10005      | ❓ Unknown error, check `errmsg` for details                              |
| 10006      | 🚨 SDK internal error, check `errmsg` for details                         |
| 10100      | 🚫 User does not exist or is not registered                                              |
| 10101      | 🚪 User has logged out                                                  |
| 10102      | 🔄 Duplicate login, use `getLoginStatus` to check login status and avoid duplicate logins |
| 10200      | 🚫 File to be uploaded does not exist                                             |
| 10201      | 🚫 Message decompression failed                                                    |
| 10202      | 🚫 Message decoding failed                                                    |
| 10203      | 🚫 Unsupported long-connection binary protocol                                       |
| 10204      | 🚫 Duplicate message send                                                    |
| 10205      | 🚫 Unsupported message content type                                              |
| 10301      | 🚫 Unsupported conversation operation                                                |
| 10400      | 🚫 Group ID does not exist                                                    |
| 10401      | 🚫 Invalid group type                                                    |
