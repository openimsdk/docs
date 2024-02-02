"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[99549],{3905:(t,n,e)=>{e.d(n,{Zo:()=>o,kt:()=>N});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=a.createContext({}),m=function(t){var n=a.useContext(d),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},o=function(t){var n=m(t.components);return a.createElement(d.Provider,{value:n},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=m(e),k=r,N=u["".concat(d,".").concat(k)]||u[k]||g[k]||l;return e?a.createElement(N,i(i({ref:n},o),{},{components:e})):a.createElement(N,i({ref:n},o))}));function N(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=e[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},13110:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>u});e(67294);var a=e(3905);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}const p={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},d="Config",m={unversionedId:"class/init/config",id:"class/init/config",title:"Config",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/class/init/config.mdx",sourceDirName:"class/init",slug:"/class/init/config",permalink:"/zh-Hans/sdks/class/init/config",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/class/init/config.mdx",tags:[],version:"current",lastUpdatedAt:1706860170,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Class",permalink:"/zh-Hans/sdks/class/"},next:{title:"\u7528\u6237\u76f8\u5173",permalink:"/zh-Hans/sdks/class/user/"}},o={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"InitConfig",id:"initconfig",level:3},{value:"OIMInitConfig",id:"oiminitconfig",level:3},{value:"InitConfig",id:"initconfig-1",level:3},{value:"InitConfig",id:"initconfig-2",level:3},{value:"InitAndLoginConfig",id:"initandloginconfig",level:3}],g=t=>function(n){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},k=g("Tabs"),N=g("TabItem"),s={toc:u},c="wrapper";function b(t){var{components:n}=t,e=i(t,["components"]);return(0,a.kt)(c,l(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),a.forEach((function(n){r(t,n,e[n])}))}return t}({},s,e),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config"},"Config"),(0,a.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u521d\u59cb\u5316 SDK \u7684\u914d\u7f6e\u4fe1\u606f\u3002")),(0,a.kt)(k,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,a.kt)(N,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"initconfig"},"InitConfig"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platformID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"int")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"wss://xxx/message_gateway"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,a.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"NSString"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84"))))),(0,a.kt)(N,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"oiminitconfig"},"OIMInitConfig"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platformID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"OIMPlatform")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"NSString"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"NSString"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"wss://xxx/message_gateway"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,a.kt)("td",{parentName:"tr",align:null},"NSString"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,a.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"NSString"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84"))))),(0,a.kt)(N,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"initconfig-1"},"InitConfig"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"wss://xxx/message_gateway"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platformID"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84"))))),(0,a.kt)(N,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"initconfig-2"},"InitConfig"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platformID"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"https://xxx/api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"wss://xxx/message_gateway"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM \u5ba2\u6237\u7aef DB \u5b58\u653e\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u65e5\u5fd7\u6253\u5370\u5230\u63a7\u5236\u53f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logFilePath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84"))))),(0,a.kt)(N,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"initandloginconfig"},"InitAndLoginConfig"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platformID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"Platform")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, \u5c0f\u7a0b\u5e8f 6\uff0clinux 7"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"http://xxx:10002"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"https://xxx/api")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wsAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"ws://xxx:10001"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"wss://xxx/message_gateway")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"IM \u7528\u6237 userID"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"OpenIM \u7528\u6237\u4ee4\u724c\uff0c\u4e1a\u52a1\u540e\u53f0\u9a8c\u8bc1\u7528\u6237\u8d26\u53f7\u5bc6\u7801\u540e\uff0c\u901a\u8fc7 user_token \u6765\u83b7\u53d6"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/logLevel"},"LogLevel")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"SDK \u65e5\u5fd7\u6253\u5370\u7ea7\u522b"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isLogStandardOutput"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8f93\u5165\u65e5\u5fd7\u5230\u63a7\u5236\u53f0"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tryParse"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8 parse \u8fd4\u56de\u503c\uff0c\u9ed8\u8ba4\u4e3a true"),(0,a.kt)("td",{parentName:"tr",align:null})))))))}b.isMDXComponent=!0}}]);