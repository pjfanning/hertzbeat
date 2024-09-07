"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[94764],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),g=o,f=m["".concat(c,".").concat(g)]||m[g]||d[g]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const a={id:"alert_wework",title:"Alert enterprise Wechat notification",sidebar_label:"Alert enterprise Wechat notification",keywords:["open source monitoring tool","open source alerter","open source WeWork notification"]},i=void 0,s={unversionedId:"help/alert_wework",id:"version-v1.5.x/help/alert_wework",title:"Alert enterprise Wechat notification",description:"After the threshold is triggered send alarm information and notify the recipient by enterprise Wechat robot.",source:"@site/versioned_docs/version-v1.5.x/help/alert_wework.md",sourceDirName:"help",slug:"/help/alert_wework",permalink:"/docs/v1.5.x/help/alert_wework",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/alert_wework.md",tags:[],version:"v1.5.x",frontMatter:{id:"alert_wework",title:"Alert enterprise Wechat notification",sidebar_label:"Alert enterprise Wechat notification",keywords:["open source monitoring tool","open source alerter","open source WeWork notification"]},sidebar:"docs",previous:{title:"Alert Telegram bot notification",permalink:"/docs/v1.5.x/help/alert_telegram"},next:{title:"Alert DingDing robot notification",permalink:"/docs/v1.5.x/help/alert_dingtalk"}},c={},l=[{value:"Operation steps",id:"operation-steps",level:3},{value:"Enterprise Wechat robot common issues",id:"enterprise-wechat-robot-common-issues",level:3}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,o.yg)("wrapper",(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by enterprise Wechat robot.")),(0,o.yg)("h3",{id:"operation-steps"},"Operation steps"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"\u3010Enterprise Wechat\u3011-> \u3010Group settings\u3011-> \u3010Group robot\u3011-> \u3010Add new robot\u3011-> \u3010Set robot name and avatar\u3011-> \u3010Copy its webhook address after adding successfully\u3011")),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"email",src:r(24324).A,width:"1080",height:"2412"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"\u3010Save the key value of the WebHook address of the robot\u3011")),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"eg\uff1a webHook address\uff1a",(0,o.yg)("inlineCode",{parentName:"p"},"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=3adafc96-23d0-4cd5-8feb-17f6e0b5fcs4"),(0,o.yg)("br",{parentName:"p"}),"\n","Its robot KEY value is ",(0,o.yg)("inlineCode",{parentName:"p"},"3adafc96-23d0-4cd5-8feb-17f6e0b5fcs4")))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select enterprise Wechat robot notification method\u3011->\u3010Set enterprise Wechat robot KEY\u3011-> \u3010Confirm\u3011")),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"email",src:r(94601).A,width:"3804",height:"942"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011")),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."))),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"email",src:r(87538).A,width:"3756",height:"1288"})))),(0,o.yg)("h3",{id:"enterprise-wechat-robot-common-issues"},"Enterprise Wechat robot common issues"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The enterprise wechat group did not receive the robot alarm notification."),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,o.yg)("br",{parentName:"p"}),"\n","Please check whether the robot key is configured correctly and whether the alarm strategy association is configured.")))),(0,o.yg)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}d.isMDXComponent=!0},87538:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"},24324:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-6-d706cd903604bb21c0a7b0a313d63368.jpg"},94601:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/alert-notice-7-567edc108fd5e9943fdf60d00229d223.png"}}]);