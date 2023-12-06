type IAvailabilityProps = {
  children: string;
};

const Availability = (props: IAvailabilityProps) => (
  <div className="staggered hidden opacity-0 lg:flex">
    <h3>{props.children}</h3>
  </div>
);

export { Availability };
