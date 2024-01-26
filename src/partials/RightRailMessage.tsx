type IProps = {
  children: string;
};

const RightRailMessage = (props: IProps) => (
  <span className="right-rail-message hidden lg:flex">{props.children}</span>
);

export default RightRailMessage;
