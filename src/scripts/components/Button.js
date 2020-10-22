import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick, text, buttonClass }) => (
  <button
    onClick={handleClick}
    className={buttonClass}
    type="button"
    value={text}
  >
    <span className="accessible-text">{text}</span>

  </button>
);

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
  buttonClass: PropTypes.string
};
