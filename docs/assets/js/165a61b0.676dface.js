"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3946],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2140:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:500},i="Use different version per project",s={unversionedId:"tutorial-basics/change-version-per-project",id:"tutorial-basics/change-version-per-project",title:"Use different version per project",description:"aqua supports changing the tool versions per project.",source:"@site/docs/tutorial-basics/change-version-per-project.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/change-version-per-project",permalink:"/docs/tutorial-basics/change-version-per-project",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-basics/change-version-per-project.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"`aqua i`'s `-l` option",permalink:"/docs/tutorial-basics/install-only-link"},next:{title:"Configuration file path",permalink:"/docs/tutorial-basics/config-path"}},c={},p=[],l={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-different-version-per-project"},"Use different version per project"),(0,a.kt)("p",null,"aqua supports changing the tool versions per project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ mkdir foo bar\n$ vi foo/aqua.yaml\n$ vi bar/aqua.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# foo/aqua.yaml\nregistries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.1.0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# bar/aqua.yaml\nregistries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.0.0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ cd foo\n$ gh version # In foo, the version is v2.1.0.\ngh version 2.1.0 (2021-10-14)\nhttps://github.com/cli/cli/releases/tag/v2.1.0\n\n$ cd ../bar\n$ gh version # In foo, the version is v2.0.0.\nINFO[0000] download and unarchive the package            aqua_version=1.19.2 package_name=cli/cli package_version=v2.0.0 program=aqua registry=standard\ngh version 2.0.0 (2021-08-24)\nhttps://github.com/cli/cli/releases/tag/v2.0.0\n")),(0,a.kt)("p",null,"The version of ",(0,a.kt)("inlineCode",{parentName:"p"},"gh")," is changed seamlessly."),(0,a.kt)("p",null,"You can install multiple versions in the same laptop and switch the version by project."))}u.isMDXComponent=!0}}]);