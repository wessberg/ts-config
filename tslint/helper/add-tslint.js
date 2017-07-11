const {join} = require("path");
const {writeFileSync} = require("fs");
const DIRECTORY = process.cwd();
const TSLINT_PATH = join(DIRECTORY, "tslint.json");
const LIBRARY_TSLINT_PATH = "./node_modules/@wessberg/ts-config/tslint/tslint.json";

// Read the existing contents of the .npmignore file.
writeFileSync(TSLINT_PATH, JSON.stringify({
	extends: LIBRARY_TSLINT_PATH
}, null, "\t"));