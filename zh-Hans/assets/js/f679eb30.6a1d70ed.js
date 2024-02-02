"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[9024],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(r),f=n,k=s["".concat(p,".").concat(f)]||s[f]||u[f]||l;return r?a.createElement(k,i(i({ref:e},m),{},{components:r})):a.createElement(k,i({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61354:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>s});r(67294);var a=r(3905);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const o={sidebar_position:7,title:"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5728\u7ebf\u72b6\u6001",hide_title:!0},p=void 0,d={unversionedId:"apis/userManagement/getUserOnlineStatus",id:"apis/userManagement/getUserOnlineStatus",title:"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5728\u7ebf\u72b6\u6001",description:"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5728\u7ebf\u72b6\u6001",source:"@site/docs/restapi/apis/userManagement/getUserOnlineStatus.mdx",sourceDirName:"apis/userManagement",slug:"/apis/userManagement/getUserOnlineStatus",permalink:"/zh-Hans/restapi/apis/userManagement/getUserOnlineStatus",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/userManagement/getUserOnlineStatus.mdx",tags:[],version:"current",lastUpdatedAt:1706860170,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5728\u7ebf\u72b6\u6001",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u7528\u6237ID\u5217\u8868",permalink:"/zh-Hans/restapi/apis/userManagement/getUserIDList"},next:{title:"\u4fee\u6539\u7528\u6237\u4fe1\u606f",permalink:"/zh-Hans/restapi/apis/userManagement/updateUserInfo"}},m={},s=[{value:"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5728\u7ebf\u72b6\u6001",id:"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5728\u7ebf\u72b6\u6001",level:2},{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3}],u={toc:s},f="wrapper";function k(t){var{components:e}=t,r=i(t,["components"]);return(0,a.kt)(f,l(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){n(t,e,r[e])}))}return t}({},u,r),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("h2",{id:"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5728\u7ebf\u72b6\u6001"},"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5728\u7ebf\u72b6\u6001")),(0,a.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5404\u7ec8\u7aef\u5728\u7ebf\u72b6\u6001\u548ctoken\u3002")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,a.kt)("h3",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http://x.x.x.x:10002/user/get_users_online_status")," ")),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"operationID\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"token"),(0,a.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458token")))),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userIDs": [\n    "2890713225"\n  ]\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"userIDs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u67e5\u8be2\u7684\u7528\u6237ID\u5217\u8868")))),(0,a.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": [\n    {\n      "userID": "2890713225",\n      "status": "online",\n      "detailPlatformStatus": [\n        {\n          "platform": "Windows",\n          "status": "online",\n          "connID": "bbb7c4da159b1ec6beb81c9e4129b075",\n          "isBackground": false,\n          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIyODkwNzEzMjI1IiwiUGxhdGZvcm1JRCI6MywiZXhwIjoxNzA0Njk1NzI0LCJuYmYiOjE2OTY5MTk0MjQsImlhdCI6MTY5NjkxOTcyNH0.-TBNT0YKn_8YH9oO8A8SYEpNzOg1-EQD8O23R0MsVLE"\n        },\n        {\n          "platform": "Android",\n          "status": "online",\n          "connID": "f18b67b5f57f01604b9f7c338238f43d",\n          "isBackground": false,\n          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIyODkwNzEzMjI1IiwiUGxhdGZvcm1JRCI6MiwiZXhwIjoxNzA0NTA5ODg4LCJuYmYiOjE2OTY3MzM1ODgsImlhdCI6MTY5NjczMzg4OH0.uii4Sf05z7VIGCDXUEtqq7cwdXakWkJJrCwYUigvc3I"\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,0\u8868\u793a\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u901a\u7528\u6570\u636e\u5bf9\u8c61\uff0c\u5177\u4f53\u7ed3\u6784\u89c1\u4e0b\u65b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5728\u7ebf\u72b6\u6001\uff0c\u5728\u7ebf\uff1aonline\uff0c\u79bb\u7ebf\uff1aoffline")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"detailPlatformStatus"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8be6\u7ec6\u7684\u5404\u4e2a\u5e73\u53f0\u7684\u5728\u7ebf\u60c5\u51b5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"detailPlatformStatus.platform"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5e73\u53f0ID, 1\uff1aIOS\uff0c2\uff1aAndroid\uff0c3\uff1aWindows\uff0c4\uff1aOSX\uff0c5\uff1aWeb\uff0c6\uff1aMiniWeb\uff0c7\uff1aLinux\uff0c8\uff1aAndroid Pad\uff0c9\uff1aIPad\uff0c10\uff1aadmin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"detailPlatformStatus.status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5728\u7ebf\u72b6\u6001\uff0c\u5728\u7ebf\uff1aonline\uff0c\u79bb\u7ebf\uff1aoffline")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"detailPlatformStatus.connID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fde\u63a5ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"detailPlatformStatus.isBackground"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"app\u662f\u5426\u5904\u4e8e\u540e\u53f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"detailPlatformStatus.token"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"token\u4fe1\u606f")))),(0,a.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,a.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,\u5177\u4f53\u67e5\u770b\u5168\u5c40\u9519\u8bef\u7801\u6587\u6863")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f")))))}k.isMDXComponent=!0}}]);