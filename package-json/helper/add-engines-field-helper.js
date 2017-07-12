const {getPackageJSON, setPackageJSON} = require("./package-json-helper");

/**
 * Adds (missing) engines to the package.json file
 * @param {Engines} engines
 */
function addEnginesField (engines) {

	/** @type {PackageJSON} */
	const packageJSON = getPackageJSON();
	const hasEnginesKey = packageJSON.hasOwnProperty("engines");
	if (!hasEnginesKey) packageJSON.engines = {};

	Object.keys(engines).forEach(key => addEngine(packageJSON, key, engines[key]));


	// Finally, save the new package.json file
	setPackageJSON(packageJSON);
}

/**
 * Adds an engine to the package.json's "engines" field.
 * @param packageJSON
 * @param key
 * @param value
 */
function addEngine (packageJSON, key, value) {
	const exists = packageJSON.engines[key] != null;

	// Do nothing if the script exists already
	if (exists) return;

	// Otherwise, set the script in the config
	packageJSON.engines[key] = value;
}

exports.addEnginesField = addEnginesField;