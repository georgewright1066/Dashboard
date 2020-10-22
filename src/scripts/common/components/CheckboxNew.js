import React from 'react';

const CheckBox = ({ handleClick , isCompleted, id, className }) => (
  <input id={id} onClick={ handleClick } type="checkbox" className={className} checked={isCompleted}/>
);

export default CheckBox;

