
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/components/Button';
import classNames from 'classnames';


const NewCellWrapper = ({ onNewCellClick, active }) => (
  <div className={classNames('csm__create-cell-container ', { 'active': active })}>
    <h2>New Cell</h2>
    <Button buttonClass="csm__button-add small " handleClick={onNewCellClick} />
  </div>
);

export default NewCellWrapper;


NewCellWrapper.propTypes = {
  active: PropTypes.bool,
  onNewCellClick: PropTypes.func

};