"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[98286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=o(a),g=r,c=m["".concat(p,".").concat(g)]||m[g]||f[g]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},91954:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={sidebar_position:2,title:"Batch Send Messages",hide_title:!0},p=void 0,o={unversionedId:"apis/messageManagement/batchSendMessage",id:"apis/messageManagement/batchSendMessage",title:"Batch Send Messages",description:"Batch Send Messages",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/apis/messageManagement/batchSendMessage.mdx",sourceDirName:"apis/messageManagement",slug:"/apis/messageManagement/batchSendMessage",permalink:"/restapi/apis/messageManagement/batchSendMessage",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/messageManagement/batchSendMessage.mdx",tags:[],version:"current",lastUpdatedAt:1730887211,formattedLastUpdatedAt:"Nov 6, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Batch Send Messages",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Send Message",permalink:"/restapi/apis/messageManagement/sendMessage"},next:{title:"Delete All User Messages",permalink:"/restapi/apis/messageManagement/deleteUserAllMessage"}},d={},m=[{value:"Batch Send Messages",id:"batch-send-messages",level:2},{value:"Brief Description",id:"brief-description",level:3},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Header",id:"header",level:3},{value:"Request Parameters Example",id:"request-parameters-example",level:3},{value:"Success Response Example",id:"success-response-example",level:3},{value:"Success Response Parameters Description",id:"success-response-parameters-description",level:3},{value:"Failure Response Example",id:"failure-response-example",level:3},{value:"Failure Response Parameters Description",id:"failure-response-parameters-description",level:3}],f={toc:m},g="wrapper";function c(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},f,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("center",null,(0,n.kt)("h2",{id:"batch-send-messages"},"Batch Send Messages")),(0,n.kt)("h3",{id:"brief-description"},"Brief Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sends messages in batch to multiple recipients.")),(0,n.kt)("h3",{id:"request-method"},"Request Method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"post"))),(0,n.kt)("h3",{id:"request-url"},"Request URL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/msg/batch_send_msg"))),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Used for global trace tracking, suggested to use a unique timestamp per request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/restapi/apis/authenticationManagement/getAdminToken"},"Admin token"))))),(0,n.kt)("h3",{id:"request-parameters-example"},"Request Parameters Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "recvIDs": [\n        "9948077346",\n        "9371245179"\n    ],\n    "sendID": "3473643418",\n    "senderNickname": "Alice",\n    "senderFaceURL": "http://nvpydodr.ae/ylyqu",\n    "senderPlatformID": 2,\n    "content": {\n        "content": "hello!!"\n    },\n    "contentType": 101,\n    "sessionType": 1,\n    "isOnlineOnly": false,\n    "notOfflinePush": false,\n    "sendTime": 1340619319058,\n    "offlinePushInfo": {\n        "title": "1213",\n        "desc": "in eiusmod magna",\n        "ex": "ex",\n        "iOSPushSound": "in Duis ut sunt nostrud",\n        "iOSBadgeCount": true\n    },\n    "ex": "ex",\n    "isSendAll": true\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"recvIDs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of recipient IDs. For session types 1 or 4, required for user ID; leave blank for group chat.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sender ID (can be admin or user ID).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderNickname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sender's nickname.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderFaceURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sender's avatar URL.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderPlatformID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sender's ",(0,n.kt)("a",{parentName:"td",href:"/restapi/commonFields/#%E9%80%9A%E7%94%A8%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"platform type"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"content"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Message content, a JSON object. See ",(0,n.kt)("a",{parentName:"td",href:"/restapi/contentDescription/#content-%E5%85%B7%E4%BD%93%E5%86%85%E5%AE%B9-"},"message format documentation"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"contentType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/restapi/contentDescription"},"Message type"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessionType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/restapi/commonFields/#%E9%80%9A%E7%94%A8%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"Session type"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"isOnlineOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If true, message is only sent when the receiver is online and won't be stored.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"notOfflinePush"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If true, message will not trigger offline push notifications when the user is offline.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timestamp of message sending in milliseconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Offline push content details; uses default server title if not provided. Not used if ",(0,n.kt)("inlineCode",{parentName:"td"},"notOfflinePush")," is true.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.title"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Push notification title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.desc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Push notification description.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.ex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extension field for push notification.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.iOSPushSound"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iOS push notification sound.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.iOSBadgeCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether iOS push notification counts in app badge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extension field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"isSendAll"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether to send to all users.")))),(0,n.kt)("h3",{id:"success-response-example"},"Success Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "data": {\n        "results": [\n            {\n                "serverMsgID": "b30cb040685c1ff3e92b32d25826a06e",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "imAdmin"\n            },\n            {\n                "serverMsgID": "5f0987ef1bbdcd565c85befb1a084035",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "3473643418"\n            },\n            {\n                "serverMsgID": "9ba70b63487559db1857ce324ae3bcf0",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "9948077346"\n            },\n            {\n                "serverMsgID": "56f483592c3ee9fff1465d9b23277408",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "9371245179"\n            },\n            {\n                "serverMsgID": "ee8b6bbd3190753bc0713c1085ccb479",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "6412123282"\n            }\n        ],\n        "failedUserIDs": null\n    }\n}\n')),(0,n.kt)("h3",{id:"success-response-parameters-description"},"Success Response Parameters Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code; 0 indicates success.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message, empty if none.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error information, empty if none.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"General data object, structure detailed below.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data.results"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of result objects.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"serverMsgID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server message ID, a reserved field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clientMsgID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client message ID, unique per message.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timestamp of message sending.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"recvID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Recipient ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data.failedUserIDs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of user IDs where message sending failed.")))),(0,n.kt)("h3",{id:"failure-response-example"},"Failure Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,n.kt)("h3",{id:"failure-response-parameters-description"},"Failure Response Parameters Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code, refer to global error code documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error information")))))}c.isMDXComponent=!0}}]);