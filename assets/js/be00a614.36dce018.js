"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[70742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:5,toc_min_heading_level:2,toc_max_heading_level:2},s="createImageMessageByFile",p={unversionedId:"api/message/createImageMessageByFile",id:"api/message/createImageMessageByFile",title:"createImageMessageByFile",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/message/createImageMessageByFile.mdx",sourceDirName:"api/message",slug:"/api/message/createImageMessageByFile",permalink:"/sdks/api/message/createImageMessageByFile",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/createImageMessageByFile.mdx",tags:[],version:"current",lastUpdatedAt:1706860170,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"createImageMessageByURL",permalink:"/sdks/api/message/createImageMessageByURL"},next:{title:"createSoundMessageFromFullPath",permalink:"/sdks/api/message/createSoundMessageFromFullPath"}},c={},u=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Results",id:"return-results",level:3},{value:"Code Sample",id:"code-sample",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=m("Tabs"),g=m("TabItem"),f={toc:u},b="wrapper";function y(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(b,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"createimagemessagebyfile"},"createImageMessageByFile"),(0,r.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,r.kt)("admonition",{title:"Description",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Create an image message.")),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only supported on the web platform.")),(0,r.kt)(d,{groupId:"sdks-language",values:[{label:"Browser/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"Web",mdxType:"TabItem"},(0,r.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.createImageMessageByFile({\n  sourcePicture: PicBaseInfo;\n  bigPicture: PicBaseInfo;\n  snapshotPicture: PicBaseInfo;\n  sourcePath: string;\n  file: File;\n}, operationID?: string): Promise<WsResponse<MessageItem>>\n")),(0,r.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourcePicture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/class/message/pictureInfo"},"PicBaseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the original image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigPicture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/class/message/pictureInfo"},"PicBaseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the larger image version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"snapshotPicture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/class/message/pictureInfo"},"PicBaseInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the thumbnail image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourcePath"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The absolute path of the image on the local machine, pass an empty string if not available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"File object")))),(0,r.kt)("h3",{id:"return-results"},"Return Results"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,r.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),">",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Success callback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise<",(0,r.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Error callback")))),(0,r.kt)("h3",{id:"code-sample"},"Code Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from 'open-im-sdk-wasm';\nconst IMSDK = getSDK();\n// or\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nconst picBaseInfo = {\n  uuid: \"uuid\",\n  type: imageFile.type,\n  size: imageFile.size,\n  width: 1024,\n  height: 1024,\n  url: \"\",\n}\n\nIMSDK.createImageMessageByFile({\n  sourcePicture: picBaseInfo;\n  bigPicture: picBaseInfo;\n  snapshotPicture: picBaseInfo;\n  sourcePath: imageFile.path;\n  file: imageFile\n})\n  .then(({ data }) => {\n    // Success\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Error\n  });\n")))))}y.isMDXComponent=!0}}]);