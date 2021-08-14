"use strict";(self.webpackChunkdatafuse=self.webpackChunkdatafuse||[]).push([[1973],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2443:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"conversion-cast",title:"CAST"},s=void 0,l={unversionedId:"sqlstatement/conversion-functions/conversion-cast",id:"sqlstatement/conversion-functions/conversion-cast",isDocsHomePage:!1,title:"CAST",description:"Convert a value from one data type to another data type.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sqlstatement/conversion-functions/cast.md",sourceDirName:"sqlstatement/conversion-functions",slug:"/sqlstatement/conversion-functions/conversion-cast",permalink:"/zh-CN/docs/sqlstatement/conversion-functions/conversion-cast",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sqlstatement/conversion-functions/cast.md",version:"current",frontMatter:{id:"conversion-cast",title:"CAST"},sidebar:"tutorialSidebar",previous:{title:"SUM",permalink:"/zh-CN/docs/sqlstatement/aggregate-functions/aggregate-sum"},next:{title:"Type Conversion",permalink:"/zh-CN/docs/sqlstatement/conversion-functions/type-conversion"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return Type",id:"return-type",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Convert a value from one data type to another data type."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CAST(x AS t)\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x"),(0,o.kt)("td",{parentName:"tr",align:null},"A value to convert.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"t"),(0,o.kt)("td",{parentName:"tr",align:null},"The target data type.")))),(0,o.kt)("h2",{id:"return-type"},"Return Type"),(0,o.kt)("p",null,"Converted value."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT CAST(1 AS VARCHAR);\n+-----------------+\n| cast(1 as Utf8) |\n+-----------------+\n| 1               |\n+-----------------+\n\nmysql> SELECT CAST(1 AS UInt64);\n+-------------------+\n| cast(1 as UInt64) |\n+-------------------+\n|                 1 |\n+-------------------+\n\nmysql> SELECT toTypeName(CAST(1 AS UInt64));\n+-------------------------------+\n| toTypeName(cast(1 as UInt64)) |\n+-------------------------------+\n| UInt64                        |\n+-------------------------------+\n\n")))}m.isMDXComponent=!0}}]);