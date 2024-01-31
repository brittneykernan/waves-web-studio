type ILinkProps = {
  href: string;
  children: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
};

const UnderlinedLink = ({
  href,
  children,
  target = '_blank',
  className = '',
}: ILinkProps) => (
  <a
    href={href}
    className={`underlined-on-hover persistent-underline ${className}`}
    rel="noopener nofollow"
    target={target}
  >
    {children}
  </a>
);

export default UnderlinedLink;
