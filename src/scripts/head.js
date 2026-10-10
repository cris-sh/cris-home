// Inlined into <head> by Base.astro and run before first paint, so the page never
// flashes the wrong theme or language. Kept in its own file because astro.config.mjs
// hashes these exact bytes into the Content Security Policy.
(() => {
	const root = document.documentElement;
	const locales = ['en', 'es'];
	const read = (key) => {
		try {
			return localStorage.getItem(key);
		} catch {
			return null;
		}
	};

	// Theme: an explicit choice wins, otherwise follow the device, live.
	const dark = matchMedia('(prefers-color-scheme: dark)');
	const system = () => (dark.matches ? 'dark' : 'light');
	const theme = (value = read('theme')) => {
		root.dataset.theme = value === 'light' || value === 'dark' ? value : system();
	};

	// Language: an explicit choice wins, otherwise the first browser language we speak.
	const lang = (value = read('lang')) => {
		const preferred = (navigator.languages || [navigator.language])
			.map((tag) => tag.slice(0, 2).toLowerCase())
			.find((tag) => locales.includes(tag));
		const next = locales.includes(value) ? value : preferred || locales[0];
		root.lang = next;
		const title = root.getAttribute('data-title-' + next);
		if (title) document.title = title;
	};

	theme();
	lang();
	dark.addEventListener('change', () => theme());
	// Keep other open tabs in step.
	addEventListener('storage', () => {
		theme();
		lang();
	});
	window.__site = { theme, lang, system };

	// The staggered entrance plays once per session, then gets out of the way.
	try {
		if (!sessionStorage.getItem('seen')) {
			sessionStorage.setItem('seen', '1');
			root.dataset.intro = '';
			setTimeout(() => delete root.dataset.intro, 1200);
		}
	} catch {}

	// Shared-element transition between a project's row and its page. The page
	// title carries the name in CSS; here the matching row gets it for the one
	// navigation that needs it, so only a single element ever holds the name.
	const tagRow = (url) => {
		const path = new URL(url).pathname;
		document.querySelectorAll('[data-project-title]').forEach((el) => {
			el.style.viewTransitionName = '';
		});
		const title = document.querySelector(
			'[data-locale="' + root.lang + '"] a[href="' + path + '"] [data-project-title]',
		);
		if (title) title.style.viewTransitionName = 'project-title';
	};
	addEventListener('pageswap', (event) => {
		if (event.viewTransition && event.activation) tagRow(event.activation.entry.url);
	});
	addEventListener('pagereveal', (event) => {
		const from = window.navigation?.activation?.from?.url;
		if (event.viewTransition && from) tagRow(from);
	});
})();
