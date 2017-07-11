const {getPackageJSON, setPackageJSON} = require("./package-json-helper");

/**
 * Adds the given scripts to the package.json file.
 * @param {object} scripts - An object where the keys are the names of the scripts to add and the values are the scripts themselves.
 */
function addNpmScripts (scripts) {
	const packageJSON = getPackageJSON();
	const hasScripts = packageJSON.hasOwnProperty("scripts");

	// Initialize the scripts to an empty object if the package.json file doesn't have any.
	if (!hasScripts) packageJSON.scripts = {};

	// Set all the scripts
	Object.keys(scripts).forEach(key => addNpmScript(packageJSON, key, scripts[key]));

	// Finally, save the new package.json file
	setPackageJSON(packageJSON);
}

/**
 * Adds the given script to the package.json file.
 * @param {PackageJSON} packageJSON
 * @param {string} key
 * @param {string} value
 */
function addNpmScript (packageJSON, key, value) {
	const exists = packageJSON.scripts[key] != null;

	// Do nothing if the script exists already
	if (exists) return;

	// Otherwise, set the script in the config
	packageJSON.scripts[key] = value;
}

exports.addNpmScripts = addNpmScripts;