"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[97408],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={id:"extend-jdbc",title:"JDBC Protocol Custom Monitoring",sidebar_label:"JDBC Protocol Custom Monitoring"},i=void 0,l={unversionedId:"advanced/extend-jdbc",id:"version-v1.5.x/advanced/extend-jdbc",title:"JDBC Protocol Custom Monitoring",description:"From Custom Monitoring, you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use JDBC(support mysql,mariadb,postgresql,sqlserver at present) to customize Metric monitoring.",source:"@site/versioned_docs/version-v1.5.x/advanced/extend-jdbc.md",sourceDirName:"advanced",slug:"/advanced/extend-jdbc",permalink:"/docs/v1.5.x/advanced/extend-jdbc",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/advanced/extend-jdbc.md",tags:[],version:"v1.5.x",frontMatter:{id:"extend-jdbc",title:"JDBC Protocol Custom Monitoring",sidebar_label:"JDBC Protocol Custom Monitoring"},sidebar:"docs",previous:{title:"Tutorial 2 Get TOKEN for subsequent authentication",permalink:"/docs/v1.5.x/advanced/extend-http-example-token"},next:{title:"SSH Protocol Custom Monitoring",permalink:"/docs/v1.5.x/advanced/extend-ssh"}},s={},c=[{value:"JDBC protocol collection process",id:"jdbc-protocol-collection-process",level:3},{value:"Data parsing method",id:"data-parsing-method",level:3},{value:"<strong>oneRow</strong>",id:"onerow",level:4},{value:"<strong>multiRow</strong>",id:"multirow",level:4},{value:"<strong>columns</strong>",id:"columns",level:4},{value:"Custom Steps",id:"custom-steps",level:3},{value:"Monitoring Templates YML",id:"monitoring-templates-yml",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.yg)("wrapper",(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"From ",(0,o.yg)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring"),", you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use JDBC(support mysql,mariadb,postgresql,sqlserver at present) to customize Metric monitoring.\nJDBC protocol custom monitoring allows us to easily monitor Metrics we want by writing SQL query statement.")),(0,o.yg)("h3",{id:"jdbc-protocol-collection-process"},"JDBC protocol collection process"),(0,o.yg)("p",null,"\u3010",(0,o.yg)("strong",{parentName:"p"},"System directly connected to MYSQL"),"\u3011->\u3010",(0,o.yg)("strong",{parentName:"p"},"Run SQL query statement"),"\u3011->\u3010",(0,o.yg)("strong",{parentName:"p"},"parse reponse data: oneRow, multiRow, columns"),"\u3011->\u3010",(0,o.yg)("strong",{parentName:"p"},"Metric data extraction"),"\u3011"),(0,o.yg)("p",null,"It can be seen from the process that we define a monitoring type of JDBC protocol. We need to configure SSH request parameters, configure which Metrics to obtain, and configure query SQL statements."),(0,o.yg)("h3",{id:"data-parsing-method"},"Data parsing method"),(0,o.yg)("p",null,"We can obtain the corresponding Metric data through the data fields queried by SQL and the Metric mapping we need. At present, there are three mapping parsing methods\uff1aoneRow, multiRow, columns."),(0,o.yg)("h4",{id:"onerow"},(0,o.yg)("strong",{parentName:"h4"},"oneRow")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Query a row of data, return the column name of the result set through query and map them to the queried field.")),(0,o.yg)("p",null,"eg\uff1a\nqueried Metric fields\uff1aone two three four\nquery SQL\uff1aselect one, two, three, four from book limit 1;\nHere the Metric field and the response data can be mapped into a row of collected data one by one."),(0,o.yg)("h4",{id:"multirow"},(0,o.yg)("strong",{parentName:"h4"},"multiRow")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Query multiple rows of data, return the column names of the result set and map them to the queried fields.")),(0,o.yg)("p",null,"eg\uff1a\nqueried Metric fields\uff1aone two three four\nquery SQL\uff1aselect one, two, three, four from book;\nHere the Metric field and the response data can be mapped into multiple rows of collected data one by one."),(0,o.yg)("h4",{id:"columns"},(0,o.yg)("strong",{parentName:"h4"},"columns")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Collect a row of Metric data. By matching the two columns of queried data (key value), key and the queried field, value is the value of the query field.")),(0,o.yg)("p",null,"eg\uff1a\nqueried fields\uff1aone two three four\nquery SQL\uff1aselect key, value from book;\nSQL response data\uff1a"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"key"),(0,o.yg)("th",{parentName:"tr",align:null},"value"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"one"),(0,o.yg)("td",{parentName:"tr",align:null},"243")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"two"),(0,o.yg)("td",{parentName:"tr",align:null},"435")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"three"),(0,o.yg)("td",{parentName:"tr",align:null},"332")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"four"),(0,o.yg)("td",{parentName:"tr",align:null},"643")))),(0,o.yg)("p",null,"Here by mapping the Metric field with the key of the response data, we can  obtain the corresponding value as collection and monitoring data."),(0,o.yg)("h3",{id:"custom-steps"},"Custom Steps"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"HertzBeat Dashboard")," -> ",(0,o.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,o.yg)("strong",{parentName:"p"},"New Template")," -> ",(0,o.yg)("strong",{parentName:"p"},"Config Monitoring Template Yml")," -> ",(0,o.yg)("strong",{parentName:"p"},"Save and Apply")," -> ",(0,o.yg)("strong",{parentName:"p"},"Add A Monitoring with The New Monitoring Type")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Configuration usages of the monitoring templates yml are detailed below."),(0,o.yg)("h3",{id:"monitoring-templates-yml"},"Monitoring Templates YML"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"We define all monitoring collection types (mysql,jvm,k8s) as yml monitoring templates, and users can import these templates to support corresponding types of monitoring."),(0,o.yg)("p",{parentName:"blockquote"},"Monitoring template is used to define ",(0,o.yg)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.")),(0,o.yg)("p",null,"eg\uff1aDefine a custom monitoring type ",(0,o.yg)("inlineCode",{parentName:"p"},"app")," named ",(0,o.yg)("inlineCode",{parentName:"p"},"example_sql")," which use the JDBC protocol to collect data."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: db\n# Monitoring application type(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example_sql\nname:\n  zh-CN: \u6a21\u62dfMYSQL\u5e94\u7528\u7c7b\u578b\n  en-US: MYSQL EXAMPLE APP\n# Monitoring parameter definition file is used to define required input parameter field structure definition Front-end page render input parameter box according to structure\nparams:\n  - field: host\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    type: host\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    range: '[0,65535]'\n    required: true\n    defaultValue: 80\n    placeholder: 'Please enter the port'\n  - field: database\n    name:\n      zh-CN: \u6570\u636e\u5e93\u540d\u79f0\n      en-US: Database\n    type: text\n    required: false\n  - field: username\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    limit: 50\n    required: false\n  - field: password\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: false\n  - field: url\n    name:\n      zh-CN: Url\n      en-US: Url\n    type: text\n    required: false\n# Metric group list\nmetrics:\n  - name: basic\n    # The smaller Metric group scheduling priority(0-127), the higher the priority. After completion of the high priority Metric group collection,the low priority Metric group will then be scheduled. Metric groups with the same priority  will be scheduled in parallel.\n    # Metric group with a priority of 0 is an availability group which will be scheduled first. If the collection succeeds, the  scheduling will continue otherwise interrupt scheduling.\n    priority: 0\n    # metrics fields list\n    fields:\n      # Metric information include field: name   type: field type(0-number: number, 1-string: string)   label-if is metrics label   unit: Metric unit\n      - field: version\n        type: 1\n        label: true\n      - field: port\n        type: 1\n      - field: datadir\n        type: 1\n      - field: max_connections\n        type: 0\n    # (optional)Monitoring Metric alias mapping to the Metric name above. The field used to collect interface data is not the final Metric name directly. This alias is required for mapping conversion.\n    aliasFields:\n      - version\n      - version_compile_os\n      - version_compile_machine\n      - port\n      - datadir\n      - max_connections\n    # (optional)The Metric calculation expression works with the above alias to calculate the final required Metric value.\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - port=port\n      - datadir=datadir\n      - max_connections=max_connections\n      - version=version+\"_\"+version_compile_os+\"_\"+version_compile_machine\n    protocol: jdbc\n    jdbc:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL query method\uff1aoneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global variables where Variable_name like 'version%' or Variable_name = 'max_connections' or Variable_name = 'datadir' or Variable_name = 'port';\n      url: ^_^url^_^\n\n  - name: status\n    priority: 1\n    fields:\n      # Metric information include field: name   type: field type(0-number: number, 1-string: string)   label-if is metrics label   unit: Metric unit\n      - field: threads_created\n        type: 0\n      - field: threads_connected\n        type: 0\n      - field: threads_cached\n        type: 0\n      - field: threads_running\n        type: 0\n    # (optional)Monitoring Metric alias mapping to the Metric name above. The field used to collect interface data is not the final Metric name directly. This alias is required for mapping conversion.\n    aliasFields:\n      - threads_created\n      - threads_connected\n      - threads_cached\n      - threads_running\n    # (optional)The Metric calculation expression works with the above alias to calculate the final required Metric value.\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - threads_created=threads_created\n      - threads_connected=threads_connected\n      - threads_cached=threads_cached\n      - threads_running=threads_running\n    protocol: jdbc\n    jdbc:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL query method: oneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global status where Variable_name like 'thread%' or Variable_name = 'com_commit' or Variable_name = 'com_rollback' or Variable_name = 'questions' or Variable_name = 'uptime';\n      url: ^_^url^_^\n\n  - name: innodb\n    priority: 2\n    fields:\n      # Metric information include field: name   type: field type(0-number: number, 1-string: string)   label-if is metrics label   unit: Metric unit\n      - field: innodb_data_reads\n        type: 0\n        unit: times\n      - field: innodb_data_writes\n        type: 0\n        unit: times\n      - field: innodb_data_read\n        type: 0\n        unit: kb\n      - field: innodb_data_written\n        type: 0\n        unit: kb\n    protocol: jdbc\n    jdbc:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL query method\uff1aoneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global status where Variable_name like 'innodb%';\n      url: ^_^url^_^\n")))}p.isMDXComponent=!0}}]);