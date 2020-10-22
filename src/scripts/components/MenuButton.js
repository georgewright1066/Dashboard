import React from 'react';
import PropTypes from 'prop-types';

const MenuButton = ({ handleClick, className, accessibleText }) => (
  <button
    onClick={handleClick}
    className={className}
    type="button"
  >
    <span className="accessible-text">{accessibleText}</span>
    <span className="visual-aid"></span>
  </button>
);

MenuButton.propTypes = {
  handleClick: PropTypes.func,
};


export default MenuButton;
