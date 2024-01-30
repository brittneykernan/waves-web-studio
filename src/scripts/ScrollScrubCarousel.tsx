import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { SteepEase } from '@/utils/Animation';

gsap.registerPlugin(ScrollTrigger);

const init = (id: string) => {
  const list = document.getElementById(id);

  gsap.to(list, {
    xPercent: -100,
    x: () => document.documentElement.clientWidth,
    ease: 'none', // adding ease will break carousel
    scrollTrigger: {
      start: 'top bottom',
      trigger: `#${id}`,
      scrub: 0.5,
      end: 'bottom top',
    },
  });

  ScrollTrigger.create({
    trigger: `#${id}`,
    start: 'top 110%',
    end: 'top top',
    onEnter: () => {
      // fixme: class is tightly coupled
      gsap.to('.fadeUpInOnScrollStaggered', {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: SteepEase,
      });
    },
  });
};

export default init;
