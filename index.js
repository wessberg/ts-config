// Upgrade ignore rules, npm scripts and add tslint and tsconfig files.
require("./flatten-rules/helper/flatten-rules-gitignore");
require("./flatten-rules/helper/flatten-rules-npmignore");
require("./package-json/helper/add-npm-scripts");
require("./package-json/helper/add-dependencies");
require("./package-json/helper/add-main-fields");
require("./package-json/helper/add-repository-fields");
require("./package-json/helper/add-author-field");
require("./package-json/helper/add-engines-field");
require("./tsconfig/helper/add-tsconfig");
require("./tslint/helper/add-tslint");