---
sidebar_position: 11
title: Error Codes
---

## 🚫 Global Error Codes

> ⚠️ **Note**: Error codes are divided into three categories:
>
> - 📱 **Client Error Codes**: Range `10000~20000`
> - 🖥️ **Server Error Codes**: Range `0~9999`
> - 🌐 **Business Server Custom Webhook Error Codes**: Range `20001-29999`

## 🚫 Server Error Codes

> 🚨 **Note**: The following table contains server error codes and their explanations.

| **Error Code** | **Error Explanation**                                                   |
| -------------- | ----------------------------------------------------------------------- |
| 0              | ✅ Normal                                                               |
| 500            | 🚨 Server internal error, usually an internal network error, need to check if the service is normal |
| 1001           | ❌ Parameter error, need to check if the body and header parameters are correct |
| 1002           | 🚫 Insufficient permission, usually the token carried in the header parameter is incorrect or permission is exceeded |
| 1003           | 💽 Database primary key duplicate                                       |
| 1004           | 🚫 Database record not found                                            |
| 1101           | 🚫 User ID does not exist                                               |
| 1102           | 🚫 User has already registered                                          |
| 1201           | 🚫 Group does not exist                                                 |
| 1202           | 🚫 Group already exists                                                 |
| 1203           | 🚫 User is not in the group                                             |
| 1204           | 🚫 Group has been dismissed                                             |
| 1205           | 🚫 Unsupported group type                                               |
| 1206           | 🚫 Group application has been processed, no need to process repeatedly  |
| 1301           | 🚫 Cannot add yourself as a friend                                      |
| 1302           | 🚫 Has been blocked by the other party                                  |
| 1303           | 🚫 The other party is not your friend                                   |
| 1304           | 🚫 Already a friend relationship, no need to apply repeatedly           |
| 1401           | 🚫 Message read function is disabled                                    |
| 1402           | 🚫 Has been muted, cannot speak in the group                            |
| 1403           | 🚫 Group has been muted, cannot speak                                   |
| 1404           | 🚫 The message has been revoked                                         |
| 1405           | 🚫 Authorization expired                                                |
| 1501           | 🚫 Token has expired                                                    |
| 1502           | 🚫 Invalid token                                                        |
| 1503           | 🚫 Token format error                                                   |
| 1504           | 🚫 Token is not yet effective                                           |
| 1505           | 🚫 Unknown token error                                                  |
| 1506           | 🚫 Kicked out token, invalid                                            |
| 1507           | 🚫 Token does not exist                                                 |
| 1601           | 🚫 Number of connections exceeds the maximum limit of the gateway       |
| 1602           | 🚫 Connection handshake parameter error                                 |
| 1701           | 🚫 File upload expired                                                  |
