"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[91251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||l;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"\u6e90\u7801\u90e8\u7f72",sidebar_position:1},p="\ud83d\udee0 \u6e90\u7801\u90e8\u7f72",c={unversionedId:"gettingStarted/imSourceCodeDeployment",id:"gettingStarted/imSourceCodeDeployment",title:"\u6e90\u7801\u90e8\u7f72",description:"1. \u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42",source:"@site/docs/guides/gettingStarted/imSourceCodeDeployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/imSourceCodeDeployment",permalink:"/zh-Hans/guides/gettingStarted/imSourceCodeDeployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/imSourceCodeDeployment.mdx",tags:[],version:"current",lastUpdatedAt:1709733410,formattedLastUpdatedAt:"2024\u5e743\u67086\u65e5",sidebarPosition:1,frontMatter:{title:"\u6e90\u7801\u90e8\u7f72",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4ea7\u54c1\u4ecb\u7ecd",permalink:"/zh-Hans/guides/introduction/product"},next:{title:"docker\u90e8\u7f72",permalink:"/zh-Hans/guides/gettingStarted/dockerCompose"}},m={},u=[{value:"1. \u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42",id:"1-\u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42",level:2},{value:"2. \u90e8\u7f72 OpenIM Server (IM)",id:"2-\u90e8\u7f72-openim-server-im",level:2},{value:"2.1 \ud83d\udce1 \u8bbe\u7f6e OPENIM_IP",id:"21--\u8bbe\u7f6e-openim_ip",level:3},{value:"2.2 \ud83c\udfd7\ufe0f \u90e8\u7f72\u7ec4\u4ef6 (mongodb/redis/zookeeper/kafka/MinIO\u7b49)",id:"22-\ufe0f-\u90e8\u7f72\u7ec4\u4ef6-mongodbrediszookeeperkafkaminio\u7b49",level:3},{value:"2.3 \ud83d\udee0\ufe0f \u7f16\u8bd1",id:"23-\ufe0f-\u7f16\u8bd1",level:3},{value:"2.4 \ud83d\ude80 \u542f\u52a8/\u505c\u6b62/\u68c0\u6d4b",id:"24--\u542f\u52a8\u505c\u6b62\u68c0\u6d4b",level:3},{value:"3. \u90e8\u7f72 App Server (Chat)",id:"3-\u90e8\u7f72-app-server-chat",level:2},{value:"3.1 \ud83c\udfd7\ufe0f \u90e8\u7f72\u7ec4\u4ef6\uff08mysql\uff09",id:"31-\ufe0f-\u90e8\u7f72\u7ec4\u4ef6mysql",level:3},{value:"3.2 \ud83d\udee0\ufe0f \u7f16\u8bd1",id:"32-\ufe0f-\u7f16\u8bd1",level:3},{value:"3.3 \ud83d\ude80 \u542f\u52a8/\u505c\u6b62/\u68c0\u6d4b",id:"33--\u542f\u52a8\u505c\u6b62\u68c0\u6d4b",level:3},{value:"4. \u5feb\u901f\u9a8c\u8bc1",id:"4-\u5feb\u901f\u9a8c\u8bc1",level:2},{value:"5. \u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf",id:"5-\u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf",level:2},{value:"6. \u5173\u4e8e\u914d\u7f6e\u9879\u7684\u4fee\u6539",id:"6-\u5173\u4e8e\u914d\u7f6e\u9879\u7684\u4fee\u6539",level:2},{value:"6.1 \ud83d\udee0\ufe0f \u5171\u7528\u914d\u7f6e\u9879\u7684\u4fee\u6539",id:"61-\ufe0f-\u5171\u7528\u914d\u7f6e\u9879\u7684\u4fee\u6539",level:3},{value:"6.2 \ud83d\udd04 \u5171\u7528\u914d\u7f6e\u9879\u4e2d\u7279\u6b8a\u914d\u7f6e\u9879\u7684\u4fee\u6539",id:"62--\u5171\u7528\u914d\u7f6e\u9879\u4e2d\u7279\u6b8a\u914d\u7f6e\u9879\u7684\u4fee\u6539",level:3},{value:"6.3 \ud83d\udee0\ufe0f \u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539",id:"63-\ufe0f-\u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539",level:3},{value:"6.4 \u7aef\u53e3\u7684\u4fee\u6539",id:"64-\u7aef\u53e3\u7684\u4fee\u6539",level:3},{value:"7. \u5e38\u89c1\u95ee\u9898",id:"7-\u5e38\u89c1\u95ee\u9898",level:2},{value:"7.1 \ud83d\udcdc \u65e5\u5fd7\u67e5\u770b",id:"71--\u65e5\u5fd7\u67e5\u770b",level:3},{value:"7.2 \ud83d\ude80 \u542f\u52a8\u987a\u5e8f",id:"72--\u542f\u52a8\u987a\u5e8f",level:3},{value:"7.3 \ud83d\udc33 Docker \u7248\u672c",id:"73--docker-\u7248\u672c",level:3}],d={toc:u},s="wrapper";function k(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(s,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u6e90\u7801\u90e8\u7f72"},"\ud83d\udee0 \u6e90\u7801\u90e8\u7f72"),(0,r.kt)("h2",{id:"1-\u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42"},"1. \u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u670d\u52a1\u5668\u73af\u5883\u3001\u7cfb\u7edf\u3001\u4ee5\u53ca\u5b58\u50a8\u7ec4\u4ef6\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./env-comp"},"\u6b64\u6587\u6863")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-\u90e8\u7f72-openim-server-im"},"2. \u90e8\u7f72 OpenIM Server (IM)"),(0,r.kt)("h3",{id:"21--\u8bbe\u7f6e-openim_ip"},"2.1 \ud83d\udce1 \u8bbe\u7f6e OPENIM_IP"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\ud83d\udd14 ",(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u8981\u8bbe\u7f6eOPENIM_IP\uff0c\u4e14\u4e0d\u80fd\u662f127.0.0.1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'# \u5982\u679c\u670d\u52a1\u5668\u6709\u5916\u7f51IP\nexport OPENIM_IP="\u5916\u7f51IP"\n\n# \u5982\u679c\u4ec5\u63d0\u4f9b\u5185\u7f51\u670d\u52a1\nexport OPENIM_IP="\u5185\u7f51IP"\n')),(0,r.kt)("h3",{id:"22-\ufe0f-\u90e8\u7f72\u7ec4\u4ef6-mongodbrediszookeeperkafkaminio\u7b49"},"2.2 \ud83c\udfd7\ufe0f \u90e8\u7f72\u7ec4\u4ef6 (mongodb/redis/zookeeper/kafka/MinIO\u7b49)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenIMSDK/open-im-server && cd open-im-server \n# \u5efa\u8bae\u5207\u6362\u5230release-v3.5\u53ca\u4ee5\u540e\u7684release\u5206\u652f \nmake init && docker compose up -d\n\n")),(0,r.kt)("h3",{id:"23-\ufe0f-\u7f16\u8bd1"},"2.3 \ud83d\udee0\ufe0f \u7f16\u8bd1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make build\n\n")),(0,r.kt)("h3",{id:"24--\u542f\u52a8\u505c\u6b62\u68c0\u6d4b"},"2.4 \ud83d\ude80 \u542f\u52a8/\u505c\u6b62/\u68c0\u6d4b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"# \u542f\u52a8\nmake start\n# \u505c\u6b62\nmake stop\n# \u68c0\u6d4b\nmake check\n\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-\u90e8\u7f72-app-server-chat"},"3. \u90e8\u7f72 App Server (Chat)"),(0,r.kt)("h3",{id:"31-\ufe0f-\u90e8\u7f72\u7ec4\u4ef6mysql"},"3.1 \ud83c\udfd7\ufe0f \u90e8\u7f72\u7ec4\u4ef6\uff08mysql\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#\u8fd4\u56de\u4e0a\u4e00\u7ea7\u76ee\u5f55\ncd ..\n# clone\u4ed3\u5e93 \u5efa\u8bae\u5207\u6362\u5230release-v1.5\u53ca\u4ee5\u540e\u7684release\u5206\u652f\ngit clone https://github.com/OpenIMSDK/chat chat && cd chat\n# \u90e8\u7f72mysql\ndocker run -d --name mysql2 -p 13306:3306 -p 33306:33060 -v "$(pwd)/components/mysql/data:/var/lib/mysql" -v "/etc/localtime:/etc/localtime" -e MYSQL_ROOT_PASSWORD="openIM123" --restart always mysql:5.7\n')),(0,r.kt)("h3",{id:"32-\ufe0f-\u7f16\u8bd1"},"3.2 \ud83d\udee0\ufe0f \u7f16\u8bd1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make init\nmake build\n")),(0,r.kt)("h3",{id:"33--\u542f\u52a8\u505c\u6b62\u68c0\u6d4b"},"3.3 \ud83d\ude80 \u542f\u52a8/\u505c\u6b62/\u68c0\u6d4b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"# \u542f\u52a8\nmake start\n# \u505c\u6b62\nmake stop\n# \u68c0\u6d4b\nmake check\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4-\u5feb\u901f\u9a8c\u8bc1"},"4. \u5feb\u901f\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./quickTestServer"},"\u5feb\u901f\u9a8c\u8bc1"),"\u6587\u6863"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"5-\u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf"},"5. \u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"./admin"},"\u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf")," \u6587\u6863\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"6-\u5173\u4e8e\u914d\u7f6e\u9879\u7684\u4fee\u6539"},"6. \u5173\u4e8e\u914d\u7f6e\u9879\u7684\u4fee\u6539"),(0,r.kt)("h3",{id:"61-\ufe0f-\u5171\u7528\u914d\u7f6e\u9879\u7684\u4fee\u6539"},"6.1 \ud83d\udee0\ufe0f \u5171\u7528\u914d\u7f6e\u9879\u7684\u4fee\u6539"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u8981\u4fee\u6539\u7684\u6587\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongo/kafka/minio \u76f8\u5173"),(0,r.kt)("td",{parentName:"tr",align:null},".env, openim-server/config/config.yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u91cd\u542f\u7ec4\u4ef6\u548c IM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis/zookeeper \u76f8\u5173"),(0,r.kt)("td",{parentName:"tr",align:null},".env, openim-server/config/config.yaml, chat/config/config.yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u91cd\u542f\u7ec4\u4ef6\u3001IM \u548c Chat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"openim-server/config/config.yaml, chat/config/config.yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u91cd\u542f IM \u548c Chat")))),(0,r.kt)("h3",{id:"62--\u5171\u7528\u914d\u7f6e\u9879\u4e2d\u7279\u6b8a\u914d\u7f6e\u9879\u7684\u4fee\u6539"},"6.2 \ud83d\udd04 \u5171\u7528\u914d\u7f6e\u9879\u4e2d\u7279\u6b8a\u914d\u7f6e\u9879\u7684\u4fee\u6539"),(0,r.kt)("p",null,"\u7279\u6b8a\u914d\u7f6e\u9879\uff1aAPI_OPENIM_PORT/MINIO_PORT/OPENIM_IP/GRAFANA_PORT"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," \u6587\u4ef6\u4e2d\u7684\u7279\u6b8a\u914d\u7f6e\u9879"),(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," \u4e2d\u6309\u7167\u89c4\u5219\u4fee\u6539\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'object:\n  apiURL: "http://$OPENIM_IP:$API_OPENIM_PORT"\n  minio:\n    endpoint: "http://$DOCKER_BRIDGE_GATEWAY:$MINIO_PORT"\n    signEndpoint: "http://$OPENIM_IP:$MINIO_PORT"\n\ngrafanaUrl: http://$OPENIM_IP:$GRAFANA_PORT\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"chat/config/config.yaml"))," \u4e2d\u6309\u7167\u89c4\u5219\u4fee\u6539\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'\u5982\u679cIM\u5728Chat\u4e0d\u5728\u540c\u4e00\u53f0\u673a\u5668\u4e0a\uff0c\u5219\u9700\u5c06127.0.0.1\u66ff\u6362\u6210IM\u6240\u5728\u673a\u5668\u7684IP\nopenIMUrl: "http://127.0.0.1:$API_OPENIM_PORT"\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u91cd\u542f IM \u548c Chat")),(0,r.kt)("h3",{id:"63-\ufe0f-\u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539"},"6.3 \ud83d\udee0\ufe0f \u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539"),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env")),"\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"chat/config/config.yaml"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," \u4e2d\u7684\u5176\u4ed6\u914d\u7f6e\u9879\uff0c\u53ef\u4ee5\u5355\u72ec\u4fee\u6539\u76f8\u5e94\u6587\u4ef6\u4e2d\u7684\u8fd9\u4e9b\u914d\u7f6e\u9879\u3002"),(0,r.kt)("h3",{id:"64-\u7aef\u53e3\u7684\u4fee\u6539"},"6.4 \u7aef\u53e3\u7684\u4fee\u6539"),(0,r.kt)("p",null,"\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u5bf9\u4e8eIM\u76f8\u5173\u4efb\u4f55\u7aef\u53e3\u7684\u4fee\u6539\uff0c\u90fd\u9700\u8981\u540c\u6b65\u4fee\u6539open-im-server/scripts/install/environment.sh\u4e2d\u7684\u7aef\u53e3"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"7-\u5e38\u89c1\u95ee\u9898"},"7. \u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"71--\u65e5\u5fd7\u67e5\u770b"},"7.1 \ud83d\udcdc \u65e5\u5fd7\u67e5\u770b"),(0,r.kt)("p",null,"\u65e5\u5fd7\u4f4d\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u65e5\u5fd7\uff0c\u542f\u52a8\u6210\u529f\u540e\u5b9a\u4f4d\u95ee\u9898\u65f6\u67e5\u770b\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"logs/OpenIM.log.all.*")),(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u65e5\u5fd7\uff0c\u542f\u52a8\u6709\u9519\u8bef\u65f6\u67e5\u770b\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"_output/logs/openim_*.log"))),(0,r.kt)("h3",{id:"72--\u542f\u52a8\u987a\u5e8f"},"7.2 \ud83d\ude80 \u542f\u52a8\u987a\u5e8f"),(0,r.kt)("p",null,"\u542f\u52a8\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IM \u4f9d\u8d56\u7684\u7ec4\u4ef6\uff1amongo/redis/kafka/zookeeper/minio\u7b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IM")),(0,r.kt)("li",{parentName:"ul"},"Chat \u4f9d\u8d56\u7684\u7ec4\u4ef6\uff1amysql"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chat"))),(0,r.kt)("h3",{id:"73--docker-\u7248\u672c"},"7.3 \ud83d\udc33 Docker \u7248\u672c"),(0,r.kt)("p",null,"\u65b0\u7248 Docker \u5df2\u7ecf\u6574\u5408\u4e86 docker-compose. \u8001\u7248\u672c\u7684 Docker \u53ef\u80fd\u4e0d\u652f\u6301 gateway \u529f\u80fd\u274c\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u5347\u7ea7\u5230\u8f83\u65b0\u7684\u7248\u672c\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"23.0.1"),"\ud83d\udd1d"))}k.isMDXComponent=!0}}]);