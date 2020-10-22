import React, {Component} from 'react';

class DropDown extends Component {

  render() {
    return (
      <select className="dropdown" onChange={this.props.onChange} name="dropdown">
        <option value="All">All</option>
        {this.props.options.map((option, key) => <option type="hidden" key={key}  value={option}>{option}</option> )}
      </select>
    );
  }
}

export default DropDown;
