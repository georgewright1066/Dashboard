
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/components/Input';
import Label from '../../common/components/Label';

const External = ({ value, paramValue, onChange, onParamChange, onNameChange, name, showParamInput }) => (
  <div>
    <div>
      <Label label="Enter Name" />
      <Input placeHolder="Enter name" type="text" className="csm-modal-form__text-input" value={name} onChange={onNameChange} />
    </div>
    <div>
      <Label label="Enter URL" />
      <Input placeHolder="Please enter URL" type="text" className="csm-modal-form__text-input" value={value} onChange={onChange} />
    </div>
    {showParamInput ?
      <div>
        <Label label="Enter Param" />
        <Input placeHolder="Member insert param" type="text" className="csm-modal-form__text-input" value={paramValue} onChange={onParamChange} />
      </div> :
      null}

  </div>
);

export default External;

External.propTypes = {
  value: PropTypes.string,
  paramValue: PropTypes.string,
  onChange: PropTypes.func,
  onParamChange: PropTypes.func
};
