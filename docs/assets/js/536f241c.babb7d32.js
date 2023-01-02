"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1908],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9791:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1600},o="overrides",l={unversionedId:"reference/registry-config/overrides",id:"reference/registry-config/overrides",title:"overrides",description:"aqua >= v1.3.0",source:"@site/docs/reference/registry-config/overrides.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/overrides",permalink:"/docs/reference/registry-config/overrides",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/overrides.md",tags:[],version:"current",sidebarPosition:1600,frontMatter:{sidebar_position:1600},sidebar:"tutorialSidebar",previous:{title:"format_overrides",permalink:"/docs/reference/registry-config/format-overrides"},next:{title:"Template String",permalink:"/docs/reference/registry-config/template"}},s={},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overrides"},(0,a.kt)("inlineCode",{parentName:"h1"},"overrides")),(0,a.kt)("p",null,"aqua >= v1.3.0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/607"},"#607")),(0,a.kt)("p",null,"You can override the following attributes on the specific ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GOARCH"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"replacements"),(0,a.kt)("li",{parentName:"ul"},"format"),(0,a.kt)("li",{parentName:"ul"},"asset"),(0,a.kt)("li",{parentName:"ul"},"url"),(0,a.kt)("li",{parentName:"ul"},"files"),(0,a.kt)("li",{parentName:"ul"},"checksum"),(0,a.kt)("li",{parentName:"ul"},"complete_windows_ext"),(0,a.kt)("li",{parentName:"ul"},"windows_ext"),(0,a.kt)("li",{parentName:"ul"},"type")),(0,a.kt)("p",null,"e.g. On Linux ARM64, ",(0,a.kt)("inlineCode",{parentName:"p"},"Arch")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"aarch64"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  overrides:\n  - goos: linux\n    replacements:\n      arm64: aarch64\n")),(0,a.kt)("p",null,"In case of ",(0,a.kt)("inlineCode",{parentName:"p"},"replacements"),", maps are merged."),(0,a.kt)("p",null,"Either ",(0,a.kt)("inlineCode",{parentName:"p"},"goos")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"goarch")," is required."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  asset: arkade\n  overrides:\n  - goos: linux\n    goarch: arm64\n    asset: 'arkade-{{.Arch}}'\n  - goos: darwin\n    goarch: amd64\n    asset: 'arkade-darwin'\n  - goos: darwin \n    asset: 'arkade-darwin-{{.Arch}}'\n")),(0,a.kt)("p",null,"Even if multiple elements are matched, only first element is applied.\nFor example, Darwin AMD64 matches with second element but the second element isn't applied beause the first element is matched."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - goos: darwin\n    goarch: amd64\n    asset: 'arkade-darwin'\n  - goos: darwin \n    asset: 'arkade-darwin-{{.Arch}}'\n")))}u.isMDXComponent=!0}}]);