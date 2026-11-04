// Scroll animations with GSAP. Only imported by components' <script>s, so it runs in the browser.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*
  Runs `setup` only when the visitor's device does not ask for reduced motion. If that setting
  changes while the page is open, GSAP undoes everything `setup` created.

  Every animation should use gsap.from() (animate *from* a hidden state *to* how the page already
  looks), so without JavaScript, or with reduced motion, the content simply shows in place.

  Add `clearProps: CLEAR` to each tween: while animating, GSAP takes over an element's CSS
  translate/rotate/scale, and clearing them afterwards hands control back to the stylesheet
  (so hover effects and responsive rotations keep working).
*/
export const CLEAR = 'transform,translate,rotate,scale,opacity';
export function withMotion(setup: () => void) {
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', setup);
}

export { gsap, ScrollTrigger };
