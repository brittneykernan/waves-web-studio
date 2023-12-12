import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import { useEffect, useRef } from 'react';

// import { customEase } from '@/utils/Animation';

gsap.registerPlugin(ScrollTrigger);

type IProjectListProps = {
  children?: any;
};

const ProjectList = (props: IProjectListProps) => {
  // const container = useRef<HTMLElement>();

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.fadeUpIn', {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1,
  //       ease: customEase,
  //       delay: 1.4,
  //       scrollTrigger: {
  //         trigger: '.fadeUpIn',
  //       },
  //     });
  //   }, container);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section
      className="flex w-11/12 flex-col gap-2 pb-32 md:pb-48"
      // ref={container}
    >
      <h2 className="fadeUpIn flex justify-between pb-4 text-lg">
        Recent Releases<p>↓</p>
      </h2>
      {props.children}
    </section>
  );
};

export { ProjectList };
