import eslint from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";
import prettierConfig from "@wessberg/prettier-config" with {type: "json"};

export default [
	eslint.configs.recommended,
	jsdoc.configs["flat/logical-typescript-error"],
	jsdoc.configs["flat/contents-typescript-error"],
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			ecmaVersion: "latest",
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		},

		rules: {
			"prefer-const": [
				"error",
				{
					destructuring: "all"
				}
			],

			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: "variable",
					format: ["strictCamelCase", "UPPER_CASE"],

					filter: {
						regex: "^_",
						match: false
					}
				},
				{
					selector: "function",
					format: ["strictCamelCase"]
				},
				{
					selector: "parameter",
					format: ["strictCamelCase"],

					filter: {
						regex: "^_",
						match: false
					}
				},
				{
					selector: "typeLike",
					format: ["PascalCase"]
				},
				{
					selector: "enum",
					format: ["PascalCase"],
					suffix: ["Kind"]
				},
				{
					selector: "enumMember",
					format: ["UPPER_CASE"]
				},
				{
					selector: "memberLike",
					format: ["camelCase"],

					filter: {
						regex: "[- ]|^_",
						match: false
					}
				},
				{
					selector: "memberLike",
					modifiers: ["static"],
					format: ["camelCase", "UPPER_CASE"],

					filter: {
						regex: "[- ]|^_",
						match: false
					}
				},
				{
					selector: "memberLike",
					modifiers: ["readonly"],
					format: ["camelCase", "UPPER_CASE"],

					filter: {
						regex: "[- ]|^_",
						match: false
					}
				}
			],

			"@typescript-eslint/explicit-member-accessibility": [
				"error",
				{
					accessibility: "no-public"
				}
			],

			"@typescript-eslint/prefer-regexp-exec": "off",
			curly: ["error", "multi-line"],
			"dot-notation": "error",
			eqeqeq: ["error", "smart"],
			"id-match": "error",
			"jsdoc/no-types": "error",
			"jsdoc/match-description": "off",
			"max-classes-per-file": ["error", 1],

			"no-empty": [
				"error",
				{
					allowEmptyCatch: true
				}
			],

			"no-eval": "error",
			"no-new-wrappers": "error",
			"no-sequences": "error",
			"no-sparse-arrays": "error",
			"no-undef-init": "error",
			"no-var": "error",
			"one-var": ["error", "never"],
			"prefer-object-spread": "error",
			"spaced-comment": "error",
			"use-isnan": "error",
			yoda: "error",
			"no-redeclare": "off",
			"no-shadow": "off",
			"no-underscore-dangle": "off",
			"no-cond-assign": "off",
			"no-constant-condition": "off",
			"no-extra-boolean-cast": "off",
			"no-async-promise-executor": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-this-alias": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-empty-interface": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/no-dynamic-delete": "off",
			"@typescript-eslint/no-confusing-void-expression": "off",
			"@typescript-eslint/no-floating-promises": "off",
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{
					allowNumber: true
				}
			],
			"@typescript-eslint/no-unnecessary-condition": [
				"error",
				{
					allowConstantLoopConditions: true
				}
			],
			"prettier/prettier": [
				"error",
				prettierConfig
			]
		}
	},
	prettier
];
