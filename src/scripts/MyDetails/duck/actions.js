import types from './types';


const fetchUserDataBegin = () => ({
  type: types.FETCH_USER_DATA_BEGIN
});

const fetchUserDataSuccess = data => ({
  type: types.FETCH_USER_DATA_SUCCESS,
  payload: { data }
});

const fetchUserDataError = error => ({
  type: types.FETCH_USER_DATA_ERROR,
  payload: { error }
});

const authenticated= () => ({
  type: types.AUTHENTICATED
});

const unAuthenticated = () => ({
  type: types.UNAUTHENTICATED,
  payload: 'Invalid email or password'
});

const authenticationError = error => ({
  type: types.AUTHENTICATION_ERROR,
  payload: 'Invalid email or password'
});

export default {
  fetchUserDataBegin,
  fetchUserDataSuccess,
  fetchUserDataError,
  authenticated,
  unAuthenticated,
  authenticationError
};


