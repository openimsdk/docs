"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[5332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={sidebar_position:2,title:"\u56de\u8c03\u4f8b\u5b50",hide_title:!0},c="\u57fa\u4e8eOpenIM \u5b9e\u73b0\u804a\u5929\u673a\u5668\u4eba\u529f\u80fd",s={unversionedId:"webhooks/example",id:"webhooks/example",title:"\u56de\u8c03\u4f8b\u5b50",description:"\u7b80\u8981\u63cf\u8ff0",source:"@site/docs/restapi/webhooks/example.mdx",sourceDirName:"webhooks",slug:"/webhooks/example",permalink:"/zh-Hans/restapi/webhooks/example",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/example.mdx",tags:[],version:"current",lastUpdatedAt:1710150757,formattedLastUpdatedAt:"2024\u5e743\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u56de\u8c03\u4f8b\u5b50",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u56de\u8c03\u8bf4\u660e",permalink:"/zh-Hans/restapi/webhooks/introduction"},next:{title:"\u7533\u8bf7\u52a0\u5165\u7fa4\u7ec4\u4e4b\u524d\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/group/applyJoinGroupBefore"}},p={},u=[{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"1. \u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"1-\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"2. \u521b\u5efa\u804a\u5929\u673a\u5668\u4eba\u8d26\u53f7",id:"2-\u521b\u5efa\u804a\u5929\u673a\u5668\u4eba\u8d26\u53f7",level:2},{value:"3. \u7f16\u5199 <strong>afterSendSingleMsg</strong> \u63a5\u53e3",id:"3-\u7f16\u5199-aftersendsinglemsg-\u63a5\u53e3",level:2},{value:"4. \u6548\u679c\u5c55\u793a",id:"4-\u6548\u679c\u5c55\u793a",level:2}],m={toc:u},f="wrapper";function b(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)(f,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u57fa\u4e8eopenim-\u5b9e\u73b0\u804a\u5929\u673a\u5668\u4eba\u529f\u80fd"},"\u57fa\u4e8eOpenIM \u5b9e\u73b0\u804a\u5929\u673a\u5668\u4eba\u529f\u80fd"),(0,r.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,r.kt)("p",null,"\u4f7f\u7528 OpenIM \u4e2d\u7684 Webhook \u673a\u5236\u5b9e\u73b0\u804a\u5929\u673a\u5668\u4eba\u529f\u80fd\u3002\u53d1\u9001\u6587\u672c\u6d88\u606f\u6216\u56fe\u7247\u6d88\u606f\u7ed9\u804a\u5929\u673a\u5668\u4eba\u540e\uff0c\u673a\u5668\u4eba\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u6d88\u606f\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u66ff\u6362\u6b64\u903b\u8f91\uff0c\u8c03\u7528LLM\u63a5\u53e3\uff0c\u4ee5\u5b9e\u73b0\u667a\u80fd\u95ee\u7b54\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"1-\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"1. \u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u53c2\u7167\u4e0b\u9762\u7684\u6a21\u677f\u4fee\u6539 open-im-server \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"config/config.yaml")," \u914d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PC Web Interface",src:n(32997).Z,width:"371",height:"333"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," \u4e3a\u56de\u8c03 URL\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"afterSendSingleMsg.enable")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," \u65f6\uff0c\u542f\u7528\u8be5\u56de\u8c03\u3002"))),(0,r.kt)("h2",{id:"2-\u521b\u5efa\u804a\u5929\u673a\u5668\u4eba\u8d26\u53f7"},"2. \u521b\u5efa\u804a\u5929\u673a\u5668\u4eba\u8d26\u53f7"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u767b\u5f55\u7ba1\u7406\u540e\u53f0\uff0c\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"../../guides/gettingStarted/quickTestServer"},"\u6b64\u6587\u6863"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u7528\u6237\u7ba1\u7406\u4e2d\u521b\u5efa\u804a\u5929\u673a\u5668\u4eba\u8d26\u53f7\uff0c\u5e76\u8bb0\u5f55\u8be5\u8d26\u53f7\u7684 ",(0,r.kt)("strong",{parentName:"li"},"userID"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u65b9\u4fbf\u4f53\u9a8c\uff0c\u53ef\u4ee5\u5c06\u6b64 ",(0,r.kt)("strong",{parentName:"li"},"userID")," \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u597d\u53cb\u3002")),(0,r.kt)("h2",{id:"3-\u7f16\u5199-aftersendsinglemsg-\u63a5\u53e3"},"3. \u7f16\u5199 ",(0,r.kt)("strong",{parentName:"h2"},"afterSendSingleMsg")," \u63a5\u53e3"),(0,r.kt)("p",null,"\u53c2\u8003\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a"),":"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u5c06\u4f8b\u5b50\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"li"},"robotics")," \u66ff\u6362\u4e3a\u7b2c ",(0,r.kt)("strong",{parentName:"li"},"2")," \u6b65\u4e2d\u83b7\u53d6\u7684 ",(0,r.kt)("strong",{parentName:"li"},"userID"),"\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Go"},'func (m *ChatApi) CallbackExample(c *gin.Context) {\n    // 1. Handling callbacks after sending a single chat message\n    msgInfo, err := handlingCallbackAfterSendMsg(c)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n\n    // 2. If the user receiving the message is a customer service bot, return the message.\n    // 2.1 UserID of the robot account\n    robotics := "robotics"\n\n    // 2.2 ChatRobot account validation and determining if messages are text and images\n    if msgInfo.SendID == robotics || msgInfo.RecvID != robotics {\n        return\n    }\n    if msgInfo.ContentType != constant.Picture && msgInfo.ContentType != constant.Text {\n        return\n    }\n\n    // 2.3 Get administrator token\n    adminToken, err := getAdminToken(c)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n\n    // 2.4 Get RobotAccount info\n    robUser, err := getRobotAccountInfo(c, adminToken.AdminToken, robotics)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n\n    // 2.5 Constructing the contents of the message field or invoking an LLM to implement AI-driven question answering.\n    mapStruct, err := contextToMap(c, msgInfo)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n\n    // 2.6 Send Message\n    err = sendMessage(c, adminToken.ImToken, robotics, msgInfo, robUser, mapStruct)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n}\n')),(0,r.kt)("p",null,"\u8be6\u7ec6\u4ee3\u7801\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/chat/blob/main/example/callback/callback.go"},"\u94fe\u63a5")),(0,r.kt)("h2",{id:"4-\u6548\u679c\u5c55\u793a"},"4. \u6548\u679c\u5c55\u793a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PC Web Interface",src:n(40338).Z,width:"588",height:"607"})))}b.isMDXComponent=!0},32997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config-4758c4b878c1af538e5f01394f420bd2.png"},40338:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/result-015cb7338598a6182110ee75ccdbb9e8.png"}}]);