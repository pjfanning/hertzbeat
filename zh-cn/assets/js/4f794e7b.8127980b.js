"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[11583],{15680:(e,r,n)=>{n.d(r,{xA:()=>o,yg:()=>b});var a=n(96540);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function g(e,r){if(null==e)return{};var n,a,l=function(e,r){if(null==e)return{};var n,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=a.createContext({}),u=function(e){var r=a.useContext(y),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},o=function(e){var r=u(e.components);return a.createElement(y.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var n=e.components,l=e.mdxType,t=e.originalType,y=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),c=u(n),b=l,h=c["".concat(y,".").concat(b)]||c[b]||i[b]||t;return n?a.createElement(h,p(p({ref:r},o),{},{components:n})):a.createElement(h,p({ref:r},o))}));function b(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var t=n.length,p=new Array(t);p[0]=c;var g={};for(var y in r)hasOwnProperty.call(r,y)&&(g[y]=r[y]);g.originalType=e,g.mdxType="string"==typeof e?e:l,p[1]=g;for(var u=2;u<t;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12736:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>y,contentTitle:()=>p,default:()=>i,frontMatter:()=>t,metadata:()=>g,toc:()=>u});var a=n(58168),l=(n(96540),n(15680));const t={id:"guide",title:"\u5e2e\u52a9\u4e2d\u5fc3",sidebar_label:"\u5e2e\u52a9\u5165\u95e8"},p=void 0,g={unversionedId:"help/guide",id:"help/guide",title:"\u5e2e\u52a9\u4e2d\u5fc3",description:"\u6613\u7528\u53cb\u597d\u7684\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177\uff0c\u65e0\u9700Agent\uff0c\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/guide.md",sourceDirName:"help",slug:"/help/guide",permalink:"/zh-cn/docs/help/guide",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/guide.md",tags:[],version:"current",frontMatter:{id:"guide",title:"\u5e2e\u52a9\u4e2d\u5fc3",sidebar_label:"\u5e2e\u52a9\u5165\u95e8"},sidebar:"docs",previous:{title:"SSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u4f7f\u7528\u6848\u4f8b",permalink:"/zh-cn/docs/start/ssl-cert-practice"},next:{title:"\u5b89\u5168\u6a21\u578b",permalink:"/zh-cn/docs/help/security_model"}},y={},u=[{value:"\ud83d\udd2c \u76d1\u63a7\u670d\u52a1",id:"-\u76d1\u63a7\u670d\u52a1",level:2},{value:"\u5e94\u7528\u670d\u52a1\u76d1\u63a7",id:"\u5e94\u7528\u670d\u52a1\u76d1\u63a7",level:3},{value:"\u5e94\u7528\u7a0b\u5e8f\u76d1\u63a7",id:"\u5e94\u7528\u7a0b\u5e8f\u76d1\u63a7",level:3},{value:"\u6570\u636e\u5e93\u76d1\u63a7",id:"\u6570\u636e\u5e93\u76d1\u63a7",level:3},{value:"\u7f13\u5b58\u76d1\u63a7",id:"\u7f13\u5b58\u76d1\u63a7",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7",id:"\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7",level:3},{value:"\u4e2d\u95f4\u4ef6\u76d1\u63a7",id:"\u4e2d\u95f4\u4ef6\u76d1\u63a7",level:3},{value:"\u4e91\u539f\u751f\u76d1\u63a7",id:"\u4e91\u539f\u751f\u76d1\u63a7",level:3},{value:"\u5927\u6570\u636e\u76d1\u63a7",id:"\u5927\u6570\u636e\u76d1\u63a7",level:3},{value:"Ai\u5927\u6a21\u578b\u76d1\u63a7",id:"ai\u5927\u6a21\u578b\u76d1\u63a7",level:3},{value:"\u7f51\u7edc\u76d1\u63a7",id:"\u7f51\u7edc\u76d1\u63a7",level:3},{value:"\u670d\u52a1\u5668\u76d1\u63a7",id:"\u670d\u52a1\u5668\u76d1\u63a7",level:3},{value:"\ud83d\udca1 \u544a\u8b66\u670d\u52a1",id:"-\u544a\u8b66\u670d\u52a1",level:2},{value:"\u544a\u8b66\u4e2d\u5fc3",id:"\u544a\u8b66\u4e2d\u5fc3",level:3},{value:"\u544a\u8b66\u914d\u7f6e",id:"\u544a\u8b66\u914d\u7f6e",level:3},{value:"\u544a\u8b66\u901a\u77e5",id:"\u544a\u8b66\u901a\u77e5",level:3},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:3}],o={toc:u};function i(e){let{components:r,...n}=e;return(0,l.yg)("wrapper",(0,a.A)({},o,n,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6613\u7528\u53cb\u597d\u7684\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177\uff0c\u65e0\u9700Agent\uff0c\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\u3002\n\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u5e2e\u52a9\u6587\u6863,\u8f85\u52a9\u4fe1\u606f\u3002")),(0,l.yg)("h2",{id:"-\u76d1\u63a7\u670d\u52a1"},"\ud83d\udd2c \u76d1\u63a7\u670d\u52a1"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u5b9a\u65f6\u91c7\u96c6\u76d1\u63a7\u5bf9\u7aef\u670d\u52a1\u66b4\u9732\u7684\u6027\u80fd\u6307\u6807\uff0c\u63d0\u4f9b\u53ef\u89c6\u5316\u754c\u9762\uff0c\u5904\u7406\u6570\u636e\u4f9b\u544a\u8b66\u7b49\u670d\u52a1\u8c03\u5ea6\u3002\n\u89c4\u5212\u7684\u76d1\u63a7\u7c7b\u578b\uff1a\u5e94\u7528\u670d\u52a1\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e91\u539f\u751f\uff0c\u5f00\u6e90\u4e2d\u95f4\u4ef6")),(0,l.yg)("h3",{id:"\u5e94\u7528\u670d\u52a1\u76d1\u63a7"},"\u5e94\u7528\u670d\u52a1\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"website"},"\u7f51\u7ad9\u76d1\u6d4b")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"api"},"HTTP API")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"ping"},"PING\u8fde\u901a\u6027")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"port"},"\u7aef\u53e3\u53ef\u7528\u6027")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"fullsite"},"\u5168\u7ad9\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"ssl_cert"},"SSL\u8bc1\u4e66\u6709\u6548\u671f")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"jvm"},"JVM\u865a\u62df\u673a")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"springboot2"},"SpringBoot2.0")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"dns"},"DNS\u670d\u52a1\u5668")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"ftp"},"FTP\u670d\u52a1\u5668")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"websocket"},"Websocket")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"mqtt"},"MQTT\u8fde\u63a5")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u5e94\u7528\u7a0b\u5e8f\u76d1\u63a7"},"\u5e94\u7528\u7a0b\u5e8f\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"process"},"Linux\u8fdb\u7a0b")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"jvm"},"JVM\u865a\u62df\u673a")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"springboot2"},"SpringBoot2.0")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"springboot3"},"SpringBoot3.0")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"dynamic_tp"},"DynamicTp\u7ebf\u7a0b\u6c60")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u6570\u636e\u5e93\u76d1\u63a7"},"\u6570\u636e\u5e93\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"mysql"},"MYSQL\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"mariadb"},"MariaDB\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"postgresql"},"PostgreSQL\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"sqlserver"},"SqlServer\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"oracle"},"Oracle\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"dm"},"\u8fbe\u68a6\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"opengauss"},"OpenGauss\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"iotdb"},"IoTDB\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"tidb"},"TiDB\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"mongodb"},"MongoDB\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"nebulagraph_cluster"},"NebulaGraph\u96c6\u7fa4\u76d1\u63a7")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u7f13\u5b58\u76d1\u63a7"},"\u7f13\u5b58\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"redis"},"Redis")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"memcached"},"Memcached")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7"},"\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"linux"},"Linux\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"windows"},"Windows\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"ubuntu"},"Ubuntu\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"centos"},"Centos\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"freebsd"},"FreeBSD\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"redhat"},"RedHat\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"rockylinux"},"RockyLinux\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"euleros"},"EulerOS\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u4e2d\u95f4\u4ef6\u76d1\u63a7"},"\u4e2d\u95f4\u4ef6\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"zookeeper"},"Zookeeper")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"kafka"},"Kafka")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"tomcat"},"Tomcat")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"shenyu"},"ShenYu")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"dynamic_tp"},"DynamicTp")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"rabbitmq"},"RabbitMQ")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"activemq"},"ActiveMQ")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"jetty"},"Jetty")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"nacos"},"Nacos")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u4e91\u539f\u751f\u76d1\u63a7"},"\u4e91\u539f\u751f\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"docker"},"Docker")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"kubernetes"},"Kubernetes")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u5927\u6570\u636e\u76d1\u63a7"},"\u5927\u6570\u636e\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"clickhouse"},"Clickhouse")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"elasticsearch"},"ElasticSearch")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"flink"},"Flink")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"ai\u5927\u6a21\u578b\u76d1\u63a7"},"Ai\u5927\u6a21\u578b\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"openai"},"OpenAi")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u7f51\u7edc\u76d1\u63a7"},"\u7f51\u7edc\u76d1\u63a7"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"huawei_switch"},"\u534e\u4e3a\u901a\u7528\u4ea4\u6362\u673a")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u670d\u52a1\u5668\u76d1\u63a7"},"\u670d\u52a1\u5668\u76d1\u63a7"),(0,l.yg)("h2",{id:"-\u544a\u8b66\u670d\u52a1"},"\ud83d\udca1 \u544a\u8b66\u670d\u52a1"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u66f4\u81ea\u7531\u5316\u7684\u9608\u503c\u544a\u8b66\u914d\u7f6e\uff0c\u652f\u6301\u90ae\u7bb1\uff0c\u77ed\u4fe1\uff0cwebhook\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\u673a\u5668\u4eba\u7b49\u544a\u8b66\u901a\u77e5\u3002\n\u544a\u8b66\u670d\u52a1\u7684\u5b9a\u4f4d\u662f\u9608\u503c\u51c6\u786e\u53ca\u65f6\u89e6\u53d1\uff0c\u544a\u8b66\u901a\u77e5\u53ca\u65f6\u53ef\u8fbe\u3002")),(0,l.yg)("h3",{id:"\u544a\u8b66\u4e2d\u5fc3"},"\u544a\u8b66\u4e2d\u5fc3"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u5df2\u89e6\u53d1\u7684\u544a\u8b66\u4fe1\u606f\u4e2d\u5fc3\uff0c\u63d0\u4f9b\u544a\u8b66\u5220\u9664\uff0c\u544a\u8b66\u5904\u7406\uff0c\u6807\u8bb0\u672a\u5904\u7406\uff0c\u544a\u8b66\u7ea7\u522b\u72b6\u6001\u7b49\u67e5\u8be2\u8fc7\u6ee4\u3002")),(0,l.yg)("h3",{id:"\u544a\u8b66\u914d\u7f6e"},"\u544a\u8b66\u914d\u7f6e"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6307\u6807\u9608\u503c\u914d\u7f6e\uff0c\u63d0\u4f9b\u8868\u8fbe\u5f0f\u5f62\u5f0f\u7684\u6307\u6807\u9608\u503c\u914d\u7f6e\uff0c\u53ef\u8bbe\u7f6e\u544a\u8b66\u7ea7\u522b\uff0c\u89e6\u53d1\u6b21\u6570\uff0c\u544a\u8b66\u901a\u77e5\u6a21\u7248\u548c\u662f\u5426\u542f\u7528\uff0c\u5173\u8054\u76d1\u63a7\u7b49\u529f\u80fd\u3002")),(0,l.yg)("p",null,"\u8be6\u89c1","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_threshold"},"\u9608\u503c\u544a\u8b66")," ",(0,l.yg)("br",null),"\n","\u2003","\u2003","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_threshold_expr"},"\u9608\u503c\u8868\u8fbe\u5f0f")),(0,l.yg)("h3",{id:"\u544a\u8b66\u901a\u77e5"},"\u544a\u8b66\u901a\u77e5"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u89e6\u53d1\u544a\u8b66\u4fe1\u606f\u540e\uff0c\u9664\u4e86\u663e\u793a\u5728\u544a\u8b66\u4e2d\u5fc3\u5217\u8868\u5916\uff0c\u8fd8\u53ef\u4ee5\u7528\u6307\u5b9a\u65b9\u5f0f(\u90ae\u4ef6\u9489\u9489\u5fae\u4fe1\u98de\u4e66\u7b49)\u901a\u77e5\u7ed9\u6307\u5b9a\u63a5\u6536\u4eba\u3002\n\u544a\u8b66\u901a\u77e5\u63d0\u4f9b\u8bbe\u7f6e\u4e0d\u540c\u7c7b\u578b\u7684\u901a\u77e5\u65b9\u5f0f\uff0c\u5982\u90ae\u4ef6\u63a5\u6536\u4eba\uff0c\u4f01\u4e1a\u5fae\u4fe1\u673a\u5668\u4eba\u901a\u77e5\uff0c\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5\uff0c\u98de\u4e66\u673a\u5668\u4eba\u901a\u77e5\u3002\n\u63a5\u6536\u4eba\u8bbe\u7f6e\u540e\u9700\u8981\u8bbe\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\uff0c\u6765\u914d\u7f6e\u54ea\u4e9b\u544a\u8b66\u4fe1\u606f\u53d1\u7ed9\u54ea\u4e9b\u63a5\u6536\u4eba\u3002")),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_email"},"\u914d\u7f6e\u90ae\u7bb1\u901a\u77e5")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_webhook"},"\u914d\u7f6e Webhook \u901a\u77e5")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_telegram"},"\u914d\u7f6e Telegram \u901a\u77e5")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_discord"},"\u914d\u7f6e Discord \u901a\u77e5")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_slack"},"\u914d\u7f6e Slack \u901a\u77e5")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_wework"},"\u914d\u7f6e\u4f01\u4e1a\u5fae\u4fe1\u673a\u5668\u4eba\u901a\u77e5")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_dingtalk"},"\u914d\u7f6e\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_feishu"},"\u914d\u7f6e\u98de\u4e66\u673a\u5668\u4eba\u901a\u77e5")," ",(0,l.yg)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"alert_smn"},"\u914d\u7f6e\u534e\u4e3a\u4e91SMN\u901a\u77e5")," ",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,l.yg)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,l.yg)("a",{parentName:"p",href:"plugin"},"\u63d2\u4ef6")," ",(0,l.yg)("br",null)))}i.isMDXComponent=!0}}]);