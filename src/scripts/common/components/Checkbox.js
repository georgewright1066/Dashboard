import React from 'react';

class  CheckBoxStyled extends React.Component {

  onCheckBoxClick = () => {
    this.props.handleClick();


  }

  render() {
    const { id, checked} = this.props;
    return (
      <div key={id} className="container">
        <input onChange={this.onCheckBoxClick} type="checkbox" checked={checked} name='pet' id={id} />
        <label htmlFor={id} className="check-box"></label>
      </div>
    );
  }
}

export default CheckBoxStyled;

