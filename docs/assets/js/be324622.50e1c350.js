"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8250],{3905:(a,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function s(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},o=Object.keys(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var u=t.createContext({}),r=function(a){var e=t.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},c=function(a){var e=r(a.components);return t.createElement(u.Provider,{value:e},a.children)},p="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,o=a.originalType,u=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),p=r(n),g=i,h=p["".concat(u,".").concat(g)]||p[g]||d[g]||o;return n?t.createElement(h,l(l({ref:e},c),{},{components:n})):t.createElement(h,l({ref:e},c))}));function h(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var o=n.length,l=new Array(o);l[0]=g;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=a,s[p]="string"==typeof a?a:i,l[1]=s;for(var r=2;r<o;r++)l[r]=n[r];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6490:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var t=n(7462),i=(n(7294),n(3905));const o={sidebar_position:400},l="Usage",s={unversionedId:"reference/usage",id:"reference/usage",title:"Usage",description:"aqua install",source:"@site/docs/reference/usage.md",sourceDirName:"reference",slug:"/reference/usage",permalink:"/docs/reference/usage",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/usage.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"private",permalink:"/docs/reference/registry-config/private"},next:{title:"Windows Support",permalink:"/docs/reference/windows-support"}},u={},r=[{value:"aqua install",id:"aqua-install",level:2},{value:"aqua generate",id:"aqua-generate",level:2},{value:"aqua init",id:"aqua-init",level:2},{value:"aqua update-aqua",id:"aqua-update-aqua",level:2},{value:"aqua update-checksum",id:"aqua-update-checksum",level:2},{value:"aqua which",id:"aqua-which",level:2},{value:"aqua generate-registry",id:"aqua-generate-registry",level:2},{value:"aqua cp",id:"aqua-cp",level:2},{value:"aqua list",id:"aqua-list",level:2},{value:"aqua completion",id:"aqua-completion",level:2},{value:"aqua exec",id:"aqua-exec",level:2}],c={toc:r};function p(a){let{components:e,...n}=a;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help\nNAME:\n   aqua - Version Manager of CLI. https://aquaproj.github.io/\n\nUSAGE:\n   aqua [global options] command [command options] [arguments...]\n\nVERSION:\n   1.28.0 (2e19938cbe01dd0137521f8a84a7abab8a34bab7)\n\nCOMMANDS:\n   init                   Create a configuration file if it doesn't exist\n   init-policy            Create a policy file if it doesn't exist\n   install, i             Install tools\n   update-aqua            Update aqua\n   generate, g            Search packages in registries and output the configuration interactively\n   which                  Output the absolute file path of the given command\n   exec                   Execute tool\n   list                   List packages in Registries\n   generate-registry, gr  Generate a registry's package configuration\n   completion             Output shell completion script for bash or zsh\n   version                Show version\n   cp                     Copy executable files in a directory\n   update-checksum        Create or Update .aqua-checksums.json\n   help, h                Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --log-level value         log level [$AQUA_LOG_LEVEL]\n   --config value, -c value  configuration file path [$AQUA_CONFIG]\n   --trace value             trace output file path\n   --cpu-profile value       cpu profile output file path\n   --help, -h                show help (default: false)\n   --version, -v             print the version (default: false)\n")),(0,i.kt)("h2",{id:"aqua-install"},"aqua install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help install\nNAME:\n   aqua install - Install tools\n\nUSAGE:\n   aqua install [command options] [arguments...]\n\nDESCRIPTION:\n   Install tools according to the configuration files.\n\n   e.g.\n   $ aqua i\n\n   If you want to create only symbolic links and want to skip downloading package, please set "-l" option.\n\n   $ aqua i -l\n\n   By default aqua doesn\'t install packages in the global configuration.\n   If you want to install packages in the global configuration too,\n   please set "-a" option.\n\n   $ aqua i -a\n\n   You can filter installed packages with package tags.\n\n   e.g.\n   $ aqua i -t foo # Install only packages having a tag "foo"\n   $ aqua i --exclude-tags foo # Install only packages not having a tag "foo"\n\n\nOPTIONS:\n   --only-link, -l         create links but skip downloading packages (default: false)\n   --test                  test file.src after installing the package (default: false)\n   --all, -a               install all aqua configuration packages (default: false)\n   --tags value, -t value  filter installed packages with tags\n   --exclude-tags value    exclude installed packages with tags\n   --help, -h              show help (default: false)\n')),(0,i.kt)("h2",{id:"aqua-generate"},"aqua generate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help generate\nNAME:\n   aqua generate - Search packages in registries and output the configuration interactively\n\nUSAGE:\n   aqua generate [command options] [<registry name>,<package name> ...]\n\nDESCRIPTION:\n   Search packages in registries and output the configuration interactively.\n\n   If no argument is passed, interactive fuzzy finder is launched.\n\n   $ aqua g\n\n     influxdata/influx-cli (standard) (influx)                     \u250c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \n     newrelic/newrelic-cli (standard) (newrelic)                   \u2502  cli/cli\n     pivotal-cf/pivnet-cli (standard) (pivnet)                     \u2502\n     scaleway/scaleway-cli (standard) (scw)                        \u2502  https://cli.github.com/\n     tfmigrator/cli (standard) (tfmigrator)                        \u2502  GitHub\u2019cs official command line tool\n     aws/copilot-cli (standard) (copilot)                          \u2502\n     codeclimate/test-reporter (standard)                          \u2502\n     create-go-app/cli (standard) (cgapp)                          \u2502\n     harness/drone-cli (standard) (drone)                          \u2502\n     sigstore/rekor (standard) (rekor-cli)                         \u2502\n     getsentry/sentry-cli (standard)                               \u2502\n     knative/client (standard) (kn)                                \u2502\n     rancher/cli (standard) (rancher)                              \u2502\n     tektoncd/cli (standard) (tkn)                                 \u2502\n     civo/cli (standard) (civo)                                    \u2502\n     dapr/cli (standard) (dapr)                                    \u2502\n     mongodb/mongocli (standard)                                   \u2502\n     openfaas/faas-cli (standard)                                  \u2502\n   > cli/cli (standard) (gh)                                       \u2502\n     48/380                                                        \u2502\n   > cli                                                           \u2514 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \n\n   Please select the package you want to install, then the package configuration is outptted.\n   You can select multiple packages by tab key.\n   Please copy and paste the outputted configuration in the aqua configuration file.\n\n   $ aqua g # tfmigrator/cli is selected\n   - name: tfmigrator/cli@v0.2.1\n\n   You can update the configuration file directly with "-i" option.\n\n   $ aqua g -i\n\n   You can update an imported file with "-o" option.\n\n   $ aqua g -o aqua/pkgs.yaml\n\n   You can pass packages with positional arguments.\n\n   $ aqua g [<registry name>,<package name>[@<version>] ...]\n\n   $ aqua g standard,cli/cli standard,junegunn/fzf standard,suzuki-shunsuke/tfcmt@v3.0.0\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   - name: suzuki-shunsuke/tfcmt@v3.0.0\n\n   You can omit the registry name if it is "standard".\n\n   $ aqua g cli/cli\n   - name: cli/cli@v2.2.0\n\n   With "-f" option, you can pass packages.\n\n   $ aqua g -f packages.txt # list of <registry name>,<package name>\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   - name: tfmigrator/cli@v0.2.1\n\n   $ cat packages.txt | aqua g -f -\n   - name: cli/cli@v2.2.0\n   - name: junegunn/fzf@0.28.0\n   - name: tfmigrator/cli@v0.2.1\n\n   $ aqua list | aqua g -f - # Generate configuration to install all packages\n\n   You can omit the registry name if it is "standard".\n\n   echo "cli/cli" | aqua g -f -\n   - name: cli/cli@v2.2.0\n\n   You can select a version interactively with "-s" option.\n\n   $ aqua g -s\n\n   The option "-pin" is useful to prevent the package from being updated by Renovate.\n\n   $ aqua g -pin cli/cli\n   - name: cli/cli\n     version: v2.2.0\n\n\nOPTIONS:\n   -f value              the file path of packages list. When the value is "-", the list is passed from the standard input\n   -i                    Insert packages to configuration file (default: false)\n   --pin                 Pin version (default: false)\n   -o value              inserted file\n   --select-version, -s  Select the installed version interactively (default: false)\n   --help, -h            show help (default: false)\n')),(0,i.kt)("h2",{id:"aqua-init"},"aqua init"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help init\nNAME:\n   aqua init - Create a configuration file if it doesn\'t exist\n\nUSAGE:\n   aqua init [command options] [<created file path. The default value is "aqua.yaml">]\n\nDESCRIPTION:\n   Create a configuration file if it doesn\'t exist\n   e.g.\n   $ aqua init # create "aqua.yaml"\n   $ aqua init foo.yaml # create foo.yaml\n\nOPTIONS:\n   --help, -h  show help (default: false)\n')),(0,i.kt)("h2",{id:"aqua-update-aqua"},"aqua update-aqua"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help update-aqua\nNAME:\n   aqua update-aqua - Update aqua\n\nUSAGE:\n   aqua update-aqua [command options] [arguments...]\n\nDESCRIPTION:\n   Update aqua.\n\n   e.g.\n   $ aqua update-aqua [version]\n\n   aqua is installed in $AQUA_ROOT_DIR/bin.\n   By default the latest version of aqua is installed, but you can specify the version with argument.\n\n   e.g.\n   $ aqua update-aqua # Install the latest version\n   $ aqua update-aqua v1.20.0 # Install v1.20.0\n\n\nOPTIONS:\n   --help, -h  show help (default: false)\n")),(0,i.kt)("h2",{id:"aqua-update-checksum"},"aqua update-checksum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help update-checksum\nNAME:\n   aqua update-checksum - Create or Update .aqua-checksums.json\n\nUSAGE:\n   aqua update-checksum [command options] [arguments...]\n\nDESCRIPTION:\n   Create or Update .aqua-checksums.json.\n\n   e.g.\n   $ aqua update-checksum\n\n   By default aqua doesn't update .aqua-checksums.json of the global configuration.\n   If you want to update them too,\n   please set \"-a\" option.\n\n   $ aqua update-checksum -a\n\n   By default, aqua update-checksum doesn't add checksums if the package's checksum configuration is disabled.\n   If -deep option is set, aqua update-checksum downloads assets and calculate checksums.\n\n   $ aqua update-checksum -deep\n\n   By default, aqua update-checksum doesn't remove existing checksums even if they aren't unused.\n   If -prune option is set, aqua unused checksums would be removed.\n\n   $ aqua update-checksum -prune\n\n\nOPTIONS:\n   --all, -a   Create or Update all .aqua-checksums.json including global configuration (default: false)\n   --deep      If a package's checksum configuration is disabled, download the asset and calculate the checksum (default: false)\n   --prune     Remove unused checksums (default: false)\n   --help, -h  show help (default: false)\n")),(0,i.kt)("h2",{id:"aqua-which"},"aqua which"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help which\nNAME:\n   aqua which - Output the absolute file path of the given command\n\nUSAGE:\n   aqua which [command options] <command name>\n\nDESCRIPTION:\n   Output the absolute file path of the given command\n   e.g.\n   $ aqua which gh\n   /home/foo/.aqua/pkgs/github_release/github.com/cli/cli/v2.4.0/gh_2.4.0_macOS_amd64.tar.gz/gh_2.4.0_macOS_amd64/bin/gh\n\n   If the command isn't found in the configuration files, aqua searches the command in the environment variable PATH\n\n   $ aqua which ls\n   /bin/ls\n\n   If the command isn't found, exits with non zero exit code.\n\n   $ aqua which foo\n   FATA[0000] aqua failed                                   aqua_version=0.8.6 error=\"command is not found\" exe_name=foo program=aqua\n\n\nOPTIONS:\n   --help, -h  show help (default: false)\n")),(0,i.kt)("h2",{id:"aqua-generate-registry"},"aqua generate-registry"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help generate-registry\nNAME:\n   aqua generate-registry - Generate a registry's package configuration\n\nUSAGE:\n   aqua generate-registry [command options] <package name>\n\nDESCRIPTION:\n   Generate a template of Registry package configuration.\n\n   Note that you probably fix the generate code manually.\n   The generate code is not perfect and may include the wrong configuration.\n   It is just a template.\n\n   e.g.\n\n   $ aqua gr cli/cli # Outputs the configuration.\n   packages:\n     - type: github_release\n       repo_owner: cli\n       repo_name: cli\n       asset: gh_{{trimV .Version}}_{{.OS}}_{{.Arch}}.{{.Format}}\n       format: tar.gz\n       description: GitHub\u2019s official command line tool\n       replacements:\n         darwin: macOS\n       overrides:\n         - goos: windows\n           format: zip\n       supported_envs:\n         - darwin\n         - linux\n         - amd64\n       rosetta2: true\n\n\nOPTIONS:\n   --help, -h  show help (default: false)\n")),(0,i.kt)("h2",{id:"aqua-cp"},"aqua cp"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help cp\nNAME:\n   aqua cp - Copy executable files in a directory\n\nUSAGE:\n   aqua cp [command options] <command name> [<command name> ...]\n\nDESCRIPTION:\n   Copy executable files in a directory.\n\n   e.g.\n   $ aqua cp gh\n   $ ls dist\n   gh\n\n   You can specify the target directory by -o option.\n\n   $ aqua cp -o ~/bin terraform hugo\n\n   If you don\'t specify commands, all commands are copied.\n\n   $ aqua cp\n\n   You can also copy global configuration files\' commands with "-a" option.\n\n   $ aqua cp -a\n\n   You can filter copied commands with package tags.\n\n   e.g.\n   $ aqua cp -t foo # Copy only packages having a tag "foo"\n   $ aqua cp --exclude-tags foo # Copy only packages not having a tag "foo"\n\n\nOPTIONS:\n   -o value                destination directory\n   --all, -a               install all aqua configuration packages (default: false)\n   --tags value, -t value  filter installed packages with tags\n   --exclude-tags value    exclude installed packages with tags\n   --help, -h              show help (default: false)\n')),(0,i.kt)("h2",{id:"aqua-list"},"aqua list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help list\nNAME:\n   aqua list - List packages in Registries\n\nUSAGE:\n   aqua list [command options] [arguments...]\n\nDESCRIPTION:\n   Output the list of packages in registries.\n   The output format is <registry name>,<package name>\n\n   e.g.\n   $ aqua list\n   standard,99designs/aws-vault\n   standard,abiosoft/colima\n   standard,abs-lang/abs\n   ...\n\n\nOPTIONS:\n   --help, -h  show help (default: false)\n")),(0,i.kt)("h2",{id:"aqua-completion"},"aqua completion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua help completion\nNAME:\n   aqua completion - Output shell completion script for bash or zsh\n\nUSAGE:\n   aqua completion command [command options] [arguments...]\n\nDESCRIPTION:\n   Output shell completion script for bash or zsh\n   Run these commands in .bash_profile or .zprofile\n   e.g.\n   .bash_profile\n\n   if command -v aqua &> /dev/null; then source <(aqua completion bash); fi\n\n   .zprofile\n\n   if command -v aqua &> /dev/null; then source <(aqua completion zsh); fi\n\n\nCOMMANDS:\n   bash     Output shell completion script for bash\n   zsh      Output shell completion script for zsh\n   help, h  Shows a list of commands or help for one command\n\nOPTIONS:\n   --help, -h  show help (default: false)\n")),(0,i.kt)("h2",{id:"aqua-exec"},"aqua exec"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua help exec\nNAME:\n   aqua exec - Execute tool\n\nUSAGE:\n   aqua exec [command options] <executed command> [<arg> ...]\n\nDESCRIPTION:\n   Basically you don\'t have to use this command, because this is used by aqua internally. aqua-proxy invokes this command.\n   When you execute the command installed by aqua, "aqua exec" is executed internally.\n\n   e.g.\n   $ aqua exec -- gh version\n   gh version 2.4.0 (2021-12-21)\n   https://github.com/cli/cli/releases/tag/v2.4.0\n\nOPTIONS:\n   --help, -h  show help (default: false)\n')))}p.isMDXComponent=!0}}]);