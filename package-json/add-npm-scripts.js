const {addNpmScripts} = require("./add-npm-scripts-helper");

addNpmScripts({
	"clean:dist": "rm -r -f dist",
	"clean:compiled": "rm -r -f compiled",
	"clean": "npm run clean:dist && npm run clean:compiled",
	"tsc:dist:cjs": "tsc --module commonjs --outDir dist/cjs -p tsconfig.dist.json",
	"tsc:dist:es2015": "tsc --module es2015 --outDir dist/es2015 -p tsconfig.dist.json",
	"tsc:test": "tsc --module commonjs --target es2017 --sourceMap",
	"build:pre": "npm run clean",
	"build:cjs": "npm run tsc:dist:cjs",
	"build:es2015": "npm run tsc:dist:es2015",
	"build": "npm run build:pre && npm run build:cjs && npm run build:es2015",
	"tslint": "tslint -c tslint.json -p tsconfig.json",
	"validate": "npm run tslint && npm run test",
	"pretest": "npm run clean:compiled && npm run tsc:test",
	"test": "NODE_ENV=TEST echo \"skipping tests...\"",
	"posttest": "npm run clean:compiled",
	"prepublish": "npm run validate && npm run build",
	"precommit": "npm run validate && exit 0",
	"prepush": "npm run validate && exit 0",
	"publish:major": "npm version major && git push && npm publish",
	"publish:minor": "npm version minor && git push && npm publish",
	"publish:patch": "npm version patch && git push && npm publish"
});