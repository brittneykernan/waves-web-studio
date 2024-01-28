import gsap from 'gsap';
import type { MouseEvent } from 'react';
import { useEffect, useRef } from 'react';

import NavMenu from '@/partials/NavMenu';
import NavMenuItem from '@/partials/NavMenuItem';
import UnderlinedLink from '@/partials/UnderlinedLink';
import AppConfig from '@/utils/AppConfig';

const { schedulerLink } = AppConfig;

const Navbar = () => {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.to(header.current!, {
      opacity: 1,
      delay: 1,
      ease: 'power2.in',
    });
  }, []);

  const scrollTo = (event: MouseEvent<HTMLAnchorElement>) => {
    const { target } = event;
    const { hash } = target as HTMLAnchorElement;
    const id = hash.replace('#', '');
    const section = document.getElementById(id);

    event.preventDefault();
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      ref={header}
      className="fixed z-[999] flex h-16
      w-11/12
      flex-row-reverse items-center justify-between gap-y-3 text-lg text-white opacity-0 mix-blend-difference md:h-24 md:flex-row"
    >
      <NavMenu>
        <NavMenuItem onClick={scrollTo} href="/#work">
          Work
        </NavMenuItem>
        <NavMenuItem onClick={scrollTo} href="/#services">
          Services
        </NavMenuItem>
        <NavMenuItem onClick={scrollTo} href="/#team">
          Team
        </NavMenuItem>
      </NavMenu>

      <a href="/" title="Waves Web Studio Homepage" className="md:w-1/3">
        <div className="h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.0"
            viewBox="0 0 119 27"
            className="fill-white"
          >
            <path d="M4.3 5.1c.9.5 3.3 4.6 5.3 9 3.4 7.4 3.9 7.9 6.7 7.9 2.7 0 2.9-.1 1.4-1.3-1.6-1.1-1.6-1.4 0-5.6l1.7-4.3 2.5 5.3c1.9 4 3.2 5.5 4.9 5.7 2 .3 2.2.1 1.4-1.4-.7-1.3-.3-3.1 1.4-6.8C30.9 10.8 32 8 32 7.3c0-.7.7-1.6 1.7-2.1 1.2-.7.5-1-2.8-1-3.5 0-4 .2-2.1.9 2.6 1 2.6.8.8 5-.7 1.9-1.6 4.3-2 5.4-.7 1.7-1.2 1.2-3.6-3.5-2.4-4.7-2.7-5.7-1.4-6.6 1.1-.9.2-1.1-3.8-1.1-2.9-.1-4.6.1-3.7.4.9.2 2.1 1.5 2.8 2.9.9 2 .8 3.2-.8 6.1l-1.8 3.6-2.6-5.7c-1.5-3.2-2.4-6.2-2.1-6.7.3-.5-1.4-.9-3.8-.9-3.4.1-3.9.3-2.5 1.1M37.6 5.4c.3.8-.8 4-2.5 6.9-1.7 3-3.1 6.4-3.1 7.6 0 1.9.5 2.1 5.3 2 2.8-.1 4.4-.3 3.5-.6-1.6-.4-1.6-.6-.2-2.9 2.1-3.1.4-3.1-2.6.1-2.3 2.5-5 3.3-5 1.6 0-.4 1.4-3.6 3.2-7L39.3 7l1.8 2.9c4.4 7.2 5.9 10.9 4.6 11.4-.6.3.8.6 3.3.6 3 0 4-.2 3.1-.8-.8-.5-3.3-4.4-5.5-8.8-3.4-6.5-4.5-7.9-6.8-8.1-2.2-.3-2.7 0-2.2 1.2M48 4.6c.9.3 3.6 4.3 6 8.9 3.5 6.8 4.8 8.5 6.6 8.5 1.6 0 2.1-.5 1.8-1.8-.6-2.5 5.8-14.6 7.9-15 1.5-.3 1.7.6 1.7 7.7 0 6.7-.3 8-1.7 8.4-1 .3 3.2.5 9.3.6 9.9.1 11.3-.1 12.9-1.9 2.3-2.6 3-2.5 6.9.5 4.3 3.3 8.9 3.3 12.1 0 3-2.9 3.2-6.8.5-9.5-2.4-2.4-3.2-2.5-8.7-.4-5 1.9-7.6 1.3-7.1-1.7.4-3.2 3.3-4.7 5.8-3.1 2.6 1.6 5.2 1.5 7.6-.3 1.8-1.4 1.7-1.4-.9-.3-2.2.9-3.3.9-4.8 0C99.1 2.2 93 5 93 10.1c0 4.9 4.5 6.3 11.2 3.4 4.5-1.8 7.4-.2 6.5 3.7-.9 3.6-5 5.2-8.7 3.3-1.6-.8-3.2-1.9-3.5-2.5-1.1-1.7-4.8-1.1-7.2 1.2-2.3 2.2-4.7 1.8-2.5-.4 2.5-2.5 1-2.8-1.9-.4-2.1 1.8-4.2 2.6-7 2.6H76V5h4.2c3.2 0 4.9.6 7 2.7 2.7 2.6 3.7 2.3 1.8-.7-.6-.9-.5-1.7.3-2.2C90 4.3 84 4 76 4.1c-11 .1-13.9.4-12.2 1.2 1.2.6 2.1 1.3 2 1.6-.2.3-1.2 3-2.3 5.9-1.1 2.8-2.2 5.2-2.5 5.2-.3 0-2-2.9-3.7-6.4-2.3-4.5-2.8-6.6-2-7 .7-.2-1-.4-3.8-.4-2.7 0-4.3.2-3.5.4" />
            <path d="M82 10.5c-.7.8-2.2 1.5-3.4 1.6-1.9 0-1.9.1.4 1 1.4.5 3 1.6 3.6 2.4.9 1.2 1.1.7 1.1-2.5 0-4.5 0-4.6-1.7-2.5" />
          </svg>
        </div>
      </a>

      <div className="hidden w-1/3 justify-end md:flex">
        <UnderlinedLink href={schedulerLink}>Schedule a Call</UnderlinedLink>
      </div>
    </header>
  );
};

export default Navbar;
