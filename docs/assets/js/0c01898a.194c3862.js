"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4783],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1506:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=t(3117),o=t(102),r=(t(7294),t(3905)),s=["components"],i={sidebar_position:50},u="Common Pros and Cons",l={unversionedId:"comparison/common",id:"comparison/common",title:"Common Pros and Cons",description:"Pros",source:"@site/docs/comparison/common.md",sourceDirName:"comparison",slug:"/comparison/common",permalink:"/docs/comparison/common",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/comparison/common.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Comparison",permalink:"/docs/comparison/"},next:{title:"Manual download and install tools",permalink:"/docs/comparison/manual"}},p={},c=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"aqua doesn&#39;t support running any external commands to install tools",id:"aqua-doesnt-support-running-any-external-commands-to-install-tools",level:3},{value:"aqua doesn&#39;t support some language runtime such as Python, Ruby, Node.js, and so on",id:"aqua-doesnt-support-some-language-runtime-such-as-python-ruby-nodejs-and-so-on",level:3},{value:"aqua doesn&#39;t install dependencies",id:"aqua-doesnt-install-dependencies",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-pros-and-cons"},"Common Pros and Cons"),(0,r.kt)("h2",{id:"pros"},"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aqua supports changing tool versions per project"),(0,r.kt)("li",{parentName:"ul"},"aqua forces to pin tool version, which solves the problem due to the different of version"),(0,r.kt)("li",{parentName:"ul"},"It is easy to use aqua",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/declarative-imperative"},"aqua manages tools declaratively"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"aqua's command is always ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua i [-l]"),". You don't have to specify tool names. It's user friendly"))))),(0,r.kt)("li",{parentName:"ul"},"aqua provides Renovate Preset Config"),(0,r.kt)("li",{parentName:"ul"},"aqua provides GitHub Actions and CircleCI Orb"),(0,r.kt)("li",{parentName:"ul"},"aqua supports Lazy Install"),(0,r.kt)("li",{parentName:"ul"},"aqua supports installing tools from the private repositories"),(0,r.kt)("li",{parentName:"ul"},"aqua supports Windows, macOS, and Linux"),(0,r.kt)("li",{parentName:"ul"},"aqua supports ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/checksum"},"Checksum Verification"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"From aqua v1.12.0, aqua supports Windows.\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/windows-support"},"Windows Support")," too.")),(0,r.kt)("h2",{id:"cons"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aqua-doesnt-support-running-any-external-commands-to-install-tools"},"aqua doesn't support running any external commands to install tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aqua-doesnt-support-some-language-runtime-such-as-python-ruby-nodejs-and-so-on"},"aqua doesn't support some Language Runtime such as Python, Ruby, Node.js, and so on")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aqua-doesnt-install-dependencies"},"aqua doesn't install dependencies"))),(0,r.kt)("h3",{id:"aqua-doesnt-support-running-any-external-commands-to-install-tools"},"aqua doesn't support running any external commands to install tools"),(0,r.kt)("p",null,"aqua's install process is very simple."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download tool"),(0,r.kt)("li",{parentName:"ol"},"Unarchive tool in $AQUA_ROOT_DIR")),(0,r.kt)("p",null,"aqua doesn't support running commands after unarchiving.\nSo aqua doesn't support installing tools which some commands are required."),(0,r.kt)("p",null,"This is not necessarily a draw back."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/issues/987#issuecomment-1104422712"},"https://github.com/aquaproj/aqua-registry/issues/987#issuecomment-1104422712")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You may think it's inconvenient, but we think this design is important to keep aqua simple, secure, less dependency, and maintainable."),(0,r.kt)("p",{parentName:"blockquote"},"aqua doesn't need any dependency.\naqua doesn't run external commands.\naqua doesn't change files outside install directory."),(0,r.kt)("p",{parentName:"blockquote"},"So the trouble shooting is relatively easy.\nOtherwise, user support would be very hard.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"aqua supports building Go tools.\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/go-package"},(0,r.kt)("inlineCode",{parentName:"a"},"go")," Package"),", ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/reference/registry-config/go-install-package"},(0,r.kt)("inlineCode",{parentName:"a"},"go_install")," Package"),", and ",(0,r.kt)("a",{parentName:"p",href:"/blog/2022/05/30/support-building-go-tools"},"blog post"),".")),(0,r.kt)("h3",{id:"aqua-doesnt-support-some-language-runtime-such-as-python-ruby-nodejs-and-so-on"},"aqua doesn't support some language runtime such as Python, Ruby, Node.js, and so on"),(0,r.kt)("p",null,"Due to the above restriction, aqua doesn't support some language runtime such as Python, Ruby, Node.js, and so on.\nSo if you want to install them, please use other tools such as pyenv, rbenv, nvm, asdf, and so on."),(0,r.kt)("p",null,"You can use aqua and these tools together."),(0,r.kt)("h3",{id:"aqua-doesnt-install-dependencies"},"aqua doesn't install dependencies"),(0,r.kt)("p",null,"Some package managers such as Homebrew installs dependencies automatically.\nOn the other hand, aqua doesn't manage dependencies."),(0,r.kt)("p",null,"This is not necessarily a draw back.\nYou can install dependent tools freely.\nSometimes this behavior is desirable."))}m.isMDXComponent=!0}}]);