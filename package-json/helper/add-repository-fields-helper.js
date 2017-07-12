const {getPackageJSON, setPackageJSON} = require("./package-json-helper");

/**
 *
 * @param {string|?} packageName
 * @returns {string}
 */
function detectProbableRepoName (packageName) {
	if (packageName == null) return "";
	const isScoped = packageName.startsWith("@") && packageName.includes("/");
	if (!isScoped) return packageName;
	const regex = /@([^\/]+)\/(.+)/;
	const matches = packageName.match(regex);

	// Fall back to the package name.
	if (matches == null) return packageName;
	const [, scope, library] = matches;
	return `https://github.com/${scope}/${library}`;
}

/**
 * Adds a repository property to the package.json file (if it doesn't exist already)
 */
function addRepositoryFields () {

	/** @type {PackageJSON} */
	const packageJSON = getPackageJSON();
	const hasRepository = packageJSON.hasOwnProperty("repository");
	const hasBugs = packageJSON.hasOwnProperty("bugs");
	const baseName = detectProbableRepoName(packageJSON.name);

	// Set the fields if they don't already exist
	if (!hasRepository) {
		const repoUrl = `${baseName}.git`;
		packageJSON.repository = {
			type: "git",
			url: repoUrl
		};
	}

	if (!hasBugs) {
		const bugUrl = `${baseName}/issues`;
		packageJSON.bugs = {
			url: bugUrl
		};
	}

	// Finally, save the new package.json file
	setPackageJSON(packageJSON);
}

exports.addRepositoryFields = addRepositoryFields;