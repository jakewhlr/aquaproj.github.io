---
sidebar_position: 400
---

# Usage

<!-- This is generated by scripts/generate-usage.sh. Don't edit this file directly. -->

```console
$ aqua help
NAME:
   aqua - Version Manager of CLI. https://aquaproj.github.io/

USAGE:
   aqua [global options] command [command options] [arguments...]

VERSION:
   1.15.0 (6ac274e9745cfb5a87587d363c9ace9046674c5b)

COMMANDS:
   init                   Create a configuration file if it doesn't exist
   install, i             Install tools
   generate, g            Search packages in registries and output the configuration interactively
   which                  Output the absolute file path of the given command
   exec                   Execute tool
   list                   List packages in Registries
   generate-registry, gr  Generate a registry's package configuration
   completion             Output shell completion script for bash or zsh
   version                Show version
   help, h                Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --config value, -c value  configuration file path [$AQUA_CONFIG]
   --cpu-profile value       cpu profile output file path
   --help, -h                show help (default: false)
   --log-level value         log level [$AQUA_LOG_LEVEL]
   --trace value             trace output file path
   --version, -v             print the version (default: false)
   
```

## aqua install

```console
$ aqua help install
NAME:
   aqua install - Install tools

USAGE:
   aqua install [command options] [arguments...]

DESCRIPTION:
   Install tools according to the configuration files.
   
   e.g.
   $ aqua i
   
   If you want to create only symbolic links and want to skip downloading package, please set "-l" option.
   
   $ aqua i -l
   
   By default aqua doesn't install packages in the global configuration.
   If you want to install packages in the global configuration too,
   please set "-a" option.
   
   $ aqua i -a
   

OPTIONS:
   --all, -a        install all aqua configuration packages (default: false)
   --only-link, -l  create links but skip downloading packages (default: false)
   --test           test file.src after installing the package (default: false)
   
```

## aqua generate

```console
$ aqua help generate
NAME:
   aqua generate - Search packages in registries and output the configuration interactively

USAGE:
   aqua generate [command options] [<registry name>,<package name> ...]

DESCRIPTION:
   Search packages in registries and output the configuration interactively.
   
   If no argument is passed, interactive fuzzy finder is launched.
   
   $ aqua g
   
     influxdata/influx-cli (standard) (influx)                     ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
     newrelic/newrelic-cli (standard) (newrelic)                   │  cli/cli
     pivotal-cf/pivnet-cli (standard) (pivnet)                     │
     scaleway/scaleway-cli (standard) (scw)                        │  https://cli.github.com/
     tfmigrator/cli (standard) (tfmigrator)                        │  GitHub’cs official command line tool
     aws/copilot-cli (standard) (copilot)                          │
     codeclimate/test-reporter (standard)                          │
     create-go-app/cli (standard) (cgapp)                          │
     harness/drone-cli (standard) (drone)                          │
     sigstore/rekor (standard) (rekor-cli)                         │
     getsentry/sentry-cli (standard)                               │
     knative/client (standard) (kn)                                │
     rancher/cli (standard) (rancher)                              │
     tektoncd/cli (standard) (tkn)                                 │
     civo/cli (standard) (civo)                                    │
     dapr/cli (standard) (dapr)                                    │
     mongodb/mongocli (standard)                                   │
     openfaas/faas-cli (standard)                                  │
   > cli/cli (standard) (gh)                                       │
     48/380                                                        │
   > cli                                                           └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
   
   Please select the package you want to install, then the package configuration is outptted.
   You can select multiple packages by tab key.
   Please copy and paste the outputted configuration in the aqua configuration file.
   
   $ aqua g # tfmigrator/cli is selected
   - name: tfmigrator/cli@v0.2.1
   
   You can update the configuration file directly with "-i" option.
   
   $ aqua g -i
   
   You can pass packages with positional arguments.
   
   $ aqua g [<registry name>,<package name> ...]
   
   $ aqua g standard,cli/cli standard,junegunn/fzf
   - name: cli/cli@v2.2.0
   - name: junegunn/fzf@0.28.0
   
   You can omit the registry name if it is "standard".
   
   $ aqua g cli/cli
   - name: cli/cli@v2.2.0
   
   With "-f" option, you can pass packages.
   
   $ aqua g -f packages.txt # list of <registry name>,<package name>
   - name: cli/cli@v2.2.0
   - name: junegunn/fzf@0.28.0
   - name: tfmigrator/cli@v0.2.1
   
   $ cat packages.txt | aqua g -f -
   - name: cli/cli@v2.2.0
   - name: junegunn/fzf@0.28.0
   - name: tfmigrator/cli@v0.2.1
   
   $ aqua list | aqua g -f - # Generate configuration to install all packages
   
   You can omit the registry name if it is "standard".
   
   echo "cli/cli" | aqua g -f -
   - name: cli/cli@v2.2.0
   
   You can select a version interactively with "-s" option.
   
   $ aqua g -s
   

OPTIONS:
   --select-version, -s  Select the installed version interactively (default: false)
   -f value              the file path of packages list. When the value is "-", the list is passed from the standard input
   -i                    Insert packages to configuration file (default: false)
   
```

