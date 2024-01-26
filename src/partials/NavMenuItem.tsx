type INavMenuItemProps = {
  href: string;
  children: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li>
    <a
      href={props.href}
      target={props.target || '_self'}
      className="link-hover-animation"
    >
      {props.children}
    </a>
  </li>
);

export default NavMenuItem;
