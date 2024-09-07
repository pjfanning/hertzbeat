"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[31779],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>c});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return t?a.createElement(h,o(o({ref:n},m),{},{components:t})):a.createElement(h,o({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={id:"extend-http",title:"HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},o=void 0,p={unversionedId:"advanced/extend-http",id:"advanced/extend-http",title:"HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",description:"\u4ece\u81ea\u5b9a\u4e49\u76d1\u63a7\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/extend-http.md",sourceDirName:"advanced",slug:"/advanced/extend-http",permalink:"/zh-cn/docs/advanced/extend-http",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/extend-http.md",tags:[],version:"current",frontMatter:{id:"extend-http",title:"HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},sidebar:"docs",previous:{title:"\u6559\u7a0b\u6848\u4f8b",permalink:"/zh-cn/docs/advanced/extend-tutorial"},next:{title:"\u7cfb\u7edf\u9ed8\u8ba4\u89e3\u6790\u65b9\u5f0f",permalink:"/zh-cn/docs/advanced/extend-http-default"}},l={},s=[{value:"HTTP\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",id:"http\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",level:3},{value:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",level:3},{value:"\u76d1\u63a7\u6a21\u7248YML",id:"\u76d1\u63a7\u6a21\u7248yml",level:3}],m={toc:s};function d(e){let{components:n,...i}=e;return(0,r.yg)("wrapper",(0,a.A)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4ece",(0,r.yg)("a",{parentName:"p",href:"extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528HTTP\u534f\u8bae\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002")),(0,r.yg)("h3",{id:"http\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"},"HTTP\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"),(0,r.yg)("p",null,"\u3010",(0,r.yg)("strong",{parentName:"p"},"HTTP\u63a5\u53e3\u8c03\u7528"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"\u54cd\u5e94\u6821\u9a8c"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u89e3\u6790"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"\u9ed8\u8ba4\u65b9\u5f0f\u89e3\u6790\uff5cJsonPath\u811a\u672c\u89e3\u6790 | XmlPath\u89e3\u6790(todo) | Prometheus\u89e3\u6790"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"\u6307\u6807\u6570\u636e\u63d0\u53d6"),"\u3011"),(0,r.yg)("p",null,"\u7531\u6d41\u7a0b\u53ef\u89c1\uff0c\u6211\u4eec\u81ea\u5b9a\u4e49\u4e00\u4e2aHTTP\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\uff0c\u9700\u8981\u914d\u7f6eHTTP\u8bf7\u6c42\u53c2\u6570\uff0c\u914d\u7f6e\u83b7\u53d6\u54ea\u4e9b\u6307\u6807\uff0c\u5bf9\u54cd\u5e94\u6570\u636e\u914d\u7f6e\u89e3\u6790\u65b9\u5f0f\u548c\u89e3\u6790\u811a\u672c\u3002\nHTTP\u534f\u8bae\u652f\u6301\u6211\u4eec\u81ea\u5b9a\u4e49HTTP\u8bf7\u6c42\u8def\u5f84\uff0c\u8bf7\u6c42header\uff0c\u8bf7\u6c42\u53c2\u6570\uff0c\u8bf7\u6c42\u65b9\u5f0f\uff0c\u8bf7\u6c42\u4f53\u7b49\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7cfb\u7edf\u9ed8\u8ba4\u89e3\u6790\u65b9\u5f0f"),"\uff1ahttp\u63a5\u53e3\u8fd4\u56dehertzbeat\u89c4\u5b9a\u7684json\u6570\u636e\u7ed3\u6784\uff0c\u5373\u53ef\u7528\u9ed8\u8ba4\u89e3\u6790\u65b9\u5f0f\u89e3\u6790\u6570\u636e\u63d0\u53d6\u5bf9\u5e94\u7684\u6307\u6807\u6570\u636e\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"extend-http-default"},(0,r.yg)("strong",{parentName:"a"},"\u7cfb\u7edf\u9ed8\u8ba4\u89e3\u6790")),"\n",(0,r.yg)("strong",{parentName:"p"},"JsonPath\u811a\u672c\u89e3\u6790\u65b9\u5f0f"),"\uff1a\u7528JsonPath\u811a\u672c\u5bf9\u54cd\u5e94\u7684json\u6570\u636e\u8fdb\u884c\u89e3\u6790\uff0c\u8fd4\u56de\u7cfb\u7edf\u6307\u5b9a\u7684\u6570\u636e\u7ed3\u6784\uff0c\u7136\u540e\u63d0\u4f9b\u5bf9\u5e94\u7684\u6307\u6807\u6570\u636e\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"extend-http-jsonpath"},(0,r.yg)("strong",{parentName:"a"},"JsonPath\u811a\u672c\u89e3\u6790"))),(0,r.yg)("h3",{id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4"},"\u81ea\u5b9a\u4e49\u6b65\u9aa4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"HertzBeat\u9875\u9762")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u76d1\u63a7\u6a21\u7248\u83dc\u5355")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u65b0\u589e\u76d1\u63a7\u7c7b\u578b")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u70b9\u51fb\u4fdd\u5b58\u5e94\u7528")," -> ",(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u65b0\u76d1\u63a7\u7c7b\u578b\u6dfb\u52a0\u76d1\u63a7")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"HertzBeat",src:t(35008).A,width:"4064",height:"2166"})),(0,r.yg)("hr",null),(0,r.yg)("p",null,"\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u76d1\u63a7\u6a21\u7248YML\u7684\u914d\u7f6e\u7528\u6cd5\uff0c\u8bf7\u6ce8\u610f\u770b\u4f7f\u7528\u6ce8\u91ca\u3002"),(0,r.yg)("h3",{id:"\u76d1\u63a7\u6a21\u7248yml"},"\u76d1\u63a7\u6a21\u7248YML"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u76d1\u63a7\u6a21\u7248YML\u7528\u4e8e\u5b9a\u4e49 ",(0,r.yg)("em",{parentName:"p"},"\u76d1\u63a7\u7c7b\u578b\u7684\u540d\u79f0(\u56fd\u9645\u5316), \u8bf7\u6c42\u53c2\u6570\u7ed3\u6784\u5b9a\u4e49(\u524d\u7aef\u9875\u9762\u6839\u636e\u914d\u7f6e\u81ea\u52a8\u6e32\u67d3UI), \u91c7\u96c6\u6307\u6807\u4fe1\u606f, \u91c7\u96c6\u534f\u8bae\u914d\u7f6e")," \u7b49\u3002\n\u5373\u6211\u4eec\u901a\u8fc7\u81ea\u5b9a\u4e49\u8fd9\u4e2a\u76d1\u63a7\u6a21\u7248\uff0c\u914d\u7f6e\u5b9a\u4e49\u4ec0\u4e48\u76d1\u63a7\u7c7b\u578b\uff0c\u524d\u7aef\u9875\u9762\u9700\u8981\u8f93\u5165\u4ec0\u4e48\u53c2\u6570\uff0c\u91c7\u96c6\u54ea\u4e9b\u6027\u80fd\u6307\u6807\uff0c\u901a\u8fc7\u4ec0\u4e48\u534f\u8bae\u53bb\u91c7\u96c6\u3002")),(0,r.yg)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3aexample_http\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528HTTP\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: a_example\n# The monitoring i18n name\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\n  en-US: EXAMPLE APP\n# The description and help of this monitoring type\nhelp:\n  zh-CN: HertzBeat \u652f\u6301\u81ea\u5b9a\u4e49\u76d1\u63a7\uff0c\u60a8\u53ea\u9700\u914d\u7f6e\u76d1\u63a7\u6a21\u7248 YML \u5c31\u80fd\u9002\u914d\u4e00\u6b3e\u81ea\u5b9a\u4e49\u7684\u76d1\u63a7\u7c7b\u578b\u3002<br>\u5b9a\u4e49\u6d41\u7a0b\u5982\u4e0b\uff1aHertzBeat \u9875\u9762 -> \u76d1\u63a7\u6a21\u7248\u83dc\u5355 -> \u65b0\u589e\u76d1\u63a7\u7c7b\u578b -> \u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML -> \u70b9\u51fb\u4fdd\u5b58\u5e94\u7528 -> \u4f7f\u7528\u65b0\u76d1\u63a7\u7c7b\u578b\u6dfb\u52a0\u76d1\u63a7\u3002\n  en-US: \"HertzBeat supports custom monitoring, and you only need to configure the monitoring template YML to adapt to a custom monitoring type. <br>Definition process as follow: HertzBeat Pages -> Main Menu -> Monitor Template -> edit and save -> apply this template.\"\n  zh-TW: HertzBeat\u652f\u6301\u81ea\u5b9a\u7fa9\u76e3\u63a7\uff0c\u60a8\u53ea\u9700\u914d\u5bd8\u76e3\u63a7\u6a21\u7248YML\u5c31\u80fd\u9069\u914d\u4e00\u6b3e\u81ea\u5b9a\u7fa9\u7684\u76e3\u63a7\u985e\u578b\u3002<br>\u5b9a\u7fa9\u6d41\u7a0b\u5982\u4e0b\uff1aHertzBeat\u9801\u9762->\u76e3\u63a7\u6a21\u7248\u9078\u55ae->\u65b0\u589e\u76e3\u63a7\u985e\u578b->\u914d\u5bd8\u81ea\u5b9a\u7fa9\u76e3\u63a7\u6a21\u7248YML ->\u9ede\u64ca\u4fdd\u5b58\u61c9\u7528->\u4f7f\u7528\u65b0\u76e3\u63a7\u985e\u578b\u6dfb\u52a0\u76e3\u63a7\u3002\nhelpLink:\n  zh-CN: https://hertzbeat.apache.org/zh-cn/docs/advanced/extend-point/\n  en-US: https://hertzbeat.apache.org/docs/advanced/extend-point/\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u76ee\u6807Host\n      en-US: Target Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  # field-param field key\n  - field: port\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    # required-true or false\n    required: true\n    # default value\n    defaultValue: 80\n    # param field input placeholder\n    placeholder: 'Please Input Port'\n  # field-param field key\n  - field: username\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    # type-param field type(most mapping the html input type)\n    type: text\n    # when type is text, use limit to limit string length\n    limit: 50\n    # required-true or false\n    required: false\n    # hide param-true or false\n    hide: true\n  # field-param field key\n  - field: password\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7528\u6237\u5bc6\u7801\n      en-US: Password\n    # type-param field type(most mapping the html input tag)\n    type: password\n    # required-true or false\n    required: false\n    # hide param-true or false\n    hide: true\n  # field-param field key\n  - field: ssl\n    # name-param field display i18n name\n    name:\n      zh-CN: \u542f\u52a8SSL\n      en-US: SSL\n    # type-param field type(boolean mapping the html switch tag)\n    type: boolean\n    # required-true or false\n    required: false\n  # field-param field key\n  - field: method\n    # name-param field display i18n name\n    name:\n      zh-CN: \u8bf7\u6c42\u65b9\u5f0f\n      en-US: Method\n    # type-param field type(radio mapping the html radio tag)\n    type: radio\n    # required-true or false\n    required: true\n    # when type is radio checkbox, use option to show optional values {name1:value1,name2:value2}\n    options:\n      - label: GET\n        value: GET\n      - label: POST\n        value: POST\n      - label: PUT\n        value: PUT\n      - label: DELETE\n        value: DELETE\n  # field-param field key\n  - field: headers\n    # name-param field display i18n name\n    name:\n      zh-CN: \u8bf7\u6c42Headers\n      en-US: Headers\n    # type-param field type(key-value mapping the html key-value input tags)\n    type: key-value\n    # required-true or false\n    required: false\n    # when type is key-value, use keyAlias to config key alias name\n    keyAlias: Header Name\n    # when type is key-value, use valueAlias to config value alias name\n    valueAlias: Header Value\n# collect metrics config list\nmetrics:\n  # metrics - cpu\n  - name: cpu\n    # metrics name i18n label\n    i18n:\n      zh-CN: CPU \u4fe1\u606f\n      en-US: CPU Info\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # field-metric name, i18n-metric name i18n label, type-metric type(0-number,1-string), unit-metric unit('%','ms','MB'), label-whether it is a metrics label field\n      - field: hostname\n        type: 1\n        label: true\n        i18n:\n          zh-CN: \u4e3b\u673a\u540d\u79f0\n          en-US: Host Name\n      - field: usage\n        type: 0\n        unit: '%'\n        i18n:\n          zh-CN: \u4f7f\u7528\u7387\n          en-US: Usage\n      - field: cores\n        type: 0\n        i18n:\n          zh-CN: \u6838\u6570\n          en-US: Cores\n      - field: waitTime\n        type: 0\n        unit: s\n        i18n:\n          zh-CN: \u4e3b\u673a\u540d\u79f0\n          en-US: Host Name\n    # (optional)metrics field alias name, it is used as an alias field to map and convert the collected data and metrics field\n    aliasFields:\n      - hostname\n      - core1\n      - core2\n      - usage\n      - allTime\n      - runningTime\n    # mapping and conversion expressions, use these and aliasField above to calculate metrics value\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - hostname=hostname\n      - cores=core1+core2\n      - usage=usage\n      - waitTime=allTime-runningTime\n    # the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n    # the config content when protocol is http\n    http:\n      # http host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # http port\n      port: ^_^port^_^\n      # http url\n      url: /metrics/cpu\n      # http method: GET POST PUT DELETE PATCH\n      method: GET\n      # if enabled https\n      ssl: false\n      # http request header content\n      headers:\n        ^_^headers^_^: ^_^headers^_^\n      # http request params\n      params:\n        param1: param1\n        param2: param2\n      # http auth\n      authorization:\n        # http auth type: Basic Auth, Digest Auth, Bearer Token\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      # http response data parse type: default-hertzbeat rule, jsonpath-jsonpath script, website-for website monitoring, prometheus-prometheus exporter rule\n      parseType: jsonPath\n      parseScript: '$'\n\n  - name: memory\n    i18n:\n      zh-CN: \u5185\u5b58\u4fe1\u606f\n      en-US: Memory Info\n    priority: 1\n    fields:\n      - field: hostname\n        type: 1\n        label: true\n        i18n:\n          zh-CN: \u4e3b\u673a\u540d\u79f0\n          en-US: Hostname\n      - field: total\n        type: 0\n        unit: kb\n        i18n:\n          zh-CN: \u603b\u91cf\n          en-US: Total\n      - field: usage\n        type: 0\n        unit: '%'\n        i18n:\n          zh-CN: \u4f7f\u7528\u7387\n          en-US: Usage\n      - field: speed\n        type: 0\n        i18n:\n          zh-CN: \u901f\u7387\n          en-US: Speed\n    protocol: http\n    http:\n      host: ^_^host^_^\n      port: ^_^port^_^\n      url: /metrics/memory\n      method: GET\n      headers:\n        apiVersion: v1\n      params:\n        param1: param1\n        param2: param2\n      authorization:\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      parseType: default\n")))}d.isMDXComponent=!0},35008:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/extend-point-1-0175fbb6d4bd1105c2596f7ccae83938.png"}}]);