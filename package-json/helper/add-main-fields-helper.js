const {getPackageJSON, setPackageJSON} = require("./package-json-helper");

/**
 * Adds the given scripts to the package.json file.
 * @param {MainFields} mainFields - An object where the keys are the names of the main fields to add and the values are the corresponding paths.
 */
function addMainFields (mainFields) {
	const packageJSON = getPackageJSON();
	const hasMain = packageJSON.hasOwnProperty("main");
	const hasModule = packageJSON.hasOwnProperty("module");
	const hasBrowser = packageJSON.hasOwnProperty("browser");
	const hasTypes = packageJSON.hasOwnProperty("types");
	const hasTypings = packageJSON.hasOwnProperty("typings");

	// Initialize the scripts to an empty object if the package.json file doesn't have any.
	if (!hasMain) packageJSON.main = mainFields.main;
	if (!hasModule) packageJSON.module = mainFields.module;
	if (!hasBrowser) packageJSON.browser = mainFields.browser;
	if (!hasTypes) packageJSON.types = mainFields.types;
	if (!hasTypings) packageJSON.typings = mainFields.typings;

	// Finally, save the new package.json file
	setPackageJSON(packageJSON);
}

exports.addMainFields = addMainFields;