"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[2602],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var o=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||n;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=r(58168),a=(r(96540),r(15680));const n={title:"HertzBeat v1.0.beta.5 Released, A User-Friendly Monitoring and Alert System",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},i=void 0,s={permalink:"/blog/2022/03/10/hertzbeat-v1.0-beta.5",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2022-03-10-hertzbeat-v1.0-beta.5.md",source:"@site/blog/2022-03-10-hertzbeat-v1.0-beta.5.md",title:"HertzBeat v1.0.beta.5 Released, A User-Friendly Monitoring and Alert System",description:"HertzBeat is an open-source monitoring and alert project that supports various monitoring types such as websites, APIs, PING, ports, databases, and full-site monitoring. It offers threshold alarms and notification alerts (email, webhook, DingTalk, WeChat Work, Feishu/Lark robot), and features a user-friendly visual operation interface. The project is incubated by Dromara and open-sourced by TanCloud.",date:"2022-03-10T00:00:00.000Z",formattedDate:"March 10, 2022",tags:[{label:"opensource",permalink:"/blog/tags/opensource"}],readingTime:2.725,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat v1.0.beta.5 Released, A User-Friendly Monitoring and Alert System",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"HertzBeat Heartbeat v1.0.beta.6 Released, Linux Monitoring is Coming",permalink:"/blog/2022/03/20/hertzbeat-v1.0-beta.6"},nextItem:{title:"HertzBeat Hertz Beat v1.0.beta.4 Released, User-Friendly Monitoring and Alert System",permalink:"/blog/2022/02/28/hertzbeat-v1.0-beta.4"}},l={authorsImageUrls:[void 0]},u=[{value:"Welcome to contact us!",id:"welcome-to-contact-us",level:5}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"HertzBeat is an open-source monitoring and alert project that supports various monitoring types such as websites, APIs, PING, ports, databases, and full-site monitoring. It offers threshold alarms and notification alerts (email, webhook, DingTalk, WeChat Work, Feishu/Lark robot), and features a user-friendly visual operation interface. The project is incubated by Dromara and open-sourced by TanCloud."),(0,a.yg)("p",null,"Official websites: hertzbeat.com | tancloud.cn"),(0,a.yg)("p",null,"This upgraded version includes a redesigned dashboard, support for multi-metric threshold expressions, enriched database monitoring types with the addition of MariaDB and PostgreSQL monitoring, and new help documentation on the console page. You are welcome to use it."),(0,a.yg)("p",null,"Version Features:"),(0,a.yg)("p",null,"feature: Support for MariaDB monitoring type (#11)\nfeature: Dashboard reconstruction (#13)\nfeature: Alarm configuration supports multi-metric collections! Proposed by @pengliren, thanks (#10)\nfeature: Support for PostgreSQL database monitoring (#16)\nNew: Monitoring now starts with default probes.\nNew: Added MySQL collection metrics.\nNew: Added major monitoring categories, supporting custom monitoring page menu auto-rendering\nNew: Help links added to the operation page, improving custom and threshold help documentation\nfeat: Set the simulated browser to Chrome browser #Issues 14 contributed by @learning-code, thanks\nBUG Fixes:"),(0,a.yg)("p",null,"Changed '\u767b\u9646' to '\u767b\u5f55' to clarify confusion.\nDocumentation updated with FAQs, improved validation of HTTP parameters in the collector.\nOptimized collector scheduling by canceling subsequent priorities if priority 0 fails.\nbugfix: Illegal character in the website monitor path\nbugfix: Adaptation issues with the dark theme (#10)\nfix: Internationalization exception, release of authentication protection for the hierarchy interface"),(0,a.yg)("p",null,"You are welcome to try it online at ",(0,a.yg)("a",{parentName:"p",href:"https://console.tancloud.cn/"},"https://console.tancloud.cn/")),(0,a.yg)("hr",null),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat"),", incubated by ",(0,a.yg)("a",{parentName:"p",href:"https://dromara.org"},"Dromara")," and open-sourced by ",(0,a.yg)("a",{parentName:"p",href:"https://tancloud.cn"},"TanCloud"),", is an open-source monitoring and alerting project with a user-friendly visual interface that supports monitoring types such as websites, APIs, PING, ports, databases, operating systems, and more.\nOf course, we also provide a corresponding ",(0,a.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"SAAS cloud monitoring version"),", so small and medium-sized teams and individuals no longer need to deploy a cumbersome monitoring system to monitor their website resources; you can ",(0,a.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"log in")," to start monitoring for free.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"HertzBeat supports custom monitoring; by configuring the YML file, we can customize the required monitoring types and metrics to meet common personalized needs.\nHertzBeat is modular, with manager, collector, scheduler, warehouse, alerter modules decoupled, making it easy to understand and customize for development.\nHertzBeat supports more flexible alarm configurations (calculation expressions), supports alarm notifications, alarm templates, and timely delivery of notifications via email, DingTalk, WeChat, Feishu, etc.\nFeel free to log in to HertzBeat's cloud environment, ",(0,a.yg)("a",{parentName:"p",href:"https://console.tancloud.cn"},"TanCloud"),", to try it out and discover more.\nWe are rapidly iterating and welcome participation in joining and contributing to the open-source ecosystem.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"The multi-type support, easy expansion, and low coupling of ",(0,a.yg)("inlineCode",{parentName:"p"},"HertzBeat")," aim to help developers and small to medium-sized teams quickly build their own monitoring systems.")),(0,a.yg)("p",null,"You can get a clear understanding of the functionality through the demo video: ",(0,a.yg)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1DY4y1i7ts"},"https://www.bilibili.com/video/BV1DY4y1i7ts")),(0,a.yg)("h5",{id:"welcome-to-contact-us"},"Welcome to contact us!"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"WeChat Group")),(0,a.yg)("p",null,"Add WeChat ",(0,a.yg)("inlineCode",{parentName:"p"},"tan-cloud")," or scan the QR code below to be added to the WeChat group."),(0,a.yg)("img",{alt:"tan-cloud",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/docs/help/tan-cloud-wechat.jpg",width:"200"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"QQ Group")),(0,a.yg)("p",null,"Join QQ group ",(0,a.yg)("inlineCode",{parentName:"p"},"236915833")," or scan the QR code below to join the"),(0,a.yg)("img",{alt:"tan-cloud",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat@gh-pages/img/docs/help/qq-qr.jpg",width:"200"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Repository url")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"Github")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"Gitee")," ",(0,a.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat")),(0,a.yg)("p",null,"If you have read this far, why not give us a star? We would greatly appreciate it, thank you!"))}c.isMDXComponent=!0}}]);