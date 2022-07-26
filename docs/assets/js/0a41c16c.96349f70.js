"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1483],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7368:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:100},u="Install",s={unversionedId:"reference/install",id:"reference/install",title:"Install",description:"aqua is a single binary written in Go.",source:"@site/docs/reference/install.md",sourceDirName:"reference",slug:"/reference/install",permalink:"/docs/reference/install",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/install.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Install Standard Registry's all packages very quickly",permalink:"/docs/tutorial-extras/install-all-packages"},next:{title:"Registry",permalink:"/docs/reference/registry"}},c={},p=[{value:"Windows",id:"windows",level:2},{value:"Homebrew",id:"homebrew",level:2},{value:"Install script",id:"install-script",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"CircleCI Orb",id:"circleci-orb",level:2},{value:"Download from GitHub Releases",id:"download-from-github-releases",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install"},"Install"),(0,i.kt)("p",null,"aqua is a single binary written in Go."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the binary ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")),(0,i.kt)("li",{parentName:"ol"},"add ",(0,i.kt)("inlineCode",{parentName:"li"},"${AQUA_ROOT_DIR}/bin")," to the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH"))),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Pleaase see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/windows-support#how-to-install"},"here"),"."),(0,i.kt)("h2",{id:"homebrew"},"Homebrew"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ brew install aquaproj/aqua/aqua\n$ export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"\n')),(0,i.kt)("h2",{id:"install-script"},"Install script"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer"))),(0,i.kt)("h2",{id:"circleci-orb"},"CircleCI Orb"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/aquaproj/aqua"},"https://circleci.com/developer/orbs/orb/aquaproj/aqua")),(0,i.kt)("h2",{id:"download-from-github-releases"},"Download from GitHub Releases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases"},"https://github.com/aquaproj/aqua/releases")))}f.isMDXComponent=!0}}]);