import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import Button from '../../common/components/Button';
import { string, object } from 'yup';

export default class AddNewCellInputs extends React.Component {

  handleSubmit = (values, {
    props = this.props,
    setSubmitting
  }) => {
    this.props.onAddCellSubmit(values.shortName, values.value)
    setSubmitting(false);
    return;
  }


  render() {

    return (
      <Formik
        initialValues={{
          value: '',
          shortName: '',
        }}
        validationSchema={object().shape({
          value: string()
            .required('* required'),
          shortName: string()
            .required('* required'),

        })}

        onSubmit={async (values, actions) => {
          try {
            this.props.onAddCellSubmit(values.shortName, values.value)
            actions.setSubmitting(false);
            values.value = '';
            values.shortName = '';

          }
          catch (err) {
          }
        }}
        render={formProps => {
          return (
            <Form className={classNames('csm__add-cell-form ', { 'active': this.props.active })} onSubmit={formProps.handleSubmit}>
              <h3>Enter Cell Name</h3>

              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="value">Long Name</label>
                <ErrorMessage name="value" component="div" className="invalid-feedback" />
              </div>
              <Field name="value" type="text" className={'form-control' + (formProps.errors.value && formProps.touched.value ? ' is-invalid' : '')} />

              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="shortName">Short Name</label>
                <ErrorMessage name="shortName" component="div" className="invalid-feedback" />
              </div>
              <Field name="shortName" type="text" className={'form-control' + (formProps.errors.shortName && formProps.touched.shortName ? ' is-invalid' : '')} />


              <div className="csm__add-cell-form--button-container">
                <button
                  type="submit"
                  className="button-primary csm__button-add-cell"
                  disabled={formProps.isSubmitting}>
                  Submit Form
                 </button>
                <Button buttonClass="button-primary cancel" handleClick={this.props.onCancelClick} text="Cancel" />
              </div>
            </Form>
          );
        }}
      />);
  }
}



