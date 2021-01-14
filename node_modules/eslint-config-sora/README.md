# eslint-config-sora
>[Shareable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs.html)

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/eslint-config-sora"><img src="https://img.shields.io/npm/v/eslint-config-sora.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/eslint-config-sora"><img src="https://img.shields.io/npm/dt/eslint-config-sora.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/Danktuary/eslint-config-sora"><img src="https://david-dm.org/Danktuary/eslint-config-sora/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
		<a href="https://nodei.co/npm/eslint-config-sora/"><img src="https://nodei.co/npm/eslint-config-sora.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Installation

```bash
yarn add -D eslint-config-sora
```

## Usage

This config assumes a Node, ES6 environment by default. The Vue config uses a browser environment. In your `.eslintrc.js` file:

```js
module.exports = {
	extends: 'sora',
};
```

For Vue:

```js
module.exports = {
	extends: 'sora/vue',
};
```

Using the Vue config will require you to additionally install `eslint-plugin-vue` and `babel-eslint`.

```bash
yarn add -D babel-eslint eslint-plugin-vue
```
