const {saveReadme, getReadme, getReadmePath} = require("../../helper/readme");

/**
 * kebab-cases (dash-cases) the given string.
 * @param {string} str
 * @returns {string}
 */
function kebabCase (str) {
	// Lower cases the string
	let _str = str;
	if (!/[a-zæøåàáäâëêéèïîíìöòóôüúùû]/.test(_str)) _str = str.toLowerCase();
	return _str.replace(/(?:_)[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]{2,}|[A-Z]{2,}(?=_)/g, $1 => ` ${ $1.toLowerCase() }`).replace(/[-_+]/g, " ").replace(/[ \t\r]*[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]+[ \t\r]+/g, $1 => ` ${ $1.toLowerCase() } `).replace(/[A-ZÅÀÁÂÄÆËÊÉÈÏÎÍÌÖÔÒÓØÜÛÚÙ]/g, $1 => ` ${ $1.toLowerCase() }`).replace(/^[ \t\r]+/g, "").replace(/\s{2,}/g, " ").replace(/\s+/g, "-");
}

/**
 * Adds the given Badge to the README
 * @param {Badge} badge
 */
function addBadgeToReadme ({name, url, imageUrl}) {
	/** @type {string} */
	const readme = getReadme();

	// Check if the README already has that badge.
	const specificBadgeRegex = new RegExp(`\\[!\\[${name}]*\\]\\[[^\\]]*\\]\\]\\[[^\\]]*\\]`, "i");
	const specificBadgeMatch = readme.match(specificBadgeRegex);

	// If the file already has the badge, do nothing
	if (specificBadgeMatch != null) return;

	// Otherwise, generate a badge
	const dashCasedName = kebabCase(name);
	const newBadgeString = `\n[![${name}][${dashCasedName}-image]][${dashCasedName}-url]\n\n` + `[${dashCasedName}-url]: ${url}\n\n` + `[${dashCasedName}-image]: ${imageUrl}`;

	// Check if the README has *any* badge.
	const anyBadgeRegex = /\[!\[[^\]]*]\[[^\]]*]]\[[^\]]*]/;
	const anyBadgeMatch = readme.match(anyBadgeRegex);

	// If it has, add the badge after the existing one.
	if (anyBadgeMatch != null) {
		const existingBadgeEndsAt = anyBadgeMatch.index + anyBadgeMatch[0].length;
		const contentsUpToAfterExistingBadge = readme.slice(0, existingBadgeEndsAt);
		const contentsFromAfterExistingBadge = readme.slice(existingBadgeEndsAt);
		saveReadme(`${contentsUpToAfterExistingBadge}${newBadgeString}${contentsFromAfterExistingBadge}`, getReadmePath());
	} else {
		// Check for the first headline of the README.
		const firstHeadlineRegex = /#+\s*[^\n]*/;
		const firstHeadlineMatch = readme.match(firstHeadlineRegex);

		// If the README has not headline, add the badge in top of the file.
		if (firstHeadlineMatch == null) saveReadme(`${newBadgeString}${readme}`, getReadmePath());
		else {
			// Otherwise, add the badge after the headline:
			const firstHeadlineEndsAt = firstHeadlineMatch.index + firstHeadlineMatch[0].length;
			const contentsUpToAfterFirstHeadline = readme.slice(0, firstHeadlineEndsAt);
			const contentsFromAfterFirstHeadline = readme.slice(firstHeadlineEndsAt);
			saveReadme(`${contentsUpToAfterFirstHeadline}${newBadgeString}${contentsFromAfterFirstHeadline}`, getReadmePath());
		}
	}
}

exports.addBadgeToReadme = addBadgeToReadme;