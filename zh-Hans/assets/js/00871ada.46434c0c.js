"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[7842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>s});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},p="RelationshipListener",d={unversionedId:"listener/friendshipListener",id:"listener/friendshipListener",title:"RelationshipListener",description:"\u6a21\u5757\u6982\u89c8",source:"@site/docs/sdks/listener/friendshipListener.mdx",sourceDirName:"listener",slug:"/listener/friendshipListener",permalink:"/zh-Hans/sdks/listener/friendshipListener",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/listener/friendshipListener.mdx",tags:[],version:"current",lastUpdatedAt:1730887211,formattedLastUpdatedAt:"2024\u5e7411\u67086\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"UserListener",permalink:"/zh-Hans/sdks/listener/userListener"},next:{title:"GroupListener",permalink:"/zh-Hans/sdks/listener/groupListener"}},c={},s=[{value:"\u6a21\u5757\u6982\u89c8",id:"\u6a21\u5757\u6982\u89c8",level:2}],u={toc:s},m="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relationshiplistener"},"RelationshipListener"),(0,r.kt)("h2",{id:"\u6a21\u5757\u6982\u89c8"},"\u6a21\u5757\u6982\u89c8"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u597d\u53cb\u53ca\u9ed1\u540d\u5355\u5173\u7cfb\u94fe\u76d1\u542c\u5668\uff0c\u5f53\u597d\u53cb\u53ca\u9ed1\u540d\u5355\u4fe1\u606f\u6539\u53d8\u65f6\u56de\u8c03\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u529f\u80fd\u7b80\u4ecb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onFriendApplicationAdded"},"onFriendApplicationAdded")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u7533\u8bf7\u65b0\u589e\u901a\u77e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onFriendApplicationRejected"},"onFriendApplicationRejected")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u7533\u8bf7\u88ab\u62d2\u7edd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onFriendApplicationAccepted"},"onFriendApplicationAccepted")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u7533\u8bf7\u88ab\u63a5\u53d7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onFriendApplicationDeleted"},"onFriendApplicationDeleted")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u7533\u8bf7\u88ab\u5220\u9664")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onFriendAdded"},"onFriendAdded")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u65b0\u589e\u901a\u77e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onFriendDeleted"},"onFriendDeleted")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u5220\u9664\u901a\u77e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onFriendInfoChanged"},"onFriendInfoChanged")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u8d44\u6599\u53d8\u66f4\u901a\u77e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onBlackAdded"},"onBlackAdded")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u65b0\u589e\u901a\u77e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onBlackDeleted"},"onBlackDeleted")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed1\u540d\u5355\u5220\u9664\u901a\u77e5")))))}f.isMDXComponent=!0}}]);