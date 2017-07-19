const {getPackageJSON, setPackageJSON} = require("./package-json-helper");

/**
 * Adds or normalizes the contributors field in a package.json file.
 * @param {License} license
 */
function addLicenseField ({name}) {

	/** @type {PackageJSON} */
	const packageJSON = getPackageJSON();
	const hasLicense = packageJSON.hasOwnProperty("license");
	if (!hasLicense) {
		packageJSON.license = name;

		// Finally, save the new package.json file
		setPackageJSON(packageJSON);
	}
}

exports.addLicenseField = addLicenseField;