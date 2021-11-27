"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[250],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return g}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),c=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(a),g=r,d=f["".concat(u,".").concat(g)]||f[g]||p[g]||l;return a?t.createElement(d,o(o({ref:n},s),{},{components:a})):t.createElement(d,o({ref:n},s))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6490:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:400},u="Usage",c={unversionedId:"reference/usage",id:"reference/usage",isDocsHomePage:!1,title:"Usage",description:"aqua install",source:"@site/docs/reference/usage.md",sourceDirName:"reference",slug:"/reference/usage",permalink:"/docs/reference/usage",editUrl:"https://github.com/aquaproj/aquaproj.github.io/docs/reference/usage.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Configuration (registry.yaml)",permalink:"/docs/reference/registry-config"},next:{title:"Clean unused packages",permalink:"/docs/reference/clean"}},s=[{value:"aqua install",id:"aqua-install",children:[],level:2},{value:"aqua exec",id:"aqua-exec",children:[],level:2},{value:"aqua list",id:"aqua-list",children:[],level:2},{value:"aqua which",id:"aqua-which",children:[],level:2},{value:"aqua generate",id:"aqua-generate",children:[],level:2}],p={toc:s};function f(e){var n=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help\nNAME:\n   aqua - Version Manager of CLI. https://github.com/aquaproj/aqua\n\nUSAGE:\n   aqua [global options] command [command options] [arguments...]\n\nVERSION:\n   0.8.0 (b6df16abbaae88a11837dd7304a6bdfbddfe37b6)\n\nCOMMANDS:\n   install, i   Install tools\n   exec         Execute tool\n   list         List packages in Registries\n   which        Output the file path of the given command\n   generate, g  Search packages in registries and output the configuration interactively\n   version      Show version\n   help, h      Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --log-level value         log level [$AQUA_LOG_LEVEL]\n   --config value, -c value  configuration file path [$AQUA_CONFIG]\n   --help, -h                show help (default: false)\n   --version, -v             print the version (default: false)\n")),(0,l.kt)("h2",{id:"aqua-install"},"aqua install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help install\nNAME:\n   aqua install - Install tools\n\nUSAGE:\n   aqua install [command options] [arguments...]\n\nOPTIONS:\n   --only-link, -l  create links but skip download packages (default: false)\n   --test           test file.src after installing the package (default: false)\n   --all, -a        install all aqua configuration packages (default: false)\n   \n")),(0,l.kt)("h2",{id:"aqua-exec"},"aqua exec"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help exec\nNAME:\n   aqua exec - Execute tool\n\nUSAGE:\n   aqua exec [arguments...]\n")),(0,l.kt)("h2",{id:"aqua-list"},"aqua list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help list\nNAME:\n   aqua list - List packages in Registries\n\nUSAGE:\n   aqua list [arguments...]\n")),(0,l.kt)("h2",{id:"aqua-which"},"aqua which"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help which\nNAME:\n   aqua which - Output the file path of the given command\n\nUSAGE:\n   aqua which [arguments...]\n")),(0,l.kt)("h2",{id:"aqua-generate"},"aqua generate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help generate\nNAME:\n   aqua generate - Search packages in registries and output the configuration interactively\n\nUSAGE:\n   aqua generate [command options] [arguments...]\n\nOPTIONS:\n   -f value  the file path of packages list.\n   \n")))}f.isMDXComponent=!0}}]);