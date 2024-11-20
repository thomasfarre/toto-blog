import PropTypes from 'prop-types';

export const Heading = ({ level, children, white = false, className = '', ...props }) => {
  const Tag = `h${level}`;
  const styles = {
    1: 'text-5xl tracking-tight font-black  text-gray-900 font-heading',
    2: ' text-2xl tracking-tight text-gray-900 font-heading',
    3: 'text-xl tracking-tight text-gray-900 font-heading',
    default: 'text-lg text-gray-900 font-heading'
  };
  const headingStyle = styles[level] || styles.default;
  const textColor = white ? 'text-white' : 'text-gray-900';

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
