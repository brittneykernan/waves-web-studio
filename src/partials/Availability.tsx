type IAvailabilityProps = {
  children: string;
};

const Availability = (props: IAvailabilityProps) => (
  <div className="hidden lg:flex">
    <h3>{props.children}</h3>
  </div>
);

export { Availability };
