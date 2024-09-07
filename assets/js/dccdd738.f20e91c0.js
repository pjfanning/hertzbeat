"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[68027],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?n.createElement(g,i(i({ref:a},p),{},{components:t})):n.createElement(g,i({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69775:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(58168),r=(t(96540),t(15680));const o={},i="HertzBeat 1.6.0 Upgrade Guide",l={permalink:"/blog/2024/06/11/hertzbeat-v1.6.0-update",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2024-06-11-hertzbeat-v1.6.0-update.md",source:"@site/blog/2024-06-11-hertzbeat-v1.6.0-update.md",title:"HertzBeat 1.6.0 Upgrade Guide",description:"Note: This guide is applicable for upgrading from 1.5.0 to 1.6.0 to version 1.6.0.",date:"2024-06-11T00:00:00.000Z",formattedDate:"June 11, 2024",tags:[],readingTime:4.775,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"HertzBeat First Apache version v1.6.0 released now!",permalink:"/blog/2024/06/15/hertzbeat-v1.6.0"},nextItem:{title:"[Open Source Summer] Hertzbeat project introduction",permalink:"/blog/2024/05/09/hertzbeat-ospp-subject-introduction"}},s={authorsImageUrls:[]},d=[{value:"Binary Installation Package Upgrade",id:"binary-installation-package-upgrade",level:2},{value:"Upgrade Java Environment",id:"upgrade-java-environment",level:3},{value:"Upgrade Database",id:"upgrade-database",level:3},{value:"Upgrade Configuration Files",id:"upgrade-configuration-files",level:3},{value:"<code>application.yml</code> generally needs to modify the following parts",id:"applicationyml-generally-needs-to-modify-the-following-parts",level:4},{value:"<code>sureness.yml</code> modification is optional, usually when you need to change account passwords",id:"surenessyml-modification-is-optional-usually-when-you-need-to-change-account-passwords",level:4},{value:"Add the corresponding database drivers",id:"add-the-corresponding-database-drivers",level:3},{value:"Docker Upgrade - Mysql Database",id:"docker-upgrade---mysql-database",level:2},{value:"Docker Installation Upgrade - H2 Built-in Database (Not recommended for production use)",id:"docker-installation-upgrade---h2-built-in-database-not-recommended-for-production-use",level:2},{value:"Upgrade via Export and Import",id:"upgrade-via-export-and-import",level:2}],p={toc:d};function c(e){let{components:a,...t}=e;return(0,r.yg)("wrapper",(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note: This guide is applicable for upgrading from 1.5.0 to 1.6.0 to version 1.6.0."),"\n",(0,r.yg)("strong",{parentName:"p"},"If you are using an older version, it is recommended to reinstall using the export function, or upgrade to 1.5.0 and then follow this guide to 1.6.0.")),(0,r.yg)("h2",{id:"binary-installation-package-upgrade"},"Binary Installation Package Upgrade"),(0,r.yg)("h3",{id:"upgrade-java-environment"},"Upgrade Java Environment"),(0,r.yg)("p",null,"Since version 1.6.0 uses Java 17 and the installation package no longer provides a built-in JDK version, use the new Hertzbeat according to the following situations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When the default environment variable on your server is Java 17, you do not need to take any action for this step."),(0,r.yg)("li",{parentName:"ul"},"When the default environment variable on your server is not Java 17, such as Java 8 or Java 11, and if there are no other applications on your server that require a lower version of Java, download the appropriate version from ",(0,r.yg)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html"},"https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html")," according to your system, and search the engine for how to set a new environment variable pointing to the new Java 17."),(0,r.yg)("li",{parentName:"ul"},"When the default environment variable on your server is not Java 17, such as Java 8 or Java 11, and if there are other applications on your server that require a lower version of Java, download the appropriate version from ",(0,r.yg)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html"},"https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html")," according to your system, and rename the extracted folder to ",(0,r.yg)("inlineCode",{parentName:"li"},"java"),", then copy it to the Hertzbeat extraction directory.")),(0,r.yg)("h3",{id:"upgrade-database"},"Upgrade Database"),(0,r.yg)("p",null,"Go to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/tree/master/manager/src/main/resources/db/migration"},"https://github.com/apache/hertzbeat/tree/master/manager/src/main/resources/db/migration"),", choose the directory of your database and execute the corresponding ",(0,r.yg)("inlineCode",{parentName:"p"},"V160__update_column.sql")," file for the upgrade SQL."),(0,r.yg)("h3",{id:"upgrade-configuration-files"},"Upgrade Configuration Files"),(0,r.yg)("p",null,"Due to significant changes in ",(0,r.yg)("inlineCode",{parentName:"p"},"application.yml")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"sureness.yml"),", it is recommended to directly use the new ",(0,r.yg)("inlineCode",{parentName:"p"},"yml")," configuration files and then modify them based on your own needs."),(0,r.yg)("h4",{id:"applicationyml-generally-needs-to-modify-the-following-parts"},(0,r.yg)("inlineCode",{parentName:"h4"},"application.yml")," generally needs to modify the following parts"),(0,r.yg)("p",null,"Default is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"  datasource:\n    driver-class-name: org.h2.Driver\n    username: sa\n    password: 123456\n    url: jdbc:h2:./data/hertzbeat;MODE=MYSQL\n    hikari:\n      max-lifetime: 120000\n\n  jpa:\n    show-sql: false\n    database-platform: org.eclipse.persistence.platform.database.MySQLPlatform\n    database: h2\n    properties:\n      eclipselink:\n        logging:\n          level: SEVERE\n")),(0,r.yg)("p",null,"If you change to a MySQL database, here is an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    username: root\n    password: root\n    url: jdbc:mysql://localhost:3306/hertzbeat?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai\n    hikari:\n      max-lifetime: 120000\n\n  jpa:\n    show-sql: false\n    database-platform: org.eclipse.persistence.platform.database.MySQLPlatform\n    database: mysql\n    properties:\n      eclipselink:\n        logging:\n          level: SEVERE\n")),(0,r.yg)("h4",{id:"surenessyml-modification-is-optional-usually-when-you-need-to-change-account-passwords"},(0,r.yg)("inlineCode",{parentName:"h4"},"sureness.yml")," modification is optional, usually when you need to change account passwords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# account info config\n# eg: admin has role [admin,user], password is hertzbeat\n# eg: tom has role [user], password is hertzbeat\n# eg: lili has role [guest], plain password is lili, salt is 123, salted password is 1A676730B0C7F54654B0E09184448289\naccount:\n  - appId: admin\n    credential: hertzbeat\n    role: [admin]\n  - appId: tom\n    credential: hertzbeat\n    role: [user]\n  - appId: guest\n    credential: hertzbeat\n    role: [guest]\n  - appId: lili\n    # credential = MD5(password + salt)\n    # plain password: hertzbeat\n    # attention: digest authentication does not support salted encrypted password accounts\n    credential: 94C6B34E7A199A9F9D4E1F208093B489\n    salt: 123\n    role: [user]\n")),(0,r.yg)("h3",{id:"add-the-corresponding-database-drivers"},"Add the corresponding database drivers"),(0,r.yg)("p",null,"Due to the Apache Foundation's requirements for license compliance, HertzBeat's installation package cannot include dependencies with GPL licenses such as MySQL, Oracle, etc. Users need to add them themselves. Users can download the drivers from the following links and copy them to the ",(0,r.yg)("inlineCode",{parentName:"p"},"ext-lib")," directory of the installation:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"MySQL: ",(0,r.yg)("a",{parentName:"li",href:"https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.25.zip"},"https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.25.zip")),(0,r.yg)("li",{parentName:"ul"},"Oracle (If you want to monitor Oracle, these two drivers are required):",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://download.oracle.com/otn-pub/otn_software/jdbc/234/ojdbc8.jar"},"https://download.oracle.com/otn-pub/otn_software/jdbc/234/ojdbc8.jar")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://repo.mavenlibs.com/maven/com/oracle/database/nls/orai18n/21.5.0.0/orai18n-21.5.0.0.jar"},"https://repo.mavenlibs.com/maven/com/oracle/database/nls/orai18n/21.5.0.0/orai18n-21.5.0.0.jar"))))),(0,r.yg)("p",null,"Next, run the start-up script as before to experience the latest HertzBeat 1.6.0!"),(0,r.yg)("h2",{id:"docker-upgrade---mysql-database"},"Docker Upgrade - Mysql Database"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Stop the HertzBeat container:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker stop hertzbeat\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Upgrade the database script:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Go to ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/hertzbeat/tree/master/manager/src/main/resources/db/migration"},"https://github.com/apache/hertzbeat/tree/master/manager/src/main/resources/db/migration"),", choose the directory of your database and execute the corresponding ",(0,r.yg)("inlineCode",{parentName:"li"},"V160__update_column.sql")," file in MySQL."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Upgrade the configuration files:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"As mentioned, due to significant changes in ",(0,r.yg)("inlineCode",{parentName:"li"},"application.yml")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"sureness.yml"),", it is recommended to directly mount and use the new ",(0,r.yg)("inlineCode",{parentName:"li"},"yml")," configuration files, and then modify them based on your own needs."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add the corresponding database drivers:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Due to the Apache Foundation's license compliance requirements, HertzBeat's installation package cannot include MySQL, Oracle, and other GPL-licensed dependencies. Users need to add them themselves by downloading the driver jars from the above links and placing them in the local ",(0,r.yg)("inlineCode",{parentName:"li"},"ext-lib")," directory, then mounting ",(0,r.yg)("inlineCode",{parentName:"li"},"ext-lib")," to the container's ",(0,r.yg)("inlineCode",{parentName:"li"},"/opt/hertzbeat/ext-lib")," directory when starting.")))),(0,r.yg)("p",null,"Next, run HertzBeat using Docker as before to experience the latest HertzBeat 1.6.0!"),(0,r.yg)("h2",{id:"docker-installation-upgrade---h2-built-in-database-not-recommended-for-production-use"},"Docker Installation Upgrade - H2 Built-in Database (Not recommended for production use)"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Stop the HertzBeat container:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker stop hertzbeat\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Edit the H2 database files:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Assuming you have mounted the H2 database files in the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," directory to the local system, or copied the ",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/hertzbeat/data")," directory from the old container manually.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download the H2 driver jar from ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.h2database/h2/2.2.220"},"https://mvnrepository.com/artifact/com.h2database/h2/2.2.220"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start the database locally using the H2 driver jar:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"java -jar h2-2.2.220.jar -url jdbc:h2:file:./hertzbeat -user sa -password 123456\n"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Upgrade the configuration files:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"As mentioned, due to significant changes in ",(0,r.yg)("inlineCode",{parentName:"li"},"application.yml")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"sureness.yml"),", it is recommended to directly mount and use the new ",(0,r.yg)("inlineCode",{parentName:"li"},"yml")," configuration files, and then modify them based on your own needs."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add the corresponding database drivers:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"As mentioned, due to the Apache Foundation's license compliance requirements, HertzBeat's installation package cannot include MySQL, Oracle, and other GPL-licensed dependencies. Users need to add them themselves by downloading the driver jars from the above links and placing them in the local ",(0,r.yg)("inlineCode",{parentName:"li"},"ext-lib")," directory, then mounting ",(0,r.yg)("inlineCode",{parentName:"li"},"ext-lib")," to the container's ",(0,r.yg)("inlineCode",{parentName:"li"},"/opt/hertzbeat/ext-lib")," directory when starting.")))),(0,r.yg)("p",null,"Next, run the Docker to start HertzBeat as before to experience the latest HertzBeat 1.6.0!"),(0,r.yg)("h2",{id:"upgrade-via-export-and-import"},"Upgrade via Export and Import"),(0,r.yg)("p",null,"If you do not want to go through the tedious script upgrade method mentioned above, you can directly export and import the monitoring tasks and threshold information from the old environment."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Deploy a new environment with the latest version."),(0,r.yg)("li",{parentName:"ul"},"Export the monitoring tasks and threshold information from the old environment on the page")))}c.isMDXComponent=!0}}]);