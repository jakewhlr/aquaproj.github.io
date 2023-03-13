"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,d=m["".concat(o,".").concat(p)]||m[p]||h[p]||c;return a?n.createElement(d,i(i({ref:t},l),{},{components:a})):n.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<c;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const c={sidebar_position:50},i="Checksum Verification",s={unversionedId:"reference/security/checksum",id:"reference/security/checksum",title:"Checksum Verification",description:"aqua >= v1.20.0",source:"@site/docs/reference/security/checksum.md",sourceDirName:"reference/security",slug:"/reference/security/checksum",permalink:"/docs/reference/security/checksum",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/security/checksum.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/reference/security/"},next:{title:"Policy as Code",permalink:"/docs/reference/security/policy-as-code"}},o={},u=[{value:"See also",id:"see-also",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"aqua-registry version",id:"aqua-registry-version",level:2},{value:"Remove unused checksums with <code>-prune</code> option",id:"remove-unused-checksums-with--prune-option",level:2},{value:"Verify checksums of Registries",id:"verify-checksums-of-registries",level:2},{value:"Generate and patch checksum configuration automatically",id:"generate-and-patch-checksum-configuration-automatically",level:2},{value:"Question: Should <code>aqua-checksums.json</code> be managed with Git?",id:"question-should-aqua-checksumsjson-be-managed-with-git",level:2}],l={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"checksum-verification"},"Checksum Verification"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"aqua >= v1.20.0")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/427"},"#427")),(0,r.kt)("p",null,"Checksum Verification is a feature verifying downloaded assets with checksum.\nChecksum Verification prevents the supply chain attack and allows you to install tools securely."),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/checksum"},"Tutorial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/config/checksum"},"Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/checksum"},"Registry Configuration")),(0,r.kt)("li",{parentName:"ul"},"Blogs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/suzukishunsuke/checksum-verification-by-aqua-5038"},"2022-11-08 Checksum Verification by aqua")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/aqua-checksum-verification"},"2022-10-10 aqua CLI Version Manager \u304c checksum \u306e\u691c\u8a3c\u3092\u30b5\u30dd\u30fc\u30c8"))))),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"When a tool is installed, aqua verifies the checksum as the following."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the tool in the temporal directory"),(0,r.kt)("li",{parentName:"ol"},"Calculate the checksum from the downloaded file"),(0,r.kt)("li",{parentName:"ol"},"Get the expected checksum"),(0,r.kt)("li",{parentName:"ol"},"If the actual checksum is different from the expected checksum, make the installation failure"),(0,r.kt)("li",{parentName:"ol"},"If the checksum isn't found in ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json"),", the expected checksum is added to ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json")),(0,r.kt)("li",{parentName:"ol"},"Install the tool")),(0,r.kt)("p",null,"aqua gets the expected checksum from the following sources."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"aqua-checksums.json")),(0,r.kt)("li",{parentName:"ol"},"checksum files that each tools publish"),(0,r.kt)("li",{parentName:"ol"},"If the tool doesn't publish checkfum files, aqua treats the checksum calculated from the downloaded asset as the expected checksum")),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "checksums": [\n    {\n      "id": "github_release/github.com/golangci/golangci-lint/v1.49.0/golangci-lint-1.49.0-darwin-amd64.tar.gz",\n      "checksum": "20cd1215e0420db8cfa94a6cd3c9d325f7b39c07f2415a02d111568d8bc9e271",\n      "algorithm": "sha256"\n    },\n    {\n      "id": "github_release/github.com/golangci/golangci-lint/v1.49.0/golangci-lint-1.49.0-darwin-arm64.tar.gz",\n      "checksum": "cabb1a4c35fe1dadbe5a81550a00871281a331e7660cd85ae16e936a7f0f6cfc",\n      "algorithm": "sha256"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Many tools publish checksum files, so aqua gets checksums from them."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://releases.hashicorp.com/terraform/1.2.7/terraform_1.2.7_SHA256SUMS"},"Terraform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cli/cli/releases/download/v2.14.4/gh_2.14.4_checksums.txt"},"GitHub CLI"))),(0,r.kt)("p",null,"If no checksum file for a tool is published, aqua can also get checksums by downloading assets and calculating checksums."),(0,r.kt)("h2",{id:"aqua-registry-version"},"aqua-registry version"),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/releases/tag/v3.90.0"},"v3.90.0"),", aqua-registry supports the checksum verification."),(0,r.kt)("h2",{id:"remove-unused-checksums-with--prune-option"},"Remove unused checksums with ",(0,r.kt)("inlineCode",{parentName:"h2"},"-prune")," option"),(0,r.kt)("p",null,"aqua >= ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.28.0"},"v1.28.0")),(0,r.kt)("p",null,"When tools are updated, checksums for old versions are basically unneeded.\nOr when we remove some tools from ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml"),", checksums for those tools would be unneeded."),(0,r.kt)("p",null,"You can remove unused checksums by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"-prune")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aqua update-checksum -prune\n")),(0,r.kt)("h2",{id:"verify-checksums-of-registries"},"Verify checksums of Registries"),(0,r.kt)("p",null,"aqua >= ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v1.30.0"},"v1.30.0")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1491"},"#1491")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1508"},"#1508")),(0,r.kt)("p",null,"aqua verifies checksums of Registries if Checksum Verification is enabled."),(0,r.kt)("p",null,"aqua.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"checksum:\n  enabled: true\n")),(0,r.kt)("p",null,"aqua-checksums.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "checksums": [\n    {\n      "id": "registries/github_content/github.com/aquaproj/aqua-registry/v3.114.0/registry.yaml",\n      "checksum": "b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248bd",\n      "algorithm": "sha512"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"If the checksum is invalid, it would fail to install Registries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ERRO[0000] install the registry                          actual_checksum=b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248be aqua_version= env=darwin/arm64 error="check a registry\'s checksum: checksum is invalid" exe_name=starship expected_checksum=b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248bd program=aqua registry_name=standard\nFATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="it failed to install some registries" exe_name=starship program=aqua\n')),(0,r.kt)("h2",{id:"generate-and-patch-checksum-configuration-automatically"},"Generate and patch checksum configuration automatically"),(0,r.kt)("p",null,"It is bothersome to write the checksum configuration manually, so aqua supports scaffolding the configuration."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/develop-registry/scaffold-registry"},"aqua gr")," scaffolds the checksum configuration too."),(0,r.kt)("p",null,"And you can also patch the checksum configuration to the existing registries by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/registry-tool/blob/main/USAGE.md#aqua-registry-patch-checksum"},"aqua-registry patch-checksum command"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The scaffolding isn't perfect, so sometimes you have to fix the code manually.")),(0,r.kt)("h2",{id:"question-should-aqua-checksumsjson-be-managed-with-git"},"Question: Should ",(0,r.kt)("inlineCode",{parentName:"h2"},"aqua-checksums.json")," be managed with Git?"),(0,r.kt)("p",null,"Yes. You should manage ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua-checksums.json")," with Git."))}h.isMDXComponent=!0}}]);