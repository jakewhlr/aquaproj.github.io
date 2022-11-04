"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5425],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3885:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:500},u="Uninstall Packages",l={unversionedId:"reference/clean",id:"reference/clean",title:"Uninstall Packages",description:"aqua installs packages in $AQUAROOTDIR}/pkgs and doesn't remove them.",source:"@site/docs/reference/clean.md",sourceDirName:"reference",slug:"/reference/clean",permalink:"/docs/reference/clean",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/clean.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Declarative vs Imperative",permalink:"/docs/reference/declarative-imperative"},next:{title:"How does Lazy Install work?",permalink:"/docs/reference/lazy-install"}},s={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uninstall-packages"},"Uninstall Packages"),(0,o.kt)("p",null,"aqua installs packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR}/pkgs")," and doesn't remove them.\nEven if you change the package version, aqua doesn't remove the old package."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"aqua doesn't have a command to uninstall packages, because we think the feature is unneeded."),"\nTo keep aqua simple, it is important not to implement unneeded features."),(0,o.kt)("p",null,"You don't have to uninstall packages unless the storage is insufficient.\nAnd if the storage is insufficient, you can remove the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"${AQUA_ROOT_DIR}/pkgs"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ rm -R "~/.local/share/aquaproj-aqua/pkgs"\n')),(0,o.kt)("p",null,"aqua reinstalls packages automatically by Lazy Install, so you don't have to reinstall them explicitly."),(0,o.kt)("p",null,"You can also remove the specific package or package version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/akoi\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/akoi/v2.2.0\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke\n")))}m.isMDXComponent=!0}}]);