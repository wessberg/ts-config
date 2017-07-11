const {addDependencies} = require("./add-dependency-helper");

addDependencies([
	{
		key: "tslint",
		value: "latest",
		isDevDependency: true
	},
	{
		key: "typescript",
		value: "latest",
		isDevDependency: true
	},
	{
		key: "husky",
		value: "latest",
		isDevDependency: true
	}
]);