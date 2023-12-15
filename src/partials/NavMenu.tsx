import type { ReactNode } from 'react';

type INavMenuProps = {
  children: ReactNode;
};

const NavMenu = (props: INavMenuProps) => (
  <nav>
    <ul className="flex gap-4">{props.children}</ul>
  </nav>
);

export { NavMenu };
