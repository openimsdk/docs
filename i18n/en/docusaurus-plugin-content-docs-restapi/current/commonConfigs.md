---
sidebar_position: 12
title: Common Configurations
---

# Common Configurations Description

| Field Name                   | File Location           | Configuration Description                                |
| ---------------------------- | ----------------------- | -------------------------------------------------------- |
| `api.ports`                  | `openim-api.yml`        | Server API port                                          |
| `longConnSvr.ports`          | `openim-msggateway.yml` | Server WebSocket listening port                          |
| `multiLogin.policy`          | `share.yml`             | Client multi-device kick-out and online policy           |
| `secret`                     | `share.yml`             | Server secret key, used to generate administrator token, should be modified and kept safe |
| `tokenPolicy.expire`         | `openim-rpc-auth.yml`   | Token expiration time                                    |
| `friendVerify`               | `openim-rpc-msg.yml`    | Whether sending messages requires a friend relationship  |
| `enableHistoryForNewMembers` | `openim-rpc-group.yml`  | Whether new group members can view historical messages   |
| `remainLogLevel`             | `log.yml`               | Log level                                                |
| `externalAddress`            | `minio.yml`             | Needs to be set when selecting MinIO as object storage, otherwise sending image/video files fails |
| `url`                        | `webhook.yml`           | Webhook access address                                   |
| `enable`                     | `openim-push.yml`       | Offline push configuration, supports FCM, JPush          |
| `object`                     | `openim-rpc-third.yml`  | Object storage configuration, supports miniO, AWS, COS, OSS, Kodo |
