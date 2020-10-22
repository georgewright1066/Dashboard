import Creators from './actions';
import DataService from '../../common/services/dataService';
import { actions } from 'react-redux-form';


const fetchUserDataBegin = Creators.fetchUserDataBegin
const fetchUserDataSuccess = Creators.fetchUserDataSuccess
const fetchUserDataError = Creators.fetchUserDataError;
const authenticated = Creators.authenticated
const unAuthenticated = Creators.unAuthenticated
const authenticationError = Creators.authenticationError;

const loginAttempt = (username, password, history) => {
  return async (dispatch) => {
    try {
      const res = await DataService.loginAttempt(username, password);
      // dispatch(actions.submitFields('user', res));
      localStorage.setItem('user', res.data.token);
      dispatch(authenticated());
      const userDetailsRes = await DataService.getUserData();
      localStorage.setItem('userType', userDetailsRes.data.user_type_id);

      history.push('/');
    }
    catch (error) {
      dispatch(authenticationError())
    }
  }
}

const getUserData = () => {
  return async dispatch => {
    try {
      dispatch(fetchUserDataBegin());
      const res = await DataService.getUserData();
      dispatch(fetchUserDataSuccess(res.data))
    }
    catch (err) {
      dispatch(fetchUserDataError(err))
      throw err

    }
  }
}


const updateUserDetails = ({ first_name, last_name, location, email, job_title, phone_number }) => {
  return async dispatch => {
    try {
      await DataService.updateUserDetails({ first_name, last_name, location, email, job_title, phone_number });
      dispatch(actions.change('user', { first_name: first_name }))
    }
    catch (err) {
      throw err
    }
  }
}


export default {
  fetchUserDataBegin,
  fetchUserDataSuccess,
  fetchUserDataError,
  loginAttempt,
  getUserData,
  authenticated,
  unAuthenticated,
  authenticationError,
  updateUserDetails
}
