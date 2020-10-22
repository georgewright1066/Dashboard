import React, { Component } from 'react';
import classNames from 'classnames';
// import DropDown from '../../common/components/PrettyDropdown';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { string, object, number } from 'yup';
import Button from '../../components/Button';
// import LoadingSpinner from '../../common/components/LoadingSpinner';
import PrettyDropDown from "../../common/components/PrettyDropdown";

class Modal extends Component {

  state = {
    value: '',
    environment: '',
    media: '',
    study: ''
  }

  onAddNewStudySubmit = () => {
    const { value } = this.state;
    this.props.onAddNewStudySubmit({ value });
    this.setState({ value: '' })
  }

  onSelectItem = (item) => {
    const environment = this.props.environmentData.data.filter(data => data.description === item);
    this.setState({ environment: environment })

  }

  onSelectMediaItem = (item) => {
    const media = this.props.mediaData.data.filter(data => data.description === item);
    this.setState({ media: media })

  }

  onSelectStudyItem = (item) => {
    const study = this.props.studyType.data.filter(data => data.description === item);
    this.setState({ study: study })
  }


  onSelectLanguageItem = (item) => {
    const language = this.props.languageTypes.data.filter(data => data.description === item);
    this.setState({ language: language[0].id })

  }

  errorMessage() {
    return <h3>All fields are required</h3>
  }

  render() {
    const { active, closeModal, loading, environmentData, onAddNewStudySubmit, mediaData, studyType, languageTypes } = this.props;

    if (loading) {
      return <h1 className="hidden">dashboard</h1>
    }
    return (
      <Formik
        initialValues={
          {
            name: '',
            cells: '',
            panelSize: '',
            environment: '',
            media: '',
            error: false
          }}
        validationSchema={object().shape({
          name: string()
            .required('* required'),
          cells: number()
            .typeError('* Must be a Number'),
          panelSize: number()
            .typeError('* Must be a Number'),




        })}
        onSubmit={async (values, actions) => {
          if (!this.state.environment[0] || !this.state.media[0] || !this.state.study[0] || !this.state.language) {
            this.setState({ error: true })
          } else {

            try {
              onAddNewStudySubmit(values.name, values.cells, values.panelSize, this.state.environment[0], this.state.media[0], this.state.study[0], this.state.language);
              closeModal()
              this.setState({ error: false })
              actions.setSubmitting(false);

            }
            catch (err) {
            }
          }
        }}

        render={({
          handleSubmit,
          errors,
          touched
        }) => (
            <div className={classNames('csm-modal-form add-new-study  ', { 'active': active })}>
                <h2>Create Study</h2>
                <div className="csm__form">
              <Button
                buttonClass={classNames('filter__exit-button', { 'active': active })}
                handleClick={() => closeModal()}
              />
              <div className="csm-modal-form__dropdown-container top">
                <h4>Select Environment type</h4>
                <PrettyDropDown onSelectItem={this.onSelectItem} value="Select" options={environmentData.data.map(item => item.description)} />
              </div>
              <div className="csm-modal-form__dropdown-container">
                <h4>Select Media type</h4>
                <PrettyDropDown onSelectItem={this.onSelectMediaItem} value="Select" options={mediaData.data.map(item => item.description)} />
              </div>
              <div className="csm-modal-form__dropdown-container">
                <h4>Select Study type</h4>
                <PrettyDropDown onSelectItem={this.onSelectStudyItem} value="Select" options={studyType.data.map(item => item.description)} />
              </div>
              <div className="csm-modal-form__dropdown-container">
                <h4>Select Language</h4>
                <PrettyDropDown onSelectItem={this.onSelectLanguageItem} value="Select" options={languageTypes.data.map(item => item.description)} />
              </div>
              {this.state.error ? this.errorMessage() : null}
              <Form className="" onSubmit={handleSubmit}>

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="name">Name</label>
                  <ErrorMessage name="name" component="div" className="invalid-feedback white" />
                </div>
                <Field name="name" placeholder="Enter study name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="cells">Number of Cells</label>
                  <ErrorMessage name="cells" component="div" className="invalid-feedback white" />
                </div>
                <Field name="cells" placeholder="Enter number of cells" type="text" className={'form-control' + (errors.cells && touched.cells ? ' is-invalid' : '')} />

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="pamelSize">Panel Size</label>
                  <ErrorMessage name="panelSize" component="div" className="invalid-feedback white" />
                </div>
                <Field name="panelSize" placeholder="Enter study panel size" type="text" className={'form-control' + (errors.panelSize && touched.panelSize ? ' is-invalid' : '')} />

                <button className="button-primary my-details__button" type="submit" >
                  Create Study
               </button>
              </Form>
                </div>
            </div>
          )}
      />
    );
  }
}

export default Modal;

