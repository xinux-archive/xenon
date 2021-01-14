export default {
	data() {
		return {
			xenon: {},
		};
	},

	beforeMount() {
		const { xenon = {} } = this.$site.themeConfig;
		const { labels = {} } = xenon;

		this.xenon = {
			themes: xenon.colorThemes || ['ko\'k', 'qizil', 'pushti'],
			defaultColorTheme: xenon.defaultColorTheme || 'doimiyf',
			defaultDarkTheme: xenon.defaultDarkTheme || false,
			disableDarkTheme: xenon.disableDarkTheme || false,
			disableThemeIgnore: xenon.disableThemeIgnore || false,
			extraOptions: xenon.extraOptions || {},
			labels: {
				darkTheme: labels.darkTheme || "Tungi rejimni yoqish",
				forcedThemes: labels.forcedThemes || "Majburiy rejimni o'chirish",
			},
		};

		this.xenon.hasThemes = Array.isArray(this.xenon.themes) && this.xenon.themes.length > 0;
	},
};
