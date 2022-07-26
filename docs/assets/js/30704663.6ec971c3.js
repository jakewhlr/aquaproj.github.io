"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[169],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?t.createElement(m,i(i({ref:r},l),{},{components:n})):t.createElement(m,i({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6140:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var t=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:610},s="search_words",u={unversionedId:"reference/registry-config/search-words",id:"reference/registry-config/search-words",title:"search_words",description:"#972 aqua >= v1.16.0 is required",source:"@site/docs/reference/registry-config/search-words.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/search-words",permalink:"/docs/reference/registry-config/search-words",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/search-words.md",tags:[],version:"current",sidebarPosition:610,frontMatter:{sidebar_position:610},sidebar:"tutorialSidebar",previous:{title:"aliases",permalink:"/docs/reference/registry-config/aliases"},next:{title:"files",permalink:"/docs/reference/registry-config/files"}},l={},p=[],f={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search_words"},"search_words"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/972"},"#972")," aqua >= v1.16.0 is required"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"search_words")," is used only for searching packages by ",(0,a.kt)("inlineCode",{parentName:"p"},"aqua g")," command.\naqua searches not only the package name, aliases, and command names but also ",(0,a.kt)("inlineCode",{parentName:"p"},"search_words"),"."),(0,a.kt)("p",null,"For example, it is useful to find GitHub CLI with the word ",(0,a.kt)("inlineCode",{parentName:"p"},"github"),"."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_release\n    repo_owner: cli\n    repo_name: cli\n    description: GitHub\u2019s official command line tool\n    search_words:\n      - github\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  cli/cli [gh]: github\n  github/licensed\n> github/hub\n  8/643\n> github\n")))}d.isMDXComponent=!0}}]);