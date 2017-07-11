/**
 * Here's the dependencies our package.json should at least have.
 * @type {PackageJSONDependency[]}
 */
exports.dependencies = [
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
	},
	{
		key: "tslib",
		value: "latest",
		isDevDependency: false
	}
];