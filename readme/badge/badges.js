const {getPackageJSON} = require("../../package-json/helper/package-json-helper");
const license = require("../../package-json/license").license;

/** @type {PackageJSON} */
const packageJSON = getPackageJSON();
const uriEncodedName = encodeURIComponent(packageJSON.name);

/**
 * A Badge is something that can be placed in a README and look pretty
 * @typedef {object} Badge
 * @property {string} url
 * @property {string} imageUrl
 * @property {string} name
 */

/**
 * Badges to add to a README.
 * @type {Badge[]}
 */
exports.badges = [
	{
		name: "NPM version",
		url: `https://www.npmjs.com/package/${packageJSON.name}`,
		imageUrl: `https://badge.fury.io/js/${uriEncodedName}.svg`
	},
	{
		name: `License-${license.name.toLowerCase()}`,
		url: license.url,
		imageUrl: license.imageUrl
	}
];