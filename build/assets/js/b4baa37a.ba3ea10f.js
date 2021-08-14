"use strict";(self.webpackChunkdatafuse=self.webpackChunkdatafuse||[]).push([[4547],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"ddl-create-table",title:"CREATE TABLE",sidebar_position:3},d=void 0,s={unversionedId:"sqlstatement/data-definition-language-ddl/ddl-create-table",id:"sqlstatement/data-definition-language-ddl/ddl-create-table",isDocsHomePage:!1,title:"CREATE TABLE",description:"Create a new table.",source:"@site/docs/sqlstatement/data-definition-language-ddl/ddl-create-table.md",sourceDirName:"sqlstatement/data-definition-language-ddl",slug:"/sqlstatement/data-definition-language-ddl/ddl-create-table",permalink:"/docs/sqlstatement/data-definition-language-ddl/ddl-create-table",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sqlstatement/data-definition-language-ddl/ddl-create-table.md",version:"current",sidebarPosition:3,frontMatter:{id:"ddl-create-table",title:"CREATE TABLE",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"DROP DATABASE",permalink:"/docs/sqlstatement/data-definition-language-ddl/ddl-drop-database"},next:{title:"DROP TABLE",permalink:"/docs/sqlstatement/data-definition-language-ddl/ddl-drop-table"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Examples",id:"examples",children:[{value:"Memory engine",id:"memory-engine",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a new table."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name\n(\n    name1 type1,\n    name2 type2,\n    ...\n) ENGINE = engine\n")),(0,i.kt)("p",null,"!!! note\nLocal engine is one of ",(0,i.kt)("inlineCode",{parentName:"p"},"Memory"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Parquet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONEachRow"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"CSV"),", data will be stored in the FuseQuery memory/disk locally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Remote engine is `remote`, will be stored in the remote FuseStore cluster.\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"memory-engine"},"Memory engine"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE test(a UInt64, b Varchar) Engine = Memory;\n\nmysql> INSERT INTO test(a,b) values(888, 'stars');\n\nmysql> SELECT * FROM test;\n+------+---------+\n| a    | b       |\n+------+---------+\n|  888 |  stars  |\n+------+---------+\n")))}p.isMDXComponent=!0}}]);