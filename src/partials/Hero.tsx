import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

import { SteepEase } from '@/utils/Animation';

export interface LayoutProps {
  children: React.ReactNode;
}

// todo: should we refactor this to be more SRP adherent?
const Hero = (props: LayoutProps) => {
  const { children } = props;
  const gsapCtx = useRef<HTMLElement>(null); // create a ref for the root level element (for scoping)
  const h1 = useRef<HTMLHeadingElement>(null); // create

  useEffect(() => {
    let splitTypeInstance: SplitType;

    const ctx = gsap.context(() => {
      splitTypeInstance = new SplitType('#heading', {
        types: 'lines',
      });
      const { lines } = splitTypeInstance;

      // todo: see of splitting in html
      // saves on load time, it's so slow
      lines?.forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.append(line);
        h1.current?.appendChild(wrapper);

        wrapper.style.overflow = 'hidden';
      });

      gsap.fromTo(
        lines,
        {
          yPercent: 200,
        },
        {
          ease: SteepEase,
          duration: 2,
          stagger: 0.1,
          yPercent: 0,
          opacity: 1,
        }
      );
    }, gsapCtx);

    gsap.to('.staggered', {
      opacity: 1,
      stagger: 0.2,
      delay: 1.3,
      ease: 'power2.in',
    });

    return () => {
      ctx.revert();
      splitTypeInstance.revert();
    };
  }, []);

  return (
    <section
      className="relative flex w-11/12 flex-col gap-2 pb-24 md:pb-48 md:pt-12 2xl:pt-0"
      ref={gsapCtx}
    >
      <h1
        id="heading"
        ref={h1}
        className="pb-2 text-4xl font-bold uppercase tracking-tighter md:text-7xl xl:w-2/3 xl:pb-6 xl:text-8xl 2xl:w-full 2xl:text-9xl"
      >
        Website Design & Development
      </h1>
      {children}
    </section>
  );
};

export default Hero;
