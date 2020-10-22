import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';


class PrettyDropDown extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      active: true,
      title: 'Select'
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.active === false) {
        this.setState(prevState => ({
          active: !prevState.active
        }));
      }
    }
  }

  onDropDownClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  onMenuItemClick = (e) => {
    this.onDropDownClick();
    let target = e.target.innerHTML;
    this.props.onSelectItem(target);
    this.setState(prevState => ({
      title: target,
    }));
  }


  render() {
    const { active } = this.state;
    const { largeContent, submitted } = this.props
    return (
      <div ref={this.setWrapperRef} className="pretty-dropdown__container">
        <Button buttonClass="pretty-dropdown__button" text={submitted ? 'Select' : this.state.title} handleClick={this.onDropDownClick} />
        <ul className={classNames('pretty-dropdown', { 'active': active, 'large': largeContent })} name="dropdown">
          {largeContent ?
            <div className={classNames({ 'large-content': largeContent })} >
              {this.props.options.map((option, key) =>
                <li onClick={this.onMenuItemClick} className={classNames("pretty-dropdown__list", { 'active': active })} key={key} tabIndex={key} value={option.instruction_name}>{`${option.instruction_name}:${option.step_id}`}</li>)}
            </div> :
            this.props.options.map((option, key) =>
              <li onClick={this.onMenuItemClick} className={classNames("pretty-dropdown__list", { 'active': active })} key={key} tabIndex={key} value={option}>{option}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default PrettyDropDown;


