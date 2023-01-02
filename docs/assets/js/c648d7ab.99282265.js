"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[9915],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(t),g=a,m=l["".concat(s,".").concat(g)]||l[g]||f[g]||i;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},319:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2200},o="private",p={unversionedId:"reference/registry-config/private",id:"reference/registry-config/private",title:"private",description:"aqua >= v1.27.0",source:"@site/docs/reference/registry-config/private.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/private",permalink:"/docs/reference/registry-config/private",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/private.md",tags:[],version:"current",sidebarPosition:2200,frontMatter:{sidebar_position:2200},sidebar:"tutorialSidebar",previous:{title:"slsa_provenance",permalink:"/docs/reference/registry-config/slsa-provenance"},next:{title:"Usage",permalink:"/docs/reference/usage"}},s={},c=[],u={toc:c};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"private"},"private"),(0,a.kt)("p",null,"aqua >= ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.27.0"},"v1.27.0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1466"},"#1466")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1468"},"#1468")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1486"},"#1486")),(0,a.kt)("p",null,"You can set ",(0,a.kt)("inlineCode",{parentName:"p"},"private: true")," to private packages and registries.\nBy default, ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," is true, aqua skips sending HTTP requests to download assets, because the requests always fail.\nEven if the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," attribute is wrong, you can install the registry and package."),(0,a.kt)("p",null,"e.g. aqua.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: foo\n  type: github_content\n  repo_owner: aquaproj\n  repo_name: private-repository\n  ref: v3.90.0\n  private: true # Private Registry\n  path: registry.yaml\n")),(0,a.kt)("p",null,"e.g. registry.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n# init: a\n- type: github_release\n  repo_owner: aquaproj\n  repo_name: private-repository\n  asset: 'foo_{{trimV .Version}}_{{title .OS}}_{{.Arch}}.tar.gz'\n  private: true # Private Package\n")))}l.isMDXComponent=!0}}]);