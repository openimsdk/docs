"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[81847],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=o(n),k=r,g=m["".concat(u,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},19080:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>o,toc:()=>m});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:2},u="inviteUserToGroup",o={unversionedId:"api/group/inviteUserToGroup",id:"api/group/inviteUserToGroup",title:"inviteUserToGroup",description:"Function Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/group/inviteUserToGroup.mdx",sourceDirName:"api/group",slug:"/api/group/inviteUserToGroup",permalink:"/sdks/api/group/inviteUserToGroup",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/group/inviteUserToGroup.mdx",tags:[],version:"current",lastUpdatedAt:1741148961,formattedLastUpdatedAt:"Mar 5, 2025",sidebarPosition:4,frontMatter:{sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"joinGroup",permalink:"/sdks/api/group/joinGroup"},next:{title:"getJoinedGroupList",permalink:"/sdks/api/group/getJoinedGroupList"}},s={},m=[{value:"Function Introduction",id:"function-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Result",id:"return-result",level:3},{value:"GroupInviteResult",id:"groupinviteresult",level:4},{value:"Code Example",id:"code-example",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"OIMSimpleResultInfo",id:"oimsimpleresultinfo",level:4},{value:"Code Example",id:"code-example-1",level:3},{value:"Function Prototype",id:"function-prototype-2",level:3},{value:"Input Parameters",id:"input-parameters-2",level:3},{value:"Return Result",id:"return-result-2",level:3},{value:"Code Example",id:"code-example-2",level:3},{value:"Function Prototype",id:"function-prototype-3",level:3},{value:"Input Parameters",id:"input-parameters-3",level:3},{value:"Return Result",id:"return-result-3",level:3},{value:"Code Example",id:"code-example-3",level:3},{value:"Function Prototype",id:"function-prototype-4",level:3},{value:"Input Parameters",id:"input-parameters-4",level:3},{value:"Return Result",id:"return-result-4",level:3},{value:"Code Example",id:"code-example-4",level:3},{value:"Function Prototype",id:"function-prototype-5",level:3},{value:"Input Parameters",id:"input-parameters-5",level:3},{value:"Return Result",id:"return-result-5",level:3},{value:"Code Example",id:"code-example-5",level:3},{value:"Function Prototype",id:"function-prototype-6",level:3},{value:"Input Parameter",id:"input-parameter",level:3},{value:"Return Result",id:"return-result-6",level:3},{value:"Code Example",id:"code-example-6",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},k=d("Tabs"),g=d("TabItem"),N={toc:m},c="wrapper";function b(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(c,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},N,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inviteusertogroup"},"inviteUserToGroup"),(0,a.kt)("h2",{id:"function-introduction"},"Function Introduction"),(0,a.kt)("admonition",{title:"Description",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Invite users to the group.")),(0,a.kt)("admonition",{title:"Note",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The result of the invitation to join the group is determined by the caller's identity and the ",(0,a.kt)("a",{parentName:"p",href:"../../enum/groupVerification"},"group verification option"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Related Callbacks"),":\n",(0,a.kt)("a",{parentName:"p",href:"../../callback/onJoinedGroupAdded"},"onJoinedGroupAdded"),"\n",(0,a.kt)("a",{parentName:"p",href:"../../callback/onGroupMemberAdded"},"onGroupMemberAdded"),"\n",(0,a.kt)("a",{parentName:"p",href:"/sdks/callback/onGroupApplicationAdded"},"onGroupApplicationAdded"))),(0,a.kt)(k,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,a.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Future<List<GroupInviteResult>> inviteUserToGroup({\n    required String groupID,\n    required List<String> userIDList,\n    String? reason,\n    String? operationID,\n  })\n")),(0,a.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupID"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,a.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of userIDs to be invited")))),(0,a.kt)("h3",{id:"return-result"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~"),(0,a.kt)("td",{parentName:"tr",align:null},"List<GroupInviteResult",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Success return")))),(0,a.kt)("h4",{id:"groupinviteresult"},"GroupInviteResult"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userID"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"User ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"result"),(0,a.kt)("td",{parentName:"tr",align:null},"Int"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation result")))),(0,a.kt)("h3",{id:"code-example"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    List<GroupInviteResult> list =  await OpenIM.iMManager.groupManager.inviteUserToGroup(\n        groupID: '',\n        userIDList: [],\n      );\n     // todo\n"))),(0,a.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)inviteUserToGroup:(NSString *)groupID\n                   reason:(NSString *)reason\n                  usersID:(NSArray <NSString *> *)usersID\n                onSuccess:(nullable OIMSimpleResultsCallback)onSuccess\n                onFailure:(nullable OIMFailureCallback)onFailure;\n\n")),(0,a.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupID"),(0,a.kt)("td",{parentName:"tr",align:null},"NSString"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason"),(0,a.kt)("td",{parentName:"tr",align:null},"NSString"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"usersID"),(0,a.kt)("td",{parentName:"tr",align:null},"NSArray <NSString ","*",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of userIDs to be invited")))),(0,a.kt)("h3",{id:"return-result-1"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,a.kt)("td",{parentName:"tr",align:null},"NSArray<OIMSimpleResultInfo ","*"," >"),(0,a.kt)("td",{parentName:"tr",align:null},"Success return")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"Failure return")))),(0,a.kt)("h4",{id:"oimsimpleresultinfo"},"OIMSimpleResultInfo"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userID"),(0,a.kt)("td",{parentName:"tr",align:null},"NSString"),(0,a.kt)("td",{parentName:"tr",align:null},"User ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"result"),(0,a.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation result")))),(0,a.kt)("h3",{id:"code-example-1"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'\n[OIMManager.manager inviteUserToGroup:@""\n                               reason:@""\n                              usersID:@[]\n                          onSuccess:^(NSArray<OIMSimpleResultInfo *> * _Nullable results) {\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n}];\n\n'))),(0,a.kt)(g,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-2"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public void inviteUserToGroup(OnBase<List<GroupInviteResult>> callBack, String groupId, List<String> uidList, String reason)\n")),(0,a.kt)("h3",{id:"input-parameters-2"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callBack"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase"),"<List<ResultInfo",">",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uidList"),(0,a.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of invitees' IDs")))),(0,a.kt)("h3",{id:"return-result-2"},"Return Result"),(0,a.kt)("h3",{id:"code-example-2"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0}," OpenIMClient.getInstance().groupManager.inviteUserToGroup(new OnBase<List<ResultInfo>>() {\n            @Override\n            public void onError(int code, String error) {\n\n            }\n\n            @Override\n            public void onSuccess(List<GroupInviteResult> data) {\n\n            }\n        },groupId,uidList,reason)\n"))),(0,a.kt)(g,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-3"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.inviteUserToGroup({\n  groupID: string;\n  reason: string;\n  userIDList: string[];\n}, operationID?: string): Promise<WsResponse>\n")),(0,a.kt)("h3",{id:"input-parameters-3"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of userIDs to be invited")))),(0,a.kt)("h3",{id:"return-result-3"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Success callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,a.kt)("h3",{id:"code-example-3"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from '@openim/wasm-client-sdk';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { getSDK } from '@openim/client-sdk';\n// const IMSDK = getSDK();\n\nIMSDK.inviteUserToGroup({\n  groupID: '',\n  reason: '',\n  userIDList: ['userID'],\n})\n  .then(() => {\n    // Call succeeded\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Call failed\n  });\n"))),(0,a.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-4"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('inviteUserToGroup', operationID: string, {\n  groupID: string;\n  reason: string;\n  userIDList: string[];\n}): Promise<void>\n")),(0,a.kt)("h3",{id:"input-parameters-4"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Operation ID, used for troubleshooting, should be unique. Recommended to use the current time combined with a random number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of userIDs to be invited")))),(0,a.kt)("h3",{id:"return-result-4"},"Return Result"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill")," package, functions are made into Promises. When calling, use ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," to determine and handle success and failure callbacks.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<void",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Success callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,a.kt)("h3",{id:"code-example-4"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('inviteUserToGroup', IMSDK.uuid(), {\n  groupID: '',\n  reason: '',\n  userIDList: ['userID'],\n})\n  .then(() => {\n    // Call succeeded\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Call failed\n  });\n"))),(0,a.kt)(g,{value:"React-Native",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-5"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.inviteUserToGroup({\n  groupID: string,\n  reason: string,\n  userIDList: string[], \n}, operationID: string): Promise<void>\n")),(0,a.kt)("h3",{id:"input-parameters-5"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of userIDs to be invited")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem location, keep unique, suggest using current time and random number")))),(0,a.kt)("h3",{id:"return-result-5"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<void",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback on successful call")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback on failed call")))),(0,a.kt)("h3",{id:"code-example-5"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.inviteUserToGroup({\n  groupID: '',\n  reason: '',\n  userIDList: ['userID'],\n}, 'operationID')\n  .then(() => {\n    // Call succeeded\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Call failed\n  });\n"))),(0,a.kt)(g,{value:"Unity",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-6"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static void InviteUserToGroup(OnBase<bool> cb, string groupId, string reason, string[] userIdList)\n\n")),(0,a.kt)("h3",{id:"input-parameter"},"Input Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cb"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason"),(0,a.kt)("td",{parentName:"tr",align:null},"sting"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitation message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userIdList"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Array of userIDs to be invited")))),(0,a.kt)("h3",{id:"return-result-6"},"Return Result"),(0,a.kt)("h3",{id:"code-example-6"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.InviteUserToGroup((suc,errCode,errMsg)=>{\n\n},groupId,uidList,reason);\n")))))}b.isMDXComponent=!0}}]);