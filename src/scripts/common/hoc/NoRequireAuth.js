import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    constructor(props) {
      super(props);
      this.body = document.body;
    }

    componentWillUnmount() {
      this.body.classList.remove('login');
    }

    componentDidMount() {
      this.body.classList.add('login');

      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentDidUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: state.userData.authenticated }
    };

  return connect(mapStateToProps)(NotAuthentication);
}

