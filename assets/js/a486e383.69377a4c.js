"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[10533],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,y=m["".concat(p,".").concat(d)]||m[d]||g[d]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const i={id:"package-deploy",title:"Install HertzBeat via Package",sidebar_label:"Install via Package"},o=void 0,l={unversionedId:"start/package-deploy",id:"version-v1.5.x/start/package-deploy",title:"Install HertzBeat via Package",description:"You can install and run Apache HertzBeat (incubating) on Linux Windows Mac system, and CPU supports X86/ARM64.",source:"@site/versioned_docs/version-v1.5.x/start/package-deploy.md",sourceDirName:"start",slug:"/start/package-deploy",permalink:"/docs/v1.5.x/start/package-deploy",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/start/package-deploy.md",tags:[],version:"v1.5.x",frontMatter:{id:"package-deploy",title:"Install HertzBeat via Package",sidebar_label:"Install via Package"},sidebar:"docs",previous:{title:"Install via Docker",permalink:"/docs/v1.5.x/start/docker-deploy"},next:{title:"Install via Rainbond",permalink:"/docs/v1.5.x/start/rainbond-deploy"}},p={},s=[{value:"FAQ",id:"faq",level:3}],c={toc:s};function g(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"You can install and run Apache HertzBeat (incubating) on Linux Windows Mac system, and CPU supports X86/ARM64.")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download HertzBeat installation package\nDownload installation package ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat-xx.tar.gz")," ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat-collector-xx.tar.gz")," corresponding to your system environment"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/download"},"Download Page")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure HertzBeat's configuration file(optional)\nUnzip the installation package to the host eg: /opt/hertzbeat"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ tar zxvf hertzbeat-xx.tar.gz\nor\n$ unzip -o hertzbeat-xx.zip\n")),(0,r.yg)("p",{parentName:"li"},"Modify the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," params according to your needs."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"If you need to use email to send alarms, you need to replace the email server parameters ",(0,r.yg)("inlineCode",{parentName:"li"},"spring.mail")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"application.yml")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Recommended")," If you need to use an external Mysql database to replace the built-in H2 database, you need to replace the ",(0,r.yg)("inlineCode",{parentName:"li"},"spring.datasource")," parameter in ",(0,r.yg)("inlineCode",{parentName:"li"},"application.yml")," For specific steps, see ",(0,r.yg)("a",{parentName:"li",href:"mysql-change"},"Using Mysql to replace H2 database"),"  "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Highly recommended")," From now on we will mainly support VictoriaMetrics as a time-series database, if you need to use the time series database VictoriaMetrics to store metric data, you need to replace the ",(0,r.yg)("inlineCode",{parentName:"li"},"warehouse.store.victoria-metrics")," parameter in ",(0,r.yg)("inlineCode",{parentName:"li"},"application.yml")," for specific steps, see ",(0,r.yg)("a",{parentName:"li",href:"victoria-metrics-init"},"Using VictoriaMetrics to store metrics data")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Recommended")," If you need to use the time series database TDengine to store metric data, you need to replace the ",(0,r.yg)("inlineCode",{parentName:"li"},"warehouse.store.td-engine")," parameter in ",(0,r.yg)("inlineCode",{parentName:"li"},"application.yml")," for specific steps, see ",(0,r.yg)("a",{parentName:"li",href:"tdengine-init"},"Using TDengine to store metrics data")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Recommended")," If you need to use the time series database IotDB to store the metric database, you need to replace the ",(0,r.yg)("inlineCode",{parentName:"li"},"warehouse.storeiot-db")," parameter in ",(0,r.yg)("inlineCode",{parentName:"li"},"application.yml")," For specific steps, see ",(0,r.yg)("a",{parentName:"li",href:"iotdb-init"},"Use IotDB to store metrics data")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure the account file(optional)\nHertzBeat default built-in three user accounts, respectively ",(0,r.yg)("inlineCode",{parentName:"p"},"admin/hertzbeat tom/hertzbeat guest/hertzbeat"),"\nIf you need add, delete or modify account or password, configure ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/sureness.yml"),". Ignore this step without this demand.\nFor detail steps, please refer to ",(0,r.yg)("a",{parentName:"p",href:"account-modify"},"Configure Account Password"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the service\nExecute the startup script ",(0,r.yg)("inlineCode",{parentName:"p"},"startup.sh")," in the installation directory ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/bin/"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"startup.bat")," in windows."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"./startup.sh \n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Begin to explore HertzBeat"),(0,r.yg)("p",{parentName:"li"},"Access ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:1157/"},"http://localhost:1157/")," using browser. You can explore HertzBeat with default account ",(0,r.yg)("inlineCode",{parentName:"p"},"admin/hertzbeat")," now!")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Deploy collector clusters (Optional)"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download and unzip the collector release package ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat-collector-xx.tar.gz")," to new machine ",(0,r.yg)("a",{parentName:"p",href:"/docs/download"},"Download Page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Configure the collector configuration yml file ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat-collector/config/application.yml"),": unique ",(0,r.yg)("inlineCode",{parentName:"p"},"identity")," name, running ",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," (public or private), hertzbeat ",(0,r.yg)("inlineCode",{parentName:"p"},"manager-host"),", hertzbeat ",(0,r.yg)("inlineCode",{parentName:"p"},"manager-port")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"collector:\n  dispatch:\n    entrance:\n      netty:\n        enabled: true\n        identity: ${IDENTITY:}\n        mode: ${MODE:public}\n        manager-host: ${MANAGER_HOST:127.0.0.1}\n        manager-port: ${MANAGER_PORT:1158}\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Run command ",(0,r.yg)("inlineCode",{parentName:"p"},"$ ./bin/startup.sh")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"bin/startup.bat"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Access ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:1157")," and you will see the registered new collector in dashboard"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"HAVE FUN")),(0,r.yg)("h3",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"If using the package not contains JDK, you need to prepare the JAVA environment in advance")),(0,r.yg)("p",{parentName:"li"},"Install JAVA runtime environment-refer to ",(0,r.yg)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"official website"),"\nrequirement\uff1aJDK17 ENV\ndownload JAVA installation package: ",(0,r.yg)("a",{parentName:"p",href:"https://repo.huaweicloud.com/java/jdk/"},"mirror website"),"\nAfter installation use command line to check whether you install it successfully."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'$ java -version\njava version "17.0.9"\nJava(TM) SE Runtime Environment 17.0.9 (build 17.0.9+8-LTS-237)\nJava HotSpot(TM) 64-Bit Server VM 17.0.9 (build 17.0.9+8-LTS-237, mixed mode)\n\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"According to the process deploy\uff0cvisit ",(0,r.yg)("a",{parentName:"strong",href:"http://ip:1157/"},"http://ip:1157/")," no interface"),"\nPlease refer to the following points to troubleshoot issues:"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"1\uff1aIf you switch to dependency service MYSQL database\uff0ccheck whether the database is created and started successfully.",(0,r.yg)("br",{parentName:"p"}),"\n","2\uff1aCheck whether dependent services, IP account and password configuration is correct in HertzBeat's configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml"),".",(0,r.yg)("br",{parentName:"p"}),"\n","3\uff1aCheck whether the running log has errors in ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat/logs/")," directory. If you haven't solved the issue, report it to the communication group or community."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Log an error TDengine connection or insert SQL failed")),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"1\uff1aCheck whether database account and password configured is correct, the database is created.",(0,r.yg)("br",{parentName:"p"}),"\n","2\uff1aIf you install TDengine2.3+ version, you must execute ",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," to start adapter in addition to start the server."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Monitoring historical charts with no data for a long time")),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"1: Whether the time series database is configured or not, if it is not configured, there is no historical chart data.",(0,r.yg)("br",{parentName:"p"}),"\n","2: If you are using Tdengine, check whether the database ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat")," of Tdengine is created.",(0,r.yg)("br",{parentName:"p"}),"\n","3: HertzBeat's configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yml"),", the dependent services in it, the time series, the IP account password, etc. are configured correctly.")))))}g.isMDXComponent=!0}}]);