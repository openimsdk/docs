"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[80372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={},o="Callback Before Sending a Single Chat Message",p={unversionedId:"webhooks/msg/sendSingleMsgBefore",id:"webhooks/msg/sendSingleMsgBefore",title:"Callback Before Sending a Single Chat Message",description:"Function Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/msg/sendSingleMsgBefore.mdx",sourceDirName:"webhooks/msg",slug:"/webhooks/msg/sendSingleMsgBefore",permalink:"/restapi/webhooks/msg/sendSingleMsgBefore",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/msg/sendSingleMsgBefore.mdx",tags:[],version:"current",lastUpdatedAt:1709733410,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callback After Sending a Single Chat Message",permalink:"/restapi/webhooks/msg/sendSingleMsgAfter"},next:{title:"Callback After Single Chat Message Read Report",permalink:"/restapi/webhooks/msg/singleMsgRead"}},d={},m=[{value:"Function Description",id:"function-description",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Scenarios That May Trigger This Callback",id:"scenarios-that-may-trigger-this-callback",level:2},{value:"Timing of the Callback",id:"timing-of-the-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Request URL Example",id:"request-url-example",level:3},{value:"Request Parameter Description",id:"request-parameter-description",level:3},{value:"Header",id:"header",level:3},{value:"Request Packet Example",id:"request-packet-example",level:3},{value:"Request Packet Field Explanation",id:"request-packet-field-explanation",level:3},{value:"Response Packet Example",id:"response-packet-example",level:2},{value:"Allow Sending",id:"allow-sending",level:3},{value:"Response Packet Field Explanation",id:"response-packet-field-explanation",level:2}],u={toc:m},c="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"callback-before-sending-a-single-chat-message"},"Callback Before Sending a Single Chat Message"),(0,a.kt)("h2",{id:"function-description"},"Function Description"),(0,a.kt)("p",null,"The App business server can use this callback to perform real-time operations on users' single chat messages, such as real-time recording of messages and intercepting users' inappropriate message requests."),(0,a.kt)("h2",{id:"precautions"},"Precautions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To enable the callback, it is necessary to configure the callback URL and activate the corresponding switch for this callback protocol. Configuration methods can be found in the ",(0,a.kt)("a",{parentName:"li",href:"../introduction"},"Callback Explanation")," document."),(0,a.kt)("li",{parentName:"ul"},"The direction of the callback is an HTTP/HTTPS POST request initiated by OpenIMServer to the App backend."),(0,a.kt)("li",{parentName:"ul"},"After receiving the callback request, the App business server must verify whether the command parameter in the request URL is its SDKNAME parameter."),(0,a.kt)("li",{parentName:"ul"},"The APP business server must respond to this request within the timeout period.")),(0,a.kt)("h2",{id:"scenarios-that-may-trigger-this-callback"},"Scenarios That May Trigger This Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App users send single chat messages through the client."),(0,a.kt)("li",{parentName:"ul"},"App administrators send single chat messages through the REST API.")),(0,a.kt)("h2",{id:"timing-of-the-callback"},"Timing of the Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After OpenIMServer receives a single chat message from a user and before delivering it to the target user.")),(0,a.kt)("h2",{id:"interface-description"},"Interface Description"),(0,a.kt)("h3",{id:"request-url-example"},"Request URL Example"),(0,a.kt)("p",null,"In the following example, the callback URL configured by the App is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://callbackurl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://callbackurl?command=$CallbackCommand&contenttype=json\n")),(0,a.kt)("h3",{id:"request-parameter-description"},"Request Parameter Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"https"),(0,a.kt)("td",{parentName:"tr",align:null},"Request protocol is HTTPS, method is POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"https://callbackurl"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CallbackCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"Fixed value: callbackBeforeSendSingleMsgCommand")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,a.kt)("td",{parentName:"tr",align:null},"Fixed value: JSON")))),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Header Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:null},"Required"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"operationID for global link tracing")))),(0,a.kt)("h3",{id:"request-packet-example"},"Request Packet Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sendID": "user123",\n  "callbackCommand": "callbackBeforeSendSingleMsgCommand",\n  "serverMsgID": "msg001",\n  "clientMsgID": "clientmsg001",\n  "senderPlatformID": 1,\n  "senderNickname": "User123",\n  "sessionType": 1,\n  "msgFrom": 1,\n  "contentType": 1,\n  "status": 1,\n  "createTime": 1673048592000,\n  "content": "Hello, this is a test message",\n  "seq": 1001,\n  "atUserList": ["user456", "user789"],\n  "faceURL": "http://example.com/path/to/user/image.png",\n  "ex": "Extra data",\n  "recvID": "user456"\n}\n')),(0,a.kt)("h3",{id:"request-packet-field-explanation"},"Request Packet Field Explanation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's user ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback command, here for pre-single chat message callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"serverMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Server-assigned message ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Client-assigned message ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderPlatformID"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's platform ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderNickname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's nickname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sessionType"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Session type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msgFrom"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Message origin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contentType"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of message content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Message status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createTime"),(0,a.kt)("td",{parentName:"tr",align:null},"int64"),(0,a.kt)("td",{parentName:"tr",align:null},"Message creation timestamp (milliseconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Message content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"seq"),(0,a.kt)("td",{parentName:"tr",align:null},"uint32"),(0,a.kt)("td",{parentName:"tr",align:null},"Message sequence number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"List of group member IDs, ignored in single chat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's avatar URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ex"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Additional data field")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"recvID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Receiver's user ID")))),(0,a.kt)("h2",{id:"response-packet-example"},"Response Packet Example"),(0,a.kt)("h3",{id:"allow-sending"},"Allow Sending"),(0,a.kt)("p",null,"Allows the user to send the message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "Success",\n    "errDlt": "",\n    "nextCode": 0\n}\n')),(0,a.kt)("h2",{id:"response-packet-field-explanation"},"Response Packet Field Explanation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates if the business system's callback was executed correctly. ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," means the operation was successful.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errCode"),(0,a.kt)("td",{parentName:"tr",align:null},"5001"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error code, ranging between 5000-9999. Set when actionCode is not 0; set when nextCode is 1.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:null},'"Message"'),(0,a.kt)("td",{parentName:"tr",align:null},"Simple error message corresponding to the custom error code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:null},'"Detailed information"'),(0,a.kt)("td",{parentName:"tr",align:null},"Detailed error information corresponding to the custom error code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Next step instruction, ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," means to refuse to continue executing, set when actionCode is ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),".")))))}g.isMDXComponent=!0}}]);