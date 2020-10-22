import { URL, AUTHENTICATED, AUTHENTICATION_ERROR,  FETCH_USER_DATA_BEGIN, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_ERROR } from '../constants';
import {getHeaders} from '../shared';
import axios from 'axios';


export function loginAttempt({username, password},history) {
    return async (dispatch) => {
      try {
        const res =  await axios.post(`${URL}/auth-token`, {username, password}, getHeaders())
        // dispatch(actions.submitFields('user', res));
        localStorage.setItem('user', res.data.token);
        dispatch({ type: AUTHENTICATED });
        history.push('/');


      }
      catch(error) {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid email or password'
        })
      }
    }
  }

  export function getUserData() {
    return async dispatch => {
      try {
        dispatch(fetchUserDataBegin());
        const res = await axios.get(`${URL}/user/get-details`, getHeaders());
        dispatch(fetchUserDataSuccess(res.data))
      }
      catch (err) {
        dispatch(fetchUserDataError(err))
      }
    }
  }

  export const fetchUserDataBegin = () => ({
    type: FETCH_USER_DATA_BEGIN
  });

  export const fetchUserDataSuccess = data => ({
    type: FETCH_USER_DATA_SUCCESS,
    payload: { data }
  });

  export const fetchUserDataError = error => ({
    type: FETCH_USER_DATA_ERROR,
    payload: { error }
  });
