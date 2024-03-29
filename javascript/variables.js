/* eslint-disable @typescript-eslint/no-var-requires */
const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
	rules: {
		// enforce or disallow variable initializations at definition
		'init-declarations': 'off',

		// disallow the catch clause parameter name being the same as a variable in the outer scope
		'no-catch-shadow': 'off',

		// disallow deletion of variables
		'no-delete-var': 'warn',

		// disallow labels that share a name with a variable
		// https://eslint.org/docs/rules/no-label-var
		'no-label-var': 'warn',

		// disallow specific globals
		'no-restricted-globals': [
			'error',
			{
				name: 'isFinite',
				message:
				'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
			},
			{
				name: 'isNaN',
				message:
				'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
			},
		].concat(confusingBrowserGlobals.map((g) => ({
			name: g,
			message: `Use window.${ g } instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
		}))),

		// disallow declaration of variables already declared in the outer scope
		'no-shadow': 'warn',

		// disallow shadowing of names such as arguments
		'no-shadow-restricted-names': 'warn',

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef': 'warn',

		// disallow use of undefined when initializing variables
		'no-undef-init': 'warn',

		// disallow use of undefined variable
		// https://eslint.org/docs/rules/no-undefined
		// TODO: enable?
		'no-undefined': 'off',

		// disallow declaration of variables that are not used in the code
		'no-unused-vars': [ 'warn', {
			vars: 'all',
			args: 'after-used',
			ignoreRestSiblings: true,
		} ],

		// disallow use of variables before they are defined
		'no-use-before-define': 'warn',

		'no-magic-numbers': [ 'warn', {
			ignoreDefaultValues: true,
			ignoreArrayIndexes: true,
			ignoreClassFieldInitialValues: true,
			enforceConst: true,
			detectObjects: false,
		} ],
	},
};
