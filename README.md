# ts-config [![NPM version][npm-image]][npm-url]
> Shared rules for Typescript and tslint, used across my OSS projects.

## Installation
Simply do: `npm install @wessberg/ts-config`.

## Usage

You can import a `tslint.json` configuration from here: `node_modules/@wessberg/ts-config/tslint/tslint.json`
You can import a base `tsconfig.json` configuration from here: `node_modules/@wessberg/ts-config/tsconfig/tsconfig.json`.

## Changelog:

**v0.0.6**:

- Added various helper functions for auto-generating package.json scripts, package.json dependencies, tsconfig and tslint files, adding files to .npmignore and .gitignore. Just run update/update.js from the root directory of the library that uses ts-config to add the missing files.

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