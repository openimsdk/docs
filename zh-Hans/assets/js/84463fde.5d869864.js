"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[6217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"docker\u90e8\u7f72",sidebar_position:2},p=void 0,c={unversionedId:"gettingStarted/dockerCompose",id:"gettingStarted/dockerCompose",title:"docker\u90e8\u7f72",description:"\u73af\u5883\u51c6\u5907 \ud83c\udf0d",source:"@site/docs/guides/gettingStarted/dockerCompose.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/dockerCompose",permalink:"/zh-Hans/guides/gettingStarted/dockerCompose",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/dockerCompose.mdx",tags:[],version:"current",lastUpdatedAt:1744079742,formattedLastUpdatedAt:"2025\u5e744\u67088\u65e5",sidebarPosition:2,frontMatter:{title:"docker\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u548c\u7ec4\u4ef6",permalink:"/zh-Hans/guides/gettingStarted/env-comp"},next:{title:"\u6e90\u7801\u90e8\u7f72",permalink:"/zh-Hans/guides/gettingStarted/imSourceCodeDeployment"}},u={},s=[{value:"\u73af\u5883\u51c6\u5907 \ud83c\udf0d",id:"\u73af\u5883\u51c6\u5907-",level:2},{value:"\u4ed3\u5e93\u514b\u9686 \ud83d\uddc2\ufe0f",id:"\u4ed3\u5e93\u514b\u9686-\ufe0f",level:2},{value:"\u914d\u7f6e\u4fee\u6539 \ud83d\udd27",id:"\u914d\u7f6e\u4fee\u6539-",level:2},{value:"\u670d\u52a1\u542f\u52a8 \ud83d\ude80",id:"\u670d\u52a1\u542f\u52a8-",level:2},{value:"\u5feb\u901f\u4f53\u9a8c \u26a1",id:"\u5feb\u901f\u4f53\u9a8c-",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"unhealthy\u5b9a\u4f4d",id:"unhealthy\u5b9a\u4f4d",level:3}],d={toc:s},m="wrapper";function g(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u73af\u5883\u51c6\u5907-"},"\u73af\u5883\u51c6\u5907 \ud83c\udf0d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u5e26\u6709 Compose \u63d2\u4ef6\u7684 Docker \u6216 docker-compose\uff0c\u5e76\u786e\u4fdddocker\u5df2\u6b63\u5e38\u542f\u52a8\u3002")),(0,n.kt)("h2",{id:"\u4ed3\u5e93\u514b\u9686-\ufe0f"},"\u4ed3\u5e93\u514b\u9686 \ud83d\uddc2\ufe0f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openimsdk/openim-docker\n")),(0,n.kt)("h2",{id:"\u914d\u7f6e\u4fee\u6539-"},"\u914d\u7f6e\u4fee\u6539 \ud83d\udd27"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\uff0c\u914d\u7f6e\u5916\u7f51 IP\u3002\u5982\u679c\u4f7f\u7528\u57df\u540d\uff0c\u9700\u914d\u7f6e ",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/guides/gettingStarted/nginxDomainConfig"},"Nginx")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},'# \u8bbe\u7f6e MinIO \u670d\u52a1\u7684\u5916\u7f51\u8bbf\u95ee\u5730\u5740\uff08external_ip:10005\u6216\u57df\u540d\uff09\nMINIO_EXTERNAL_ADDRESS="http://external_ip:10005"\n')),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8fdb\u5165\u5bb9\u5668\u4fee\u6539config\u76ee\u5f55\u4e0b\u7684\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u65e0\u6548\uff01\u8bf7\u91c7\u7528\u73af\u5883\u53d8\u91cf\u7684\u65b9\u5f0f\u4fee\u6539\u914d\u7f6e\uff0c\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/openim-docker/issues/136"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u6307\u5357"),"\u3002")))),(0,n.kt)("h2",{id:"\u670d\u52a1\u542f\u52a8-"},"\u670d\u52a1\u542f\u52a8 \ud83d\ude80"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u670d\u52a1\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u8fd0\u7ef4\u7ec4\u4ef6\uff08\u53ef\u9009\uff09\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose --profile m up -d\n")),(0,n.kt)("p",null,"\u76d1\u63a7\u544a\u8b66\u4f7f\u7528\u53c2\u8003\uff1a ",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/guides/gettingStarted/admin"},"\u76d1\u63a7\u544a\u8b66")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u505c\u6b62\u670d\u52a1\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u67e5\u770b\u65e5\u5fd7\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f openim-server\ndocker logs -f openim-chat\n")),(0,n.kt)("h2",{id:"\u5feb\u901f\u4f53\u9a8c-"},"\u5feb\u901f\u4f53\u9a8c \u26a1"),(0,n.kt)("p",null,"\u5feb\u901f\u4f53\u9a8c OpenIM \u670d\u52a1\uff0c\u68c0\u6d4b\u90e8\u7f72\u662f\u5426\u6b63\u5e38\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"./quickTestServer"},"\u5feb\u901f\u9a8c\u8bc1"),"\u3002"),(0,n.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.kt)("h3",{id:"unhealthy\u5b9a\u4f4d"},"unhealthy\u5b9a\u4f4d"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"docker exec -it openim-server mage check")," \u786e\u8ba4\u662f\u5426\u8d85\u8fc7\u4e00\u5206\u949f\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"docker exec -it openim-chat mage check")," \u786e\u8ba4\u662f\u5426\u8d85\u8fc7\u4e00\u5206\u949f\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u67e5\u770b\u65e5\u5fd7\uff1b")))}g.isMDXComponent=!0}}]);