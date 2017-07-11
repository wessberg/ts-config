/**
 * Common ignore-rules for .npmignore and .gitignore
 * @type {string[]}
 */
exports.common = [
	// Directories
	"/compiled/",
	"/.idea/",
	"/.cache/",
	"/.vscode/",

	// Logs
	"*.log",
	"/logs/",
	"*.log",
	"npm-debug.log*",

	// Coverage
	"/lib-cov/",
	"/coverage/",
	"/.nyc_output/",
	"/.grunt/",

	// Packages
	"*.7z",
	"*.dmg",
	"*.gz",
	"*.iso",
	"*.jar",
	"*.rar",
	"*.tar",
	"*.zip",
	".tgz",

	// Environment variables
	".env",

	// OS generated stuff
	".DS_Store",
	".DS_Store?",
	"._*",
	".Spotlight-V100",
	".Trashes",
	"ehthumbs.db",
	"Thumbs.db"
];