"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[87094],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>s});var r=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),h=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=h(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=h(a),s=l,g=c["".concat(p,".").concat(s)]||c[s]||m[s]||i;return a?r.createElement(g,n(n({ref:t},u),{},{components:a})):r.createElement(g,n({ref:t},u))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,n[1]=o;for(var h=2;h<i;h++)n[h]=a[h];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=a(58168),l=(a(96540),a(15680));const i={title:"HertzBeat v1.4.3 released, prometheus-compatible!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system"]},n=void 0,o={permalink:"/blog/2023/12/11/hertzbeat-v1.4.3",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2023-12-11-hertzbeat-v1.4.3.md",source:"@site/blog/2023-12-11-hertzbeat-v1.4.3.md",title:"HertzBeat v1.4.3 released, prometheus-compatible!",description:"What is HertzBeat?",date:"2023-12-11T00:00:00.000Z",formattedDate:"December 11, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:5.8,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat v1.4.3 released, prometheus-compatible!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system"]},prevItem:{title:"Welcome to HertzBeat Community Committer!",permalink:"/blog/2024/01/11/new-committer"},nextItem:{title:"HertzBeat v1.4.2 released, custom notice template!",permalink:"/blog/2023/11/12/hertzbeat-v1.4.2"}},p={authorsImageUrls:[void 0]},h=[{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:3},{value:"Features",id:"features",level:3},{value:"HertzBeat&#39;s 1.4.3 Version Release",id:"hertzbeats-143-version-release",level:3},{value:"Install Quickly Via Docker",id:"install-quickly-via-docker",level:3},{value:"What&#39;s Changed",id:"whats-changed",level:3},{value:"New Contributors",id:"new-contributors",level:2},{value:"\u26c4 Supported",id:"-supported",level:2},{value:"<strong>Download Link</strong>",id:"download-link",level:3}],u={toc:h};function m(e){let{components:t,...i}=e;return(0,l.yg)("wrapper",(0,r.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"HertzBeat")," is an open source, real-time monitoring system with custom monitoring, high performance cluster, prometheus-compatible and agentless capabilities."),(0,l.yg)("h3",{id:"features"},"Features"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Combines ",(0,l.yg)("strong",{parentName:"li"},"monitoring, alarm, and notification")," features into one platform, and supports monitoring for web service, program, database, cache, os, webserver, middleware, bigdata, cloud-native, network, custom and more."),(0,l.yg)("li",{parentName:"ul"},"Easy to use and agentless, web-based and with one-click monitoring and alerting, zero learning curve."),(0,l.yg)("li",{parentName:"ul"},"Makes protocols such as ",(0,l.yg)("inlineCode",{parentName:"li"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," configurable, allowing you to collect any metrics by simply configuring the template ",(0,l.yg)("inlineCode",{parentName:"li"},"YML")," file online. Imagine being able to quickly adapt to a new monitoring type like K8s or Docker simply by configuring online with HertzBeat."),(0,l.yg)("li",{parentName:"ul"},"Compatible with the ",(0,l.yg)("inlineCode",{parentName:"li"},"Prometheus")," ecosystem and more, can monitoring what ",(0,l.yg)("inlineCode",{parentName:"li"},"Prometheus")," can monitoring with few clicks on webui."),(0,l.yg)("li",{parentName:"ul"},"High performance, supports horizontal expansion of multi-collector clusters, multi-isolated network monitoring and cloud-edge collaboration."),(0,l.yg)("li",{parentName:"ul"},"Provides flexible alarm threshold rules and timely notifications delivered via  ",(0,l.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Email")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Dingtalk")," ",(0,l.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,l.yg)("inlineCode",{parentName:"li"},"FeiShu")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Webhook")," ",(0,l.yg)("inlineCode",{parentName:"li"},"SMS")," ",(0,l.yg)("inlineCode",{parentName:"li"},"ServerChan"),".")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"HertzBeat's powerful customization, multi-type support, high performance, easy expansion, and low coupling, aims to help developers and teams quickly build their own monitoring system.")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"HertzBeat",src:a(72428).A,width:"2814",height:"1772"})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Github: ",(0,l.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Gitee: ",(0,l.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,l.yg)("h3",{id:"hertzbeats-143-version-release"},"HertzBeat's 1.4.3 Version Release"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"enhanced reporting of external general alert API"),(0,l.yg)("li",{parentName:"ul"},"support mysql api port website mongodb jvm redis monitoring metrics name i18n"),(0,l.yg)("li",{parentName:"ul"},"support auto collect metrics by prometheus task"),(0,l.yg)("li",{parentName:"ul"},"support victoriametrics as metrics data storage"),(0,l.yg)("li",{parentName:"ul"},"support monitoring spring gateway metrics"),(0,l.yg)("li",{parentName:"ul"},"add more windows monitoring metrics"),(0,l.yg)("li",{parentName:"ul"},"add e2e testing module, support by api-testing"),(0,l.yg)("li",{parentName:"ul"},"more feature, document and bugfix")),(0,l.yg)("p",null,"Compatible with the Prometheus ecosystem, now we can monitor what Prometheus can monitoring with few clicks on webui."),(0,l.yg)("h3",{id:"install-quickly-via-docker"},"Install Quickly Via Docker"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Just one command to get started:"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat apache/hertzbeat")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"or use quay.io (if dockerhub network connect timeout)")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Access ",(0,l.yg)("inlineCode",{parentName:"p"},"http://localhost:1157")," to start, default account: ",(0,l.yg)("inlineCode",{parentName:"p"},"admin/hertzbeat"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Deploy collector clusters"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector apache/hertzbeat-collector\n")),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name")," : set the collector unique identity name."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-e MANAGER_HOST=127.0.0.1")," : set the main hertzbeat server ip."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," : set the main hertzbeat server port, default 1158.")))),(0,l.yg)("p",null,"Detailed config refer to ",(0,l.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Install HertzBeat via Docker")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"whats-changed"},"What's Changed"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Welcome to explore more new version updates, thanks to the hard work of the community partners, love \ud83d\udc97!")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"update package deploy doc by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1330"},"https://github.com/apache/hertzbeat/pull/1330")),(0,l.yg)("li",{parentName:"ul"},"bugfix duplicate collect job when update monitor templates by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1332"},"https://github.com/apache/hertzbeat/pull/1332")),(0,l.yg)("li",{parentName:"ul"},"bugfix number variable in freemarker template display error by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1334"},"https://github.com/apache/hertzbeat/pull/1334")),(0,l.yg)("li",{parentName:"ul"},"[alerter]"," Enhanced reporting of external general alert API by @SurryChen in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1326"},"https://github.com/apache/hertzbeat/pull/1326")),(0,l.yg)("li",{parentName:"ul"},"[doc]"," update hertzbeat-mysql-tdengine readme by @jiashu1024 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1335"},"https://github.com/apache/hertzbeat/pull/1335")),(0,l.yg)("li",{parentName:"ul"},"add jiashu1024 as a contributor for doc by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1336"},"https://github.com/apache/hertzbeat/pull/1336")),(0,l.yg)("li",{parentName:"ul"},"app-mysql.yml: Adjust slow query translation by @1036664317 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1337"},"https://github.com/apache/hertzbeat/pull/1337")),(0,l.yg)("li",{parentName:"ul"},"add 1036664317 as a contributor for doc by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1338"},"https://github.com/apache/hertzbeat/pull/1338")),(0,l.yg)("li",{parentName:"ul"},"Bump com.google.guava:guava from 31.0.1-jre to 32.0.0-jre by @dependabot in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1339"},"https://github.com/apache/hertzbeat/pull/1339")),(0,l.yg)("li",{parentName:"ul"},"[feature]"," support auto collect metrics by prometheus task by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1342"},"https://github.com/apache/hertzbeat/pull/1342")),(0,l.yg)("li",{parentName:"ul"},"[doc]"," add vinci as new committer by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1341"},"https://github.com/apache/hertzbeat/pull/1341")),(0,l.yg)("li",{parentName:"ul"},"[feature]"," add tag word cloud in dashboard by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1345"},"https://github.com/apache/hertzbeat/pull/1345")),(0,l.yg)("li",{parentName:"ul"},"support custom prometheus endpoint path by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1346"},"https://github.com/apache/hertzbeat/pull/1346")),(0,l.yg)("li",{parentName:"ul"},"bugfix tdengine query interval history metrics data with instance error by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1348"},"https://github.com/apache/hertzbeat/pull/1348")),(0,l.yg)("li",{parentName:"ul"},"unlimit Alert.java content field length by @xiaoguolong in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1351"},"https://github.com/apache/hertzbeat/pull/1351")),(0,l.yg)("li",{parentName:"ul"},"add xiaoguolong as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1353"},"https://github.com/apache/hertzbeat/pull/1353")),(0,l.yg)("li",{parentName:"ul"},"update monitor detail table ui layout by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1352"},"https://github.com/apache/hertzbeat/pull/1352")),(0,l.yg)("li",{parentName:"ul"},"[doc]","add star history by @zqr10159 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1356"},"https://github.com/apache/hertzbeat/pull/1356")),(0,l.yg)("li",{parentName:"ul"},"feature: app-mongodb.yml by @a-little-fool in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1359"},"https://github.com/apache/hertzbeat/pull/1359")),(0,l.yg)("li",{parentName:"ul"},"alarm threshold support prometheus task metrics by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1354"},"https://github.com/apache/hertzbeat/pull/1354")),(0,l.yg)("li",{parentName:"ul"},"support victoriametrics as metrics data storage by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1361"},"https://github.com/apache/hertzbeat/pull/1361")),(0,l.yg)("li",{parentName:"ul"},"Add time type to support query_time of mysql and mariadb by @Clownsw in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1364"},"https://github.com/apache/hertzbeat/pull/1364")),(0,l.yg)("li",{parentName:"ul"},"add Clownsw as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1365"},"https://github.com/apache/hertzbeat/pull/1365")),(0,l.yg)("li",{parentName:"ul"},"Error occured when I followed running steps to start Front-web by @Calvin979 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1366"},"https://github.com/apache/hertzbeat/pull/1366")),(0,l.yg)("li",{parentName:"ul"},"add Calvin979 as a contributor for doc by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1367"},"https://github.com/apache/hertzbeat/pull/1367")),(0,l.yg)("li",{parentName:"ul"},"enriches the cncf landscape by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1368"},"https://github.com/apache/hertzbeat/pull/1368")),(0,l.yg)("li",{parentName:"ul"},"Fix flaky test in CollectUtilTest by @bbelide2 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1371"},"https://github.com/apache/hertzbeat/pull/1371")),(0,l.yg)("li",{parentName:"ul"},"add bbelide2 as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1372"},"https://github.com/apache/hertzbeat/pull/1372")),(0,l.yg)("li",{parentName:"ul"},"Fix flaky test replaceSmilingPlaceholder by @bbelide2 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1373"},"https://github.com/apache/hertzbeat/pull/1373")),(0,l.yg)("li",{parentName:"ul"},"add docker-compose script hertzbeat+mysql+victoria-metrics all in one by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1370"},"https://github.com/apache/hertzbeat/pull/1370")),(0,l.yg)("li",{parentName:"ul"},"Feature: app-jvm.yml support for international name aliases by @Calvin979 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1376"},"https://github.com/apache/hertzbeat/pull/1376")),(0,l.yg)("li",{parentName:"ul"},"add Calvin979 as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1377"},"https://github.com/apache/hertzbeat/pull/1377")),(0,l.yg)("li",{parentName:"ul"},"feature: support monitoring spring gateway metrics by @a-little-fool in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1374"},"https://github.com/apache/hertzbeat/pull/1374")),(0,l.yg)("li",{parentName:"ul"},"update code comment and doc, bugfix concurrent exception by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1378"},"https://github.com/apache/hertzbeat/pull/1378")),(0,l.yg)("li",{parentName:"ul"},"update windows define and accept snmp leaf by @jinyaoMa in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1379"},"https://github.com/apache/hertzbeat/pull/1379")),(0,l.yg)("li",{parentName:"ul"},"add jinyaoMa as a contributor for code by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1380"},"https://github.com/apache/hertzbeat/pull/1380")),(0,l.yg)("li",{parentName:"ul"},"fix exception when sending email has special chars by @Carpe-Wang in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1383"},"https://github.com/apache/hertzbeat/pull/1383")),(0,l.yg)("li",{parentName:"ul"},"test: add e2e testing for some basic APIs by @LinuxSuRen in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1387"},"https://github.com/apache/hertzbeat/pull/1387")),(0,l.yg)("li",{parentName:"ul"},"add LinuxSuRen as a contributor for code, and test by @allcontributors in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1389"},"https://github.com/apache/hertzbeat/pull/1389")),(0,l.yg)("li",{parentName:"ul"},"bugfix auto generate monitor name error when add monitor by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1384"},"https://github.com/apache/hertzbeat/pull/1384")),(0,l.yg)("li",{parentName:"ul"},"bugfix CalculateAlarm execAlertExpression NPE by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1388"},"https://github.com/apache/hertzbeat/pull/1388")),(0,l.yg)("li",{parentName:"ul"},"Feature: app-redis.yml support for international name aliases by @Calvin979 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1390"},"https://github.com/apache/hertzbeat/pull/1390")),(0,l.yg)("li",{parentName:"ul"},"test: add more monitor related e2e testing case by @LinuxSuRen in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1391"},"https://github.com/apache/hertzbeat/pull/1391")),(0,l.yg)("li",{parentName:"ul"},"chore: update the pr template about the e2e testing by @LinuxSuRen in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1392"},"https://github.com/apache/hertzbeat/pull/1392")),(0,l.yg)("li",{parentName:"ul"},"add help header ui when update or add monitors by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1399"},"https://github.com/apache/hertzbeat/pull/1399")),(0,l.yg)("li",{parentName:"ul"},"[hertzbeat]"," release hertzbeat version v1.4.3 by @tomsun28 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1400"},"https://github.com/apache/hertzbeat/pull/1400"))),(0,l.yg)("h2",{id:"new-contributors"},"New Contributors"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"@1036664317 made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1337"},"https://github.com/apache/hertzbeat/pull/1337")),(0,l.yg)("li",{parentName:"ul"},"@dependabot made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1339"},"https://github.com/apache/hertzbeat/pull/1339")),(0,l.yg)("li",{parentName:"ul"},"@xiaoguolong made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1351"},"https://github.com/apache/hertzbeat/pull/1351")),(0,l.yg)("li",{parentName:"ul"},"@Clownsw made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1364"},"https://github.com/apache/hertzbeat/pull/1364")),(0,l.yg)("li",{parentName:"ul"},"@Calvin979 made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1366"},"https://github.com/apache/hertzbeat/pull/1366")),(0,l.yg)("li",{parentName:"ul"},"@bbelide2 made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1371"},"https://github.com/apache/hertzbeat/pull/1371")),(0,l.yg)("li",{parentName:"ul"},"@jinyaoMa made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1379"},"https://github.com/apache/hertzbeat/pull/1379")),(0,l.yg)("li",{parentName:"ul"},"@LinuxSuRen made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/pull/1387"},"https://github.com/apache/hertzbeat/pull/1387"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/compare/v1.4.2...v1.4.3"},"https://github.com/apache/hertzbeat/compare/v1.4.2...v1.4.3")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"-supported"},"\u26c4 Supported"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,l.yg)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,l.yg)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,l.yg)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,l.yg)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,l.yg)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,l.yg)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,l.yg)("li",{parentName:"ul"},"Notifications support ",(0,l.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Mail")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Pinning")," ",(0,l.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,l.yg)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,l.yg)("inlineCode",{parentName:"li"},"SMS")," ",(0,l.yg)("inlineCode",{parentName:"li"},"Webhook")," ",(0,l.yg)("inlineCode",{parentName:"li"},"ServerChan"),".")),(0,l.yg)("hr",null),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Github: ",(0,l.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),"\n",(0,l.yg)("strong",{parentName:"p"},"Gitee: ",(0,l.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))),(0,l.yg)("h3",{id:"download-link"},(0,l.yg)("strong",{parentName:"h3"},"Download Link")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"hertzbeat server")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-1.4.3.tar.gz"},"hertzbeat-1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-1.4.3.zip"},"hertzbeat-1.4.3.zip")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-linux_amd64_1.4.3.tar.gz"},"hertzbeat-linux_amd64_1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-linux_arm64_1.4.3.tar.gz"},"hertzbeat-linux_arm64_1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-macos_arm64_1.4.3.tar.gz"},"hertzbeat-macos_arm64_1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-macos_amd64_1.4.3.tar.gz"},"hertzbeat-macos_amd64_1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-windows64_1.4.3.zip"},"hertzbeat-windows64_1.4.3.zip"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"hertzbeat collector")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-collector-1.4.3.tar.gz"},"hertzbeat-collector-1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-collector-1.4.3.zip"},"hertzbeat-collector-1.4.3.zip")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-collector-linux_amd64_1.4.3.tar.gz"},"hertzbeat-collector-linux_amd64_1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-collector-linux_arm64_1.4.3.tar.gz"},"hertzbeat-collector-linux_arm64_1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-collector-macos_arm64_1.4.3.tar.gz"},"hertzbeat-collector-macos_arm64_1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-collector-macos_amd64_1.4.3.tar.gz"},"hertzbeat-collector-macos_amd64_1.4.3.tar.gz")),(0,l.yg)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/releases/download/v1.4.3/hertzbeat-collector-windows64_1.4.3.zip"},"hertzbeat-collector-windows64_1.4.3.zip"))))}m.isMDXComponent=!0},72428:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/hertzbeat-arch-d8c2eca122dd35a5e67678da69c8ba0c.png"}}]);