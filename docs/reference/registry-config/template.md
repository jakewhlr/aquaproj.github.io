---
sidebar_position: 1700
---

# Template String

Some fields are parsed with [Go's text/template](https://pkg.go.dev/text/template) and [sprig](http://masterminds.github.io/sprig/).

## Common Template Functions

* `trimV`: This is equivalent to `trimPrefix "v"`

## Template Variables

* `OS`: A string which `GOOS` is replaced by `replacements`. If `replacements` isn't set, `OS` is equal to `GOOS`. Basically you should use `OS` for the consistency
* `Arch`: A string which `GOARCH` is replaced by `replacements`. If `replacements` isn't set, `Arch` is equal to `GOARCH`. Basically you should use `OS` for the consistency
* `GOOS`: Go's [runtime.GOOS](https://pkg.go.dev/runtime#pkg-constants)
* `GOARCH`: Go's [runtime.GOARCH](https://pkg.go.dev/runtime#pkg-constants)
* `Version`: Package `version`
* `Format`: Package `format`
* `FileName`: `files[].name`