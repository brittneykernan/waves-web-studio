import type { ReactNode } from 'react';

type INavMenuProps = {
  children: ReactNode;
};

const NavMenu = (props: INavMenuProps) => (
  <nav className="h-0 md:w-1/3">
    <ul className="flex w-fit translate-y-2 gap-4 md:h-6 md:translate-y-9">
      {props.children}
    </ul>
  </nav>
);

export default NavMenu;
