"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:300},o="Lazy Install",l={unversionedId:"tutorial-basics/lazy-install",id:"tutorial-basics/lazy-install",title:"Lazy Install",description:"Let's change the tool version.",source:"@site/docs/tutorial-basics/lazy-install.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/lazy-install",permalink:"/docs/tutorial-basics/lazy-install",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-basics/lazy-install.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Search packages",permalink:"/docs/tutorial-basics/search-packages"},next:{title:"`aqua i`'s `-l` option",permalink:"/docs/tutorial-basics/install-only-link"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lazy-install"},"Lazy Install"),(0,r.kt)("p",null,"Let's change the tool version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'# Change cli/cli version to v2.1.0\n$ sed -i "s|cli/cli@.*|cli/cli@v2.1.0|" aqua.yaml\n\n$ gh version\nINFO[0000] download and unarchive the package            aqua_version=1.19.2 package_name=cli/cli package_version=v2.1.0 program=aqua registry=standard\ngh version 2.1.0 (2021-10-14)\nhttps://github.com/cli/cli/releases/tag/v2.1.0\n')),(0,r.kt)("p",null,"You find that ",(0,r.kt)("inlineCode",{parentName:"p"},"cli/cli@v2.1.0")," is installed automatically.\nYou don't have to run ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i")," explicitly.\nWe call this feature as ",(0,r.kt)("inlineCode",{parentName:"p"},"Lazy Install"),"."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"Lazy Install")," doesn't work if the symbolic link isn't created in ",(0,r.kt)("inlineCode",{parentName:"p"},"${AQUA_ROOT_DIR}/bin")," yet."))}p.isMDXComponent=!0}}]);