## aqua init

```console
$ aqua help init
NAME:
   aqua init - Create a configuration file if it doesn't exist

USAGE:
   aqua init [<created file path. The default value is "aqua.yaml">]

DESCRIPTION:
   Create a configuration file if it doesn't exist
   e.g.
   $ aqua init # create "aqua.yaml"
   $ aqua init foo.yaml # create foo.yaml
```

## aqua which

```console
$ aqua help which
NAME:
   aqua which - Output the absolute file path of the given command

USAGE:
   aqua which <command name>

DESCRIPTION:
   Output the absolute file path of the given command
   e.g.
   $ aqua which gh
   /home/foo/.aqua/pkgs/github_release/github.com/cli/cli/v2.4.0/gh_2.4.0_macOS_amd64.tar.gz/gh_2.4.0_macOS_amd64/bin/gh
   
   If the command isn't found in the configuration files, aqua searches the command in the environment variable PATH
   
   $ aqua which ls
   /bin/ls
   
   If the command isn't found, exits with non zero exit code.
   
   $ aqua which foo
   FATA[0000] aqua failed                                   aqua_version=0.8.6 error="command is not found" exe_name=foo program=aqua
   
```

## aqua generate-registry

```console
$ aqua help generate-registry
NAME:
   aqua generate-registry - Generate a registry's package configuration

USAGE:
   aqua generate-registry <package name>

DESCRIPTION:
   Generate a template of Registry package configuration.
   
   Note that you probably fix the generate code manually.
   The generate code is not perfect and may include the wrong configuration.
   It is just a template.
   
   e.g.
   
   $ aqua gr cli/cli # Outputs the configuration.
   packages:
     - type: github_release
       repo_owner: cli
       repo_name: cli
       asset: gh_{{trimV .Version}}_{{.OS}}_{{.Arch}}.{{.Format}}
       format: tar.gz
       description: GitHub’s official command line tool
       replacements:
         darwin: macOS
       overrides:
         - goos: windows
           format: zip
       supported_envs:
         - darwin
         - linux
         - amd64
       rosetta2: true
   
```

## aqua list

```console
$ aqua help list
NAME:
   aqua list - List packages in Registries

USAGE:
   aqua list [arguments...]

DESCRIPTION:
   Output the list of packages in registries.
   The output format is <registry name>,<package name>
   
   e.g.
   $ aqua list
   standard,99designs/aws-vault
   standard,abiosoft/colima
   standard,abs-lang/abs
   ...
   
```

## aqua completion

```console
$ aqua help completion
NAME:
   aqua completion - Output shell completion script for bash or zsh

USAGE:
   aqua completion [arguments...]

DESCRIPTION:
   Output shell completion script for bash or zsh
   Run these commands in .bash_profile or .zprofile
   e.g.
   .bash_profile
   
   if command -v aqua &> /dev/null; then source <(aqua completion bash); fi
   
   .zprofile
   
   if command -v aqua &> /dev/null; then source <(aqua completion zsh); fi
   
```

## aqua exec

```console
$ aqua help exec
NAME:
   aqua exec - Execute tool

USAGE:
   aqua exec <executed command> [<arg> ...]

DESCRIPTION:
   Basically you don't have to use this command, because this is used by aqua internally. aqua-proxy invokes this command.
   When you execute the command installed by aqua, "aqua exec" is executed internally.
   
   e.g.
   $ aqua exec -- gh version
   gh version 2.4.0 (2021-12-21)
   https://github.com/cli/cli/releases/tag/v2.4.0
```
