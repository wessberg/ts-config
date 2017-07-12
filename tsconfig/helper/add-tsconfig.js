const {join} = require("path");
const {writeFileSync, readFileSync, existsSync} = require("fs");
const DIRECTORY = process.cwd();
const TSCONFIG_PATH = join(DIRECTORY, "tsconfig.json");
const TSCONFIG_DIST_PATH = join(DIRECTORY, "tsconfig.dist.json");
const LIBRARY_TSCONFIG_PATH = "./node_modules/@wessberg/ts-config/tsconfig/tsconfig.json";

// Updates (or creates) the tsconfig and tsconfig.dist files in the root directory.
writeToTsconfigFiles(
	Object.assign(
		getTsconfig(),
		getTsconfigExtension()
	),
	Object.assign(
		getTsconfigDist(),
		getTsconfigDistExtension()
	)
);

/**
 * Returns an object representing the current properties of the existing tsconfig file, if any such one exists.
 * @returns {{}}
 */
function getTsconfig () {
	if (!existsSync(TSCONFIG_PATH)) return {};

	const buffer = readFileSync(TSCONFIG_PATH);
	return JSON.parse(buffer.toString());
}

/**
 * Returns an object representing the current properties of the existing tsconfig file, if any such one exists.
 * @returns {{}}
 */
function getTsconfigDist () {
	if (!existsSync(TSCONFIG_DIST_PATH)) return {};

	const buffer = readFileSync(TSCONFIG_DIST_PATH);
	return JSON.parse(buffer.toString());
}

/**
 * Returns an object of the properties to add to the tsconfig file.
 * @returns {object}
 */
function getTsconfigExtension () {
	return {
		extends: LIBRARY_TSCONFIG_PATH
	};
}

/**
 * Returns an object of the properties to add to the tsconfig.dist file.
 * @returns {object}
 */
function getTsconfigDistExtension () {
	return {
		extends: "./tsconfig.json",
		include: ["src/**/*.*"],
		compilerOptions: {
			declaration: true
		}
	};
}

/**
 * Updates the tsconfig and tsconfig.dist files
 * @param {object} tsconfig
 * @param {object} tsconfigDist
 */
function writeToTsconfigFiles (tsconfig, tsconfigDist) {
	writeFileSync(TSCONFIG_PATH, JSON.stringify(tsconfig, null, "\t"));
	writeFileSync(TSCONFIG_DIST_PATH, JSON.stringify(tsconfigDist, null, "\t"));
}