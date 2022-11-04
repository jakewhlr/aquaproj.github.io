"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7578],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(f,u(u({ref:t},l),{},{components:a})):n.createElement(f,u({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,u=new Array(o);u[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,u[1]=s;for(var p=2;p<o;p++)u[p]=a[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5004:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),u=["components"],s={sidebar_position:50},i="Update packages by Renovate",p={unversionedId:"tutorial-extras/renovate",id:"tutorial-extras/renovate",title:"Update packages by Renovate",description:"image",source:"@site/docs/tutorial-extras/renovate.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/renovate",permalink:"/docs/tutorial-extras/renovate",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/renovate.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Introduce aqua to your repository",permalink:"/docs/tutorial-extras/introduce-aqua"},next:{title:"Update aqua by `aqua update-aqua` command",permalink:"/docs/tutorial-extras/update-aqua"}},l={},c=[{value:"\ud83d\udca1 Prevent some packages from being updated by Renovate",id:"-prevent-some-packages-from-being-updated-by-renovate",level:2},{value:"1. Renovate&#39;s enabled option",id:"1-renovates-enabled-option",level:3},{value:"2. Use the long syntax instead of the short syntax",id:"2-use-the-long-syntax-instead-of-the-short-syntax",level:3}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"update-packages-by-renovate"},"Update packages by Renovate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "github>aquaproj/aqua-renovate-config#1.1.0"\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/176582627-44f27c48-213b-44da-b18f-d4d482ef2f56.png",alt:"image"})),(0,o.kt)("p",null,"aqua manages package and registry versions,\nso it is important to update them continuously.\naqua doesn't provide sub commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua update")," or options like ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua install --update"),".\nWe recommend to manage ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," with Git and update versions by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/"},"Renovate")," or something."),(0,o.kt)("p",null,"Using Renovate's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/modules/manager/regex/"},"Regex Manager"),", you can update versions."),(0,o.kt)("p",null,"We provide the Renovate Preset Configuration ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-renovate-config"},"aqua-renovate-config"),". For the detail, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-renovate-config"},"README"),"."),(0,o.kt)("p",null,"Example pull requests by Renovate."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/pull/193"},"chore(deps): update dependency golangci/golangci-lint to v1.42.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/pull/194"},"chore(deps): update dependency aquaproj/aqua-registry to v0.2.2"))),(0,o.kt)("h2",{id:"-prevent-some-packages-from-being-updated-by-renovate"},"\ud83d\udca1 Prevent some packages from being updated by Renovate"),(0,o.kt)("p",null,"There are two ways to prevent some packages from being updated by Renovate."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/configuration-options/#enabled"},"Renovate's enabled option")),(0,o.kt)("li",{parentName:"ol"},"Use the long syntax instead of the short syntax")),(0,o.kt)("h3",{id:"1-renovates-enabled-option"},"1. Renovate's enabled option"),(0,o.kt)("p",null,"e.g. renovate.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "packageRules": [\n    {\n      "matchPackageNames": ["kubernetes/kubectl"],\n      "enabled": false\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"2-use-the-long-syntax-instead-of-the-short-syntax"},"2. Use the long syntax instead of the short syntax"),(0,o.kt)("p",null,"e.g. aqua.yaml"),(0,o.kt)("p",null,"\ud83d\udc4d Renovate wouldn't update ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes/kubectl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: kubernetes/kubectl\n  version: v1.25.0\n")),(0,o.kt)("p",null,"\ud83d\udc4e Renovate would update ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes/kubectl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"suzuki-shunsuke/tfcmt"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: kubernetes/kubectl@v1.25.0\n- name: suzuki-shunsuke/tfcmt\n  version: v2.0.0 # renovate: depName=suzuki-shunsuke/tfcmt\n")))}m.isMDXComponent=!0}}]);