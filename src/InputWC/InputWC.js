import React from 'react';
import LabelWC from '../LabelWC';
import PropTypes from 'prop-types';

/** InputWC field component */
const InputWC = ({
  htmlId,
  name,
  label,
  type = 'text',
  required = false,
  onChange,
  placeholder,
  value,
  error,
  children,
  ...props
}) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <LabelWC htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error ? { border: 'solid 1px red' } : {}}
        {...props}
      />
      {children}
      {error && (
        <div className="input-wc__error" style={{ color: 'red' }}>
          {error}
        </div>
      )}
    </div>
  );
};

InputWC.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,
};

InputWC.defaultProps = {
  htmlId: '1shdy4',
  type: 'text',
  name: '',
  label: 'home team',
  placeholder: 'value here',
  required: true,
  onChange: () => {},
};

export default InputWC;
