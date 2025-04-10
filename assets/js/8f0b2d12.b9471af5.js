"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[24358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,d=u["".concat(p,".").concat(s)]||u[s]||k[s]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"\u5355\u673a\u751f\u4ea7\u73af\u5883\u5f02\u5e38\u5904\u7406\u53ca\u6570\u636e\u6062\u590d",sidebar_position:12},p=void 0,m={unversionedId:"gettingStarted/faultRecovery",id:"gettingStarted/faultRecovery",title:"\u5355\u673a\u751f\u4ea7\u73af\u5883\u5f02\u5e38\u5904\u7406\u53ca\u6570\u636e\u6062\u590d",description:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u901a\u5e38\u4f1a\u91c7\u7528\u96c6\u7fa4\u90e8\u7f72\u6765\u4fdd\u8bc1\u7ec4\u4ef6\u548c\u670d\u52a1\u7684\u9ad8\u53ef\u7528\u6027\u3002\u7136\u800c\uff0c\u5728\u8d44\u6e90\u6709\u9650\u7684\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e9b\u5f00\u53d1\u8005\u53ef\u80fd\u4f1a\u9009\u62e9\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fdb\u884c\u5355\u673a\u90e8\u7f72\uff08\u4f7f\u7528\u6e90\u7801\u90e8\u7f72\u6216docker\u5bb9\u5668\uff09\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5728\u5355\u673a\u90e8\u7f72\u73af\u5883\u4e0b\u5982\u4f55\u8fdb\u884c\u6570\u636e\u5907\u4efd\u3001\u5f02\u5e38\u6062\u590d\uff0c\u4ee5\u53ca\u6f5c\u5728\u7684\u98ce\u9669\u3002",source:"@site/docs/guides/gettingStarted/faultRecovery.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/faultRecovery",permalink:"/guides/gettingStarted/faultRecovery",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/faultRecovery.mdx",tags:[],version:"current",lastUpdatedAt:1744272715,formattedLastUpdatedAt:"Apr 10, 2025",sidebarPosition:12,frontMatter:{title:"\u5355\u673a\u751f\u4ea7\u73af\u5883\u5f02\u5e38\u5904\u7406\u53ca\u6570\u636e\u6062\u590d",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u4e2d\u5fc3",permalink:"/guides/gettingStarted/config-center"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/guides/gettingStarted/faq"}},c={},u=[{value:"\u4e00\u3001mongo\u5b9a\u65f6\u6570\u636e\u5907\u4efd",id:"\u4e00mongo\u5b9a\u65f6\u6570\u636e\u5907\u4efd",level:2},{value:"\u6570\u636e\u5907\u4efd",id:"\u6570\u636e\u5907\u4efd",level:3},{value:"\u4e8c\u3001\u7ec4\u4ef6\u5f02\u5e38\u505c\u6b62\u5904\u7406",id:"\u4e8c\u7ec4\u4ef6\u5f02\u5e38\u505c\u6b62\u5904\u7406",level:2},{value:"\u4e09\u3001\u6f5c\u5728\u98ce\u9669",id:"\u4e09\u6f5c\u5728\u98ce\u9669",level:2}],k={toc:u},s="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(s,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u901a\u5e38\u4f1a\u91c7\u7528\u96c6\u7fa4\u90e8\u7f72\u6765\u4fdd\u8bc1\u7ec4\u4ef6\u548c\u670d\u52a1\u7684\u9ad8\u53ef\u7528\u6027\u3002\u7136\u800c\uff0c\u5728\u8d44\u6e90\u6709\u9650\u7684\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e9b\u5f00\u53d1\u8005\u53ef\u80fd\u4f1a\u9009\u62e9\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fdb\u884c\u5355\u673a\u90e8\u7f72\uff08\u4f7f\u7528\u6e90\u7801\u90e8\u7f72\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\u5bb9\u5668\uff09\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5728\u5355\u673a\u90e8\u7f72\u73af\u5883\u4e0b\u5982\u4f55\u8fdb\u884c\u6570\u636e\u5907\u4efd\u3001\u5f02\u5e38\u6062\u590d\uff0c\u4ee5\u53ca\u6f5c\u5728\u7684\u98ce\u9669\u3002"),(0,r.kt)("h2",{id:"\u4e00mongo\u5b9a\u65f6\u6570\u636e\u5907\u4efd"},"\u4e00\u3001mongo\u5b9a\u65f6\u6570\u636e\u5907\u4efd"),(0,r.kt)("p",null,"OpenIM\u6838\u5fc3\u6570\u636e\u5b58\u50a8\u5728MongoDB\u4e2d\uff0c\u56e0\u6b64\u5907\u4efdMongoDB\u6570\u636e\u5c31\u80fd\u6062\u590d\u5927\u90e8\u5206\u6570\u636e\u3002\u5728\u5bb9\u5668\u542f\u52a8\u4e4b\u524d\uff0c\u8bbe\u7f6emongo\u6570\u636e\u5907\u4efd\u76ee\u5f55\u548c\u5b9a\u65f6\u4efb\u52a1\u3002"),(0,r.kt)("h3",{id:"\u6570\u636e\u5907\u4efd"},"\u6570\u636e\u5907\u4efd"),(0,r.kt)("p",null,"OpenIM\u670d\u52a1\u7684\u6838\u5fc3\u6570\u636e\u5b58\u50a8\u5728MongoDB\u4e2d\uff0c\u56e0\u6b64\u5907\u4efdMongoDB\u6570\u636e\u5c31\u80fd\u6062\u590d\u5927\u90e8\u5206\u6570\u636e\u3002\u4ee5\u4e0b\u662f\u5907\u4efd\u7684\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4fee\u6539\u5907\u4efd\u76ee\u5f55")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env"),"\u6587\u4ef6\u4e2d\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"li"},"MONGO_BACKUP_DIR"),"\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"components/backup/mongo/"),"\u3002\u5efa\u8bae\u5c06\u5907\u4efd\u76ee\u5f55\u8bbe\u7f6e\u4e3a\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"components"),"\u76ee\u5f55\u4e0d\u540c\u7684\u78c1\u76d8\u8def\u5f84\uff0c\u4ee5\u907f\u514d\u540c\u4e00\u78c1\u76d8\u6545\u969c\u5bfc\u81f4\u539f\u59cb\u6570\u636e\u548c\u5907\u4efd\u6570\u636e\u540c\u65f6\u4e22\u5931\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u65f6\u5907\u4efd\u914d\u7f6e")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6eLinux\u7cfb\u7edf\u7684\u5b9a\u65f6\u5907\u4efd\u4efb\u52a1\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u7f16\u8f91crontab\uff1a")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"crontab -e\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5982\u4e0b\u5b9a\u65f6\u4efb\u52a1\uff0c\u8868\u793a\u6bcf\u5929\u51cc\u66682\u70b9\u6267\u884c\u5907\u4efd\uff0c\u5e76\u4fdd\u5b58\u6700\u65b0\u76842\u4e2a\u5907\u4efd\u6587\u4ef6\u3002\u5982\u679c\u9700\u8981\u5176\u4ed6\u5b9a\u65f6\u89c4\u5219\uff0c\u8bf7\u8c03\u6574",(0,r.kt)("inlineCode",{parentName:"li"},"cron"),"\u8868\u8fbe\u5f0f\uff1a")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'0 2 * * * docker exec mongo mongodump --uri="mongodb://openIM:openIM123@localhost:27017/openim_v3" --out="/data/backup/$(expr $(date +\\%s) / 86400 \\% 2)"\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"crontab -l"),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u5b9a\u65f6\u4efb\u52a1\u662f\u5426\u8bbe\u7f6e\u6210\u529f\u3002")))),(0,r.kt)("h2",{id:"\u4e8c\u7ec4\u4ef6\u5f02\u5e38\u505c\u6b62\u5904\u7406"},"\u4e8c\u3001\u7ec4\u4ef6\u5f02\u5e38\u505c\u6b62\u5904\u7406"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"redis"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," \u7b49\u7ec4\u4ef6\u5f02\u5e38\u505c\u6b62\uff0c\u9996\u5148\u5c1d\u8bd5\u91cd\u542f\u6240\u6709\u7ec4\u4ef6\u548c OpenIM \u670d\u52a1\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u7531\u4e8e\u6570\u636e\u95ee\u9898\uff08\u5982\u78c1\u76d8\u6545\u969c\u3001\u78c1\u76d8\u6ee1\u7b49\uff09\u5bfc\u81f4\u670d\u52a1\u542f\u52a8\u5931\u8d25\uff0c\u5219\u5148\u505c\u6b62\u6240\u6709\u7ec4\u4ef6\u548c OpenIM \u670d\u52a1\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"redis")," \u542f\u52a8\u5931\u8d25\uff0c\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"li"},"components/redis/")," \u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka")," \u542f\u52a8\u5931\u8d25\uff0c\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"li"},"components/kafka/")," \u76ee\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"mongo")," \u542f\u52a8\u5931\u8d25",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"li"},"components/redis/")," ",(0,r.kt)("inlineCode",{parentName:"li"},"components/mongodb/")," ",(0,r.kt)("inlineCode",{parentName:"li"},"components/kafka/"),"\u76ee\u5f55"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},'\u6062\u590d\u5907\u4efd\u6570\u636e docker exec -it mongo mongorestore --uri="mongodb://openIM:openIM123@localhost:27017/openim_v3" /data/backup/your_backup_name/openim_v3 '))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"your_backup_name \u4e3a0 \u6216\u80051\uff0c \u9009\u62e9\u65f6\u95f4\u8f83\u65b0\u7684\u90a3\u4e2a\u76ee\u5f55")))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"etcd")," \u542f\u52a8\u5931\u8d25\uff0c\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"li"},"components/etcd/")," \u76ee\u5f55\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8fdb\u884c\u4e0a\u8ff0\u64cd\u4f5c\u540e\uff0c\u91cd\u542f\u6240\u6709\u7ec4\u4ef6\u548c OpenIM \u670d\u52a1\u3002"))),(0,r.kt)("h2",{id:"\u4e09\u6f5c\u5728\u98ce\u9669"},"\u4e09\u3001\u6f5c\u5728\u98ce\u9669"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5355\u673a\u90e8\u7f72\u98ce\u9669"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u673a\u5668\u6545\u969c\u5bfc\u81f4\u539f\u59cb\u6570\u636e\u78c1\u76d8\u548c\u5907\u4efd\u78c1\u76d8\u90fd\u65e0\u6cd5\u8bbf\u95ee\uff0c\u5219\u65e0\u6cd5\u76f4\u63a5\u6062\u590d\u6570\u636e\u3002\u6b64\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u901a\u8fc7\u8fd0\u8425\u5546\u7684\u5feb\u7167\u670d\u52a1\u6765\u6062\u590d\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5907\u4efd\u76ee\u5f55\u5efa\u8bae"),(0,r.kt)("br",{parentName:"p"}),"\n","\u4e3a\u9632\u6b62\u7531\u4e8e\u5355\u4e00\u78c1\u76d8\u6545\u969c\u5bfc\u81f4\u7684\u6570\u636e\u4e22\u5931\uff0c\u5efa\u8bae\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo")," \u7684\u5907\u4efd\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"MONGO_BACKUP_DIR")," \u8bbe\u7f6e\u4e3a\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," \u76ee\u5f55\u5206\u5f00\u7684\u78c1\u76d8\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u6062\u590d\u98ce\u9669"),(0,r.kt)("br",{parentName:"p"}),"\n","\u6062\u590d MongoDB \u6570\u636e\u65f6\uff0c\u5907\u4efd\u65f6\u95f4\u4e4b\u540e\u7684\u6570\u636e\u5c06\u4f1a\u4e22\u5931\u3002\u56e0\u6b64\uff0c\u5907\u4efd\u9891\u7387\u8fc7\u5feb\u53ef\u80fd\u4f1a\u5bf9 MongoDB \u7684\u6027\u80fd\u9020\u6210\u8f83\u5927\u7684\u5f71\u54cd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Redis \u6570\u636e\u5220\u9664\u7684\u5f71\u54cd"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u5220\u9664 Redis \u4e2d\u7684\u6570\u636e\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 ",(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u672a\u8bfb\u6570\u4e0d\u6b63\u786e"),"\u3002"))))}d.isMDXComponent=!0}}]);