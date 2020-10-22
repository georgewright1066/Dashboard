import React from 'react';
import { Formik } from 'formik';
import DataService from '../common/services/dataService';


class EditUserDialog extends React.Component {

  render() {
    const { loading, username } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Formik
        initialValues={
          {
            email: username.email,
            username: username.username,
            first_name: username.first_name,
              last_name: username.last_name,
              job_title: username.job_title,
            location: username.location,
              phone_number: username.phone_number

          }}
        onSubmit={async (values, actions) => {
          try {
            await DataService.updateUserDetails(values)
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
          username
        }) => (
            <form className="my-details__form" onSubmit={handleSubmit}>
              <h2>{values.username}</h2>
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                value={values.email !== null ? values.email : ''}

              />
              {errors.email &&
                touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                onChange={handleChange}
                onBlur={handleBlur}
                id="first_name"
                value={values.first_name !== null ? values.first_name : ''}

              />
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                onChange={handleChange}
                onBlur={handleBlur}
                id="last_name"
                value={values.last_name !== null ? values.last_name : ''}



              />
              <label htmlFor="job_title">Job Title</label>

              <input
                type="text"
                name="job_title"
                onChange={handleChange}
                onBlur={handleBlur}
                id="job_title"
                value={values.job_title !== null ? values.job_title : ''}


              />
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                onChange={handleChange}
                onBlur={handleBlur}
                id="phone_number"
                value={values.phone_number !== null ? values.phone_number : ''}

              />
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                id="location"
                value={values.location !== null ? values.location : ''}


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

export default EditUserDialog;


