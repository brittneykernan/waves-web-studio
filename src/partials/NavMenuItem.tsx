type INavMenuItemProps = {
  href: string;
  children: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  lastItem?: boolean;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li>
    <a href={props.href} target={props.target || '_self'}>
      {props.children}
      {props.lastItem ? '' : ', '}
    </a>
  </li>
);

export { NavMenuItem };
