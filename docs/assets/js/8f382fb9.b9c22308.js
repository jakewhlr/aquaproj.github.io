"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8828],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,m=c["".concat(s,".").concat(g)]||c[g]||f[g]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:200},i="Split the list of packages",l={unversionedId:"tutorial-extras/split-config",id:"tutorial-extras/split-config",title:"Split the list of packages",description:"You can split the list of packages.",source:"@site/docs/tutorial-extras/split-config.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/split-config",permalink:"/docs/tutorial-extras/split-config",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/split-config.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Share aqua configuration for teams and organizations",permalink:"/docs/tutorial-extras/team-config"},next:{title:"Add Packages to Registry",permalink:"/docs/tutorial-extras/add-registry"}},s={},p=[{value:"\ud83d\udca1 Renovate Config Preset",id:"-renovate-config-preset",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"split-the-list-of-packages"},"Split the list of packages"),(0,r.kt)("p",null,"You can split the list of packages."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("p",null,"Directory structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aqua.yaml\naqua/\n  conftest.yaml\n")),(0,r.kt)("p",null,"aqua.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- import: aqua/*.yaml\n")),(0,r.kt)("p",null,"aqua/conftest.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: open-policy-agent/conftest@v0.28.2\n")),(0,r.kt)("p",null,"This is useful for CI.\nYou can execute test and lint only when the specific package is updated."),(0,r.kt)("p",null,"e.g. GitHub Actions' ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths"},(0,r.kt)("inlineCode",{parentName:"a"},"on.<push|pull_request>.paths"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: conftest\non:\n  pull_request:\n    paths:\n    - policy/**.rego\n    - aqua/conftest.yaml\n")),(0,r.kt)("h2",{id:"-renovate-config-preset"},"\ud83d\udca1 Renovate Config Preset"),(0,r.kt)("p",null,"To update split files by Renovate, please use the preset ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-renovate-config#file-preset"},"aquaproj/aqua-renovate-config:file")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "github>aquaproj/aqua-renovate-config:file#1.5.0(aqua/conftest\\\\.yaml)"\n  ]\n}\n')),(0,r.kt)("p",null,"You can also use the regular expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "github>aquaproj/aqua-renovate-config:file#1.5.0(aqua/.*\\\\.ya?ml)"\n  ]\n}\n')))}c.isMDXComponent=!0}}]);