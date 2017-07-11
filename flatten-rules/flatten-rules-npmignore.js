const {rules} = require("./rules-common");
const {flattenRules} = require("./flatten-rules-helper");
const {join} = require("path");
const DIRECTORY = process.cwd();
const NPM_IGNORE_PATH = join(DIRECTORY, ".npmignore");

// Here's the ignore rules we'd like to at least have.
flattenRules([
	...rules,

	// Directories
	"/src/",
	"tsconfig.*",
	".gitignore",
	"/test/",
	"/typings/",

	// Individual files
	"tslint.json"
], NPM_IGNORE_PATH);