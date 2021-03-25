import React from 'react';
import PropTypes from 'prop-types';

/** Defautl button WC  */
const ButtonWC = ({ label, onClick, ...props }) => {
  return (
    <button type="submit" onClick={onClick} {...props}>
      {label}
    </button>
  );
};

ButtonWC.propTypes = {
  /** Button Contents */
  label: PropTypes.string.isRequired,

  /** Function to call onClick */
  onClick: PropTypes.func.isRequired,
};

ButtonWC.defaultProps = {
  label: 'start game',
  onClick: () => {},
};

export default ButtonWC;
