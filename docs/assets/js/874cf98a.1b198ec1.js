"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5447],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||c;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5770:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const c={sidebar_position:200},i="Search packages",o={unversionedId:"tutorial-basics/search-packages",id:"tutorial-basics/search-packages",title:"Search packages",description:"You can search packages by aqua g command.",source:"@site/docs/tutorial-basics/search-packages.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/search-packages",permalink:"/docs/tutorial-basics/search-packages",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-basics/search-packages.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/tutorial-basics/quick-start"},next:{title:"Lazy Install",permalink:"/docs/tutorial-basics/lazy-install"}},l={},s=[],p={toc:s};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"search-packages"},"Search packages"),(0,r.kt)("p",null,"You can search packages by ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/usage#aqua-generate"},"aqua g")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g\n")),(0,r.kt)("p",null,"Then an interactive fuzzy zinder is launched (Powered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ktr0731/go-fuzzyfinder"},"ktr0731/go-fuzzyfinder"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"  influxdata/influx-cli (standard) (influx)                     \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n  newrelic/newrelic-cli (standard) (newrelic)                   \u2502  cli/cli\n  pivotal-cf/pivnet-cli (standard) (pivnet)                     \u2502\n  scaleway/scaleway-cli (standard) (scw)                        \u2502  https://github.com/cli/cli\n  tfmigrator/cli (standard) (tfmigrator)                        \u2502  GitHub\u2019cs official command line tool\n  aws/copilot-cli (standard) (copilot)                          \u2502\n  create-go-app/cli (standard) (cgapp)                          \u2502\n  harness/drone-cli (standard) (drone)                          \u2502\n  sigstore/rekor (standard) (rekor-cli)                         \u2502\n  getsentry/sentry-cli (standard)                               \u2502\n  grafana/loki/logcli (standard)                                \u2502\n  knative/client (standard) (kn)                                \u2502\n  rancher/cli (standard) (rancher)                              \u2502\n  tektoncd/cli (standard) (tkn)                                 \u2502\n  civo/cli (standard) (civo)                                    \u2502\n  dapr/cli (standard) (dapr)                                    \u2502\n  mongodb/mongocli (standard)                                   \u2502\n  openfaas/faas-cli (standard)                                  \u2502\n> cli/cli (standard) (gh)                                       \u2502\n  50/433                                                        \u2502\n> cli                                                           \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n")),(0,r.kt)("p",null,"Please select ",(0,r.kt)("inlineCode",{parentName:"p"},"tfmigrator/cli"),", then the package configuration is outputted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g\n- name: tfmigrator/cli@v0.2.1\n")),(0,r.kt)("p",null,"You can select multiple packages by tab key."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," option is set, then the package is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n- name: tfmigrator/cli@v0.2.1 # Added\n")))}u.isMDXComponent=!0}}]);