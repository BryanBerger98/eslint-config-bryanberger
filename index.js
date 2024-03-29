module.exports = {
	env: { es6: true },
	extends: [
		'./javascript',
		'./typescript',
		'./imports',
		'./react',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: { 'max-len': 0 },
};
