"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4924],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>h});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),l=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=l(e.components);return t.createElement(u.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),f=r,h=c["".concat(u,".").concat(f)]||c[f]||d[f]||o;return n?t.createElement(h,i(i({ref:a},p),{},{components:n})):t.createElement(h,i({ref:a},p))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5983:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(7462),r=(n(7294),n(3905));const o={sidebar_position:500},i="Use aqua combined with other version manager such as asdf",s={unversionedId:"reference/use-aqua-with-other-tools",id:"reference/use-aqua-with-other-tools",title:"Use aqua combined with other version manager such as asdf",description:"If you use aqua combined with other version manager such as asdf,",source:"@site/docs/reference/use-aqua-with-other-tools.md",sourceDirName:"reference",slug:"/reference/use-aqua-with-other-tools",permalink:"/docs/reference/use-aqua-with-other-tools",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/use-aqua-with-other-tools.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Windows Support",permalink:"/docs/reference/windows-support"},next:{title:"Lazy Install",permalink:"/docs/reference/lazy-install"}},u={},l=[],p={toc:l},c="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-aqua-combined-with-other-version-manager-such-as-asdf"},"Use aqua combined with other version manager such as asdf"),(0,r.kt)("p",null,"If you use aqua combined with other version manager such as asdf,\nyou should add ",(0,r.kt)("inlineCode",{parentName:"p"},"${AQUA_ROOT_DIR}/bin")," to the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," after other version manager."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("p",null,"\ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". $HOME/.asdf/asdf.sh\n\nexport PATH=${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH\n")),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH\n\n. $HOME/.asdf/asdf.sh\n")),(0,r.kt)("p",null,"This isn't a problem of aqua.\naqua is designed to allow to use aqua combined with other version managers, but many other version manager aren't."),(0,r.kt)("p",null,"Please assume the following usecase.\nYou develop the project A and B.\nIn the project A ",(0,r.kt)("a",{parentName:"p",href:"https://www.waypointproject.io/"},"Waypoint")," is managed with asdf, and in the project B Waypoint is managed with aqua."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"project-a/\n  .tool-versions # Manage Waypoint with asdf\nproject-b/\n  aqua.yaml # Manage Waypoint with aqua\n")),(0,r.kt)("p",null,"project-a/.tool-versions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"waypoint v0.6.3\n")),(0,r.kt)("p",null,"project-b/aqua.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: hashicorp/waypoint@v0.6.2\n")),(0,r.kt)("p",null,"If you configure .bash_profile as the following,\nyou can manage Waypoint with asdf in the project A, but you can't manage Waypoint with aqua in the project B."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH\n\n. $HOME/.asdf/asdf.sh\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ cd project-b\n$ waypoint --version\nNo version is set for command waypoint\nConsider adding one of the following versions in your config file at \nwaypoint 0.6.3\n")),(0,r.kt)("p",null,"This is because asdf is used in the project-b too."),(0,r.kt)("p",null,"On the other hand, if you configure .bash_profile as the following,\nyou can manage Waypoint with asdf in the project A, and manage Waypoint with aqua in the project B."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". $HOME/.asdf/asdf.sh\n\nexport PATH=${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ cd project-a\n$ waypoint --version\nCLI: v0.6.3 (bd303e12)\n\n$ cd ../project-b\n$ waypoint --version\nCLI: v0.6.2 (99350730)\n")),(0,r.kt)("p",null,"This is because if aqua can't find the command in the configuration files aqua finds the command from the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),"."))}d.isMDXComponent=!0}}]);