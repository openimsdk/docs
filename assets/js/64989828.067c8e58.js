"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[38895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,u=s["".concat(l,".").concat(d)]||s[d]||k[d]||p;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<p;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>s});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"\u5185\u7f51\u90e8\u7f72",sidebar_position:4},l=void 0,m={unversionedId:"gettingStarted/internalDeployment",id:"gettingStarted/internalDeployment",title:"\u5185\u7f51\u90e8\u7f72",description:"\ud83d\udccc \u5185\u7f51\u90e8\u7f72\u6307\u5357",source:"@site/docs/guides/gettingStarted/internalDeployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/internalDeployment",permalink:"/guides/gettingStarted/internalDeployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/internalDeployment.mdx",tags:[],version:"current",lastUpdatedAt:1741601802,formattedLastUpdatedAt:"Mar 10, 2025",sidebarPosition:4,frontMatter:{title:"\u5185\u7f51\u90e8\u7f72",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Verification",permalink:"/guides/gettingStarted/quickTestServer"},next:{title:"k8s Deployment",permalink:"/guides/gettingStarted/k8s-deployment"}},c={},s=[{value:"\ud83d\udccc \u5185\u7f51\u90e8\u7f72\u6307\u5357",id:"-\u5185\u7f51\u90e8\u7f72\u6307\u5357",level:2},{value:"<strong>Docker\u90e8\u7f72</strong>",id:"docker\u90e8\u7f72",level:3},{value:"<strong>\u6e90\u7801\u90e8\u7f72</strong>",id:"\u6e90\u7801\u90e8\u7f72",level:3}],k={toc:s},d="wrapper";function u(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-\u5185\u7f51\u90e8\u7f72\u6307\u5357"},"\ud83d\udccc \u5185\u7f51\u90e8\u7f72\u6307\u5357"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5728\u4e00\u53f0\u7eaf\u5185\u7f51\u7684\u673a\u5668\u4e0a\u90e8\u7f72OpenIM\u76f8\u5173\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"docker\u90e8\u7f72"},(0,r.kt)("strong",{parentName:"h3"},"Docker\u90e8\u7f72")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4e00\u53f0\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u673a\u5668\uff0c\u514b\u9686\u4ed3\u5e93\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/openimsdk/openim-docker\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u4ee5\u62c9\u53d6\u955c\u50cf\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u76f8\u5e94\u7684\u955c\u50cf\u3002\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker save -o image-name.tar image-name:tag\n")),(0,r.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u9700\u8981\u4fdd\u5b58",(0,r.kt)("inlineCode",{parentName:"p"},"openim-server"),"\u955c\u50cf\uff0c\u547d\u4ee4\u5e94\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker save -o openim-server.tar openim/openim-server:release-v3.8.1\n")),(0,r.kt)("p",{parentName:"li"},"\u4fdd\u5b58",(0,r.kt)("inlineCode",{parentName:"p"},"mongo"),"\u955c\u50cf\uff0c\u547d\u4ee4\u5e94\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker save -o mongo.tar mongo:7.0\n")),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"docker images"),"\u67e5\u770b\u62c9\u53d6\u7684\u955c\u50cf\u4fe1\u606f\uff0c\u6216\u8005\u5728",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"\u6587\u4ef6\u4e2d\u786e\u8ba4\u955c\u50cf\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u9700\u8981\u4fdd\u5b58\u7684\u955c\u50cf\u4e3a\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mongo:7.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redis:7.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bitnami/kafka:3.5.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minio/minio:RELEASE.2024-01-11T07-46-16Z")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/coreos/etcd:v3.5.13")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim/openim-web-front:release-v3.8.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim/openim-admin-front:release-v1.8.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim/openim-server:release-v3.8.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim/openim-chat:v1.8.2"))),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u4e3a\u76d1\u63a7\u544a\u8b66\u7ec4\u4ef6\u955c\u50cf\uff0c\u53ef\u6839\u636e\u9700\u6c42\u9009\u62e9\u6027\u90e8\u7f72\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prom/prometheus:v2.51.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prom/alertmanager:v0.27.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grafana/grafana:11.0.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prom/node-exporter:v1.7.0")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5185\u7f51\u6216\u8005\u7269\u7406\u4ecb\u8d28\u5c06",(0,r.kt)("strong",{parentName:"p"},"\u955c\u50cf\u6587\u4ef6"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"docker\u4ed3\u5e93\u6587\u4ef6"),"\u62f7\u8d1d\u5230\u90e8\u7f72\u673a\u5668\u4e0a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u955c\u50cf\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\u4e2d\uff0c\u547d\u4ee4\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker load -i image-name.tar\n")),(0,r.kt)("p",{parentName:"li"},"\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"openim-server"),"\u955c\u50cf\u5bfc\u5165\u547d\u4ee4\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker load -i openim-server.tar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4ed3\u5e93\u76ee\u5f55\u4e0b\u8fd0\u884c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker copose up -d\n")),(0,r.kt)("p",{parentName:"li"},"\u9700\u8981\u542f\u52a8\u76d1\u63a7\u7ec4\u4ef6\u5219\u8fd0\u884c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose --profile m up -d\n")))),(0,r.kt)("h3",{id:"\u6e90\u7801\u90e8\u7f72"},(0,r.kt)("strong",{parentName:"h3"},"\u6e90\u7801\u90e8\u7f72")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4e00\u53f0\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u673a\u5668\uff0c\u514b\u9686server\u4ed3\u5e93\u5efa\u8bae\u5207\u6362\u5230 release-v3.8.2 \u5206\u652f\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/openimsdk/open-im-server\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u514b\u9686",(0,r.kt)("inlineCode",{parentName:"p"},"chat"),"\u4ed3\u5e93\u5efa\u8bae\u5207\u6362\u5230 release-v1.8.3 \u5206\u652f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openimsdk/chat\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#Docker%E9%83%A8%E7%BD%B2"},"docker\u90e8\u7f72"),"\u6b65\u9aa4\uff0c\u4fdd\u5b58\u955c\u50cf\uff0c\u533a\u522b\u4e3a\u4e0d\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"openim/openim-server:release-v3.8.2"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"openim/openim-chat:v1.8.2"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5185\u7f51\u6216\u8005\u7269\u7406\u4ecb\u8d28\u5c06",(0,r.kt)("strong",{parentName:"p"},"\u955c\u50cf\u6587\u4ef6"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"server\u4ed3\u5e93\u6587\u4ef6"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"chat\u4ed3\u5e93\u6587\u4ef6"),"\u62f7\u8d1d\u5230\u90e8\u7f72\u673a\u5668\u4e0a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u955c\u50cf\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\u4e2d\uff0c\u547d\u4ee4\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker load -i image-name.tar\n")),(0,r.kt)("p",{parentName:"li"},"\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"mongo"),"\u955c\u50cf\u5bfc\u5165\u547d\u4ee4\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker load -i mongo.tar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u76ee\u5f55\u4e0b\u4f9d\u6b21\u8fd0\u884c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d  # \u5982\u9700\u542f\u7528\u76d1\u63a7\u7ec4\u4ef6\u5219\u4e3a docker compose --profile m up -d\nmage\nmage start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"chat"),"\u76ee\u5f55\u4e0b\u8fd0\u884c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mage\nmage start\n")))))}u.isMDXComponent=!0}}]);