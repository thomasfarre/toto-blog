// src/components/typography/BodyText.jsx
import PropTypes from 'prop-types';

/**
 * BodyText component for displaying paragraphs, blockquotes, and other body text elements.
 */
export const BodyText = ({ variant, children, className = null, whiteText = false, ...props }) => {
  const variantStyle = {
    headline: `md:text-xl text-lg ${whiteText ? 'text-zinc-50' : 'text-zinc-800'}`,
    paragraph: `text-base ${whiteText ? 'text-zinc-100' : 'text-zinc-700'} dark:text-zinc-300`,
    small: `text-sm ${whiteText ? 'text-zinc-100' : 'text-zinc-700'} dark:text-zinc-300`,
    label: `text-xs uppercase font-semibold ${whiteText ? 'text-zinc-200' : 'text-zinc-700'} tracking-wider dark:text-zinc-300`,
    formLabel: `text-sm tracking-wider uppercase font-medium ${whiteText ? 'text-zinc-200' : 'text-zinc-700'} dark:text-zinc-300`,
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
