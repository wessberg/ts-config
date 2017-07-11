const {rules} = require("./common");

/**
 * .npmignore rules
 * @type {string[]}
 */
exports.npmignore = [
	...rules,

	// Directories
	"/src/",
	"tsconfig.*",
	".gitignore",
	"/test/",
	"/typings/",

	// Individual files
	"tslint.json"
];