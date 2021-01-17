<template>
	<div class="theme-container">
		<div class="theme-default-content">
			<h1>404</h1>

			<blockquote>{{ getMsg() }}</blockquote>

			<RouterLink to="/">
				→ {{ getBtns() }}
			</RouterLink>
		</div>
	</div>
</template>

<script>
import xenonConfig from '@theme/mixins/xenonConfig.js';
import themeHandler from '@theme/mixins/themeHandler.js';
import darkThemeHandler from '@theme/mixins/darkThemeHandler.js';

const msgs = [
	`Chunaman, axir siz ham ataydan qilmadingizku!`,
	`Odamam kelib kelib shu martasida adashadimi-a?`,
	`O'ziyam yugurib kelib qovun qo'ydingizda...`,
];

const btns = [
	`Orqaga qayting...`,
	`Choping`,
	`O'ylab ko'ring`,
	`Sinab ko'ring`,
];

export default {
	mixins: [xenonConfig, themeHandler, darkThemeHandler],
	methods: {
		getMsg() {
		  return msgs[Math.floor(Math.random() * msgs.length)];
		},
		getBtns() {
			return btns[Math.floor(Math.random() * btns.length)];
		},
	},
};
</script>

<style src="../styles/variables.styl" lang="stylus"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style src="../styles/themes/dark.styl" lang="stylus"></style>
<style src="../styles/themes/blue.styl" lang="stylus"></style>
<style src="../styles/themes/red.styl" lang="stylus"></style>
<style src="../styles/themes/purple.styl" lang="stylus"></style>
