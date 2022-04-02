"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7608],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,g=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4163:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],u={sidebar_position:400},s="Install private packages",p={unversionedId:"tutorial-extras/private-package",id:"tutorial-extras/private-package",title:"Install private packages",description:"Of course, Standard Registry doesn't include private packages.",source:"@site/docs/tutorial-extras/private-package.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/private-package",permalink:"/docs/tutorial-extras/private-package",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/private-package.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Add Packages to Registry",permalink:"/docs/tutorial-extras/add-registry"},next:{title:"Use aqua combined with other version manager such as asdf",permalink:"/docs/tutorial-extras/use-aqua-with-other-tools"}},c={},l=[],d={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-private-packages"},"Install private packages"),(0,o.kt)("p",null,"Of course, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"Standard Registry")," doesn't include private packages.\n",(0,o.kt)("inlineCode",{parentName:"p"},"private packages")," are tools hosted in private GitHub Repositories."),(0,o.kt)("p",null,"To install private packages, you have to write Registry Configuration by yourself."),(0,o.kt)("p",null,"The environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GITHUB_TOKEN")," is required."),(0,o.kt)("p",null,"About how to write Registry Configuration, please see ",(0,o.kt)("a",{parentName:"p",href:"add-registry"},"Add Packages to Registry"),"."))}f.isMDXComponent=!0}}]);