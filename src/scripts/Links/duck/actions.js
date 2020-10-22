import types from './types.js';

const fetchLinksBegin = () => ({
  type: types.FETCH_LINKS_BEGIN
});

const fetchLinksSuccess = data => ({
  type: types.FETCH_LINKS_SUCCESS,
  payload: data
});

const fetchLinksError = error => ({
  type: types.FETCH_LINKS_ERROR,
  payload: { error }
});


export default {

  fetchLinksBegin,
  fetchLinksSuccess,
  fetchLinksError,



};


