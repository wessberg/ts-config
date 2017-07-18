const {readFileSync, writeFileSync, existsSync} = require("fs");
const {join} = require("path");
const DIRECTORY = process.cwd();
const README_PATHS = [join(DIRECTORY, "README.md"), join(DIRECTORY, "readme.md")];

/**
 * Replaces a section in the README (or creates a new one if it doesn't exist already)
 * @param {string} section
 * @param {string} replacement
 * @returns {string}
 */
function replaceReadmeSection (section, replacement) {
	const readme = getReadme();
	const startsAtRegex = new RegExp(`#+\\s*${section}`, "i");
	const endsAtRegex = /\n#+\s*\w+/i;
	const startsAtMatch = readme.match(startsAtRegex);
	if (startsAtMatch == null) {
		return `${readme}\n## ${capitalize(section)}\n${replacement}\n`;
	}

	const sectionContentsStartsAt = startsAtMatch.index + startsAtMatch[0].length;

	const endsAtMatch = readme.slice(sectionContentsStartsAt).match(endsAtRegex);

	const nextSectionHeadlineStartsAt = endsAtMatch == null ? -1 : endsAtMatch.index + sectionContentsStartsAt;

	const before = readme.slice(0, sectionContentsStartsAt);
	const after = nextSectionHeadlineStartsAt === -1 ? "" : readme.slice(nextSectionHeadlineStartsAt);
	const afterStartsWithNewLine = readme[nextSectionHeadlineStartsAt] === "\n";
	const afterNewLine = afterStartsWithNewLine ? "" : "\n";
	const newContents = `${before}\n\n${replacement}${afterNewLine}${after}`;
	saveReadme(newContents, getReadmePath());
}

/**
 * Gets the existing contents of the README, if any.
 * @returns {string}
 */
function getReadme () {
	for (const path of README_PATHS) {
		if (existsSync(path)) {
			const buffer = readFileSync(path);
			return buffer.toString();
		}
	}
	return "";
}

/**
 * Gets the path to the README in the root directory.
 * @returns {string}
 */
function getReadmePath () {
	for (const path of README_PATHS) {
		if (existsSync(path)) {
			return path;
		}
	}
	// The first path (the uppercased one) is the preferable one.
	return README_PATHS[0];
}

/**
 * Saves the README in the root directory.
 * @param {string} readme
 * @param {string} path
 */
function saveReadme (readme, path) {
	// The first path is the preferable one.
	writeFileSync(path, readme);
}

/**
 * Capitalizes the given string.
 * @param {string} str
 * @returns {string}
 */
function capitalize (str) {
	if (str.length === 0) return str;
	const first = str.slice(0, 1).toUpperCase();
	if (str.length < 2) return first;
	return `${first}${str.slice(1)}`;
}

exports.replaceReadmeSection = replaceReadmeSection;