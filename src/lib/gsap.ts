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

/*
  Plays `animation` every time `trigger` scrolls into view, from above or below, and resets it
  once the section has completely left the screen, so the reset is never seen.
  `startVisible`: the section was already on screen when the page opened, so it starts finished
  instead of hidden (no flash) and replays on later visits.
*/
export function replayOnView(trigger: Element, animation: gsap.core.Animation, startVisible: boolean) {
  animation.pause();
  animation.progress(startVisible ? 1 : 0);

  const play = () => {
    if (animation.progress() === 0) animation.play(0);
  };
  const reset = () => animation.pause(0);

  ScrollTrigger.create({ trigger, start: 'top 85%', end: 'bottom 15%', onEnter: play, onEnterBack: play });
  ScrollTrigger.create({ trigger, start: 'top bottom', end: 'bottom top', onLeave: reset, onLeaveBack: reset });
}

export { gsap, ScrollTrigger };
