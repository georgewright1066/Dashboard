import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FootNote = ({copy, route}) => (
  <span className="note forgot">Help: <Link to={route} className="footnote">{copy}</Link></span>
);

export default FootNote;

FootNote.propTypes = {
  copy: PropTypes.string,
  route: PropTypes.string
};
