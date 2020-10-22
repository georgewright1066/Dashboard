import React from 'react';
import { Formik } from 'formik';



class EditAudienceForm extends React.Component {

  render() {
    const { loading, audienceData } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <Formik
        initialValues={
          {
            name: audienceData[0].name,
            code: audienceData[0].code,
            success_redirect_url: audienceData[0].success_redirect_url,
            screenout_redirect_url: audienceData[0].screenout_redirect_url,
            quota_full_redirect_url: audienceData[0].quota_full_redirect_url,
            participant_insert_parameter: audienceData[0].participant_insert_parameter,

          }}
        onSubmit={async (values, actions) => {
          try {
            // const updatedUser = await DataService.updateUserDetails(values)
            actions.setSubmitting(false);
            this.props.onSubmit()
          }
          catch (err) {
            actions.setSubmitting(false);
          }
        }}

        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
            <form className="my-details__form edit-audience" onSubmit={handleSubmit}>
              <h2>Audience Definition</h2>
              <label className="edit-audience__label" htmlFor="name">Panel Name</label>
              <input
                type="name"
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                id="name"
                value={values.name}
              />
              {errors.email &&
                touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              <label className="edit-audience__label" htmlFor="code">Code</label>
              <input
                type="text"
                name="code"
                onChange={handleChange}
                onBlur={handleBlur}
                id="code"
                value={values.code}
              />
              <label className="edit-audience__label" htmlFor="success_redirect_url">Success Redirect URl</label>
              <input
                type="text"
                name="success_redirect_url"
                onChange={handleChange}
                onBlur={handleBlur}
                id="success_redirect_url"
                value={values.success_redirect_url}


              />
              <label className="edit-audience__label" htmlFor="screenout_redirect_url">Screenshot Redirect Url</label>

              <input
                type="text"
                name="screenout_redirect_url"
                onChange={handleChange}
                onBlur={handleBlur}
                id="screenout_redirect_url"
                value={values.screenout_redirect_url}


              />
              <label className="edit-audience__label" htmlFor="quota_full_redirect_url">Question Poll Redirect URL</label>
              <input
                type="text"
                name="quota_full_redirect_url"
                onChange={handleChange}
                onBlur={handleBlur}
                id="quota_full_redirect_url"
                value={values.quota_full_redirect_url}

              />
              <label className="edit-audience__label" htmlFor="participant_insert_parameter">Participant Insert Parameter</label>
              <input
                type="text"
                name="participant_insert_parameter"
                onChange={handleChange}
                onBlur={handleBlur}
                id="participant_insert_parameter"
                value={values.decision_to_inform !== null ? values.decision_to_inform : ''}


              />
              <button className="button-primary my-details__button" type="submit" disabled={isSubmitting}>
                Update
            </button>
            </form>
          )}
      />
    );
  }
}

export default EditAudienceForm;


