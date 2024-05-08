"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[33340],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},f="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),f=d(n),c=a,u=f["".concat(o,".").concat(c)]||f[c]||s[c]||l;return n?r.createElement(u,i(i({ref:e},m),{},{components:n})):r.createElement(u,i({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[f]="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35353:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>f});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={sidebar_position:9,title:"\u83b7\u53d6\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7",hide_title:!0},o=void 0,d={unversionedId:"apis/friendsManagement/getSentApplication",id:"apis/friendsManagement/getSentApplication",title:"\u83b7\u53d6\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7",description:"\u83b7\u53d6\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7",source:"@site/docs/restapi/apis/friendsManagement/getSentApplication.mdx",sourceDirName:"apis/friendsManagement",slug:"/apis/friendsManagement/getSentApplication",permalink:"/zh-Hans/restapi/apis/friendsManagement/getSentApplication",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/friendsManagement/getSentApplication.mdx",tags:[],version:"current",lastUpdatedAt:1715135721,formattedLastUpdatedAt:"2024\u5e745\u67088\u65e5",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u83b7\u53d6\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u5904\u7406\u597d\u53cb\u7533\u8bf7",permalink:"/zh-Hans/restapi/apis/friendsManagement/processApplication"},next:{title:"\u4fee\u6539\u597d\u53cb\u4fe1\u606f",permalink:"/zh-Hans/restapi/apis/friendsManagement/updateFriends"}},m={},f=[{value:"\u83b7\u53d6\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7",id:"\u83b7\u53d6\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7",level:2},{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3}],s={toc:f},c="wrapper";function u(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(c,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},s,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("center",null,(0,r.kt)("h2",{id:"\u83b7\u53d6\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7"},"\u83b7\u53d6\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7")),(0,r.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4e3b\u52a8\u6dfb\u52a0\u8005\uff0c\u83b7\u53d6\u8be5\u7528\u6237\u5411\u5176\u4ed6\u7528\u6237\u53d1\u8d77\u7684\u597d\u53cb\u7533\u8bf7\u5217\u8868\u3002")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,r.kt)("h3",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://x.x.x.x:10002/friend/get_self_friend_apply_list")," ")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"operationID\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458token")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userID": "11111111",\n  "pagination": {\n    "pageNumber": 1,\n    "showNumber": 100\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u9875\u7ed3\u6784\u4f53\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination.pageNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9875\u7801\uff0c\u4ece1\u5f00\u59cb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination.showNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9875\u8bf7\u6c42\u6570\u91cf")))),(0,r.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "friendRequests": [\n      {\n        "fromUserID": "11111111",\n        "fromNickname": "yourNickname",\n        "fromFaceURL": "yourFaceURL",\n        "toUserID": "11111112",\n        "toNickname": "alantestuid3",\n        "toFaceURL": "1111111",\n        "handleResult": 1,\n        "reqMsg": "hello!",\n        "createTime": 1688458858893,\n        "handlerUserID": "openIMAdmin",\n        "handleMsg": "agree",\n        "handleTime": 1688458955357,\n        "ex": ""\n      },\n      {\n        "fromUserID": "11111111",\n        "fromNickname": "yourNickname",\n        "fromFaceURL": "yourFaceURL",\n        "toUserID": "11111113",\n        "toNickname": "yourNickname",\n        "toFaceURL": "yourFaceURL",\n        "handleResult": 1,\n        "reqMsg": "hello!",\n        "createTime": 1688460586632,\n        "handlerUserID": "openIMAdmin",\n        "handleMsg": "agree",\n        "handleTime": 1688460590618,\n        "ex": ""\n      }\n    ],\n    "total": 2\n  }\n}\n')),(0,r.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,0\u8868\u793a\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u7528\u6570\u636e\u5bf9\u8c61\uff0c\u5177\u4f53\u7ed3\u6784\u89c1\u4e0b\u65b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"friendRequests"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/restapi/commonFields#friendrequestinfo"},"\u597d\u53cb\u7533\u8bf7"),"\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"total"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u52a8\u53d1\u51fa\u53bb\u7684\u597d\u53cb\u7533\u8bf7\u603b\u6570")))),(0,r.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,r.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,\u5177\u4f53\u67e5\u770b\u5168\u5c40\u9519\u8bef\u7801\u6587\u6863")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f")))))}u.isMDXComponent=!0}}]);