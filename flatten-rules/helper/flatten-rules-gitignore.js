const {gitignore} = require("../gitignore");
const {flattenRules} = require("./flatten-rules-helper");
const {join} = require("path");
const DIRECTORY = process.cwd();
const GIT_IGNORE_PATH = join(DIRECTORY, ".gitignore");

// Here's the ignore rules we'd like to at least have.
flattenRules(gitignore, GIT_IGNORE_PATH);