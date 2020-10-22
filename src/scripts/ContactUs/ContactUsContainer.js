import React from 'react';
import { Control, Form, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import {contactFormOperations} from './duck/index';
import {  withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class ContactUs extends React.Component {
  handleSubmit({message}) {
    this.props.sendContactMessage({message});
  }

  errorMessage() {
    if (this.props.success) {
      return (
        <div className="info-green">
          {this.props.success}
        </div>
      );
    }
  }

  componentDidUpdate() {
    this.props.clearValues();
  }


  render() {
    return (
      <div className="login">
        <Form
          model="forms.contactUs"
          onSubmit={(contactUs) => this.handleSubmit(contactUs)}
          className="my-details__form"
        >
          <h2>Contact Us</h2>
          <label htmlFor="contactUs.email">E-mail</label>
          <Control.text model="contactUs.email" id="contactUs.email"
          />
          <label htmlFor="contactUs.message">Message</label>
          <Control.textarea model="contactUs.message" id="contactUs.message" className="text-area" />

          <button className="button-primary" type="submit">
            Submit
          </button>
        </Form>
        {this.errorMessage()}
      </div>
    );
  }
}

ContactUs.propTypes = {
  sendContactMessage: PropTypes.func,
  clearValues: PropTypes.func,
  success: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    success: state.contactUsReducer.success
  };
};
const mapDispatchToProps = dispatch => ({
  sendContactMessage: (userMessage) => dispatch(contactFormOperations.sendContactMessage(userMessage)),
  clearValues: () => dispatch(actions.reset('contactUs'))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactUs));


