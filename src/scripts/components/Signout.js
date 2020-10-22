import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Signout extends Component {

  componentDidMount() {
    const { history } = this.props
    localStorage.clear();
    history.push('/login')
    window.location.reload(true);

  }



  render() {
    return (
      <h2>You are logged out</h2>
    );
  }
}

;
export default withRouter(Signout);
