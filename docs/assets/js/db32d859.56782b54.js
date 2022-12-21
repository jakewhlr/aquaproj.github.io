"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6653],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(f,u(u({ref:t},p),{},{components:r})):a.createElement(f,u({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,u=new Array(i);u[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var s=2;s<i;s++)u[s]=r[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7215:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),u=["components"],l={sidebar_position:550},o="Security",s={unversionedId:"security",id:"security",title:"Security",description:"This page includes undecided plan.",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/docs/security",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/security.md",tags:[],version:"current",sidebarPosition:550,frontMatter:{sidebar_position:550},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/docs/demo"},next:{title:"Slide and Blog",permalink:"/docs/slide-blog"}},p={},c=[{value:"List of Issues and Pull Requests",id:"list-of-issues-and-pull-requests",level:2},{value:"Features",id:"features",level:2},{value:"Plans",id:"plans",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security"},"Security"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This page includes undecided plan.")),(0,i.kt)("p",null,"We think security is very important and are working on improving the security of aqua.\nYou should be able to install and execute tools securely by aqua.\nIn this page, we describe aqua's security perspective and our plan."),(0,i.kt)("h2",{id:"list-of-issues-and-pull-requests"},"List of Issues and Pull Requests"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/search?q=org%3Aaquaproj+label%3Asecurity"},"https://github.com/search?q=org%3Aaquaproj+label%3Asecurity")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Design",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"aqua doesn't execute external commands except for ",(0,i.kt)("inlineCode",{parentName:"li"},"go install")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"go build")," to install packages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This prevents malicious commands from being executed"))),(0,i.kt)("li",{parentName:"ul"},"Centrally managed Registry is provided",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Compared with third party registries, it has low risk to be tampered"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/checksum/"},"Checksum Verification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorial-extras/policy-as-code/"},"Policy as Code"))),(0,i.kt)("h2",{id:"plans"},"Plans"),(0,i.kt)("p",null,"We are woring on preventing tampering by keyless signing with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.sigstore.dev/cosign/overview"},"Cosign"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prevent aqua.yaml from being tampered",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/1404"},"Disable Registries other than standard Registry by default (Secure by default)")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/pull/1413"},"#1413")))),(0,i.kt)("li",{parentName:"ul"},"Prevent aqua from being tampered",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/1391"},"Sign aqua with Cosign")),(0,i.kt)("li",{parentName:"ul"},"Prevent aqua-installer from being tampered",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-installer/issues/256"},"Sign aqua-installer with Cosign")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-installer/issues/276"},"Verify aqua in aqua-installer")))),(0,i.kt)("li",{parentName:"ul"},"Prevent packages from being tampered",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/pull/1393"},"Support verifying packages with Cosign")))),(0,i.kt)("li",{parentName:"ul"},"Prevent Registries from being tampered",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/issues/8296"},"Sign aqua-registry with Cosign")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/1379"},"Verify Registry with Cosign"))))))}d.isMDXComponent=!0}}]);