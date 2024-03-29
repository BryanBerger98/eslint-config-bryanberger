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
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/object-curly-spacing': [
			'warn',
			'always',
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: { '{}': false },
				extendDefaults: true,
			},
		],
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
