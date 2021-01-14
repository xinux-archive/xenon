const path = require('path');

module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'plugin:vue/recommended',
		path.join(__dirname, 'index.js'),
	],
	env: {
		browser: true,
		node: false,
	},
	rules: {
		'vue/attributes-hyphenation': 'off',
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never',
		}],
		'vue/html-indent': ['error', 'tab'],
		'vue/html-self-closing': ['error', {
			html: {
				void: 'always',
				normal: 'never',
				component: 'always',
			},
		}],
		'vue/max-attributes-per-line': ['error', {
			singleline: 4,
			multiline: {
				max: 1,
				allowFirstline: false,
			},
		}],
		'vue/require-default-prop': 'off',
		'vue/require-prop-types': 'off',
	},
};
