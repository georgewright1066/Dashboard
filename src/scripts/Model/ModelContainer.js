import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Filter from '../Filter/FilterContainer';

 class Model extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    this.body = document.body;
  }

  onToggleFinish = () => {
    const { active } = this.state;
    if (active) {
      this.body.classList.add('filter-active');
    } else {
      this.body.classList.remove('filter-active');
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }), this.onToggleFinish);
  }

  render() {
    const { active} = this.state;
    return (
      <div className={classNames('lu-model', { 'active': active })}>
        <Filter />
      </div>
    );
  }
}

export default Model;

