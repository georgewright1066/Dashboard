import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onChange, className, placeholder }) => (
  <input
    className={`form-control ${className} `}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default SearchBar;

SearchBar.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string
};
