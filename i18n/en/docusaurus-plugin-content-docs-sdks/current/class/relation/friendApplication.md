---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# FriendApplication

## Description

:::info

Friend application information.

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

### FriendApplicationInfo

| Field Name      | Field Type | Description                                |
| ------------- | -------- | ----------------------------------- |
| fromUserID    | String   | Applicant ID                       |
| fromNickname  | String   | Applicant nickname                          |
| fromFaceURL   | String   | Applicant face URL                      |
| toUserID      | String   | Target user ID                     |
| toNickname    | String   | Target user nickname                        |
| toFaceURL     | String   | Target user face URL                    |
| handleResult  | int      | Handle result (1 agreed / -1 rejected / 0 pending) |
| reqMsg        | String   | Request message attached when applying        |
| createTime    | int      | Creation time (milliseconds)                            |
| handlerUserID | String   | Handler ID                       |
| handleMsg     | String   | Handle message attached when processing            |
| handleTime    | int      | Handling time (milliseconds)                            |
| ex            | String   | Extension field                      |
| attachedInfo  | String   | Currently unused    |

</TabItem>

<TabItem value="iOS">

### OIMFriendApplication

| Field Name      | Field Type                                        | Description                             |
| ------------- | ----------------------------------------------- | -------------------------------- |
| fromUserID    | NSString                                        | Applicant ID                    |
| fromNickname  | NSString                                        | Applicant nickname                       |
| fromFaceURL   | NSString                                        | Applicant face URL                   |
| toUserID      | NSString                                        | Target user ID                  |
| toNickname    | NSString                                        | Target user nickname                     |
| toFaceURL     | NSInteger                                       | Target user face URL                 |
| handleResult  | [HandleResult](/enum/handleResult.md) | Handle result (agreed / rejected / pending)     |
| reqMsg        | NSString                                        | Request message attached when applying         |
| createTime    | NSInteger                                       | Creation time (milliseconds)                         |
| handlerUserID | NSString                                        | Handler ID                    |
| handleMsg     | NSString                                        | Handle message attached when processing         |
| handleTime    | NSInteger                                       | Handling time (milliseconds)                         |
| ex            | NSString                                        | Extension field                   |
| attachedInfo  | NSString                                        | Currently unused |

</TabItem>

<TabItem value="Android">

### FriendApplicationInfo

| Field Name      | Field Type | Description                         |
| ------------- | -------- | ---------------------------- |
| fromUserID    | String   | Applicant ID                |
| fromNickname  | String   | Applicant nickname                   |
| fromFaceURL   | String   | Applicant face URL               |
| toUserID      | String   | Target user ID              |
| toNickname    | String   | Target user nickname                 |
| toFaceURL     | String   | Target user face URL             |
| handleResult  | [ApplicationHandleResult](/enum/handleResult.md) | Handle result (agreed / rejected / pending)     |
| reqMsg        | String   | Request message attached when applying     |
| createTime    | String   | Creation time (milliseconds)                     |
| handlerUserID | String   | Handler ID                |
| handleMsg     | String   | Handle message attached when processing     |
| handleTime    | String   | Handling time (milliseconds)                     |
| ex            | String   | Extension field               |

</TabItem>

<TabItem value="Web">

### FriendApplicationItem

| Field Name      | Field Type                                                   | Description                             |
| ------------- | ---------------------------------------------------------- | -------------------------------- |
| fromUserID    | string                                                     | Applicant ID                    |
| fromNickname  | string                                                     | Applicant nickname                       |
| fromFaceURL   | string                                                     | Applicant face URL                   |
| toUserID      | string                                                     | Target user ID                  |
| toNickname    | string                                                     | Target user nickname                     |
| toFaceURL     | string                                                     | Target user face URL                 |
| handleResult  | [ApplicationHandleResult](/enum/handleResult.md) | Handle result (agreed / rejected / pending)     |
| reqMsg        | string                                                     | Request message attached when applying         |
| createTime    | number                                                     | Creation time (milliseconds)                         |
| handlerUserID | string                                                     | Handler ID                    |
| handleMsg     | string                                                     | Handle message attached when processing         |
| handleTime    | number                                                     | Handling time (milliseconds)                         |
| ex            | string                                                     | Extension field                   |
| attachedInfo  | string                                                     | Currently unused |

</TabItem>

<TabItem value="uni-app">

### FriendApplicationItem

| Field Name      | Field Type                                                   | Description                             |
| ------------- | ---------------------------------------------------------- | -------------------------------- |
| fromUserID    | string                                                     | Applicant ID                    |
| fromNickname  | string                                                     | Applicant nickname                       |
| fromFaceURL   | string                                                     | Applicant face URL                   |
| toUserID      | string                                                     | Target user ID                  |
| toNickname    | string                                                     | Target user nickname                     |
| toFaceURL     | string                                                     | Target user face URL                 |
| handleResult  | [ApplicationHandleResult](/enum/handleResult.md) | Handle result (agreed / rejected / pending)     |
| reqMsg        | string                                                     | Request message attached when applying         |
| createTime    | number                                                     | Creation time (milliseconds)                         |
| handlerUserID | string                                                     | Handler ID                    |
| handleMsg     | string                                                     | Handle message attached when processing         |
| handleTime    | number                                                     | Handling time (milliseconds)                         |
| ex            | string                                                     | Extension field                   |
| attachedInfo  | string                                                     | Currently unused |

</TabItem>


<TabItem value="React-Native">

### FriendApplicationItem

| Field Name      | Field Type                                                   | Description                             |
| ------------- | ---------------------------------------------------------- | -------------------------------- |
| fromUserID    | string                                                     | Applicant ID                    |
| fromNickname  | string                                                     | Applicant nickname                       |
| fromFaceURL   | string                                                     | Applicant face URL                   |
| toUserID      | string                                                     | Target user ID                  |
| toNickname    | string                                                     | Target user nickname                     |
| toFaceURL     | string                                                     | Target user face URL                 |
| handleResult  | [ApplicationHandleResult](/enum/handleResult.md) | Handle result (agreed / rejected / pending)     |
| reqMsg        | string                                                     | Request message attached when applying         |
| createTime    | number                                                     | Creation time (milliseconds)                         |
| handlerUserID | string                                                     | Handler ID                    |
| handleMsg     | string                                                     | Handle message attached when processing         |
| handleTime    | number                                                     | Handling time (milliseconds)                         |
| ex            | string                                                     | Extension field                   |
| attachedInfo  | string                                                     | Currently unused |

</TabItem>

<TabItem value="Unity">

### FriendApplicationInfo

| Field Name      | Field Type | Description                                |
| ------------- | -------- | ----------------------------------- |
| FromUserID    | string   | Applicant ID                       |
| FromNickname  | string   | Applicant nickname                          |
| FromFaceURL   | string   | Applicant face URL                      |
| ToUserID      | string   | Target user ID                     |
| ToNickname    | string   | Target user nickname                        |
| ToFaceURL     | string   | Target user face URL                    |
| HandleResult  | int      | Handle result (1 agreed / -1 rejected / 0 pending) |
| ReqMsg        | string   | Request message attached when applying            |
| CreateTime    | int      | Creation time (milliseconds)                            |
| HandlerUserID | string   | Handler ID                       |
| HandleMsg     | string   | Handle message attached when processing            |
| HandleTime    | int      | Handling time (milliseconds)                            |
| Ex            | string   | Extension field                      |
| AttachedInfo  | string   | Currently unused    |

</TabItem>

</Tabs>
