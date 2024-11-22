import PropTypes from "prop-types";

const LinkVariants = {
  default: {
    className: "transition  px-3 py-2  duration-300 text-sm ease-out focus:outline-none font-medium text-zinc-800 hover:text-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-400",
    content: ({ label }) => label,
  },
  navigation: {
    className: ({ isActive }) =>
      `group block relative px-3 py-2 transition duration-300 text-sm ease-out focus:outline-none font-medium ${
        isActive ? "text-teal-500 dark:text-teal-400" : "text-zinc-800 dark:text-zinc-200"
      } hover:text-emerald-500 dark:hover:text-emerald-400`,
    content: ({ label, isActive }) => (
      <>
        <div>{label}</div>
        <span
          className={`${
            isActive ? "block" : "hidden"
          } group-hover:block absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0`}
        ></span>
      </>
    ),
  },
};

const Link = ({ variant = "default", href, label, isActive }) => {
  const { className, content } = LinkVariants[variant];
  const computedClassName = typeof className === "function" ? className({ isActive }) : className;

  return (
    <a href={href} className={computedClassName}>
      {content({ label, isActive })}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "navigation"]),
  isActive: PropTypes.bool,
};

export default Link;
