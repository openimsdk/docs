"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[32097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(r),b=a,c=s["".concat(i,".").concat(b)]||s[b]||d[b]||l;return r?n.createElement(c,o(o({ref:t},m),{},{components:r})):n.createElement(c,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},45439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},i="onGroupMemberDeleted",u={unversionedId:"callback/onGroupMemberDeleted",id:"callback/onGroupMemberDeleted",title:"onGroupMemberDeleted",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/callback/onGroupMemberDeleted.mdx",sourceDirName:"callback",slug:"/callback/onGroupMemberDeleted",permalink:"/zh-Hans/sdks/callback/onGroupMemberDeleted",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onGroupMemberDeleted.mdx",tags:[],version:"current",lastUpdatedAt:1710150757,formattedLastUpdatedAt:"2024\u5e743\u670811\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onGroupMemberAdded",permalink:"/zh-Hans/sdks/callback/onGroupMemberAdded"},next:{title:"onGroupMemberInfoChanged",permalink:"/zh-Hans/sdks/callback/onGroupMemberInfoChanged"}},m={},s=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},b=d("Tabs"),c=d("TabItem"),k={toc:s},g="wrapper";function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ongroupmemberdeleted"},"onGroupMemberDeleted"),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u7fa4\u6210\u5458\u51cf\u5c11\uff08\u5982\u7fa4\u6210\u5458\u9000\u7fa4\uff09\uff0c \u5176\u4ed6\u7fa4\u6210\u5458\u4f1a\u6536\u5230\u6b64\u56de\u8c03\u3002")),(0,n.kt)(b,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,n.kt)(c,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Function(GroupMembersInfo info)? onGroupMemberDeleted;\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"info"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMembersInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f"))))),(0,n.kt)(c,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-1"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)onGroupMemberDeleted:(OIMGroupMemberInfo *)memberInfo;\n\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"memberInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"OIMGroupMemberInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f"))))),(0,n.kt)(c,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-2"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"   void onGroupMemberDeleted(GroupMembersInfo info);\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"info"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMembersInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u4fe1\u606f"))))),(0,n.kt)(c,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-3"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonGroupMemberDeleted(data: WSEvent<GroupMemberItem>): void;\n\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WSEvent"),"<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f")))),(0,n.kt)("h3",{id:"\u8c03\u7528\u793a\u4f8b"},"\u8c03\u7528\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from 'open-im-sdk-wasm';\n// or\n// import { OpenIMSDK, CbEvents } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnGroupMemberDeleted, ({ data }) => {\n  // data \u7fa4\u6210\u5458\u4fe1\u606f\n});\n"))),(0,n.kt)(c,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-4"},"\u8fd4\u56de\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonGroupMemberDeleted(data: WSEvent<GroupMemberItem>): void;\n\n")),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WSEvent"),"<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f")))),(0,n.kt)("h3",{id:"\u8c03\u7528\u793a\u4f8b-1"},"\u8c03\u7528\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnGroupMemberDeleted, ({ data }) => {\n  // data \u7fa4\u6210\u5458\u4fe1\u606f\n});\n")))))}f.isMDXComponent=!0}}]);