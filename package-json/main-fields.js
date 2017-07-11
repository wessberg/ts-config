/**
 * A type definition for main fields.
 * @typedef {object} MainFields
 * @property {string} main
 * @property {string} module
 * @property {string} browser
 * @property {string} types
 * @property {string} typings
 */

/**
 * Here's the main fields we want in the package.json file
 * @type {MainFields}
 */
exports.mainFields = {
	"main": "./dist/cjs/index.js",
	"module": "./dist/es2015/index.js",
	"browser": "./dist/es2015/index.js",
	"types": "./dist/es2015/index.d.ts",
	"typings": "./dist/es2015/index.d.ts",
};