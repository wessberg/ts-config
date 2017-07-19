const LICENSE_NAME = "MIT";

/**
 * A License has a URL and an imageUrl
 * @typedef {object} LicensePath
 * @property {string} url
 * @property {string} imageUrl
 */

/**
 * A License has a name, a URL and a imageURL
 * @typedef {object} License
 * @property {string} name
 * @property {string} url
 * @property {string} imageUrl
 */

/**
 * A Map between license identifying names and License objects.
 * @type {object.<string, LicensePath>}
 */
const licenseMap = {
	"apache-2.0": {url: "https://opensource.org/licenses/Apache-2.0", imageUrl: "https://img.shields.io/badge/License-Apache%202.0-blue.svg"},
	"bsd-2-clause": {url: "https://opensource.org/licenses/BSD-2-Clause", imageUrl: "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg"},
	"Bsd-3-clause": {url: "https://opensource.org/licenses/BSD-3-Clause", imageUrl: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"},
	"cc-by-4.0": {url: "https://creativecommons.org/licenses/by/4.0/", imageUrl: "https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg"},
	"cc-by-sa-4.0": {url: "https://creativecommons.org/licenses/by-sa/4.0/", imageUrl: "https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg"},
	"cc-by-nc-4.0": {url: "https://creativecommons.org/licenses/by-nc/4.0/", imageUrl: "https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg"},
	"cc-by-nd-4.0": {url: "https://creativecommons.org/licenses/by-nd/4.0/", imageUrl: "https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg"},
	"cc-by-nc-sa-4.0": {url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", imageUrl: "https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg"},
	"cc-by-nc-nd-4.0": {url: "https://creativecommons.org/licenses/by-nc-nd/4.0/", imageUrl: "https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg"},
	"epl-1.0": {url: "https://opensource.org/licenses/EPL-1.0", imageUrl: "https://img.shields.io/badge/License-EPL%201.0-red.svg"},
	"gpl-3.0": {url: "https://img.shields.io/badge/License-GPL%20v3-blue.svg", imageUrl: "https://www.gnu.org/licenses/gpl-3.0"},
	"gpl-2.0": {url: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html", imageUrl: "https://img.shields.io/badge/License-GPL%20v2-blue.svg"},
	"agpl-3.0": {url: "https://www.gnu.org/licenses/agpl-3.0", imageUrl: "https://img.shields.io/badge/License-AGPL%20v3-blue.svg"},
	"lgpl-3.0": {url: "https://www.gnu.org/licenses/lgpl-3.0", imageUrl: "https://img.shields.io/badge/License-LGPL%20v3-blue.svg"},
	"gfdl-1.3": {url: "https://www.gnu.org/licenses/fdl-1.3", imageUrl: "https://img.shields.io/badge/License-FDL%20v1.3-blue.svg"},
	"ipl-1.0": {url: "https://opensource.org/licenses/IPL-1.0", imageUrl: "https://img.shields.io/badge/License-IPL%201.0-blue.svg"},
	"mit": {url: "https://opensource.org/licenses/MIT", imageUrl: "https://img.shields.io/badge/License-MIT-yellow.svg"},
	"mpl-2.0": {url: "https://opensource.org/licenses/MPL-2.0", imageUrl: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"},
	"odc-by": {url: "https://opendatacommons.org/licenses/by/", imageUrl: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg"},
	"odbl-1.0": {url: "https://opendatacommons.org/licenses/odbl/", imageUrl: "https://img.shields.io/badge/License-ODbL-brightgreen.svg"},
	"pddl-1.0": {url: "https://opendatacommons.org/licenses/pddl/", imageUrl: "https://img.shields.io/badge/License-PDDL-brightgreen.svg"},
	"artistic-1.0-perl": {url: "http://dev.perl.org/licenses/artistic.html", imageUrl: "https://img.shields.io/badge/License-Perl-0298c3.svg"},
	"artistic-2.0": {url: "https://opensource.org/licenses/Artistic-2.0", imageUrl: "https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg"},
	"zlib": {url: "https://opensource.org/licenses/Zlib", imageUrl: "https://img.shields.io/badge/License-Zlib-lightgrey.svg"}
};

/** @type {License} */
const license = Object.assign({name: LICENSE_NAME}, licenseMap[LICENSE_NAME.toLowerCase()]);

/** @type {License} */
exports.license = license;