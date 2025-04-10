"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[20674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,b=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:2},p="GroupListener",c={unversionedId:"listener/groupListener",id:"listener/groupListener",title:"GroupListener",description:"\u6a21\u5757\u6982\u89c8",source:"@site/docs/sdks/listener/groupListener.mdx",sourceDirName:"listener",slug:"/listener/groupListener",permalink:"/zh-Hans/sdks/listener/groupListener",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/listener/groupListener.mdx",tags:[],version:"current",lastUpdatedAt:1744272715,formattedLastUpdatedAt:"2025\u5e744\u670810\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"RelationshipListener",permalink:"/zh-Hans/sdks/listener/friendshipListener"},next:{title:"ConversationListener",permalink:"/zh-Hans/sdks/listener/conversationListener"}},d={},s=[{value:"\u6a21\u5757\u6982\u89c8",id:"\u6a21\u5757\u6982\u89c8",level:2}],u={toc:s},m="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"grouplistener"},"GroupListener"),(0,n.kt)("h2",{id:"\u6a21\u5757\u6982\u89c8"},"\u6a21\u5757\u6982\u89c8"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u7fa4\u7ec4\u76d1\u542c\u5668\uff0c\u5f53\u7fa4\u7ec4\u53ca\u7fa4\u6210\u5458\u4fe1\u606f\u6539\u53d8\u65f6\u56de\u8c03\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u529f\u80fd\u7b80\u4ecb"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupMemberAdded"},"onGroupMemberAdded")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6709\u65b0\u6210\u5458\u52a0\u5165\u7fa4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupMemberDeleted"},"onGroupMemberDeleted")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6709\u6210\u5458\u79bb\u5f00\u7fa4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupMemberInfoChanged"},"onGroupMemberInfoChanged")),(0,n.kt)("td",{parentName:"tr",align:null},"\u67d0\u6210\u5458\u4fe1\u606f\u53d1\u751f\u53d8\u66f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onJoinedGroupAdded"},"onJoinedGroupAdded")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u53d8\u66f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onJoinedGroupDeleted"},"onJoinedGroupDeleted")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u53d8\u66f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupInfoChanged"},"onGroupInfoChanged")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4fe1\u606f\u53d8\u66f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupApplicationAccepted"},"onGroupApplicationAccepted")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7533\u8bf7\u88ab\u63a5\u53d7\u901a\u77e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupApplicationAdded"},"onGroupApplicationAdded")),(0,n.kt)("td",{parentName:"tr",align:null},"\u65b0\u7684\u7fa4\u7533\u8bf7\u901a\u77e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupApplicationDeleted"},"onGroupApplicationDeleted")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7533\u8bf7\u5220\u9664\u901a\u77e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupApplicationRejected"},"onGroupApplicationRejected")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7533\u8bf7\u88ab\u62d2\u7edd\u901a\u77e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onGroupDismissed"},"onGroupDismissed")),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u89e3\u6563\u901a\u77e5")))))}b.isMDXComponent=!0}}]);