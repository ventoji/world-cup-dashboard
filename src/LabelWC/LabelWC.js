import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
const Label = ({ htmlFor, label, required }) => {
  return (
    <label htmlFor={htmlFor}>
      {label} {required && <span style={{ color: 'red' }}> *</span>}
    </label>
  );
};

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool,
};

Label.defaultProps = {
  htmlFor: 'labelID',
  label: 'label',
};

export default Label;
