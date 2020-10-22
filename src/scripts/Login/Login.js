import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { string, object } from 'yup';
import logo from '../../assets/images/lumen-logo.svg';
import FootNote from './components/FootNote';
import { userOperations } from '../MyDetails/duck/index';
import { withRouter } from 'react-router-dom';

export class Login extends React.Component {

  render() {

    return (
      <Formik
        initialValues={
          {
            username: '',
            password: '',


          }}
        validationSchema={object().shape({
          username: string()
            .required('* required'),
          password: string()
            .required('* required'),

        })}
        onSubmit={async (values, actions) => {
          try {
            this.props.login(values.username, values.password, this.props.history);

          }
          catch (err) {
          }
        }}

        render={({
          handleSubmit,
          isSubmitting,
          errors,
          touched
        }) => (
            <div className="login">
              <div className="login__image-container">
                <img src={logo} alt="logo" />
              </div>

              <Form className="my-details__form edit-audience" onSubmit={handleSubmit}>
                <h2>Sign in</h2>

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="username">Username</label>
                  <ErrorMessage name="username" component="div" className="invalid-feedback" />
                </div>
                <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} data-testid="username" />

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="code">Password</label>
                  <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} data-testid="password" />

                <button className="button-primary my-details__button" type="submit" disabled={isSubmitting} data-testid="loginButton">
                  Submit
            </button>
              </Form>
              <FootNote route="/forgot_password" copy="I forgot my password" />
              <FootNote route="/contact_us" copy="Request login" />
            </div>
          )}
      />
    );
  }
}




const mapStateToProps = (state) => {
  return {
    errorMessage: state.userData.error
  };
};
const mapDispatchToProps = dispatch => ({
  login: (username, password, history) => dispatch(userOperations.loginAttempt(username, password, history))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

