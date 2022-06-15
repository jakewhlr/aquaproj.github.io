"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4783],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:50},l="Common Pros and Cons",p={unversionedId:"comparison/common",id:"comparison/common",title:"Common Pros and Cons",description:"Pros",source:"@site/docs/comparison/common.md",sourceDirName:"comparison",slug:"/comparison/common",permalink:"/docs/comparison/common",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/comparison/common.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Uninstall aqua",permalink:"/docs/reference/uninstall"},next:{title:"Manual download and install tools",permalink:"/docs/comparison/manual"}},u={},c=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-pros-and-cons"},"Common Pros and Cons"),(0,r.kt)("h2",{id:"pros"},"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aqua supports changing tool versions per project"),(0,r.kt)("li",{parentName:"ul"},"aqua forces to pin tool version, which solves the problem due to the different of version"),(0,r.kt)("li",{parentName:"ul"},"It is easy to use aqua",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/declarative-imperative"},"aqua manages tools declaratively"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"aqua's command is always ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua i [-l]"),". You don't have to specify tool names. It's user friendly"))))),(0,r.kt)("li",{parentName:"ul"},"aqua provides Renovate Preset Config"),(0,r.kt)("li",{parentName:"ul"},"aqua provides GitHub Actions and CircleCI Orb"),(0,r.kt)("li",{parentName:"ul"},"aqua supports Lazy Install"),(0,r.kt)("li",{parentName:"ul"},"aqua supports installing tools from the private repositories")),(0,r.kt)("h2",{id:"cons"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aqua doesn't support Windows")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"aqua doesn't support Windows yet, but we are working on it.\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/windows-support"},"Windows Support")," too."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"aqua's install process is very simple."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Download tool"),(0,r.kt)("li",{parentName:"ol"},"Unarchive tool in $AQUA_ROOT_DIR")),(0,r.kt)("p",{parentName:"li"},"aqua doesn't support running commands after unarchiving.\nSo aqua doesn't support installing tools which some commands are required."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"aqua supports building Go tools. Pl\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/go-package"},(0,r.kt)("inlineCode",{parentName:"a"},"go")," Package"),", ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/reference/registry-config/go-install-package"},(0,r.kt)("inlineCode",{parentName:"a"},"go_install")," Package"),", and ",(0,r.kt)("a",{parentName:"p",href:"/blog/2022/05/30/support-building-go-tools"},"blog post"),"."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aqua doesn't support installing dependent tools automatically")))}d.isMDXComponent=!0}}]);