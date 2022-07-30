"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[1372],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6777:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),l=["components"],i={sidebar_position:100},s="Overview",u={unversionedId:"overview",id:"overview",title:"Overview",description:"aqua is a declarative CLI Version Manager written in Go.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/overview.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/tutorial-basics/quick-start"}},c={},p=[{value:"Usecase",id:"usecase",level:2},{value:"Install tools for the repository",id:"install-tools-for-the-repository",level:3},{value:"Install tools for your organization and team",id:"install-tools-for-your-organization-and-team",level:3},{value:"Install tools for your laptops (like dotfiles)",id:"install-tools-for-your-laptops-like-dotfiles",level:3},{value:"SNS",id:"sns",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"aqua is a declarative CLI Version Manager written in Go.\nYou can install CLI tools and manage their versions with YAML declaratively."),(0,r.kt)("p",null,"The short demo would be useful to understand aqua."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://asciinema.org/a/498262?autoplay=1"},(0,r.kt)("img",{parentName:"a",src:"https://asciinema.org/a/498262.svg",alt:"asciicast"}))),(0,r.kt)("p",null,"You write a configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," and execute the command ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i"),", then tools are installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v3.10.0 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: cli/cli@v2.2.0\n- name: junegunn/fzf@0.28.0\n")),(0,r.kt)("p",null,"Unlike Package Manager such as Homebrew, aqua supports changing tool version per project, so aqua is useful to manage tools for your project.\naqua installs a tool automatically when the tool is invoked.\naqua solves the problem due to the difference of tool version by forcing to pin tool version.\naqua supports continuous update with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/"},"Renovate"),".\naqua provides ",(0,r.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/config-presets/"},"Renovate Preset Config"),", so you can update tools very easily."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-renovate-config"},"https://github.com/aquaproj/aqua-renovate-config")),(0,r.kt)("p",null,"aqua provides GitHub Actions, CircleCI Orb, and shell script to install aqua easily.\naqua provides the unified way to install tools both in local development and CI."),(0,r.kt)("p",null,"aqua provides the Standard Registry. You can install tools which are registered at the Registry easily, and you can search packages in Registries interactively with ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua g")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"  newrelic/newrelic-cli (standard) (newrelic)                   \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n  pivotal-cf/pivnet-cli (standard) (pivnet)                     \u2502  cli/cli\n  scaleway/scaleway-cli (standard) (scw)                        \u2502\n  tfmigrator/cli (standard) (tfmigrator)                        \u2502  https://cli.github.com/\n  aws/copilot-cli (standard) (copilot)                          \u2502  GitHub\u2019cs official command line tool\n  codeclimate/test-reporter (standard)                          \u2502\n  create-go-app/cli (standard) (cgapp)                          \u2502\n  harness/drone-cli (standard) (drone)                          \u2502\n  sigstore/rekor (standard) (rekor-cli)                         \u2502\n  getsentry/sentry-cli (standard)                               \u2502\n  grafana/loki/logcli (standard)                                \u2502\n  knative/client (standard) (kn)                                \u2502\n  rancher/cli (standard) (rancher)                              \u2502\n  tektoncd/cli (standard) (tkn)                                 \u2502\n  civo/cli (standard) (civo)                                    \u2502\n  dapr/cli (standard) (dapr)                                    \u2502\n  mongodb/mongocli (standard)                                   \u2502\n  openfaas/faas-cli (standard)                                  \u2502\n> cli/cli (standard) (gh)                                       \u2502\n  50/399                                                        \u2502\n> cli                                                           \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500\n")),(0,r.kt)("p",null,"If you can't find the tool, you can send a pull request."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"https://github.com/aquaproj/aqua-registry")),(0,r.kt)("h2",{id:"usecase"},"Usecase"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install tools for the repository (CI and local development)"),(0,r.kt)("li",{parentName:"ol"},"Install tools for your organization and team"),(0,r.kt)("li",{parentName:"ol"},"Install tools for your laptops (like dotfiles)")),(0,r.kt)("h3",{id:"install-tools-for-the-repository"},"Install tools for the repository"),(0,r.kt)("p",null,"With aqua, you can install tools for the repository.\nAdd ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," to the repository, then you can install tools by ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i"),"."),(0,r.kt)("h3",{id:"install-tools-for-your-organization-and-team"},"Install tools for your organization and team"),(0,r.kt)("p",null,"With aqua, you can install tools for your organization and team.\nLet's create a repository and add aqua configuration files to the repository."),(0,r.kt)("p",null,"For detail, please see ",(0,r.kt)("a",{parentName:"p",href:"tutorial-extras/team-config"},"Share aqua configuration for teams and organizations"),"."),(0,r.kt)("h3",{id:"install-tools-for-your-laptops-like-dotfiles"},"Install tools for your laptops (like dotfiles)"),(0,r.kt)("p",null,"With aqua, you can manage tools as code like ",(0,r.kt)("inlineCode",{parentName:"p"},"dotfiles"),".\nYou can set up your laptop quickly and install same version of tools in multiple laptops."),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/global-config"},"Install tools globally"),"."),(0,r.kt)("h2",{id:"sns"},"SNS"),(0,r.kt)("p",null,"We share news about aqua using a Twitter Account ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/aquaclivm"},"@aquaclivm"),'.\nWe check tweets about aqua, but it is difficult to search tweets about aqua with the keyword "aqua" because aqua is a very common word.\nSo when you tweet about aqua, please mention @aquaclivm or use the hash tag ',(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/hashtag/aquaclivm"},"#aquaclivm"),"."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/suzukishunsuke/why-i-use-aqua-230"},"Why I use aqua")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/comparison"},"Comparison")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorial-basics/quick-start"},"Quick Start")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorial-extras/introduce-aqua"},"Introduce aqua to your repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorial-basics/global-config"},"Install tools globally"))))}m.isMDXComponent=!0}}]);