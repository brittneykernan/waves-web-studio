import type { ReactNode } from 'react';

type INavMenuProps = {
  children: ReactNode;
};

const NavMenu = (props: INavMenuProps) => (
  <nav className="md:w-1/3">
    <ul className="flex gap-4">{props.children}</ul>
  </nav>
);

export default NavMenu;
