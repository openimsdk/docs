"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[3870],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},o="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=m(a),N=r,g=o["".concat(d,".").concat(N)]||o[N]||u[N]||l;return a?n.createElement(g,p(p({ref:e},k),{},{components:a})):n.createElement(g,p({ref:e},k))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[o]="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},86846:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>m,toc:()=>o});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"\u7248\u672c\u8bf4\u660e",hide_title:!0,sidebar_position:4},d="\u7248\u672c\u8bf4\u660e",m={unversionedId:"introduction/version",id:"introduction/version",title:"\u7248\u672c\u8bf4\u660e",description:"OpenIMSDK \u957f\u671f\u7ef4\u62a4\u7684\u7248\u672c\u5305\u62ec\uff1a",source:"@site/docs/guides/introduction/version.mdx",sourceDirName:"introduction",slug:"/introduction/version",permalink:"/zh-Hans/guides/introduction/version",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/introduction/version.mdx",tags:[],version:"current",lastUpdatedAt:1741601802,formattedLastUpdatedAt:"2025\u5e743\u670810\u65e5",sidebarPosition:4,frontMatter:{title:"\u7248\u672c\u8bf4\u660e",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u6e90\u529f\u80fd\u660e\u7ec6",permalink:"/zh-Hans/guides/introduction/features"},next:{title:"\u73af\u5883\u548c\u7ec4\u4ef6",permalink:"/zh-Hans/guides/gettingStarted/env-comp"}},k={},o=[{value:"\u5f53\u524d\u6700\u65b0\u7a33\u5b9a\u7248\u672c",id:"\u5f53\u524d\u6700\u65b0\u7a33\u5b9a\u7248\u672c",level:2},{value:"Server v3.8.3-patch.3 \u66f4\u65b0\u5185\u5bb9",id:"server-v383-patch3-\u66f4\u65b0\u5185\u5bb9",level:2},{value:"SDK v3.8.3-patch.3 \u66f4\u65b0\u5185\u5bb9",id:"sdk-v383-patch3-\u66f4\u65b0\u5185\u5bb9",level:2},{value:"Chat v1.8.4-patch.2 \u66f4\u65b0\u5185\u5bb9",id:"chat-v184-patch2-\u66f4\u65b0\u5185\u5bb9",level:2},{value:"Server v3.8.3 \u66f4\u65b0\u5185\u5bb9",id:"server-v383-\u66f4\u65b0\u5185\u5bb9",level:2},{value:"SDK v3.8.3 \u66f4\u65b0\u5185\u5bb9",id:"sdk-v383-\u66f4\u65b0\u5185\u5bb9",level:2},{value:"Chat v1.8.4 \u66f4\u65b0\u5185\u5bb9",id:"chat-v184-\u66f4\u65b0\u5185\u5bb9",level:2}],u={toc:o},N="wrapper";function g(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(N,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u7248\u672c\u8bf4\u660e"},"\u7248\u672c\u8bf4\u660e"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"OpenIMSDK")," \u957f\u671f\u7ef4\u62a4\u7684\u7248\u672c\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SDK")," v3.8 \u7cfb\u5217"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Server")," v3.8 \u7cfb\u5217"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Chat")," v1.8 \u7cfb\u5217")),(0,n.kt)("p",null,"\u5728\u540c\u4e00\u5927\u7248\u672c\u5185\uff0c\u4e0d\u540c\u5c0f\u7248\u672c\u4e4b\u95f4\u6570\u636e\u517c\u5bb9\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u5347\u7ea7\u5230\u6700\u65b0\u7684\u5b50\u7248\u672c\uff0c\u5347\u7ea7\u65f6\u8bf7\u4f7f\u7528 ",(0,n.kt)("strong",{parentName:"p"},"tag")," \u4ee5\u786e\u4fdd\u7248\u672c\u7684\u51c6\u786e\u6027\u548c\u7a33\u5b9a\u6027\u3002"),(0,n.kt)("p",null,"\u7531\u4e8e\u7ef4\u62a4\u8d44\u6e90\u6709\u9650\uff0c\u5176\u4ed6\u7248\u672c\u5c06\u4e0d\u518d\u5f97\u5230\u652f\u6301\u3002\u8bf7\u5404\u4f4d\u7528\u6237\u5c3d\u5feb\u5b8c\u6210\u5347\u7ea7\uff0c\u4ee5\u4eab\u53d7\u6700\u65b0\u7684\u529f\u80fd\u548c\u4f18\u5316\u3002"),(0,n.kt)("h2",{id:"\u5f53\u524d\u6700\u65b0\u7a33\u5b9a\u7248\u672c"},"\u5f53\u524d\u6700\u65b0\u7a33\u5b9a\u7248\u672c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Server"),": v3.8.3-patch.3"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SDK"),": v3.8.3-patch.3"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Chat"),": v1.8.4-patch.2")),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"\u7248\u672c\u66f4\u65b0\u65e5\u5fd7"},"\u7248\u672c\u66f4\u65b0\u65e5\u5fd7"),(0,n.kt)("h1",{id:"v383-patch-2025-3-7"},"v3.8.3-patch (2025-3-7)"),(0,n.kt)("h2",{id:"server-v383-patch3-\u66f4\u65b0\u5185\u5bb9"},"Server v3.8.3-patch.3 \u66f4\u65b0\u5185\u5bb9"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u7c7b\u522b")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u5185\u5bb9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"bug \u4fee\u590d")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86 seq \u8f6c\u6362\u5de5\u5177\u5728\u5931\u8d25\u65f6\u6ca1\u6709\u6b63\u786e\u9000\u51fa\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u8bbe\u7f6e KickedToken \u9519\u8bef\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5b9a\u65f6\u9500\u6bc1\u4fe1\u606f\u9519\u8bef\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5f02\u5e38\u6d88\u606f\u7f3a\u5c11\u65f6\u95f4\uff0c\u5bfc\u81f4 SDK \u5f02\u5e38\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u64a4\u56de\u5df2\u7ecf\u9000\u51fa\u7fa4\u804a\u6210\u5458\u7684\u4fe1\u606f\uff0c\u4f1a\u5bfc\u81f4\u5d29\u6e83\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u7528\u6237\u8bbe\u7f6e\u5b9a\u65f6\u9500\u6bc1\u4fe1\u606f\u7684\u65f6\u95f4\u5355\u4f4d\u4e0d\u6b63\u786e\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86 seq \u8f6c\u6362\u5de5\u5177\u6ca1\u6709\u5728 docker \u73af\u5883\u4e0b\u88ab\u6b63\u786e\u8bfb\u53d6\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u79bb\u7ebf\u63a8\u9001\u63a8\u9001\u9519\u8bef\u548c\u6ca1\u6709\u89d2\u6807\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u8bbe\u7f6e\u7fa4\u4fe1\u606f\u6ca1\u6709\u6b63\u786e\u901a\u77e5\u5230 SDK \u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u7ba1\u7406\u5458\u53d8\u66f4\u540e\u6392\u5e8f\u9519\u8bef\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u52a0\u5165\u7fa4\u804a\u7684\u901a\u77e5\u7c7b\u578b\u4e0d\u6b63\u786e\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u529f\u80fd\u4f18\u5316")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86 sendNotification \u7684\u4f20\u9012\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u6765\u9009\u62e9\u662f\u5426\u643a\u5e26\u53d1\u9001\u4fe1\u606f\u7684\u6807\u8bc6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86 docker \u4e2d\u6620\u5c04 mongo \u5907\u4efd\u6587\u4ef6\u5939\uff0c\u5e76\u4f18\u5316\u4e86\u65e5\u5fd7\u6253\u5370")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86\u6279\u91cf\u83b7\u53d6\u589e\u91cf\u7fa4\u6210\u5458\u7684\u65b9\u6cd5\u3002")))),(0,n.kt)("h2",{id:"sdk-v383-patch3-\u66f4\u65b0\u5185\u5bb9"},"SDK v3.8.3-patch.3 \u66f4\u65b0\u5185\u5bb9"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u7c7b\u522b")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u5185\u5bb9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"bug \u4fee\u590d")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5728\u8f83\u5dee\u7f51\u7edc\u73af\u5883\u65f6\uff0c\u5f02\u5e38\u6d88\u606f\u53ef\u80fd\u91cd\u590d\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u4f1a\u8bdd id \u83b7\u53d6\u5e8f\u5217\u5316\u7684\u5904\u7406\u9519\u8bef\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u670d\u52a1\u5668\u5d29\u6e83\u6216 req \u7f13\u5b58\u8fc7\u671f\u800c\u5bfc\u81f4\u6d88\u606f\u95f4\u9699\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u6539\u53d8\u81ea\u5df1\u5934\u50cf\u65f6\uff0c\u4f1a\u8bdd\u4e2d\u7684\u5934\u50cf\u4e0d\u4f1a\u540c\u6b65\u66f4\u65b0\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86 seq \u4e3a 0 \u65f6\uff0c\u4f1a\u5bfc\u81f4\u540c\u6b65\u5931\u8d25\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u83b7\u53d6\u7fa4\u6210\u5458\u4fe1\u606f\u53ef\u80fd\u4f1a\u5931\u6548\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5728\u670d\u52a1\u5668\u76f4\u63a5\u62c9\u53d6\u7684\u6d88\u606f\u4f1a\u91cd\u590d\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u529f\u80fd\u4f18\u5316")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86\u597d\u53cb\u7533\u8bf7\u548c\u7fa4\u7ec4\u7533\u8bf7\u8fc7\u591a\u65f6\uff0c\u4f1a\u5bfc\u81f4\u5361\u987f\u7684\u95ee\u9898\u3002")))),(0,n.kt)("h2",{id:"chat-v184-patch2-\u66f4\u65b0\u5185\u5bb9"},"Chat v1.8.4-patch.2 \u66f4\u65b0\u5185\u5bb9"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u7c7b\u522b")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u5185\u5bb9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"bug \u4fee\u590d")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u7528\u6237\u5c5e\u6027\u8fc1\u79fb\u5de5\u5177\uff0c\u8f6c\u6362\u65f6\u65e0\u9650\u5faa\u73af\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u83b7\u53d6\u7f13\u5b58\u4e2d\u7684 AdminToken \u53ef\u80fd\u4f1a\u5bfc\u81f4\u6b7b\u9501\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u529f\u80fd\u4f18\u5316")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86 proto gen\uff0c\u5e76\u4f7f\u7528\u4e86\u65b0\u7248\u672c\u7684 grpc \u751f\u6210\u5de5\u5177\u3002")))),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"v383-2025-1-10"},"v3.8.3 (2025-1-10)"),(0,n.kt)("h2",{id:"server-v383-\u66f4\u65b0\u5185\u5bb9"},"Server v3.8.3 \u66f4\u65b0\u5185\u5bb9"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u7c7b\u522b")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u5185\u5bb9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u65b0\u7279\u6027")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b9e\u73b0\u4e86 GetLastMessage \u63a5\u53e3\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b9e\u73b0\u4e86\u540c\u6b65 seq_user \u7684\u6700\u5927\u6700\u5c0f seq \u5230 conversation \u96c6\u5408\u4e2d\u7528\u4e8e isEnd \u5224\u5b9a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u529f\u80fd\u4f18\u5316")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86 Crontask \u5b9a\u65f6\u5220\u9664\u6d88\u606f\u7684\u5b9e\u73b0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u5c06 upload log \u63a5\u53e3\u7684 ",(0,n.kt)("inlineCode",{parentName:"td"},"systemType")," \u5b57\u6bb5\u6539\u6210 ",(0,n.kt)("inlineCode",{parentName:"td"},"AppFramework"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u7684 RPC \u8c03\u7528\u7684\u901a\u7528\u65b9\u6cd5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86\u6d88\u606f\u7f13\u5b58\u7684\u903b\u8f91")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86\u65e5\u5fd7\u8f93\u51fa\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u5728 NotificationAccountInfo \u7ed3\u6784\u4f53\u6dfb\u52a0",(0,n.kt)("inlineCode",{parentName:"td"},"AppMangerLevel"),"\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"bug \u4fee\u590d")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u7fa4\u6210\u5458\u5934\u50cf\u8bbe\u7f6e\u65e0\u6548\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u6253\u5370 log.ZPanic \u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5f53 SDK \u62c9\u53d6\u4fe1\u606f\u65f6\uff0cServer \u8fd4\u56de isEnd \u6765\u63a7\u5236\u62c9\u53d6\u4fe1\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86 rpc \u53d1\u751f panic \u65f6\u7684\u6062\u590d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u8bbe\u7f6e IsPrivateChat \u65f6\uff0c\u4fee\u6539\u5176\u4ed6\u5b57\u6bb5\u4e0d\u4f1a\u751f\u6548\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5f53\u5f15\u7528\u6d88\u606f\u65f6\uff0c\u5076\u73b0\u7684\u539f\u6d88\u606f\u88ab\u5220\u9664\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5173\u95ed ",(0,n.kt)("inlineCode",{parentName:"td"},"EnableHistoryForNewMembers"),"\u65f6\uff0c\u65b0\u6210\u5458\u4ecd\u80fd\u8bfb\u5230\u6700\u540e\u4e00\u6761\u5386\u53f2\u4fe1\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86 KickTokens \u4fdd\u5b58\u9519\u8bef\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u8f6c\u53d1@\u6d88\u606f\u5230\u5176\u4ed6\u7fa4\u4e2d\uff0c\u9020\u6210\u5f02\u5e38\u4f1a\u8bdd\u751f\u6210\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5728\u7ebf\u72b6\u6001\u9519\u8bef\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u670d\u52a1\u53d1\u73b0\u548c\u81ea\u52a8\u8bbe\u7f6e\u7aef\u53e3\u7684\u9519\u8bef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86 GetUsersOnline \u65f6\u83b7\u53d6\u4e86\u9519\u8bef\u7684\u5728\u7ebf\u5217\u8868\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u5176\u4ed6")),(0,n.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u4e86\u524d\u7aef\u955c\u50cf\u7684\u7248\u672c")))),(0,n.kt)("h2",{id:"sdk-v383-\u66f4\u65b0\u5185\u5bb9"},"SDK v3.8.3 \u66f4\u65b0\u5185\u5bb9"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u7c7b\u522b")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u5185\u5bb9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u529f\u80fd\u4f18\u5316")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u53c2\u6570\u6765\u5b9a\u4f4d\u6d88\u606f\u4e0e\u65b9\u5411\u62c9\u53d6\u6d88\u606f\uff0c\u907f\u514d UI \u6570\u636e\u5e72\u6270\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86\u6d88\u606f\u83b7\u53d6\u903b\u8f91")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"bug \u4fee\u590d")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5f53 chatlog \u8868\u540d\u5305\u542b",(0,n.kt)("inlineCode",{parentName:"td"},"-"),"\u65f6\u521b\u5efa\u7d22\u5f15\u9519\u8bef\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u91cd\u88c5 APP \u540e\uff0c\u5f53\u524d\u7528\u6237\u4fe1\u606f\u53ef\u80fd\u4e3a\u7a7a\u7684\u95ee\u9898\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5f53\u5173\u952e\u5b57\u4e3a\u7a7a\u65f6\uff0c\u641c\u7d22\u6d88\u606f\u4e0d\u4f1a\u8fc7\u6ee4\u8bed\u97f3\u6d88\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u5f53 APP \u4ece\u540e\u53f0\u6253\u5f00\u6216\u72b6\u6001\u66f4\u65b0\u65f6\uff0c\u5f15\u7528\u6d88\u606f\u4e0d\u4f1a\u6b63\u786e\u5207\u6362\u4e3a\u64a4\u9500\u4fe1\u606f\u7684\u9519\u8bef\u3002")))),(0,n.kt)("h2",{id:"chat-v184-\u66f4\u65b0\u5185\u5bb9"},"Chat v1.8.4 \u66f4\u65b0\u5185\u5bb9"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u7c7b\u522b")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u5185\u5bb9")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u65b0\u7279\u6027")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b9e\u73b0\u4e86\u7ba1\u7406\u540e\u53f0\u7684\u914d\u7f6e\u4e2d\u5fc3\u5bf9\u5e94\u529f\u80fd\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"\u529f\u80fd\u4f18\u5316")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86\u4e0e kubernetes \u9002\u914d\u4e0e\u5bf9\u5e94\u670d\u52a1\u7684\u955c\u50cf\u751f\u6210\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e86\u6d88\u606f\u83b7\u53d6\u903b\u8f91")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"bug \u4fee\u590d")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86 grpc \u5728 windows \u65f6\u7684\u8fde\u63a5\u5185\u5b58\u6cc4\u6f0f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u4e86\u9519\u8bef\u6808\u7684\u6253\u5370\u95ee\u9898\u3002")))),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"\u7248\u672c\u517c\u5bb9\u6027"},"\u7248\u672c\u517c\u5bb9\u6027"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u53f7"),(0,n.kt)("th",{parentName:"tr",align:null},"\u517c\u5bb9\u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SDK")),(0,n.kt)("td",{parentName:"tr",align:null},"v3.8.3"),(0,n.kt)("td",{parentName:"tr",align:null},"Server v3.8.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Server")),(0,n.kt)("td",{parentName:"tr",align:null},"v3.8.3"),(0,n.kt)("td",{parentName:"tr",align:null},"SDK v3.8.2, SDK v3.8.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Chat")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.8.4"),(0,n.kt)("td",{parentName:"tr",align:null},"Server v3.8.2, Server v3.8.3")))))}g.isMDXComponent=!0}}]);