const {join} = require("path");
const {readFileSync, writeFileSync, existsSync} = require("fs");
const DIRECTORY = process.cwd();
const TSLINT_PATH = join(DIRECTORY, "tslint.json");
const LIBRARY_TSLINT_PATH = "./node_modules/@wessberg/ts-config/tslint/tslint.json";

// Updates (or creates) the tslint file in the root directory.
writeToTslintFile(
	Object.assign(
		getTslint(),
		getTslintExtension()
	)
);

/**
 * Returns an object representing the current properties of the existing tslint file, if any such one exists.
 * @returns {{}}
 */
function getTslint () {
	if (!existsSync(TSLINT_PATH)) return {};

	const buffer = readFileSync(TSLINT_PATH);
	return JSON.parse(buffer.toString());
}

/**
 * Returns an object of the properties to add to the tslint file.
 * @returns {object}
 */
function getTslintExtension () {
	return {
		extends: LIBRARY_TSLINT_PATH
	}
}

/**
 * Updates the tslint file.
 * @param {object} tslint
 */
function writeToTslintFile (tslint) {
	writeFileSync(TSLINT_PATH, JSON.stringify(tslint, null, "\t"));
}