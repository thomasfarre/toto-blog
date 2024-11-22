const WorkstationSection = ({ title, items }) => {
  return (
    <section
      aria-labelledby="workstation-section"
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id="workstation-section"
          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
        >
          {title}
        </h2>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-16">
            {items.map((item, index) => (
              <li key={index} className="group relative flex flex-col items-start">
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {item.name}
                </h3>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkstationSection;
