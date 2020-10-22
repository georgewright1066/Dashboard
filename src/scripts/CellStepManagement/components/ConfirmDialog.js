
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../common/components/Button';

const ConfirmDialog = ({ onDeleteClick, modalOpen, onCancelClick }) => (
  < div className={classNames('csm-modal-form-edit-delete__confirm ', { 'active': modalOpen })} >
    <h2>Are you sure? This can not be undone!</h2>
    <div className="csm__confirm-button-container" >
      <Button
        buttonClass="button-primary"
        handleClick={() => onDeleteClick()}
        text="Yes"
      />
      <Button
        buttonClass="button-primary"
        handleClick={() => onCancelClick()}
        text="No"
      />
    </div>
  </div >
);

export default ConfirmDialog;

ConfirmDialog.propTypes = {
  onDeleteClick: PropTypes.func,
  modalOpen: PropTypes.bool,
  id: PropTypes.number,
  onCancelClick: PropTypes.func
};
