const {common} = require("./common");

/**
 * .npmignore rules
 * @type {string[]}
 */
exports.npmignore = [
	...common,

	// Directories
	"/src/",
	"/tsconfig.*",
	".gitignore",
	"/test/",
	"/typings/",

	// Individual files
	"/tslint.json"
];