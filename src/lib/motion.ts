/*
  Scroll animations, loaded only when needed.

  whenNear(element, setup) waits until the element is about half a screen below the visible
  area, then downloads GSAP (src/lib/gsap.ts) and runs `setup` with it. This keeps GSAP out of
  the page's first load, so it never slows down the first view.

  - When the device asks for reduced motion, GSAP is never loaded and nothing moves.
  - If the element is already on screen when the page opens (e.g. a link to #quality), it is
    left exactly as it is, so content never flashes hidden and back.

  Every animation should use gsap.from() (animate *from* a hidden state *to* how the page already
  looks), so without JavaScript the content simply shows in place.
*/
type Gsap = typeof import('./gsap');

const reducedMotion = '(prefers-reduced-motion: reduce)';

export function whenNear(element: Element | null, setup: (lib: Gsap) => void) {
  if (!element || matchMedia(reducedMotion).matches) return;

  const observer = new IntersectionObserver(
    async ([entry], obs) => {
      if (!entry?.isIntersecting) return;
      obs.disconnect();
      if (entry.boundingClientRect.top < innerHeight) return; // already on screen: leave it be

      const lib = await import('./gsap');
      // Undo everything if the visitor turns on reduced motion while the page is open.
      lib.gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => setup(lib));
    },
    { rootMargin: '0px 0px 50% 0px' },
  );
  observer.observe(element);
}
