import type { MouseEvent } from 'react';

type INavMenuItemProps = {
  href: string;
  children: string;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li>
    <a
      href={props.href}
      target={props.target || '_self'}
      className="link-hover-animation"
      onClick={props.onClick}
    >
      {props.children}
    </a>
  </li>
);

export default NavMenuItem;
