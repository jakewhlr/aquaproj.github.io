"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[9794],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),g=a,m=f["".concat(u,".").concat(g)]||f[g]||p[g]||i;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3504:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:800},u="`github_release` Package",l={unversionedId:"reference/registry-config/github-release-package",id:"reference/registry-config/github-release-package",title:"`github_release` Package",description:"* repo_owner: The repository owner name",source:"@site/docs/reference/registry-config/github-release-package.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/github-release-package",permalink:"/docs/reference/registry-config/github-release-package",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/github-release-package.md",tags:[],version:"current",sidebarPosition:800,frontMatter:{sidebar_position:800},sidebar:"tutorialSidebar",previous:{title:"files",permalink:"/docs/reference/registry-config/files"},next:{title:"`http` Package",permalink:"/docs/reference/registry-config/http-package"}},s={},p=[],f={toc:p};function g(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github_release-package"},(0,i.kt)("inlineCode",{parentName:"h1"},"github_release")," Package"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"asset"),": The template string of GitHub Release's asset name",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"'lima-{{trimV .Version}}-{{title .OS}}-{{.Arch}}.tar.gz'"))))))}g.isMDXComponent=!0}}]);