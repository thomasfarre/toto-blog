// src/components/typography/BodyText.jsx
import PropTypes from 'prop-types';

/**
 * BodyText component for displaying paragraphs, blockquotes, and other body text elements.
 */
export const BodyText = ({ variant, children, className = null, whiteText = false, ...props }) => {
  const variantStyle = {
    headline: `md:text-xl text-lg ${whiteText ? 'text-gray-50' : 'text-gray-800'}`,
    paragraph: `${whiteText ? 'text-gray-100' : 'text-gray-700'}`,
    small: `text-sm ${whiteText ? 'text-gray-100' : 'text-gray-700'}`,
    label: `text-xs uppercase font-semibold ${whiteText ? 'text-gray-200' : 'text-gray-700'} tracking-wider`,
    formLabel: `text-sm tracking-wider uppercase font-medium ${whiteText ? 'text-gray-200' : 'text-gray-700'}`,
  };

  if (variant === 'formLabel') {
    return (
      <label className={`${variantStyle[variant]} ${className}`} {...props}>
        {children}
      </label>
    );
  }

  return (
    <p className={`${variantStyle[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};

BodyText.propTypes = {
  /**
   * The type of body text to render
   */
  variant: PropTypes.oneOf(['paragraph', 'small', 'label', 'headline', 'formLabel']).isRequired,
  /**
   * Content to display inside the BodyText component
   */
  children: PropTypes.node,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
  /**
   * Option to render text in white
   */
  whiteText: PropTypes.bool,
};

export default BodyText;
