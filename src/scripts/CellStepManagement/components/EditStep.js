
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/components/Button';
import Input from '../../common/components/Input';
import classNames from 'classnames';
import DropDown from "../../common/components/CoolDropdown";

class EditStep extends React.Component {
  state = {
    showNext: this.props.currentShow,
    moveNext: this.props.currentMove,
    nextNext: this.props.currentNext,
    nextList: this.props.nextList
  }

   onEditClick = () => {
       const { showNext, moveNext, nextNext } = this.state
       this.props.onEditClick(showNext, moveNext, nextNext)
  }

  render() {
    const { editBoxOpen } = this.props;
    return (
      <div className={classNames('edit-box__container', { 'active': editBoxOpen })} >
        <label>Seconds before show next</label>
        <Input onChange={(e) => this.setState({ showNext: e.target.value })} value={this.state.showNext} className="edit-box__input" type="text" />
        <label>Seconds before move next</label>
        <Input onChange={(e) => this.setState({ moveNext: e.target.value })} value={this.state.moveNext} className="edit-box__input" type="text" />
        <label>Next Button Type</label>
        <DropDown onSelectItem={(item) => this.setState({ nextNext: item })} options={this.state.nextList} initalValue={this.state.nextNext}/>
        <Button
          buttonClass="button-primary"
          text="Submit"
          handleClick={this.onEditClick}
        />
      </div>
    );
  }
}

export default EditStep;

EditStep.propTypes = {
  editBoxOpen: PropTypes.bool
};
