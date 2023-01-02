"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:100},l="Install",o={unversionedId:"reference/install",id:"reference/install",title:"Install",description:"aqua is a single binary written in Go.",source:"@site/docs/reference/install.md",sourceDirName:"reference",slug:"/reference/install",permalink:"/docs/reference/install",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/install.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Build Container (Docker) Image",permalink:"/docs/tutorial-extras/build-container-image"},next:{title:"Registry",permalink:"/docs/reference/registry"}},s={},c=[{value:"Windows",id:"windows",level:2},{value:"Homebrew",id:"homebrew",level:2},{value:"Install script",id:"install-script",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"CircleCI Orb",id:"circleci-orb",level:2},{value:"Download from GitHub Releases",id:"download-from-github-releases",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"install"},"Install"),(0,n.kt)("p",null,"aqua is a single binary written in Go."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the binary ",(0,n.kt)("inlineCode",{parentName:"li"},"aqua")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"PATH")),(0,n.kt)("li",{parentName:"ol"},"add ",(0,n.kt)("inlineCode",{parentName:"li"},"${AQUA_ROOT_DIR}/bin")," to the environment variable ",(0,n.kt)("inlineCode",{parentName:"li"},"PATH"))),(0,n.kt)("h2",{id:"windows"},"Windows"),(0,n.kt)("p",null,"Pleaase see ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/windows-support#how-to-install"},"here"),"."),(0,n.kt)("h2",{id:"homebrew"},"Homebrew"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'$ brew install aquaproj/aqua/aqua\n$ export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"\n')),(0,n.kt)("h2",{id:"install-script"},"Install script"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer")),(0,n.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-installer"},"aqua-installer"))),(0,n.kt)("h2",{id:"circleci-orb"},"CircleCI Orb"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://circleci.com/developer/orbs/orb/aquaproj/aqua"},"https://circleci.com/developer/orbs/orb/aquaproj/aqua")),(0,n.kt)("h2",{id:"download-from-github-releases"},"Download from GitHub Releases"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases"},"https://github.com/aquaproj/aqua/releases")))}p.isMDXComponent=!0}}]);