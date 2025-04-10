"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[42429],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=d(a),N=r,g=u["".concat(m,".").concat(N)]||u[N]||o[N]||l;return a?n.createElement(g,i(i({ref:e},k),{},{components:a})):n.createElement(g,i({ref:e},k))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},21660:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>s,frontMatter:()=>p,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={sidebar_position:6,toc_min_heading_level:2,toc_max_heading_level:2},m="BlackInfo",d={unversionedId:"class/relation/blackInfo",id:"class/relation/blackInfo",title:"BlackInfo",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/class/relation/blackInfo.mdx",sourceDirName:"class/relation",slug:"/class/relation/blackInfo",permalink:"/zh-Hans/sdks/class/relation/blackInfo",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/class/relation/blackInfo.mdx",tags:[],version:"current",lastUpdatedAt:1744272715,formattedLastUpdatedAt:"2025\u5e744\u670810\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"FriendInfo",permalink:"/zh-Hans/sdks/class/relation/friendInfo"},next:{title:"UpdateFriendsReq",permalink:"/zh-Hans/sdks/class/relation/updateFriendsReq"}},k={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"BlacklistInfo",id:"blacklistinfo",level:3},{value:"OIMBlackInfo",id:"oimblackinfo",level:3},{value:"BlacklistInfo",id:"blacklistinfo-1",level:3},{value:"BlackUserItem",id:"blackuseritem",level:3},{value:"BlackUserItem",id:"blackuseritem-1",level:3},{value:"BlackUserItem",id:"blackuseritem-2",level:3},{value:"BlackInfo",id:"blackinfo-1",level:3}],o=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},N=o("Tabs"),g=o("TabItem"),c={toc:u},b="wrapper";function s(t){var{components:e}=t,a=i(t,["components"]);return(0,n.kt)(b,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},c,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"blackinfo"},"BlackInfo"),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u9ed1\u540d\u5355\u4fe1\u606f")),(0,n.kt)(N,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"blacklistinfo"},"BlacklistInfo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blockUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nickname"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6635\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createTime"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addSource"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65b9\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u4e4b\u6210\u4e3a\u9ed1\u540d\u5355\u7684\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5"))))),(0,n.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"oimblackinfo"},"OIMBlackInfo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blockUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nickname"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6635\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createTime"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addSource"),(0,n.kt)("td",{parentName:"tr",align:null},"addSource"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65b9\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u4e4b\u6210\u4e3a\u9ed1\u540d\u5355\u7684\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5"))))),(0,n.kt)(g,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"blacklistinfo-1"},"BlacklistInfo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nickname"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6635\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createTime"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addSource"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65b9\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u4e4b\u6210\u4e3a\u9ed1\u540d\u5355\u7684\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5"))))),(0,n.kt)(g,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"blackuseritem"},"BlackUserItem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blockUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nickname"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6635\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createTime"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addSource"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65b9\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u4e4b\u6210\u4e3a\u9ed1\u540d\u5355\u7684\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5"))))),(0,n.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"blackuseritem-1"},"BlackUserItem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blockUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nickname"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6635\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createTime"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addSource"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65b9\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u4e4b\u6210\u4e3a\u9ed1\u540d\u5355\u7684\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5"))))),(0,n.kt)(g,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"blackuseritem-2"},"BlackUserItem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blockUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nickname"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6635\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createTime"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addSource"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65b9\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u4e4b\u6210\u4e3a\u9ed1\u540d\u5355\u7684\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5"))))),(0,n.kt)(g,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"blackinfo-1"},"BlackInfo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OwnerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BlockUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Nickname"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6635\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FaceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5934\u50cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CreateTime"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AddSource"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"\u62c9\u9ed1\u65b9\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OperatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u4e4b\u6210\u4e3a\u9ed1\u540d\u5355\u7684\u7528\u6237 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AttachedInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ex"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")))))))}s.isMDXComponent=!0}}]);