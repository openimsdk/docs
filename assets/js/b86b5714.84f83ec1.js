"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[83887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},p="setFriendListener",s={unversionedId:"api/friend/setFriendListener",id:"api/friend/setFriendListener",title:"setFriendListener",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/friend/setFriendListener.mdx",sourceDirName:"api/friend",slug:"/api/friend/setFriendListener",permalink:"/sdks/api/friend/setFriendListener",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/friend/setFriendListener.mdx",tags:[],version:"current",lastUpdatedAt:1710150757,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Relationship Chain Related",permalink:"/sdks/api/friend/"},next:{title:"acceptFriendApplication",permalink:"/sdks/api/friend/acceptFriendApplication"}},d={},u=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Results",id:"return-results",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Return Results",id:"return-results-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Function Prototype",id:"function-prototype-2",level:3},{value:"Input Parameters",id:"input-parameters-2",level:3},{value:"Return Results",id:"return-results-2",level:3},{value:"Code Example",id:"code-example-2",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("Tabs"),f=c("TabItem"),k={toc:u},b="wrapper";function h(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(b,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setfriendlistener"},"setFriendListener"),(0,r.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,r.kt)("admonition",{title:"Description",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Set the relationship chain event listener. For related events of relationship changes, asynchronous callback notifications are provided, so the UI can perceive and process them in a timely manner.")),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"(1) Call immediately after initSDK;\n(2) Can only be called once.")),(0,r.kt)(m,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"}],mdxType:"Tabs"},(0,r.kt)(f,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  Future setFriendshipListener(OnFriendshipListener listener)\n")),(0,r.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/sdks/listener/friendshipListener"},"OnFriendshipListener")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-results"},"Return Results"),(0,r.kt)("p",null,"~"),(0,r.kt)("h3",{id:"code-example"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    OpenIM.iMManager.friendshipManager.setFriendshipListener(OnFriendshipListener(\n      onBlacklistAdded: (BlacklistInfo i){},\n      onBlacklistDeleted: (BlacklistInfo i){},\n      onFriendAdded: (FriendInfo i){},\n      onFriendApplicationAccepted: (FriendApplicationInfo i){},\n      onFriendApplicationAdded: (FriendApplicationInfo i){},\n      onFriendApplicationDeleted: (FriendApplicationInfo i){},\n      onFriendApplicationRejected: (FriendApplicationInfo i){},\n      onFriendDeleted: (FriendInfo i){},\n      onFriendInfoChanged: (FriendInfo i){},\n    ));\n"))),(0,r.kt)(f,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"\n- (void)addFriendListener:(id<OIMFriendshipListener>)listener NS_SWIFT_NAME(addFriendListener(listener:));\n\n")),(0,r.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},"id < ",(0,r.kt)("a",{parentName:"td",href:"/sdks/listener/friendshipListener"},"OIMFriendshipListener")," >"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-results-1"},"Return Results"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"code-example-1"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n[OIMManager.callbacker addFriendListener:self];\n\n"))),(0,r.kt)(f,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"function-prototype-2"},"Function Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"\n public void setOnFriendshipListener(OnFriendshipListener listener)\n\n")),(0,r.kt)("h3",{id:"input-parameters-2"},"Input Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener"),(0,r.kt)("td",{parentName:"tr",align:null},"id <",(0,r.kt)("a",{parentName:"td",href:"/sdks/listener/friendshipListener"},"OnFriendshipListener"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-results-2"},"Return Results"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"code-example-2"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java",metastring:"showLineNumbers",showLineNumbers:!0},"\nOpenIMClient.getInstance().friendshipManager.setOnFriendshipListener(new OnFriendshipListener{...} )\n\n"))),(0,r.kt)(f,{value:"Web",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Automatically set after successful login. Listeners can be directly used on the client. ",(0,r.kt)("a",{parentName:"p",href:"/sdks/listener/friendshipListener"},"For details on friendship events, see")))),(0,r.kt)(f,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Automatically set after initialization. Callbacks are passed to the client via ",(0,r.kt)("inlineCode",{parentName:"p"},"globalEvent"),". ",(0,r.kt)("a",{parentName:"p",href:"/sdks/listener/friendshipListener"},"For details on friendship events, see")))),(0,r.kt)(f,{value:"React-Native",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"After successful initialization, it's set automatically. You can directly use the listener on the client side. ",(0,r.kt)("a",{parentName:"p",href:"/sdks/listener/friendshipListener"},"Details on friendship events can be found here"))))))}h.isMDXComponent=!0}}]);