"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[97237],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88798:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>m});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={},p="Callback for Modifying Message Content",s={unversionedId:"webhooks/msg/msgModify",id:"webhooks/msg/msgModify",title:"Callback for Modifying Message Content",description:"Function Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/msg/msgModify.mdx",sourceDirName:"webhooks/msg",slug:"/webhooks/msg/msgModify",permalink:"/restapi/webhooks/msg/msgModify",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/msg/msgModify.mdx",tags:[],version:"current",lastUpdatedAt:1709733410,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callback After Transferring Group Ownership",permalink:"/restapi/webhooks/group/transferGroupOwnerAfter"},next:{title:"Callback After Sending a Single Chat Message",permalink:"/restapi/webhooks/msg/sendSingleMsgAfter"}},d={},m=[{value:"Function Description",id:"function-description",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Scenarios That May Trigger This Callback",id:"scenarios-that-may-trigger-this-callback",level:2},{value:"Timing of the Callback",id:"timing-of-the-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Request URL Example",id:"request-url-example",level:3},{value:"Request Parameter Description",id:"request-parameter-description",level:3},{value:"Header",id:"header",level:3},{value:"Request Packet Example",id:"request-packet-example",level:3},{value:"Request Packet Field Explanation",id:"request-packet-field-explanation",level:3},{value:"Response Packet Example",id:"response-packet-example",level:2},{value:"Allow Modification",id:"allow-modification",level:3},{value:"Response Packet Field Explanation",id:"response-packet-field-explanation",level:2}],u={toc:m},c="wrapper";function g(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(c,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},u,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"callback-for-modifying-message-content"},"Callback for Modifying Message Content"),(0,a.kt)("h2",{id:"function-description"},"Function Description"),(0,a.kt)("p",null,"The App business server can use this callback to modify message content, such as replacing non-compliant content or sensitive words."),(0,a.kt)("h2",{id:"precautions"},"Precautions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To enable the callback, it is necessary to configure the callback URL and activate the corresponding switch for this callback protocol. Configuration methods can be found in the ",(0,a.kt)("a",{parentName:"li",href:"../introduction"},"Callback Explanation")," document."),(0,a.kt)("li",{parentName:"ul"},"The direction of the callback is an HTTP/HTTPS POST request initiated by OpenIMServer to the App backend."),(0,a.kt)("li",{parentName:"ul"},"After receiving the callback request, the App business server must verify whether the command parameter in the request URL is its SDKNAME parameter."),(0,a.kt)("li",{parentName:"ul"},"The APP business server must respond to this request within the timeout period.")),(0,a.kt)("h2",{id:"scenarios-that-may-trigger-this-callback"},"Scenarios That May Trigger This Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App users send messages through the client."),(0,a.kt)("li",{parentName:"ul"},"App users send messages through the REST API."),(0,a.kt)("li",{parentName:"ul"},"App users send group messages through the client."),(0,a.kt)("li",{parentName:"ul"},"App administrators send group messages through the REST API.")),(0,a.kt)("h2",{id:"timing-of-the-callback"},"Timing of the Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Before OpenIMServer delivers the group message to group members.")),(0,a.kt)("h2",{id:"interface-description"},"Interface Description"),(0,a.kt)("h3",{id:"request-url-example"},"Request URL Example"),(0,a.kt)("p",null,"In the following example, the callback URL configured by the App is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://callbackurl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://callbackurl?command=$CallbackCommand&contenttype=json\n")),(0,a.kt)("h3",{id:"request-parameter-description"},"Request Parameter Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"https"),(0,a.kt)("td",{parentName:"tr",align:null},"Request protocol is HTTPS, method is POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"https://callbackurl"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CallbackCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"Fixed value: callbackMsgModifyCommandCommand")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,a.kt)("td",{parentName:"tr",align:null},"Fixed value: JSON")))),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Header Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:null},"Required"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"operationID for global link tracing")))),(0,a.kt)("h3",{id:"request-packet-example"},"Request Packet Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sendID": "sender123",\n  "callbackCommand": "callbackMsgModifyCommandCommand",\n  "serverMsgID": "serverMsg123",\n  "clientMsgID": "clientMsg123",\n  "senderPlatformID": 1,\n  "senderNickname": "Sender",\n  "sessionType": 1,\n  "msgFrom": 1,\n  "contentType": 1,\n  "status": 1,\n  "createTime": 1673048592000,\n  "content": "Hello, World!",\n  "seq": 123,\n  "atUserList": ["user123", "user456"],\n  "faceURL": "http://example.com/sender_face.png",\n  "ex": "Extra data"\n}\n')),(0,a.kt)("h3",{id:"request-packet-field-explanation"},"Request Packet Field Explanation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier of the sender")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback command, here for message modification callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"serverMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Server-generated message ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Client-generated message ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderPlatformID"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's platform ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderNickname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's nickname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sessionType"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Session type, indicating one-on-one or group chat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msgFrom"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Message origin, indicating sent or received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contentType"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Content type of the message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Status of the message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createTime"),(0,a.kt)("td",{parentName:"tr",align:null},"int64"),(0,a.kt)("td",{parentName:"tr",align:null},"Message creation timestamp (milliseconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Content of the message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"seq"),(0,a.kt)("td",{parentName:"tr",align:null},"uint32"),(0,a.kt)("td",{parentName:"tr",align:null},"Message sequence number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,a.kt)("td",{parentName:"tr",align:null},"[]string"),(0,a.kt)("td",{parentName:"tr",align:null},"List of group member IDs mentioned")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's avatar URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ex"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Additional data field")))),(0,a.kt)("h2",{id:"response-packet-example"},"Response Packet Example"),(0,a.kt)("h3",{id:"allow-modification"},"Allow Modification"),(0,a.kt)("p",null,"Allows modification of the message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "Success",\n    "errDlt": "",\n    "nextCode": 0,\n    "content": "Modified content",\n    "recvID": "receiver123",\n    "groupID": "group123",\n    "clientMsgID": "clientMsg456",\n    "serverMsgID": "serverMsg456",\n    "senderPlatformID": 1,\n    "senderNickname": "ModifiedSender",\n    "senderFaceURL": "http://example.com/modified_sender_face.png",\n    "sessionType": 1,\n    "msgFrom": 1,\n    "contentType": 1,\n    "status": 1,\n    "options": {\n        "option1": true,\n        "option2": false\n    },\n    "offlinePushInfo": {\n        "title": "Modified Notification",\n        "content": "Modified Content",\n        "pushFlag": 1,\n        "sound": "default",\n        "badge": 1\n    },\n    "atUserIDList": ["user789", "user101112"],\n    "msgDataList": [65, 66, 67],\n    "attachedInfo": "Modified Info",\n    "ex": "Modified Extra data"\n}\n')),(0,a.kt)("h2",{id:"response-packet-field-explanation"},"Response Packet Field Explanation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates if the business system's callback was executed correctly. ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," means the operation was successful.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errCode"),(0,a.kt)("td",{parentName:"tr",align:null},"5001"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error code, ranging between 5000-9999. Set when actionCode is not 0; set when nextCode is 1.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,a.kt)("td",{parentName:"tr",align:null},"Simple error message corresponding to the custom error code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,a.kt)("td",{parentName:"tr",align:null},"Detailed error information corresponding to the custom error code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Next step instruction, ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," means to refuse to continue executing, set when actionCode is ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Modified message content.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"recvID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Receiver's user ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier of the group.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Client-generated message ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"serverMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Server-generated message ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderPlatformID"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's platform ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderNickname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Modified sender's nickname.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderFaceURL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Modified sender's avatar URL.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sessionType"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Session type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msgFrom"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Message origin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contentType"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Content type of the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Status of the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"map","[string]","bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Modified message options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"OfflinePushInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"Modified offline push information.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"atUserIDList"),(0,a.kt)("td",{parentName:"tr",align:null},"[]string"),(0,a.kt)("td",{parentName:"tr",align:null},"List of mentioned group member IDs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msgDataList"),(0,a.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,a.kt)("td",{parentName:"tr",align:null},"Modified message data list.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Modified additional information.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ex"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Modified additional data field.")))))}g.isMDXComponent=!0}}]);