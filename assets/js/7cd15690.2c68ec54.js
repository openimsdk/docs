"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[75543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"k8s Deployment - To be refined",sidebar_position:5},s="OpenIM Kubernetes Deployment - To Be Refined",p={unversionedId:"gettingStarted/k8s-deployment",id:"gettingStarted/k8s-deployment",title:"k8s Deployment - To be refined",description:"OpenIM supports multiple cluster deployment methods, including but not limited to helm, sealos, and kustomize.",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/k8s-deployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/k8s-deployment",permalink:"/guides/gettingStarted/k8s-deployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/k8s-deployment.mdx",tags:[],version:"current",lastUpdatedAt:1724413340,formattedLastUpdatedAt:"Aug 23, 2024",sidebarPosition:5,frontMatter:{title:"k8s Deployment - To be refined",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Quick Verification",permalink:"/guides/gettingStarted/quickTestServer"},next:{title:"Monitoring and Alert System",permalink:"/guides/gettingStarted/admin"}},u={},m=[{value:"Dependency Check",id:"dependency-check",level:3},{value:"Minimum Configuration",id:"minimum-configuration",level:3},{value:"Configuration File Generation",id:"configuration-file-generation",level:2},{value:"Installing Helm",id:"installing-helm",level:3},{value:"OpenIM Image Strategy",id:"openim-image-strategy",level:3},{value:"Installation",id:"installation",level:2},{value:"Cluster Setup Reference",id:"cluster-setup-reference",level:2},{value:"Cluster Installation:",id:"cluster-installation",level:4}],c={toc:m},d="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openim-kubernetes-deployment---to-be-refined"},"OpenIM Kubernetes Deployment - To Be Refined"),(0,r.kt)("p",null,"OpenIM supports multiple cluster deployment methods, including but not limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sealos"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomize"),"."),(0,r.kt)("p",null,"Several contributors and previous official versions have provided some reference solutions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenIMSDK/k8s-jenkins"},"k8s-jenkins repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openimsdk/open-im-server-k8s-deploy"},"open-im-server-k8s-deploy repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenIMSDK/openim-charts"},"openim-charts repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/showurl/deploy-openim"},"deploy-openim repository"))),(0,r.kt)("h3",{id:"dependency-check"},"Dependency Check"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Kubernetes: >= 1.16.0-0\nHelm: >= 3.0\n")),(0,r.kt)("h3",{id:"minimum-configuration"},"Minimum Configuration"),(0,r.kt)("p",null,"For production environments, the recommended minimum configuration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"CPU: 4\nMemory: 8G\nDisk: 100G\n")),(0,r.kt)("h2",{id:"configuration-file-generation"},"Configuration File Generation"),(0,r.kt)("p",null,"We have automated the generation of all files, making it optional to generate configuration files for OpenIM. However, if you want to customize the configuration, you can follow these steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ make init\n# Or use the script:\n# ./scripts/init-config.sh\n")),(0,r.kt)("p",null,"At this point, the configuration files will be generated under ",(0,r.kt)("inlineCode",{parentName:"p"},"deployments/openim/config"),", and you can modify them as needed."),(0,r.kt)("h3",{id:"installing-helm"},"Installing Helm"),(0,r.kt)("p",null,"Helm simplifies Kubernetes application deployment and management by providing version control and release management through packaging."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using Script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Adding Repository:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo add brigade https://openimsdk.github.io/openim-charts\n")),(0,r.kt)("h3",{id:"openim-image-strategy"},"OpenIM Image Strategy"),(0,r.kt)("p",null,"Automated support includes images from Aliyun, GHCR, and Docker Hub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-server/blob/main/docs/conversions/images.md"},"Image Documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Local Test Build Method:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ make image\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This command helps to quickly build the required images locally. For detailed build strategies, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-server/blob/main/build/README.md"},"Build Documentation"),".")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Browse our Helm-Charts repository and read carefully: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/helm-charts"},"Helm-Charts repository"),"."),(0,r.kt)("p",null,"If you use the helm charts repository, you can skip the following configuration, but if you only want to use the server and extend it, you can continue:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using Helmfile:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'GO111MODULE=on go get github.com/roboll/helmfile@latest\nexport MYSQL_ADDRESS=im-mysql\nexport MYSQL_PORT=3306\nexport MONGO_ADDRESS=im-mongo\nexport MONGO_PORT=27017\nexport REDIS_ADDRESS=im-redis-master\nexport REDIS_PORT=6379\nexport KAFKA_ADDRESS=im-kafka\nexport KAFKA_PORT=9092\nexport OBJECT_APIURL="https://openim.server.com/api"\nexport MINIO_ENDPOINT="http://im-minio:9000"\nexport MINIO_SIGN_ENDPOINT="https://openim.server.com/im-minio-api"\n\nmkdir ./charts/generated-configs\n../scripts/genconfig.sh ../scripts/install/environment.sh ./templates/openim.yaml > ./charts/generated-configs/config.yaml\ncp ../config/notification.yaml ./charts/generated-configs/notification.yaml\n../scripts/genconfig\n')),(0,r.kt)("h2",{id:"cluster-setup-reference"},"Cluster Setup Reference"),(0,r.kt)("p",null,"If you already have a Kubernetes cluster, or you wish to build one from scratch, you can skip this step."),(0,r.kt)("p",null,"For quick startup, I used ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/labring/sealos"},"sealos")," to rapidly establish a cluster. Sealos is a wrapper around kubeadm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SEALOS_VERSION=`curl -s https://api.github.com/repos/labring/sealos/releases/latest | grep -oE \'"tag_name": "[^"]+"\' | head -n1 | cut -d\'"\' -f4` && \\\n  curl -sfL https://raw.githubusercontent.com/labring/sealos/${SEALOS_VERSION}/scripts/install.sh | \\\n  sh -s ${SEALOS_VERSION} labring/sealos\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported Versions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker: ",(0,r.kt)("inlineCode",{parentName:"li"},"labring/kubernetes-docker"),":(v1.24.0~v1.27.0)"),(0,r.kt)("li",{parentName:"ul"},"Containerd: ",(0,r.kt)("inlineCode",{parentName:"li"},"labring/kubernetes"),":(v1.24.0~v1.27.0)")),(0,r.kt)("h4",{id:"cluster-installation"},"Cluster Installation:"),(0,r.kt)("p",null,"Cluster details are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("th",{parentName:"tr",align:null},"IP Address"),(0,r.kt)("th",{parentName:"tr",align:null},"System Info"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master01"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Linux VM-0-9-ubuntu 5.15.0-76-generic #83-Ubuntu SMP Thu Jun 15 19:16:32 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node01"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.4"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to master01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node02"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.10"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to master01")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ export CLUSTER_USERNAME=ubuntu\n$ export CLUSTER_PASSWORD=123456\n$ sudo sealos run labring/kubernetes:v1.25.0 labring/helm:v3.8.2 labring/calico:v3.24.1 \\\n    --masters 10.0.0.9 \\\n    --nodes 10.0.0.4,10.0.0.10 \\\n    -u "$CLUSTER_USERNAME" \\\n    -p "$CLUSTER_PASSWORD"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Uninstalling via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm")," does not delete ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cni")," configurations. These must be manually cleared or removed using ",(0,r.kt)("inlineCode",{parentName:"p"},"sealos"),"."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sealos reset\n"))),(0,r.kt)("p",null,"If you are testing locally, you can also use Kind or Minikube, for example, with Kind:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'GO111MODULE="on" go get sigs.k8s.io/kind@v0.11.1\nkind create cluster\n')))}g.isMDXComponent=!0}}]);