const {join} = require("path");
const {writeFileSync} = require("fs");
const DIRECTORY = process.cwd();
const TSCONFIG_PATH = join(DIRECTORY, "tsconfig.json");
const TSCONFIG_DIST_PATH = join(DIRECTORY, "tsconfig.dist.json");
const LIBRARY_TSCONFIG_PATH = "./node_modules/@wessberg/ts-config/tsconfig/tsconfig.json";

// Create the tsconfig.json file
writeFileSync(TSCONFIG_PATH, JSON.stringify({
	extends: LIBRARY_TSCONFIG_PATH
}, null, "\t"));

// Create the tsconfig.dist.json file
writeFileSync(TSCONFIG_DIST_PATH, JSON.stringify({
	extends: "./tsconfig.json",
	include: ["src/**/*.*"],
	compilerOptions: {
		declaration: true
	}
}, null, "\t"));