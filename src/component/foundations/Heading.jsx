import PropTypes from 'prop-types';

export const Heading = ({ level, children, white = false, className = '', ...props }) => {
  const Tag = `h${level}`;
  const styles = {
    1: 'text-2xl sm:text-5xl tracking-tight font-black  text-zinc-900 font-heading dark:text-zinc-100',
    2: 'text-2xl sm:text-3xl tracking-tight text-zinc-900 font-heading dark:text-zinc-100',
    3: 'text-xl sm:text-2xl tracking-tight text-zinc-900 font-heading dark:text-zinc-100',
    default: 'text-lg sm:text-xl text-zinc-900 font-heading dark:text-zinc-100'
  };
  const headingStyle = styles[level] || styles.default;
  const textColor = white ? 'text-white' : 'text-zinc-900';

  return (
    <Tag className={`${headingStyle} ${textColor} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  white: PropTypes.bool,
  className: PropTypes.string,
};

export default Heading;
