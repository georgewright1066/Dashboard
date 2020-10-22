import React from 'react';
import classNames from 'classnames';

const Tooltip = ({ name, active }) => (

  <div className={classNames('csm-tooltip', { 'active': active })} >
    <h4>{name}</h4>
  </div >
);

export default Tooltip;