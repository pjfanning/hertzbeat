"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[57388],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,u=s["".concat(m,".").concat(d)]||s[d]||y[d]||l;return n?a.createElement(u,i(i({ref:t},g),{},{components:n})):a.createElement(u,i({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={id:"time_expression",title:"Time Expression",sidebar_label:"Time Expression",keywords:["dynamic time","time expressions"]},i=void 0,o={unversionedId:"help/time_expression",id:"version-v1.5.x/help/time_expression",title:"Time Expression",description:"Introduction",source:"@site/versioned_docs/version-v1.5.x/help/time_expression.md",sourceDirName:"help",slug:"/help/time_expression",permalink:"/docs/v1.5.x/help/time_expression",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/help/time_expression.md",tags:[],version:"v1.5.x",frontMatter:{id:"time_expression",title:"Time Expression",sidebar_label:"Time Expression",keywords:["dynamic time","time expressions"]},sidebar:"docs",previous:{title:"Custom plugin",permalink:"/docs/v1.5.x/help/plugin"},next:{title:"Related resources",permalink:"/docs/v1.5.x/others/resource"}},m={},p=[{value:"Introduction",id:"introduction",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Supported Formatting Types",id:"supported-formatting-types",level:3},{value:"Supported Time Units",id:"supported-time-units",level:3},{value:"Where to Use",id:"where-to-use",level:4},{value:"Usage Examples",id:"usage-examples",level:4}],g={toc:p};function y(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"HertzBeat supports using expressions to calculate relative time during monitoring collection, allowing for more flexible time definitions in monitoring templates."),(0,r.yg)("h3",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"${FORMATTER [{ + | - }<DURATION> <TIME_UNIT>]}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"FORMATTER"),": Determines the format of the expression's result"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DURATION"),": Size of the time period, a positive integer"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TIME_UNIT"),": Unit of the time period")),(0,r.yg)("h3",{id:"supported-formatting-types"},"Supported Formatting Types"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Example outputs are based on the current time being ",(0,r.yg)("inlineCode",{parentName:"p"},"2022-04-24 02:40:00.123"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@now"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss")),(0,r.yg)("td",{parentName:"tr",align:null},"2022-04-24 02:40:00")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@date"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd")),(0,r.yg)("td",{parentName:"tr",align:null},"2022-04-24")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@timestamp10"),(0,r.yg)("td",{parentName:"tr",align:null},"Returns 10-digit timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"1650768000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Returns 13-digit timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"1650768000000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@time"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"HH:mm:ss")),(0,r.yg)("td",{parentName:"tr",align:null},"02:40:00")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@year"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"yyyy")),(0,r.yg)("td",{parentName:"tr",align:null},"2022")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@month"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"MM")),(0,r.yg)("td",{parentName:"tr",align:null},"04")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@day"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"dd")),(0,r.yg)("td",{parentName:"tr",align:null},"24")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@hour"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"HH")),(0,r.yg)("td",{parentName:"tr",align:null},"02")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@minute"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"mm")),(0,r.yg)("td",{parentName:"tr",align:null},"40")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@millisecond"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"SSS")),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"@second"),(0,r.yg)("td",{parentName:"tr",align:null},"Formats as ",(0,r.yg)("inlineCode",{parentName:"td"},"ss")),(0,r.yg)("td",{parentName:"tr",align:null},"00")))),(0,r.yg)("h3",{id:"supported-time-units"},"Supported Time Units"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"y"),(0,r.yg)("td",{parentName:"tr",align:null},"Year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null},"Month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"Day")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"H"),(0,r.yg)("td",{parentName:"tr",align:null},"Hour")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"m"),(0,r.yg)("td",{parentName:"tr",align:null},"Minute")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"s"),(0,r.yg)("td",{parentName:"tr",align:null},"Second")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"w"),(0,r.yg)("td",{parentName:"tr",align:null},"Week")))),(0,r.yg)("h4",{id:"where-to-use"},"Where to Use"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Request parameters for HTTP protocol monitoring types")),(0,r.yg)("h4",{id:"usage-examples"},"Usage Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Simple expression",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${now}")," gets the current time and formats it as ",(0,r.yg)("inlineCode",{parentName:"li"},"yyyy-MM-dd HH:mm:ss")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${time+1h}")," calculates the time one hour from now and formats it as ",(0,r.yg)("inlineCode",{parentName:"li"},"HH:mm:ss")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${time+1h+15s+30s}")," calculates the time one hour, 15 minutes, and 30 seconds from now and formats it as ",(0,r.yg)("inlineCode",{parentName:"li"},"HH:mm:ss")))),(0,r.yg)("li",{parentName:"ol"},"Complex expression template (if the built-in formatter does not meet your needs, you can combine multiple expressions)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${@year}\u5e74${@month}\u6708${@day}\u65e5")," returns the current date formatted as yyyy\u5e74MM\u6708dd\u65e5")))))}y.isMDXComponent=!0}}]);