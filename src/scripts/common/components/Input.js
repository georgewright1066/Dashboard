
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, onChange, value, placeHolder, onBlur }) => (
  <input placeholder={placeHolder} onBlur={onBlur} onChange={onChange} className={className} value={value} type={type} required />
);

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,

};
