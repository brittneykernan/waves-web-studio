import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

import { customEase } from '@/utils/Animation';
import { AppConfig } from '@/utils/AppConfig';

const { email } = AppConfig;

const Hero = () => {
  const gsapCtx = useRef<HTMLElement>(null); // create a ref for the root level element (for scoping)
  const h1 = useRef<HTMLHeadingElement>(null); // create

  useEffect(() => {
    let splitTypeInstance: SplitType;

    const ctx = gsap.context(() => {
      splitTypeInstance = new SplitType('#heading', {
        types: 'lines',
      });
      const { lines } = splitTypeInstance;

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
          ease: customEase,
          duration: 2,
          stagger: 0.1,
          yPercent: 0,
          opacity: 1,
        }
      );
    }, gsapCtx);

    return () => {
      ctx.revert();
      splitTypeInstance.revert();
    };
  }, []);

  return (
    <section
      className="flex w-11/12 flex-col gap-2 pb-32 md:pb-48"
      ref={gsapCtx}
    >
      <h1
        id="heading"
        ref={h1}
        className="pb-2 text-4xl font-bold uppercase tracking-tighter md:text-7xl xl:pb-6 xl:text-8xl"
      >
        Web Design & Development Studio
      </h1>
      <h2 className="w-[610px] pb-10 text-xl leading-6 tracking-tighter md:text-3xl xl:w-[730px] xl:text-4xl">
        A Brooklyn-based studio specializing in front-end services for startups
        and small businesses.
      </h2>
      <button className="self-start rounded-full border border-current px-8 py-4 text-lg">
        {email}
      </button>
    </section>
  );
};

export { Hero };
