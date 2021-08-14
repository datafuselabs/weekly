"use strict";(self.webpackChunkdatafuse=self.webpackChunkdatafuse||[]).push([[3758],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),o=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),c=o(n),s=a,y=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(y,i(i({ref:e},m),{},{components:n})):r.createElement(y,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1169:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],u={id:"data-type-integer-number",title:"Integer Numbers"},p=void 0,o={unversionedId:"sqlstatement/data-types/data-type-integer-number",id:"sqlstatement/data-types/data-type-integer-number",isDocsHomePage:!1,title:"Integer Numbers",description:"| Data Type | Size   | Min Value            | Max Value            |",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sqlstatement/data-types/data-type-integer-number.md",sourceDirName:"sqlstatement/data-types",slug:"/sqlstatement/data-types/data-type-integer-number",permalink:"/zh-CN/docs/sqlstatement/data-types/data-type-integer-number",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sqlstatement/data-types/data-type-integer-number.md",version:"current",frontMatter:{id:"data-type-integer-number",title:"Integer Numbers"},sidebar:"tutorialSidebar",previous:{title:"Performance",permalink:"/zh-CN/docs/overview/performance"},next:{title:"Real Numbers",permalink:"/zh-CN/docs/sqlstatement/data-types/data-type-real-number"}},m=[],d={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Min Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Max Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int8"),(0,l.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"-128"),(0,l.kt)("td",{parentName:"tr",align:null},"127")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int16"),(0,l.kt)("td",{parentName:"tr",align:null},"2 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"-32768"),(0,l.kt)("td",{parentName:"tr",align:null},"32767")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"4 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"-2147483648"),(0,l.kt)("td",{parentName:"tr",align:null},"2147483647")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int64"),(0,l.kt)("td",{parentName:"tr",align:null},"8 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"-9223372036854775808"),(0,l.kt)("td",{parentName:"tr",align:null},"9223372036854775807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UInt16"),(0,l.kt)("td",{parentName:"tr",align:null},"2 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"65535")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UInt32"),(0,l.kt)("td",{parentName:"tr",align:null},"4 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"4294967295")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UInt64"),(0,l.kt)("td",{parentName:"tr",align:null},"8 byte"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"18446744073709551615")))))}c.isMDXComponent=!0}}]);