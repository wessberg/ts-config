const {replaceReadmeSection} = require("../../helper/readme");

const {readFileSync, existsSync} = require("fs");
const {join} = require("path");
const DIRECTORY = process.cwd();
const CHANGELOG_PATH = join(DIRECTORY, "CHANGELOG.md");

/**
 * Adds the changelog from the root directory to the README.
 */
function addChangelogToReadme () {
	replaceReadmeSection("changelog", getChangelog());
}

/**
 * Gets the string contents of the changelog
 * @returns {string}
 */
function getChangelog () {
	if (!existsSync(CHANGELOG_PATH)) return "";
	const buffer = readFileSync(CHANGELOG_PATH);
	return buffer.toString();
}

exports.addChangelogToReadme = addChangelogToReadme;