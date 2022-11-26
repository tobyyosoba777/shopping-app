module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,db,js,css,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};