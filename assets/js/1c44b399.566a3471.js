"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[54387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},p="RecvMsgOpt",u={unversionedId:"enum/recvMsgOpt",id:"enum/recvMsgOpt",title:"RecvMsgOpt",description:"In User Information under globalRecvMsgOpt, globally control whether to receive offline push notifications.",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/enum/recvMsgOpt.mdx",sourceDirName:"enum",slug:"/enum/recvMsgOpt",permalink:"/sdks/enum/recvMsgOpt",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/enum/recvMsgOpt.mdx",tags:[],version:"current",lastUpdatedAt:1706860170,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"IMPlatformID",permalink:"/sdks/enum/platform"},next:{title:"RoleLevel",permalink:"/sdks/enum/roleLevel"}},s={},m=[{value:"Conversation Message Receive Options",id:"conversation-message-receive-options",level:2},{value:"ReceiveMessageOpt",id:"receivemessageopt",level:3},{value:"OIMReceiveMessageOpt",id:"oimreceivemessageopt",level:3},{value:"Opt",id:"opt",level:3},{value:"MessageReceiveOptType",id:"messagereceiveopttype",level:3},{value:"MessageReceiveOptType",id:"messagereceiveopttype-1",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Tabs"),g=c("TabItem"),k={toc:m},b="wrapper";function v(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(b,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recvmsgopt"},"RecvMsgOpt"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In ",(0,r.kt)("a",{parentName:"p",href:"/sdks/class/user/userInfo"},"User Information")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"globalRecvMsgOpt"),", globally control whether to receive offline push notifications.",(0,r.kt)("br",{parentName:"p"}),"\n","In ",(0,r.kt)("a",{parentName:"p",href:"/sdks/class/conversation/conversationInfo"},"Conversation")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"recvMsgOpt"),", besides controlling whether to receive offline push for that conversation, it also controls whether the unread count of that conversation is included in the total unread count.")),(0,r.kt)("h2",{id:"conversation-message-receive-options"},"Conversation Message Receive Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Enum Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Normally receive messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Receive messages, but no offline push. When in conversation, this conversation's unread count is not included in the total unread count")))),(0,r.kt)(d,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"receivemessageopt"},"ReceiveMessageOpt"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Enum Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receive"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notReceive"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notNotify"),(0,r.kt)("td",{parentName:"tr",align:null},"2"))))),(0,r.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"oimreceivemessageopt"},"OIMReceiveMessageOpt"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Enum Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OIMReceiveMessageOptReceive"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OIMReceiveMessageOptNotReceive"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OIMReceiveMessageOptNotNotify"),(0,r.kt)("td",{parentName:"tr",align:null},"2"))))),(0,r.kt)(g,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"opt"},"Opt"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Enum Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NORMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotReceiveMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReceiveNotNotifyMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"2"))))),(0,r.kt)(g,{value:"Web",mdxType:"TabItem"},(0,r.kt)("h3",{id:"messagereceiveopttype"},"MessageReceiveOptType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Enum Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Normal"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotReceive"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotNotify"),(0,r.kt)("td",{parentName:"tr",align:null},"2"))))),(0,r.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("h3",{id:"messagereceiveopttype-1"},"MessageReceiveOptType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Enum Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Normal"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotReceive"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotNotify"),(0,r.kt)("td",{parentName:"tr",align:null},"2")))))))}v.isMDXComponent=!0}}]);