"use strict";(self.webpackChunkdatafuse=self.webpackChunkdatafuse||[]).push([[112],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=c(n),g=a,p=f["".concat(u,".").concat(g)]||f[g]||l[g]||o;return n?r.createElement(p,i(i({ref:t},m),{},{components:n})):r.createElement(p,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"aggregate-sum-if",title:"sumIf"},u=void 0,c={unversionedId:"sqlstatement/aggregate-functions/aggregate-sum-if",id:"sqlstatement/aggregate-functions/aggregate-sum-if",isDocsHomePage:!1,title:"sumIf",description:"sumIf",source:"@site/docs/sqlstatement/aggregate-functions/aggregate-sum-if.md",sourceDirName:"sqlstatement/aggregate-functions",slug:"/sqlstatement/aggregate-functions/aggregate-sum-if",permalink:"/docs/sqlstatement/aggregate-functions/aggregate-sum-if",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sqlstatement/aggregate-functions/aggregate-sum-if.md",version:"current",frontMatter:{id:"aggregate-sum-if",title:"sumIf"},sidebar:"tutorialSidebar",previous:{title:"MIN",permalink:"/docs/sqlstatement/aggregate-functions/aggregate-min"},next:{title:"SUM",permalink:"/docs/sqlstatement/aggregate-functions/aggregate-sum"}},m=[{value:"sumIf",id:"sumif",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sumif"},"sumIf"),(0,o.kt)("p",null,"The suffix -If can be appended to the name of any aggregate function. In this case, the aggregate function accepts an extra argument \u2013 a condition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sumIf(column, cond)\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"numbers(N) \u2013 A table for test with the single ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," column (UInt64) that contains integers from 0 to N-1."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT sum(number) FROM numbers(10);\n+-------------+\n| sum(number) |\n+-------------+\n|          45 |\n+-------------+\n\nmysql> SELECT sumIf(number, number > 7) FROM numbers(10);\n+-----------------------------+\n| sumIf(number, (number > 7)) |\n+-----------------------------+\n|                          17 |\n+-----------------------------+\n\n")))}f.isMDXComponent=!0}}]);