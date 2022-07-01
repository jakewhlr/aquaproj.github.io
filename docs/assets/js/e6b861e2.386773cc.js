"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3695],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4261:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:1900},s="supported_if",u={unversionedId:"reference/registry-config/supported-if",id:"reference/registry-config/supported-if",title:"supported_if",description:"From aqua v1.12.0 or later, we strongly recommend supportedenvs instead of supportedif.",source:"@site/docs/reference/registry-config/supported-if.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/supported-if",permalink:"/docs/reference/registry-config/supported-if",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/supported-if.md",tags:[],version:"current",sidebarPosition:1900,frontMatter:{sidebar_position:1900},sidebar:"tutorialSidebar",previous:{title:"version_constraint`, `version_overrides",permalink:"/docs/reference/registry-config/version-overrides"},next:{title:"supported_envs",permalink:"/docs/reference/registry-config/supported-envs"}},c={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported_if"},"supported_if"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"From aqua v1.12.0 or later, we strongly recommend ",(0,o.kt)("a",{parentName:"p",href:"supported-envs"},"supported_envs")," instead of supported_if.\nsupported_envs is simpler than supported_if, and better in terms of the performance."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/438"},"#438")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/439"},"#439")),(0,o.kt)("p",null,"Some packages are available on only the specific environment.\nFor example, some packages are available on only Linux, or don't support Linux ARM64."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"supported_if")," is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"expr"),"'s expression.\nThe evaluation result must be a boolean."),(0,o.kt)("p",null,"If the evaluation result is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", aqua skips installing the package and outputs the debug log.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"supported_if")," isn't set, the package is always installed."),(0,o.kt)("p",null,"The following values and functions are accessible in the expression."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GOOS"),": (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GOARCH"),": (type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),") Go's ",(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/runtime#pkg-constants"},"runtime.GOARCH"))),(0,o.kt)("p",null,"For example, if the following configuration indicates the package doesn't support macOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'supported_if: GOOS != "darwin"\n')))}d.isMDXComponent=!0}}]);