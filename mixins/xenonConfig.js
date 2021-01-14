export default {
	data() {
		return {
			xenon: {},
		};
	},

	mounted() {
		const { xenon = {} } = this.$site.themeConfig;

		this.xenon = {
			themes: xenon.colorThemes || ['blue', 'red', 'purple'],
			defaultColorTheme: xenon.defaultColorTheme || 'default',
			defaultDarkTheme: xenon.defaultDarkTheme || false,
			disableDarkTheme: xenon.disableDarkTheme || false,
			disableThemeIgnore: xenon.disableThemeIgnore || false,
			extraOptions: xenon.extraOptions || {},
		};

		this.xenon.hasThemes = Array.isArray(this.xenon.themes) && this.xenon.themes.length > 0;
	},
};
