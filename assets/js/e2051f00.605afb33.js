"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[91434],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>h});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,d=c["".concat(p,".").concat(h)]||c[h]||g[h]||a;return n?i.createElement(d,r(r({ref:t},m),{},{components:n})):i.createElement(d,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(58168),o=(n(96540),n(15680));const a={title:"Monitoring SpringBoot2 Metrics with HertzBeat in 5 minutes",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["opensource monitoring","SpringBoot monitoring","alert"]},r=void 0,l={permalink:"/blog/2023/03/22/monitor-springboot2",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2023-03-22-monitor-springboot2.md",source:"@site/blog/2023-03-22-monitor-springboot2.md",title:"Monitoring SpringBoot2 Metrics with HertzBeat in 5 minutes",description:"Use the open source real-time monitoring tool HertzBeat to monitor and alarm the SpringBoot2 application, and it will be done in 5 minutes",date:"2023-03-22T00:00:00.000Z",formattedDate:"March 22, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:6.67,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"Monitoring SpringBoot2 Metrics with HertzBeat in 5 minutes",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["opensource monitoring","SpringBoot monitoring","alert"]},prevItem:{title:"Open source real-time monitoring tool HertzBeat v1.3.1 released",permalink:"/blog/2023/05/09/hertzbeat-v1.3.1"},nextItem:{title:"Open source real-time monitoring tool HertzBeat v1.3.0 released, online customization is coming",permalink:"/blog/2023/03/15/hertzbeat-v1.3.0"}},p={authorsImageUrls:[void 0]},s=[{value:"Use the open source real-time monitoring tool HertzBeat to monitor and alarm the SpringBoot2 application, and it will be done in 5 minutes",id:"use-the-open-source-real-time-monitoring-tool-hertzbeat-to-monitor-and-alarm-the-springboot2-application-and-it-will-be-done-in-5-minutes",level:2},{value:"HertzBeat Intro",id:"hertzbeat-intro",level:3},{value:"Monitoring SpringBoot2 Metrics with HertzBeat in 5 minutes",id:"monitoring-springboot2-metrics-with-hertzbeat-in-5-minutes",level:3},{value:"Prerequisite, you already have SpringBoot2 application environment and HertzBeat environment",id:"prerequisite-you-already-have-springboot2-application-environment-and-hertzbeat-environment",level:4},{value:"1. The <code>actuator</code> metric endpoint is exposed on the SpringBoot2 application side, which will provide metrics endpoints data",id:"1-the-actuator-metric-endpoint-is-exposed-on-the-springboot2-application-side-which-will-provide-metrics-endpoints-data",level:4},{value:"Add SpringBoot2 application monitoring in the HertzBeat monitoring ui",id:"add-springboot2-application-monitoring-in-the-hertzbeat-monitoring-ui",level:4},{value:"3. Add SpringBoot2 application metric threshold alarm in HertzBeat system",id:"3-add-springboot2-application-metric-threshold-alarm-in-hertzbeat-system",level:4},{value:"Finished, now wait for the warning message to come. ding ding ding ding",id:"finished-now-wait-for-the-warning-message-to-come-ding-ding-ding-ding",level:3},{value:"Summary",id:"summary",level:2},{value:"More powerful",id:"more-powerful",level:2},{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:2},{value:"\u26c4 Supported",id:"-supported",level:2}],m={toc:s};function g(e){let{components:t,...a}=e;return(0,o.yg)("wrapper",(0,i.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"use-the-open-source-real-time-monitoring-tool-hertzbeat-to-monitor-and-alarm-the-springboot2-application-and-it-will-be-done-in-5-minutes"},"Use the open source real-time monitoring tool HertzBeat to monitor and alarm the SpringBoot2 application, and it will be done in 5 minutes"),(0,o.yg)("h3",{id:"hertzbeat-intro"},"HertzBeat Intro"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"HertzBeat is an open source, real-time monitoring tool with custom-monitor and agentLess. | \u6613\u7528\u53cb\u597d\u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u5de5\u5177\uff0c\u65e0\u9700Agent\uff0c\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b."),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Monitor+Alerter+Notify")," all in one. Support monitoring web service, database, os, middleware, cloud-native, network and more.\nMore flexible threshold rule(calculation expression), timely notification delivery by ",(0,o.yg)("inlineCode",{parentName:"p"},"Discord")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Slack")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Telegram")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Email")," ",(0,o.yg)("inlineCode",{parentName:"p"},"DingDing")," ",(0,o.yg)("inlineCode",{parentName:"p"},"WeChat")," ",(0,o.yg)("inlineCode",{parentName:"p"},"FeiShu")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Webhook")," ",(0,o.yg)("inlineCode",{parentName:"p"},"SMS"),"."),(0,o.yg)("p",{parentName:"blockquote"},"We make protocols such as ",(0,o.yg)("inlineCode",{parentName:"p"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," configurable, and you only need to configure ",(0,o.yg)("inlineCode",{parentName:"p"},"YML")," online to collect any metrics you want.\nDo you believe that you can immediately adapt a new monitoring type such as K8s or Docker just by configuring online?"),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("inlineCode",{parentName:"p"},"HertzBeat"),"'s powerful custom-define, multi-type support, easy expansion, low coupling, hope to help developers and micro teams to quickly build their own monitoring system.")),(0,o.yg)("p",null,"Github: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,o.yg)("h3",{id:"monitoring-springboot2-metrics-with-hertzbeat-in-5-minutes"},"Monitoring SpringBoot2 Metrics with HertzBeat in 5 minutes"),(0,o.yg)("h4",{id:"prerequisite-you-already-have-springboot2-application-environment-and-hertzbeat-environment"},"Prerequisite, you already have SpringBoot2 application environment and HertzBeat environment"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"HertzBeat ",(0,o.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Installation and deployment documentation"))),(0,o.yg)("h4",{id:"1-the-actuator-metric-endpoint-is-exposed-on-the-springboot2-application-side-which-will-provide-metrics-endpoints-data"},"1. The ",(0,o.yg)("inlineCode",{parentName:"h4"},"actuator")," metric endpoint is exposed on the SpringBoot2 application side, which will provide metrics endpoints data"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open SpringBoot Actuator Endpoint to expose ",(0,o.yg)("inlineCode",{parentName:"p"},"metrics health env")," metric interface"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"management:\n   endpoints:\n     web:\n       exposure:\n         include:\n           - 'metrics'\n           - 'health'\n           - 'env'\n     enabled-by-default: on\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"After restarting, test whether the access metric interface ",(0,o.yg)("inlineCode",{parentName:"p"},"ip:port/actuator")," has response json data as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "_links": {\n     "self": {\n       "href": "http://localhost:1157/actuator",\n       "templated": false\n     },\n     "health-path": {\n       "href": "http://localhost:1157/actuator/health/{*path}",\n       "templated": true\n     },\n     "health": {\n       "href": "http://localhost:1157/actuator/health",\n       "templated": false\n     },\n     "env": {\n       "href": "http://localhost:1157/actuator/env",\n       "templated": false\n     },\n     "env-toMatch": {\n       "href": "http://localhost:1157/actuator/env/{toMatch}",\n       "templated": true\n     },\n     "metrics-requiredMetricName": {\n       "href": "http://localhost:1157/actuator/metrics/{requiredMetricName}",\n       "templated": true\n     },\n     "metrics": {\n       "href": "http://localhost:1157/actuator/metrics",\n       "templated": false\n     }\n   }\n}\n')))),(0,o.yg)("h4",{id:"add-springboot2-application-monitoring-in-the-hertzbeat-monitoring-ui"},"Add SpringBoot2 application monitoring in the HertzBeat monitoring ui"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click to add SpringBoot2 monitoring"),(0,o.yg)("p",{parentName:"li"},"Path: Menu -> Application Service Monitoring -> SpringBoot2 -> Add SpringBoot2 Monitoring"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(85763).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure the parameters required for new monitoring SpringBoot2"),(0,o.yg)("p",{parentName:"li"},"Fill in the SpringBoot2 application ",(0,o.yg)("strong",{parentName:"p"},"peer IP"),", ",(0,o.yg)("strong",{parentName:"p"},"service port")," (default 8080), ",(0,o.yg)("strong",{parentName:"p"},"account password, etc.")," on the monitoring page, and finally click OK to add.\nFor other parameters such as ",(0,o.yg)("strong",{parentName:"p"},"collection interval"),", ",(0,o.yg)("strong",{parentName:"p"},"timeout period"),", etc., please refer to the help document ",(0,o.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/"},"https://hertzbeat.com/docs/help/")),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(7432).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Complete \u2705, now we have added the monitoring of the SpringBoot2 application, check the monitoring list to see our additions."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(55825).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click ",(0,o.yg)("strong",{parentName:"p"},"Operation"),"->",(0,o.yg)("strong",{parentName:"p"},"Monitoring Details Icon")," of the monitoring list item to browse the real-time monitoring metric data of the SpringBoot2 application."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(11262).A,width:"4064",height:"2166"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click ",(0,o.yg)("strong",{parentName:"p"},"Monitoring History Details TAB")," to browse the historical monitoring metric data chart of the SpringBoot2 application\ud83d\udcc8."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(87047).A,width:"4064",height:"2166"})))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"DONE! Done! It doesn't require us to deploy agents or various cumbersome operations, isn't it very simple")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Just one step to configure the IP port on the HertzBeat monitoring page and add SpringBoot2 application monitoring"))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Through the above, we have completed the monitoring of the SpringBoot2 application. We can check the status and availability of various metrics of the SpringBoot2 application at any time in HertzBeat.",(0,o.yg)("br",{parentName:"p"}),"\n","Of course, it is impossible to manually check the metrics in real time. Monitoring is often accompanied by alarm thresholds. When the performance metrics of the SpringBoot2 application exceed our threshold or the SpringBoot2 application itself is abnormal, we can promptly notify our corresponding person in charge. The person in charge receives the notification and handles it. , this is a complete monitoring and alarm process.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Next, we will demonstrate step by step how to configure the threshold alarm notification in the HertzBeat system. When the metrics of the SpringBoot2 application are abnormal, we will be notified in time")),(0,o.yg)("h4",{id:"3-add-springboot2-application-metric-threshold-alarm-in-hertzbeat-system"},"3. Add SpringBoot2 application metric threshold alarm in HertzBeat system"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure an alarm threshold for an important metric"),(0,o.yg)("p",{parentName:"li"}," Path: Menu -> Threshold Rules -> Add Threshold"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Select the configured metric object. SpringBoot2 application monitoring mainly focuses on stack memory threads and other related metrics. For example, we set the threshold for the metric ",(0,o.yg)("inlineCode",{parentName:"p"},"threads")," -> ",(0,o.yg)("inlineCode",{parentName:"p"},"threads"),". When the number of threads in the ",(0,o.yg)("inlineCode",{parentName:"p"},"runnable")," state is greater than At 300 an alert is issued.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Here we configure to send an alarm when ",(0,o.yg)("inlineCode",{parentName:"p"},"size"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"state")," of ",(0,o.yg)("inlineCode",{parentName:"p"},'equals(state, "runnable"") && size>300')," of this metric, the alarm level is ",(0,o.yg)("strong",{parentName:"p"},"warning alarm"),", which will be triggered three times, specifically As shown below."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(36364).A,width:"4064",height:"2166"})),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(47989).A,width:"4064",height:"2166"}))))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add message notification recipients"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"Configure the receiver to let the alarm message know who to send and how to send it.")),(0,o.yg)("p",{parentName:"li"},"Path: Menu -> Alarm Notification -> Alarm Recipient -> Add New Recipient"),(0,o.yg)("p",{parentName:"li"},"Message notification methods support ",(0,o.yg)("strong",{parentName:"p"},"email, DingTalk, WeChat Work, Feishu, WebHook, SMS"),", etc. Here we take the commonly used DingTalk as an example."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Refer to this ",(0,o.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"Help Documentation")," ",(0,o.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," to configure the robot on DingTalk and set the security custom keyword ",(0,o.yg)("inlineCode",{parentName:"li"},"HertzBeat"),", get the corresponding ",(0,o.yg)("inlineCode",{parentName:"li"},"access_token")," value."),(0,o.yg)("li",{parentName:"ul"},"Configure the receiver parameters in HertzBeat as follows.")),(0,o.yg)("p",{parentName:"li"},"\u3010Alarm Notification\u3011->\u3010New Recipient\u3011->\u3010Select DingTalk Robot Notification Method\u3011->\u3010Set DingTalk Robot ACCESS_TOKEN\u3011->\u3010OK\u3011"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(34162).A,width:"3436",height:"890"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure the associated alarm notification strategy \u26a0\ufe0f ","[Add notification strategy]"," -> ","[Associate the recipient just set]"," -> ","[OK]"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"Configure the alarm notification policy to bind the alarm message with the receiver, so that you can decide which alarms to send to whom.")),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"HertzBeat",src:n(41225).A,width:"3436",height:"1088"})))),(0,o.yg)("h3",{id:"finished-now-wait-for-the-warning-message-to-come-ding-ding-ding-ding"},"Finished, now wait for the warning message to come. ding ding ding ding"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"[HertzBeat warning notification]\nAlarm target object: springboot2.threads.size\nAffiliated monitoring ID: 483783444839322\nBelonging monitoring name: SPRINGBOOT2_localhost\nAlarm level: warning alarm\nAlarm trigger time: 2023-03-22 21:13:44\nContent details: The springboot2 service's runnable state threads num is over 300, now is 444.\n")),(0,o.yg)("h2",{id:"summary"},"Summary"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"This practical article took us to experience how to use the open source real-time monitoring tool HertzBeat to monitor SpringBoot2 application metric data. We can find that HertzBeat, which integrates ",(0,o.yg)("inlineCode",{parentName:"p"},"monitoring-alarm-notification"),", is more convenient in operation and use, just click a little on the page The SpringBoot2 application can be included in the monitoring and alarm notification, and the tedious operations of deploying multiple components and writing configuration files are no longer needed.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Only one docker command is needed to install and experience heartbeat:")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat apache/hertzbeat")),(0,o.yg)("h2",{id:"more-powerful"},"More powerful"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Through the simple steps above, we have realized the monitoring of SpringBoot2, but the built-in metrics in it do not meet the needs. Can we customize and monitor more metrics of SpringBoot2? The answer is of course yes, through ",(0,o.yg)("strong",{parentName:"p"},"Monitoring Definition"),"->",(0,o.yg)("strong",{parentName:"p"},"SpringBoot2")," on the page, you can customize and modify the performance metrics you want to monitor by editing the following YML configuration file at any time.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"HertzBeat",src:n(18834).A,width:"4064",height:"2166"})),(0,o.yg)("h2",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"HertzBeat")," is an open source, real-time monitoring tool with custom-monitor and agentless.\n",(0,o.yg)("strong",{parentName:"p"},"Monitor+Alerter+Notify")," all in one. Support monitoring web service, database, os, middleware, cloud-native, network and more.\nMore flexible threshold rule(calculation expression), timely notification delivery by ",(0,o.yg)("inlineCode",{parentName:"p"},"Discord")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Slack")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Telegram")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Email")," ",(0,o.yg)("inlineCode",{parentName:"p"},"DingDing")," ",(0,o.yg)("inlineCode",{parentName:"p"},"WeChat")," ",(0,o.yg)("inlineCode",{parentName:"p"},"FeiShu")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Webhook")," ",(0,o.yg)("inlineCode",{parentName:"p"},"SMS"),"."),(0,o.yg)("p",{parentName:"blockquote"},"We make protocols such as ",(0,o.yg)("inlineCode",{parentName:"p"},"Http, Jmx, Ssh, Snmp, Jdbc, Prometheus")," configurable, and you only need to configure ",(0,o.yg)("inlineCode",{parentName:"p"},"YML")," online to collect any metrics you want.\nDo you believe that you can immediately adapt a new monitoring type such as K8s or Docker just by configuring online?"),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("inlineCode",{parentName:"p"},"HertzBeat"),"'s powerful custom-define, multi-type support, easy expansion, low coupling, hope to help developers and micro teams to quickly build their own monitoring system.")),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"-supported"},"\u26c4 Supported"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,o.yg)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,o.yg)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,o.yg)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,o.yg)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,o.yg)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,o.yg)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,o.yg)("li",{parentName:"ul"},"Notifications support ",(0,o.yg)("inlineCode",{parentName:"li"},"Discord")," ",(0,o.yg)("inlineCode",{parentName:"li"},"Slack")," ",(0,o.yg)("inlineCode",{parentName:"li"},"Telegram")," ",(0,o.yg)("inlineCode",{parentName:"li"},"Mail")," ",(0,o.yg)("inlineCode",{parentName:"li"},"Pinning")," ",(0,o.yg)("inlineCode",{parentName:"li"},"WeChat")," ",(0,o.yg)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,o.yg)("inlineCode",{parentName:"li"},"SMS")," ",(0,o.yg)("inlineCode",{parentName:"li"},"Webhook"),".")),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Github: ",(0,o.yg)("a",{parentName:"strong",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),"\n",(0,o.yg)("strong",{parentName:"p"},"Gitee: ",(0,o.yg)("a",{parentName:"strong",href:"https://gitee.com/hertzbeat/hertzbeat"},"https://gitee.com/hertzbeat/hertzbeat"))))}g.isMDXComponent=!0},34162:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},41225:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},85763:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/monitor-springboot2-1-78e4eac4f6430c8747cc7297f87bcc08.png"},7432:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/monitor-springboot2-2-fa4385fb54fb702a0d08163f4fbe198c.png"},55825:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/monitor-springboot2-3-374e72a1a6cd9da11c7f4e04772484f1.png"},11262:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/monitor-springboot2-4-ac24d94ab16c267de2e8970f8854b5c9.png"},87047:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/monitor-springboot2-5-fcb5903d7a7d44d7ab9bcc1edd9add6e.png"},36364:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/monitor-springboot2-6-daaea06167a79dbf6bf73bd004c60c98.png"},47989:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/monitor-springboot2-7-7a4ec6564ba9615353b68c19779752af.png"},18834:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/monitor-springboot2-8-ee4e189a96d0d0a81cf163a3b7b1902a.png"}}]);