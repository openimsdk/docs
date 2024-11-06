"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[8389],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},O=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),O=i,f=d["".concat(c,".").concat(O)]||d[O]||u[O]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=O;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}O.displayName="MDXCreateElement"},35311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});t(67294);var r=t(3905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={title:"Android",hide_title:!0,sidebar_position:2},c=void 0,l={unversionedId:"quickstart/android",id:"quickstart/android",title:"Android",description:"\ud83d\ude80\u4f7f\u7528 Demo",source:"@site/docs/sdks/quickstart/android.mdx",sourceDirName:"quickstart",slug:"/quickstart/android",permalink:"/zh-Hans/sdks/quickstart/android",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/android.mdx",tags:[],version:"current",lastUpdatedAt:1730887211,formattedLastUpdatedAt:"2024\u5e7411\u67086\u65e5",sidebarPosition:2,frontMatter:{title:"Android",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/zh-Hans/sdks/quickstart/ios"},next:{title:"Unity",permalink:"/zh-Hans/sdks/quickstart/unity"}},p={},d=[{value:"\ud83d\ude80\u4f7f\u7528 Demo",id:"\u4f7f\u7528-demo",level:2},{value:"\u96c6\u6210\u6b65\u9aa4",id:"\u96c6\u6210\u6b65\u9aa4",level:2},{value:"1. \u6dfb\u52a0\u4f9d\u8d56",id:"1-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"2. \u5bfc\u5165\u5305",id:"2-\u5bfc\u5165\u5305",level:3},{value:"3. \u521d\u59cb\u5316",id:"3-\u521d\u59cb\u5316",level:3},{value:"4. \u8bbe\u7f6e\u76d1\u542c\u5668",id:"4-\u8bbe\u7f6e\u76d1\u542c\u5668",level:3},{value:"5. \u767b\u5f55",id:"5-\u767b\u5f55",level:3}],u={toc:d},O="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(O,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-demo"},"\ud83d\ude80\u4f7f\u7528 Demo"),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u9996\u5148\u8fd0\u884c\u6211\u4eec\u4e3a\u60a8\u51c6\u5907\u7684\u6846\u67b6\u76f8\u5173\u7684\u793a\u4f8b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/Open-IM-Android-Demo"},"DEMO")," \u3002\u8fd9\u4e0d\u4ec5\u53ef\u4ee5\u8ba9\u60a8\u76f4\u89c2\u4f53\u9a8c OpenIM SDK \u7684\u529f\u80fd\uff0c\u8fd8\u5c06\u5e2e\u52a9\u60a8\u5728\u5b9e\u9645\u96c6\u6210\u8fc7\u7a0b\u4e2d\u8fc5\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u96c6\u6210\u6b65\u9aa4"},"\u96c6\u6210\u6b65\u9aa4"),(0,r.kt)("h3",{id:"1-\u6dfb\u52a0\u4f9d\u8d56"},"1. \u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"implementation 'io.openim:android-sdk:latest@aar'\nimplementation 'io.openim:core-sdk:latest@aar'\nimplementation 'com.google.code.gson:gson:2.9.0'\n")),(0,r.kt)("h3",{id:"2-\u5bfc\u5165\u5305"},"2. \u5bfc\u5165\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import io.openim.android.sdk.OpenIMClient\n")),(0,r.kt)("h3",{id:"3-\u521d\u59cb\u5316"},"3. \u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"InitConfig initConfig=new InitConfig(\n            Constant.getImApiUrl(),//SDK api\u5730\u5740\n            Constant.getImWsUrl(),//SDK WebSocket\u5730\u5740\n            getStorageDir(),//SDK\u6570\u636e\u5e93\u5b58\u50a8\u76ee\u5f55\n            );\n\n OpenIMClient.getInstance().initSDK(\n            application, //Application\n            initConfig,//InitConfig\n            new OnConnListener() {\n                @Override\n                public void onConnectFailed(long code, String error) {\n                    //\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\n                }\n\n                @Override\n                public void onConnectSuccess() {\n                    //\u8fde\u63a5\u670d\u52a1\u5668\u6210\u529f\n                }\n\n                @Override\n                public void onConnecting() {\n                    //\u8fde\u63a5\u670d\u52a1\u5668\u4e2d...\n                }\n\n                @Override\n                public void onKickedOffline() {\n                    //\u5f53\u524d\u7528\u6237\u88ab\u8e22\u4e0b\u7ebf\n                }\n\n                @Override\n                public void onUserTokenExpired() {\n                    //\u767b\u5f55\u7968\u636e\u5df2\u7ecf\u8fc7\u671f\n                }\n            });\n")),(0,r.kt)("h3",{id:"4-\u8bbe\u7f6e\u76d1\u542c\u5668"},"4. \u8bbe\u7f6e\u76d1\u542c\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Set listener\n// sdk\u91c7\u7528\u7684set\u65b9\u5f0f\uff0c\u591a\u6b21set\u4f1a\u66ff\u6362\u4e0a\u6b21set,\u5efa\u8bae\u4f7f\u7528\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u4f7f\u7528add\u65b9\u5f0f\u5206\u53d1\u6267\u884c\u56de\u8c03,\u53c2\u8003demo IMEvent\u8fd9\u4e2a\u7c7b\n\n    // \u5f53\u524d\u767b\u5f55\u7528\u6237\u8d44\u6599\u53d8\u66f4\u56de\u8c03\n   OpenIMClient.getInstance().userInfoManager.setOnUserListener(info -> {});\n   // \u6536\u5230\u65b0\u6d88\u606f\uff0c\u5df2\u8bfb\u56de\u6267\uff0c\u6d88\u606f\u64a4\u56de\u76d1\u542c\u3002\n   OpenIMClient.getInstance().messageManager.setAdvancedMsgListener(new OnAdvanceMsgListener() { }\n   // \u597d\u5173\u7cfb\u53d1\u751f\u53d8\u5316\u76d1\u542c\n   OpenIMClient.getInstance().friendshipManager.setOnFriendshipListener(new OnFriendshipListener() {}\n   // \u4f1a\u8bdd\u65b0\u589e\u6216\u6539\u53d8\u76d1\u542c\n   OpenIMClient.getInstance().conversationManager.setOnConversationListener(new OnConversationListener() {}\n   // \u7fa4\u7ec4\u5173\u7cfb\u53d1\u751f\u6539\u53d8\u76d1\u542c\n   OpenIMClient.getInstance().groupManager.setOnGroupListener(new OnGroupListener() {}\n   // \u4fe1\u4ee4\u76d1\u542c\n   OpenIMClient.getInstance().signalingManager.setSignalingListener(new OnSignalingListener() {}\n")),(0,r.kt)("h3",{id:"5-\u767b\u5f55"},"5. \u767b\u5f55"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u5148\u8bbe\u7f6e\u76d1\u542c\u5668\u540e\u767b\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"OpenIMClient.getInstance().login(new OnBase<String>() {\n          @Override\n          public void onError(int code, String error) {\n          }\n\n          @Override\n          public void onSuccess(String data) {\n          //\u5176\u4ed6api\u8c03\u7528\u5fc5\u987b\u4fdd\u8bc1\u767b\u5f55\u56de\u8c03\u6210\u529f\u540e\u64cd\u4f5c\n\n          }\n       }, userID, imToken);\n")))}f.isMDXComponent=!0}}]);