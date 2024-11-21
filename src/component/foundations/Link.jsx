import PropTypes from "prop-types";

const Link = ({ href, label }) => {
  return (
    <a
      href={href}
      className={`transition duration-300 md:text-sm ease-out focus:outline-none border-b border-transparent font-medium text-zinc-800 hover:text-emerald-500 hover:border-emerald-300 dark:text-zinc-200 dark:hover:text-emerald-400 dark:hover:border-emerald-300`}
    >
      {label}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  whiteText: PropTypes.bool,
};

export default Link;
