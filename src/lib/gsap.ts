// GSAP with ScrollTrigger. Only loaded on demand by `whenNear()` in motion.ts.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*
  Add `clearProps: CLEAR` to each tween: while animating, GSAP takes over an element's CSS
  translate/rotate/scale, and clearing them afterwards hands control back to the stylesheet
  (so hover effects and responsive rotations keep working).
*/
export const CLEAR = 'transform,translate,rotate,scale,opacity';

export { gsap, ScrollTrigger };
