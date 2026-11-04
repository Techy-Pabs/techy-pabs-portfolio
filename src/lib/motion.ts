/*
  Scroll animations, loaded only when needed.

  whenNear(element, setup) waits until the element is within about half a screen of the visible
  area, then downloads GSAP (src/lib/gsap.ts) and runs `setup` with it. This keeps GSAP out of
  the page's first load, so it never slows down the first view.

  - When the device asks for reduced motion, GSAP is never loaded and nothing moves.
  - `visible` tells `setup` whether the element was already on screen when the page opened
    (e.g. after a link to #quality). Animations must not hide content that is already in view:
    one-off animations skip it, replaying ones start in their finished state.

  Every animation should use gsap.from() (animate *from* a hidden state *to* how the page already
  looks), so without JavaScript the content simply shows in place.
*/
type Gsap = typeof import('./gsap');

const reducedMotion = '(prefers-reduced-motion: reduce)';

export function whenNear(element: Element | null, setup: (lib: Gsap, visible: boolean) => void) {
  if (!element || matchMedia(reducedMotion).matches) return;

  const observer = new IntersectionObserver(
    async ([entry], obs) => {
      if (!entry?.isIntersecting) return;
      obs.disconnect();
      const visible = entry.boundingClientRect.top < innerHeight && entry.boundingClientRect.bottom > 0;

      const lib = await import('./gsap');
      // Undo everything if the visitor turns on reduced motion while the page is open.
      lib.gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => setup(lib, visible));
    },
    { rootMargin: '50% 0px 50% 0px' },
  );
  observer.observe(element);
}
