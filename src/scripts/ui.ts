// Theme and language controls. The state itself is resolved by the inline script
// in <head> (before first paint); this only handles the clicks.

declare global {
	interface Window {
		__site: {
			theme: (value?: string | null) => void;
			lang: (value?: string | null) => void;
			system: () => 'light' | 'dark';
		};
	}
}

const root = document.documentElement;

function store(key: string, value: string | null) {
	try {
		if (value === null) localStorage.removeItem(key);
		else localStorage.setItem(key, value);
	} catch {
		// Storage can be unavailable (private mode). The choice still applies for this page.
	}
}

// Both changes repaint most of the page at once. A short cross-fade keeps that
// from landing as a flash, most of all the jump in brightness between themes.
function swap(update: () => void) {
	if (document.startViewTransition) document.startViewTransition(update);
	else update();
}

function sync() {
	document
		.querySelectorAll('[data-toggle-theme]')
		.forEach((el) => el.setAttribute('aria-pressed', String(root.dataset.theme === 'dark')));
	document
		.querySelectorAll<HTMLElement>('[data-set-lang]')
		.forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.setLang === root.lang)));
}

document.addEventListener('click', (event) => {
	const target = event.target as Element;

	if (target.closest('[data-toggle-theme]')) {
		const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
		// Choosing what the device already uses means "follow the device" again.
		store('theme', next === window.__site.system() ? null : next);
		swap(() => window.__site.theme(next));
		return;
	}

	const langButton = target.closest<HTMLElement>('[data-set-lang]');
	if (langButton) {
		const next = langButton.dataset.setLang!;
		if (next === root.lang) return;
		store('lang', next);
		swap(() => window.__site.lang(next));
	}
});

// "All projects": when the visitor came from the home page, go *back* to it so the
// browser restores their scroll position instead of dropping them at the top.
// Arriving any other way (a shared link, a new tab) the plain href takes over.
function cameFromHome() {
	const nav = (window as any).navigation;
	if (nav?.currentEntry) {
		const previous = nav.entries()[nav.currentEntry.index - 1];
		return !!previous?.url && new URL(previous.url).pathname === '/';
	}
	try {
		const referrer = new URL(document.referrer);
		return referrer.origin === location.origin && referrer.pathname === '/' && history.length > 1;
	} catch {
		return false;
	}
}

document.addEventListener('click', (event) => {
	const target = event.target as Element;

	const back = target.closest('[data-back]');
	if (back && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
		if (cameFromHome()) {
			event.preventDefault();
			history.back();
		}
		return;
	}

	// Header "Contact": when the section is on this page, scroll to it without
	// touching the address bar. From another page the link's own href does the work.
	const jump = target.closest<HTMLElement>('[data-scroll-to]');
	if (jump && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
		const section = document.getElementById(jump.dataset.scrollTo!);
		if (section) {
			event.preventDefault();
			section.scrollIntoView();
			// Move focus too, so the next Tab continues from the section, not the header.
			section.tabIndex = -1;
			section.focus({ preventScroll: true });
		}
		return;
	}

	if (target.closest('[data-print]')) {
		window.print();
		return;
	}

	const toggle = target.closest<HTMLElement>('[data-more-toggle]');
	if (toggle) {
		const panel = document.getElementById(toggle.getAttribute('aria-controls')!);
		if (!panel) return;
		const open = toggle.getAttribute('aria-expanded') !== 'true';
		// From the keyboard it opens at once: there is no pointer for motion to answer.
		panel.toggleAttribute('data-instant', event.detail === 0);
		panel.toggleAttribute('data-open', open);
		toggle.setAttribute('aria-expanded', String(open));
	}
});

new MutationObserver(sync).observe(root, { attributeFilter: ['lang', 'data-theme'] });
sync();

// On small screens the stack chips become a sideways-scrolling row. A scrolling
// region has to be reachable from the keyboard, but only while it actually scrolls:
// on wide screens the same list wraps and a tab stop there would be a dead end.
const scrollers = document.querySelectorAll<HTMLElement>('.chips-scroll');
function syncScrollers() {
	scrollers.forEach((el) => {
		if (el.scrollWidth > el.clientWidth) el.tabIndex = 0;
		else el.removeAttribute('tabindex');
	});
}
if (scrollers.length) {
	new ResizeObserver(syncScrollers).observe(document.documentElement);
	syncScrollers();
}

// Arriving through an anchor (Contact from another page, "All projects" from a
// shared link): go to it now, then drop the #fragment so the address stays clean.
// The jump is done here, instantly, because once the fragment is gone the browser
// has nothing left to scroll to.
const anchored = location.hash && document.getElementById(location.hash.slice(1));
if (anchored) {
	anchored.scrollIntoView({ behavior: 'instant' });
	history.replaceState(history.state, '', location.pathname + location.search);
}
