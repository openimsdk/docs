"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[52719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={sidebar_position:-1,toc_min_heading_level:2,toc_max_heading_level:2},o="setMessageListener",d={unversionedId:"api/message/setMessageListener",id:"api/message/setMessageListener",title:"setMessageListener",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/message/setMessageListener.mdx",sourceDirName:"api/message",slug:"/api/message/setMessageListener",permalink:"/zh-Hans/sdks/api/message/setMessageListener",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/setMessageListener.mdx",tags:[],version:"current",lastUpdatedAt:1741148961,formattedLastUpdatedAt:"2025\u5e743\u67085\u65e5",sidebarPosition:-1,frontMatter:{sidebar_position:-1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"\u6d88\u606f\u76f8\u5173",permalink:"/zh-Hans/sdks/api/message/"},next:{title:"setBatchMsgListener",permalink:"/zh-Hans/sdks/api/message/setBatchMsgListener"}},p={},c=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-3",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("Tabs"),g=u("TabItem"),v={toc:c},k="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},v,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setmessagelistener"},"setMessageListener"),(0,a.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,a.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8bbe\u7f6e\u6d88\u606f\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5bf9\u4e8e\u6d88\u606f\u53d8\u5316\u7684\u76f8\u5173\u4e8b\u4ef6\uff0c\u8fdb\u884c\u5f02\u6b65\u56de\u8c03\u901a\u77e5\uff0c\u4ee5\u4fbf UI \u80fd\u53ca\u65f6\u611f\u77e5\u5e76\u5904\u7406\u3002")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\uff081\uff09\u5728 initSDK \u4e4b\u540e\u7acb\u523b\u8c03\u7528\uff1b",(0,a.kt)("br",{parentName:"p"}),"\n","\uff082\uff09\u53ea\u80fd\u8c03\u7528\u4e00\u6b21\u3002")),(0,a.kt)(m,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,a.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Future setAdvancedMsgListener(OnAdvancedMsgListener listener)\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"listener"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/advancedMsgListener"},"OnAdvancedMsgListener")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIM.iMManager.messageManager.setAdvancedMsgListener(OnAdvancedMsgListener(\n      onMsgDeleted: (Message msg){},\n      onNewRecvMessageRevoked: (RevokedInfo info){},\n      onRecvC2CReadReceipt: (List<ReadReceiptInfo> list){},\n      onRecvGroupReadReceipt: (List<ReadReceiptInfo> list){},\n      onRecvMessageExtensionsAdded: (String msgID, List<KeyValue> list){},\n      onRecvMessageExtensionsChanged: (String msgID, List<KeyValue> list){},\n      onRecvMessageExtensionsDeleted: (String msgID, List<String> list){},\n      onRecvOfflineNewMessages: (List<Message> list){},\n      onRecvNewMessage: (Message msg){},\n    ));\n"))),(0,a.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"\n- (void)addAdvancedMsgListener:(id<OIMAdvancedMsgListener>)listener NS_SWIFT_NAME(addAdvancedMsgListener(listener:));\n\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"listener"),(0,a.kt)("td",{parentName:"tr",align:null},"id < ",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/advancedMsgListener"},"OIMAdvancedMsgListener")," >"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n[OIMManager.callbacker addAdvancedMsgListener:self];\n\n"))),(0,a.kt)(g,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    public void setAdvancedMsgListener(OnAdvanceMsgListener listener)\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"listener"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/advancedMsgListener"},"OnAdvancedMsgListener")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"     OpenIMClient.getInstance().messageManager.setAdvancedMsgListener(new OnAdvanceMsgListener() {\n            @Override\n            public void onRecvNewMessage(Message msg) {\n\n            }\n\n            @Override\n            public void onRecvC2CReadReceipt(List<ReadReceiptInfo> list) {\n\n            }\n\n            @Override\n            public void onRecvGroupMessageReadReceipt(List<ReadReceiptInfo> list) {\n\n            }\n\n            @Override\n            public void onRecvMessageRevoked(String msgId) {\n\n            }\n\n            @Override\n            public void onRecvMessageRevokedV2(RevokedInfo info) {\n\n            }\n\n            @Override\n            public void onRecvMessageExtensionsChanged(String msgID, List<KeyValue> list) {\n\n            }\n\n            @Override\n            public void onRecvMessageExtensionsDeleted(String msgID, List<String> list) {\n\n            }\n\n            @Override\n            public void onRecvMessageExtensionsAdded(String msgID, List<KeyValue> list) {\n\n            }\n\n            @Override\n            public void onMsgDeleted(Message message) {\n\n            }\n\n            @Override\n            public void onRecvOfflineNewMessages(List<Message> list) {\n\n            }\n        });\n"))),(0,a.kt)(g,{value:"Web",mdxType:"TabItem"},(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u767b\u5f55\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u76d1\u542c\uff0c",(0,a.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/advancedMsgListener"},"\u6d88\u606f\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1")))),(0,a.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u521d\u59cb\u5316\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e \u56de\u8c03\u4f1a\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"globalEvent"),"\u4f20\u9012\u5230\u5ba2\u6237\u7aef\uff0c",(0,a.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/advancedMsgListener"},"\u6d88\u606f\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1")))),(0,a.kt)(g,{value:"React-Native",mdxType:"TabItem"},(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u767b\u5f55\u6210\u529f\u540e\u81ea\u52a8\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u76d1\u542c\uff0c",(0,a.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/listener/batchMsgListener"},"\u6d88\u606f\u4e8b\u4ef6\u8be6\u60c5\u53c2\u89c1")))),(0,a.kt)(g,{value:"Unity",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-3"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"public static void SetAdvancedMsgListener(IAdvancedMsgListener l)\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"l"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/advancedMsgListener"},"OnAdvancedMsgListener")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.SetAdvancedMsgListener(listener);\n")))))}b.isMDXComponent=!0}}]);