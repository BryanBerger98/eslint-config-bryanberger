module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	env: {
		es6: true,
		node: true,
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest' },
	plugins: [
		'@typescript-eslint',
		'import',
		'@stylistic',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		'@stylistic/ts/object-curly-spacing': [
			'warn',
			'always',
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'warn',
	},
	settings: {
		'import/extensions': [
			'.tsx',
			'.ts',
		],
		'import/parsers': {
			'@typescript-eslint/parser': [
				'.ts',
				'.tsx',
			],
		},
		'import/resolver': { typescript: { project: '.' } },
	},
};
