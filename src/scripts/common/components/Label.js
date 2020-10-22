
import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ label }) => (
  <label>{label}</label>
);

export default Label;

Label.propTypes = {
  label: PropTypes.string,

};
