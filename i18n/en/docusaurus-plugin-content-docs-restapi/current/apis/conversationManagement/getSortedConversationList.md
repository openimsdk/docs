---
sidebar_position: 2
title: Get Sorted Conversation List
hide_title: true
---

<center>

## Get Sorted Conversation List

</center>

### Brief Description

- Get the sorted conversation list based on whether it is pinned and the chronological order of messages.
### Request Method
- `post`
### Request URL
- `{API_ADDRESS}/conversation/get_sorted_conversation_list`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :----    | :-------    | :--- | --- | ------      |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token | eyJhbxxxx3Xs | Required | string | [Admin token](/apis/authenticationManagement/getAdminToken.md) |

### Request Parameter Example


```json
{
  "userID": "9906953281",
  "conversationIDs": ["si_2699373280_9906953281"],
  "pagination":{
    "pageNumber":1,
    "showNumber":20
    }
}

```
| Field Name             | Optional  | Type     | Description     |
|:----------------|:----|:-------|--------|
| userID          | Required  | string | Current user ID |
| conversationIDs | Optional  | string | Conversation ID list, if filled, returns the specified conversation list, if not filled, returns the default paginated conversation list |
| pagination | Required  | string | Pagination parameter structure |
| pageNumber | Required  | string | Current page number, starting from 1 |
| showNumber | Required  | string | Number of requests on the current page |

### Success Return Example
```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "conversationTotal": 2,
    "unreadTotal": 2,
    "conversationElems": [
      {
        "conversationID": "si_110_114",
        "recvMsgOpt": 0,
        "unreadCount": 1,
        "IsPinned": false,
        "msgInfo": {
          "serverMsgID": "c54203436b727117226cb528fc7b08e8",
          "clientMsgID": "c972d53afb9d6b9744f1edfc4ac1aeef",
          "sessionType": 1,
          "sendID": "114",
          "recvID": "110",
          "senderName": "yourNickname",
          "faceURL": "yourFaceURL",
          "groupID": "",
          "groupName": "",
          "groupFaceURL": "",
          "groupType": 0,
          "groupMemberCount": 0,
          "LatestMsgRecvTime": 1695212630741,
          "msgFrom": 200,
          "contentType": 101,
          "content": "{\"content\":\"hello!!\"}",
          "ex":""
        }
      },
      {
        "conversationID": "si_110_111",
        "recvMsgOpt": 0,
        "unreadCount": 1,
        "IsPinned": false,
        "msgInfo": {
          "serverMsgID": "5c3d8542f9eae1487283a5fe335aab1a",
          "clientMsgID": "e09109bdfeb221cec1827317c313e3d0",
          "sessionType": 1,
          "sendID": "111",
          "recvID": "110",
          "senderName": "yourNickname",
          "faceURL": "yourFaceURL",
          "groupID": "",
          "groupName": "",
          "groupFaceURL": "",
          "groupType": 0,
          "groupMemberCount": 0,
          "LatestMsgRecvTime": 1695212630740,
          "msgFrom": 200,
          "contentType": 101,
          "content": "{\"content\":\"hello!!\"}",
          "ex":""
        }
      }
    ]
  }
}

```
### Parameter Description for Success Return Example


| Field Name               | Type       | Description                                                                               |
|:------------------|:---------|----------------------------------------------------------------------------------|
| errCode           | int      | Error code, 0 means success                                                                        |
| errMsg            | string   | Brief error message, empty                                                                    |
| errDlt            | errDlt   | Detailed error message, empty                                                                    |
| unreadTotal            | string   | Total number of unread messages                                                                    |
| conversationToal            | string   | Total number of conversations                                                                  |
| data              | object   | General data object, see structure below                                                                   |
| conversationElems | 	array	  | None                                                                                |
| conversationID	   | string   | 	Conversation ID                                                                            |
| recvMsgOpt	       | string   | 	Group chat message Do Not Disturb                                                                         |
| unreadCount	      | string   | 	Number of unread messages                                                                           |
| msgInfo	          | object   | 	Message content                                                                            |
| serverMsgID       | 	string	 | Server message ID                                                                          |
| clientMsgID       | 	string	 | Client message ID                                                                          |
| sessionType       | 	string  | 	Conversation type, whether the sent message is a single chat or a group chat, single chat is 1, group chat (normal write diffusion) is 2, large group (read diffusion interface) is 3, notification conversation is 4                           |
| recvID	           | string	  | Receiver ID                                                                            |
| SendID	           | string	  | Sender ID                                                                            |
| faceURL           | 	string  | 	Avatar URL. In a single chat, when the sender is the current user, this field is the friend's avatar URL                                               |
| senderName        | 	string  | 	Sender nickname. In a single chat, when the sender is the current user, this field is the friend's nickname. In a group chat, this field is the corresponding sender nickname                                |
| LatestMsgRecvTime | 	string  | 	Receiving time of the last message                                                                     |
| msgFrom	          | string	  | Message source, 100 comes from user sending, 200 comes from admin sending or system broadcast notification, etc.                                             |
| content           | object   | The specific content of the message, internally a json object, for detailed fields of other messages, please refer to the [Message Type Format Description](/contentDescription.md) document |
| contentType       | int      | [Message Type](/contentDescription.md)                                     |
| groupID	          | string	  | Group chat ID                                                                             |
| groupName	        | string	  | Group chat name                                                                             |
| groupFaceURL      | 	string  | 	Group chat avatar URL                                                                         |
| groupMemberCount  | 	string  | 	Number of people in group chat                                                                            |
| IsPinned	         | string   | 	Whether the conversation is pinned                                                                          |
|ex | string | Extension field|


### Failure Return Example
```json
{
    "errCode": 1004,
    "errMsg": "RecordNotFoundError",
    "errDlt": ": 1004 RecordNotFoundError"
}
```
### Parameter Description for Failure Return Example


| Parameter Name | Type | Description |
| :----    | :-------    | :--- |
| errCode | int | Error code, see global error code document for details |
| errMsg | string | Brief error message |
| errDlt | errDlt | Detailed error message |
