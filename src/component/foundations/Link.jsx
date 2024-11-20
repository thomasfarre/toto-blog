import PropTypes from "prop-types";

const Link = ({ href, label, whiteText = false }) => {
  return (
    <a
      href={href}
      className={`transition duration-300 ease-out focus:outline-none border-b border-transparent font-semibold  ${whiteText ? 'text-gray-50 hover:text-white hover:border-gray-50' : 'text-gray-900 hover:text-gray-700 hover:border-gray-500'}`}
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
