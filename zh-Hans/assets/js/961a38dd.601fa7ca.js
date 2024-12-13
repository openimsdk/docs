"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[13789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,u=s["".concat(o,".").concat(c)]||s[c]||k[c]||i;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>s});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"\u6e90\u7801\u96c6\u7fa4\u90e8\u7f72\u6307\u5357",sidebar_position:6},o=void 0,d={unversionedId:"gettingStarted/cluster",id:"gettingStarted/cluster",title:"\u6e90\u7801\u96c6\u7fa4\u90e8\u7f72\u6307\u5357",description:"open-im-server \u6e90\u7801\u96c6\u7fa4\u90e8\u7f72\u6307\u5357",source:"@site/docs/guides/gettingStarted/cluster.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/cluster",permalink:"/zh-Hans/guides/gettingStarted/cluster",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/cluster.mdx",tags:[],version:"current",lastUpdatedAt:1734054054,formattedLastUpdatedAt:"2024\u5e7412\u670813\u65e5",sidebarPosition:6,frontMatter:{title:"\u6e90\u7801\u96c6\u7fa4\u90e8\u7f72\u6307\u5357",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u9a8c\u8bc1",permalink:"/zh-Hans/guides/gettingStarted/quickTestServer"},next:{title:"Nginx\u57df\u540d\u914d\u7f6e",permalink:"/zh-Hans/guides/gettingStarted/nginxDomainConfig"}},m={},s=[{value:"open-im-server \u6e90\u7801\u96c6\u7fa4\u90e8\u7f72\u6307\u5357",id:"open-im-server-\u6e90\u7801\u96c6\u7fa4\u90e8\u7f72\u6307\u5357",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"1. \u514b\u9686\u4ed3\u5e93",id:"1-\u514b\u9686\u4ed3\u5e93",level:3},{value:"2. \u914d\u7f6e\u4fee\u6539",id:"2-\u914d\u7f6e\u4fee\u6539",level:3},{value:"2.1 Kafka \u914d\u7f6e",id:"21-kafka-\u914d\u7f6e",level:4},{value:"2.2 MinIO \u914d\u7f6e",id:"22-minio-\u914d\u7f6e",level:4},{value:"2.3 MongoDB \u914d\u7f6e",id:"23-mongodb-\u914d\u7f6e",level:4},{value:"2.4 Etcd \u914d\u7f6e",id:"24-etcd-\u914d\u7f6e",level:4},{value:"2.5 Redis \u914d\u7f6e",id:"25-redis-\u914d\u7f6e",level:4},{value:"3. \u914d\u7f6e nginx",id:"3-\u914d\u7f6e-nginx",level:3},{value:"4. \u8bbe\u7f6e DNS",id:"4-\u8bbe\u7f6e-dns",level:3},{value:"5. \u542f\u52a8\u670d\u52a1",id:"5-\u542f\u52a8\u670d\u52a1",level:3},{value:"5.1 \u7f16\u8bd1",id:"51-\u7f16\u8bd1",level:4},{value:"5.2 \u542f\u52a8\u670d\u52a1",id:"52-\u542f\u52a8\u670d\u52a1",level:4},{value:"6. \u4fee\u6539\u5ba2\u6237\u7aef SDK \u521d\u59cb\u5316\u53c2\u6570",id:"6-\u4fee\u6539\u5ba2\u6237\u7aef-sdk-\u521d\u59cb\u5316\u53c2\u6570",level:3},{value:"<strong>\u5e38\u89c1\u95ee\u9898/\u6ce8\u610f\u4e8b\u9879</strong>",id:"\u5e38\u89c1\u95ee\u9898\u6ce8\u610f\u4e8b\u9879",level:2}],k={toc:s},c="wrapper";function u(e){var{components:t}=e,p=l(e,["components"]);return(0,r.kt)(c,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"open-im-server-\u6e90\u7801\u96c6\u7fa4\u90e8\u7f72\u6307\u5357"},"open-im-server \u6e90\u7801\u96c6\u7fa4\u90e8\u7f72\u6307\u5357"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5728\u4e24\u53f0\u673a\u5668\uff08A \u548c B\uff0c\u5185\u7f51 IP \u5206\u522b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"IP_A")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"IP_B"),"\uff09\u4e0a\u96c6\u7fa4\u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx"),"\uff0c\u5e76\u5728\u673a\u5668 A \u4e0a\u90e8\u7f72\u76d1\u63a7\u7ec4\u4ef6\uff08Prometheus\u3001Grafana\u3001Alertmanager\uff09\u3002\n\u5047\u8bbe\u60a8\u5df2\u90e8\u7f72 Redis \u96c6\u7fa4\u3001MongoDB \u5206\u7247\u96c6\u7fa4\u3001Kafka \u96c6\u7fa4\u53ca Etcd \u96c6\u7fa4\uff0c\u5177\u4f53\u5730\u5740\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Redis \u96c6\u7fa4\u5730\u5740"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"redisAddr1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"redisAddr2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"redisAddr3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MongoDB \u96c6\u7fa4\u5730\u5740"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"mongoAddr1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mongoAddr2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mongoAddr3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka \u96c6\u7fa4\u5730\u5740"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"kafkaAddr1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kafkaAddr2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kafkaAddr3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Etcd \u96c6\u7fa4\u5730\u5740"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"etcdAddr1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"etcdAddr2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"etcdAddr3"))),(0,r.kt)("p",null,"\u6b64\u5916\uff0cMinIO \u7684\u5185\u90e8\u670d\u52a1\u8bbf\u95ee\u5730\u5740\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"internalAddress"),"\uff0c\u5916\u90e8\u8bbf\u95ee\u5730\u5740\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"externalAddress"),"\u3002\nA \u548c B \u4e24\u53f0\u673a\u5668\u5185\u7f51\u4e92\u901a\uff0c\u4e14A\u3001B\u4e24\u53f0\u673a\u5668\u90fd\u6709\u5916\u7f51IP\u3002"),(0,r.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6"},"\u524d\u63d0\u6761\u4ef6")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-%E5%85%8B%E9%9A%86%E4%BB%93%E5%BA%93"},"\u514b\u9686\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-%E9%85%8D%E7%BD%AE%E4%BF%AE%E6%94%B9"},"\u914d\u7f6e\u4fee\u6539")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-%E9%85%8D%E7%BD%AE-nginx"},"\u914d\u7f6e nginx")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#4-%E8%AE%BE%E7%BD%AE-dns"},"\u8bbe\u7f6e DNS")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#5-%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1"},"\u542f\u52a8\u670d\u52a1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#6-%E4%BF%AE%E6%94%B9%E5%AE%A2%E6%88%B7%E7%AB%AF-sdk-%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%82%E6%95%B0"},"\u4fee\u6539\u5ba2\u6237\u7aef SDK \u521d\u59cb\u5316\u53c2\u6570"))),(0,r.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u786e\u4fdd\u4ee5\u4e0b\u7ec4\u4ef6\u5df2\u6b63\u786e\u90e8\u7f72\u5e76\u8fd0\u884c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Redis \u96c6\u7fa4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MongoDB \u5206\u7247\u96c6\u7fa4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka \u96c6\u7fa4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Etcd \u96c6\u7fa4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MinIO \u670d\u52a1"))),(0,r.kt)("h3",{id:"1-\u514b\u9686\u4ed3\u5e93"},"1. \u514b\u9686\u4ed3\u5e93"),(0,r.kt)("p",null,"\u5728\u4e24\u53f0\u673a\u5668\uff08A \u548c B\uff09\u4e0a\u5206\u522b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u514b\u9686 ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server")," \u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openimsdk/open-im-server\ncd open-im-server\n")),(0,r.kt)("h3",{id:"2-\u914d\u7f6e\u4fee\u6539"},"2. \u914d\u7f6e\u4fee\u6539"),(0,r.kt)("p",null,"\u5728\u673a\u5668 A \u548c B \u4e0a\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u786e\u4fdd\u5404\u7ec4\u4ef6\u6b63\u786e\u8fde\u63a5\u3002\u6240\u6709\u5730\u5740\u5b57\u6bb5\u5747\u91c7\u7528\u5355\u884c\u5217\u8868\u683c\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"address: [addr1, addr2, addr3]"),"\u3002"),(0,r.kt)("h4",{id:"21-kafka-\u914d\u7f6e"},"2.1 Kafka \u914d\u7f6e"),(0,r.kt)("p",null,"\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server/config/kafka.yml")," \u6587\u4ef6\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," \u5b57\u6bb5\u4e3a Kafka \u96c6\u7fa4\u5730\u5740\u5217\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"address: [kafkaAddr1, kafkaAddr2, kafkaAddr3]\n")),(0,r.kt)("h4",{id:"22-minio-\u914d\u7f6e"},"2.2 MinIO \u914d\u7f6e"),(0,r.kt)("p",null,"\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server/config/minio.yml")," \u6587\u4ef6\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"internalAddress")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"externalAddress"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"internalAddress: your_minio_internal_address\nexternalAddress: your_minio_external_address\n")),(0,r.kt)("h4",{id:"23-mongodb-\u914d\u7f6e"},"2.3 MongoDB \u914d\u7f6e"),(0,r.kt)("p",null,"\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server/config/mongodb.yml")," \u6587\u4ef6\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," \u5b57\u6bb5\u4e3a MongoDB \u96c6\u7fa4\u5730\u5740\u5217\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"address: [mongoAddr1, mongoAddr2, mongoAddr3]\n")),(0,r.kt)("h4",{id:"24-etcd-\u914d\u7f6e"},"2.4 Etcd \u914d\u7f6e"),(0,r.kt)("p",null,"\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server/config/discovery.yml")," \u6587\u4ef6\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd.address")," \u5b57\u6bb5\u4e3a Etcd \u96c6\u7fa4\u5730\u5740\u5217\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"etcd:\n  address: [etcdAddr1, etcdAddr2, etcdAddr3]\n")),(0,r.kt)("h4",{id:"25-redis-\u914d\u7f6e"},"2.5 Redis \u914d\u7f6e"),(0,r.kt)("p",null,"\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server/config/redis.yml")," \u6587\u4ef6\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," \u5b57\u6bb5\u4e3a Redis \u96c6\u7fa4\u5730\u5740\u5217\u8868\uff0c\u5e76\u542f\u7528\u96c6\u7fa4\u6a21\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"address: [redisAddr1, redisAddr2, redisAddr3]\nclusterMode: true\n")),(0,r.kt)("h3",{id:"3-\u914d\u7f6e-nginx"},"3. \u914d\u7f6e nginx"),(0,r.kt)("p",null,"\u5728\u673a\u5668 A \u3001B\u4e0a\u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx"),"\uff0c\u53c2\u8003\u4ee5\u4e0b\u914d\u7f6e\u3002\u8bf7\u786e\u4fdd\u66ff\u6362\u4e3a\u60a8\u7684\u5b9e\u9645\u57df\u540d\u3001SSL \u8bc1\u4e66\u8def\u5f84\u548c SSL \u5bc6\u94a5\u8def\u5f84\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\ude80 ",(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a"),": \u786e\u4fdd\u66ff\u6362\u6210\u60a8\u7684\u5b9e\u9645\u57df\u540d\u3001SSL \u8bc1\u4e66\u8def\u5f84\u548c SSL \u5bc6\u94a5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},'events {\n    worker_connections 1024;\n}\n\nhttp {\n    # open-im-server \n    upstream msg_gateway {\n        server IP_A:10001;\n        server IP_B:10001;\n    }\n\n    upstream im_api {\n        # IM API \u670d\u52a1\u5668\u5730\u5740\uff0c\u53ef\u6839\u636e\u90e8\u7f72\u60c5\u51b5\u6307\u5b9a\u591a\u4e2a\n        server IP_A:10002;\n        server IP_B:10002;\n    }\n\n    server {\n        listen       443 ssl;\n        server_name  your_domain.com;  # \u66ff\u6362\u4e3a\u60a8\u7684\u57df\u540d\n\n        ssl_certificate     /usr/local/nginx/conf/ssl/your_domain_bundle.pem;  # \u66ff\u6362\u4e3a\u60a8\u7684\u8bc1\u4e66\u8def\u5f84\n        ssl_certificate_key /usr/local/nginx/conf/ssl/your_domain.key;        # \u66ff\u6362\u4e3a\u60a8\u7684\u8bc1\u4e66\u5bc6\u94a5\u8def\u5f84\n\n        gzip on;\n        gzip_min_length 1k;\n        gzip_buffers 4 16k;\n        gzip_comp_level 2;\n        gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/wasm;\n        gzip_vary off;\n        gzip_disable "MSIE [1-6]\\.";\n\n        location ^~/api/ {\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection "Upgrade";\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $remote_addr;\n            proxy_set_header X-Request-Api $scheme://$host/api;\n            proxy_pass http://im_api/;\n        }\n\n        location /msg_gateway/ {\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection "Upgrade";\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $remote_addr;\n            proxy_pass http://msg_gateway/;\n        }\n    }\n\n    # \u53ef\u9009: HTTP \u91cd\u5b9a\u5411\u5230 HTTPS\n    server {\n        listen 80;\n        server_name your_domain.com;  # \u66ff\u6362\u4e3a\u60a8\u7684\u57df\u540d\n\n        return 301 https://$host$request_uri;\n    }\n}\n')),(0,r.kt)("p",null,"\u5c06\u6b64\u914d\u7f6e\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/nginx/conf/nginx.conf"),"\uff09\uff0c\u5e76\u91cd\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," \u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nginx -t  \nsudo systemctl restart nginx  \n")),(0,r.kt)("h3",{id:"4-\u8bbe\u7f6e-dns"},"4. \u8bbe\u7f6e DNS"),(0,r.kt)("p",null,"\u5c06\u60a8\u7684\u57df\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"your_domain.com")," \u6307\u5411\u673a\u5668A B\u7684\u5916\u7f51 IP \u5730\u5740\u3002"),(0,r.kt)("h3",{id:"5-\u542f\u52a8\u670d\u52a1"},"5. \u542f\u52a8\u670d\u52a1"),(0,r.kt)("p",null,"\u5728\u4e24\u53f0\u673a\u5668\uff08A \u548c B\uff09\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server")," \u76ee\u5f55\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u7f16\u8bd1\u548c\u542f\u52a8\u670d\u52a1\uff1a"),(0,r.kt)("h4",{id:"51-\u7f16\u8bd1"},"5.1 \u7f16\u8bd1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mage\n")),(0,r.kt)("h4",{id:"52-\u542f\u52a8\u670d\u52a1"},"5.2 \u542f\u52a8\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mage start\n")),(0,r.kt)("h3",{id:"6-\u4fee\u6539\u5ba2\u6237\u7aef-sdk-\u521d\u59cb\u5316\u53c2\u6570"},"6. \u4fee\u6539\u5ba2\u6237\u7aef SDK \u521d\u59cb\u5316\u53c2\u6570"),(0,r.kt)("p",null,"\u5728\u5ba2\u6237\u7aef SDK \u4e2d\uff0c\u914d\u7f6e\u521d\u59cb\u5316\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apiAddr"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"https://your_domain.com/api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wsAddr"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"https://your_domain.com/msg_gateway"))),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u6ce8\u610f\u4e8b\u9879"},(0,r.kt)("strong",{parentName:"h2"},"\u5e38\u89c1\u95ee\u9898/\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),"\u65f6\uff0c\u9700\u8981\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),"\u5e7f\u64ad\u7684\u7aef\u53e3\u3002\u5982\u679c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-server"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u90e8\u7f72\uff0c\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"service.kafka.environment.KAFKA_CFG_ADVERTISED_LISTENERS"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL"),"\u4e3a\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),"\u7ec4\u4ef6\u7684\u5730\u5740\u3002\u5176\u4ed6\u90e8\u7f72\u65b9\u5f0f\u8bf7\u81ea\u884c\u4fee\u6539\u3002\n\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"KAFKA_CFG_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,EXTERNAL://192.168.2.36:19094"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u591a\u53f0\u673a\u5668\u90e8\u7f72\u9700\u8981\u4fdd\u8bc1\u65f6\u949f\u4e00\u81f4\uff0c\u670d\u52a1\u624d\u53ef\u6b63\u5e38\u8fd0\u884c\u3002\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"token"),"\u7684\u7b7e\u53d1\u5141\u8bb8\u5404\u4e2a\u673a\u5668\u7684\u65f6\u949f\u8bef\u5dee\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"5s"),"\u4ee5\u5185\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u7aef\u53e3\u65e0\u6cd5\u8bbf\u95ee\uff1a\u901a\u8fc7\u56de\u73af\u5730\u5740\u68c0\u6d4b\u7ec4\u4ef6\u542f\u52a8\u662f\u5426\u6b63\u5e38\uff0c\u82e5\u56de\u73af\u5730\u5740\u53ef\u8bbf\u95ee\uff0c\u5219\u68c0\u67e5\u662f\u5426\u88ab\u9632\u706b\u5899\u89c4\u5219\u8fc7\u6ee4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u96c6\u7fa4\u673a\u5668",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5728\u5185\u7f51\u4e2d"),"\uff0c\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"autoSetPorts"),"\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5e76\u4fee\u6539\u5404\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"rpc"),"\u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"registerIP"),"\u4e3a\u8bbe\u7f6e\u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"p"},"etcd"),"\u7684\u670d\u52a1\u5668\u53ef\u8bbf\u95ee\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ip"),"\u5730\u5740\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5e76\u4fdd\u8bc1\u5404\u4e2a\u7aef\u53e3\u53ef\u88ab\u8bbf\u95ee"),"\u3002\u5982\u9700\u542f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus"),"\uff0c\u8fd8\u9700\u8981\u4fdd\u8bc1\u5404\u4e2a\u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.port"),"\u7aef\u53e3\u53ef\u88ab\u8bbf\u95ee\u3002\n\u62e5\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"autoSetPorts"),"\u914d\u7f6e\u7684\u7ec4\u4ef6\u5982\u4e0b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-api.yml:prometheus.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-msggateway.yml:rpc.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-msgtransfer.yml:prometheus.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-push.yml:rpc.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-auth.yml:rpc.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-conversation.yml:rpc.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-friend.yml:rpc.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-group.yml:rpc.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-msg.yml:rpc.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-third.yml:rpc.autoSetPorts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-user.yml:rpc.autoSetPorts"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"rpc0",src:n(83658).Z,width:"1393",height:"369"})),(0,r.kt)("p",{parentName:"li"},"\u6b64\u5916\uff0c\u673a\u5668A\u8fd8\u9700\u8981\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.yml"),"\uff0c\u5c06\u5176\u4e2d\u7684\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"http_sd_configs"),"\u914d\u7f6e\u9879\u53ca\u5176\u5b50\u914d\u7f6e\u9879\u53bb\u6389\uff0c\u52a0\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"static_configs"),"\u914d\u7f6e\u9879\uff0c\u5e76\u5c06\u5176\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"targets"),"\u6539\u4e3a\u5bf9\u5e94\u7684\u670d\u52a1\u7684\u7aef\u53e3\u3002\n\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"openimserver-openim-api"),"\u8868\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"\u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus"),"\u6570\u636e\u6293\u53d6\uff0c\u5219\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"target"),"\u4e2d\u7684\u7aef\u53e3\u5730\u5740\u5e94\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"openim-api.yml"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.ports"),"\u4e00\u81f4\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"prometheus0",src:n(81189).Z,width:"960",height:"757"})))))}u.isMDXComponent=!0},81189:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus0-c9f806d4aadf70d6e399bc5e2e2be447.png"},83658:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rpc0-8c5909ddb8b5a525d7610a657865b05c.png"}}]);