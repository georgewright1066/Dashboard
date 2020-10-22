import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';


class PrettyDropDown extends Component {
    constructor(props) {
        super(props);
        let title = props.initalValue;
        this.state = {
            active: true,
            title: title
        };
    }

    onDropDownClick = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }));
    }

    onMenuItemClick = (e) => {
        this.onDropDownClick();
        let value = e.target.value;
        let target = e.target.innerHTML
        this.props.onSelectItem(value);
        this.setState(prevState => ({
            title: target,
        }));

    }


    render() {
        const { active } = this.state;
        const { largeContent, submitted } = this.props
        return (
            <div className="pretty-dropdown__container">
                <Button buttonClass="pretty-dropdown__button" text={submitted ? 'Select' : this.state.title} handleClick={this.onDropDownClick} />
                <ul className={classNames('pretty-dropdown', { 'active': active, 'large': largeContent })} name="dropdown">
                    {largeContent ?
                        <div className={classNames({ 'large-content': largeContent })} >
                            {this.props.options.map((option, key) =>
                                <li onClick={this.onMenuItemClick} className={classNames("pretty-dropdown__list", { 'active': active })} key={key} tabIndex={key} value={this.props.lang ? option.id : option.code}>{`${option.description}:${option.step_id}`}</li>)}
                        </div> :
                        this.props.options.map((option, key) =>
                            <li onClick={this.onMenuItemClick} className={classNames("pretty-dropdown__list", { 'active': active })} key={key} tabIndex={key} value={this.props.lang ? option.id : option.code}>{option.description}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default PrettyDropDown;


