"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[83614],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=m(n),y=r,c=d["".concat(p,".").concat(y)]||d[y]||u[y]||l;return n?a.createElement(c,o(o({ref:t},g),{},{components:n})):a.createElement(c,o({ref:t},g))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(58168),r=(n(96540),n(15680));const l={id:"dynamic_tp",title:"Monitoring DynamicTp ThreadPool",sidebar_label:"DynamicTp Monitor",keywords:["open source monitoring tool","open source dynamicTp monitoring tool","monitoring DynamicTp metrics"]},o=void 0,i={unversionedId:"help/dynamic_tp",id:"version-v1.5.x/help/dynamic_tp",title:"Monitoring DynamicTp ThreadPool",description:"Collect and monitor the thread pool performance Metrics exposed by DynamicTp actuator.",source:"@site/versioned_docs/version-v1.5.x/help/dynamic_tp.md",sourceDirName:"help",slug:"/help/dynamic_tp",permalink:"/docs/v1.5.x/help/dynamic_tp",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/dynamic_tp.md",tags:[],version:"v1.5.x",frontMatter:{id:"dynamic_tp",title:"Monitoring DynamicTp ThreadPool",sidebar_label:"DynamicTp Monitor",keywords:["open source monitoring tool","open source dynamicTp monitoring tool","monitoring DynamicTp metrics"]},sidebar:"docs",previous:{title:"SpringBoot 3.0",permalink:"/docs/v1.5.x/help/springboot3"},next:{title:"MySQL database",permalink:"/docs/v1.5.x/help/mysql"}},p={},m=[{value:"PreRequisites",id:"prerequisites",level:3},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"Metric collection: thread_pool",id:"metric-collection-thread_pool",level:4}],g={toc:m};function u(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Collect and monitor the thread pool performance Metrics exposed by DynamicTp actuator.")),(0,r.yg)("h3",{id:"prerequisites"},"PreRequisites"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Integration Using ",(0,r.yg)("inlineCode",{parentName:"p"},"DynamicTp")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"DynamicTp")," is a lightweight dynamic thread pool based on the configuration center of the Jvm language. It has built-in monitoring and alarm functions, which can be realized through SPI custom extensions."),(0,r.yg)("p",{parentName:"li"},"For integrated use, please refer to the document ",(0,r.yg)("a",{parentName:"p",href:"https://dynamictp.cn/guide/use/quick-start.html"},"Quick Start"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open SpringBoot Actuator Endpoint to expose ",(0,r.yg)("inlineCode",{parentName:"p"},"DynamicTp")," Metric interface"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"management:\n   endpoints:\n     web:\n       exposure:\n         include: '*'\n")),(0,r.yg)("p",{parentName:"li"},"Test whether the access Metric interface ",(0,r.yg)("inlineCode",{parentName:"p"},"ip:port/actuator/dynamic-tp")," has response json data as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n   {\n     "poolName": "commonExecutor",\n     "corePoolSize": 1,\n     "maximumPoolSize": 1,\n     "queueType": "LinkedBlockingQueue",\n     "queueCapacity": 2147483647,\n     "queueSize": 0,\n     "fair": false,\n     "queueRemainingCapacity": 2147483647,\n     "activeCount": 0,\n     "taskCount": 0,\n     "completedTaskCount": 0,\n     "largestPoolSize": 0,\n     "poolSize": 0,\n     "waitTaskCount": 0,\n     "rejectCount": 0,\n     "rejectHandlerName": null,\n     "dynamic": false,\n     "runTimeoutCount": 0,\n     "queueTimeoutCount": 0\n   },\n   {\n     "maxMemory": "4GB",\n     "totalMemory": "444MB",\n     "freeMemory": "250.34 MB",\n     "usableMemory": "3.81GB"\n   }\n]\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add DynamicTp monitoring under HertzBeat middleware monitoring"))),(0,r.yg)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.yg)("td",{parentName:"tr",align:null},"The peer IPV4, IPV6 or domain name to be monitored. Note \u26a0\ufe0fWithout protocol header (eg: https://, http://).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.yg)("td",{parentName:"tr",align:null},"The name that identifies this monitoring, and the name needs to be unique.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Port"),(0,r.yg)("td",{parentName:"tr",align:null},"The port provided by the application service, the default is 8080.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Enable HTTPS"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to access the website through HTTPS, note \u26a0\ufe0fEnable HTTPS, the default corresponding port needs to be changed to 443")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Base Path"),(0,r.yg)("td",{parentName:"tr",align:null},"Exposed interface path prefix, default /actuator")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Acquisition Interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Interval time for monitoring periodic data collection, in seconds, the minimum interval that can be set is 30 seconds")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and the operation of adding and modifying will continue after the detection is successful")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Remarks"),(0,r.yg)("td",{parentName:"tr",align:null},"More remark information to identify and describe this monitoring, users can remark information here")))),(0,r.yg)("h3",{id:"collect-metrics"},"Collect metrics"),(0,r.yg)("h4",{id:"metric-collection-thread_pool"},"Metric collection: thread_pool"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.yg)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pool_name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Thread pool name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"core_pool_size"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of core threads")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maximum_pool_size"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of threads")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_type"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Task queue type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_capacity"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"task queue capacity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_size"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"The current occupied size of the task queue")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fair"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Queue mode, SynchronousQueue will be used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_remaining_capacity"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"task queue remaining size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"active_count"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of active threads")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"task_count"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Total number of tasks")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"completed_task_count"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of completed tasks")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largest_pool_size"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"The largest number of threads in history")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pool_size"),(0,r.yg)("td",{parentName:"tr",align:null},"none"),(0,r.yg)("td",{parentName:"tr",align:null},"current number of threads")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"wait_task_count"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of tasks waiting to be executed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"reject_count"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of rejected tasks")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"reject_handler_name"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Reject policy type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dynamic"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Dynamic thread pool or not")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"run_timeout_count"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of running timeout tasks")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_timeout_count"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of tasks waiting for timeout")))))}u.isMDXComponent=!0}}]);