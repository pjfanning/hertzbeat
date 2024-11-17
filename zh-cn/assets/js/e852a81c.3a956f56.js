"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[66182],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>s});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),h=p(a),s=n,y=h["".concat(i,".").concat(s)]||h[s]||c[s]||l;return a?r.createElement(y,o(o({ref:t},u),{},{components:a})):r.createElement(y,o({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g.mdxType="string"==typeof e?e:n,o[1]=g;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={title:"Apache Hertzbeat 1.6.1 \u53d1\u5e03\u516c\u544a",author:"zhangshenghang",author_title:"zhangshenghang",author_url:"https://github.com/zhangshenghang",author_image_url:"https://avatars.githubusercontent.com/u/29418975?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system"]},o=void 0,g={permalink:"/zh-cn/blog/2024/11/09/hertzbeat-v1.6.1",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2024-11-09-hertzbeat-v1.6.1.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2024-11-09-hertzbeat-v1.6.1.md",title:"Apache Hertzbeat 1.6.1 \u53d1\u5e03\u516c\u544a",description:"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0c",date:"2024-11-09T00:00:00.000Z",formattedDate:"2024\u5e7411\u67089\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"},{label:"practice",permalink:"/zh-cn/blog/tags/practice"}],readingTime:3.94,hasTruncateMarker:!1,authors:[{name:"zhangshenghang",title:"zhangshenghang",url:"https://github.com/zhangshenghang",imageURL:"https://avatars.githubusercontent.com/u/29418975?s=400&v=4"}],frontMatter:{title:"Apache Hertzbeat 1.6.1 \u53d1\u5e03\u516c\u544a",author:"zhangshenghang",author_title:"zhangshenghang",author_url:"https://github.com/zhangshenghang",author_image_url:"https://avatars.githubusercontent.com/u/29418975?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system"]},nextItem:{title:"\u70ed\u70c8\u6b22\u8fce HertzBeat \u5c0f\u4f19\u4f34\u65b0\u664b\u793e\u533a Committer!",permalink:"/zh-cn/blog/2024/09/10/new-committer"}},i={authorsImageUrls:[void 0]},p=[{value:"\u4e0b\u8f7d\u4e0e\u6587\u6863",id:"\u4e0b\u8f7d\u4e0e\u6587\u6863",level:2},{value:"\u4e3b\u8981\u66f4\u65b0",id:"\u4e3b\u8981\u66f4\u65b0",level:2},{value:"\u65b0\u529f\u80fd\u4e0e\u589e\u5f3a",id:"\u65b0\u529f\u80fd\u4e0e\u589e\u5f3a",level:3},{value:"Bug \u4fee\u590d",id:"bug-\u4fee\u590d",level:3},{value:"\u4ee3\u7801\u91cd\u6784\u4e0e\u4f18\u5316",id:"\u4ee3\u7801\u91cd\u6784\u4e0e\u4f18\u5316",level:3},{value:"\u6587\u6863\u7ffb\u8bd1\u4e0e\u6539\u8fdb",id:"\u6587\u6863\u7ffb\u8bd1\u4e0e\u6539\u8fdb",level:3},{value:"\u5b89\u5168\u66f4\u65b0",id:"\u5b89\u5168\u66f4\u65b0",level:3},{value:"\u6d4b\u8bd5\u7528\u4f8b\u6dfb\u52a0",id:"\u6d4b\u8bd5\u7528\u4f8b\u6dfb\u52a0",level:3},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2},{value:"Apache Hertzbeat",id:"apache-hertzbeat",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.yg)("wrapper",(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0c"),(0,n.yg)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03\uff0cApache Hertzbeat 1.6.1 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u6b21\u53d1\u5e03\u5408\u5e76\u4e86468\u4e2aPR\uff0c\u5e26\u6765\u4e86\u4f17\u591a\u65b0\u529f\u80fd\u548c\u6539\u8fdb\u3002\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd1.6.1\u7248\u672c\u7684\u5173\u952e\u66f4\u65b0\uff0c\u6b22\u8fce\u66f4\u591a\u5f00\u53d1\u8005\u548c\u7528\u6237\u52a0\u5165\u6211\u4eec\u7684\u5f00\u6e90\u793e\u533a\uff01"),(0,n.yg)("h2",{id:"\u4e0b\u8f7d\u4e0e\u6587\u6863"},"\u4e0b\u8f7d\u4e0e\u6587\u6863"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Apache Hertzbeat 1.6.1 \u4e0b\u8f7d\u5730\u5740"),"\uff1a",(0,n.yg)("a",{parentName:"li",href:"https://hertzbeat.apache.org/zh-cn/docs/download"},"https://hertzbeat.apache.org/zh-cn/docs/download")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Apache Hertzbeat \u6587\u6863\u5730\u5740"),"\uff1a",(0,n.yg)("a",{parentName:"li",href:"https://hertzbeat.apache.org/zh-cn/docs/"},"https://hertzbeat.apache.org/zh-cn/docs/"))),(0,n.yg)("h2",{id:"\u4e3b\u8981\u66f4\u65b0"},"\u4e3b\u8981\u66f4\u65b0"),(0,n.yg)("h3",{id:"\u65b0\u529f\u80fd\u4e0e\u589e\u5f3a"},"\u65b0\u529f\u80fd\u4e0e\u589e\u5f3a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u65b0\u589e\u76d1\u63a7\u529f\u80fd"),"\uff1a\u652f\u6301Apache HBase\u3001InfluxDB\u3001VictoriaMetrics\u96c6\u7fa4\u3001HDFS\u3001Yarn\u3001Linux\u8fdb\u7a0b\u3001HBase RegionServer\u3001OpenAI\u8d26\u53f7\u3001Redfish\u534f\u8bae\u7b49\u76d1\u63a7\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Prometheus\u652f\u6301"),"\uff1a\u65b0\u589ePrometheus\u89e3\u6790\u5668\u548cPrometheus-like\u63a8\u9001\u6a21\u5f0f\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u56fd\u9645\u5316\u652f\u6301"),"\uff1a\u4e3aClickHouse\u3001DynamicTp\u3001Airflow\u3001IoTDB\u3001RocketMQ\u7b49\u76d1\u63a7\u6307\u6807\u540d\u79f0\u63d0\u4f9b\u56fd\u9645\u5316\u652f\u6301\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49\u76d1\u63a7\u83dc\u5355"),"\uff1a\u76d1\u63a7\u6a21\u677f\u73b0\u5728\u652f\u6301\u81ea\u5b9a\u4e49\u4e3b\u83dc\u5355\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"NebulaGraph\u652f\u6301"),"\uff1a\u65b0\u589e\u5bf9",(0,n.yg)("inlineCode",{parentName:"li"},"ngql"),"\u67e5\u8be2NebulaGraph\u76d1\u63a7\u6570\u636e\u7684\u652f\u6301\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u77ed\u4fe1\u529f\u80fd"),"\uff1a\u652f\u6301\u901a\u8fc7\u963f\u91cc\u4e91\u53d1\u9001\u77ed\u4fe1\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Docker\u652f\u6301"),"\uff1a\u63d0\u4f9b\u901a\u8fc7Docker Compose\u8fd0\u884cHertzbeat\u7684\u652f\u6301\u3002")),(0,n.yg)("h3",{id:"bug-\u4fee\u590d"},"Bug \u4fee\u590d"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u542f\u52a8\u95ee\u9898"),"\uff1a\u4fee\u590d\u4e86Collector\u65e0\u6cd5\u5355\u72ec\u542f\u52a8\u548cMySQL\u4f9d\u8d56\u95ee\u9898\uff0c\u4ee5\u53caMongoDB\u76d1\u63a7\u5728Spring Boot 3\u4e2d\u4e0d\u53ef\u7528\u7684\u95ee\u9898\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6570\u636e\u95ee\u9898"),"\uff1a\u4fee\u590d\u4e86JPA\u6570\u636e\u4fdd\u5b58\u903b\u8f91\u9519\u8bef\u3001Redis\u96c6\u7fa4\u8282\u70b9\u6d4b\u8bd5\u9519\u8bef\u3001\u65e7\u6570\u636e\u89e3\u7801\u9519\u8bef\u7b49\u95ee\u9898\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u7a7a\u6307\u9488\u5f02\u5e38\u4fee\u590d"),"\uff1a\u4fee\u590d\u4e86\u591a\u4e2a\u4e0e\u7a7a\u6307\u9488\u5f02\u5e38\uff08NPE\uff09\u76f8\u5173\u7684\u95ee\u9898\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u5176\u5b83Bug\u4fee\u590d"),"\uff1a\u5305\u62ec\u547d\u4ee4\u7a97\u53e3\u6570\u636e\u4e22\u5931\u3001MongoDB\u6a21\u677f\u547d\u4ee4\u9519\u8bef\u7b49\u95ee\u9898\u3002")),(0,n.yg)("h3",{id:"\u4ee3\u7801\u91cd\u6784\u4e0e\u4f18\u5316"},"\u4ee3\u7801\u91cd\u6784\u4e0e\u4f18\u5316"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u4ee3\u7801\u7b80\u5316"),"\uff1a\u4f18\u5316\u4ee3\u7801\u7ed3\u6784\uff0c\u4f7f\u7528Assert\u7c7b\u7b80\u5316null\u5224\u65ad\uff0c\u79fb\u9664\u4e0d\u5fc5\u8981\u7684if-else\u8bed\u53e5\uff0c\u91c7\u7528Java 17\u7684\u65b0\u8bed\u6cd5\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u4f9d\u8d56\u7ba1\u7406\u4f18\u5316"),"\uff1a\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u4f9d\u8d56\uff0c\u5e76\u5c06\u4e00\u4e9b\u5305\u91cd\u6784\u4e3a\u72ec\u7acb\u6a21\u5757\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6027\u80fd\u63d0\u5347"),"\uff1a\u901a\u8fc7\u4f18\u5316WebSocket\u8fde\u63a5\u3001Redis URI\u6784\u5efa\u7b49\u65b9\u9762\u63d0\u5347\u6027\u80fd\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u65e5\u5fd7\u4e0e\u914d\u7f6e\u66f4\u65b0"),"\uff1a\u66f4\u65b0Collector\u548cManager\u7684logback\u914d\u7f6e\u3002")),(0,n.yg)("h3",{id:"\u6587\u6863\u7ffb\u8bd1\u4e0e\u6539\u8fdb"},"\u6587\u6863\u7ffb\u8bd1\u4e0e\u6539\u8fdb"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u7ffb\u8bd1\u5de5\u4f5c"),"\uff1a\u5c06\u591a\u4e2a\u7c7b\u63cf\u8ff0\u3001\u535a\u5ba2\u6587\u7ae0\u548c\u76d1\u63a7\u6a21\u677f\u6587\u6863\u4ece\u4e2d\u6587\u7ffb\u8bd1\u4e3a\u82f1\u6587\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u5e2e\u52a9\u6587\u6863\u589e\u52a0"),"\uff1a\u4e3aClickHouse\u3001DNS\u3001Flink\u7b49\u76d1\u63a7\u9879\u76ee\u589e\u52a0\u4e86\u5e2e\u52a9\u6587\u6863\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6587\u6863\u7ed3\u6784\u66f4\u65b0"),"\uff1a\u66f4\u65b0\u5b98\u7f51\u6587\u6863\u3001\u8d21\u732e\u6307\u5357\u3001\u9996\u9875\u4ecb\u7ecd\u7b49\u3002")),(0,n.yg)("h3",{id:"\u5b89\u5168\u66f4\u65b0"},"\u5b89\u5168\u66f4\u65b0"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u4f9d\u8d56\u5347\u7ea7"),"\uff1a\u5347\u7ea7H2\u6570\u636e\u5e93\u4f9d\u8d56\u5e93\uff0c\u4fee\u590d\u76f8\u5173\u5b89\u5168\u6f0f\u6d1e\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u5176\u4ed6\u5b89\u5168\u6539\u8fdb"),"\uff1a\u4fee\u590dSSL\u8bc1\u4e66\u5269\u4f59\u5929\u6570\u548cJexlespression\u7684\u5b89\u5168\u5339\u914d\u95ee\u9898\u3002")),(0,n.yg)("h3",{id:"\u6d4b\u8bd5\u7528\u4f8b\u6dfb\u52a0"},"\u6d4b\u8bd5\u7528\u4f8b\u6dfb\u52a0"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6d4b\u8bd5\u8986\u76d6\u7387\u63d0\u5347"),"\uff1a\u65b0\u589eRedis\u3001Nginx\u3001Telnet\u7b49\u76d1\u63a7\u529f\u80fd\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u63d0\u5347\u6d4b\u8bd5\u8986\u76d6\u7387\u3002")),(0,n.yg)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,n.yg)("p",null,"\u611f\u8c22 ",(0,n.yg)("strong",{parentName:"p"},"@zqr10159")," \u5bf9\u672c\u6b21\u53d1\u7248\u5de5\u4f5c\u7684\u652f\u6301\uff0c\u540c\u65f6\u611f\u8c22\u4ee5\u4e0b\u793e\u533a\u6210\u5458\u7684\u5171\u540c\u52aa\u529b\uff0c\u4f7f\u5f97\u672c\u6b21\u53d1\u5e03\u987a\u5229\u5b8c\u6210\uff1a"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"LinuxSuRen, transactional, JavaProgrammerLB, westboy, xuziyang, makechoicenow, crossoverJie, xfl12345, boatrainlsz, lw-yang, tomsun28, Alanxtl, Aias00, Clownsw, zhangshenghang, zqr10159, LiuTianyou, handy-git, hudongdong129, dukbong, 15613060203, yqxxgh, miki-hmt, PeixyJ, allcontributors, Ceilzcx, lwjxy, starmilkxin, leo-934, zuobiao-zhou, tomorrowshipyltm, LLP2333, lwqzz, wang1027-wqh, gjjjj0101, ZY945, yuluo-yx, HeartLinked, alpha951, Hi-Mr-Wind, TJxiaobao, YxYL6125, MananPoojara, a-little-fool, Pzz-2021, Yanshuming1, Thespica, Calvin979, WinterKi1ler")),(0,n.yg)("h2",{id:"apache-hertzbeat"},"Apache Hertzbeat"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u4ed3\u5e93\u5730\u5740\uff1a")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat"},"https://github.com/apache/hertzbeat")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u7f51\u5740\uff1a")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.apache.org/"},"https://hertzbeat.apache.org/")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Apache Hertzbeat \u4e0b\u8f7d\u5730\u5740\uff1a")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.apache.org/zh-cn/docs/download"},"https://hertzbeat.apache.org/zh-cn/docs/download")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Apache Hertzbeat Docker \u955c\u50cf\u7248\u672c\uff1a")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Apache HertzBeat \u4e3a\u6bcf\u4e2a\u7248\u672c\u5236\u4f5c\u4e86 Docker \u955c\u50cf. \u4f60\u53ef\u4ee5\u4ece Docker Hub \u62c9\u53d6\u4f7f\u7528.")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"HertzBeat ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat"},"https://hub.docker.com/r/apache/hertzbeat")),(0,n.yg)("li",{parentName:"ul"},"HertzBeat Collector ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat-collector"},"https://hub.docker.com/r/apache/hertzbeat-collector"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Apache Hertzbeat \u5f00\u6e90\u793e\u533a\u5982\u4f55\u53c2\u4e0e\uff1f")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://hertzbeat.apache.org/zh-cn/docs/community/contribution"},"https://hertzbeat.apache.org/zh-cn/docs/community/contribution")))}c.isMDXComponent=!0}}]);