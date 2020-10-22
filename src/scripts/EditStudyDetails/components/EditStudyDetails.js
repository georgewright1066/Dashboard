import React from 'react';
import { Formik } from 'formik';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import HttpService from '../../Dashboard/duck/HttpService';
import DropDown from "../../common/components/CoolDropdown";

class EditStudyDetailsForm extends React.Component {

  async getLanguageCode(option, setFieldValue) {
    const res = await HttpService.getLanguageList()
    const code = res.data.filter(item => item.description === option)

    setFieldValue('language_id', code[0].id)

  }



  render() {
    const { mediaLoading, environmentLoading, studyDetailsLoading, studyDetails, languageOptions } = this.props;
    if (environmentLoading || mediaLoading || studyDetailsLoading) {
      return (<LoadingSpinner />);
    }
    return (
      <Formik
        initialValues={
          {
            name: studyDetails.name,
            environment: studyDetails.environment,
            media: studyDetails.media,
            language_id: studyDetails.language ? {description: studyDetails.language, id: studyDetails.language_id} : '',
            objective: studyDetails.objective,
            decision_to_inform: studyDetails.decision_to_inform,
            demographic_survey_url: studyDetails.demographic_survey_url,
            demographic_survey_insert_parameter: studyDetails.demographic_survey_insert_parameter

          }}
        onSubmit={async (values, actions) => {

          try {
            const id = this.props.id
            if (typeof values.language_id === 'object') {
              values.language_id = values.language_id.id
            }
            await HttpService.postStudyDetailsEdit(id, values)
            actions.setSubmitting(false);
            this.props.onSubmit()
          }
          catch (err) {
            actions.setSubmitting(false);

            throw err
          }
        }}

        render={({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
            <>
            <h2>Edit Study Details</h2>
            <form className="csm__form" onSubmit={handleSubmit}>
              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="name">Name</label>
              </div>
              <input
                type="name"
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                id="name"
                value={values.name}
              />
              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="media">Media : {values.media}</label>
              </div>
              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="environment  ">Environment : {values.environment}</label>
              </div>
              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="language  ">Language</label>
              </div>
              <DropDown onSelectItem={(item) => setFieldValue('language_id', item)} lang={true} options={languageOptions} initalValue={values.language_id ? values.language_id.description : 'Select'}/>

              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="screenshotRedirect">Objective</label>
              </div>
              <input
                type="text"
                name="objective"
                onChange={handleChange}
                onBlur={handleBlur}
                id="objective"
                value={values.objective !== null ? values.objective : ''}

              />
              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="decision_to_inform">Decision to Inform</label>
              </div>
              <input
                type="text"
                name="decision_to_inform"
                onChange={handleChange}
                onBlur={handleBlur}
                id="decision_to_inform"
                value={values.decision_to_inform !== null ? values.decision_to_inform : ''}

              />
              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="demographic_survey_url">Demographic survey URL</label>
              </div>
              <input
                type="text"
                name="demographic_survey_url"
                onChange={handleChange}
                onBlur={handleBlur}
                id="objective"
                value={values.demographic_survey_url !== null ? values.demographic_survey_url : ''}

              />
              <div className="csm-modal-form-edit-delete__label-container">
                <label className="edit-audience__label" htmlFor="demographic_survey_insert_parameter">Demographic survey Insert Param</label>
              </div>
              <input
                type="text"
                name="demographic_survey_insert_parameter"
                onChange={handleChange}
                onBlur={handleBlur}
                id="decision_to_inform"
                value={values.demographic_survey_insert_parameter !== null ? values.demographic_survey_insert_parameter : ''}

              />

              <button className="button-primary my-details__button submit" type="submit" disabled={isSubmitting}>
                Update
            </button>
            </form>
                </>
          )}
      />
    );
  }
}

export default EditStudyDetailsForm;
