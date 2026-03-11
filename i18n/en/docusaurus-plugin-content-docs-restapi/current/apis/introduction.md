---
title: API Description
sidebar_position: 1
---

# IMServer APIs

## 🚀 REST API

IMServer provides **REST APIs**, allowing you to operate the IM system directly from the server with super permissions to enhance business functions. For example:

- 🛠 **Create Groups**
- 📬 **Push Messages**

Usage scenarios: for example, the system automatically sends a welcome message to newly registered users.

### Protocol Description
- **Protocol**: Uses standard HTTP protocol
- **Data Format**: Requests and responses are in JSON format
### Important Notes

> **API Address**:
>
> `{API_ADDRESS}` in the request URL is the API address for IMServer external services, for example `http://{your_server_ip}:10002`.

> **Permission Requirements**:
>
> Calling **REST APIs** requires the identity of an **APP Administrator**, this user has super permissions. IMServer has a built-in APP Administrator, whose `userID` is `imAdmin`.

> **Parameter Limits**:
>
> The maximum length limit for all `array` type parameters in API requests is `1000`.

### API Calling Process

1. **Get APP Administrator Token**:
   
   Get the administrator token through the [`user_token API`](./authenticationManagement/getAdminToken).
   
2. **Call other APIs**:
   
   Add the obtained APP administrator token to the HTTP request Header, and then call other REST APIs.

### Usage Guide

For security reasons, REST APIs can only be used on the server side, clients use the corresponding client SDK for operations.
