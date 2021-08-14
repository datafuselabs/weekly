"use strict";(self.webpackChunkdatafuse=self.webpackChunkdatafuse||[]).push([[5213],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"describe-table",title:"DESCRIBE TABLE"},s=void 0,l={unversionedId:"sqlstatement/describe-commands/describe-table",id:"sqlstatement/describe-commands/describe-table",isDocsHomePage:!1,title:"DESCRIBE TABLE",description:"Displays information about the columns in a given table.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sqlstatement/describe-commands/describe-table.md",sourceDirName:"sqlstatement/describe-commands",slug:"/sqlstatement/describe-commands/describe-table",permalink:"/zh-CN/docs/sqlstatement/describe-commands/describe-table",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sqlstatement/describe-commands/describe-table.md",version:"current",frontMatter:{id:"describe-table",title:"DESCRIBE TABLE"},sidebar:"tutorialSidebar",previous:{title:"SELECT",permalink:"/zh-CN/docs/sqlstatement/data-manipulation-language-dml/dml-select"},next:{title:"SHOW CREATE TABLE",permalink:"/zh-CN/docs/sqlstatement/show-commands/show-create-table"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Displays information about the columns in a given table."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DESC|DESCRIBE [database.]table_name\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> describe system.numbers;\n+--------+--------+------+\n| Field  | Type   | Null |\n+--------+--------+------+\n| number | UInt64 | NO   |\n+--------+--------+------+\n1 row in set (0.01 sec)\n")))}d.isMDXComponent=!0}}]);