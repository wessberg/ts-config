const {readFileSync, existsSync, writeFileSync} = require("fs");

/**
 * Flattens the ignore rules of the given ignore config (.gitignore or .npmignore)
 * @param {string[]} rules
 * @param {string} path
 */
function flattenRules (rules, path) {
	// Read the existing contents of the .npmignore file.
	const fileContents = (existsSync(path) ? readFileSync(path) : "").toString();

// Split by newlines
	const existingRules = fileContents.split("\n");

// Copy the fileContents over to a new string
	let newRules = `${fileContents}`;
	rules.forEach((rule, index) => {
		// Don't prefix the rule with a blank line if it is empty already.
		const includePrefixWhitespace = index > 0 || fileContents.length > 0;
		if (!existingRules.includes(rule)) newRules += includePrefixWhitespace ? `\n${rule}` : rule;
	});

// Replace the file with the new contents
	writeFileSync(path, newRules);
}

exports.flattenRules = flattenRules;