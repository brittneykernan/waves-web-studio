type IProps = {
  children: string;
  className?: string;
};

const RightRailMessage = (props: IProps) => (
  <span className={`right-rail-message hidden lg:flex ${props.className}`}>
    {props.children}
  </span>
);

export default RightRailMessage;
