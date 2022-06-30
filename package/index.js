const base = require('./src/base.js');
const prettier = require('./src/prettier.js');
const react = require('./src/react.js');

module.exports = {
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin/eslint/recommended',
		'plugin/prettier/recommended',
		'plugin/react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
	],
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		jest: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		...base,
		...prettier,
		...react,
	},
};
