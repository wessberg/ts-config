const {common} = require("./common");

/**
 * .gitignore rules
 * @type {string[]}
 */
exports.gitignore = [
	...common,

	// Directories
	"/node_modules/",
	"/compiled/",
	"/dist/",
	"package-lock.json"
];