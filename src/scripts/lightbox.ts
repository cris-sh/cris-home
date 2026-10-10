import { animate, motionValue, type AnimationPlaybackControls } from 'motion';

// Image viewer. The picture flies out of its thumbnail and back into it, and can
// be grabbed at any moment, mid-flight included, and thrown away.
//
// Springs rather than CSS transitions: a spring starts from wherever the image is
// right now, keeps the finger's velocity on release, and can be re-targeted
// without a seam. X, Y and scale each get their own spring so they never desync.

/** Hysteresis before a press becomes a drag, so a tap stays a tap. */
const DRAG_THRESHOLD = 10;
/** How far (as a share of the viewport) the throw must be headed to dismiss. */
const DISMISS_AT = 0.25;

// Critically damped: nothing here should overshoot on its own.
const SETTLE = { type: 'spring', bounce: 0, duration: 0.4 } as const;
// Leaving is the system responding, so it is quicker than arriving.
const LEAVE = { type: 'spring', bounce: 0, duration: 0.3 } as const;
// A little bounce only when a gesture's momentum is behind it.
const THROWN = { type: 'spring', bounce: 0.2, duration: 0.4 } as const;

/** Where a flick comes to rest, using scroll-style exponential decay. */
function project(velocity: number, decelerationRate = 0.998) {
	return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/** Progressive resistance: the further past the edge, the less the image follows. */
function rubberband(overshoot: number, dimension: number, constant = 0.55) {
	return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

const clamp01 = (n: number) => Math.min(Math.max(n, 0), 1);

function setup(dialog: HTMLDialogElement) {
	const image = dialog.querySelector<HTMLImageElement>('.lightbox-img')!;
	const scrim = dialog.querySelector<HTMLElement>('.lightbox-scrim')!;
	const closeButton = dialog.querySelector<HTMLButtonElement>('.lightbox-close')!;
	const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

	const x = motionValue(0);
	const y = motionValue(0);
	const scale = motionValue(1);

	// Written straight onto the element: a CSS variable on a parent would force a
	// style recalculation on every child, every frame.
	const render = () => {
		image.style.transform = `translate3d(${x.get()}px, ${y.get()}px, 0) scale(${scale.get()})`;
	};
	x.on('change', render);
	y.on('change', render);
	scale.on('change', render);

	let thumb: HTMLImageElement | null = null;
	let running: AnimationPlaybackControls[] = [];
	// Bumped whenever the viewer changes its mind, so a stale "finished closing"
	// callback can tell it was interrupted.
	let generation = 0;
	let drag: {
		pointerId: number;
		startX: number;
		startY: number;
		originX: number;
		originY: number;
		active: boolean;
	} | null = null;

	function stop() {
		for (const controls of running) controls.stop();
		running = [];
	}

	function springTo(
		target: { x: number; y: number; scale: number },
		options: typeof SETTLE | typeof LEAVE | typeof THROWN,
	) {
		stop();
		running = [
			animate(x, target.x, options),
			animate(y, target.y, options),
			animate(scale, target.scale, options),
		];
		return Promise.all(running.map((controls) => controls.finished));
	}

	/** Size and centre the image for the current viewport. Layout only, never animated. */
	function layout() {
		const padding = innerWidth < 640 ? 12 : 32;
		const naturalWidth = Number(image.dataset.width);
		const naturalHeight = Number(image.dataset.height);
		const fit = Math.min(
			(innerWidth - padding * 2) / naturalWidth,
			(innerHeight - padding * 2) / naturalHeight,
			1,
		);
		const width = naturalWidth * fit;
		const height = naturalHeight * fit;
		image.style.width = `${width}px`;
		image.style.height = `${height}px`;
		image.style.left = `${(innerWidth - width) / 2}px`;
		image.style.top = `${(innerHeight - height) / 2}px`;
		return { width, height };
	}

	/** The transform that puts the full image exactly on top of its thumbnail. */
	function thumbTransform() {
		const { width, height } = layout();
		const rect = thumb!.getBoundingClientRect();
		return {
			x: rect.left + rect.width / 2 - innerWidth / 2,
			y: rect.top + rect.height / 2 - innerHeight / 2,
			scale: Math.max(rect.width / width, rect.height / height),
		};
	}

	function open(trigger: HTMLElement, animated: boolean) {
		const source = trigger.querySelector('img');
		if (!source || dialog.open) return;
		thumb = source;
		generation++;

		// Paint immediately with the pixels already on screen, then swap in the
		// full-resolution file once it has decoded.
		image.src = source.currentSrc || source.src;
		image.alt = source.alt;
		image.dataset.width = trigger.dataset.width;
		image.dataset.height = trigger.dataset.height;
		const full = trigger.dataset.full;
		if (full) {
			const expected = generation;
			const loader = new Image();
			loader.src = full;
			loader
				.decode()
				.then(() => {
					if (expected === generation && dialog.open) image.src = full;
				})
				.catch(() => {});
		}

		delete dialog.dataset.state;
		dialog.showModal();

		if (animated && !reduceMotion.matches) {
			// Anchor to the source: it leaves from the thumbnail it came from.
			const from = thumbTransform();
			x.jump(from.x);
			y.jump(from.y);
			scale.jump(from.scale);
			render();
			thumb.style.visibility = 'hidden';
			springTo({ x: 0, y: 0, scale: 1 }, SETTLE);
		} else {
			layout();
			x.jump(0);
			y.jump(0);
			scale.jump(1);
			render();
		}
	}

	function finish() {
		stop();
		if (thumb) thumb.style.visibility = '';
		thumb = null;
		delete dialog.dataset.state;
		delete dialog.dataset.dragging;
		scrim.style.opacity = '';
		if (dialog.open) dialog.close();
		image.removeAttribute('src');
	}

	function close(animated: boolean) {
		if (!dialog.open || dialog.dataset.state === 'closing') return;
		const expected = ++generation;
		const settled = () => {
			if (expected === generation) finish();
		};

		if (!animated) {
			finish();
			return;
		}

		dialog.dataset.state = 'closing';
		scrim.style.opacity = '';

		if (reduceMotion.matches || !thumb?.isConnected) {
			// No travel: let the CSS fade play out, then leave.
			setTimeout(settled, 200);
			return;
		}

		// Out along the path it came in on. The springs pick up whatever velocity
		// the values already have, so a flick carries straight into the exit.
		springTo(thumbTransform(), LEAVE).then(settled);
	}

	/** Pull the image back to rest after a drag that didn't dismiss it. */
	function recover(thrown: boolean) {
		delete dialog.dataset.state;
		springTo({ x: 0, y: 0, scale: 1 }, thrown ? THROWN : SETTLE);
	}

	// A click from the keyboard reports `detail === 0`. Keyboard-driven opens and
	// closes are instant: there is no pointer for the motion to connect to.
	document.addEventListener('click', (event) => {
		const trigger = (event.target as Element).closest<HTMLElement>('[data-lightbox-trigger]');
		if (trigger) open(trigger, event.detail !== 0);
	});

	closeButton.addEventListener('click', (event) => close(event.detail !== 0));
	scrim.addEventListener('click', () => close(true));

	// Escape.
	dialog.addEventListener('cancel', (event) => {
		event.preventDefault();
		close(false);
	});

	addEventListener('resize', () => {
		if (dialog.open) layout();
	});

	image.addEventListener('pointerdown', (event) => {
		// One pointer at a time: a second finger must not steal the image.
		if (drag || event.button !== 0 || reduceMotion.matches) return;
		event.preventDefault();
		image.setPointerCapture(event.pointerId);

		// Catch it wherever it is, even halfway through opening or closing.
		stop();
		generation++;
		delete dialog.dataset.state;

		drag = {
			pointerId: event.pointerId,
			startX: event.clientX,
			startY: event.clientY,
			// Start from the on-screen value so nothing jumps under the finger.
			originX: x.get(),
			originY: y.get(),
			active: false,
		};
	});

	image.addEventListener('pointermove', (event) => {
		if (!drag || event.pointerId !== drag.pointerId) return;

		if (!drag.active) {
			const travelled = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
			if (travelled < DRAG_THRESHOLD) return;
			drag.active = true;
			// Re-anchor so the image doesn't lurch by the threshold distance.
			drag.startX = event.clientX;
			drag.startY = event.clientY;
			dialog.dataset.dragging = '';
		}

		const rawX = drag.originX + event.clientX - drag.startX;
		const rawY = drag.originY + event.clientY - drag.startY;

		// Down is the way out, so it tracks the finger 1:1. Sideways and up lead
		// nowhere: they give, with growing resistance, instead of stopping dead.
		x.set(rubberband(rawX, innerWidth));
		y.set(rawY > 0 ? rawY : rubberband(rawY, innerHeight));

		// The in-between frames point at the outcome: the further down, the more
		// the picture shrinks toward its thumbnail and the page shows through.
		const progress = clamp01(y.get() / (innerHeight * 0.5));
		scale.set(1 - progress * 0.25);
		scrim.style.opacity = String(1 - progress);
	});

	function release(event: PointerEvent, cancelled: boolean) {
		if (!drag || event.pointerId !== drag.pointerId) return;
		const wasDragging = drag.active;
		drag = null;
		delete dialog.dataset.dragging;
		scrim.style.opacity = '';

		// Decide from where the throw is headed, not from where the finger let go.
		const velocity = y.getVelocity();
		const landing = y.get() + project(velocity);
		const dismiss =
			wasDragging && !cancelled && velocity >= 0 && landing > innerHeight * DISMISS_AT;

		if (dismiss) close(true);
		else recover(wasDragging);
	}

	image.addEventListener('pointerup', (event) => release(event, false));
	image.addEventListener('pointercancel', (event) => release(event, true));
}

const dialog = document.querySelector<HTMLDialogElement>('dialog.lightbox');
if (dialog) setup(dialog);
