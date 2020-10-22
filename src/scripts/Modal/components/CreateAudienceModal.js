import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import Button from '../../common/components/Button';
import { overviewOperations } from '../../Overview/duck/index';
import { connect } from 'react-redux';
import { string, object } from 'yup';



export class CreateAudienceModal extends React.Component {

  componentDidMount() {
    const { type, id, editPanelDetails, panelId } = this.props;
    if (type === 'EDIT') {
      editPanelDetails(panelId, id)
    } else {
      return false
    }
  }
  render() {
    const { modalOpen, closeModal, panelId, id, createPanel } = this.props;


    return (
      <Formik
        initialValues={
          {
            name: '',
            code: '',
            success_redirect_url: '',
            screenout_redirect_url: '',
            quota_full_redirect_url: '',
            participant_insert_parameter: '',
            id: panelId

          }}
        validationSchema={object().shape({
          name: string()
            .required('* required'),
          code: string()
            .required('* required'),
          success_redirect_url: string()
            .required('* required'),
          screenout_redirect_url: string()
            .required('* required'),
          quota_full_redirect_url: string()
            .required('* required'),
          participant_insert_parameter: string()
            .required('* required')

        })}
        onSubmit={async (values, actions) => {
          try {
            createPanel(id, values)
            closeModal()
            actions.setSubmitting(false);

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
            <div className={classNames('csm-modal-form ', { 'active': modalOpen })}>
              <h2>Create Panel</h2>
              <form className="csm__form" onSubmit={handleSubmit}>
                <Button
                    buttonClass={classNames('filter__exit-button', { 'active': modalOpen })}
                    handleClick={() => closeModal()}
                />
                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="name">Name</label>
                  <ErrorMessage name="name" component="div" className="invalid-feedback" />
                </div>
                <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="code">Code</label>
                  <ErrorMessage name="code" component="div" className="invalid-feedback" />
                </div>
                <Field name="code" type="text" className={'form-control' + (errors.code && touched.code ? ' is-invalid' : '')} />

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="success_redirect_url">Complete redirect</label>
                  <ErrorMessage name="success_redirect_url" component="div" className="invalid-feedback" />
                </div>
                <Field name="success_redirect_url" type="text" className={'form-control' + (errors.success_redirect_url && touched.success_redirect_url ? ' is-invalid' : '')} />

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="screenout_redirect_url">Disqualify redirect</label>
                  <ErrorMessage name="screenout_redirect_url" component="div" className="invalid-feedback" />
                </div>
                <Field name="screenout_redirect_url" type="text" className={'form-control' + (errors.screenout_redirect_url && touched.screenout_redirect_url ? ' is-invalid' : '')} />

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="quota_full_redirect_url">Overquota redirect</label>
                  <ErrorMessage name="quota_full_redirect_url" component="div" className="invalid-feedback" />
                </div>
                <Field name="quota_full_redirect_url" type="text" className={'form-control' + (errors.quota_full_redirect_url && touched.quota_full_redirect_url ? ' is-invalid' : '')} />

                <div className="csm-modal-form-edit-delete__label-container">
                  <label className="edit-audience__label" htmlFor="participant_insert_parameter">Parameter</label>
                  <ErrorMessage name="participant_insert_parameter" component="div" className="invalid-feedback" />
                </div>
                <Field name="participant_insert_parameter" type="text" className={'form-control' + (errors.participant_insert_parameter && touched.participant_insert_parameter ? ' is-invalid' : '')} />

                <button className="button-primary my-details__button" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            </div>
          )}
      />
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (id) => (dispatch(overviewOperations.closeModal(id))),
    createPanel: (id, data) => (dispatch(overviewOperations.createPanel(id, data))),
    editPanelDetails: (id, studyId) => (dispatch(overviewOperations.editPanelDetails(id, studyId))),
    getOverviewData: (id) => (dispatch(overviewOperations.getOverviewData(id))),


  };
};

const mapStateToProps = (state) => {
  return {
    modalOpen: state.overview.modalOpen,
    id: state.overview.id,
    panelOverview: state.overview.panelOverview,
    panelLoading: state.overview.panelLoading


  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateAudienceModal);

