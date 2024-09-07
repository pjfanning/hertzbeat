"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[48879],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const o={id:"extend-http",title:"HTTP Protocol Custom Monitoring",sidebar_label:"HTTP Protocol Custom Monitoring"},i=void 0,p={unversionedId:"advanced/extend-http",id:"advanced/extend-http",title:"HTTP Protocol Custom Monitoring",description:"From Custom Monitoring, you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use HTTP protocol to customize Metric monitoring",source:"@site/docs/advanced/extend-http.md",sourceDirName:"advanced",slug:"/advanced/extend-http",permalink:"/docs/advanced/extend-http",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/advanced/extend-http.md",tags:[],version:"current",frontMatter:{id:"extend-http",title:"HTTP Protocol Custom Monitoring",sidebar_label:"HTTP Protocol Custom Monitoring"},sidebar:"docs",previous:{title:"Tutorial Case",permalink:"/docs/advanced/extend-tutorial"},next:{title:"Default Parsing Method",permalink:"/docs/advanced/extend-http-default"}},s={},l=[{value:"HTTP protocol collection process",id:"http-protocol-collection-process",level:3},{value:"Custom Steps",id:"custom-steps",level:3},{value:"Monitoring Templates YML",id:"monitoring-templates-yml",level:3}],m={toc:l};function d(e){let{components:t,...n}=e;return(0,r.yg)("wrapper",(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"From ",(0,r.yg)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring"),", you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use HTTP protocol to customize Metric monitoring")),(0,r.yg)("h3",{id:"http-protocol-collection-process"},"HTTP protocol collection process"),(0,r.yg)("p",null,"\u3010",(0,r.yg)("strong",{parentName:"p"},"Call HTTP API"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"Response Verification"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"Parse Response Data"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"Default method parsing\uff5cJsonPath script parsing | XmlPath parsing(todo) | Prometheus parsing"),"\u3011->\u3010",(0,r.yg)("strong",{parentName:"p"},"Metric data extraction"),"\u3011"),(0,r.yg)("p",null,"It can be seen from the process that we define a monitoring type of HTTP protocol. We need to configure HTTP request parameters, configure which Metrics to obtain, and configure the parsing method and parsing script for response data.\nHTTP protocol supports us to customize HTTP request path, request header, request parameters, request method, request body, etc."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"System default parsing method"),"\uff1aHTTP interface returns the JSON data structure specified by hertzbeat, that is, the default parsing method can be used to parse the data and extract the corresponding Metric data. For details, refer to ",(0,r.yg)("a",{parentName:"p",href:"extend-http-default"},(0,r.yg)("strong",{parentName:"a"},"System Default Parsing")),"\n",(0,r.yg)("strong",{parentName:"p"},"JsonPath script parsing method"),"\uff1aUse JsonPath script to parse the response JSON data, return the data structure specified by the system, and then provide the corresponding Metric data. For details, refer to ",(0,r.yg)("a",{parentName:"p",href:"extend-http-jsonpath"},(0,r.yg)("strong",{parentName:"a"},"JsonPath Script Parsing"))),(0,r.yg)("h3",{id:"custom-steps"},"Custom Steps"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"HertzBeat Dashboard")," -> ",(0,r.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,r.yg)("strong",{parentName:"p"},"New Template")," -> ",(0,r.yg)("strong",{parentName:"p"},"Config Monitoring Template Yml")," -> ",(0,r.yg)("strong",{parentName:"p"},"Save and Apply")," -> ",(0,r.yg)("strong",{parentName:"p"},"Add A Monitoring with The New Monitoring Type")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"Configuration usages of the monitoring templates yml are detailed below. Please pay attention to usage annotation."),(0,r.yg)("h3",{id:"monitoring-templates-yml"},"Monitoring Templates YML"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"We define all monitoring collection types (mysql,jvm,k8s) as yml monitoring templates, and users can import these templates to support corresponding types of monitoring."),(0,r.yg)("p",{parentName:"blockquote"},"Monitoring template is used to define ",(0,r.yg)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.")),(0,r.yg)("p",null,"eg\uff1aDefine a custom monitoring type ",(0,r.yg)("inlineCode",{parentName:"p"},"app")," named ",(0,r.yg)("inlineCode",{parentName:"p"},"example_http")," which use the HTTP protocol to collect data."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,r.yg)("strong",{parentName:"p"},"Config New Monitoring Template Yml")," -> ",(0,r.yg)("strong",{parentName:"p"},"Save and Apply")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: a_example\n# The monitoring i18n name\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\n  en-US: EXAMPLE APP\n# The description and help of this monitoring type\nhelp:\n  zh-CN: HertzBeat \u652f\u6301\u81ea\u5b9a\u4e49\u76d1\u63a7\uff0c\u60a8\u53ea\u9700\u914d\u7f6e\u76d1\u63a7\u6a21\u7248 YML \u5c31\u80fd\u9002\u914d\u4e00\u6b3e\u81ea\u5b9a\u4e49\u7684\u76d1\u63a7\u7c7b\u578b\u3002<br>\u5b9a\u4e49\u6d41\u7a0b\u5982\u4e0b\uff1aHertzBeat \u9875\u9762 -> \u76d1\u63a7\u6a21\u7248\u83dc\u5355 -> \u65b0\u589e\u76d1\u63a7\u7c7b\u578b -> \u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u6a21\u7248YML -> \u70b9\u51fb\u4fdd\u5b58\u5e94\u7528 -> \u4f7f\u7528\u65b0\u76d1\u63a7\u7c7b\u578b\u6dfb\u52a0\u76d1\u63a7\u3002\n  en-US: \"HertzBeat supports custom monitoring, and you only need to configure the monitoring template YML to adapt to a custom monitoring type. <br>Definition process as follow: HertzBeat Pages -> Main Menu -> Monitor Template -> edit and save -> apply this template.\"\n  zh-TW: HertzBeat\u652f\u6301\u81ea\u5b9a\u7fa9\u76e3\u63a7\uff0c\u60a8\u53ea\u9700\u914d\u5bd8\u76e3\u63a7\u6a21\u7248YML\u5c31\u80fd\u9069\u914d\u4e00\u6b3e\u81ea\u5b9a\u7fa9\u7684\u76e3\u63a7\u985e\u578b\u3002<br>\u5b9a\u7fa9\u6d41\u7a0b\u5982\u4e0b\uff1aHertzBeat\u9801\u9762->\u76e3\u63a7\u6a21\u7248\u9078\u55ae->\u65b0\u589e\u76e3\u63a7\u985e\u578b->\u914d\u5bd8\u81ea\u5b9a\u7fa9\u76e3\u63a7\u6a21\u7248YML ->\u9ede\u64ca\u4fdd\u5b58\u61c9\u7528->\u4f7f\u7528\u65b0\u76e3\u63a7\u985e\u578b\u6dfb\u52a0\u76e3\u63a7\u3002\nhelpLink:\n  zh-CN: https://hertzbeat.apache.org/zh-cn/docs/advanced/extend-point/\n  en-US: https://hertzbeat.apache.org/docs/advanced/extend-point/\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u76ee\u6807Host\n      en-US: Target Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  # field-param field key\n  - field: port\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    # required-true or false\n    required: true\n    # default value\n    defaultValue: 80\n    # param field input placeholder\n    placeholder: 'Please Input Port'\n  # field-param field key\n  - field: username\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    # type-param field type(most mapping the html input type)\n    type: text\n    # when type is text, use limit to limit string length\n    limit: 50\n    # required-true or false\n    required: false\n    # hide param-true or false\n    hide: true\n  # field-param field key\n  - field: password\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7528\u6237\u5bc6\u7801\n      en-US: Password\n    # type-param field type(most mapping the html input tag)\n    type: password\n    # required-true or false\n    required: false\n    # hide param-true or false\n    hide: true\n  # field-param field key\n  - field: ssl\n    # name-param field display i18n name\n    name:\n      zh-CN: \u542f\u52a8SSL\n      en-US: SSL\n    # type-param field type(boolean mapping the html switch tag)\n    type: boolean\n    # required-true or false\n    required: false\n  # field-param field key\n  - field: method\n    # name-param field display i18n name\n    name:\n      zh-CN: \u8bf7\u6c42\u65b9\u5f0f\n      en-US: Method\n    # type-param field type(radio mapping the html radio tag)\n    type: radio\n    # required-true or false\n    required: true\n    # when type is radio checkbox, use option to show optional values {name1:value1,name2:value2}\n    options:\n      - label: GET\n        value: GET\n      - label: POST\n        value: POST\n      - label: PUT\n        value: PUT\n      - label: DELETE\n        value: DELETE\n  # field-param field key\n  - field: headers\n    # name-param field display i18n name\n    name:\n      zh-CN: \u8bf7\u6c42Headers\n      en-US: Headers\n    # type-param field type(key-value mapping the html key-value input tags)\n    type: key-value\n    # required-true or false\n    required: false\n    # when type is key-value, use keyAlias to config key alias name\n    keyAlias: Header Name\n    # when type is key-value, use valueAlias to config value alias name\n    valueAlias: Header Value\n# collect metrics config list\nmetrics:\n  # metrics - cpu\n  - name: cpu\n    # metrics name i18n label\n    i18n:\n      zh-CN: CPU \u4fe1\u606f\n      en-US: CPU Info\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # field-metric name, i18n-metric name i18n label, type-metric type(0-number,1-string), unit-metric unit('%','ms','MB'), label-whether it is a metrics label field\n      - field: hostname\n        type: 1\n        label: true\n        i18n:\n          zh-CN: \u4e3b\u673a\u540d\u79f0\n          en-US: Host Name\n      - field: usage\n        type: 0\n        unit: '%'\n        i18n:\n          zh-CN: \u4f7f\u7528\u7387\n          en-US: Usage\n      - field: cores\n        type: 0\n        i18n:\n          zh-CN: \u6838\u6570\n          en-US: Cores\n      - field: waitTime\n        type: 0\n        unit: s\n        i18n:\n          zh-CN: \u4e3b\u673a\u540d\u79f0\n          en-US: Host Name\n    # (optional)metrics field alias name, it is used as an alias field to map and convert the collected data and metrics field\n    aliasFields:\n      - hostname\n      - core1\n      - core2\n      - usage\n      - allTime\n      - runningTime\n    # mapping and conversion expressions, use these and aliasField above to calculate metrics value\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - hostname=hostname\n      - cores=core1+core2\n      - usage=usage\n      - waitTime=allTime-runningTime\n    # the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n    # the config content when protocol is http\n    http:\n      # http host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # http port\n      port: ^_^port^_^\n      # http url\n      url: /metrics/cpu\n      # http method: GET POST PUT DELETE PATCH\n      method: GET\n      # if enabled https\n      ssl: false\n      # http request header content\n      headers:\n        ^_^headers^_^: ^_^headers^_^\n      # http request params\n      params:\n        param1: param1\n        param2: param2\n      # http auth\n      authorization:\n        # http auth type: Basic Auth, Digest Auth, Bearer Token\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      # http response data parse type: default-hertzbeat rule, jsonpath-jsonpath script, website-for website monitoring, prometheus-prometheus exporter rule\n      parseType: jsonPath\n      parseScript: '$'\n\n  - name: memory\n    i18n:\n      zh-CN: \u5185\u5b58\u4fe1\u606f\n      en-US: Memory Info\n    priority: 1\n    fields:\n      - field: hostname\n        type: 1\n        label: true\n        i18n:\n          zh-CN: \u4e3b\u673a\u540d\u79f0\n          en-US: Hostname\n      - field: total\n        type: 0\n        unit: kb\n        i18n:\n          zh-CN: \u603b\u91cf\n          en-US: Total\n      - field: usage\n        type: 0\n        unit: '%'\n        i18n:\n          zh-CN: \u4f7f\u7528\u7387\n          en-US: Usage\n      - field: speed\n        type: 0\n        i18n:\n          zh-CN: \u901f\u7387\n          en-US: Speed\n    protocol: http\n    http:\n      host: ^_^host^_^\n      port: ^_^port^_^\n      url: /metrics/memory\n      method: GET\n      headers:\n        apiVersion: v1\n      params:\n        param1: param1\n        param2: param2\n      authorization:\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      parseType: default\n\n")))}d.isMDXComponent=!0}}]);