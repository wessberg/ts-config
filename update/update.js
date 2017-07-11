// Upgrade ignore rules, npm scripts and add tslint and tsconfig files.
require("../flatten-rules/flatten-rules-gitignore");
require("../flatten-rules/flatten-rules-npmignore");
require("../package-json/add-npm-scripts");
require("../package-json/add-dependencies");
require("../tsconfig/add-tsconfig");
require("../tslint/add-tslint");