"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1483],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7368:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:100},u="Install",c={unversionedId:"reference/install",id:"reference/install",title:"Install",description:"aqua is a single binary written in Go.",source:"@site/docs/reference/install.md",sourceDirName:"reference",slug:"/reference/install",permalink:"/docs/reference/install",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/install.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Use aqua combined with other version manager such as asdf",permalink:"/docs/tutorial-extras/use-aqua-with-other-tools"},next:{title:"Registry",permalink:"/docs/reference/registry"}},s={},p=[{value:"Homebrew",id:"homebrew",level:2},{value:"Install script",id:"install-script",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"CircleCI Orb",id:"circleci-orb",level:2},{value:"Download from GitHub Releases",id:"download-from-github-releases",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install"},"Install"),(0,i.kt)("p",null,"aqua is a single binary written in Go."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the binary ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")),(0,i.kt)("li",{parentName:"ol"},"add ",(0,i.kt)("inlineCode",{parentName:"li"},"${AQUA_ROOT_DIR}/bin")," to the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH"))),(0,i.kt)("h2",{id:"homebrew"},"Homebrew"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ brew install aquaproj/aqua/aqua\n$ export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"\n')),(0,i.kt)("h2",{id:"install-script"},"Install script"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer"))),(0,i.kt)("h2",{id:"circleci-orb"},"CircleCI Orb"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/aquaproj/aqua"},"https://circleci.com/developer/orbs/orb/aquaproj/aqua")),(0,i.kt)("h2",{id:"download-from-github-releases"},"Download from GitHub Releases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases"},"https://github.com/aquaproj/aqua/releases")))}d.isMDXComponent=!0}}]);