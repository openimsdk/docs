"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[34188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={},s="Callback Before User Registration Request",p={unversionedId:"webhooks/user/userRegisterBefore",id:"webhooks/user/userRegisterBefore",title:"Callback Before User Registration Request",description:"Function Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/user/userRegisterBefore.mdx",sourceDirName:"webhooks/user",slug:"/webhooks/user/userRegisterBefore",permalink:"/restapi/webhooks/user/userRegisterBefore",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/user/userRegisterBefore.mdx",tags:[],version:"current",lastUpdatedAt:1741601802,formattedLastUpdatedAt:"Mar 10, 2025",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callback After User Registration Request",permalink:"/restapi/webhooks/user/userRegisterAfter"},next:{title:"Common Fields",permalink:"/restapi/commonFields"}},u={},c=[{value:"Function Description",id:"function-description",level:2},{value:"Notes",id:"notes",level:2},{value:"Scenarios That May Trigger This Callback",id:"scenarios-that-may-trigger-this-callback",level:2},{value:"Timing of Callback",id:"timing-of-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Request URL Example",id:"request-url-example",level:3},{value:"Request Parameter Description",id:"request-parameter-description",level:3},{value:"Request Package Example",id:"request-package-example",level:3},{value:"Request Package Field Description",id:"request-package-field-description",level:3},{value:"Header",id:"header",level:3},{value:"Response Package Example",id:"response-package-example",level:2},{value:"Operation Successful",id:"operation-successful",level:3},{value:"Response Package Field Description",id:"response-package-field-description",level:2}],m={toc:c},d="wrapper";function k(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)(d,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"callback-before-user-registration-request"},"Callback Before User Registration Request"),(0,a.kt)("h2",{id:"function-description"},"Function Description"),(0,a.kt)("p",null,"The App business server can obtain the user registration request through this callback. Additionally, the business server can reject the user registration request, or modify and intervene in the request."),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To enable the callback, it is necessary to configure the callback URL and activate the switch corresponding to this callback protocol. For configuration methods, see the ",(0,a.kt)("a",{parentName:"li",href:"../introduction"},"Callback Description")," document."),(0,a.kt)("li",{parentName:"ul"},"The direction of the callback is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend."),(0,a.kt)("li",{parentName:"ul"},"After receiving the callback request, the App business server needs to verify whether the command parameter in the request URL is their own SDKNAME parameter."),(0,a.kt)("li",{parentName:"ul"},"The APP business server needs to respond to this request within the timeout period.")),(0,a.kt)("h2",{id:"scenarios-that-may-trigger-this-callback"},"Scenarios That May Trigger This Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New users registering an account through the client.")),(0,a.kt)("h2",{id:"timing-of-callback"},"Timing of Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When OpenIM Server receives a user registration request, before processing the user's request.")),(0,a.kt)("h2",{id:"interface-description"},"Interface Description"),(0,a.kt)("h3",{id:"request-url-example"},"Request URL Example"),(0,a.kt)("p",null,"In the following example, the callback URL configured by the App is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://callbackurl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://callbackurl?command=$UserRegisterCommand&contenttype=json\n")),(0,a.kt)("h3",{id:"request-parameter-description"},"Request Parameter Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"https"),(0,a.kt)("td",{parentName:"tr",align:null},"The request protocol is HTTPS, and the method is POST.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"https://callbackurl"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UserRegisterCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"Fixed value: userRegisterBeforeCommand")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,a.kt)("td",{parentName:"tr",align:null},"Fixed value: JSON")))),(0,a.kt)("h3",{id:"request-package-example"},"Request Package Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "userRegisterBeforeCommand",\n  "secret": "YourSecretKey",\n  "users": {\n    "userID": "user123",\n    "nickname": "John Doe",\n    "faceURL": "http://example.com/path/to/face/image.png",\n    "ex": "Extra data",\n    "createTime": 1673048592000,\n    "appMangerLevel": 1,\n    "globalRecvMsgOpt": 1\n  }\n}\n')),(0,a.kt)("h3",{id:"request-package-field-description"},"Request Package Field Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback command, here for pre-user registration callback.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"secret"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"users"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"User information object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nickname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Nickname of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"URL of the user's avatar.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ex"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Additional data field.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createTime"),(0,a.kt)("td",{parentName:"tr",align:null},"int64"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp of user creation (milliseconds).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"appMangerLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"User's management level.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"globalRecvMsgOpt"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"User's global message reception option.")))),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID for global link tracing")))),(0,a.kt)("h2",{id:"response-package-example"},"Response Package Example"),(0,a.kt)("h3",{id:"operation-successful"},"Operation Successful"),(0,a.kt)("p",null,"Example of a successful operation response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": "0",\n    "users": {\n      "userID": "user123",\n      "nickname": "John Doe",\n      "faceURL": "http://example.com/path/to/face/image.png",\n      "ex": "Extra data",\n      "createTime": 1673048592000,\n      "appMangerLevel": 1,\n      "globalRecvMsgOpt": 1\n    }\n}\n')),(0,a.kt)("h2",{id:"response-package-field-description"},"Response Package Field Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates whether the business system's callback was executed correctly. ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," means the operation was successful.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errCode"),(0,a.kt)("td",{parentName:"tr",align:null},"5001"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error code, ranging between 5000-9999. Set when actionCode is not 0; set when nextCode is 1.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,a.kt)("td",{parentName:"tr",align:null},"Simple error message corresponding to the custom error code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,a.kt)("td",{parentName:"tr",align:null},"Detailed error information corresponding to the custom error code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Next step command.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"users"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"User information object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nickname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Nickname of the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"URL of the user's avatar.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ex"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Additional data field.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createTime"),(0,a.kt)("td",{parentName:"tr",align:null},"int64"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp of user creation (milliseconds).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"appMangerLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"User's management level.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"globalRecvMsgOpt"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"User's global message reception option.")))))}k.isMDXComponent=!0}}]);