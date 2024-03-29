module.exports = {
	extends: [
		'./javascript/variables.js',
		'./javascript/style.js',
		'./javascript/node.js',
		'./javascript/es6.js',
		'./javascript/errors.js',
		'./javascript/best-practices.js',
		'./javascript/strict.js',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
