"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[69529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"uni-app",hide_title:!0,sidebar_position:6},p=void 0,s={unversionedId:"quickstart/uniapp",id:"quickstart/uniapp",title:"uni-app",description:"\ud83d\ude80 Usage Demo",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/quickstart/uniapp.mdx",sourceDirName:"quickstart",slug:"/quickstart/uniapp",permalink:"/sdks/quickstart/uniapp",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/uniapp.mdx",tags:[],version:"current",lastUpdatedAt:1744272715,formattedLastUpdatedAt:"Apr 10, 2025",sidebarPosition:6,frontMatter:{title:"uni-app",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Electron",permalink:"/sdks/quickstart/electron"},next:{title:"Mini Program",permalink:"/sdks/quickstart/miniProgram"}},u={},c=[{value:"\ud83d\ude80 Usage Demo",id:"-usage-demo",level:2},{value:"\u2757\ufe0fCommon Questions",id:"\ufe0fcommon-questions",level:2},{value:"1. Developing Only H5 and Mini Programs",id:"1-developing-only-h5-and-mini-programs",level:3},{value:"2. Using Uni for Multi-Platform Development (APP, H5, Mini Programs)",id:"2-using-uni-for-multi-platform-development-app-h5-mini-programs",level:3},{value:"3. About Dependencies",id:"3-about-dependencies",level:3},{value:"\u2699\ufe0f Integration Steps",id:"\ufe0f-integration-steps",level:2},{value:"1. Add Dependencies",id:"1-add-dependencies",level:3},{value:"2. Import in Project (Pure APP Project)",id:"2-import-in-project-pure-app-project",level:3},{value:"3. Import in Project (APP\u3001H5\u3001Mini Program Project)",id:"3-import-in-project-apph5mini-program-project",level:3},{value:"3.1 Usage in Cross-Platform Scenarios",id:"31-usage-in-cross-platform-scenarios",level:4},{value:"4. \ud83d\udee0\ufe0f Local Development",id:"4-\ufe0f-local-development",level:3},{value:"4.1 Create Custom Debug Base",id:"41-create-custom-debug-base",level:4},{value:"4.2. Run on Custom Debug Base (iOS Only Supports Real Device Debugging)",id:"42-run-on-custom-debug-base-ios-only-supports-real-device-debugging",level:4},{value:"5. \ud83d\ude80 Build and Release",id:"5--build-and-release",level:3}],m={toc:c},d="wrapper";function g(e){var{components:t}=e,l=o(e,["components"]);return(0,r.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-usage-demo"},"\ud83d\ude80 Usage Demo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Demo is only used to demonstrate the introduction and use of the SDK, and is not a complete application.")),(0,r.kt)("p",null,"We strongly recommend that you first run the framework-related examples we have prepared for you ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-uniapp-demo"},"DEMO"),". This will not only allow you to intuitively experience the functionality of OpenIMSDK but also help you quickly identify and resolve issues during the actual integration process."),(0,r.kt)("h2",{id:"\ufe0fcommon-questions"},"\u2757\ufe0fCommon Questions"),(0,r.kt)("h3",{id:"1-developing-only-h5-and-mini-programs"},"1. Developing Only H5 and Mini Programs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are not developing for the App platform, use the ",(0,r.kt)("a",{parentName:"li",href:"/sdks/quickstart/miniProgram"},"JSSDK")," for H5 and Mini Program development. ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"No need"))," to follow the steps below.")),(0,r.kt)("h3",{id:"2-using-uni-for-multi-platform-development-app-h5-mini-programs"},"2. Using Uni for Multi-Platform Development (APP, H5, Mini Programs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To run on iOS and Android, it is ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"mandatory"))," to install native plugins. The middle layer ",(0,r.kt)("inlineCode",{parentName:"li"},"openim-uniapp-polyfill")," combines App native plugins and JSSDK capabilities, enabling unified development across APP, H5, and Mini Programs with the same codebase (SDK and im-server version >= 3.8.2).")),(0,r.kt)("h3",{id:"3-about-dependencies"},"3. About Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"@openim/client-sdk"),": JSSDK, required for running H5 and Mini Programs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"App native language plugins"),": Required for running on iOS and Android.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"openim-uniapp-polyfill"),": Mandatory. It encapsulates JSSDK and native plugins, enabling unified development across multiple platforms."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ufe0f-integration-steps"},"\u2699\ufe0f Integration Steps"),(0,r.kt)("h3",{id:"1-add-dependencies"},"1. Add Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install dependencies using npm:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install openim-uniapp-polyfill @openim/client-sdk\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ext.dcloud.net.cn/plugin?id=6577"},"dcloud Plugins Market")," Select the appropriate project and package name to import the SDK")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uni_import",src:n(48348).Z,width:"1196",height:"703"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"manifest.json")," file in the root directory of the imported SDK project, select ",(0,r.kt)("strong",{parentName:"li"},"App Native Plugin Configuration"),", and import the cloud plugin.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uni_import_manifest",src:n(20510).Z,width:"904",height:"692"})),(0,r.kt)("h3",{id:"2-import-in-project-pure-app-project"},"2. Import in Project (Pure APP Project)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('login', IMSDK.uuid(), {\n  userID: '123',\n  token: 'token',\n});\n\nconst onConnectSuccess = () => {\n  // Connection successful\n};\n// Set up listener\nIMSDK.subscribe(IMSDK.IMEvents.OnConnectSuccess, onConnectSuccess);\n// Unsubscribe listener\nIMSDK.unsubscribe(IMSDK.IMEvents.OnConnectSuccess, onConnectSuccess);\n")),(0,r.kt)("h3",{id:"3-import-in-project-apph5mini-program-project"},"3. Import in Project (APP\u3001H5\u3001Mini Program Project)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note 1: Use uniapp's method to call listeners, passing in methods from ",(0,r.kt)("inlineCode",{parentName:"p"},"IMSDK.IMEvents"),", as there is a difference in case sensitivity between JSSDK and APP. This conversion is already handled in the npm package.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note 2: In some APIs, there may be differences between platforms due to platform support. When using them, check the documentation for the respective platform's API and note the differences:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Depending on the platform, pass the correct ",(0,r.kt)("inlineCode",{parentName:"li"},"platformID"),"."),(0,r.kt)("li",{parentName:"ul"},"Login API parameters may vary."),(0,r.kt)("li",{parentName:"ul"},"On APP you need to ",(0,r.kt)("a",{parentName:"li",href:"/sdks/api/initialization/initSDK"},"initSDK")," before using it."),(0,r.kt)("li",{parentName:"ul"},"Creating image and file messages uses different APIs, so use ",(0,r.kt)("strong",{parentName:"li"},"conditional compilation")," to call different methods."),(0,r.kt)("li",{parentName:"ul"},"And so on...")))),(0,r.kt)("h4",{id:"31-usage-in-cross-platform-scenarios"},"3.1 Usage in Cross-Platform Scenarios"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Method 1: If parameters and method names are consistent across platforms, use uniapp's method to call them.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is a multi-platform compatible approach. In cross-platform scenarios, check if the API return content structure is consistent.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('createTextMessage', IMSDK.uuid(), 'text')\n  .then((data) => {\n    // do something\n  })\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Method 2: If parameters and method names differ across platforms, use ",(0,r.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/tutorial/platform.html"},"conditional compilation")," to handle significant parameter differences.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import IMSDK from 'openim-uniapp-polyfill';\n\n// #ifdef H5 || MP-WEIXIN\nIMSDK.asyncApi('login', IMSDK.uuid(), {\n  userID : '123',\n  token: 'token',\n  platformID: 5,\n  wsAddr: 'ws://your-server-ip:10001',\n  apiAddr: 'http://your-server-ip:10002',\n});\n// #endif\n\n// #ifdef APP-PLUS\nIMSDK.asyncApi('login', IMSDK.uuid(), {\n  userID: '123',\n  token: 'token',\n});\n// #endif\n")),(0,r.kt)("h3",{id:"4-\ufe0f-local-development"},"4. \ud83d\udee0\ufe0f Local Development"),(0,r.kt)("h4",{id:"41-create-custom-debug-base"},"4.1 Create Custom Debug Base"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The package name needs to match the package name set when importing cloud plugins in the first step.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uni_build",src:n(70074).Z,width:"1072",height:"739"})),(0,r.kt)("h4",{id:"42-run-on-custom-debug-base-ios-only-supports-real-device-debugging"},"4.2. Run on Custom Debug Base (iOS Only Supports Real Device Debugging)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When debugging the APP side locally, you must package a custom base and start debugging on it.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uni_run",src:n(92984).Z,width:"680",height:"428"})),(0,r.kt)("h3",{id:"5--build-and-release"},"5. \ud83d\ude80 Build and Release"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For APP platform packaging and release, use Release -> Native APP Cloud Packaging.")))}g.isMDXComponent=!0},70074:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uni_build-aeb84d625aa6c4e46e1bea1028811882.png"},48348:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uni_import-d2df7601622e180c8138e7120e9daa3e.png"},20510:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uni_import_manifest-efebaea0ac2455f8c6a42135aeda748b.png"},92984:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uni_run-e4308274c099eaf4f2d3e3130b435e98.png"}}]);