"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[32840],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>b});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function h(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),l=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=l(e.components);return r.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=h(e,["components","mdxType","originalType","parentName"]),g=l(t),b=n,d=g["".concat(i,".").concat(b)]||g[b]||s[b]||o;return t?r.createElement(d,c(c({ref:a},p),{},{components:t})):r.createElement(d,c({ref:a},p))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=g;var h={};for(var i in a)hasOwnProperty.call(a,i)&&(h[i]=a[i]);h.originalType=e,h.mdxType="string"==typeof e?e:n,c[1]=h;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},93517:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>h,toc:()=>l});var r=t(58168),n=(t(96540),t(15680));const o={id:"download",title:"Download Apache HertzBeat (incubating)",sidebar_label:"Download"},c=void 0,h={unversionedId:"download",id:"download",title:"Download Apache HertzBeat (incubating)",description:"Here is the Apache HertzBeat (incubating) official download page.",source:"@site/docs/download.md",sourceDirName:".",slug:"/download",permalink:"/docs/download",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/download.md",tags:[],version:"current",frontMatter:{id:"download",title:"Download Apache HertzBeat (incubating)",sidebar_label:"Download"}},i={},l=[{value:"The Latest Release",id:"the-latest-release",level:2},{value:"Release Docker Image",id:"release-docker-image",level:2},{value:"All Archived Releases",id:"all-archived-releases",level:2}],p={toc:l};function s(e){let{components:a,...t}=e;return(0,n.yg)("wrapper",(0,r.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Here is the Apache HertzBeat (incubating) official download page."),"\n",(0,n.yg)("strong",{parentName:"p"},"Please choose version to download from the following tables. It is recommended use the latest."))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Please verify the release with corresponding hashes(sha512), signatures and ",(0,n.yg)("a",{parentName:"li",href:"https://downloads.apache.org/incubator/hertzbeat/KEYS"},"project release KEYS"),"."),(0,n.yg)("li",{parentName:"ul"},"Refer to ",(0,n.yg)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi#verify"},"How to Verify")," for how to check the hashes and signatures."))),(0,n.yg)("h2",{id:"the-latest-release"},"The Latest Release"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Previous releases of HertzBeat may be affected by security issues, please use the latest one.")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Date"),(0,n.yg)("th",{parentName:"tr",align:null},"Download"),(0,n.yg)("th",{parentName:"tr",align:null},"Release Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.6.1"),(0,n.yg)("td",{parentName:"tr",align:null},"2024.10.29"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-bin.tar.gz"},"apache-hertzbeat-1.6.1-incubating-bin.tar.gz")," (HertzBeat) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-bin.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-bin.tar.gz.sha512"},"sha512")," ) ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-collector-1.6.1-incubating-bin.tar.gz"},"apache-hertzbeat-collector-1.6.1-incubating-bin.tar.gz")," (HertzBeat Collector) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-collector-1.6.1-incubating-bin.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-collector-1.6.1-incubating-bin.tar.gz.sha512"},"sha512")," ) ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-src.tar.gz"},"apache-hertzbeat-1.6.1-incubating-src.tar.gz")," (HertzBeat Source) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-src.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-src.tar.gz.sha512"},"sha512")," )  ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-docker-compose.tar.gz"},"apache-hertzbeat-1.6.1-incubating-docker-compose.tar.gz")," (docker-compose) ( ",(0,n.yg)("a",{parentName:"td",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-docker-compose.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.1/apache-hertzbeat-1.6.1-incubating-docker-compose.tar.gz.sha512"},"sha512")," )"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hertzbeat/releases/tag/v1.6.1"},"release note"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.6.0"),(0,n.yg)("td",{parentName:"tr",align:null},"2024.06.10"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-1.6.0-incubating-bin.tar.gz"},"apache-hertzbeat-1.6.0-incubating-bin.tar.gz")," (HertzBeat) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-1.6.0-incubating-bin.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-1.6.0-incubating-bin.tar.gz.sha512"},"sha512")," ) ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz"},"apache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz")," (HertzBeat Collector) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz.sha512"},"sha512")," ) ",(0,n.yg)("br",null)," ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-1.6.0-incubating-src.tar.gz"},"apache-hertzbeat-1.6.0-incubating-src.tar.gz")," (HertzBeat Source) ( ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-1.6.0-incubating-src.tar.gz.asc"},"signature")," , ",(0,n.yg)("a",{parentName:"td",href:"https://downloads.apache.org/incubator/hertzbeat/1.6.0/apache-hertzbeat-1.6.0-incubating-src.tar.gz.sha512"},"sha512")," )"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hertzbeat/releases/tag/v1.6.0"},"release note"))))),(0,n.yg)("h2",{id:"release-docker-image"},"Release Docker Image"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Apache HertzBeat provides a docker image for each release. You can pull the image from the ",(0,n.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/hertzbeat"},"Docker Hub"),".")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"HertzBeat ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat"},"https://hub.docker.com/r/apache/hertzbeat")),(0,n.yg)("li",{parentName:"ul"},"HertzBeat Collector ",(0,n.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/hertzbeat-collector"},"https://hub.docker.com/r/apache/hertzbeat-collector"))),(0,n.yg)("h2",{id:"all-archived-releases"},"All Archived Releases"),(0,n.yg)("p",null,"For older releases, please check the ",(0,n.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/hertzbeat/"},"archive"),"."))}s.isMDXComponent=!0}}]);