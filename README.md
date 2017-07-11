# ts-config [![NPM version][npm-image]][npm-url]
> Shared configs and package.json scripts used across my OSS projects.

## Installation
Simply do: `npm install @wessberg/ts-config`.

## Usage

This library can auto-generate tsconfig.json, tsconfig.dist.json, tslint.json, .gitignore, .npmignore files as well as core package.json scripts and dependencies.
These are used across my OSS projects.

To generate them, run `index.js` inside this library (or just import it from another script - that will trigger the generation).

## Changelog:

**v0.0.8**:

- Fixed a bug with auto-generating ignore rules.

**v0.0.7**:

- Added tslib as a dependency. Refactoring.

**v0.0.6**:

- Added various helper functions for auto-generating package.json scripts, package.json dependencies, tsconfig and tslint files, adding files to .npmignore and .gitignore. Just run update/index.js from the root directory of the library that uses ts-config to add the missing files.

**v0.0.5**:

- Added WebStorm Code Style xml to library.

**v0.0.4**:

- Removed max-line-length rule.

**v0.0.3**:

- Fixed tsconfig.

**v0.0.0**:

- First release.

[npm-url]: https://npmjs.org/package/@wessberg/ts-config
[npm-image]: https://badge.fury.io/js/@wessberg/ts-config.svg