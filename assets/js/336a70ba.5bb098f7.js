"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[98724],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=o,h=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(58168),o=(a(96540),a(15680));const i={title:"Use the open source real-time monitoring tool HertzBeat to monitor and alert Mysql database",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],Keywords:["Open source monitoring tool","open source database monitoring","Mysql database monitoring"]},r=void 0,l={permalink:"/blog/2023/02/11/monitor-mysql",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2023-02-11-monitor-mysql.md",source:"@site/blog/2023-02-11-monitor-mysql.md",title:"Use the open source real-time monitoring tool HertzBeat to monitor and alert Mysql database",description:"Use the open source real-time monitoring tool HertzBeat to monitor and alarm the Mysql database, and it will be done in 5 minutes",date:"2023-02-11T00:00:00.000Z",formattedDate:"February 11, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:4.995,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"Use the open source real-time monitoring tool HertzBeat to monitor and alert Mysql database",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],Keywords:["Open source monitoring tool","open source database monitoring","Mysql database monitoring"]},prevItem:{title:"Monitoring Linux Operating Systems Using Open Source Real-Time Monitoring HertzBeat",permalink:"/blog/2023/02/15/monitor-linux"},nextItem:{title:"Welcome two new Committers from HertzBeat",permalink:"/blog/2023/02/10/new-committer"}},s={authorsImageUrls:[void 0]},m=[{value:"Use the open source real-time monitoring tool HertzBeat to monitor and alarm the Mysql database, and it will be done in 5 minutes",id:"use-the-open-source-real-time-monitoring-tool-hertzbeat-to-monitor-and-alarm-the-mysql-database-and-it-will-be-done-in-5-minutes",level:2},{value:"Mysql database introduction",id:"mysql-database-introduction",level:3},{value:"Introduction to HertzBeat",id:"introduction-to-hertzbeat",level:3},{value:"Get the Mysql database monitoring in HertzBeat in 5 minutes",id:"get-the-mysql-database-monitoring-in-hertzbeat-in-5-minutes",level:3},{value:"The premise of the operation is that you already have the Mysql environment and the HertzBeat environment",id:"the-premise-of-the-operation-is-that-you-already-have-the-mysql-environment-and-the-hertzbeat-environment",level:4},{value:"Add monitoring of Mysql database on the open source monitoring tool HertzBeat monitoring page",id:"add-monitoring-of-mysql-database-on-the-open-source-monitoring-tool-hertzbeat-monitoring-page",level:4},{value:"3. Add Mysql database index threshold alarm in HertzBeat system",id:"3-add-mysql-database-index-threshold-alarm-in-hertzbeat-system",level:4},{value:"Finished, now wait for the warning message to come. ding ding ding ding",id:"finished-now-wait-for-the-warning-message-to-come-ding-ding-ding-ding",level:3},{value:"Summary",id:"summary",level:2}],p={toc:m};function g(e){let{components:t,...i}=e;return(0,o.yg)("wrapper",(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"use-the-open-source-real-time-monitoring-tool-hertzbeat-to-monitor-and-alarm-the-mysql-database-and-it-will-be-done-in-5-minutes"},"Use the open source real-time monitoring tool HertzBeat to monitor and alarm the Mysql database, and it will be done in 5 minutes"),(0,o.yg)("h3",{id:"mysql-database-introduction"},"Mysql database introduction"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"MySQL is an open source relational database management system developed by the Swedish company MySQL AB and a product of Oracle. MySQL is one of the most popular open source relational database management systems. In terms of WEB applications, MySQL is one of the best RDBMS (Relational Database Management System, relational database management system) application software.")),(0,o.yg)("h3",{id:"introduction-to-hertzbeat"},"Introduction to HertzBeat"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"HertzBeat is an open source, easy-to-use and friendly real-time monitoring tool that does not require Agent and has powerful custom monitoring capabilities.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Integrate ",(0,o.yg)("strong",{parentName:"li"},"monitoring-alarm-notification"),", support monitoring of application services, databases, operating systems, middleware, cloud native, etc., threshold alarms, alarm notifications (email WeChat Dingding Feishu SMS Slack Discord Telegram)."),(0,o.yg)("li",{parentName:"ul"},"It configurable protocol specifications such as Http, Jmx, Ssh, Snmp, Jdbc, Prometheus, etc. You only need to configure YML to use these protocols to customize and collect any metrics you want to collect. Do you believe that you can immediately adapt to a new monitoring type such as K8s or Docker just by configuring YML?"),(0,o.yg)("li",{parentName:"ul"},"HertzBeat's powerful customization, multi-type support, easy expansion, and low coupling, hope to help developers and small and medium teams quickly build their own monitoring tools.")),(0,o.yg)("h3",{id:"get-the-mysql-database-monitoring-in-hertzbeat-in-5-minutes"},"Get the Mysql database monitoring in HertzBeat in 5 minutes"),(0,o.yg)("h4",{id:"the-premise-of-the-operation-is-that-you-already-have-the-mysql-environment-and-the-hertzbeat-environment"},"The premise of the operation is that you already have the Mysql environment and the HertzBeat environment"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Mysql ",(0,o.yg)("a",{parentName:"li",href:"https://www.runoob.com/mysql/mysql-install.html"},"Installation and deployment document")),(0,o.yg)("li",{parentName:"ul"},"HertzBeat ",(0,o.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Installation and deployment documentation"))),(0,o.yg)("h4",{id:"add-monitoring-of-mysql-database-on-the-open-source-monitoring-tool-hertzbeat-monitoring-page"},"Add monitoring of Mysql database on the open source monitoring tool HertzBeat monitoring page"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click Add Mysql Monitoring"),(0,o.yg)("p",{parentName:"li"}," Path: Menu -> Database Monitoring -> Mysql Database -> Add Mysql Database Monitoring"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(5134).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure the parameters required for the new monitoring Mysql database"),(0,o.yg)("p",{parentName:"li"},"On the monitoring page, fill in Mysql ",(0,o.yg)("strong",{parentName:"p"},"service IP"),", ",(0,o.yg)("strong",{parentName:"p"},"monitoring port")," (default 3306), ",(0,o.yg)("strong",{parentName:"p"},"account password, etc."),", and finally click OK to add.\nFor other parameters such as ",(0,o.yg)("strong",{parentName:"p"},"collection interval"),", ",(0,o.yg)("strong",{parentName:"p"},"timeout period"),", etc., please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/mysql/"},"Help Documentation")," ",(0,o.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help"},"https://hertzbeat.com/docs/help")," /mysql/"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(93285).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Complete \u2705, now we have added the monitoring of the Mysql database, check the monitoring list to see our added items."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(5134).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click ",(0,o.yg)("strong",{parentName:"p"},"Operation"),"->",(0,o.yg)("strong",{parentName:"p"},"Monitoring Details Icon")," of the monitoring list item to browse the real-time monitoring metric data of the Mysql database."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(63868).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click ",(0,o.yg)("strong",{parentName:"p"},"Monitoring History Details TAB")," to browse the historical monitoring metric data chart of Mysql database\ud83d\udcc8."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(47475).A,width:"4064",height:"2166"})))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"DONE! Done! Through the above steps, in fact, it only takes one step to sum up")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"On the HertzBeat monitoring page, configure the IP port account password and add Mysql monitoring"))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Through the above two steps, we have completed the monitoring of the Mysql database. We can view the monitoring details and metrics in HertzBeat at any time to observe its service status.\nOf course, just looking at it is definitely not perfect. Monitoring is often accompanied by alarm thresholds. When the metrics of the Mysql database exceed our expectations or are abnormal, we can promptly notify our corresponding person in charge. The person in charge receives the notification and handles the problem. It is a complete monitoring and alarm process.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Next, we will demonstrate step by step how to configure the threshold alarm notification in the HertzBeat system, so that when the metrics of the Mysql database are found to be abnormal, they will be notified to us in time")),(0,o.yg)("h4",{id:"3-add-mysql-database-index-threshold-alarm-in-hertzbeat-system"},"3. Add Mysql database index threshold alarm in HertzBeat system"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure an alarm threshold for an important metric"),(0,o.yg)("p",{parentName:"li"},"Path: Menu -> Threshold Rules -> Add Threshold"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Select the configured metric object. Mysql database monitoring is mainly about database performance and other related metrics. For example, we set the threshold for the metric ",(0,o.yg)("inlineCode",{parentName:"li"},"query cache hit rate")," ",(0,o.yg)("inlineCode",{parentName:"li"},"cache")," -> ",(0,o.yg)("inlineCode",{parentName:"li"},"query_cache_hit_rate"),". When the query cache hit rate of Mysql is very low An alarm is issued when it is less than 30%."),(0,o.yg)("li",{parentName:"ul"},"Here we configure to send an alarm when the ",(0,o.yg)("inlineCode",{parentName:"li"},"query_cache_hit_rate<30")," of this metric ",(0,o.yg)("inlineCode",{parentName:"li"},"cache"),", the alarm level is ",(0,o.yg)("strong",{parentName:"li"},"serious alarm"),", and it will be triggered after three times, as shown in the figure below.")),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(8618).A,width:"4064",height:"2166"})),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(57601).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add message notification recipients"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"Configure the receiver to let the alarm message know who to send and how to send it.")),(0,o.yg)("p",{parentName:"li"},"Path: Menu -> Alarm Notification -> Alarm Recipient -> Add New Recipient"),(0,o.yg)("p",{parentName:"li"},"Message notification methods support ",(0,o.yg)("strong",{parentName:"p"},"email, DingTalk, WeChat Work, Feishu, WebHook, SMS"),", etc. Here we take the commonly used DingTalk as an example."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Refer to this ",(0,o.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"Help Documentation")," ",(0,o.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," to configure the robot on DingTalk and set the security custom keyword ",(0,o.yg)("inlineCode",{parentName:"li"},"HertzBeat"),", get the corresponding ",(0,o.yg)("inlineCode",{parentName:"li"},"access_token")," value."),(0,o.yg)("li",{parentName:"ul"},"Configure the receiver parameters in HertzBeat as follows.")),(0,o.yg)("p",{parentName:"li"},"\u3010Alarm Notification\u3011->\u3010New Recipient\u3011->\u3010Select DingTalk Robot Notification Method\u3011->\u3010Set DingTalk Robot ACCESS_TOKEN\u3011->\u3010OK\u3011"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(34162).A,width:"3436",height:"890"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure the associated alarm notification strategy \u26a0\ufe0f ","[Add notification strategy]"," -> ","[Associate the recipient just set]"," -> ","[OK]"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"Configure the alarm notification policy to bind the alarm message with the receiver, so that you can decide which alarms to send to whom.")),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:a(41225).A,width:"3436",height:"1088"})))),(0,o.yg)("h3",{id:"finished-now-wait-for-the-warning-message-to-come-ding-ding-ding-ding"},"Finished, now wait for the warning message to come. ding ding ding ding"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"[HertzBeat warning notification]\nAlarm target object: mysql.cahce.query_cache_hit_rate\nAffiliated monitoring ID: 205540620394932\nBelonging monitoring name: Mysql_localhost\nAlarm level: major alarm\nAlarm trigger time: 2023-02-11 21:13:44\nContent details: mysql db query_cache_hit_rate is too low, now is 20.\n")),(0,o.yg)("h2",{id:"summary"},"Summary"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"This practical article took us to experience how to use the open source real-time monitoring tool HertzBeat to monitor Mysql database metric data. We can find that HertzBeat, which integrates ",(0,o.yg)("inlineCode",{parentName:"p"},"monitoring-alarm-notification"),", is more convenient in operation and use, just click on the page The Mysql database can be included in the monitoring and alarm notification, and the tedious operations of deploying multiple components and writing configuration files are no longer needed.")),(0,o.yg)("p",null,"Mysql Github: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/mysql/mysql-server"},"https://github.com/mysql/mysql-server"),"\nHertzBeat Github: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Welcome to learn, use and star!")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Only one docker command is needed to install and experience heartbeat:")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat apache/hertzbeat")))}g.isMDXComponent=!0},34162:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},41225:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},5134:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/monitor-mysql-1-19e6ec4459f0d9e919f6a6c30be7b57a.png"},93285:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/monitor-mysql-2-13a14e1ef2e6ce1aad18487061354b44.png"},63868:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/monitor-mysql-3-d6896c6d4ffd9c2b6e947b2953e784f1.png"},47475:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/monitor-mysql-4-3283b82611bd5f8e97a5ee6c58b2258c.png"},8618:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/monitor-mysql-5-de9e52572120721588e3ec4207999d97.png"},57601:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/monitor-mysql-6-734d367e3a2cd939c75d3ea9204bd615.png"}}]);