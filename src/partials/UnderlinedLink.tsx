type ILinkProps = {
  href: string;
  children: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
};

const UnderlinedLink = ({ href, children, target = '_blank' }: ILinkProps) => (
  <a
    href={href}
    className="link-hover-animation persistent-underline"
    rel="noopener nofollow"
    target={target}
  >
    {children}
  </a>
);

export default UnderlinedLink;
