import PropTypes from 'prop-types';
import { ArrowLongRightIcon } from '@heroicons/react/20/solid';

const ButtonVariants = {
  primary: {
    className: 'bg-emerald-900 font-semibold shadow text-emerald-50 hover:bg-emerald-800 focus:ring-emerald-900 py-2 px-4 flex items-center',
    content: ({ label, children }) => (
      <>
        {children}
        {label}
      </>
    ),
  },
  secondary: {
    className: 'bg-gray-900 font-semibold shadow text-gray-50 hover:bg-gray-800 focus:ring-gray-900 py-2 px-4',
    content: ({ label, children }) => (
      <>
        {children}
        {label}
      </>
    ),
  },
  tertiary: {
    className: 'text-gray-900 font-semibold hover:text-gray-700 py-2 focus:ring-transparent flex items-center',
    content: ({ label }) => (
      <>
        {label}
        <ArrowLongRightIcon className="w-6 h-6 ml-2" />
      </>
    ),
  },
  icon: {
    className: 'text-gray-700 hover:text-gray-500 focus:ring-transparent rounded-full p-2',
    content: ({ children }) => children,
  },
  leadingIcon: {
    className: 'text-gray-900 border font-semibold border-gray-900 bg-white rounded-md shadow hover:bg-gray-100 focus:ring-gray-900 py-2 px-4 flex items-center',
    content: ({ label, children }) => (
      <>
        {children}
        {label}
      </>
    ),
  },
};

export const Button = ({ variant = 'primary', onClick = null, className = null, label, children, ...props }) => {
  const { className: variantClassName, content } = ButtonVariants[variant];
  const baseStyle = 'rounded focus:outline-none focus:ring-2 transition ease-out duration-300';

  return (
    <button
      className={`${baseStyle} ${variantClassName} ${className} flex items-center justify-center`}
      onClick={onClick}
      {...props}
    >
      {content({ label, children })}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'icon', 'tertiary', 'leadingIcon']),
  children: PropTypes.node,
};

export default Button;
