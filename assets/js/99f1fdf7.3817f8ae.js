"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[75522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},59457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>m});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_position:16,title:"get_self_friend_apply_list",hide_title:!0},o=void 0,s={unversionedId:"apis/friendsManagement/getSentApplication",id:"apis/friendsManagement/getSentApplication",title:"get_self_friend_apply_list",description:"getselffriendapplylist",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/apis/friendsManagement/getSentApplication.mdx",sourceDirName:"apis/friendsManagement",slug:"/apis/friendsManagement/getSentApplication",permalink:"/restapi/apis/friendsManagement/getSentApplication",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/friendsManagement/getSentApplication.mdx",tags:[],version:"current",lastUpdatedAt:1744079742,formattedLastUpdatedAt:"Apr 8, 2025",sidebarPosition:16,frontMatter:{sidebar_position:16,title:"get_self_friend_apply_list",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"get_friend_list",permalink:"/restapi/apis/friendsManagement/getFriendList"},next:{title:"get_friend_apply_list",permalink:"/restapi/apis/friendsManagement/getRecvApplication"}},d={},m=[{value:"get_self_friend_apply_list",id:"get_self_friend_apply_list",level:2},{value:"Description",id:"description",level:3},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Header",id:"header",level:3},{value:"Request Parameters Example",id:"request-parameters-example",level:3},{value:"Success Response Example",id:"success-response-example",level:3},{value:"Success Response Parameter Description",id:"success-response-parameter-description",level:3},{value:"Failure Response Example",id:"failure-response-example",level:3},{value:"Failure Response Parameter Description",id:"failure-response-parameter-description",level:3}],u={toc:m},c="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("center",null,(0,n.kt)("h2",{id:"get_self_friend_apply_list"},"get_self_friend_apply_list")),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As the initiator, retrieve the list of friend requests sent by the user to other users.")),(0,n.kt)("h3",{id:"request-method"},"Request Method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST"))),(0,n.kt)("h3",{id:"request-url"},"Request URL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/friend/get_self_friend_apply_list"))),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Used for global traceability, suggested as a unique timestamp per request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/restapi/apis/authenticationManagement/getAdminToken"},"Admin token"))))),(0,n.kt)("h3",{id:"request-parameters-example"},"Request Parameters Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userID": "11111111",\n  "pagination": {\n    "pageNumber": 1,\n    "showNumber": 100\n  }\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pagination"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"Pagination structure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pagination.pageNumber"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Current page number, starting from 1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pagination.showNumber"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of items per page")))),(0,n.kt)("h3",{id:"success-response-example"},"Success Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "friendRequests": [\n      {\n        "fromUserID": "11111111",\n        "fromNickname": "yourNickname",\n        "fromFaceURL": "yourFaceURL",\n        "toUserID": "11111112",\n        "toNickname": "alantestuid3",\n        "toFaceURL": "1111111",\n        "handleResult": 1,\n        "reqMsg": "hello!",\n        "createTime": 1688458858893,\n        "handlerUserID": "openIMAdmin",\n        "handleMsg": "agree",\n        "handleTime": 1688458955357,\n        "ex": ""\n      },\n      {\n        "fromUserID": "11111111",\n        "fromNickname": "yourNickname",\n        "fromFaceURL": "yourFaceURL",\n        "toUserID": "11111113",\n        "toNickname": "yourNickname",\n        "toFaceURL": "yourFaceURL",\n        "handleResult": 1,\n        "reqMsg": "hello!",\n        "createTime": 1688460586632,\n        "handlerUserID": "openIMAdmin",\n        "handleMsg": "agree",\n        "handleTime": 1688460590618,\n        "ex": ""\n      }\n    ],\n    "total": 2\n  }\n}\n')),(0,n.kt)("h3",{id:"success-response-parameter-description"},"Success Response Parameter Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code, 0 indicates success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message, empty if successful")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error information, empty if successful")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"General data object, structure described below")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"friendRequests"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of ",(0,n.kt)("a",{parentName:"td",href:"/restapi/commonFields#friendrequestinfo"},"friend request information"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of friend requests sent by the user")))),(0,n.kt)("h3",{id:"failure-response-example"},"Failure Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,n.kt)("h3",{id:"failure-response-parameter-description"},"Failure Response Parameter Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code; refer to global error code documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error information")))))}f.isMDXComponent=!0}}]);