
import React from 'react';
import PropTypes from 'prop-types';

const   Image = ({source, imageClass, onLoad}) => (
  <div className={imageClass}>
    <img onLoad={onLoad} alt="lumen dashboard" src={source}/>
  </div>
);

export default Image;

Image.propTypes = {
  source: PropTypes.string,
  imageClass: PropTypes.string,

};
