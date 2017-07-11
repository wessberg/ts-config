const {rules} = require("./common");

/**
 * .gitignore rules
 * @type {string[]}
 */
exports.gitignore = [
	...rules,

	// Directories
	"/node_modules/",
	"/compiled/",
	"/dist/",
	"package-lock.json"
];