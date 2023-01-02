"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[572],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,g=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(g,l(l({ref:t},i),{},{components:r})):n.createElement(g,l({ref:t},i))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:820},l="Log Color",p={unversionedId:"reference/log-color",id:"reference/log-color",title:"Log Color",description:"aqua >= v1.17.0",source:"@site/docs/reference/log-color.md",sourceDirName:"reference",slug:"/reference/log-color",permalink:"/docs/reference/log-color",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/log-color.md",tags:[],version:"current",sidebarPosition:820,frontMatter:{sidebar_position:820},sidebar:"tutorialSidebar",previous:{title:"Progress Bar",permalink:"/docs/reference/progress-bar"},next:{title:"aqua doesn't support installing aqua",permalink:"/docs/reference/aqua-cant-manage-aqua"}},u={},c=[],i={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log-color"},"Log Color"),(0,o.kt)("p",null,"aqua >= ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.17.0"},"v1.17.0")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/982"},"#982")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/983"},"#983")),(0,o.kt)("p",null,"aqua supports setting the log coloring by the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_LOG_COLOR"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ export AQUA_LOG_COLOR=always|auto|never\n")),(0,o.kt)("p",null,"aqua uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sirupsen/logrus"},"sirupsen/logrus"),".\nAbout the color setting, please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sirupsen/logrus#formatters"},"logrus#formtter")," too."),(0,o.kt)("p",null,"If you want to disable the coloring, please set ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_LOG_COLOR=never"),"."),(0,o.kt)("p",null,"If you want to enable the coloring at GitHub Actions, please set ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_LOG_COLOR=always"),"."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/178093930-6adc8928-96e4-425a-9741-a48aac6ccf75.png",alt:"image"})))}s.isMDXComponent=!0}}]);