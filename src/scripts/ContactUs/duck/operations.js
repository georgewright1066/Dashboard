import axios from 'axios';
import { actions } from 'react-redux-form';
import { getHeaders } from '../../common/shared';
import { URL } from '../../common/constants';
import Creators from './actions';
const sendContactFormSuccess = Creators.sendContactFormSuccess
const sendContactFormError = Creators.sendContactFormError

const sendContactMessage =(message) => {
  return async (dispatch) => {
    try {
      const res =  await axios.post(`${URL}/dashboard-feedback`, message , getHeaders())
      dispatch(sendContactFormSuccess());
      dispatch(actions.submitFields('contactUs', res));
      dispatch(actions.reset('forms.contactUs'));
    }
    catch(error) {
      dispatch(sendContactFormError())
    }
  }
}

  export default  {
    sendContactFormSuccess,
    sendContactFormError,
    sendContactMessage

  }
