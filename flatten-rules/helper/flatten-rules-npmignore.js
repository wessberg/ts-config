const {npmignore} = require("../npmignore");
const {flattenRules} = require("./flatten-rules-helper");
const {join} = require("path");
const DIRECTORY = process.cwd();
const NPM_IGNORE_PATH = join(DIRECTORY, ".npmignore");

// Here's the ignore rules we'd like to at least have.
flattenRules(npmignore, NPM_IGNORE_PATH);