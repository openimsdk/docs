"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[34505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,k=d["".concat(m,".").concat(g)]||d[g]||o[g]||l;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},99663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={sidebar_position:19,toc_min_heading_level:2,toc_max_heading_level:2},m="sendMessage",p={unversionedId:"api/message/sendMessage",id:"api/message/sendMessage",title:"sendMessage",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/message/sendMessage.mdx",sourceDirName:"api/message",slug:"/api/message/sendMessage",permalink:"/zh-Hans/sdks/api/message/sendMessage",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/sendMessage.mdx",tags:[],version:"current",lastUpdatedAt:1730887211,formattedLastUpdatedAt:"2024\u5e7411\u67086\u65e5",sidebarPosition:19,frontMatter:{sidebar_position:19,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"createFaceMessageWithIndex",permalink:"/zh-Hans/sdks/api/message/createFaceMessage"},next:{title:"sendMessageNotOss",permalink:"/zh-Hans/sdks/api/message/sendMessageNotOss"}},u={},d=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-3",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-4",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-4",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-5",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-5",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-5",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-5",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-6",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-6",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-6",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-6",level:3}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},g=o("Tabs"),k=o("TabItem"),N={toc:d},c="wrapper";function h(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},N,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sendmessage"},"sendMessage"),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u53d1\u9001\u6d88\u606f\u3002")),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u9700\u8981\u5148\u8c03\u7528createXXXMessage\u521b\u5efa\u4e00\u6761\u6d88\u606f\uff0ccreateXXXMessageByURL\u521b\u5efa\u7684\u6d88\u606f\u9700\u8981\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),"\u53d1\u9001\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"\u76f8\u5173\u56de\u8c03"),"\uff1a",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/callback/onNewConversation"},"onNewConversation"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/callback/onConversationChanged"},"onConversationChanged"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/callback/onRecvNewMessage"},"onRecvNewMessage"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/callback/onRecvNewMessages"},"onRecvNewMessages"),"   ")),(0,n.kt)(g,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future<Message> sendMessage({\n    required Message message,\n    required OfflinePushInfo offlinePushInfo,\n    String? userID,\n    String? groupID,\n    String? operationID,\n  })\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 user ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/offlinePushInfo"},"OfflinePushInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u6d88\u606f\u4f53")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    Message msg =  await OpenIM.iMManager.messageManager.sendMessage(message: message, offlinePushInfo: offlinePushInfo);\n    // todo\n"))),(0,n.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)sendMessage:(OIMMessageInfo *)message\n             recvID:(NSString * _Nullable)recvID\n            groupID:(NSString * _Nullable)groupID\n    offlinePushInfo:(OIMOfflinePushInfo * _Nullable)offlinePushInfo\n          onSuccess:(nullable OIMMessageInfoCallback)onSuccess\n         onProgress:(nullable OIMNumberCallback)onProgress\n          onFailure:(nullable OIMFailureCallback)onFailure;\n\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"OIMMessageInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"recvID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSSting"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 user ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSSting"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/offlinePushInfo"},"OIMOfflinePushInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u6d88\u606f\u4f53")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"OIMMessageInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onProgress"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8fdb\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,n.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5931\u8d25\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'\nOIMMessageInfo *testMessage = [OIMMessageInfo createTextMessage:@"test"];\n\n[OIMManager.manager sendMessage:testMessage\n                         recvID:@""\n                        groupID:@""\n                offlinePushInfo:nil\n                      onSuccess:^(OIMMessageInfo * _Nullable message) {\n} onProgress:^(NSInteger number) {\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n}];\n\n'))),(0,n.kt)(k,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    public void sendMessage(OnMsgSendCallback base, Message message, String recvUid, String recvGid, OfflinePushInfo offlinePushInfo)\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-2"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base"),(0,n.kt)("td",{parentName:"tr",align:null},"OnMsgSendCallback"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 user ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/offlinePushInfo"},"OfflinePushInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u6d88\u606f\u4f53")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"      OpenIMClient.getInstance().messageManager.sendMessage( new OnMsgSendCallback(){\n\n              @Override\n              public void onError(int code, String error) {\n                  //\u53d1\u9001\u5931\u8d25\n              }\n\n              @Override\n              public void onProgress(long progress) {\n                    //\u53d1\u9001\u8fdb\u5ea6\n              }\n\n              @Override\n              public void onSuccess(Message s) {\n                     //\u53d1\u9001\u6210\u529f\n              }\n          },  message,  recvUid,  recvGid,  offlinePushInfo);\n"))),(0,n.kt)(k,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-3"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.sendMessage({\n  recvID: string;\n  groupID: string;\n  offlinePushInfo?: OfflinePush;\n  message: MessageItem;\n}, operationID?: string): Promise<WsResponse<MessageItem>>\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-3"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"recvID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 user ID\uff0c\u53d1\u9001\u7fa4\u6d88\u606f\u65f6\u4f20\u7a7a\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 group ID\uff0c\u53d1\u9001\u5355\u804a\u6d88\u606f\u65f6\u4f20\u7a7a\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/offlinePushInfo"},"OfflinePushInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u6d88\u606f\u4f53")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem"),">",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WsResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from '@openim/wasm-client-sdk';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.sendMessage({\n  recvID: \"userID\",\n  groupID: \"\",\n  message: {\n    // MessageItem\n    ...\n  }\n})\n  .then(({ data }) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,n.kt)(k,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-4"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('sendMessage', operationID: string, {\n    recvID: string;\n    groupID: string;\n    offlinePushInfo?: OfflinePush;\n    message: MessageItem;\n}): Promise<void>\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-4"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"recvID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 user ID\uff0c\u53d1\u9001\u7fa4\u6d88\u606f\u65f6\u4f20\u7a7a\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 group ID\uff0c\u53d1\u9001\u5355\u804a\u6d88\u606f\u65f6\u4f20\u7a7a\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/offlinePushInfo"},"OfflinePushInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u6d88\u606f\u4f53")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill"),"\u5305\u5c06\u51fd\u6570 Promise \u5316\uff0c\u8c03\u7528\u65f6\u9700\u8981\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"then"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"catch"),"\u5224\u65ad\u5e76\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\u56de\u8c03\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<void",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-4"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('sendMessage', IMSDK.uuid(), {\n  recvID: \"userID\",\n  groupID: \"\",\n  message: {\n    // MessageItem\n    ...\n  },\n  offlinePushInfo: {\n    title: 'you have a new message',\n    desc: 'new message',\n    ex: '',\n    iOSPushSound: '+1',\n    iOSBadgeCount: true,\n  }\n})\n  .then((data) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,n.kt)(k,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-5"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.sendMessage({\n  recvID: string,\n  groupID: string,\n  offlinePushInfo?: OfflinePush,\n  message: MessageItem,\n}, operationID: string): Promise<void>\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-5"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"recvID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 user ID\uff0c\u53d1\u9001\u7fa4\u6d88\u606f\u65f6\u4f20\u7a7a\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 group ID\uff0c\u53d1\u9001\u5355\u804a\u6d88\u606f\u65f6\u4f20\u7a7a\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/offlinePushInfo"},"OfflinePushInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-5"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<void",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-5"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.sendMessage({\n  recvID: \"userID\",\n  groupID: \"\",\n  message: {\n    // MessageItem\n    ...\n  },\n  offlinePushInfo: {\n    title: 'you have a new message',\n    desc: 'new message',\n    ex: '',\n    iOSPushSound: '+1',\n    iOSBadgeCount: true,\n  }\n}, 'operationID')\n  .then((data) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,n.kt)(k,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-6"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static void SendMessage(IMsgSendCallBack cb, Message message, string recvId, string groupId, OfflinePushInfo offlinePushInfo,bool isOnlineOnly)\n\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-6"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cb"),(0,n.kt)("td",{parentName:"tr",align:null},"IMsgSendCallBack"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userId"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 user ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupId"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/offlinePushInfo"},"OfflinePushInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u6d88\u606f\u4f53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isOnlineOnly"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8005\u5728\u7ebf\u624d\u80fd\u6536\u5230\uff0c\u5426\u5219\u5c06\u4f1a\u4e22\u5931")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-6"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-6"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\nvar callback = new MsgSendCallBack() // \u5b9e\u73b0IMsgSendCallBack\u63a5\u53e3\nIMSDK.SendMessage(callback,msg ,recvId,groupId,new OfflinePushInfo(){},false);\n\n")))))}h.isMDXComponent=!0}}]);