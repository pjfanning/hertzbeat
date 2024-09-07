"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[84133],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(y,l(l({ref:n},p),{},{components:t})):r.createElement(y,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={id:"extend-jdbc",title:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},l=void 0,i={unversionedId:"advanced/extend-jdbc",id:"version-v1.5.x/advanced/extend-jdbc",title:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",description:"\u4ece\u81ea\u5b9a\u4e49\u76d1\u63a7\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528JDBC(\u76ee\u524d\u652f\u6301mysql,mariadb,postgresql,sqlserver)\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/advanced/extend-jdbc.md",sourceDirName:"advanced",slug:"/advanced/extend-jdbc",permalink:"/zh-cn/docs/v1.5.x/advanced/extend-jdbc",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5.x/advanced/extend-jdbc.md",tags:[],version:"v1.5.x",frontMatter:{id:"extend-jdbc",title:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},sidebar:"docs",previous:{title:"\u6559\u7a0b\u4e8c:\u83b7\u53d6TOKEN\u540e\u7eed\u8ba4\u8bc1\u4f7f\u7528",permalink:"/zh-cn/docs/v1.5.x/advanced/extend-http-example-token"},next:{title:"SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/zh-cn/docs/v1.5.x/advanced/extend-ssh"}},s={},d=[{value:"JDBC\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",id:"jdbc\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",level:3},{value:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f",id:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f",level:3},{value:"<strong>oneRow</strong>",id:"onerow",level:4},{value:"<strong>multiRow</strong>",id:"multirow",level:4},{value:"<strong>columns</strong>",id:"columns",level:4},{value:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",level:3},{value:"\u76d1\u63a7\u6a21\u7248YML",id:"\u76d1\u63a7\u6a21\u7248yml",level:3}],p={toc:d};function c(e){let{components:n,...o}=e;return(0,a.yg)("wrapper",(0,r.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u4ece",(0,a.yg)("a",{parentName:"p",href:"extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528JDBC(\u76ee\u524d\u652f\u6301mysql,mariadb,postgresql,sqlserver)\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002\nJDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7\u53ef\u4ee5\u8ba9\u6211\u4eec\u5f88\u65b9\u4fbf\u7684\u901a\u8fc7\u5199SQL\u67e5\u8be2\u8bed\u53e5\u5c31\u80fd\u76d1\u63a7\u5230\u6211\u4eec\u60f3\u76d1\u63a7\u7684\u6307\u6807")),(0,a.yg)("h3",{id:"jdbc\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"},"JDBC\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"),(0,a.yg)("p",null,"\u3010",(0,a.yg)("strong",{parentName:"p"},"\u7cfb\u7edf\u76f4\u8fdeMYSQL"),"\u3011->\u3010",(0,a.yg)("strong",{parentName:"p"},"\u8fd0\u884cSQL\u67e5\u8be2\u8bed\u53e5"),"\u3011->\u3010",(0,a.yg)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u89e3\u6790:oneRow, multiRow, columns"),"\u3011->\u3010",(0,a.yg)("strong",{parentName:"p"},"\u6307\u6807\u6570\u636e\u63d0\u53d6"),"\u3011"),(0,a.yg)("p",null,"\u7531\u6d41\u7a0b\u53ef\u89c1\uff0c\u6211\u4eec\u81ea\u5b9a\u4e49\u4e00\u4e2aJDBC\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\uff0c\u9700\u8981\u914d\u7f6eJDBC\u8bf7\u6c42\u53c2\u6570\uff0c\u914d\u7f6e\u83b7\u53d6\u54ea\u4e9b\u6307\u6807\uff0c\u914d\u7f6e\u67e5\u8be2SQL\u8bed\u53e5\u3002"),(0,a.yg)("h3",{id:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f"},"\u6570\u636e\u89e3\u6790\u65b9\u5f0f"),(0,a.yg)("p",null,"SQL\u67e5\u8be2\u56de\u6765\u7684\u6570\u636e\u5b57\u6bb5\u548c\u6211\u4eec\u9700\u8981\u7684\u6307\u6807\u6620\u5c04\uff0c\u5c31\u80fd\u83b7\u53d6\u5bf9\u5e94\u7684\u6307\u6807\u6570\u636e\uff0c\u76ee\u524d\u6620\u5c04\u89e3\u6790\u65b9\u5f0f\u6709\u4e09\u79cd\uff1aoneRow, multiRow, columns"),(0,a.yg)("h4",{id:"onerow"},(0,a.yg)("strong",{parentName:"h4"},"oneRow")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u67e5\u8be2\u4e00\u884c\u6570\u636e, \u901a\u8fc7\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u5217\u540d\u79f0\uff0c\u548c\u67e5\u8be2\u7684\u5b57\u6bb5\u6620\u5c04")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a\n\u67e5\u8be2\u7684\u6307\u6807\u5b57\u6bb5\u4e3a\uff1aone tow three four\n\u67e5\u8be2SQL\uff1aselect one, tow, three, four from book limit 1;\n\u8fd9\u91cc\u6307\u6807\u5b57\u6bb5\u5c31\u80fd\u548c\u54cd\u5e94\u6570\u636e\u4e00\u4e00\u6620\u5c04\u4e3a\u4e00\u884c\u91c7\u96c6\u6570\u636e\u3002"),(0,a.yg)("h4",{id:"multirow"},(0,a.yg)("strong",{parentName:"h4"},"multiRow")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u67e5\u8be2\u591a\u884c\u6570\u636e, \u901a\u8fc7\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u5217\u540d\u79f0\uff0c\u548c\u67e5\u8be2\u7684\u5b57\u6bb5\u6620\u5c04")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a\n\u67e5\u8be2\u7684\u6307\u6807\u5b57\u6bb5\u4e3a\uff1aone tow three four\n\u67e5\u8be2SQL\uff1aselect one, tow, three, four from book;\n\u8fd9\u91cc\u6307\u6807\u5b57\u6bb5\u5c31\u80fd\u548c\u54cd\u5e94\u6570\u636e\u4e00\u4e00\u6620\u5c04\u4e3a\u591a\u884c\u91c7\u96c6\u6570\u636e\u3002"),(0,a.yg)("h4",{id:"columns"},(0,a.yg)("strong",{parentName:"h4"},"columns")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u91c7\u96c6\u4e00\u884c\u6307\u6807\u6570\u636e, \u901a\u8fc7\u67e5\u8be2\u7684\u4e24\u5217\u6570\u636e(key-value)\uff0ckey\u548c\u67e5\u8be2\u7684\u5b57\u6bb5\u5339\u914d\uff0cvalue\u4e3a\u67e5\u8be2\u5b57\u6bb5\u7684\u503c")),(0,a.yg)("p",null,"\u4f8b\u5982\uff1a\n\u67e5\u8be2\u5b57\u6bb5\uff1aone tow three four\n\u67e5\u8be2SQL\uff1aselect key, value from book;\nSQL\u54cd\u5e94\u6570\u636e\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"key"),(0,a.yg)("th",{parentName:"tr",align:null},"value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"one"),(0,a.yg)("td",{parentName:"tr",align:null},"243")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"two"),(0,a.yg)("td",{parentName:"tr",align:null},"435")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"three"),(0,a.yg)("td",{parentName:"tr",align:null},"332")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"four"),(0,a.yg)("td",{parentName:"tr",align:null},"643")))),(0,a.yg)("p",null,"\u8fd9\u91cc\u6307\u6807\u5b57\u6bb5\u5c31\u80fd\u548c\u54cd\u5e94\u6570\u636e\u7684key\u6620\u5c04,\u83b7\u53d6\u5bf9\u5e94\u7684value\u4e3a\u5176\u91c7\u96c6\u76d1\u63a7\u6570\u636e\u3002"),(0,a.yg)("h3",{id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4"},"\u81ea\u5b9a\u4e49\u6b65\u9aa4"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"HertzBeat\u9875\u9762")," -> ",(0,a.yg)("strong",{parentName:"p"},"\u76d1\u63a7\u6a21\u7248\u83dc\u5355")," -> ",(0,a.yg)("strong",{parentName:"p"},"\u65b0\u589e\u76d1\u63a7\u7c7b\u578b")," -> ",(0,a.yg)("strong",{parentName:"p"},"\u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML")," -> ",(0,a.yg)("strong",{parentName:"p"},"\u70b9\u51fb\u4fdd\u5b58\u5e94\u7528")," -> ",(0,a.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u65b0\u76d1\u63a7\u7c7b\u578b\u6dfb\u52a0\u76d1\u63a7")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"HertzBeat",src:t(35008).A,width:"4064",height:"2166"})),(0,a.yg)("hr",null),(0,a.yg)("p",null,"\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u6587\u4ef6\u7684\u914d\u7f6e\u7528\u6cd5\uff0c\u8bf7\u6ce8\u610f\u770b\u4f7f\u7528\u6ce8\u91ca\u3002"),(0,a.yg)("h3",{id:"\u76d1\u63a7\u6a21\u7248yml"},"\u76d1\u63a7\u6a21\u7248YML"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49 ",(0,a.yg)("em",{parentName:"p"},"\u76d1\u63a7\u7c7b\u578b\u7684\u540d\u79f0(\u56fd\u9645\u5316), \u8bf7\u6c42\u53c2\u6570\u7ed3\u6784\u5b9a\u4e49(\u524d\u7aef\u9875\u9762\u6839\u636e\u914d\u7f6e\u81ea\u52a8\u6e32\u67d3UI), \u91c7\u96c6\u6307\u6807\u4fe1\u606f, \u91c7\u96c6\u534f\u8bae\u914d\u7f6e")," \u7b49\u3002\n\u5373\u6211\u4eec\u901a\u8fc7\u81ea\u5b9a\u4e49\u8fd9\u4e2aYML\uff0c\u914d\u7f6e\u5b9a\u4e49\u4ec0\u4e48\u76d1\u63a7\u7c7b\u578b\uff0c\u524d\u7aef\u9875\u9762\u9700\u8981\u8f93\u5165\u4ec0\u4e48\u53c2\u6570\uff0c\u91c7\u96c6\u54ea\u4e9b\u6027\u80fd\u6307\u6807\uff0c\u901a\u8fc7\u4ec0\u4e48\u534f\u8bae\u53bb\u91c7\u96c6\u3002")),(0,a.yg)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3aexample_sql\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528JDBC\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# \u76d1\u63a7\u7c7b\u578b\u6240\u5c5e\u7c7b\u522b\uff1aservice-\u5e94\u7528\u670d\u52a1 program-\u5e94\u7528\u7a0b\u5e8f db-\u6570\u636e\u5e93 custom-\u81ea\u5b9a\u4e49 os-\u64cd\u4f5c\u7cfb\u7edf bigdata-\u5927\u6570\u636e mid-\u4e2d\u95f4\u4ef6 webserver-web\u670d\u52a1\u5668 cache-\u7f13\u5b58 cn-\u4e91\u539f\u751f network-\u7f51\u7edc\u76d1\u63a7\u7b49\u7b49\ncategory: db\n# \u76d1\u63a7\u5e94\u7528\u7c7b\u578b(\u4e0e\u6587\u4ef6\u540d\u4fdd\u6301\u4e00\u81f4) eg: linux windows tomcat mysql aws...\napp: example_sql\nname:\n  zh-CN: \u6a21\u62dfMYSQL\u5e94\u7528\u7c7b\u578b\n  en-US: MYSQL EXAMPLE APP\n# \u76d1\u63a7\u53c2\u6570\u5b9a\u4e49. field \u8fd9\u4e9b\u4e3a\u8f93\u5165\u53c2\u6570\u53d8\u91cf\uff0c\u5373\u53ef\u4ee5\u7528^_^host^_^\u7684\u5f62\u5f0f\u5199\u5230\u540e\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u7cfb\u7edf\u81ea\u52a8\u53d8\u91cf\u503c\u66ff\u6362\n# \u5f3a\u5236\u56fa\u5b9a\u5fc5\u987b\u53c2\u6570 - host\nparams:\n  - field: host\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    type: host\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    range: '[0,65535]'\n    required: true\n    defaultValue: 80\n    placeholder: '\u8bf7\u8f93\u5165\u7aef\u53e3'\n  - field: database\n    name:\n      zh-CN: \u6570\u636e\u5e93\u540d\u79f0\n      en-US: Database\n    type: text\n    required: false\n  - field: username\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    limit: 50\n    required: false\n  - field: password\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: false\n  - field: url\n    name:\n      zh-CN: Url\n      en-US: Url\n    type: text\n    required: false\n# \u91c7\u96c6\u6307\u6807\u914d\u7f6e\u5217\u8868\nmetrics:\n  - name: basic\n    # \u6307\u6807\u8c03\u5ea6\u4f18\u5148\u7ea7(0-127)\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8,\u4f18\u5148\u7ea7\u4f4e\u7684\u6307\u6807\u4f1a\u7b49\u4f18\u5148\u7ea7\u9ad8\u7684\u6307\u6807\u91c7\u96c6\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u5ea6,\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u6307\u6807\u4f1a\u5e76\u884c\u8c03\u5ea6\u91c7\u96c6\n    # \u4f18\u5148\u7ea7\u4e3a0\u7684\u6307\u6807\u4e3a\u53ef\u7528\u6027\u6307\u6807,\u5373\u5b83\u4f1a\u88ab\u9996\u5148\u8c03\u5ea6,\u91c7\u96c6\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u8c03\u5ea6\u5176\u5b83\u6307\u6807,\u91c7\u96c6\u5931\u8d25\u5219\u4e2d\u65ad\u8c03\u5ea6\n    priority: 0\n    # \u5177\u4f53\u76d1\u63a7\u6307\u6807\u5217\u8868\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   label\u662f\u5426\u4e3a\u6807\u7b7e   unit:\u6307\u6807\u5355\u4f4d\n      - field: version\n        type: 1\n        label: true\n      - field: port\n        type: 1\n      - field: datadir\n        type: 1\n      - field: max_connections\n        type: 0\n    # (\u975e\u5fc5\u987b)\u76d1\u63a7\u6307\u6807\u522b\u540d\uff0c\u4e0e\u4e0a\u9762\u7684\u6307\u6807\u540d\u6620\u5c04\u3002\u7528\u4e8e\u91c7\u96c6\u63a5\u53e3\u6570\u636e\u5b57\u6bb5\u4e0d\u76f4\u63a5\u662f\u6700\u7ec8\u6307\u6807\u540d\u79f0,\u9700\u8981\u6b64\u522b\u540d\u505a\u6620\u5c04\u8f6c\u6362\n    aliasFields:\n      - version\n      - version_compile_os\n      - version_compile_machine\n      - port\n      - datadir\n      - max_connections\n    # (\u975e\u5fc5\u987b)\u6307\u6807\u8ba1\u7b97\u8868\u8fbe\u5f0f,\u4e0e\u4e0a\u9762\u7684\u522b\u540d\u4e00\u8d77\u4f5c\u7528,\u8ba1\u7b97\u51fa\u6700\u7ec8\u9700\u8981\u7684\u6307\u6807\u503c\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - port=port\n      - datadir=datadir\n      - max_connections=max_connections\n      - version=version+\"_\"+version_compile_os+\"_\"+version_compile_machine\n    protocol: jdbc\n    jdbc:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL\u67e5\u8be2\u65b9\u5f0f\uff1a oneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global variables where Variable_name like 'version%' or Variable_name = 'max_connections' or Variable_name = 'datadir' or Variable_name = 'port';\n      url: ^_^url^_^\n\n  - name: status\n    priority: 1\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   label\u662f\u5426\u4e3a\u6807\u7b7e   unit:\u6307\u6807\u5355\u4f4d\n      - field: threads_created\n        type: 0\n      - field: threads_connected\n        type: 0\n      - field: threads_cached\n        type: 0\n      - field: threads_running\n        type: 0\n    # (\u975e\u5fc5\u987b)\u76d1\u63a7\u6307\u6807\u522b\u540d\uff0c\u4e0e\u4e0a\u9762\u7684\u6307\u6807\u540d\u6620\u5c04\u3002\u7528\u4e8e\u91c7\u96c6\u63a5\u53e3\u6570\u636e\u5b57\u6bb5\u4e0d\u76f4\u63a5\u662f\u6700\u7ec8\u6307\u6807\u540d\u79f0,\u9700\u8981\u6b64\u522b\u540d\u505a\u6620\u5c04\u8f6c\u6362\n    aliasFields:\n      - threads_created\n      - threads_connected\n      - threads_cached\n      - threads_running\n    # (\u975e\u5fc5\u987b)\u6307\u6807\u8ba1\u7b97\u8868\u8fbe\u5f0f,\u4e0e\u4e0a\u9762\u7684\u522b\u540d\u4e00\u8d77\u4f5c\u7528,\u8ba1\u7b97\u51fa\u6700\u7ec8\u9700\u8981\u7684\u6307\u6807\u503c\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - threads_created=threads_created\n      - threads_connected=threads_connected\n      - threads_cached=threads_cached\n      - threads_running=threads_running\n    protocol: jdbc\n    jdbc:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL\u67e5\u8be2\u65b9\u5f0f\uff1a oneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global status where Variable_name like 'thread%' or Variable_name = 'com_commit' or Variable_name = 'com_rollback' or Variable_name = 'questions' or Variable_name = 'uptime';\n      url: ^_^url^_^\n\n  - name: innodb\n    priority: 2\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   label\u662f\u5426\u4e3a\u6807\u7b7e   unit:\u6307\u6807\u5355\u4f4d\n      - field: innodb_data_reads\n        type: 0\n        unit: \u6b21\u6570\n      - field: innodb_data_writes\n        type: 0\n        unit: \u6b21\u6570\n      - field: innodb_data_read\n        type: 0\n        unit: kb\n      - field: innodb_data_written\n        type: 0\n        unit: kb\n    protocol: jdbc\n    jdbc:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL\u67e5\u8be2\u65b9\u5f0f\uff1a oneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global status where Variable_name like 'innodb%';\n      url: ^_^url^_^\n")))}c.isMDXComponent=!0},35008:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/extend-point-1-0175fbb6d4bd1105c2596f7ccae83938.png"}}]);