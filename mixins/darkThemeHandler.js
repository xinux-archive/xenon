export default {
	data() {
		return {
			darkTheme: false,
			ignoreForcedThemes: false,
		};
	},

	mounted() {
		if (!this.xenon.disableDarkTheme) {
			if (!this.xenon.defaultDarkTheme && !this.getItem('dark-theme')) {
				this.setItem('dark-theme', true);
			}
			if (this.getItem('dark-theme')) {
				this.darkTheme = true;
				this.toggleDarkTheme();
			}
		}

		if (
			!this.xenon.disableThemeIgnore
      && this.getItem('ignore-forced-themes')
		) {
			this.ignoreForcedThemes = true;
		}
	},

	methods: {
		/**
     *
     * @param {*} key
     * @param {*} value
     * @returns string
     */
		setItem(key, value) {
			return localStorage.setItem(key, value);
		},
		/**
     *
     * @param {*} key
     * @returns string
     */
		getItem(key) {
			return localStorage.getItem(key);
		},
		// eslint-disable-next-line consistent-return
		toggleDarkTheme() {
			if (this.darkTheme) {
				document.body.classList.add('xenon-theme-dark');
				return this.setItem('dark-theme', true);
			}

			document.body.classList.remove('xenon-theme-dark');
			this.setItem('dark-theme', false);
		},

		// eslint-disable-next-line consistent-return
		toggleForcedThemes() {
			if (this.ignoreForcedThemes) {
				this.setTheme(this.getItem('color-theme'));
				return this.setItem('ignore-forced-themes', true);
			}

			localStorage.removeItem('ignore-forced-themes');
		},
	},
};
