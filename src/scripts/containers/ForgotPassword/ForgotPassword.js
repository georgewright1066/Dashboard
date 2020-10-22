import React from 'react';
import { Control, Form } from 'react-redux-form';
import logo from '../../../assets/images/lumen-logo.svg';


class ForgotPassword extends React.Component {
  handleSubmit(recoverPassword) {
    console.log(recoverPassword)

  }

  render() {
    return (
      <div className="login">
        <div className="login__image-container">
          <img src={logo} alt="logo" />
        </div>
        <Form
          model="forms.recoverPassword"
          onSubmit={(recoverPassword) => this.handleSubmit(recoverPassword)}
          className="my-details__form"
        >
          <h2>Forgot your password?</h2>
          <label htmlFor="recoverPassword.email">E-mail</label>
          <Control.text model="recoverPassword.email" id="recoverPassword.email" />

          <button className="button-primary" type="submit">
            Recover Password
          </button>
        </Form>

      </div>
    );
  }
}

export default ForgotPassword;
