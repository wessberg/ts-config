/**
 * The repository field of a package.json file
 * @typedef {object} Repository
 * @property {string} type
 * @property {string} url
 */

/**
 * The engines field of a package.json file
 * @typedef {object} Engines
 */

/**
 * An Author field hos the contact information for the package author
 * @typedef {object} Author
 * @property {string|null} name
 * @property {string|null} email
 * @property {string|null} url
 */

/**
 * The bug field of a package.json file
 * @typedef {object} Bugs
 * @property {string} url
 */

/**
 * A package.json file.
 * @typedef {object} PackageJSON
 * @property {string} name
 * @property {object} scripts
 * @property {string} main
 * @property {string} module
 * @property {string} browser
 * @property {string} es2015
 * @property {string} types
 * @property {string} typings
 * @property {Repository} repository
 * @property {Bugs} bugs
 * @property {Author} author
 * @property {Engines} engines
 */

const {readFileSync, existsSync, writeFileSync} = require("fs");
const {join} = require("path");
const DIRECTORY = process.cwd();
const PACKAGE_JSON_PATH = join(DIRECTORY, "package.json");

// Read the existing contents of the .npmignore file.
if (!existsSync(PACKAGE_JSON_PATH)) throw new ReferenceError("Could not add NPM scripts to package.json: It didn't exist!");

/**
 * Returns the package json file (parsed from JSON).
 * @returns {PackageJSON}
 */
function getPackageJSON () {
	return JSON.parse(readFileSync(PACKAGE_JSON_PATH));
}

/**
 * Updates the PackageJSON file.
 * @param {PackageJSON} packageJSON
 */
function setPackageJSON (packageJSON) {
	writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJSON, null, "\t"));
}

exports.getPackageJSON = getPackageJSON;
exports.setPackageJSON = setPackageJSON;