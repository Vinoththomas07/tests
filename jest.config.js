module.exports={
	verbose:true,
	"preset": "react-native",
	"collectCoverage": true,
	"moduleDirectories": [
		"node_modules",
		"src"
	],
	"transform": {
		"^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
	},
	"setupFilesAfterEnv": [
		"<rootDir>/jest/setup.js"
	],
	"transformIgnorePatterns": ['node_modules/(?!(react-native|@codler|react-native-button|native-base-.*|react-native-.*)/)'],
	"coveragePathIgnorePatterns": [
		"/node_modules/",
		"/jest"
	]
}