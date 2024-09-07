"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[57278],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),m=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(g.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=m(n),c=a,u=y["".concat(g,".").concat(c)]||y[c]||d[c]||l;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(58168),a=(n(96540),n(15680));const l={id:"docker",title:"Monitor\uff1aDocker Monitor",sidebar_label:"Docker Monitor",keywords:["open source monitoring tool","open source docker monitoring tool","monitoring docker metrics"]},o=void 0,i={unversionedId:"help/docker",id:"version-v1.5.x/help/docker",title:"Monitor\uff1aDocker Monitor",description:"Collect and monitor general performance Metrics of Docker containers.",source:"@site/versioned_docs/version-v1.5.x/help/docker.md",sourceDirName:"help",slug:"/help/docker",permalink:"/docs/v1.5.x/help/docker",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/docker.md",tags:[],version:"v1.5.x",frontMatter:{id:"docker",title:"Monitor\uff1aDocker Monitor",sidebar_label:"Docker Monitor",keywords:["open source monitoring tool","open source docker monitoring tool","monitoring docker metrics"]},sidebar:"docs",previous:{title:"Jetty Web Server",permalink:"/docs/v1.5.x/help/jetty"},next:{title:"Kubernetes Monitor",permalink:"/docs/v1.5.x/help/kubernetes"}},g={},m=[{value:"Pre-monitoring operations",id:"pre-monitoring-operations",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"Metric collection: system",id:"metric-collection-system",level:4},{value:"Metric collection: containers",id:"metric-collection-containers",level:4},{value:"Metrics collection: stats",id:"metrics-collection-stats",level:4}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect and monitor general performance Metrics of Docker containers.")),(0,a.yg)("h2",{id:"pre-monitoring-operations"},"Pre-monitoring operations"),(0,a.yg)("p",null,"If you want to monitor the container information in ",(0,a.yg)("inlineCode",{parentName:"p"},"Docker"),", you need to open the port according to the following steps, so that the collection request can obtain the corresponding information."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Edit the docker.server file:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"vi /usr/lib/systemd/system/docker.service\n")),(0,a.yg)("p",null,"Find the ",(0,a.yg)("strong",{parentName:"p"},"[Service]")," node, modify the ExecStart property, and add ",(0,a.yg)("inlineCode",{parentName:"p"},"-H tcp://0.0.0.0:2375")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375\n")),(0,a.yg)("p",null,"This is equivalent to the ",(0,a.yg)("strong",{parentName:"p"},"2375")," port that is open to the outside world. Of course, it can be modified to other ports according to your own situation."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Reload the Docker configuration to take effect:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\nsystemctl restart docker\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note: Remember to open the ",(0,a.yg)("inlineCode",{parentName:"strong"},"2375")," port number in the server console.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. If the above method does not work:")),(0,a.yg)("p",null,"Open the ",(0,a.yg)("inlineCode",{parentName:"p"},"2375")," port number inside the server."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"firewall-cmd --zone=public --add-port=2375/tcp --permanent\nfirewall-cmd --reload\n")),(0,a.yg)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitor Host"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitored peer IPV4, IPV6 or domain name. Note \u26a0\ufe0f without protocol headers (eg: https://, http://).")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitor Name"),(0,a.yg)("td",{parentName:"tr",align:null},"Identifies the name of this monitor. The name needs to be unique.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"The port provided by the database externally, the default is 2375.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Query Timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"Set the timeout when getting the Docker server API interface, in ms, the default is 3000 ms.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Container Name"),(0,a.yg)("td",{parentName:"tr",align:null},"Generally monitors all running container information.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},"connection username, optional")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"connection password, optional")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"URL"),(0,a.yg)("td",{parentName:"tr",align:null},"Database connection URL, optional, if configured, the parameters such as database name, username and password in the URL will override the parameters configured above")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Collection Interval"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitor periodical collection data interval, in seconds, the minimum interval that can be set is 30 seconds")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and then continue to add and modify operations if the detection is successful")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description Remarks"),(0,a.yg)("td",{parentName:"tr",align:null},"More remarks that identify and describe this monitoring, users can remark information here")))),(0,a.yg)("h3",{id:"collect-metrics"},"Collect metrics"),(0,a.yg)("h4",{id:"metric-collection-system"},"Metric collection: system"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Name"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Server Name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"version"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"docker version number")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"os"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"server version eg: linux x86_64")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"root_dir"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"docker folder directory eg: /var/lib/docker")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"containers"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Total number of containers (running + not running)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"containers_running"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of running containers")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"containers_paused"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"number of containers in pause")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"images"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The total number of container images.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ncpu"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"ncpu")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mem_total"),(0,a.yg)("td",{parentName:"tr",align:null},"MB"),(0,a.yg)("td",{parentName:"tr",align:null},"Total size of memory used")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"system_time"),(0,a.yg)("td",{parentName:"tr",align:null},"none"),(0,a.yg)("td",{parentName:"tr",align:null},"system time")))),(0,a.yg)("h4",{id:"metric-collection-containers"},"Metric collection: containers"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"id"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The ID of the container in Docker")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"name"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The container name in the Docker container")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"image"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Image used by the Docker container")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"command"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Default startup command in Docker")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"state"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The running state of the container in Docker")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"status"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Update time in Docker container")))),(0,a.yg)("h4",{id:"metrics-collection-stats"},"Metrics collection: stats"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"name"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The name in the Docker container")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"available_memory"),(0,a.yg)("td",{parentName:"tr",align:null},"MB"),(0,a.yg)("td",{parentName:"tr",align:null},"The amount of memory that the Docker container can utilize")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"used_memory"),(0,a.yg)("td",{parentName:"tr",align:null},"MB"),(0,a.yg)("td",{parentName:"tr",align:null},"The amount of memory already used by the Docker container")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"memory_usage"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Memory usage of the Docker container")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cpu_delta"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The number of CPUs already used by the Docker container")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"number_cpus"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The number of CPUs that the Docker container can use")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cpu_usage"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"Docker container CPU usage")))))}d.isMDXComponent=!0}}]);