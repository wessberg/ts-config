const {getPackageJSON, setPackageJSON} = require("./package-json-helper");

/**
 * The existing author will either be a string or an object with a name, email and url field.
 * @param {Author|string} author
 * @returns {object}
 */
function getExistingAuthor (author) {
	if (author == null) return {};

	// If the author is a string, parse it for fields.
	if (typeof author === "string") {
		// Parse it.
		const nameEmailAndUrlRegex = /(.*)\s+<([^>]*)>\s*\(([^)]*)\)/;
		const nameAndEmailRegex = /(.*)\s+<([^>]*)>\s*$/;
		const nameRegex = /(.*)/;
		const nameUrlRegex = /([^(<>]+)\s+\(([^)]*)\)/;

		/**@type {RegExp|null}*/
		let match = null;

		let regexes = [nameEmailAndUrlRegex, nameAndEmailRegex, nameUrlRegex, nameRegex];
		let cursor = 0;
		while (match == null && cursor < regexes.length) {
			match = author.match(regexes[cursor]);
			if (match != null) break;
			cursor++;
		}

		// Fall back to an empty object if none of the regexes matched the name
		if (match == null) return {};

		let [, name, email, url] = match;
		return Object.assign(
			{},
			name == null ? {} : {name: name.trim()},
			email == null ? {} : {email: email.trim()},
			url == null ? {} : {url: url.trim()}
		);
	} else {
		// It is already an object. Return the properties and fall back to raw strings for the properties that don't exist in it.
		return Object.assign(
			{},
			author.name == null ? {} : {name: author.name},
			author.email == null ? {} : {email: author.email},
			author.url == null ? {} : {url: author.url}
		);
	}
}

/**
 * Adds or normalizes the author field in a package.json file.
 * @param {Author} author
 */
function addAuthorField ({name, email, url}) {

	/** @type {PackageJSON} */
	const packageJSON = getPackageJSON();

	packageJSON.author = Object.assign(
		{name, email, url},
		getExistingAuthor(packageJSON.author)
	);

	// Finally, save the new package.json file
	setPackageJSON(packageJSON);
}

exports.addAuthorField = addAuthorField;