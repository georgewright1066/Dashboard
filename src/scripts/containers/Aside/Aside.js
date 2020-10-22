import React, { PureComponent } from 'react';
import NavigationLinks from '../../components/NavigationLinks';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { filterOperations } from '../../Filter/duck';

class Aside extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
      currentUrl: (this.props.location.pathname)
    };
  }

  componentDidMount() {
    this.body = document.body;
    if (this.props.location.pathname === "/") {
      this.handleClick()
    }
    this.props.history.listen((location, action) => {
      this.setState( ({
        currentUrl: location.pathname,
      }));
      if (location.pathname === "/") {
        this.handleClick()
      } else {
        this.gotoClick()
      }
    });
  }

  onToggleFinish = () => {
    const { active } = this.state;
    if (active) {
      this.body.classList.add('menu-active');
    } else {
      this.body.classList.remove('menu-active');
    }
  }

  onFilterClick = () => {
    this.props.openModal()
  }

  handleClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }), this.onToggleFinish);
  }

  gotoClick = () => {
    if (this.state.active === true){
      this.setState(prevState => ({
        active: !prevState.active
      }), this.onToggleFinish);
    }
  }

  render() {
    const { active } = this.state;
    const userType = parseInt(localStorage.getItem('userType'));
    const stimsUrl = userType === 1 ? '/stims' : '/batch_stim_list';
    return (
      <aside className={classNames('lu-aside', { 'active': active })}>
        <NavigationLinks currentUrl={this.state.currentUrl} stimsUrl={stimsUrl} isActive={active} handleClick={this.handleClick} onFilterButtonClick={this.props.openModal} onFilterClick={this.onFilterClick} />
      </aside>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => (dispatch(filterOperations.openModal()))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Aside));