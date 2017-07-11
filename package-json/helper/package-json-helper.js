/**
 * A package.json file.
 * @typedef {object} PackageJSON
 * @property {object} scripts
 * @property {string} main
 * @property {string} module
 * @property {string} browser
 * @property {string} types
 * @property {string} typings
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