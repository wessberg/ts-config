# ts-config [![NPM version][npm-image]][npm-url]
> Shared configs and package.json scripts used across my OSS projects.

## Installation
Simply do: `npm install @wessberg/ts-config`.

## Usage

This library can auto-generate tsconfig.json, tsconfig.dist.json, tslint.json, .gitignore, .npmignore files as well as core package.json scripts and dependencies.
These are used across my OSS projects.

To generate them, run `index.js` inside this library (or just import it from another script - that will trigger the generation).

## Changelog

0.0.17 / 2017-07-19
===================

  * 0.0.17
  * Updated changelog
  * Updated CHANGELOG

0.0.16 / 2017-07-19
===================

  * 0.0.16
  * Updated changelog
  * Fixed an issue in the scripts
  * - Added new tslint rules.
    - Added new NPM scripts for auto-generating a changelog and updating the one in the README.

0.0.15 / 2017-07-18
===================

  * 0.0.15
  * Allowed '2' as a magic-number.

0.0.14 / 2017-07-12
===================

  * 0.0.14
  * - The *repository* and *bugs* fields will now be auto-detected and added to the package.json file. They are preserved if they exist already in the config.
    - The *author* field will now be auto-generated in the package.json file. Existing info will be preserved. If a shorthand string representation of an author is given, it is parsed and rewritten as an object literal.
    - The *engines* field will now b auto-generated in the package.json file. Existing info will be preserved.
    - The *es2015* field will now be auto-generated in the package.json file.
    - The existing properties of *tslint.json*, *tsconfig.json* and *tsconfig.dist.json* files in the root directory will now be preserved and instead extended. If they don't exist, new ones will be generated.

0.0.13 / 2017-07-11
===================

  * 0.0.13
  * Removed duplicate entry from gitignore

0.0.12 / 2017-07-11
===================

  * 0.0.12
  * *main*, *browser*, *module*, *types* and *typings* fields will now be auto-generated.

0.0.11 / 2017-07-11
===================

  * 0.0.11
  * Renamed prepublish to prepublishOnly to support npm@5

0.0.10 / 2017-07-11
===================

  * 0.0.10
  * Fixed npmignore.

0.0.9 / 2017-07-11
==================

  * 0.0.9
  * Fixed issues with rules.

0.0.8 / 2017-07-11
==================

  * 0.0.8
  * Fixed a bug with auto-generating ignore rules.

0.0.7 / 2017-07-11
==================

  * 0.0.7
  * Added tslib as a dependency. Refactoring.

0.0.6 / 2017-07-11
==================

  * 0.0.6
  * Added various helper functions for auto-generating package.json scripts, package.json dependencies, tsconfig and tslint files, adding files to .npmignore and .gitignore. Just run update/update.js from the root directory of the library that uses ts-config to add the missing files.
  * This is a test commit

0.0.5 / 2017-07-10
==================

  * Merge branch 'master' of https://github.com/wessberg/ts-config
  * 0.0.5
  * Added WebStorm Code Style xml to library.
  * Update package.json

0.0.4 / 2017-07-10
==================

  * 0.0.4
  * Removed max-line-length rule.

0.0.3 / 2017-07-07
==================

  * 0.0.3
  * Fixed tsconfig.

0.0.2 / 2017-07-07
==================

  * 0.0.2
  * Removed 'typeRoots' from tsconfig

0.0.1 / 2017-07-06
==================

  * 0.0.1
  * Updated README
  * First commit

