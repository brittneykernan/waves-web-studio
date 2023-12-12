type IProjectListProps = {
  children?: any;
};

const ProjectList = (props: IProjectListProps) => {
  return (
    <section className="flex w-11/12 flex-col gap-2 pb-32 md:pb-48">
      <h2 className="flex justify-between pb-4 text-lg">
        Recent Releases<p>↓</p>
      </h2>
      {props.children}
    </section>
  );
};

export { ProjectList };
