const {getPackageJSON, setPackageJSON} = require("./package-json-helper");

/**
 * A dependency for a package.json file
 * @typedef {object} PackageJSONDependency
 * @property {string} key
 * @property {string} value
 * @property {boolean} isDevDependency
 */

/**
 * Adds a dependency to the PackageJSON file.
 * @param {PackageJSONDependency[]} dependencies
 */
function addDependencies (dependencies) {
	const packageJSON = getPackageJSON();

	// Set the dependencies
	dependencies.forEach(dependency => addDependency(packageJSON, dependency.key, dependency.value, dependency.isDevDependency));

	// Finally, save the new package.json file
	setPackageJSON(packageJSON);
}

/**
 * Adds the given script to the package.json file.
 * @param {PackageJSON} packageJSON
 * @param {string} key
 * @param {string} value
 * @param {boolean} isDevDependency
 */
function addDependency (packageJSON, key, value, isDevDependency) {
	const dependencyKey = isDevDependency ? "devDependencies" : "dependencies";
	const hasDependencyKey = packageJSON.hasOwnProperty(dependencyKey);
	if (!hasDependencyKey) packageJSON[dependencyKey] = {};
	const exists = packageJSON[dependencyKey][key] != null;

	// Do nothing if the script exists already
	if (exists) return;

	// Otherwise, set the script in the config
	packageJSON[dependencyKey][key] = value;
}

exports.addDependencies = addDependencies;