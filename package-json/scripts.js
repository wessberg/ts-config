/**
 * Here's the scripts we want to at least have in our package.json
 * @type {object}
 */
exports.scripts = {
	"changelog:generate": "conventional-changelog --outfile CHANGELOG.md --release-count 0",
	"readme:changelog": "node node_modules/@wessberg/ts-config/readme/changelog/helper/add-changelog.js",
	"readme:badges": "node node_modules/@wessberg/ts-config/readme/badge/helper/add-badges.js",
	"readme:refresh": "npm run changelog:generate && npm run readme:changelog && npm run readme:badges",
	"commit:readme": "npm run readme:refresh && git commit -am \"Bumped version\" --no-verify || true",
	"clean:dist": "rm -r -f dist",
	"clean:compiled": "rm -r -f compiled",
	"clean": "npm run clean:dist && npm run clean:compiled",
	"tsc:dist:umd": "tsc --module umd --outDir dist/umd -p tsconfig.dist.json",
	"tsc:dist:es2015": "tsc --module es2015 --outDir dist/es2015 -p tsconfig.dist.json",
	"tsc:test": "tsc --module umd --target es2017 --sourceMap",
	"build:umd": "npm run tsc:dist:umd",
	"build:es2015": "npm run tsc:dist:es2015",
	"prebuild": "npm run clean",
	"build": "npm run build:umd & npm run build:es2015",
	"tslint": "tslint -c tslint.json -p tsconfig.json",
	"validate": "npm run tslint && npm run test",
	"pretest": "npm run clean:compiled && npm run tsc:test",
	"test": "NODE_ENV=TEST echo \"skipping tests...\"",
	"posttest": "npm run clean:compiled",
	"prepublishOnly": "npm run validate && npm run build",
	"precommit": "npm run tslint && exit 0",
	"prepush": "npm run validate && exit 0",
	"publish:major": "npm version major && npm run commit:readme && git push --no-verify && npm publish",
	"publish:minor": "npm version minor && npm run commit:readme && git push --no-verify && npm publish",
	"publish:patch": "npm version patch && npm run commit:readme && git push --no-verify && npm publish"
};