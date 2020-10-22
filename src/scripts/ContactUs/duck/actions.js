import types from './types.js';

const sendContactFormError = error => ({
  type: types.SEND_CONTACT_FORM_ERROR,
  payload: { error }
});

const sendContactFormSuccess = () => ({
  type: types.SEND_CONTACT_FORM_SUCCESS,
  payload: 'Success'
});


export default {
  sendContactFormSuccess,
  sendContactFormError
};


