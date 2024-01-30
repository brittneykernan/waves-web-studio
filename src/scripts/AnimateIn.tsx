import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { SteepEase } from '@/utils/Animation';

const scrollVisibleEls = gsap.utils.toArray('.fadeUpInOnScroll');

gsap.registerPlugin(ScrollTrigger);

const getY = (index: number) => {
  return 25 * (index + 1);
};

const init = () => {
  const timeline = gsap.timeline();

  timeline.from('.fadeUpIn', {
    opacity: 0,
    y: getY,
    stagger: 0.1,
    duration: 1.5,
    ease: SteepEase,
    delay: 1.2,
  });

  scrollVisibleEls.forEach((el) => {
    gsap.to(el as gsap.TweenTarget, {
      opacity: 1,
      y: 0,
      ease: SteepEase,
      duration: 1,
      scrollTrigger: {
        trigger: el as gsap.DOMTarget,
      },
    });
  });
};

export default init;
