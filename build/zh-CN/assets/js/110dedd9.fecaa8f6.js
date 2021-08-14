"use strict";(self.webpackChunkdatafuse=self.webpackChunkdatafuse||[]).push([[7324],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,d=p["".concat(u,".").concat(g)]||p[g]||c[g]||o;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6964:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"aggregate-argmax",title:"argMax"},u=void 0,s={unversionedId:"sqlstatement/aggregate-functions/aggregate-argmax",id:"sqlstatement/aggregate-functions/aggregate-argmax",isDocsHomePage:!1,title:"argMax",description:"Calculates the arg value for a maximum val value. If there are several different values of arg for maximum values of val, returns the first of these values encountered.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sqlstatement/aggregate-functions/aggregate-argmax.md",sourceDirName:"sqlstatement/aggregate-functions",slug:"/sqlstatement/aggregate-functions/aggregate-argmax",permalink:"/zh-CN/docs/sqlstatement/aggregate-functions/aggregate-argmax",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sqlstatement/aggregate-functions/aggregate-argmax.md",version:"current",frontMatter:{id:"aggregate-argmax",title:"argMax"},sidebar:"tutorialSidebar",previous:{title:"SHOW TABLES",permalink:"/zh-CN/docs/sqlstatement/show-commands/show-tables"},next:{title:"argMin",permalink:"/zh-CN/docs/sqlstatement/aggregate-functions/aggregate-argmin"}},m=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return Type",id:"return-type",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Calculates the ",(0,o.kt)("inlineCode",{parentName:"p"},"arg")," value for a maximum ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," value. If there are several different values of ",(0,o.kt)("inlineCode",{parentName:"p"},"arg")," for maximum values of ",(0,o.kt)("inlineCode",{parentName:"p"},"val"),", returns the first of these values encountered."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"argMax(arg, val)\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arg"),(0,o.kt)("td",{parentName:"tr",align:null},"Argument")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"val"),(0,o.kt)("td",{parentName:"tr",align:null},"Value")))),(0,o.kt)("h2",{id:"return-type"},"Return Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"arg")," value that corresponds to maximum ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," value."),(0,o.kt)("p",null,"matches ",(0,o.kt)("inlineCode",{parentName:"p"},"arg")," type."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"numbers(N) \u2013 A table for test with the single ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," column (UInt64) that contains integers from 0 to N-1."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input table:\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT sum(number) AS salary, number%3 AS user FROM numbers_mt(10000) GROUP BY user ORDER BY salary ASC;\n+----------+------+\n| salary   | user |\n+----------+------+\n| 16661667 |    1 |\n| 16665000 |    2 |\n| 16668333 |    0 |\n+----------+------+\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT argMax(user, salary)  FROM (SELECT sum(number) AS salary, number%3 AS user FROM numbers_mt(10000) GROUP BY user);\n\n+----------------------+\n| argMax(user, salary) |\n+----------------------+\n|                    0 |\n+----------------------+\n\n")))}p.isMDXComponent=!0}}]);