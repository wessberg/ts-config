/** @type {Badge[]} */
const {addBadgeToReadme} = require("./add-badges-helper");
const {badges} = require("../badges");

for (const badge of badges) addBadgeToReadme(badge);