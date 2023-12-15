type IAvailabilityProps = {
  children: string;
};

const Availability = (props: IAvailabilityProps) => (
  <span className="right-rail-message hidden lg:flex">{props.children}</span>
);

export { Availability };
