"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[52522],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=u(r),c=a,s=d["".concat(i,".").concat(c)]||d[c]||k[c]||l;return r?n.createElement(s,o(o({ref:e},m),{},{components:r})):n.createElement(s,o({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},54395:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const p={title:"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03",hide_title:!0},i="\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03",u={unversionedId:"webhooks/group/killGroupMember",id:"webhooks/group/killGroupMember",title:"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03",description:"\u529f\u80fd\u8bf4\u660e",source:"@site/docs/restapi/webhooks/group/killGroupMember.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/killGroupMember",permalink:"/zh-Hans/restapi/webhooks/group/killGroupMember",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/killGroupMember.mdx",tags:[],version:"current",lastUpdatedAt:1715135721,formattedLastUpdatedAt:"2024\u5e745\u67088\u65e5",frontMatter:{title:"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u6210\u5458\u52a0\u5165\u7fa4\u7ec4\u4e4b\u540e\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/group/joinGroupAfter"},next:{title:"\u7528\u6237\u9000\u51fa\u7fa4\u7ec4\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/group/quitGroup"}},m={},d=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",level:2},{value:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u8bf7\u6c42 URL \u793a\u4f8b",id:"\u8bf7\u6c42-url-\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e",id:"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u5305\u793a\u4f8b",id:"\u8bf7\u6c42\u5305\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u5e94\u7b54\u5305\u793a\u4f8b",id:"\u5e94\u7b54\u5305\u793a\u4f8b",level:2},{value:"\u5141\u8bb8\u8e22\u51fa",id:"\u5141\u8bb8\u8e22\u51fa",level:3},{value:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",level:2}],k={toc:d},c="wrapper";function s(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(c,l(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){a(t,e,r[e])}))}return t}({},k,r),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03"},"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03"),(0,n.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,n.kt)("p",null,"App \u4e1a\u52a1\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8be5\u56de\u8c03\u5904\u7406\u7fa4\u7ec4\u7ba1\u7406\u5458\u8e22\u51fa\u6210\u5458\u7684\u8bf7\u6c42\uff0c\u5305\u62ec\uff1a\u5bf9\u7528\u6237\u9000\u7fa4\u8fdb\u884c\u5b9e\u65f6\u8bb0\u5f55\uff08\u4f8b\u5982\u8bb0\u5f55\u65e5\u5fd7\uff0c\u6216\u8005\u540c\u6b65\u5230\u5176\u4ed6\u7cfb\u7edf\uff09\u3002"),(0,n.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u542f\u7528\u56de\u8c03\uff0c\u5fc5\u987b\u914d\u7f6e\u56de\u8c03 URL\uff0c\u5e76\u5f00\u542f\u672c\u6761\u56de\u8c03\u534f\u8bae\u5bf9\u5e94\u7684\u5f00\u5173\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",(0,n.kt)("a",{parentName:"li",href:"../introduction"},"\u56de\u8c03\u8bf4\u660e")," \u6587\u6863\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u56de\u8c03\u7684\u65b9\u5411\u662f OpenIMServer \u5411 App \u540e\u53f0\u53d1\u8d77 HTTP/HTTPS POST \u8bf7\u6c42\u3002"),(0,n.kt)("li",{parentName:"ul"},"APP \u4e1a\u52a1\u670d\u52a1\u7aef\u9700\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u54cd\u5e94\u6b64\u8bf7\u6c42\u3002")),(0,n.kt)("h2",{id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"},"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7fa4\u7ec4\u7ba1\u7406\u5458\u6216\u62e5\u6709\u8005\u901a\u8fc7\u5ba2\u6237\u7aef\u5c1d\u8bd5\u8e22\u51fa\u67d0\u4e2a\u6216\u67d0\u4e9b\u7fa4\u7ec4\u6210\u5458\u3002")),(0,n.kt)("h2",{id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a"},"\u56de\u8c03\u53d1\u751f\u65f6\u673a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OpenIMServer \u6536\u5230\u8e22\u51fa\u7fa4\u7ec4\u6210\u5458\u7684\u8bf7\u6c42\u4e4b\u540e\uff0c\u5904\u7406\u8be5\u8bf7\u6c42\u524d\u3002")),(0,n.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,n.kt)("h3",{id:"\u8bf7\u6c42-url-\u793a\u4f8b"},"\u8bf7\u6c42 URL \u793a\u4f8b"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4e2d App \u914d\u7f6e\u7684\u56de\u8c03 URL \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"http://www.example.com/callbackCommand?contenttype=json"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://www.example.com/kickGroupMemberCommand?contenttype=json\n")),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"http"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u534f\u8bae\u4e3a HTTP\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e3a POST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.example.com"},"www.example.com")),(0,n.kt)("td",{parentName:"tr",align:null},"configy.yaml \u4e2d\u7684 callback.url \u5b57\u6bb5\uff0c\u57df\u540d\u6216\u4e3b\u673a\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CallbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b64\u5904\u4e3a\uff1akickGroupMemberCommand")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,n.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c\u4e3a\uff1aJSON")))),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"operationID\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a")))),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u5305\u793a\u4f8b"},"\u8bf7\u6c42\u5305\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "kickGroupMemberCommand",\n  "groupID": "G001",\n  "kickedUserIDs": ["user123", "user456"],\n  "reason": "Violation of group rules"\n}\n')),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u547d\u4ee4\uff0c\u8fd9\u91cc\u662f\u8e22\u51fa\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7ec4\u7684\u552f\u4e00\u6807\u8bc6\u7b26")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kickedUserIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"[]string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab\u8e22\u51fa\u7684\u7fa4\u7ec4\u6210\u5458\u7684\u7528\u6237ID\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reason"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8e22\u51fa\u6210\u5458\u7684\u539f\u56e0")))),(0,n.kt)("h2",{id:"\u5e94\u7b54\u5305\u793a\u4f8b"},"\u5e94\u7b54\u5305\u793a\u4f8b"),(0,n.kt)("h3",{id:"\u5141\u8bb8\u8e22\u51fa"},"\u5141\u8bb8\u8e22\u51fa"),(0,n.kt)("p",null,"\u5141\u8bb8\u8e22\u51fa\u6307\u5b9a\u7684\u7fa4\u7ec4\u6210\u5458\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actionCode": 0,\n  "errCode": 0,\n  "errMsg": "Success",\n  "errDlt": "",\n  "nextCode": "nextCodeValue"\n}\n')),(0,n.kt)("h2",{id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e1a\u52a1\u7cfb\u7edf\u7684\u56de\u8c03\u662f\u5426\u6b63\u786e\u6267\u884c\u3002",(0,n.kt)("inlineCode",{parentName:"td"},"0"),"\u8868\u793a\u64cd\u4f5c\u6210\u529f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\uff0c\u6b64\u5904\u586b0\u4ee3\u8868\u5ffd\u7565\u56de\u8c03\u7ed3\u679c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u7b80\u5355\u9519\u8bef\u4fe1\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0b\u4e00\u6b65\u6267\u884c\u6307\u4ee4\uff0c",(0,n.kt)("inlineCode",{parentName:"td"},"1"),"\u8868\u793a\u62d2\u7edd\u7ee7\u7eed\u6267\u884c\uff0cactionCode\u7b49\u4e8e",(0,n.kt)("inlineCode",{parentName:"td"},"0"),"\u65f6\u8bbe\u7f6e\u3002")))))}s.isMDXComponent=!0}}]);