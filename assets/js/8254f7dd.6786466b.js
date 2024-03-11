"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[5573],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),m=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=m(a),k=n,u=p["".concat(d,".").concat(k)]||p[k]||g[k]||s;return a?r.createElement(u,l(l({ref:t},o),{},{components:a})):r.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<s;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>p});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={sidebar_position:6,toc_min_heading_level:2,toc_max_heading_level:2},d="Message-Related",m={unversionedId:"api/message/index",id:"api/message/index",title:"Message-Related",description:"Module Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/message/index.mdx",sourceDirName:"api/message",slug:"/api/message/",permalink:"/sdks/api/message/",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/index.mdx",tags:[],version:"current",lastUpdatedAt:1710150757,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"deleteConversationAndDeleteAllMsg",permalink:"/sdks/api/conversation/deleteConversationAndDeleteAllMsg"},next:{title:"setMessageListener",permalink:"/sdks/api/message/setMessageListener"}},o={},p=[{value:"Module Overview",id:"module-overview",level:2}],g={toc:p},k="wrapper";function u(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"message-related"},"Message-Related"),(0,r.kt)("h2",{id:"module-overview"},"Module Overview"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SDK related to messaging")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Module Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Module Function Overview"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/setMessageListener"},"setMessageListener")),(0,r.kt)("td",{parentName:"tr",align:null},"Set message listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/setBatchMsgListener"},"setBatchMsgListener")),(0,r.kt)("td",{parentName:"tr",align:null},"Set batch message listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createTextMessage"},"createTextMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create text message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createTextAtMessage"},"createTextAtMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create @ message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createImageMessageFromFullPath"},"createImageMessageFromFullPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Create image message from absolute path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createImageMessageByURL"},"createImageMessageByURL")),(0,r.kt)("td",{parentName:"tr",align:null},"Create image message by uploading the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createImageMessageByFile"},"createImageMessageByFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Create image message using a file object (web)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createSoundMessageFromFullPath"},"createSoundMessageFromFullPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Create voice message from absolute path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createSoundMessageByURL"},"createSoundMessageByURL")),(0,r.kt)("td",{parentName:"tr",align:null},"Create voice message by uploading the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createSoundMessageByFile"},"createSoundMessageByFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Create voice message using a file object (web)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createVideoMessageFromFullPath"},"createVideoMessageFromFullPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Create video message from absolute path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createVideoMessageByURL"},"createVideoMessageByURL")),(0,r.kt)("td",{parentName:"tr",align:null},"Create video message by uploading the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createVideoMessageByFile"},"createVideoMessageByFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Create video message using a file object (web)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createFileMessageFromFullPath"},"createFileMessageFromFullPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Create file message from absolute path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createFileMessageByURL"},"createFileMessageByURL")),(0,r.kt)("td",{parentName:"tr",align:null},"Create file message by uploading the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createFileMessageByFile"},"createFileMessageByFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Create file message using a file object (web)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createMergeMessage"},"createMergeMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create combined message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createForwardMessage"},"createForwardMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create forwarded message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createLocationMessage"},"createLocationMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create location message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createQuoteMessage"},"createQuoteMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create quote message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createCardMessage"},"createCardMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create card message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createCustomMessage"},"createCustomMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create custom message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/createFaceMessage"},"createFaceMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Create emoji message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessage"},"sendMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Send message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss")),(0,r.kt)("td",{parentName:"tr",align:null},"Send message without SDK built-in OSS for multimedia file upload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/uploadFile"},"uploadFile")),(0,r.kt)("td",{parentName:"tr",align:null},"Upload file to SDK's initialized object storage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/typingStatusUpdate"},"typingStatusUpdate")),(0,r.kt)("td",{parentName:"tr",align:null},"Typing status update for private chat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/revokeMessage"},"revokeMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Revoke a message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/deleteMessage"},"deleteMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/deleteMessageFromLocalStorage"},"deleteMessageFromLocalStorage")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a message locally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/deleteAllMsgFromLocal"},"deleteAllMsgFromLocal")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete all messages locally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/deleteAllMsgFromLocalAndSvr"},"deleteAllMsgFromLocalAndSvr")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete all messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/searchLocalMessages"},"searchLocalMessages")),(0,r.kt)("td",{parentName:"tr",align:null},"Search for local messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/getAdvancedHistoryMessageList"},"getAdvancedHistoryMessageList")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve the message list within a conversation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/getAdvancedHistoryMessageListReverse"},"getAdvancedHistoryMessageListReverse")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve the message list in reverse within a conversation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/findMessageList"},"findMessageList")),(0,r.kt)("td",{parentName:"tr",align:null},"Find message list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/insertSingleMessageToLocalStorage"},"insertSingleMessageToLocalStorage")),(0,r.kt)("td",{parentName:"tr",align:null},"Insert a single chat message locally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/insertGroupMessageToLocalStorage"},"insertGroupMessageToLocalStorage")),(0,r.kt)("td",{parentName:"tr",align:null},"Insert a group chat message locally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/setMessageLocalEx"},"setMessageLocalEx")),(0,r.kt)("td",{parentName:"tr",align:null},"Set message extension information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/api/message/setAppBadge"},"setAppBadge")),(0,r.kt)("td",{parentName:"tr",align:null},"Set badge usage")))))}u.isMDXComponent=!0}}]);